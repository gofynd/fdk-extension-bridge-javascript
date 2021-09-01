'use strict';

const uuid_v1 = require("./../helper/uuid");

class Component {
    constructor(extension, type, id) {
        this.extension = extension;
        this.id = id || uuid_v1(); // generate using uuid
        this.type = type;
        this.subscriptions = {};
        this.eventName = null
    }

    subscribe(eventName, callback) {
        this.eventName = eventName;
        let namespace = `${this.type}/${eventName}`;
        this.subscriptions[namespace] = this.subscriptions[namespace] || [];
        let listnerId = `${namespace}:${uuid_v1()}`;
        this.subscriptions[namespace].push({
            callback: callback,
            id: listnerId
        });
        this.extension.transport.subscribe(namespace, listnerId, this.id, callback);
        return listnerId;
    }

    unsubscribe(listnerId) {
        // split and get namespace and remove by id
        const namespace = listnerId.split(':')[0];
        this.extension.transport.unsubscribe(namespace, listnerId);
    }

    dispatch(config = {}, payload) {
        let namespace = `${this.type}/${this.eventName}`;
        let dispatchPayload  = {
            target: this.type,
            id: `${namespace}:${this.id}`,
            action: this.eventName, // click,register,change
            data: {
                config
            }
        }
        if(payload) {
            dispatchPayload.data.payload = payload
        }
        this.extension.transport.dispatch(dispatchPayload)
    }

    register() {
        this.extension.transport.dispatch({
            id: this.id,
            action: "$register",
            data: {
                type: this.type
            }
        });
    }

    setState(id, payload){
        let namespace = `${this.type}/${this.eventName}`;
        let dispatchPayload  = {
            target: this.type,
            id: `${namespace}:${id}`,
            action: this.eventName, // click,register,change
            data: {
                config
            }
        }
        if(payload) {
            dispatchPayload.data.payload = payload
        }
        this.extension.transport.dispatch(dispatchPayload)
    }
}

module.exports = Component;