# Generated by Django 4.0.6 on 2022-07-26 04:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0002_category_created_at_category_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='description',
            field=models.CharField(default='Enter Desc', max_length=200),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(default='Enter name', max_length=50),
        ),
    ]