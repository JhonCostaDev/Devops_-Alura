# ordem alfabética é o mesmo que ordem crescente? Conhecendo a tabela ASCII
 
No contexto computacional, falar que **"ordem alfabética"** é o mesmo que "ordem crescente" está correto — mas com uma ressalva. Para entender essa afirmação, precisamos entender o conceito de **Tabela ASCII (American Standard Code for Information Interchange).**

A ordem alfabética é considerada **"ordem crescente"** no computador devido à representação dos caracteres na tabela ASCII, uma tabela de codificação onde cada caractere tem um valor numérico associado.

Esses valores são ordenados em sequência crescente, começando do menor valor (caracteres de controle e pontuação) até o maior (letras e outros símbolos).

Na tabela ASCII:

    * Letras maiúsculas (A-Z) são representadas pelos números 65 a 90;
    * Letras minúsculas (a-z) vão de 97 a 122.

Quando um comando como sort organiza os dados em ordem crescente, ele segue esses valores ASCII, então:

* Caracteres de pontuação vêm primeiro;
* As letras maiúsculas aparecem antes das letras minúsculas, pois têm valores ASCII menores;
* Dentro de cada conjunto (maiúsculas ou minúsculas), as letras seguem a ordem alfabética.

Por isso, quando dizemos que a ordenação é "crescente" em termos alfabéticos, o computador está, na verdade, ordenando em termos de valores numéricos de ASCII de forma ascendente.

No caso de letras, essa ordem coincide com a ordem alfabética tradicional. Porém, a ordem ASCII inclui alguns detalhes a mais:

**Maiúsculas antes de minúsculas**: a tabela ASCII coloca as letras maiúsculas (A-Z) antes das minúsculas (a-z), então um ordenamento "crescente" irá listar todas as palavras que começam com maiúsculas antes das que começam com minúsculas, mesmo que tenham a mesma sequência de letras.

**Símbolos e números antes das letras**: Caracteres especiais (como !, #, e números de 0-9) têm valores menores que letras, então também vêm antes delas na ordenação crescente.

Portanto, dizer que "ordem alfabética" é o mesmo que "ordem crescente" está correto no sentido de que ambos seguem uma progressão em sequência, mas é útil lembrar que o computador organiza em crescente segundo a tabela ASCII (ou UTF-8, que expande a ASCII), e não necessariamente de acordo com uma ordem estritamente alfabética para todos os cenários de caracteres.