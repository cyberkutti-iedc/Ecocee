from django.shortcuts import render
from django.http import HttpResponse
from .models import Regform # Updated model name
from .models_2 import homeContact

def index(request):
    if request.method =="POST":
        homeBox = homeContact()
        homeBox.full_name =request.POST.get('fullName')
        homeBox.email =request.POST.get('email')
        homeBox.phone =request.POST.get('phone')
        homeBox.message =request.POST.get('message')

        # Save only if the form data is valid
        if all([homeBox.full_name, homeBox.email, homeBox.phone, homeBox.message]):
            homeBox.save()
            return render(request, 'formMessage.html')
        else:
            return HttpResponse("<h1>Form data is not valid</h1>")
    return render(request, 'index.html')



def form(request):
    if request.method == "POST":
        regform = Regform()
        regform.full_name = request.POST.get('fullName')
        regform.email_id = request.POST.get('email')
        regform.phone_no = request.POST.get('phoneNumber')
        regform.gender = request.POST.get('gender')
        regform.course = request.POST.get('course')
        regform.employment_status = request.POST.get('employmentStatus')
        regform.edu_qualification = request.POST.get('eduQualification')
        regform.college = request.POST.get('college')
        regform.graduation_year = request.POST.get('graduationYear')

        # Check if the selected qualification is "Others"
        if regform.edu_qualification == 'others':
            # Use the value from the additional input field for Other qualification
            regform.edu_qualification = request.POST.get('otherQualification')

        # Save only if the form data is valid
        if all([regform.full_name, regform.email_id, regform.phone_no, regform.gender, regform.course, regform.employment_status, regform.edu_qualification, regform.college,regform.graduation_year]):
            regform.save()
            return render(request, 'formMessage.html')
        else:
            return HttpResponse("<h1>Form data is not valid</h1>")

    return render(request, 'form.html')



# custom 404 view
def custom_404(request, exception):
    return render(request, '404.html', status=404)


def privacy(request):
    return render(request, 'privacy_policy.html')



def termsandcondtions(request):
    return render(request, 'termsandcondtions.html')