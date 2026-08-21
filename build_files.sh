#!/bin/bash
echo "BUILD START"

# Use python3 to match Vercel's active runtime environment
python3 -m pip install -r requirements.txt
python3 manage.py collectstatic --noinput
python3 manage.py migrate --noinput

echo "BUILD END"
