# Comparando arquivos

Nós já realizamos várias operações e processamentos em nosso script de logs. Capturamos os logs relevantes, de erro e de mensagens com dados sensíveis. Ordenamos essas informações, removemos duplicatas e chegamos a um arquivo .unico, contendo todos esses processamentos.

Até o momento, sempre que fazíamos alguma alteração no script que afetava esses arquivos, verificávamos essas modificações no terminal, utilizando comandos, como cat.

Mas o que acontece se quisermos comparar o arquivo original (aquele primeiro arquivo de logs que recebemos) com o arquivo final que obtivemos? E se quisermos verificar as mudanças entre eles?

Se utilizarmos o cat, precisaríamos imprimir na tela o conteúdo de um arquivo após o outro e procurar manualmente as diferenças, o que é um processo complicado. Existe uma forma mais fácil no Linux para fazermos essa comparação entre dois arquivos?

## Comparando arquivos com diff

No Linux, temos o comando diff para comparar arquivos! Para conferir como ele funciona, vamos comparar o arquivo original **myapp-backend.log** com o **myapp-backend.log.unico**.

No terminal, dentro da pasta dos nossos logs, vamos digitar **diff** seguido do nome do arquivo original e do nome do arquivo que queremos comparar:

```bash
diff myapp-backend.log myapp-backend.log.unico
```

Ao pressionar "Enter", o sistema nos fornece uma saída que indica as diferenças. A seguir, vamos entender como interpretar essa saída.

### Entendendo a saída do diff

O diff nos mostra as diferenças por meio de letras e números. Os números representam as linhas dentro dos arquivos e as letras indicam o tipo de alteração:

A letra **d** indica que algo foi deletado ou excluído.

A letra **a** indica que algo foi alterado.
A letra **c** indica que algo foi modificado entre os dois arquivos.

Vamos analisar a saída, parte por parte, considerando essas letras e números. Na primeira linha da saída, temos:

        2d1

O número **2** indica que a linha 2 do arquivo original **myapp-backend.log** foi excluída, ação representada pela letra **d**. O valor **1** mostra onde ela estaria no arquivo original, caso a modificação não tivesse sido feita.

Em seguida, temos a seguinte linha:

    < 2024-09-01 10:06:10 INFO: Retrying database connection...

A linha começa com o sinal de menor que **(<)**, indicando que é o conteúdo que temos no arquivo original.

Na sequência, temos:

    4,6c3

Isso indica que as linhas **4 a 6** foram modificadas no arquivo original, identificado pela letra **c**. A alteração está na linha 3 do arquivo único.

A próxima linha é:

    < 2024-09-01 10:09:55 INFO: Database connection established.

    < 2024-09-01 11:00:00 INFO: SENSITIVE_DATA: User password is 12345.

    < 2024-09-01 11:00:00 INFO: User logged in with username: admin.

O sinal de menor que **(<)** mostra o texto do primeiro arquivo. Depois, temos uma linha de separação (três traços). Na sequência, temos:

    > 2024-09-01 11:00:00 INFO: SENSITIVE_DATA: User password is REDACTED

O sinal de maior que **(>)** indica o conteúdo do arquivo modificado. Notamos, então, que houve alteração do user **password**, onde ocultamos a informação da senha do usuário.

Não adicionamos conteúdo novo no arquivo .unico. Caso houvesse uma linha nova, ela seria representada pela letra a. Portanto, é assim que funciona a saída do **diff**.

Quando não há diferenças entre dois arquivos, o diff não retorna nada. Podemos verificar isso rodando o diff e comparando myapp-backend.log com ele mesmo:

    diff myapp-backend.log myapp-backend.log

Esse comando não gera saída, pois o arquivo é igual a ele mesmo.

Além de comparar arquivos, o diff também pode ser utilizado para comparar conteúdos em diretórios. 

É uma ferramenta versátil e útil para comparações entre arquivos e diretórios, sendo bastante utilizada em contextos como rastreamento de mudanças no sistema, criação de patches e revisão de código.

Agora que aprendemos a utilizar essa ferramenta, continuaremos incrementando nosso script, avançando nas análises e no processamento dos nossos logs.


## Question

No Bytebank, um banco digital, você é responsável por garantir a integridade dos logs de transações. 

