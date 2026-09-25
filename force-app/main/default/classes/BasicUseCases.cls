public class BasicUseCases {
    
    public static String correctPassword = 'Animesh_singh';
    public static Integer attemptCounter = 1;
    
    public static String handlePasswordAttempts(String passwordInput){
        if (passwordInput != correctPassword){
            attemptCounter++;
                if(attemptCounter > 3){
                    return 'Mximum attempt reached and now your account has been locked';
                }
            return 'Failure';
        }
        else{
            return 'Success';
        }
    } 
}