package javaInterviewPrep;

import java.util.*;

public class SumNumbers {
    public static int sumNumbers(List<Integer> numbers) {
        int total = 0;

        for(int nums : numbers) {
            total = total + nums;
        }

        return total;
    }

    public static void main(String[] args){
        List<Integer> n = List.of(1,7,19,4,6);
        System.out.println(sumNumbers(n));
    }
}
