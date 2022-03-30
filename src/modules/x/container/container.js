import { LightningElement } from 'lwc';

export default class Container extends LightningElement {
    connectedCallback() {
        console.log(`x-container:connectedCallback (id: ${this.id})`);
      
    }
    disconnectedCallback() {
        console.log(`x-container:disconnectedCallback (id: ${this.id})`);
    }
}