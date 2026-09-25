import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class NewLwcComp extends LightningElement {
@track accountOptions = [];
    value;
    clickedButtonLabel;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accountOptions = data.map(account => ({
                label: account.Name,
                value: account.Id
            }));
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }

    handleClick() {
    const event = new ShowToastEvent({
        title: 'Success',
        message: 'Record saved successfully!',
        variant: 'success' // 👈 this makes it GREEN
    });

    this.dispatchEvent(event);
}

    handleChange(event) {
        this.value = event.detail.value;
    }
}