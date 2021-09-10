# MEDBAY - Ensuring Citizen health always

## Features
	1. WEAVY BASED DOCTOR PATIENT PORTAL
	2. HEART RATE MONITORING SYSTEM
	3. AI DIET PLANNER
	4. REALTIME GROUP YOGA POSTURE MONITORING SYSTEM
	5. DEPRESSION CHATBOT
	6. INNOVATIVE GAMES FOR COGNITIVE AND BRAIN HEALTH
	7. WORKOUT PLANNER AND POSTURE DETECTOR
	8. MEDICAL CHATBOT
	9. MEDICAL TEST COMPARISON
	10. PHARMACEUTICAL STORE 

# change directory
$ cd Weavy_Troubleshooters

# Setup Virtual Environment(LINUX)
$ virtualenv venv
$ source venv/bin/activate

# Install requirements
$ pip install -r requirements.txt

# Migrate db File
$ python manage.py makemigrations
$ python manage.py migrate

# Launch server
$ python manage.py runserver
