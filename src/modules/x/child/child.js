import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    @api items = [];
    @api fragment;
}