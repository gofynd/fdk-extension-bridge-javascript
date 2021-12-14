# fdk-extension-bridge-javascript

The `fdk-extension-bridge-javascript` library helps you set up contextual items as a part of the header for extensions.

In this document, you will find significant information about how to setup this library, the different components you can use as a part of this library, and how to reset the library.

<br /><br />

## Setup FDK Extension Bridge Library

```javascript
const { Extension, components } = require("@gofynd/fdk-extension-bridge-javascript");

let ext = new Extension({apiKey: "12345667890"});

```

<br /><br />

## Components

### Buttons

Buttons are clickable elements useful for triggering any event.

<br />

#### Properties

#### `label` (Required property)
- It defines the text that needs to be displayed on the button.
- It accepts a value of type `String`.

#### `disabled` (Optional property)
- It decides if the button will be disabled. A disabled button will not be clickable.
- It accepts a Boolean value of `true` or `false`. By default, the value for this property will be `false`. It means, the button by default will not be disabled.

#### `id` (Optional property)
- It's an optional property that defines an ID for the button.
- It accepts a value of type `String`.

#### `type` (Optional proprty)
- It defines the type of the button.
- It accepts one of the two values - `flat` or `stroke`.

<br />

#### Sample code to include buttons

```javascript
let btn = new components.Button(ext, {
    label: "save"
});

let unsubcribe_handler = btn.subscribe(components.Button.Actions.CLICK, (event) => {
    // your code
});
btn.dispatch();
```

#### Preview
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/master/demo/button.png" alt="Button">


<hr />




### Toggle Buttons

Toggle buttons are useful for switching between two different states. 

<br />

#### Properties

#### `activeLabel` (Required property)
- It defines the text that needs to be displayed when the toggle is in an active state.
- It accepts a value of type `String`.

#### `inactiveLabel` (Required property)
- It defines the text needs to be displayed when the toggle is in an inactive state.
- It accepts a value of type `String`.

#### `disabled` (Optional property)
- It decides if the toggle button will be disabled. A disabled toggle button will not be clickable.
- It accepts a Boolean value of `true` or `false`. By default, the value of this property will be `false`. It means, the toggle button will not be disabled in its default state.

<br />

#### Sample code to include toggle buttons

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

#### Preview
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/master/demo/toggle_button.png" alt="Toggle Button">


<hr />


### Context Menu Item

A context menu item is useful for providing additional options for users.

<br />

#### Properties

#### `label` (Required property)
- It defines the text that needs to be displayed for the item.
- It accepts a value of type `String`.

#### `id` (Optional property)
- It's an optional property that defines an ID for the context menu item.
- It accepts a value of type `String`.

<br />

#### Sample code to include a context menu

```javascript
let context = new components.ContextMenuItem(ext, {
    label: "Details",
});
let toggle_unsubcribe_handler = toggle.subscribe(components.ContextMenuItem.Actions.CLICK, (event) => {
        // your code
});
context.dispatch();
```

#### Preview
<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/master/demo/context_item.png" alt="Context Item">


<hr />



### Breadcrumb

A breadcrumb is a navigational element useful for guiding users while using the extension. It helps the user understand the flow of the extension. It also serves as a guide to the user by pointing out the current page the user is currently viewing.
<br />
Breadcrumb is appeneded to the title of the extension separated by a `/`.

<br />

#### Properties

#### `displayText` (Required property)
- It defines the text that needs to be displayed as a part of the breadcrumb. This text will be appended to the title with the help of a separator `/`.
- It accepts a value of type `String`.

<br />

### Sample code to include a breadcrumb

```javascript
let breadCrumbs = new components.Breadcrumb(EXT, {
    displayText: "Export Data",
});
breadCrumbs.dispatch();
```

#### Preview

<img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/breadcrumb-support/demo/breadcrumb.png" alt="Breadcrumb">




<hr />




### Tags

A tag is useful to provide an indicative badge to help the user understand additional information about the extension.

<br />

#### Properties

#### - `text` (Required property)
- It defines the text that needs to be displayed inside the tag.
- It accepts a value of the type `String`.

#### `tagState` (Optional property) 
- It defines the state of the tag, i.e., whether you intend to display it as an information, an error, a success message, a disabled value, or a warning.
- It can take only one of the following values: `info`, `success`, `warn`, `disable`, or `none`. By default, the value of the state is `info`.

#### `fill` (Optional property)
- It decides if the background for the tag should be transparent. 
- It accepts a Boolean value of either `true` or `false`. If the value is `true`, it will fill the tag's background with the color of the selected state. By default, the value is false which means it will have a transparent background. 

<br />

#### Sample code to include a tag

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

#### Preview 

<!-- <img src="https://github.com/gofynd/fdk-extension-bridge-javascript/blob/tag-extension/demo/tag.png" alt="Tag"> -->
<img src="/demo/tag.png" alt="Tag">



<br /><br />

## Reset extension bridge

```javascript
ext.destroy()
```
