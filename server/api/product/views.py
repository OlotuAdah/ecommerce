# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('updated_at')
    serializer_class = ProductSerializer
