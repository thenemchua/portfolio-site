from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os

@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        # Envoyer l'email
        send_mail(
            subject=f'New Contact Form Submission from {name} {email}',
            message=message,
            from_email=os.getenv('EMAIL_HOST_USER'),
            recipient_list=['alainlim.portfolio@gmail.com'],
            fail_silently=False,
        )
        
        return JsonResponse({'message': 'Success'}, status=200)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

# Debugging
if __name__ == "__main__":
    print(f"Using email: {os.getenv('EMAIL_HOST_USER')}")