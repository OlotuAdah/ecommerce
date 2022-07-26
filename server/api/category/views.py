from rest_framework import viewsets
from .serializer import CategorySerializer
from .models import Category


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')  # create query
    serializer_class = CategorySerializer



