import CellField from './CellField'
import gameState from './GameState'

const GameField = (type) => {
    const field = document.createElement("div");
    field.className = `field ${type}`;
    const shipSet = gameState.shipsSet[type];
    const cells = gameState.cells[type];
    shipSet.shipsPlacement.forEach((row, x, array) => {
        row.forEach((cell, y, array) => {
            field.append(new CellField(x, y, cell, type, cells[x][y].attempted).htmlNode);
        })
    })

    return field
};

export default GameField;
