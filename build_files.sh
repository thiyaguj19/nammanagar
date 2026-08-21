#!/bin/bash
set -e
echo "BUILD START"

# Use python3 to match Vercel's active runtime environment
python3 -m pip install --break-system-packages -r requirements.txt
python3 manage.py collectstatic --noinput

echo "--- Running migrations ---"
python3 manage.py showmigrations app
python3 manage.py migrate --noinput
echo "--- Migrations done ---"

echo "BUILD END"
