"use strict";

let addSong, addArtist, addAlbum, addGenre;


newSong = {};
    newSong.Song = $("#add-song").val();
    newSong.Artist = $("addArtist").val();
    newSong.Album = $("addAlbum").val();
    newSong.Genre = $("addGenre").val();
    songs.push(newSong);

console.log("newSong song", newSong.Song);