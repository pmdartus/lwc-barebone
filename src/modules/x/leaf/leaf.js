import { LightningElement } from 'lwc';

export default class Leaf extends LightningElement {
    connectedCallback() {
        console.log(`x-leaf:connectedCallback (id: ${this.id})`);
    }
    disconnectedCallback() {
        console.log(`x-leaf:disconnectedCallback (id: ${this.id})`);
    }
}