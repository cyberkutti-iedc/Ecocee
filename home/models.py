# models.py

from django.db import models

class Regform(models.Model):
    full_name = models.CharField(max_length=125)
    email_id = models.EmailField()
    phone_no = models.CharField(max_length=15)  # Assuming phone number can be stored as a string

    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('transgender', 'Transgender'),
        ('notSpecified', 'Prefer not to say'),
    ]

    COURSE_CHOICES = [
        ('python', 'Python'),
    ]

    EMPLOYMENT_STATUS_CHOICES = [
        ('employed', 'Employed'),
        ('unemployed', 'Unemployed'),
        ( 'lookingforjob','Lookingforjob'),
        ('business_or_Startups','Business_or_Startups'),
        ('iam_student','Iam_student')
    ]

    EDU_QUALIFICATION_CHOICES = [
        ('+2', '+2'),
        ('btech', 'B.Tech'),
        ('mtech', 'M.Tech'),
        ('bca_mca', 'BCA/MCA'),
        ('bsc_msc', 'BSc/MSc'),
        ('diploma', 'Diploma'),
        ('others', 'Others'),
    ]

    gender = models.CharField(
        max_length=20,
        choices=GENDER_CHOICES,
        default='notSpecified'
    )

    course = models.CharField(
        max_length=20,
        choices=COURSE_CHOICES,
        default='python'
    )

    employment_status = models.CharField(
        max_length=20,
        choices=EMPLOYMENT_STATUS_CHOICES,
        default='employed'
    )

    edu_qualification = models.CharField(
        max_length=20,
        choices=EDU_QUALIFICATION_CHOICES,
        default='+2'
    )

    college = models.CharField(max_length=255,default='NILL College not entered')
    graduation_year = models.CharField(max_length=4,default='2024')

    def __str__(self):
        return self.full_name


