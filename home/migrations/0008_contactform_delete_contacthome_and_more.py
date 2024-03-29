# Generated by Django 5.0.1 on 2024-01-22 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_alter_contacthome_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=125)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(blank=True, max_length=15, null=True)),
                ('message', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='ContactHome',
        ),
        migrations.AlterField(
            model_name='regform',
            name='employment_status',
            field=models.CharField(choices=[('employed', 'Employed'), ('unemployed', 'Unemployed'), ('lookingforjob', 'Lookingforjob'), ('business_or_Startups', 'Business_or_Startups'), ('iam_student', 'Iam_student')], default='employed', max_length=20),
        ),
    ]
