window.onload = init;

var map;
var ctxMap;

var bg;
var ctxbg;

var siteWidth = 800;
var siteHeight = 3000;

function init()
{
    map = document.getElementById("map");
    ctxMap = map.getContext("2d");

    bg = document.getElementById("bg");
    ctxbg = bg.getContext("2d");

    map.width = siteWidth;
    map.height = siteHeight;

    bg.width = 800;
    bg.height = 100;
}