from django.contrib.auth import get_user_model
from django.core import mail
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

User = get_user_model()


class RegistrationViewTest(APITestCase):

    def setUp(self):
        self.new_user = User.objects.create_user(
            username="some_email@gmail.com",
            email="some_email@gmail.com",
            is_active=False,
        )

    def test_registration(self):
        url = reverse('api:registration:registration')
        data = {"email": "new_user@gmail.com"}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        full_data = {
            "email": "new_user@gmail.com",
            "first_name": "John",
            "last_name": "Smith",
            # "abreviation": "JS"
        }
        response = self.client.post(url, full_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        num_users = User.objects.count()
        self.assertEquals(num_users, 2)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Registration')
        self.assertEqual(len(mail.outbox[0].body), 116)

    def test_registration_existing_user(self):
        url = reverse('api:registration:registration')
        data = {"email": "some_email@gmail.com"}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["email"][0], "User with such email already exists!")


class RegistrationValidationViewTest(APITestCase):

    def setUp(self):
        self.new_user = User.objects.create_user(
            username="new_user@gmail.com",
            email="new_user@gmail.com",
            is_active=False,
        )

    def test_registration_validation(self):
        url = reverse('api:registration:validation')
        data = {
            "email": "new_user@gmail.com",
            "code": self.new_user.user_profile.code,
            "password": "password",
            "password_repeat": "password",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        new_user = User.objects.get(username="new_user@gmail.com")
        self.assertEqual(new_user.is_active, True)
        self.assertEqual(new_user.user_profile.isAdmin, False)

    def test_wrong_validation_code(self):
        url = reverse('api:registration:validation')
        data = {
            "email": "new_user@gmail.com",
            "code": "12345",
            "password": "password",
            "password_repeat": "password",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["code"][0], "Wrong validation code or already validated!")

    def test_passwords_not_matching(self):
        url = reverse('api:registration:validation')
        data = {
            "email": "new_user@gmail.com",
            "code": "12345",
            "password": "password",
            "password_repeat": "123",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["password_repeat"][0], "Passwords do not match!")
