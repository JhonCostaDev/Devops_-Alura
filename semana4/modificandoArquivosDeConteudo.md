Nós criamos um filtro em nosso script que captura as mensagens dos logs que contêm erro. No entanto, também temos outros logs de diferentes tipos interessantes para incluir no arquivo de logs filtrados.

Informações sensíveis
No terminal, vamos entrar na pasta dos logs com o comando cd myapp/logs e executar cat myapp-backend.log para analisar o conteúdo desse arquivo.

Além das mensagens de erro com o termo "ERROR", encontramos a palavra "SENSITIVE_DATA" (dados sensíveis). Nem sempre os logs com informações sensíveis estão associados a um erro. Há linhas que começam com "INFO" e mencionam dados sensíveis também. É importante monitorar e processar esses dados para garantir a segurança da aplicação.

A primeira mensagem sobre dados sensíveis diz o seguinte:

INFO: SENSITIVE_DATA: User password is 12345.

Ou seja, ela revela que a senha do usuário é "12345". Não queremos manter essa informação no arquivo de logs filtrados, por questões de segurança, sendo necessário ocultá-la.

Examinando mais mensagens, também encontramos informações sobre chaves de API e números de cartão de crédito, que devem ser ocultadas no arquivo de logs filtrados.

Vamos sair da pasta atual com o comando cd e entrar na pasta de scripts com cd scripts-linux/. Em seguida, abriremos o script:

vim monitoramento-logs.sh
Copiar código
Após habilitar a edição pressionando a tecla "I", vamos duplicar o comando grep que está dentro do while, substituindo "ERROR" por "SENSITIVE_DATA":

#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" $arquivo > "${arquivo}.filtrado"
    grep "SENSITIVE_DATA" $arquivo > "${arquivo}.filtrado"
done
Copiar código
Outra alteração necessária é no operador de redirecionamento >, porque ele sobrescreve informações. Em outras palavras, ao redirecionar a saída do grep, o conteúdo existente no arquivo .filtrado será substituído. Queremos apenas adicionar informações de dados sensíveis, então utilizaremos ">>", que adiciona o conteúdo ao final do arquivo, preservando o que já existe:

#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" $arquivo > "${arquivo}.filtrado"
    grep "SENSITIVE_DATA" $arquivo >> "${arquivo}.filtrado"
done
Copiar código
Dessa maneira, conseguimos passar as informações sensíveis para o arquivo de logs filtrados, mas ainda não estamos ocultando essas informações.

Ocultando dados com sed
Vamos salvar o script com :wq e ir até a pasta dos logs novamente. Utilizaremos o comando sed para substituir informações sensíveis pela palavra "redacted", que é comumente usada para ocultar informações sensíveis.

O comando sed é utilizado da seguinte forma:

sed 's/User password is .*/User password is REDACTED/g' myapp-backend.log
Copiar código
Começamos digitando sed e, entre aspas simples, especificamos o que o comanda deve fazer. Primeiramente, para informar que queremos fazer uma substituição, inserimos a letra "s".

Em seguida, indicamos qual é o termo a ser procurado no arquivo. No caso, "User password is". Como a senha pode ter valores diferentes, colocaremos um ponto para especificar que o sed pode buscar qualquer caractere e um asterisco para especificar que pode ser um ou mais caracteres.

Na sequência, incluímos o texto que substituirá esse termo: "User password is REDACTED". Essa é a indicação de que estamos ocultando dados sensíveis.

A opção "g" indica que a substituição deve ser feita globalmente na linha. Do contrário, se o texto aparecesse mais de uma vez na mesma linha, apenas a primeira aparição seria substituída.

Por fim, fora das aspas simples, indicamos o arquivo. Vamos pressionar "Enter" para executar o comando. Agora, a saída terá linhas como:

INFO: SENSITIVE_DATA: User password is REDACTED

No entanto, esse comando não altera o arquivo diretamente, apenas a saída. Para comprovar isso, podemos rodar cat myapp-backend.log e notar que a senha ainda aparece.

Para corrigir isso, adicionaremos a opção -i no comando, logo após a palavra sed, indicando que a alteração deve ser feita diretamente no arquivo:

sed -i 's/User password is .*/User password is REDACTED/g' myapp-backend.log
Copiar código
Agora, podemos incluir esse comando no nosso script monitoramento-logs.sh, dentro do laço:

#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" $arquivo > "${arquivo}.filtrado"
    grep "SENSITIVE_DATA" $arquivo >> "${arquivo}.filtrado"

    sed -i 's/User password is .*/User password is REDACTED/g' myapp-backend.log
done
Copiar código
Vamos trocar o arquivo myapp-backend.log para a variável ${arquivo}.filtrado. Assim, a alteração será feita diretamente no arquivo que queremos:

#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" $arquivo > "${arquivo}.filtrado"
    grep "SENSITIVE_DATA" $arquivo >> "${arquivo}.filtrado"

    sed -i 's/User password is .*/User password is REDACTED/g' "${arquivo}.filtrado"
done
Copiar código
Além disso, existem outras linhas com textos sensíveis que queremos ocultar, como tokens, chaves API e números de cartões de crédito. Logo, vamos adicionar outros comandos sed para ocultar esses dados também:

#!/bin/bash

LOG_DIR="../myapp/logs"

echo "Verificando logs no diretorio $LOG_DIR"

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
    grep "ERROR" "$arquivo" > "${arquivo}.filtrado"
    grep "SENSITIVE_DATA" "$arquivo" >> "${arquivo}.filtrado"

    sed -i 's/User password is .*/User password is REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/User password reset request with token .*/User password reset request with token REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/API key leaked: .*/API key leaked: REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/User credit card last four digits: .*/User credit card last four digits: REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/User session initiated with token: .*/User session initiated with token: REDACTED/g' "${arquivo}.filtrado"
done
Copiar código
Após adicionar o novo trecho de código, podemos salvar o script com :wq e executá-lo com ./monitoramento logs.sh. Depois, voltar à pasta dos logs, vamos verificar o arquivo filtrado com:

cat myapp-backend.log.filtrado
Copiar código
Agora, além de capturar as mensagens de erro, o script também captura informações sensíveis, substituindo-as pela palavra "redacted". Nosso script está evoluindo com essas modificações. Continuaremos processando os logs nas próximas etapas.