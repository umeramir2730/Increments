var a = 15;

//value 1 = //15 + //17 - //16
//        = //32 - //16
//        = //16
var value1 = a++ + ++a - --a;

//value 2 = 16 + 17 - 16 + 16 + 15 - 15 - 15 - 15
//        = 33 - 16 + 31 - 45
//        = 17 - 14
//        = 3
var value2 = ++a + ++a - --a + a-- + a - a - a++ - --a;

console.log(value1,value2)