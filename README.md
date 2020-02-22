# Notable app

## Purpose

The purpose of this project was to demonstrate a very simple
application using a few different technologies that were mentioned
during an interview process.  These technologies are: Django (Python) and AngularJS (JS).
I also specifically used Material Design cards.

## Overview

This app is a simple note manager that I dubbed "notable"
but later found out that name is already taken.  Either way,
it allows an anonymous user to manage add/list/delete notes.

To demonstrate greater concepts, I used Django's REST
framework to stage the REST api for the /notes and notes/:id routes.

The AngularJS registers a service (NoteRepoService) that communicates
with the localhost.  Django actually serves the RESTful routes that it calls.

See: notable/app/static/js/app.js.

By default, everything will be stored in a SQLite database.

## App

To run the app, navigate to the project directory and run the
following command:

`$ python manage.py runserver 8000`

After starting the app, visit the following URL in your browser.
http://localhost:8000/app/

To stop the application, press `Ctrl + C`.

The app is available as a Django templated view which contains
an AngularJS driven interface.

The notable app consumes the notable API so that I could demonstrate both
concepts.  In a true setting, the API is very extraneous for such a small example.

## API

The api runs on port 8000.

GET http://localhost:8000/notes

GET http://localhost:8000/notes/:id/

POST http://localhost:8000/notes/

```
{
    "title": "Nify note",
    "body": "My nifty note."
  }
```

DELETE http://localhost:8000/notes/:id/

## Cheers!



