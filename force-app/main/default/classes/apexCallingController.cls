public class apexCallingController {
    @AuraEnabled
    public static List<Contact> getCon(){
        return [Select id,Name,Email,Phone, Languages__c From Contact order by Name ASC];
    }
    
    @AuraEnabled
    public static Boolean insertCon(String lastName, String phoneNo, String emailId){
        Contact con = new Contact();
        con.LastName = lastName;
        con.Phone = phoneNo;
        con.Email = emailId;
        insert con;
        return true;
    }
}