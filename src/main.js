import { createElement, setFeatureFlagForTest } from "lwc";
import App from "x/app";

setFeatureFlagForTest('ENABLE_LIGHT_DOM_COMPONENTS', true);

const elm = createElement("x-app", { is: App });
document.body.appendChild(elm);

if (elm.firstElementChild.tagName === 'H1') {
    console.log('x-app is rendered in the light DOM')
} else {
    console.log('x-app is rendered in the shadow DOM')
}