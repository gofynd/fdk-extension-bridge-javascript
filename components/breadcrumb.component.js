'use strict';

const Component = require("./base.component");

const c_type = 'Breadcrumb';
const Actions = {
    SHOW: 'show'
};

class Breadcrumb extends Component{

    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "displayText": "",
     * }
     */
    constructor(extension, config) {
        super(extension, c_type, config.id);
        this.displayText = config.displayText || 'Settings';
        this.config = {
            displayText: this.displayText
        }
    }
    
    // subscribe(eventName, callback) {
    //     if(eventName !== Actions.SHOW) {
    //         return "" // throw error
    //     }
    //     return super.subscribe(eventName, callback);
    // }

    // unsubscribe(listnerId) {
    //     return super.unsubscribe(listnerId);
    // }

    dispatch(payload = null){
        return super.dispatch(this.config, payload);
    }


    setState() {
        // to set state of a component
    }
}

Breadcrumb.Actions = Actions;
Breadcrumb.component_type = c_type;

module.exports = Breadcrumb;

