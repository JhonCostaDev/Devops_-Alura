# Para saber mais: Processamento de Texto e Coleta de dados

Quando criamos um código que precisa coletar dados para verificar condições e direcionar os próximos passos da execução, não lidaremos 
apenas com números que serão comparados com valores de referência. Muitas vezes, dados importantes para a execução do nosso código devem ser 
obtidos a partir de textos. Pode até parecer um desafio complexo de ser solucionado, mas o Bash tem alguns comandos e atalhos que nos 
ajudam a criar uma solução sem muita dificuldade.

O comando **grep** é um importante aliado que atua na busca de dados em arquivos ou fluxos de entrada do código 
(dados digitados por um usuário no teclado, por exemplo). Esse comando nos permite especificar palavras ou padrões para a pesquisa.

Para realizarmos a busca de um padrão em um arquivo utilizando o grep, utilizamos a seguinte sintaxe:

```bash
grep [opções] padrão [ARQUIVO]
```


As opções possibilitam o refinamento do processo de busca e a forma de exibição dos resultados. Caso queira, por exemplo, buscar uma 
palavra ignorando letras maiúsculas e minúsculas, basta inserir a opção **-i** na linha de comando. Já para contar quantas vezes uma palavra 
aparece em um determinado arquivo, você pode usar a opção **-c** . Para explorar melhor o comando e suas várias opções, utilize o **grep - -help** .

Por outro lado, o processamento dos dados pode demandar o uso encadeado de vários comandos, direcionando a saída de uma pesquisa 
com o grep, por exemplo, para a entrada de outro comando (e vice-versa).

Esse direcionamento de dados entre diferentes comandos é implementado usando um operador conhecido como pipe, representado por **|** . 
Ele atua no direcionamento da saída de um comando para entrada de outro, criando, dessa forma, um fluxo contínuo de dados.

```bash
cat novo.txt | grep "padrão"
```

Um caso prático de uso do operador pipe com o comando grep é ilustrado no comando acima que exibe o conteúdo do arquivo de título “novo.txt” 
no terminal e, na sequência, usa o grep para procurar e exibir todas as linhas que possuem o “padrão” especificado.

Repare que essas ferramentas são bastante úteis no filtro e coleta de dados que desejamos a partir de arquivos e informações dispostas em 
um texto.
