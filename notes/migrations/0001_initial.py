# Generated by Django 3.0.3 on 2020-02-15 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Enter the title for your note.', max_length=200)),
                ('body', models.CharField(help_text='Enter the body for your note.', max_length=600)),
            ],
        ),
    ]
