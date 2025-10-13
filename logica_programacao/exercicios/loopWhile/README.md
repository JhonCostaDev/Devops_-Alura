Suponha que você está desenvolvendo um programa para uma loja de jogos e precisa calcular o desconto total que um cliente receberá em sua compra, de acordo com as seguintes regras:

* A loja oferece desconto progressivo com base na quantidade de jogos comprados;
* Cada jogo custa R$50 sem desconto;
* Se o cliente comprar 5 ou mais jogos, ele receberá um desconto de 10% em cada jogo;
* Se o cliente comprar 10 ou mais jogos, ele receberá um desconto de 20% em cada jogo;

Você deseja usar um loop while para calcular o desconto total, dado o número de jogos comprados, e escreveu o seguinte código:

```javascript
function calcularDescontoTotal(quantidadeDeJogos) {
    let desconto = 0;
    let i = 0;

    while (i < quantidadeDeJogos) {
        if (quantidadeDeJogos >= 5) {
            desconto += 0.1 * 50;
        } else if (quantidadeDeJogos >= 10) {
            desconto += 0.2 * 50;
        }
        i++;
    }

    return desconto;
}
```
No entanto, você percebeu que há problemas de lógica no código escrito e ele não está funcionando conforme as regras descritas anteriormente.

Escolha a alternativa que indica o problema de lógica no código anterior:

a) () A variável i foi incrementada na última linha do bloco while, sendo que isso é desnecessário, pois o incremento é automático.


b) () O loop while foi escrito de forma incorreta, fazendo com que o código entre em um loop infinito.


c) (X) O primeiro bloco if foi escrito de maneira incorreta, fazendo com que o segundo if nunca seja executado.


d) () A variável i foi declarada sem a palavra let no loop while.