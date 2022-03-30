import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    connectedCallback() {
        console.log(`x-parent:connectedCallback (id: ${this.id})`);
      
    }
    disconnectedCallback() {
        console.log(`x-parent:disconnectedCallback (id: ${this.id})`);
    }
}