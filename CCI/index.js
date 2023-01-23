
class CCI {

  constructor({extensionId, launchUrl, pageData, contextData, iframeElement}) {
    this.extensionId = extensionId;
    this.exetensionLaunchUrl = launchUrl;
    this.pageData = pageData;
    this.contextData = contextData;
    this.iframeElement = iframeElement;
    this.eventHandlers = {};
    this.dataHandlers = {};
    this.listenEvents();
  }

  // should be called right after creating an object of class inside mirage
  launch(actionId) {
    let data = {
      pageData: this.pageData,
      contextData: this.contextData,
      extensionId: this.extensionId,
      eventName: 'launch',
      actionId: actionId,
      action: true
    }
    this.emitData(data, this.iframeElement, this.launchUrl);
  }

  emitData(data, iframeElement, url) {
    if(iframeElement){
      iframeElement.contentWindow.postMessage(data, '*')
    }else{
      window.parent.postMessage(data, '*');
    }
 
  }

  listenEvents() {
    window.addEventListener('message', (event) => {
      if (this.eventHandlers[event.data.eventName] && event.data.event) {
        this.eventHandlers[event.data.eventName].forEach((cb) => {
          cb(event);
        });
      } else if (this.dataHandlers[event.data.actionId] && event.data.action) {
        this.dataHandlers[event.data.actionId].resolver(event);
        delete this.dataHandlers[event.data.actionId];
      }
    }, false)
  }
  
  onLaunch(cb) {
    return this.getData('launch');
  }

  onEvent(eventName, cb) {
    let eventId =  this.generateActionId(5);
    this.eventHandlers[eventName] = this.eventHandlers[eventName] || []
    this.eventHandlers[eventName].push = {
      cb,
      id: eventId
    };
    return eventId;
  }

  unsubscribeEvent(eventName, eventId){
    let index = this.eventHandlers[eventName].findIndex(ele => ele.id = eventId);
    if(index != -1){
      this.handlers[eventName].splice(index, 1)
    }
  }

  getData(name) {
    let resolver;
    let actionId = this.generateActionId(5);
    let promise = new Promise(resolve => resolver = resolve);
    this.dataHandlers[actionId] = {
      resolver
    }
    this.emitData({ name, actionId })
    return promise;
  }

  generateActionId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

module.exports = CCI;

