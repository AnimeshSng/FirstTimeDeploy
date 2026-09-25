public class getAccounts {
@AuraEnabled(cacheable=true)
public static List<Account> getAccounts() {
    return [SELECT Id, Name FROM Account];
}
}