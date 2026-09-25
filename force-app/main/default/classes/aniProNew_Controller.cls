public with sharing class aniProNew_Controller {

  @AuraEnabled(cacheable=true)
public static List<Account> getAccounts() {
    return [SELECT Id, Name FROM Account];
}

    }