Nesta aula criamos um script no Linux, que salva um diretório em uma variável e depois exibe uma mensagem na tela do terminal, referenciando a variável.

Também vimos como dar permissão de execução para o script e como executá-lo. Por fim, vimos como gerenciar o grupo de arquivos e diretórios.

Agora é com você!

Crie um novo script Linux para monitorar logs, habilite a permissão de execução para ele e execute-o. Para isso, siga os passos:

Crie uma pasta chamada scripts-linux para salvar o script. Nesta pasta crie um script bash chamado monitoramento-logs.sh com o editor de texto vim;
No script, crie uma variável que salve o caminho para a pasta onde os logs estão salvos;
Faça com que o script exiba uma mensagem na tela do terminal com o comando echo, referenciando a variável criada;
Dê permissão de execução para o script e execute-o;
Crie um novo usuário chamado julia e um novo grupo chamado devs em seu Linux. Adicione esse usuário ao grupo criado;
Altere o grupo da sua pasta home para o grupo criado de forma recursiva, aplicando assim a alteração aos subdiretórios;
Acesse o usuário julia, abra a pasta que contém o script e execute-o com esse usuário.
Para saber mais detalhes sobre como realizar esses passos, acesse a opinião da pessoa instrutora.

Boa prática!

Ver opinião do instrutor
Opinião do instrutor

Crie uma pasta chamada scripts-linux com o comando:

mkdir scripts-linux
Copiar código
Entre na pasta com o comando:

cd scripts-linux
Copiar código
Utilize o editor de texto vim para criar um script bash chamado monitoramento-logs.sh:

vim monitoramento-logs.sh
Copiar código
Habilite o modo de inserção no vim, clicando na tecla i.

No script, crie uma variável que armazena o caminho para o diretório em que os arquivos de logs estão armazenados. Em seguida faça o script exibir uma mensagem na tela, conforme mostrado a seguir:

#!/bin/bash

LOG_DIR="../myapp/logs"
echo "Verificando os logs no diretorio $LOG_DIR" 
Copiar código
Saia do modo de inserção e vá para o modo de comando do vim, clicando na tecla Esc.

Salve o script digitando o comando a seguir:

:w
Copiar código
Saia do editor de texto com o comando:

:q
Copiar código
Dê a permissão de execução para o script, rodando o comando:

chmod 755 monitoramento-logs.sh
Copiar código
Em seguida, execute o script com o comando:

./monitoramento-logs.sh
Copiar código
No terminal, execute o comando a seguir para criar um novo usuário chamado julia:

sudo adduser julia
Copiar código
Serão pedidas algumas informações. Informe uma senha para esse usuário. As demais informações são opcionais.

Verifique se o usuário foi criado com sucesso, listando os usuários do sistema, com o comando:

cat /etc/passwd
Copiar código
Isso mostrará o novo usuário na lista.

Crie um novo grupo com o comando:

sudo groupadd devs
Copiar código
Verifique se o novo grupo foi criado com sucesso com o comando:

getent group devs
Copiar código
Adicione o novo usuário julia ao grupo devs usando o comando:

sudo usermod -aG devs julia
Copiar código
Verifique se o usuário foi adicionado com sucesso, rodando o comando:

getent group devs
Copiar código
Vá para o diretório home do seu usuário e altere o grupo para devs:

sudo chown -R :devs /home/SEU-USUARIO
Copiar código
Lembre-se de substituir SEU-USUARIO, pelo nome do seu usuário no seu sistema Linux.

Para verificar se a alteração de grupo deu certo, rode o comando:

ls -ld
Copiar código
Altere para o usuário julia, usando o comando:

su - julia
Copiar código
Informe a senha que você utilizou para criar esse usuário.

Entre na pasta do script com o comando:

cd /home/SEU-USUARIO/scripts-linux
Copiar código
Lembre-se de substituir SEU-USUARIO, pelo nome do seu usuário no seu sistema Linux.

Execute o script com o comando:

./processamento-logs.sh
Copiar código
Para voltar para o seu usuário basta rodar o comando:

su - SEU-USUARIO
Copiar código
Substitua SEU-USUARIO pelo nome do seu usuário no seu sistema Linux.