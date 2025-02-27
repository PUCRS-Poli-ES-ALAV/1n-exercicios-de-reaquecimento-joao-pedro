function inverterString(palavra) { 
    if (palavra.length === 0 || palavra.length === 1) return palavra;
    return palavra[palavra.length - 1] + inverterString(palavra.slice(0, -1))
}

console.log(inverterString('subino'))