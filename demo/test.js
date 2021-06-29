'use strict';

const {
    Extension,
    components
} = require("../index");



let ext = new Extension({
    apiKey: "12345667890"
});


let btn = new components.Button(ext, {
    label: "save"
});


/**
 * event = {
 *  target: "Button",
 *  id: ""
 *  action: "",
 *  data: {}
 *  apiKey: ""
 * }
 */
let unsubcribe_handler = btn.subscribe(components.Button.Actions.CLICK, function (event) {

});

btn.dispatch()

// to unsubcribe call th
btn.unsubcribe(unsubcribe_handler);


let toggle = new components.ToggleButton(ext, {
    label: "Active",
});
let toggle_unsubcribe_handler = toggle.subscribe(
    components.ToggleButton.Actions.CHANGE,
    function (event3) {
        console.log(event3, 'event3')
    }
);
toggle.dispatch({
    value: true
})

toggle.unsubcribe(toggle_unsubcribe_handler);

// to destory extension
ext.destroy()