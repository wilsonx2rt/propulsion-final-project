from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage
from rest_framework import serializers

from project.user.models import UserProfile

User = get_user_model()


class RegistrationSerializer(serializers.Serializer):
    first_name = serializers.CharField(
        label='PM first name'
    )
    last_name = serializers.CharField(
        label='PM last name'
    )
    # abreviation = serializers.CharField(
    #     label='PM abreviation'
    # )
    email = serializers.EmailField(
        label='Registration E-Mail Address'
    )

    # def validate_abreviation(self, abreviation):
    #     try:
    #         UserProfile.objects.get(abreviation=abreviation)
    #         raise serializers.ValidationError('User with such initials already exists')
    #     except UserProfile.DoesNotExist:
    #         return abreviation

    def validate_email(self, email):
        try:
            User.objects.get(email=email)
            raise serializers.ValidationError('User with such email already exists!')
        except User.DoesNotExist:
            return email

    @staticmethod
    def send_registration_email(email, code):
        message = EmailMessage(
            subject='Registration',
            body=f'This is your registration link =>> http://forecastingtool.propulsion-learn.ch/registration/'
                 f'validation?email={email}&validation?code={code}',
            to=[email],
        )
        message.send()

    def save(self, validated_data):
        email = validated_data.get('email')
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')
        new_user = User.objects.create_user(
            username=email,
            email=email,
            first_name=first_name,
            last_name=last_name,
            is_active=False,
        )
        new_user_profile = UserProfile.objects.get(user=new_user)
        new_user_profile.abreviation = validated_data.get('abreviation')
        new_user_profile.save()
        self.send_registration_email(
            email=email,
            code=new_user.user_profile.code,
        )
        return new_user


class RegistrationValidationSerializer(serializers.Serializer):
    email = serializers.EmailField(
        label='Email',
    )
    code = serializers.CharField(
        label='Validation code',
        write_only=True,
    )
    password = serializers.CharField(
        label='password',
        write_only=True,
    )
    password_repeat = serializers.CharField(
        label='password',
        write_only=True,
    )

    def validate_email(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError('User does not exist! Please check entered email.')

    def validate(self, data):
        user = data.get('email')
        if data.get('password') != data.get('password_repeat'):
            raise serializers.ValidationError({
                'password_repeat': 'Passwords do not match!'
            })
        if data.get('code') != user.user_profile.code or user.is_active:
            raise serializers.ValidationError({
                'code': 'Wrong validation code or already validated!'
            })
        return data

    def save(self, validated_data):
        user = validated_data.get('email')
        user.is_active = True
        user.set_password(validated_data.get('password'))
        user.save()
        return user
