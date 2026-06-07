package javaInterviewPrep;

import java.util.*;

//Note that the first item in the list is the largest number. Compare that number to every item in the list, if a number is larger than the "largest", it gets replaced

public class FindLargestNumber {
    public static Integer findLargestNumber(List<Integer> nums){
        int largest = nums.get(0);
        for (int i : nums){
            if (i > largest) { 
                largest = i;
            }
        }
        return largest;
    }

    public static void main(String[] args) {

        List<Integer> nums = List.of(1,2,3,4,13,6,7,8,9);

        System.out.println(findLargestNumber(nums));
    }
}
