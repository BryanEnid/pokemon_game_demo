

export class UI {
    //let player_hp_bar

    constructor(playerPokemon, enemyPokemon) {
        this.playerPokemon = playerPokemon;
        this.enemyPokemon = enemyPokemon;
    }

    loadAssets() {
        if (this.enemyPokemon) {
            this.enemy_hp_bar = loadImage('../../game_assets/enemy_hp_bar.png');
        } else {
            this.atk_bat_menu = loadImage('../../game_assets/attacks_battle_menu.png');
            this.ini_bat_menu = loadImage('../../game_assets/initial_battle_menu.png');
            this.player_hp_bar = loadImage('../../game_assets/player_hp_bar.png');
            this.background = loadImage('../../game_assets/background.png');
        }
        this.textFont = loadFont('../../game_assets/font.ttf');
    }

    draw() {
        image(this.player_hp_bar, width - 370, height - 300);
        image(this.atk_bat_menu, width - 800, height - 165);
        image(this.ini_bat_menu, width - 381, height - 165, 381, 165);
        image(this.enemy_hp_bar, 30, 10, 300, 100);

        textSize(32);
        textFont(this.textFont)
        console.log(this.enemyPokemon)
        // if (this.playerPokemon != 0) text(`${this.enemyPokemon.name}`, 70, 53)
    }

    drawBackground() {
        image(this.background, 0, 0);

    }
}

export class playerUI extends UI {

}
