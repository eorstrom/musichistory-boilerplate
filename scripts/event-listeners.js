"use strict";

let listMusicLink = $("#list-music-link");
let listView = $("#list-view");
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
  addVisibleClass(listView, listMusicLink);
  addHiddenClass(addMusicView, addMusicLink);
  // profileView.classList.add("hidden");
});

$("#add-music").click(function(event) {
  event.preventDefault();
  addVisibleClass(addMusicView, addMusicLink);
  addHiddenClass(listView, listMusicLink);
  // profileView.classList.add("hidden");
});