Recentemente, você implementou um script que processa esses logs. Para verificar se as alterações foram aplicadas corretamente, você utilizou o comando **diff** para comparar o arquivo original **transacoes-bytebank.log** com o arquivo processado **transacoes-bytebank.log.unico**, obtendo a seguinte saída:

    4,6c3
    < 2024-09-01 10:09:55 INFO: Conexão com o banco de dados estabelecida.
    < 2024-09-01 11:00:00 INFO: SENSITIVE_DATA: Número da conta do usuário é 987654321.
    < 2024-09-01 11:10:00 INFO: Autenticação de usuário realizada com sucesso.
    ---
    > 2024-09-01 11:00:00 INFO: SENSITIVE_DATA: Número da conta do usuário é REDACTED.

Com base nessa saída, qual é a interpretação correta das alterações feitas no arquivo de logs?

    a) A linha 3 do arquivo modificado foi adicionada sem alterações no arquivo original.


    b) O comando diff não encontrou diferenças significativas entre os arquivos.


    c) As linhas 4 a 6 do arquivo original foram deletadas e uma nova linha foi adicionada no arquivo modificado.


    d) As linhas 4 a 6 do arquivo original foram modificadas e agora correspondem à linha 3 no arquivo modificado.


    e) As linhas 4 a 6 do arquivo original foram removidas e não há correspondência no arquivo modificado.

##  Para saber mais: principais usos do comando _diff_ no Linux

O comando _diff_ no Linux é utilizado para comparar o conteúdo de arquivos ou diretórios, identificando as diferenças entre eles. Esse comando é especialmente útil para devs e pessoas administradoras de sistemas que precisam revisar mudanças entre versões de arquivos, ou detectar alterações em diretórios.

Aqui estão os principais usos e opções do diff:

### Comparação de arquivos simples
Comando:
```bash
diff arquivo1 arquivo2
```

O diff compara **arquivo1** com **arquivo2** e mostra apenas as linhas que são diferentes entre eles.

O formato de saída padrão utiliza símbolos como **<** e **>** para indicar quais linhas pertencem a cada arquivo.

### Comparação recursiva de diretórios
Comando:
```bash
diff -r dir1 dir2
```

Essa opção compara todos os arquivos dentro de **dir1** e **dir2**, recursivamente, mostrando diferenças em cada arquivo correspondente entre os diretórios.

Útil para comparar árvores de arquivos ou versões de diretórios com muitos arquivos.

### Gerar um arquivo de diferenças em formato de patch
Comando:
```bash
diff -u arquivo1 arquivo2 > patch.diff
```
Com a opção **-u (ou --unified)**, _diff_ exibe as diferenças em um formato unificado, onde o contexto das linhas modificadas é mostrado. Esse formato é comumente usado para criar patches.

O arquivo __patch.diff__ gerado pode ser aplicado usando o comando patch para sincronizar dois arquivos ou diretórios.

### Comparação lado a lado
Comando:
```bash
diff -y arquivo1 arquivo2
```
A opção **-y** exibe as diferenças lado a lado, facilitando a comparação visual.

Útil para comparações rápidas, onde é necessário ver as linhas lado a lado.

### Ignorar diferenças específicas
Comando:
```bash
diff -i arquivo1 arquivo2
```
A opção -i ignora diferenças em maiúsculas e minúsculas, e há várias outras opções para ignorar:
 * espaços (-w)
 * mudanças em linhas em branco (-B).

Isso ajuda a concentrar apenas nas diferenças significativas.

### Comparar apenas arquivos de texto
Comando:
```bash
diff --text arquivo1 arquivo2
```
Essa opção força o _diff_ a tratar os arquivos como texto, mesmo que tenham conteúdos binários.

Útil em casos onde arquivos de dados possuem conteúdo texto e precisam ser comparados.

#### Exemplo Prático

Imagine que você tenha dois arquivos de configuração de sistema, config1.conf e config2.conf. Para verificar rapidamente o que mudou entre as duas versões, você pode usar:

```bash
diff -u config1.conf config2.conf
```

Isso dará uma visão clara de linhas adicionadas, removidas ou modificadas, o que é fundamental para identificar alterações importantes e diagnosticar problemas de configuração.
