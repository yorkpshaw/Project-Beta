# Generated by Django 4.0.3 on 2022-10-25 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0007_rename_vin_new_appointment_vin_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]
