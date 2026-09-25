import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    receivedName;
    receivedRole;

    handleData(event) {
        this.receivedName = event.detail.name;
        this.receivedRole = event.detail.role;
    }
}