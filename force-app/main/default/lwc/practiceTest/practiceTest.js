import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class MyWireFunctionDemo extends LightningElement {

    accounts;
    error;
    conRen;

    @wire(getAccounts)
    wiredAccounts({ data, error }) {

        if (data) {
            this.accounts = data;   // store the data manually
            this.error = undefined;
        } 
        else if (error) {
            this.error = error;      // store the error manually
            this.accounts = undefined;
        }

    }

     handleShow(){
        this.conRen = true;
     }

     handleHide(){
        this.conRen = false;
     }

}