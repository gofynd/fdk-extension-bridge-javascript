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
     *     "fileTypes": [],
     *     "assetUrl": "",
     *     "aspectRatio": ""
     *     "maxSize": "",
     * }
     */
    constructor(extension, config) {
        super(extension, c_type, config.id);
        this.fileTypes = config.fileTypes || ["jpeg", "png"];
        this.assetUrl = config.assetUrl || '';
        this.aspectRatio = config.aspectRatio || "1:1";
        this.maxSize = config.maxSize || 2048;
        this.config = {
            fileTypes: this.fileTypes,
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


    setState({fileTypes,assetUrl,aspectRatio,maxSize}) {
        // ignore this
        // to set state of a component
        if(fileTypes){
            this.fileTypes = fileTypes
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

