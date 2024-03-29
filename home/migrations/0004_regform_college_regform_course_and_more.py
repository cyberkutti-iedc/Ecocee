# Generated by Django 5.0.1 on 2024-01-21 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_regform_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='regform',
            name='college',
            field=models.CharField(default='NILL College not entered', max_length=255),
        ),
        migrations.AddField(
            model_name='regform',
            name='course',
            field=models.CharField(choices=[('python', 'Python')], default='python', max_length=20),
        ),
        migrations.AddField(
            model_name='regform',
            name='edu_qualification',
            field=models.CharField(choices=[('+2', '+2'), ('btech', 'B.Tech'), ('mtech', 'M.Tech'), ('bca_mca', 'BCA/MCA'), ('bsc_msc', 'BSc/MSc'), ('diploma', 'Diploma'), ('others', 'Others')], default='+2', max_length=20),
        ),
        migrations.AddField(
            model_name='regform',
            name='employment_status',
            field=models.CharField(choices=[('employed', 'Employed'), ('unemployed', 'Unemployed')], default='employed', max_length=20),
        ),
        migrations.AddField(
            model_name='regform',
            name='graduation_year',
            field=models.CharField(default='2024', max_length=4),
        ),
        migrations.AlterField(
            model_name='regform',
            name='gender',
            field=models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('transgender', 'Transgender'), ('notSpecified', 'Prefer not to say')], default='notSpecified', max_length=20),
        ),
        migrations.AlterField(
            model_name='regform',
            name='phone_no',
            field=models.CharField(max_length=15),
        ),
    ]
