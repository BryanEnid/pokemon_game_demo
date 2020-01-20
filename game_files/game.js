import Battle from './battle_system/battle.js';
let battleSystem = new Battle();

function preload() {
    battleSystem.initialize()
    battleSystem.loadAssets()
}

function setup() {
    pixelDensity(1)
    createCanvas(800, 534);
    background('black');
}

function draw() {
    battleSystem.draw()
}

window.preload = preload;
window.setup = setup;
window.draw = draw;