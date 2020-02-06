/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ["Luis", 37, 93, true, false, [1,2,3,8]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function teste(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log = teste(qualquer)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function outro(arr, n){
    return arr[n];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var lista = ['testando', 5, true, false, 'outro'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
outro(lista, 0);
outro(lista, 1);
outro(lista, 2);
outro(lista, 3);
outro(lista, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var livros = {"Pai Rico Pai Pobre": {quantidadePaginas: 200,
                                         autor: "Roberto Kyosak",
                                         editora: "Campus"},

                  "Faça Fortunas com Ações": {quantidadePaginas: 357,
                                         autor: "Não sei",
                                         editora: "CLA"},

                  "O Homem mais Rico da Babilônia": {quantidadePaginas: 157,
                                         autor: "George S. Clason",
                                         editora: "HARPER"}
                 }
         return !nome ? livros : livros[nome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro  Pai Rico Pai Pobre tem " + book("Pai Rico Pai Pobre").quantidadePaginas + " páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro Pai Rico Pai Pobre é " + book('Pai Rico Pai Pobre').autor + "."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro Pai Rico Pai Pobre foi publicado pela editora " +book('Pai Rico Pai Pobre').editora + "."
