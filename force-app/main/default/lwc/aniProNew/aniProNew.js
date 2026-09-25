import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import saveDetails from "@salesforce/apex/aniProNew_Controller.saveDetails";

export default class AniProNew extends LightningElement {

taskTitle;
dueDate;
showDueDate = false;
showSave = false;

handleOnChange(event) {
    const fieldName = event.target.name;
    if (fieldName === "taskTitle") {
        this.taskTitle = event.target.value;
        if (this.taskTitle != "") {
            this.showDueDate = true;
        }
        else {
            this.showDueDate = false;
        }
    }
    else if (fieldName === "dueDate") {
        this.dueDate = event.target.value;
        this.dueDate != "" ? (this.showSave = true) : (this.showSave = false);
    }
    }

    handleClick() {
    console.log("###Buttons click on child");
    saveDetails({ title: this.taskTitle, dueDate: this.dueDate })
      .then((result) => {
        if (result === "Success") {
          this.taskTitle = "";
          this.dueDate = "";

          const evt = new ShowToastEvent({
            title: "Success",
            message: "A new item has been added in your Animesh details list",
            variant: "success"
          });
          this.dispatchEvent(evt);
          this.dispatchEvent(new CustomEvent("refreshtodo"));
          if (this.targetParent === true) {
            const selectedEvent = new CustomEvent("closeaction", {
              detail: result
            });
            this.dispatchEvent(selectedEvent);
          }
        }
      })
      .catch((error) => {
        console.log("🚀 ~ error:", error);
        const evt = new ShowToastEvent({
          title: "Error",
          message: error.body.message,
          variant: "error"
        });
        this.dispatchEvent(evt);
      });
}
}