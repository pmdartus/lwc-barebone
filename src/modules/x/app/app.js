import { LightningElement } from 'lwc';

import fragment from './fragment.html';

export default class App extends LightningElement {
    items = [{
        id: 0,
        name: 'lait'
    }, {
        id: 1,
        name: 'farine'
    }];

    fragment = fragment;
}