""" Notes URLConfig
"""
from django.urls import path
from notes.views import note_element, note_collection

urlpatterns = [
    # notes/
    path('', note_collection),
    path('<int:pk>/', note_element)
]
