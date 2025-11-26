

1. Crie um novo script Linux para monitorar logs, habilite a permissão de execução para ele e execute-o. Para isso, siga os passos:

* Crie uma pasta chamada `scripts-linux` para salvar o script. Nesta pasta crie um script bash chamado `monitoramento-logs.sh` com o editor de texto `vim`;
* No script, crie uma variável que salve o caminho para a pasta onde os logs estão salvos;
* Faça com que o script exiba uma mensagem na tela do terminal com o comando echo, referenciando a variável criada;
* Dê permissão de execução para o script e execute-o;
* Crie um novo usuário chamado julia e um novo grupo chamado devs em seu Linux. Adicione esse usuário ao grupo criado;
* Altere o grupo da sua pasta home para o grupo criado de forma recursiva, aplicando assim a alteração aos subdiretórios;
* Acesse o usuário julia, abra a pasta que contém o script e execute-o com esse usuário.



## Resolução
Crie uma pasta chamada scripts-linux com o comando:
```bash
mkdir scripts-linux
```
Entre na pasta com o comando:
```bash
cd scripts-linux
```
Utilize o editor de texto vim para criar um script bash chamado monitoramento-logs.sh:
```bash
vim monitoramento-logs.sh

# Habilite o modo de inserção no vim, clicando na tecla i.
```
No script, crie uma variável que armazena o caminho para o diretório em que os arquivos de logs estão armazenados. Em seguida faça o script exibir uma mensagem na tela, conforme mostrado a seguir:
```sql
#!/bin/bash

LOG_DIR="../myapp/logs"
echo "Verificando os logs no diretorio $LOG_DIR" 
```
Saia do modo de inserção e vá para o modo de comando do vim, clicando na tecla Esc.

Salve o script digitando o comando a seguir:

> :w

Saia do editor de texto com o comando:

> :q

Dê a permissão de execução para o script, rodando o comando:

```bash
chmod 755 monitoramento-logs.sh
```
Em seguida, execute o script com o comando:
```bash
./monitoramento-logs.sh
```
No terminal, execute o comando a seguir para criar um novo usuário chamado julia:
```bash
sudo adduser julia
```
Serão pedidas algumas informações. Informe uma senha para esse usuário. As demais informações são opcionais.

Verifique se o usuário foi criado com sucesso, listando os usuários do sistema, com o comando:
```bash
cat /etc/passwd
```
Isso mostrará o novo usuário na lista.

Crie um novo grupo com o comando:
```bash
sudo groupadd devs
```
Verifique se o novo grupo foi criado com sucesso com o comando:
```bash
getent group devs
```
Adicione o novo usuário julia ao grupo devs usando o comando:
```bash
sudo usermod -aG devs julia
```
Verifique se o usuário foi adicionado com sucesso, rodando o comando:
```bash
getent group devs
```
Vá para o diretório home do seu usuário e altere o grupo para devs:
```bash
sudo chown -R :devs /home/SEU-USUARIO
```
Lembre-se de substituir SEU-USUARIO, pelo nome do seu usuário no seu sistema Linux.

Para verificar se a alteração de grupo deu certo, rode o comando:
```bash
ls -ld
```
Altere para o usuário julia, usando o comando:
```bash
su - julia
```
Informe a senha que você utilizou para criar esse usuário.

Entre na pasta do script com o comando:
```bash
cd /home/SEU-USUARIO/scripts-linux
```
Lembre-se de substituir SEU-USUARIO, pelo nome do seu usuário no seu sistema Linux.

Execute o script com o comando:
```bash
./processamento-logs.sh
```
Para voltar para o seu usuário basta rodar o comando:
```bash
su - SEU-USUARIO
```
Substitua SEU-USUARIO pelo nome do seu usuário no seu sistema Linux.