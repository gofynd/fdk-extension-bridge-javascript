'use strict';

const Component = require("./base.component");

const c_type = 'Button';
const Actions = {
    CLICK: 'click'
};

class Button extends Component{

    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "label": "",
     *     "id": "", //optional
     *     "disabled": true/false // default value false
     * }
     */
    constructor(extension, config) {
        super(extension, c_type, config.id);
        this.disabled = config.disabled || false;
        this.label =  config.label;
        this.config = {
            disabled: this.disabled,
            label: this.label
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


    setState({label,disabled}) {
        // to set state of a component
        if(label){
            this.label = label
        }
        if(disabled){
            this.disabled = disabled
        }
        this.dispatch()
    }
}

Button.Actions = Actions;
Button.component_type = c_type;

module.exports = Button;

