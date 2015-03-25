var Reflux = require("reflux");
var Actions = require("../actions/actions");

module.exports = Reflux.createStore({
    listenables: Actions,

    init: function() {
        this.ports = [];
        this.data = [];
        this.baud = [4800, 9600, 19200, 38400, 56800, 115200];
    },

    onSerialPortGot: function(data) {
        this.ports = data;
        this.trigger();
    },

    onSerialPortData: function(data) {
        this.data.push(data);
        this.trigger(this.data);
    }
});

