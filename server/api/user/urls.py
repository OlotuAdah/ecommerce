from rest_framework import routers
from django.urls import path, include

from .views import sign_in, sign_out, UserViewSet

router = routers.DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    path('login/', sign_in, name='signin'),
    path('<int:id>/logout/', sign_out, name='sign_out'),
    path('', include(router.urls))
]
