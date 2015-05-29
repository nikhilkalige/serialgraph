var Marty = require('marty');

var ButtonConstants = Marty.createConstants([
    'UPDATE_BUTTONS'
]);

var SerialConstants = Marty.createConstants([
    'UPDATE_PORT',
    'UPDATE_BAUD',
    'UPDATE_PORT_LIST'
]);

var GraphConstants = Marty.createConstants([
    'UPDATE_CONFIG',
    'UPDATE_VARIABLECOUNT'
]);

var ChartConstants = Marty.createConstants([
    'ADD_GRAPH_FORM',
    'ADD_GRAPH'
]);

module.exports = {
    ButtonConstants: ButtonConstants,
    SerialConstants: SerialConstants,
    GraphConstants: GraphConstants,
    ChartConstants: ChartConstants
};
