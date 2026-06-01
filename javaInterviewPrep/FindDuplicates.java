package javaInterviewPrep;

import java.util.*;

//Make two sets. One for seen and one for duplicates. for each number in array, it is not in seen, add it, if it is, then add it to duplicates. Return duplicates

public class FindDuplicates {
    public static Set<Integer> findDuplicates(List<Integer> numbers){
        Set<Integer> once = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();

        for (int i : numbers){
            if (!once.contains(i)){
                once.add(i);
            } else {
                duplicates.add(i);
            };
        }

        return duplicates;
    }

    public static void main(String[] args) {
        List<Integer> nums = List.of(1,2,2,3,3,4,5,6,6);
        System.out.println(findDuplicates(nums));
    }
}
