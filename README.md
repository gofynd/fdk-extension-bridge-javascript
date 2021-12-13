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

## For Including Tags

### Properties

- `tagState` defines the state of the tag, i.e., whether you intend to display it as an information, an error, a success message, a disabled value, or a warning. <br />
It can take only one of the following values: `info`, `success`, `warn`, `disable`, or `none`. 
- `fill` decides if the background for the tag should be transparent or not. If the value is `true`, it will fill the tag's background with the color of the selected state. By default, the value is false which means it will have a transparent background. <br />
It can take either a Boolean value of `true` or `false`.
- `text` will take a String value that will be displayed as the text of the tag.

```javascript
let tag1 = new components.Tag(EXT, {
    tagState: "info",
    fill: false,
    text: "Public"
});
tag1.dispatch();

let tag2 = new components.Tag(EXT, {
    tagState: "error",
    fill: true,
    text: "Error"
});
tag2.dispatch();
```
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/tag-extension/demo/tag.png" alt="Tag"><hr>

## For resetting extension bridge

```javascript
ext.destroy()
```
