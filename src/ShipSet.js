import  Ship from './Ship.js'

class ShipSet {
    constructor(){
        this.shipsPlacement = new Array(10);
        for( let i = 0; i < 10; i++ ){
            this.shipsPlacement[i] = new Array(10);
            for(let j = 0; j < 10; j++){
                this.shipsPlacement[i][j] = null;
            }
        }
        this.generateSeveralShips(20);
    }

    generateRandomShip() {
        let ship;
        do{
            ship = new Ship(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
        } while (!ship.isOnField());
            return ship;
    }

    generateSeveralShips(number){
        let ships = [];
        for(let i = 0; i < number; i++){
            do{
                ships[i] = this.generateRandomShip();
            } while (!this.spaceIsAvailable(ships[i]));
                this.assignePlacement(ships[i]);
        }
    }

    spaceIsAvailable(ship){
        return this.shipsPlacement[ship.x][ship.y] === null;
        }

    assignePlacement(ship){
        this.shipsPlacement[ship.x][ship.y] = ship;
    }
}

export default ShipSet;
