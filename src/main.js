import GameField from './GameField'
import ShipSet from './ShipSet'

const main = () => {
    const app = document.getElementById('app');
    const wrapper = document.createElement('div');
    wrapper.className = "wrapper";
    console.log(GameField());

    wrapper.append(GameField());
    wrapper.append(GameField());
    app.append(wrapper);

    const shipSet = new ShipSet();
    console.log(shipSet, 'main')
    shipSet.generateSeveralShips(20);
    console.log(shipSet.shipsPlacement);
}

main();
