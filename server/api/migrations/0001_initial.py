from django.db import migrations

from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="Adah", email="adaholotu@gmail.com", is_staff=True, is_superuser=True,
                          phone="07017775957", gender="Male")
        user.set_password("123456")
        user.save()

    # add values if this migration depends on previous migrations, else leave it empty
    dependencies = []

    # What operations do you want to perform
    operations = [migrations.RunPython(seed_data), ]
