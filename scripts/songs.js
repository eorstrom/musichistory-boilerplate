"use strict";
// New Array called 'songs'
var songs = [];

// Add items to 'songs' array
songs.push("What I've Done > by Linkin Park on the album Minutes to Midnight");
songs.push("Legs > by Z*ZTop on the album Eliminator");
songs.push("The Logical Song > by Supertr@amp on the album Breakfast in America");
songs.push("Another Brick in the Wall > by Pink Floyd on the album The Wall");
songs.push("Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill");
songs.push("My Songs Know What You Did In the Dark > by Fall Out Boy on the album Save Rock and Roll");

console.log(songs);

// Loop through each array item to remove any characters that don't belong
for (var i = 0; i < songs.length; i++) {
   songs[i] = songs[i].replace(/>/g, '-').replace(/\*/g, "").replace(/!/g, "").replace(/@/g, "");
   $("#addSongs").html += "<p>" + songs[i] + "</p>";
};

console.log(songs);
// Print new array 'newSongList' to DOM 
// document.getElementById("addSongs").innerHTML = songs;
// console.log(songs);
