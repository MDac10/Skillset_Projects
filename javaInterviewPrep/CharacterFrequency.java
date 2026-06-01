package javaInterviewPrep;

import java.util.HashMap;
import java.util.Map;

public class CharacterFrequency {
    public static Map<Character, Integer> characterFrequency(String s) {
        Map<Character, Integer> frequencies = new HashMap<>();
        for(char c : s.toCharArray()){
            frequencies.put(c, frequencies.getOrDefault(c, 0) + 1);
        }

        return frequencies;
    }

    public static void main(String[] args) {
        System.out.println(characterFrequency("Hippos"));
    }

}
