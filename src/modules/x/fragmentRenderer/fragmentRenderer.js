import { api, LightningElement } from 'lwc';

export default class FragmentRenderer extends LightningElement {
    @api item;
    @api fragment;

    render() {
        return this.fragment;
    }
}