# fdk-extension-bridge-javascript

## Setup FDK Extension Bridge Library

```javascript
const { Extension, components } = require("@gofynd/fdk-extension-bridge-javascript");

let ext = new Extension({apiKey: "12345667890"});

```

## For Including Button
```javascript
let btn = new components.Button(ext, {
    label: "save"
});

let unsubcribe_handler = btn.subscribe(components.Button.Actions.CLICK, (event) => {
    // your code
});
btn.dispatch();
```
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/master/demo/button.png" alt="Button"><hr>

## For Including Toggle Button

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
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/master/demo/toggle_button.png" alt="Toggle Button"><hr>

## For Including Context Menu Item

```javascript
let context = new components.ContextMenuItem(ext, {
    label: "Details",
});
let toggle_unsubcribe_handler = toggle.subscribe(components.ContextMenuItem.Actions.CLICK, (event) => {
        // your code
});
context.dispatch();
```
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/master/demo/context_item.png" alt="Context Item"><hr>

## For Including Breadcrumb

```javascript
let breadCrumbs = new components.Breadcrumb(EXT, {
    displayText: "Export Data",
});
breadCrumbs.dispatch();
```
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/breadcrumb-support/demo/breadcrumb.png" alt="Breadcrumb"><hr>

## For resetting extesnion bridge

```javascript
ext.destroy()
```
