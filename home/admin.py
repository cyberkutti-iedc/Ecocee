from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Regform
from .models_2 import homeContact

class RegformAdmin(ImportExportModelAdmin):
    list_display = ('full_name', 'email_id', 'phone_no', 'gender', 'course', 'employment_status', 'edu_qualification', 'college', 'graduation_year')
    search_fields = ('full_name', 'email_id', 'phone_no', 'college', 'graduation_year')

class homeContactAdmin(ImportExportModelAdmin):
     list_display = ('full_name', 'email', 'phone', 'message')
     search_fields = ('full_name', 'email', 'phone')


# Registering Regform with custom admin options
admin.site.register(Regform, RegformAdmin)

# Registering homeContact without custom admin options
admin.site.register(homeContact,homeContactAdmin)
