from rest_framework.test import APITestCase


class FirstTrialTest(APITestCase):
    testLine = 'This is the first test'

    def test_testLine(self):
        self.assertEqual(self.testLine, 'This is the first test')
