import { UI } from './ui.js';
import Pokemon from './pokemon.js';

const getPokemon = async (pokemonName) => {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    let result = await data.json()
    return result
}

export default class Battle {
    constructor() {
        this.uiSystem;
        this.playerPokemon;
        this.enemyPokemon;
    }

    initialize() {
        this.loadAssets()
    }

    loadAssets() {
        getPokemon("charizard").then(data => {
            this.pokemonPlayer = new Pokemon(data, "player");
            this.pokemonPlayer.loadAssets();
            this.playerPokemon = {
                name: data.name,
                lvl: 42,
                hp: 100,
            }
            this.playerPictureReady = true
        }).then(() => {
            this.uiSystem = new UI(this.playerPokemon);
            this.uiSystem.loadAssets();
        })

        getPokemon("rayquaza").then(data => {
            this.pokemonEnemy = new Pokemon(data, "enemy");
            this.pokemonEnemy.loadAssets();
            this.enemyPokemon = {
                name: data.name,
                lvl: 41,
                hp: 100,
            }
            this.enemyPictureReady = true
        }).then(() => {
            this.uiSystem = new UI(null, this.enemyPokemon);
            this.uiSystem.loadAssets();
        })
    }

    draw() {
        clear();
        if (this.uiSystem) this.uiSystem.drawBackground();
        if (this.playerPictureReady) this.pokemonPlayer.draw();
        if (this.enemyPictureReady) this.pokemonEnemy.draw();
        if (this.uiSystem) this.uiSystem.draw();
    }



    ends() {

    }
}
