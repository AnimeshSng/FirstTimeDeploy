trigger TastTrigger on Task (before insert) {

    if(trigger.isInsert && trigger.isBefore){
        for(Task taskRecord : Trigger.NEW){
            system.debug('New record has been found');
            taskRecord.Priority = 'High';
        }
}
}