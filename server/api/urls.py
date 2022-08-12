from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token  # not used yet
from .views import home

urlpatterns = [
    path('', home, name='api.home'),
    path('category/', include('api.category.urls')),
    path('product/', include('api.product.urls')),
    path('user/', include('api.user.urls')),
    path('order/', include('api.order.urls')),
    path('payment/', include('api.payment.urls')),
    path('api-token-auth/', obtain_auth_token, name="api-token-auth")  # may be handy in getting user token
]
