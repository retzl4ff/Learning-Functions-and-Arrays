/* 
    function somaTudo() {
        let somaTudo = [1, 4, 5, 6, 7]
        let soma = 0
        for(pos in somaTudo){
            soma += somaTudo[pos]
        }
        return soma
    }
    let res = somaTudo()
    console.log(res) 
*/

//-------------------Parâmetro com ARRAY----------------------

/* 
    function somaTudo(numeros) {
        var total = 0
        
        for(var num of numeros) {
            total += num
        }

        return total
    }

    var arrayNumeros = [3, 5, 7, 10, 9, 12]
    var resultado = somaTudo(arrayNumeros)
    console.log(resultado)
*/

//-------------------Função Rest-----------------------------

/* 
    function escreverEndereco(rua, cidade, país, ...complementos){
        console.log(rua)
        console.log(cidade)
        console.log(país)
        console.log(complementos)
    }
    escreverEndereco('Rua a','Rio de Janeiro','Brazil','Casa xpto','CEP 123.123.123')
*/
 
// ------------------Função AutoExecutável-------------------

/* 
    (function autoExecuta(nome) {
        console.log('Executei', nome)
    }('Retzlaff')) 
*/

//-----------------Funções em Variáveis---------------------

// * Nesse caso o nome da função não é utilizado!

/* 
    var subtraiDoisNumeros = function subtrai(a, b) {
        return a-b
    }
    console.log(subtraiDoisNumeros(10,5))
*/

//-----------------Função Anônima-------------------------
/*  * Como vimos na função acima: A função é anônima pois a mesma
      não recebe nenhum nome, logo o nome que referencia ela é o
      nome da variável!    
*/

/* 
    var subtraiTresNumeros = function (a, b, c) {
        return a-b-c
    }
    console.log(subtraiTresNumeros(10,5,2))
*/
//---------------Funções CALLBACK!-----------------------

/* 
    function somaCallback(a, b, fnCallback){
        return fnCallback(a + b)
    }

    var multiplica = function(total){
        return total * 2
    }

    function exibir(num) {
        console.log(`A operação resultou em ${num}`)
    }

    function soma(a, b, callback){
        var op = a + b
        callback(op)
    }

    function multiplicacao(a, b, cb){
        var op = a * b
        cb(op)
    }

    soma(2,2, exibir)

    multiplicacao(2,4, exibir)
*/ 

//------------Função sem definir os parâmetros(default)-----
/* 
    function escreveNome(nome = 'Joao', idade = 17){
        console.log(nome)
        console.log(idade)
    }
    escreveNome('Sávio')
*/