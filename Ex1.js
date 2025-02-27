function SomaSucessiva (num1, num2) {
    if (num2 === 0) return 0;
    return num1 + SomaSucessiva(num1, num2 -1)
} 

console.log(SomaSucessiva(6, 4));