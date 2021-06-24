'use strict';

const Component = require("./base.component");

const c_type = 'ContextItem';
const Actions = {
    CLICK: 'click'
};

class ContextItem extends Component{
    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "label": "",
     *     "id": "", //optional
     * }
     */
    constructor(extension, config) {
        super(extension, c_type, config.id);
        this.label =  config.label;
        this.action = config.action
        this.config = {
            label: this.label,
            action: this.action || 'click'
        }
    }

    subscribe(eventName, callback) {
        if(eventName !== Actions.CLICK) {
            return "" // throw error
        }
        return super.subscribe(eventName, callback);
    }

    unsubscribe(listnerId) {
        return super.unsubscribe(listnerId);
    }

    dispatch(payload = null){
        return super.dispatch(this.config, payload);
    }


    setState() {
        // to set state of a component
    }
}

ContextItem.Actions = Actions;
ContextItem.component_type = c_type;

module.exports = ContextItem;

