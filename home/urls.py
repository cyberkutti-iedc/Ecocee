from . import views
from django.urls import path
from django.conf.urls import handler404

urlpatterns = [
    
  
    path('', views.index, name='index'),
   
    path('form/', views.form, name='form'),
   
    path('privacy_policy/', views.privacy, name='privacy_policy'),
    path('terms_and_condtions/',views.termsandcondtions,name='terms_and_condtions')
    
]

handler404 = 'home.views.custom_404'