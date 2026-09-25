public with sharing class otpGenerator {

    @AuraEnabled
    public static String sendOtp(String mobileNumber) {

        String otp = generateOTP(6);

        // Call SMS API (MSG91 example)
        sendSMS(mobileNumber, otp);

        return otp;
    }

    public static String generateOTP(Integer length) {
        String chars = '0123456789';
        String otp = '';

        for(Integer i=0; i<length; i++){
            Integer index = (Integer)(Math.random() * chars.length());
            otp += chars.substring(index, index+1);
        }

        return otp;
    }

    public static void sendSMS(String mobile, String otp) {

        String apiKey = 'YOUR_API_KEY';
        String senderId = 'MSGIND';

        String url = 'https://api.msg91.com/api/sendhttp.php?authkey=' + apiKey +
                     '&mobiles=' + mobile +
                     '&message=Your OTP is ' + otp +
                     '&sender=' + senderId +
                     '&route=4&country=91';

        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');

        HttpResponse res = http.send(req);

        System.debug('SMS Response: ' + res.getBody());
    }
}