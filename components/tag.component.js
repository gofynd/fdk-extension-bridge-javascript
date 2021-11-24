'use strict';

const Component = require('./base.component');

const c_type = 'Tag';

const Actions = {
}

class Tag extends Component {
    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "text": "",
     *     "tagState": "info/success/warn/disable/none", //default value info
     *     "fill": true/false // default value false
     * }
     */

    constructor(extension, config) {
        super(extension);
        this.tagState = config.tagState || 'info';
        this.fill = config.fill || false;
        this.text = config.text;
        this.config = {
            tagState: this.tagState,
            fill: this.fill,
            text: this.text
        }
    }

    subscribe(eventName, callback) {
        return super.subscribe(eventName, callback);
    }

    unsubscribe(listenerId) {
        return super.unsubscribe(listenerId);
    }

    dispatch(payload = null) {
        return super.dispatch(this.config, payload)
    }

    setState({tagState, fill, text}) {
        if(tagState) {
            this.tagState = tagState;
        }
        if(fill) {
            this.fill = fill;
        }
        if(text) {
            this.text = text;
        }
    }
}

Tag.Actions = Actions;
Tag.component_type = c_type;

module.exports = Tag;
