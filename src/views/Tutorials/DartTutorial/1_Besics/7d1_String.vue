<script setup>
import DartCodeSnippt from '../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart String
    </div>

    <DartCodeSnippt codeTitle="String In Dart">
        <pre>
void main(){
    // ============================[ String In Dart ]=============================
  String textOne = 'This is single line string';
  String textTwo = "This is single line string inside 'double quotes'";
  String textThree = """
  Multiline string example:
  This is tutorial on dart string.
  """;

  print(textOne);
  print(textTwo);
  print(textThree);
}
        </pre>
    </DartCodeSnippt>

    <DartCodeSnippt codeTitle="String Concatenation">
        <pre>
void main(){
    // ==========================[ String Concatenation ]=========================
  String firstName = "Supriya";
  String lastName = "Singh";

  print("Using +, Full Name Is: " +firstName+ " "+lastName);
  print("Using interpolation, Full Name Is: $firstName $lastName");
}
        </pre>
    </DartCodeSnippt>

    <DartCodeSnippt codeTitle="String Properties">
        <pre>
void main(){
    // ============================[ String Properties ]==========================
  String spString = 'it is a string';
  print(spString.codeUnits);
  print(spString.isEmpty);
  print(spString.isNotEmpty);
  print("Length of the string is: ${spString.length}");
}
        </pre>
    </DartCodeSnippt>


    <DartCodeSnippt codeTitle="Methods Of String">
        <pre>
void main(){
    // ============================[ Methods Of String ]==========================
    String moStringOne = "First text";
    String moStringTwo = "Second text";
    String moStringThree = " Third text";
    String moStringFour = "Fourth text ";
    // Uppercase conversion
    print(moStringOne.toUpperCase());

    // Lowercase conversion
    print(moStringTwo.toLowerCase());

    // Trimming text
    print("Trim first string: ${moStringOne.trim()}");
    print("Trim Left Third string: ${moStringThree.trimLeft()}");
    print("Trim Left Forth string: ${moStringFour.trimRight()}");

    // Compare string
    print("Compare 1st string to 4th: ${moStringOne.compareTo(moStringFour)}");

    // Replace String
    String newString = moStringOne.replaceAll("First", "New String");
    print("The New String Is: ${newString}");

    // Split String
    String nameString = "Bose, Singh, Thakur, Patekar";
    List&lt;String&gt; splitList = nameString.split(",");
    print(splitList);
    print(splitList[2]);

    // ToString
    int numOne = 202;
    String result = numOne.toString();
    print("Result: $result | Type Is: ${result.runtimeType}");

    // SubsString
    String ssString = "We love coding, programs run in our ven";
    print("Print only computer: ${ssString.substring(14)}"); // from index 13 to the last index
    print("Print only love: ${ssString.substring(2,8)}");// from index 2 to the 8th index

    // Reverse String
    String input = "Hello World";
    print("${input.split('').reversed.join()}");

    // Capitalize First Letter
    String notCapText = "truth is lie, lie is truth";
    print("Capitalize first letter: ${notCapText[0].toUpperCase()}${notCapText.substring(1)}");
    List&lt;String&gt; textList = notCapText.split(", ");
    print(textList);
    print("${textList[0][0].toUpperCase()}${textList[0].substring(1)}, ${textList[1][0].toUpperCase()}${textList[1].substring(1)}");

}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>