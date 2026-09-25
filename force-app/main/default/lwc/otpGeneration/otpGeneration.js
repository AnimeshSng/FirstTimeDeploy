import { LightningElement } from 'lwc';
import sendOtp from '@salesforce/apex/otpGenerator.sendOtp';

export default class MobileOtp extends LightningElement {
    mobileNumber;
    enteredOtp;
    generatedOtp;
    otpSent = false;
    message;

    handleMobileChange(event) {
        this.mobileNumber = event.target.value;
    }

    handleOtpChange(event) {
        this.enteredOtp = event.target.value;
    }

    sendOtp() {
        sendOtp({ mobileNumber: this.mobileNumber })
            .then(result => {
                this.generatedOtp = result;
                this.otpSent = true;
                this.message = 'OTP sent to your mobile';
            })
            .catch(error => {
                this.message = error.body.message;
            });
    }

    verifyOtp() {
        if (this.enteredOtp === this.generatedOtp) {
            this.message = '✅ OTP Verified Successfully';
        } else {
            this.message = '❌ Invalid OTP';
        }
    }
}