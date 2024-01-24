# models.py

from django.db import models

class homeContact(models.Model):
    full_name = models.CharField(max_length=125)
    email = models.EmailField()
    phone = models.CharField(max_length=15)  # Assuming phone number can be stored as a string
    message = models.CharField(max_length=250)
    def __str__(self):
        return self.full_name


