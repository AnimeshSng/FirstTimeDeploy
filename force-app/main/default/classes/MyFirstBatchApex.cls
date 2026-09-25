public class MyFirstBatchApex implements Database.Batchable<sObject> {

    // 🔹 1. START METHOD
    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator(
            'SELECT Id, Industry, Rating FROM Account WHERE Industry = \'Banking\''
        );
    }

    // 🔹 2. EXECUTE METHOD
    public void execute(Database.BatchableContext bc, List<Account> scope) {

        for (Account acc : scope) {
            acc.Rating = 'Hot';
        }

        update scope;
    }

    // 🔹 3. FINISH METHOD
    public void finish(Database.BatchableContext bc) {
        System.debug('✅ My First Batch Apex Completed Successfully');
    }
}