public with sharing class newLwcCompController {
    @AuraEnabled(cacheable=true)
    public static Map<String, String> getAccountFields(Id recordId) {
        Account acc = [SELECT Name, Industry, Phone FROM Account WHERE Id = :recordId LIMIT 1];
        
        Map<String, String> fieldMap = new Map<String, String>();
        fieldMap.put('Name', acc.Name);
        fieldMap.put('Industry', acc.Industry);
        fieldMap.put('Phone', acc.Phone);
        
        return fieldMap;
    }
}