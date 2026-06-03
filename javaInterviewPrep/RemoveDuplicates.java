package javaInterviewPrep;

import java.util.*;

public class RemoveDuplicates {
    public static Set<Integer> removeDuplicates(List<Integer> numbers) {
        Set<Integer> uniqueValues = new HashSet<>();

        for(int nums : numbers){
            uniqueValues.add(nums);
        }

        return uniqueValues;
    }

    public static void main(String[] args) {
        List<Integer> n = List.of(1,2,1,5,7,5,5,7,8,3);
        System.out.println(removeDuplicates(n));
    }
}
