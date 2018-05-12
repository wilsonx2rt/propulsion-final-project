from django.contrib.auth import get_user_model
from django.core import mail
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

User = get_user_model()


class PasswordResetView(APITestCase):

    def setUp(self):
        super().setUp()
        self.new_user = User.objects.create_user(
            username="new_user@gmail.com",
            email="new_user@gmail.com",
            is_active=True,
        )
        self.new_user.user_profile.code = "12345"

    def test_reset_password(self):
        url = reverse("api:auth:password-reset")
        data = {
            "email": "new_user@gmail.com"
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Password reset request')
        self.assertEqual(len(mail.outbox[0].body), 155)

    def test_not_existing_user_pw_reset(self):
        url = reverse("api:auth:password-reset")
        data = {
            "email": "some_email@gmail.com"
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["email"][0], "User with this email address does not exist.")


class PasswordResetValidationViewTest(APITestCase):

    def setUp(self):
        super().setUp()
        self.new_user = User.objects.create_user(
            username="new_user@gmail.com",
            email="new_user@gmail.com",
            is_active=True,
        )

    def test_reset_pw_validation(self):
        url = reverse("api:auth:password-reset-validation")
        data = {
            "code": self.new_user.user_profile.code,
            "password": "password",
            "password_repeat": "password",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_reset_pw_validation_wrong_code(self):
        url = reverse("api:auth:password-reset-validation")
        data = {
            "code": "1",
            "password": "password",
            "password_repeat": "password",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["code"][0], "Wrong validation code!")

    def test_reset_pw_not_matching(self):
        url = reverse("api:auth:password-reset-validation")
        data = {
            "code": self.new_user.user_profile.code,
            "password": "password",
            "password_repeat": "pasword",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["password_repeat"][0], "Passwords do not match!")
