window.onload = init;

var map;
var ctxMap;

var pl;
var ctxPl;

var gameWidth = 960;
var gameHeight = 600;

var bg = new Image();
bg.src = "img/bg.png";

var tiles = new Image();
tiles.src = "img/pl.png";

function init()
{
    map = document.getElementById("map");
    ctxMap = map.getContext("2d");

    pl = document.getElementById("player");
    ctxPl = pl.getContext("2d");

    map.width = gameWidth;
    map.height = gameHeight;
    pl.width = gameWidth;
    pl.height = gameHeight;

    drawBg();
    drawPl();
}

function drawBg()
{
    ctxMap.drawImage(bg, 0, 0, 64, 64,
        0, 0, gameWidth, gameHeight);
}

function drawPl()
{
    ctxPl.drawImage(tiles, 0, 0, 64, 64,
        0, 0, 48, 48);
}