package javaInterviewPrep;

//print "Fizz" if number is divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both, print number if none

public class FizzBuzz {
    public static void fizzBuzz(Integer number) {
        if((number % 3 == 0) && (number % 5 == 0)) {
            System.out.println("FizzBuzz");
        } else if (number % 3 == 0) {
            System.out.println("Fizz");
        } else if (number % 5 == 0) {
            System.out.println("Buzz");
        } else {
            System.out.println(number);
        }
    }

    public static void main(String[] args) {
        fizzBuzz(15);
        fizzBuzz(4);
        fizzBuzz(6);
        fizzBuzz(11);
        fizzBuzz(10);
    }
}
