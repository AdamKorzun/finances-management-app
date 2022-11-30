# Generated by Django 4.1.3 on 2022-11-30 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallets', '0005_remove_currency_icon_alter_currency_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='amount',
            field=models.DecimalField(decimal_places=10, max_digits=30),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='balance',
            field=models.DecimalField(decimal_places=10, max_digits=30),
        ),
        migrations.AlterField(
            model_name='wallet',
            name='goal',
            field=models.DecimalField(blank=True, decimal_places=10, default=None, max_digits=30, null=True),
        ),
    ]
