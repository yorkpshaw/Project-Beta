# Generated by Django 4.0.3 on 2022-10-25 19:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_remove_automobilevo_import_href_automobilevo_color_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='vin_new',
            new_name='vin_customer',
        ),
    ]
