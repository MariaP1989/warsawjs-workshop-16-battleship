import GameField from './GameField';
import ShipSet from './ShipSet';
import gameState from './GameState';

const app = document.getElementById('app');

const wrapper = document.createElement('div');
wrapper.className = "wrapper";

const notification = document.createElement('div');
notification.className = "notification";

const render = () => {
    wrapper.append(GameField('computer'));
    wrapper.append(GameField('user'));
}

const clear = () => {
    wrapper.innerHTML = '';
}

gameState.reRender = () => {
    clear();
    render();
    notification.innerHTML = gameState.shootingTurn;
}

const main = () => {
    gameState.startGame();
    notification.innerHTML = gameState.shootingTurn;
    app.append(notification);
    app.append(wrapper);
}

main();
