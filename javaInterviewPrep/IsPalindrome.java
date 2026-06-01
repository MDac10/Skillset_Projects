package javaInterviewPrep;

public class IsPalindrome {
    public static Boolean isPalindrom(String s){
        StringBuilder reversed = new StringBuilder();
        for(int i = s.length() - 1; i >= 0; i--){
            reversed.append(s.charAt(i));
        }

        return s.equals(reversed.toString());
    }

    public static void main(String[] args){
        System.out.println(isPalindrom("racecar"));
    }
}
