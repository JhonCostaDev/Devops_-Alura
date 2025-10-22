# Gerenciamento de grupos

Gerenciamento de grupos
Quando trabalhamos em um projeto de software, é comum haver todo um time envolvido. Nossa aplicação será normalmente executada em um servidor, em uma máquina onde todos terão acesso. Queremos que as pessoas possam acessar nosso script de processamento de logs.

No Linux, a questão das classes de usuários e dos grupos nos ajuda com isso, pois podemos criar um grupo e adicionar diversos usuários para facilitar a gestão de acesso. Assim, em vez de dar permissões individualmente para cada pessoa envolvida no time, podemos utilizar um grupo para facilitar esse processo e atribuir as permissões ao grupo.

## Criando usuários
O usuário atual como aparece na tela do meu terminal é composto da seguinte sintaxe: 
```bash
usuario@host:~/diretório_atual$

# Exemplos
ubuntu@computador:~/$

# sevidor remoto
ubuntu@192.168.1.100:~/$
```
Nos exemplos citados acima, tudo o que vem antes do @  é o nome do meu host no computador ou servidor. Podemos criar um novo usuário para o sistema/grupo usando o comando **sudo adduser** seguido do nome. Por exemplo, jhon:

```bash
ubuntu@computador:~/$ sudo adduser jhon
```
Em seguida, precisamos informar a senha do usuário atual e responder a algumas perguntas para criar o novo usuário. A primeira delas é a senha do novo usuário. Após informá-la, é preciso repeti-la para confirmar.

Na sequência, há várias outras perguntas sobre nome e número da sala de trabalho, telefone e afins, mas podemos pressionar "Enter" para deixar essas informações em branco. No final, o sistema perguntará se as informações estão corretas. Vamos digitar Y e pressionar "Enter" para confirmar.

Agora, o novo usuário chamado jhon foi criado. Para verificar se a criação foi bem-sucedida, podemos rodar o seguinte comando para listar os usuários:

```bash
# lista
cat /etc/passwd
```
Ao final da lista, temos o novo usuário jhon, com seu diretório home.

## Criando um grupo
Queremos que a Julia trabalhe conosco e ajude no script de processamento de logs, sendo capaz de executá-lo. Portanto, criaremos um grupo para adicionar a Julia e outras futuras pessoas colaboradoras do projeto.

Para criar um grupo, rodamos o comando **sudo groupadd** seguido do nome. Nosso grupo terá pessoas que desenvolverão e executarão o script, então o chamaremos de devs:

```bash
sudo addgroup devs
```

Para verificamos se o grupo foi criado com sucesso, rodamos o seguinte comando:

```bash
getent group devs
```
O sistema retornará que o grupo existe. Agora, adicionaremos o jhon ao grupo com o seguinte comando:

```bash
sudo usermod -aG devs jhon
```
Para checar se ele foi adicionado com sucesso, basta executar novamente o comando **getent group devs**, que mostrará o usuário jhon como parte do grupo.

## Gerenciando acessos
O próximo passo é conceder acesso para que as pessoas do grupo, para que possam executar o script. Vamos entrar na pasta onde o script foi criado com cd scripts-linux e rodar o comando ls -ld para conferir as permissões:

  ```bash
      drwxr-xr-x jhon jhon
  ```
Notamos que o grupo tem permissão de leitura e execução, mas não de escrita. Quando atribuímos essas permissões, é necessário que todos os diretórios-pais também tenham as permissões necessárias.

No momento, o grupo ainda não é devs, mas gabi. Se formos para o diretório-pai com cd .. e rodarmos ls -ld, temos as seguintes permissões:

    drwxr-x--- jhon jhon

O grupo também tem permissão de leitura e execução, mas não de escrita. Além disso, o grupo é jhon. O grupo do diretório-pai deve ser o mesmo do diretório-filho que queremos acessar.

Se adicionarmos um grupo apenas na pasta "scripts-linux" e não alterarmos o grupo do diretório-raiz, não conseguiremos acessar a pasta. Portanto, adicionamos o grupo no diretório-pai para evitar problemas de permissão.

Para conferir o caminho da pasta atual, usa-se o comando pwd.

Para alterar o grupo na pasta atual ("/home/jhon"), utilizamos o seguinte comando:

```bash
sudo chown -R :devs /home/jhon
```
Essa opção **-R** aplica a modificação recursivamente a todos os subdiretórios. Ou seja, todas as pastas dentro do "/home/gabi" terão seu grupo alterado. Esse processo pode demorar um pouco, dependendo da quantidade de diretórios no seu computador.

Após a execução, vamos rodar o comando ls -ld e verificar que o grupo foi alterado para devs:

    drwxr-x--- jhon devs

Na sequência, verificaremos se a usuário jhon consegue executar o script. Vamos alterar o usuário que estamos usando com o seguinte comando:

    su - julia

Após informar a senha, notaremos que o nome do host mudou. Vamos acessar a pasta dos scripts, executando o seguinte comando:

    cd /home/gabi/scripts-linux

Lembre-se de remover "jhon" e alterar o comando para condizer com o seu nome de usuário.

Conseguimos acessar a pasta. Agora, vamos rodamos o script com o seguinte comando:

```bash
./monitoramento_logs.sh
```
Confirmamos que o usuário jhon consegue executar o script!

Ao gerenciar uma máquina ou servidor, é importante verificar se queremos que todos os usuários do grupo tenham acesso a todas as pastas dentro do diretório. É possível conceder acesso a pastas específicas, sem a opção -R.

Para voltar ao usuário jhon, usamos su - jhon e informamos a senha novamente. Assim, retornamos ao usuário original.

Descobrimos que o comando chown é útil na gestão de grupos e usuários no sistema. Aprendemos a gerenciar permissões, grupos e a criar um script. Na sequência, vamos incrementar nosso script de processamento de logs.