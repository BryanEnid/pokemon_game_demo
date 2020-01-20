export default class Pokemon {
    constructor({ name, sprites }, person) {
        this.name = name;
        this.sprites = sprites;
        this.person = person
    }

    loadAssets() {
        if (this.person == "enemy") { this.asset = loadImage(this.sprites.front_default); }
        if (this.person == "player") { this.asset = loadImage(this.sprites.back_default); }
    }

    draw() {
        if (this.person == "enemy") {
            image(this.asset, 480, 30, 220, 220);
        }
        if (this.person == "player") {
            image(this.asset, 100, 180, 260, 260);
        }
    }
}