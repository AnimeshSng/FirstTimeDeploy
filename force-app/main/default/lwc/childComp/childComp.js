import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    sendDataToParent() {
        // Create a custom event with some data
        const event = new CustomEvent('senddata', {
            detail: { name: 'Animesh', role: 'Salesforce Developer' }
        });

        // Dispatch the event
        this.dispatchEvent(event);
    }
}