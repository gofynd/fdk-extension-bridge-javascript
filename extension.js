'use strict';

const WindowTransport = require("./helper/transport_layer");

class Extension {

    constructor({apiKey}) {
        this.origin =  window.location.origin; // fetch current domain
        if(!apiKey) {
            throw "apiKey missing";
        }
        this.extensionId = apiKey;
        this.transport = new WindowTransport(this);
        this.transport.init();
    }

    // init() {
    //     this.transport.init();
    // }

    redirect(payload){
        if(!payload.path){
            throw "path missing";
        }
        payload.target = 'Redirect';
        this.transport.dispatch(payload);
    }

    destroy() {
        this.transport.destroy();
    }

}

module.exports = Extension;