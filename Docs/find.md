## Encontrando e filtrando arquivos
No terminal, vamos acessar a pasta <span style="color:green">"/myapp/logs"</span> e executar o comando ls para listar os itens da pasta. Temos alguns arquivos com a extensão .log, mas também há outros com extensões diferentes que não queremos processar.

É interessante criar um filtro para processar somente os arquivos myapp-backend.log e myapp-frontend.log, que contêm as informações de log da nossa aplicação.

Para fazer esse filtro e obter somente os nomes dos arquivos que nos interessam, podemos usar o comando find no Linux. Vamos digitar:

```bash
find . -name "*.log"
```
O retorno será:

    ./myapp-frontend.log

    ./myapp/backend.log

Esse comando retorna somente os nomes dos arquivos que terminam com .log. A seguir, vamos entender mais a fundo o que cada parte do comando faz.

O find realiza uma busca. O ponto especifica que a busca deve ser feita a partir do diretório atual. Caso queiramos buscar em outro diretório, podemos especificar o caminho no lugar do ponto.

A opção **-name** permite especificar o padrão de busca, no caso, o nome. Entre as aspas duplas, utilizamos o caractere especial de asterisco, que representa qualquer cadeia de caracteres em uma string. Assim, qualquer texto que termine com **".log"** será retornado.

Portanto, esse comando filtra apenas os arquivo de log e podemos utilizá-lo no nosso script de monitoramento. Vamos copiar o comando com "Ctrl + Shift + C", sair da pasta com cd e entrar na pasta do script com cd scripts-linux. Para abrir o script, digitamos vim monitoramento-logs.sh.

Incrementando o script de monitoramento
No script, vamos habilitar a edição pressionando a tecla "I". Após o echo, pularemos uma linha e colaremos o comando copiado com "Ctrl + Shift + V":
```bash
#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find . -name "*.log"
```
Faremos algumas alterações no comando. Em vez de usar o ponto, chamaremos a variável LOG_DIR para utilizar o caminho do diretório onde estão armazenados os logs:

```bash
#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find $LOG_DIR -name "*.log"
```

Agora, podemos usar os nomes dos arquivos filtrados para percorrer cada um deles e fazer o devido processamento dos logs.

## Laços de repetição
Para percorrer o conteúdo, utilizamos laços de repetição. Basta especificar uma condição e, enquanto ela for verdadeira, executamos uma ação dentro do laço.

Para redirecionar a saída do comando find para um laço de repetição, usamos o operador pipe, que é uma barra vertical. O laço de repetição que utilizaremos é o while. Antes de especificar as condições e as ações do laço, vamos entender sua estrutura.

Começamos escrevendo while, que significa "enquanto" em inglês. Em seguida, definimos a condição e um ponto e vírgula. Depois, escrevemos do, que significa "faça" em inglês. O próximo passo é inserir as ações. Por fim, usamos a palavra done, que significa "feito" em inglês. Ou seja, todas as ações já foram feitas:

```bash
find $LOG_DIR -name "*.log" | while [condição]; do
    [ações]
done
```

Os trechos entre colchetes serão substituídos a seguir.

Na sequência, vamos especificamos a condição e as ações a serem realizadas. Para a condição, usaremos o **IFS= (Internal Field Separator)** definido como vazio, para evitar que nomes de arquivos com espaços ou caracteres especiais sejam quebrados:

```bash
find $LOG_DIR -name "*.log" | while IFS= ; do
    ações
done
```
Em seguida, usamos read para ler os arquivos passados pelo find, com algumas opções extras. A opção **-r** impede a interpretação caracteres especiais e **-d ''** indica que delimitador é o caractere nulo:

```bash
find $LOG_DIR -name "*.log" | while IFS= read -r -d ''; do
    ações
done
```

Por padrão, o find não utiliza o delimitador nulo. Para alterar essa configuração, vamos inserir **-print0** antes do pipe, garantindo que a saída do find utilize o delimitador nulo, que é esperado pelo read:

```bash
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d ''; do
    ações
done
```

Por fim, especificaremos uma variável arquivo para armazenar o nome dos arquivos de log. Assim, conseguiremos trabalhar com cada um deles individualmente:

```bash
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    ações
done
```

Para verificar se o laço está funcionando, vamos incluir uma ação nele. Chamaremos echo "Arquivo encontrado $arquivo":

```bash
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    echo "Arquivo encontrado $arquivo"
done
```

Vamos sair do modo de inserção com "Esc". Para salvar e sair do Vim, em vez de usar os comandos :w e :q individualmente, podemos concatená-los assim: **:wq.**

Para executar o script, rodamos:

```bash
./monitoramento-logs.sh
```

No terminal, temos a seguinte a saída:

    Verificando logs no diretorio ../myapp/logs

    Arquivo encontrado: ../myapp/logs/myapp-frontend.log

    Arquivo encontrado: ../myapp/logs/myapp-backend.log

O laço de repetição e o comando find estão encontrando os arquivos, o que nos permitirá realizar o processamento na aula a seguir.


### Question

Na Clínica Médica Voll, uma clínica especializada em serviços médicos e exames, você é responsável por garantir que apenas os arquivos de exames relevantes, que possuem a extensão .exam, sejam processados no sistema de gerenciamento.

Como implementar um filtro que selecione apenas os arquivos com a extensão .exam?

```bash
find . -name"*.exam"
```

## Entendendo o loop while

O laço de repetição while em Bash é usado para executar um bloco de comandos repetidamente enquanto uma condição for verdadeira.

Ele verifica a condição antes de cada iteração e, se for verdadeira, executa o bloco de comandos dentro do loop. Quando a condição se torna falsa, o loop termina.

Sua estrutura básica é:
```bash
while [ condição ]; do
    # comandos a serem executados enquanto a condição for verdadeira
done
```

Vamos ver um exemplo em que usamos o while para contar de 1 a 5:

```bash
#!/bin/bash

contador=1

while [ $contador -le 5 ]; do
    echo "Contador: $contador"
    ((contador++))  # incrementa o valor de contador em 1
done
```

#### Nesse script:

Inicializamos a variável contador com o valor 1;
O loop while verifica se o valor de contador é menor ou igual a 5, através do operador de comparação -le. Esse operador verifica se um número é menor ou igual a outro;
Enquanto a condição for verdadeira, o loop executa o comando echo para mostrar o valor atual de contador;
O trecho ((contador++)) incrementa o valor de contador em 1 a cada iteração;
O loop termina quando contador chega a 6, pois a condição se torna falsa.
A saída desse script ao executá-lo será:

    Contador: 1
    Contador: 2
    Contador: 3
    Contador: 4
    Contador: 5

Você pode salvar esse script em seu computador e verificar o comportamento do laço de repetição while, caso deseje.

O while é especialmente útil quando não se sabe de antemão o número exato de repetições e quer-se continuar o loop enquanto uma condição específica é atendida.

Esse foi o caso do script de monitoramento de logs que criamos nesse curso. Não sabemos de antemão a quantidade de arquivos de logs para processar, pois podemos ter inúmeros arquivos no diretório. Assim, o uso do while foi crucial.
