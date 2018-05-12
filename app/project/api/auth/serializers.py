from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage
from rest_framework import serializers

User = get_user_model()


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField(
        label="E-Mail address"
    )

    def validate_email(self, value):
        try:
            user = User.objects.get(email=value)
            return user
        except User.DoesNotExist:
            raise serializers.ValidationError(
                "User with this email address does not exist."
            )

    @staticmethod
    def send_password_reset_email(email, code):
        message = EmailMessage(
            subject="Password reset request",
            body=f"This is your link to reset a password =>> http://forecastingtool.propulsion-learn.ch/registration/"
                 f"validation?email={email}&validation?code={code}",
            to=[email],
        )
        message.send()

    def save(self, validated_data):
        user = validated_data.get('email')
        user.user_profile.generate_new_code()
        self.send_password_reset_email(
            email=user.email,
            code=user.user_profile.code,
        )
        return user


class PasswordResetValidationSerializer(serializers.Serializer):
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

    def validate(self, data):
        if data.get('password') != data.get('password_repeat'):
            raise serializers.ValidationError({
                'password_repeat': 'Passwords do not match!'
            })
        return data

    def validate_code(self, value):
        try:
            return User.objects.get(
                user_profile__code=value,
            )
        except User.DoesNotExist:
            raise serializers.ValidationError(
                'Wrong validation code!'
            )

    def save(self, validated_data):
        user = validated_data.get('code')
        user.set_password(validated_data.get('password'))
        user.save()
        return user
