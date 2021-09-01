'use strict';

const Component = require("./base.component");

const c_type = 'ToggleButton';
const Actions = {
    CHANGE: 'change'
};

class ToggleButton extends Component{

    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "activeLabel": "",
     *     "inactiveLabel": "",
     *     "id": "", //optional
     *     "disabled": true/false // default value false
     * }
     */
    constructor(extension, config) {
        super(extension, c_type, config.id);
        this.disabled = config.disabled || false;
        this.activeLabel =  config.activeLabel || 'Active';
        this.inactiveLabel =  config.inactiveLabel || 'Inactive';
        this.config = {
            disabled: this.disabled,
            activeLabel: this.activeLabel,
            inactiveLabel: this.inactiveLabel,
        }
    }
    
    subscribe(eventName, callback) {
        if(eventName !== Actions.CHANGE) {
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


    setState(payload = null) {
        // to set state of a component
        if(payload){
            console.log(this.id, payload)
            return super.setState(this.config, this.id, payload);
        }
    }
}

ToggleButton.Actions = Actions;
ToggleButton.component_type = c_type;

module.exports = ToggleButton;

