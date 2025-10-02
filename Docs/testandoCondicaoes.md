# 02 Para saber mais: testando diferentes condições

De maneira bastante similar ao que aprendemos em lógica de programação, quando implementamos um script no shell também podemos 
testar uma condição para direcionar a execução de diferentes blocos de instruções.

Usamos o comando condicional **if** para avaliar uma condição e direcionar o próximo passo na execução do código. O trecho de 
código a seguir apresenta a sintaxe adotada no **Bash** para execução do comando.

```bash
if [ condição ]; then
  # Comandos a serem executados se a condição testada for verdadeira.
elif [ outra condição ]; then
  # Comandos a serem executados se a primeira condição testada for falsa e a segunda condição testada for verdadeira.
else
  # Comandos a serem executados se nenhuma das condições testadas for verdadeira.
fi

```

Repare que a sintaxe do comando possibilita o teste de várias condições, permitindo a execução de diferentes blocos de comandos com 
base nesses testes.

Na criação dos testes adotamos operadores relacionais e lógicos de diferentes maneiras, como vemos nos exemplos a seguir:

#### Igualdade entre duas strings

```bash
if [ "$string1" = "$string2" ]; then
  # Comandos a serem executados se as strings forem iguais.
fi
```


#### Desigualdade entre duas strings

```bash
if [ "$string1" != "$string2" ]; then
  # Comandos a serem executados se as strings forem distintas.
fi
```

#### Igualdade entre dois números

```bash
if [ "$numero1" -eq "$numero2" ]; then
  # Comandos a serem executados se os números forem iguais.
fi
```
#### Desigualdade entre dois números

```bash
if [ "$numero1" -ne "$numero2" ]; then
  # Comandos a serem executados se os números forem distintos.
fi
```

#### Testando se um número é maior que outro

```bash
if [ "$numero1" -gt "$numero2" ]; then
  # Comandos a serem executados se o primeiro número for maior que o segundo.
fi
```


#### Testando se um número é menor que outro
```bash
if [ "$numero1" -lt "$numero2" ]; then
  # Comandos a serem executados se o primeiro número for menor que o segundo.
fi
```

#### Testando se um número é maior ou igual a outro
```bash
if [ "$numero1" -ge "$numero2" ]; then
  # Comandos a serem executados se o primeiro número for maior ou igual ao segundo.
fi
```

#### Verificando a existência de um arquivo ou diretório
```bash
if [  -e "/caminho/do/arquivo" ]; then
  # Comandos a serem executados caso seja constatada a existência do diretório ou arquivo.
fi
```

Note que as expressões condicionais devem estar entre [ ] e os espaços em branco são importantes na sintaxe. Os valores de strings 
devem ser colocados entre aspas para evitar problemas com espaços e caracteres especiais.
