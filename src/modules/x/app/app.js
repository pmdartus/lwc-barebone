import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    isVisible = true;

    handleVisibleToggle() {
        this.isVisible = !this.isVisible;
    }
}