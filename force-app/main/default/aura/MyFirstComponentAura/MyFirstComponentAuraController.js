({
	handleAddition : function(component, event, helper) {
        let input1 =component.get("v.inputOne");
        let input2 =component.get("v.inputTwo");
		let finalAnswer = parseInt(input1)+parseInt(input2);
        
        component.set("v.additionAnswers",finalAnswer);
      
	}
})