from django.shortcuts import render

# Create your views here.
# views.py
from django.core.mail import send_mail
from django.http import HttpResponse

def send_test_email(request):
    subject = 'Test Email'
    message = 'This is a test email sent from Django using Mailtrap.'
    from_email = 'webmaster@localhost'
    recipient_list = ['recipient@example.com']
    send_mail(subject, message, from_email, recipient_list)
    return HttpResponse('Email sent successfully')
