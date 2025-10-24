Fortaleza 24 de Outubro de 2025
# Filtrando Logs


Nós aprendemos como utilizar o laço de repetição para capturar o nome dos nossos arquivos que terminam com a extensão .log, juntamente do comando find. Agora podemos, de fato, processar os nossos logs.

Vamos entrar na pasta onde estão esses arquivos de log, digitando cd myapp/logs no terminal. Agora, usaremos o comando cat em um desses arquivos para analisar seu conteúdo:
```bash
cat myapp-backend.log
```

Temos uma série de informações e nem todas são relevantes para realizar uma futura análise desses logs. O que queremos são as mensagens importantes, por exemplo, mensagens de erro que mostram que a nossa aplicação teve algum tipo de problema.

Note quem toda vez que houve um erro nos logs, temos a palavra "ERROR". Podemos criar um filtro para capturar somente as linhas que contêm essa palavra.

## Filtrando logs
No Linux, o comando **grep** filtra o conteúdo de um arquivo conforme o padrão de texto que especificarmos. No caso, estamos buscando a palavra **"ERROR"** escrita toda em maiúsculas no arquivo **myapp-backend.log**. Logo, nosso comando ficará assim:

```bash
grep "ERROR" myapp-backend.log
```

Ao executar o comando, o retorno do **grep** traz somente as mensagens que contêm **"ERROR"**. Inclusive, essa palavra fica destacada na cor vermelha.

Agora que aprendemos a fazer esse filtro, é interessante redirecionar a saída e salvar apenas esses logs de erro em algum outro arquivo.

## Salvando logs de erro em outro arquivo
Ao clicar na seta para cima no terminal, voltamos ao comando anterior. No caso, grep "ERROR" myapp-backend.log. Em seguida, podemos utilizar o operador de redirecionamento > (maior que). Isso fará com que a saída do comando seja redirecionada para algum arquivo que especificarmos, por exemplo, logs-erro:

```bash
grep "ERROR" myapp-backend.log > logs-erro
```
Ao pressionar **"Enter"**, o grep não trará mais a saída no terminal. No entanto, ao executar um **ls** na pasta, notaremos que o arquivo **logs-erro** foi criado. Vamos checar seu conteúdo:

    cat logs-erro

Esse arquivo contém as mensagens de erro do nosso log, que foram filtradas pelo grep. Portanto, podemos utilizar esse filtro no nosso script para começar o processamento. Vamos copiá-lo com "Ctrl + Shift + C".

## Incrementando o script de monitoramento

Vamos digitar cd para sair da pasta, depois cd scripts-linux/ para entrar na pasta do script e vim monitoramento-logs.sh para abrir o arquivo. Por fim, habilitaremos a edição do arquivo, clicando na tecla "I".

Dentro do nosso laço de repetição, apagaremos a linha que tem o echo, pois esse comando servia apenas para verificar se o laço estava funcionando. No mesmo lugar, colaremos o comando copiado:

```bash
#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" myapp-backend.log > logs-erro
done
```

Vamos fazer algumas modificações para que o nosso script fique mais legível e funcione corretamente conforme o nome dos arquivos que o while está trazendo.

No comando grep, vamos substituir o nome do arquivo pela variável arquivo, que está guardando o nome dos nossos arquivos:

```bash
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" $arquivo > logs-erro
done
```
Assim, o sistema traz de forma mais dinâmica o nome do arquivo.

Além disso, não vamos mais redirecionar para logs-erro. Em vez disso, criaremos um arquivo que tenha o nome do arquivo original de logs. Usaremos as aspas duplas (uma boa prática para evitar erros devido a espaços no nome) e chamaremos a variável $arquivo. Queremos que o final do nome desse arquivo seja .filtrado, para especificar que dentro teremos os logs filtrados:

```bash
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" $arquivo > "$arquivo.filtrado"
done
```
Precisamos colocar a palavra "arquivo" dentro de chaves, assim: ${arquivo}.filtrado. Do contrário, o script poderia interpretar que o nome da variável é $arquivo.filtrado e isso causaria problemas. Com o uso de chaves, especificamos que a variável é somente o que está dentro das chaves, isto é, arquivo:

```bash
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" $arquivo > "${arquivo}.filtrado"
done
```

Feitas essas alterações, podemos salvar o nosso script e sair do editor. Pressionaremos "Esc" e digitaremos :wq.

Ao executar o script com ./monitoramento-logs.sh, o retorno será apenas a mensagem de verificação. Agora, vamos sair da pasta dos scripts com cd e entrar na pasta com os arquivos de log com cd myapp/logs.

Rodando o comando ls, notaremos que foram criados novos arquivos:

myapp.log.filtrado
myapp.frontend.log.filtrado
Esses arquivos contêm somente as mensagens de erro. Podemos verificar com um cat em um desses arquivos:

    cat myapp-backend.log

Dentro desse arquivo, temos somente as mensagens de logs que são relevantes para a nossa análise.

Na sequência, continuaremos esse processamento. Além das mensagens de erro, podemos notar que também existem informações sensíveis (sensitive data), que nem sempre estarão atreladas a uma mensagem de erro. É relevante manter no radar essas mensagens. Estudaremos como podemos filtrar esses dados e processá-los.