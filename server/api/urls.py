from django.urls import path, include
from rest_framework import views
from .views import home

urlpatterns = [
    path('', home, name='api.home'),
    path('category/', include('api.category.urls'), name="category"),
    path('product/', include('api.product.urls'), name="product"),
    path('user/', include('api.user.urls'), name="user")
]
