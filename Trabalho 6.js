function contarVogais(frase) {
    frase = frase.toLowerCase(); // Converter a frase para minúsculas
    const vogais = 'aeiou';
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            contador++;
        }
    }
    return contador;
}