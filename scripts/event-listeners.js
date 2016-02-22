"use strict";

let songs = [];
let newSong = {};
let addSongs = $("#addSongs");
let listMusicLink = $("#list-music-link");
let songSearchView = $("#song-search");
let addMusicLink = $("#add-music");
let addMusicView = $("#add-music-view");

// Event Listeners for Nav Bar links to make the page a SPA
function addHiddenClass(view, link) {
    view.addClass("hidden");
    view.removeClass("visible");
    link.removeClass("active");
};

function addVisibleClass(view, link) {
    view.addClass("visible");
    view.removeClass("hidden");
    link.addClass("active");
};

$("#list-music-link").click(function() {
  addVisibleClass(songSearchView, listMusicLink);
  addHiddenClass(addMusicView, addMusicLink);
  // profileView.classList.add("hidden");
});

$("#add-music").click(function(event) {
  event.preventDefault();
  addVisibleClass(addMusicView, addMusicLink);
  addHiddenClass(songSearchView, listMusicLink);
  // profileView.classList.add("hidden");
});
$("");
$("#add-button").click(function() {
    console.log("add-button was clicked.");
    newSong = {};
    newSong.Song = `${$("#song-name").val()}`;
    newSong.Artist = `${$("#artist-name").val()}`;
    newSong.Album = `${$("#album-name").val()}`;
    newSong.Genre = `${$("select#genre-name").val()}`;
    songs.push(newSong);
    addSongs.append(`<h3>${newSong.Song}</h3>`)
    addSongs.append(`<li>${newSong.Artist}</li>`)
    addSongs.append(`<li>${newSong.Album}</li>`)
    addSongs.append(`<li>${newSong.Genre}</li>`)
    console.log("songs", songs);
    $("#song-name").val("");
    $("#artist-name").val("");
    $("#album-name").val("");
    $("#genre-name").val("");
});