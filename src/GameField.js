import CellField from './CellField'
import ShipSet from './ShipSet'

const GameField = () => {
    const field = document.createElement("div");
    field.className = "field";
    const shipSet = new ShipSet();
    shipSet.generateSeveralShips(25);
    shipSet.shipsPlacement.forEach((row,index, array) => {
        row.forEach((cell, index, array) => {
            field.append(CellField(cell));
        })
    })
    // console.log(shipSet.shipsPlacement);
    // let i = 0;
    // while ( i < 100){
    //     field.append(CellField());
    //     i++;
    // }
    return field
};

export default GameField;
