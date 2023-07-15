//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
// TODO: Criar demais condições para a resolução deste desafio.

let media = gets();

if (media < 5) {
    print("REP");
} else if (media < 7) {
    print("REC");
} else if (media > 7) {
    print("APR");
}

