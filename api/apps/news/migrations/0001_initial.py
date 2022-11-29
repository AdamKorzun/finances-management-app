# Generated by Django 4.1.3 on 2022-11-23 19:22

import django.contrib.postgres.fields
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewsIndustry',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('industry', models.CharField(max_length=32, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='NewsFilter',
            fields=[
                ('user_id', models.CharField(max_length=64, primary_key=True, serialize=False, unique=True)),
                ('symbols', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=10), default=list, size=None)),
                ('industries', models.ManyToManyField(blank=True, db_table='news_filter_industries', to='news.newsindustry')),
            ],
        ),
    ]