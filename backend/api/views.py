from django.shortcuts import render
from .models import Project
from .serializers import ProjectSerializer
import logging
import json
from datetime import datetime
import requests
from django.core.cache import cache
from django.db import transaction
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact  # Uncomment when enabling DB storage

logger = logging.getLogger(__name__)

@api_view(['POST'])
def contact_form(request):
    try:
        logger.info("Starting contact form submission process")

        # Get and validate data
        data = request.data
        name = data.get('name', 'Default Name').strip()
        email = data.get('email', 'default@example.com').strip()
        message = data.get('message', 'Default message').strip()

        logger.info(f"Received form data - Name: {name}, Email: {email}")

        if not all([name, email, message]):
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        # Get client IP and rate limit
        ip = request.META.get('HTTP_X_FORWARDED_FOR', request.META.get('REMOTE_ADDR', ''))
        ip = ip.split(',')[0].strip() if ',' in ip else ip
        cache_key = f'contact_form_{ip}'
        request_count = cache.get(cache_key, 0)
        
        if request_count >= 5:
            return Response({'error': 'Too many requests. Try again later.'}, status=status.HTTP_429_TOO_MANY_REQUESTS)

        # Store in DB (Uncomment when enabling DB storage)
        # with transaction.atomic():
        #     contact = Contact.objects.create(name=name, email=email, message=message, ip_address=ip)
        #     logger.info(f"Stored contact ID: {contact.id}")

        cache.set(cache_key, request_count + 1, 3600)

        # Email placeholders
        placeholder_admin_email = "admin@example.com"
        placeholder_api_key = "MAILGUN_API_KEY"
        placeholder_domain = "sandbox.mailgun.org"
        
        # Prepare email content
        email_content = f"""
New Contact Submission

Name: {name}
Email: {email}
Message: {message}
Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
IP: {ip}
        """.strip()
        
        # Send admin email (Placeholder Mailgun config)
        admin_sent = False
        try:
            response = requests.post(
                f"https://api.mailgun.net/v3/{placeholder_domain}/messages",
                auth=("api", placeholder_api_key),
                data={
                    "from": "Website Contact <noreply@example.com>",
                    "to": placeholder_admin_email,
                    "subject": "New Contact Form Submission",
                    "text": email_content,
                },
                timeout=10
            )
            if response.status_code == 200:
                admin_sent = True
        except Exception as e:
            logger.error(f"Admin email failed: {e}")
        
        # Send user confirmation (Optional Placeholder Mailgun template)
        try:
            requests.post(
                f"https://api.mailgun.net/v3/{placeholder_domain}/messages",
                auth=("api", placeholder_api_key),
                data={
                    "from": "Website <noreply@example.com>",
                    "to": email,
                    "subject": "Thank You for Contacting Us",
                    "template": "contact_confirmation",
                    "h:X-Mailgun-Variables": json.dumps({"name": name, "message": message, "year": datetime.now().year})
                },
                timeout=10
            )
        except Exception as e:
            logger.error(f"User email failed: {e}")

        return Response({'message': 'Message sent successfully'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        logger.error(f"Processing error: {e}")
        return Response({'error': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)





# views.py
from rest_framework import viewsets

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer