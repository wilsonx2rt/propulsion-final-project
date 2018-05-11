from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()


class MasterTestWrapper:
    class MasterTests(APITestCase):

        endpoint = None
        methods = []
        kwargs = {}

        def get_url(self, *args, **kwargs):
            return reverse(self.endpoint, args=args, kwargs=kwargs)

        def get_kwargs(self):
            return self.kwargs

        def authorize_user(self):
            self.client.credentials(HTTP_AUTHORIZATION="Bearer {}".
                                    format(self.access_token))
            return self.user

        def setUp(self):
            self.user = User.objects.create_user(
                username="user",
                password="password"
            )
            self.refresh = RefreshToken.for_user(self.user)
            self.access_token = self.refresh.access_token
            self.posts = []
            self.users = []
            for i in range(2):
                self.users.append(
                    User.objects.create_user(
                        username="user{}".format(i),
                        password="password",
                    )
                )

        def get_responses(self, url):
            responses = []
            for m in self.methods:
                method = getattr(self.client, m.lower())
                responses.append(method(url))
                return responses

        def test_unauthorized_request(self):
            url = self.get_url(**self.get_kwargs())
            for response in self.get_responses(url):
                if response:
                    self.assertEqual(
                        response.status_code,
                        status.HTTP_401_UNAUTHORIZED
                    )
