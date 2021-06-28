# fdk-extension-bridge-javascript
FDK Extension Bridge Library

```javascript
const { Extension, components } = require("@gofynd/fdk-extension-bridge-javascript");

let ext = new Extension({apiKey: "12345667890"});

```

For Including Button
```javascript
let btn = new components.Button(ext, {
    label: "save"
});

let unsubcribe_handler = btn.subscribe(components.Button.Actions.CLICK, (event) => {
    // your code
});
btn.dispatch();
```

For Including Toggle Button

```javascript
let toggle = new components.ToggleButton(ext, {
    activeLabel: "Active",
    inactiveLabel: "Inactive",
});
let toggle_unsubcribe_handler = toggle.subscribe(components.ToggleButton.Actions.CHANGE, (event) => {
        // your code
});
toggle.dispatch({value: true});
```

For Including Context Menu Itrm

```javascript
let context = new components.ContextMenuItem(ext, {
    label: "Details",
});
let toggle_unsubcribe_handler = toggle.subscribe(components.ContextMenuItem.Actions.CLICK, (event) => {
        // your code
});
context.dispatch();
```

For destroy extesnion bridge

```javascript
ext.destroy()
```
