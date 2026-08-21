"""
WSGI config for nammanagar project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application
from django.core.management import call_command

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nammanagar.settings')

# 1. Start the standard Django process
application = get_wsgi_application()

# 2. Automatically trigger migrations programmatically on startup
try:
    print("Vercel Lifecycle: Running Database Migrations...")
    call_command('migrate', interactive=False)
    print("Vercel Lifecycle: Database is up-to-date!")
except Exception as e:
    print(f"Vercel Lifecycle Migration Error: {e}")
