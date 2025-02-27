function somaIncrementoSucessivo(a, b) {
    if (b === 0) return a;
    return somaIncrementoSucessivo(a + 1, b - 1)
}

console.log(somaIncrementoSucessivo(3,2))