
var app = angular.module('app', []);

/**
 * Register the Notable API's notes service.
 */
app.service('NoteRepoService', [ '$http', function($http) {

    this.getNote = function getNote(noteId) {
        return $http({
            method : 'GET',
            url : '/notes/' + noteId
        });
    }

    this.addNote = function addNote(title, body) {
        return $http({
            method: 'POST',
            url: '/notes/',
            data: {
                title: title,
                body: body
            }
        });
    }

    this.deleteNote = function deleteNote(id) {
        return $http({
            method : 'DELETE',
            url : '/notes/' + id
        });
    }

    this.getAllNotes = function getAllNotes() {
    return $http({
        method : 'GET',
        url : '/notes/'
    });
}
}]);

app.controller('NoteController', ['$scope', 'NoteRepoService',
  function ($scope, NoteRepoService) {

    $scope.getNote = function () {
      var id = $scope.note.id;
      NoteRepoService.getNote($scope.note.id)
        .then(function success(response) {
            $scope.note = response.data;
            $scope.note.id = id;
            $scope.message='';
            $scope.errorMessage = '';
        },
        function error (response) {
            $scope.message = '';
            if (response.status === 404){
                $scope.errorMessage = 'Note not found!';
            }
            else {
                $scope.errorMessage = "Error getting note!";
            }
        });
    };

    $scope.addNote = function () {
        if ($scope.note != null && $scope.note.title) {
            NoteRepoService.addNote($scope.note.title, $scope.note.body)
              .then (function success(response){
                  $scope.message = 'Note added!';
                  $scope.errorMessage = '';
                  $scope.getAllNotes();

                  // reset add note form
                  $scope.note = null;
              },
              function error(response){
                  $scope.errorMessage = 'Error adding note!';
                  $scope.message = '';
            });
        }
        else {
            $scope.errorMessage = 'Please enter a title!';
            $scope.message = '';
        }
    }

    $scope.deleteNote = function (note) {
    NoteRepoService.deleteNote(note.id)
      .then (function success(response) {
          $scope.message = 'Note deleted!';
          $scope.note = null;
          $scope.errorMessage='';

          $scope.getAllNotes();
      },
      function error(response) {
          $scope.errorMessage = 'Error deleting note!';
          $scope.message='';
      });
    }

    $scope.getAllNotes = function () {
    NoteRepoService.getAllNotes()
      .then(function success(response) {
          $scope.notes = response.data;
          $scope.message='';
          $scope.errorMessage = '';
      },
      function error (response) {
          $scope.message='';
          $scope.errorMessage = 'Error getting notes!';
      });
    }

    $scope.init = function () {
        $scope.getAllNotes();
    }

    $scope.init();
}]);