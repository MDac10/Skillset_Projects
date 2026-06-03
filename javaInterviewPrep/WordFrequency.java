package javaInterviewPrep;

//Give a sentence, return the frequencies of each word that appears in it
import java.util.*;

public class WordFrequency {
    public static Map<String, Integer> wordFrequency(String sentence){
        Map<String,Integer> wordFrequencies = new HashMap<>();

        for(String word : sentence.split(" ")){
            wordFrequencies.put(word, wordFrequencies.getOrDefault(word, 0) + 1);
        }

        return wordFrequencies;
    }

    public static void main(String[] args){
        System.out.println(wordFrequency("the fox jumped over the lazy dog and the dog laughed at the fox"));
    }
    
}
