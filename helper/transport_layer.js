'use strict';


class WindowTransport {
    constructor(extension) {
        this.handlers = {};
        this.extension = extension;
        this.listner = null;
    }

    init() {
        if(!this.listner) {
            this.listner = window.addEventListener("message", this.onMessage.bind(this), false);
        }
        return this.listner
    }

    /**
     * 
     * @param {*} message
     * {
     *  id: "", // namspace + button id
     *  action: "",
     *  apiKey: "",
     *  data: {}
     * }
     */
    onMessage(message) {
        // for loop and call handlers
        const namespace = message.data.id.split(':')[0];
        const componentId = message.data.id.split(':')[1];
        this.handlers[namespace].forEach(ele => {
            if(componentId == ele.componentId){
                ele.handler({
                    id: ele.id,
                    componentId: ele.componentId,
                    data: message.data,
                })
            }
        });
    }

    subscribe(namespace, id, componentId, handler) {
        this.handlers[namespace] = this.handlers[namespace] || [];
        this.handlers[namespace].push({
            handler: handler,
            id: id,
            componentId: componentId
        });
    }

    unsubscribe(namespace, id) {
        // splice by id
        let index = this.handlers[namespace].findIndex(ele => {
            return ele.id == id
        })
        if(index != -1){
            this.handlers[namespace].splice(index, 1)
        }
    }

    dispatch(payload = null) {
        if(payload){
            payload.apiKey = this.extension.extensionId;
        }
        const data = {
            extenisonBridge: payload
        }
        window.parent.postMessage(data, "*");
    }

    destroy(){
        // emit with empty data
        this.handlers = {};
        this.listner = null
        this.dispatch()
    }
}

module.exports = WindowTransport;