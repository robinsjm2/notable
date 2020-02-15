from django.db import models

class Note(models.Model):
    # Fields
    title = models.CharField(max_length=200, help_text='Enter the title for your note.')
    body = models.CharField(max_length=600, help_text='Enter the body for your note.')

    def __str__(self):
        return self.title