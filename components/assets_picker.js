'use strict';

const Component = require("./base.component");

const c_type = 'AssetsPicker';
const Actions = {
    OPEN: 'open',
    CROP: 'crop',
    SELECT: 'select'
};

class AssetsPicker extends Component{

    /**
     * 
     * @param {*} extension 
     * @param {*} config 
     * 
     * {
     *     "mimeType": [],
     *     "assetUrl": "",
     *     "aspectRatio": ""
     *     "maxSize": "",
     * }
     */
    constructor(extension, config) {
        super(extension, c_type, config.id);
        this.mimeType = config.mimeType || ["jpeg, png"];
        this.assetUrl = config.assetUrl || '';
        this.aspectRatio = config.aspectRatio || "1:1";
        this.maxSize = config.maxSize || '2mb';
        this.config = {
            mimeType: this.mimeType,
            assetUrl: this.assetUrl,
            aspectRatio: this.aspectRatio,
            maxSize: this.maxSize
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


    setState({mimeType,assetUrl,aspectRatio,maxSize}) {
        // ignore this
        // to set state of a component
        if(mimeType){
            this.mimeType = mimeType
        }
        if(assetUrl){
            this.assetUrl = assetUrl
        }
        if(aspectRatio){
            this.aspectRatio = aspectRatio
        }
        if(maxSize){
            this.maxSize = maxSize
        }
    }
}

AssetsPicker.Actions = Actions;
AssetsPicker.component_type = c_type;

module.exports = AssetsPicker;

