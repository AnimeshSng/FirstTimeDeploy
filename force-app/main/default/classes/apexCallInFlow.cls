public class apexCallInFlow {
@InvocableMethod
public static List<String> returnApdateAccountName(List<ID> ids) {

    List<String> accountNames = new List<String>();

    List<Account> accounts = [SELECT Name FROM Account WHERE Id in :ids];

    for (Account account : accounts) {
        accountNames.add(account.Name);
    }
    return accountNames;
}
    
}