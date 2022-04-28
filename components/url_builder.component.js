'use strict';

const Component = require("./base.component");

const c_type = 'UrlBuilder';
const Actions = {
    OPEN: 'open',
    CLOSE: 'close',
    BUILD: 'build'
};

class UrlBuilder extends Component{

    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "applicationId": "" // mandatory
     *     "pageType": "",
     *     "id": "", //optional
     *     "pageParams": []
     *     "pageQuery": [],
     *      "urlValue": ""
     * }
     */
    constructor(extension, config) {
        super(extension, c_type, config.id);
        this.applicationId = config.applicationId;
        this.pageType = config.pageType || '';
        this.pageParams = config.pageParams || [];
        this.pageQuery = config.pageQuery || [];
        this.urlValue = config.urlValue || '';
        this.config = {
            applicationId: this.applicationId,
            pageType: this.pageType,
            pageParams: this.pageParams,
            pageQuery: this.pageQuery,
            urlValue: this.urlValue
        }
    }

    subscribe(eventName, callback) {
        if(!Object.values(Actions).includes(eventName)){
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


    setState({pageType,pageParams,pageQuery,urlValue}) {
        // ignore this
        // to set state of a component
        if(pageType){
            this.pageType = pageType
        }
        if(pageParams){
            this.pageParams = pageParams
        }
        if(pageQuery){
            this.pageQuery = pageQuery
        }
        if(urlValue){
            this.urlValue = urlValue
        }
    }
}

UrlBuilder.Actions = Actions;
UrlBuilder.component_type = c_type;

module.exports = UrlBuilder;

