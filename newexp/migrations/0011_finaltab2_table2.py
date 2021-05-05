# Generated by Django 3.0.3 on 2021-04-30 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newexp', '0010_auto_20210425_1811'),
    ]

    operations = [
        migrations.CreateModel(
            name='FinalTab2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.TextField()),
                ('sentence_id', models.TextField()),
                ('correct_answer', models.TextField()),
                ('valuation', models.TextField()),
                ('paragraph', models.TextField()),
                ('exp_number', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Table2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exp_set', models.TextField()),
                ('list_id', models.TextField()),
                ('sentence', models.TextField()),
                ('answer', models.TextField()),
                ('lemma', models.TextField()),
                ('feedback', models.TextField()),
            ],
        ),
    ]
