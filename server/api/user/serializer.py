from rest_framework import serializers

from django.contrib.auth.hashers import make_password
from rest_framework.decorators import authentication_classes, permission_classes

from .models import CustomUser


class UserSerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # ** used to unpack to key, value pair (dict)

        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        for attribute, value in validated_data.items():
            if attribute == 'password':
                # use this because you can use setattr to update password
                instance.set_password(value)
            else:
                # every other items aside, password set same value on instance
                setattr(instance, attribute, value)
        instance.save()
        return instance

    class Meta:
        model = CustomUser
        extra_kwargs = {'password': {'write_only': True}}
        # NB: Some fields below set for serializations comes from
        # the parent (AbstractUser) class inherited in CustomUser. e.g. is_active
        fields = ('name', 'email', 'password', 'phone', 'gender', 'is_active', 'is_staff', 'is_superuser')
