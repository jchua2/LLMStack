# Generated by Django 4.2.11 on 2024-04-03 23:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiabstractor', '0005_alter_runentry_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='share',
            name='api_backend',
        ),
        migrations.RemoveField(
            model_name='share',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='share',
            name='response',
        ),
        migrations.RemoveField(
            model_name='share',
            name='tags',
        ),
        migrations.DeleteModel(
            name='PromptHub',
        ),
        migrations.DeleteModel(
            name='Share',
        ),
    ]
