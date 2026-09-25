({
	getContactData : function(component, event, helper) {
		var action = component.get ("c.getCon");
        action.setCallback(this,function(response){
               var state = response.getState();
        if (state == 'SUCCESS'){
           var returnData = response.getReturnValue();
           component.set("v.getConList",returnData);
        }
     });
    $A.enqueueAction(action);
	},

    openCreatedContact : function(component, event, helper){
        component.set("v.CreateContactModel", true);
    },
    
    closeModal : function(component, event, helper){
        component.set("v.CreateContactModel", false);
    },
    
    CreateContact : function(component, event, helper){
        var name = component.find("conName").get("v.value");
        var phone = component.find("phone").get("v.value");
        var email = component.find("email").get("v.value");
        var action = component.get("c.insertCon");
        action.setParams({'lastName': name, 'phoneNo' : phone, 'emailId' : email});
        action.setCallback(this,function(response){
            if(response.getState() == 'SUCCESS'){
                $A.get('e.force:refreshView').fire();
                component.set("v.CreateContactModel", false);
            }
        });
        $A.enqueueAction(action);
    }
    
})