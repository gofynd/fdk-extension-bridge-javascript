# fdk-extension-bridge-javascript
FDK Extension Bridge Library

```javascript
const { Extension, components } = require("@gofynd/fdk-extension-bridge-javascript");

let ext = new Extension({apiKey: "12345667890"});

// For Including Button

let btn = new components.Button(ext, {
    label: "save"
});

let unsubcribe_handler = btn.subscribe(components.Button.Actions.CLICK, (event) => {
    // your code
});
btn.dispatch();

// For Including Toggle Button

let toggle = new components.Toggle(ext, {
    activeLabel: "Active",
    inactiveLabel: "Inactive",
});
let toggle_unsubcribe_handler = toggle.subscribe(components.Toggle.Actions.CHANGE, (event) => {
        // your code
});
toggle.dispatch({value: true});

// For Including Context Menu Itrm

let context = new components.ContextItem(ext, {
    label: "Details",
});
let toggle_unsubcribe_handler = toggle.subscribe(components.ContextItem.Actions.CLICK, (event) => {
        // your code
});
context.dispatch({});

// For destroy extesnion bridge

ext.destroy()

```

