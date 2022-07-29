from rest_framework import routers
from django.urls import path, include

from . import views

router = routers.DefaultRouter()
router.register(r'', views.UserViewSet)

urlpatterns = [
    path('login/', views.sign_in, name='signin'),
    path('logout/<int:id>', views.sign_out, name='signout'),
    path('', include(router.urls))
]
