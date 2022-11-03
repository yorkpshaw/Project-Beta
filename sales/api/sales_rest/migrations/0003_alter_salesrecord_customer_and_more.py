# Generated by Django 4.0.3 on 2022-11-01 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_salesrecord_automobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salesrecords', to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='salesperson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salesrecords', to='sales_rest.salesperson'),
        ),
    ]
