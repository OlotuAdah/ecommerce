from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .serializer import UserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model

from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import login, logout

import random
import re


def generate_session_token(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97, 123)] +
                                                [str(i) for i in range(10)]) for _ in range(length))


# NB: Decorator is used here to make modification to library code from client code
@csrf_exempt  # allow sign in from other origins aside this one
def sign_in(request):
    if request.method is not 'POST':
        return JsonResponse({'error': 'Send a POST request with valid parameters'})

    username = request.POST['email']
    password = request.POST['password']

    # VALIDATING SUPPLIED DATA
    if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", username):
        return JsonResponse({'error': "Email is not valid!"})
    if len(password) < 6:
        return JsonResponse({'error': "Password must be at least 6 characters long!"})
    UserModel = get_user_model()  # the model grabbed is based on the email which django internally refer to as username

    try:
        # Using the UserModel, return the specific user with email as username
        user = UserModel.objects.get(email=username)
        if not user.check_password(password):  # password is not correct
            return JsonResponse({'error': 'Password is not correct!'})
        user_dict = UserModel.objects.filter(email=username).values().first()
        user_dict.pop('password')

        if user.session_token is not "0":
            user.session_token = "0"
            user.save()
            return JsonResponse({'msg': 'Already logged in!'})

        token = generate_session_token(10)
        user.session_token = token
        user.save()
        login(request, user)  # django now completes the login process
        return JsonResponse({'token': token, 'user': user_dict})

    except UserModel.DoesNotExist:
        # django could not grab a user with the supplied email
        return JsonResponse({'error': 'No account found with this email!'})


def sign_out(request, id):
    logout(request)
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(pk=id)  # id will be captured via the request url
        user.session_token = "0"
        user.save()
    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid user id'})
    # In any case
    return JsonResponse({'success': 'Logout Successful!'})


class UserViewSet(viewsets.ModelViewSet):
    # provide a list of diff perm levels in perm classes
    permission_classes_by_action = {'create': [AllowAny]}  # if a user creates an account give him AllowAny perm

    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_class]
