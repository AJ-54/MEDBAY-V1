# Generated by Django 3.1.3 on 2020-12-07 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0010_auto_20201120_2052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='C:\\\\Users\\\\jayit\\\\Downloads\\\\medbay\\\\AI DIET PLANNER Microservice\\\\media\\\\website\\\\images\\\\avtar.png', upload_to='website/images'),
        ),
    ]
