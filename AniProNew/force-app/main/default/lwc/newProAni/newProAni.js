import { LightningElement } from "lwc";

export default class PillRemoveExample extends LightningElement {
    value = '';
    showPill = false;

    options = [
        { label: 'Basic Pills', value: 'basic' },
        { label: 'Pill With an Avatar', value: 'avatar' },
        { label: 'Pill With an Icon', value: 'icon' },
        { label: 'Pill With an Error', value: 'error' },
        { label: 'Pill with RTL Display', value: 'rtl' },
    ];

    handleChange(event) {
        this.value = event.detail.value;
        // Show pills only when a dropdown option is selected
        this.showPill = true;
    }

    handleRemoveOnly(event) {
        event.preventDefault();
        this.showPill = false;
    }

    handleClick(event) {
        alert("The pill was clicked!");
    }
}
