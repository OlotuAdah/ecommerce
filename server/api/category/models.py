from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50, default='Enter name')
    description = models.CharField(max_length=200, default="Enter Desc")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
