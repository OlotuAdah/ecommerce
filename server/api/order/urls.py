from django.urls import path, include
from rest_framework import routers
from .views import OrderViewSet, add_user_supplied_details

router = routers.DefaultRouter()
router.register(r'', OrderViewSet)  # /category

urlpatterns = [
    path('add/<str:id>/<str:token>/', add_user_supplied_details, name="order.add"),
    path('', include(router.urls))
]
