# Acesso Remoto com Secure Shell - SSH

## Importância do acesso remoto
Frequentemente, precisamos gerenciar máquinas que não estão no mesmo ambiente físico em que nos encontramos. Imagine que você está lidando com uma infraestrutura, talvez até local, mas está longe do escritório ou do prédio onde o servidor está localizado. Como você fará esse acesso?

No ambiente da **AWS**, é possível usar o navegador e o EC2 Connect para acessar diretamente a instância. No entanto, se essa facilidade não estiver disponível, uma das formas de acessar um servidor Linux é utilizando um protocolo de segurança que estabelece uma comunicação segura, conhecido como SSH (Secure Shell ou Shell Seguro).

Essa conexão remota permite que, a partir do nosso terminal, realizemos diversas tarefas administrativas dentro da instância que criamos na AWS, como criar diretórios, por exemplo.

## Movendo a chave para o diretório correto

Primeiro, precisamos mover a chave que baixamos ao criar a instância para o diretório home do nosso usuário LCS, para podermos referenciá-la ao usar o comando.

Para isso, no ambiente Windows, acessamos o explorador de arquivos e, nos downloads, localizamos a chave chamada conexao_instancia.pem. Vamos selecionar o arquivo e copiá-lo com "Ctrl + C".

Em seguida, navegamos pelo menu lateral até encontrar o ícone do Linux, e acessamos a pasta do Ubuntu. Nela, acessamos o diretório usr, onde encontramos várias bibliotecas de usuários. No entanto, o que queremos é entrar na home do usuário LCS para colar a chave que acabamos de copiar. Então, vamos retornar para a pasta Ubuntu e acessar o diretório home/lcs, e colar a chave teclando "Ctrl + V".

Observe que, neste diretório, já temos o arquivo projeto_python que criamos e no qual estamos trabalhando. Agora, podemos fechar o explorador de arquivos, limpar o terminal com o comando clear e verificar se a chave foi copiada corretamente com o comando ls.

Na listagem, a chave conexao_instancia.pem deve aparecer, o que significa que está pronta para ser usada na conexão remota com o servidor.

## Estabelecendo a conexão remota com SSH

Essa chave que vamos usar para a conexão trata-se, na verdade, de um par de chaves, composto por uma chave pública e uma chave privada. A chave privada está salva no nosso computador, no diretório home do usuário lcs. Na instância da AWS, temos a chave pública. Essas chaves são utilizadas para estabelecer uma conexão segura entre o nosso computador e a instância, garantindo que a pessoa que está tentando acessar remotamente de fato tem autorização para acessar, escrever e fazer modificações no ambiente criado na nuvem.

Para usar o comando SSH, primeiro digitamos ssh, que é o comando correspondente ao protocolo. Em seguida, inserimos a opção -i, que indica que utilizaremos uma chave para estabelecer a conexão remota.

Agora, precisamos especificar o caminho para essa chave. A chave está localizada no diretório home do usuário LCS. Portanto, inserimos o caminho /home/lcs/ seguido do nome do arquivo da chave, que no nosso caso é conexao_instancia.pem.

```bash
ssh -i /home/lcs/conexao_instancia.pem
```
Se pressionarmos "Enter" neste ponto, ocorrerá um erro, pois ainda não indicamos com qual máquina queremos estabelecer a conexão remota. Embora tenhamos especificado a chave, precisamos informar ao computador qual dispositivo desejamos acessar. Então, podemos reutilizar o comando e inserir a informação que está faltando, especificando com qual usuário desejamos nos conectar.

Sempre que utilizarmos o comando SSH, precisamos especificar essas informações. Por exemplo, usamos a nomenclatura lcs@Avel para indicar o usuário Lucas no computador Avel. No nosso caso, como não especificamos nenhum nome de usuário, utilizaremos o usuário padrão ec2-user@ seguido do endereço IP da instância.

Na AWS, existem dois endereços IPs: um privado e um público. O endereço IP privado é acessível apenas internamente na rede da AWS. Como estamos acessando externamente, utilizaremos o endereço IP público da instância.

Vamos copiar o endereço IP público, voltar ao terminal e inseri-lo após o símbolo @.

```bash
ssh -i /home/lcs/conexao_instancia.pem ec2-user@18.191.223.220

```
Ao pressionar "Enter", o sistema perguntará se desejamos continuar, pois a autenticidade do host não pode ser estabelecida. Confirmamos digitando "y" (sim).

Se recebermos uma mensagem de erro, podemos inferir que a chave está com permissões muito abertas, permitindo que outras pessoas usuárias a utilizem. O sistema nos alerta que, para acessar a instância, precisamos ajustar as permissões da chave.

## Ajustando as permissões da chave

Para isso, utilizamos o comando chmod, que significa change mode (mudar o modo). Esse comando permite alterar as permissões de um arquivo específico. Então, vamos digitar chmod no terminal e indicar o novo código de permissão. Observe que o código atual é 644, que é bastante aberto. Vamos alterar para 400, um modo mais restrito, permitindo apenas o acesso do usuário LCS.

Além disso, precisamos especificar o caminho completo do arquivo para que a mudança seja efetiva: /home/lcs/conexao_instancia.pem.

```bash
chmod 400 /home/lcs/conexao_instancia.pem
```

Após executar, se não houver nenhuma mensagem de erro, significa que o comando foi reconhecido e o modo de permissão do arquivo foi modificado.

#### Conectando-se com sucesso

Para verificar se a alteração foi bem-sucedida, tentaremos estabelecer a conexão remota novamente. Para isso, podemos reutilizar o comando anterior:

```bash
ssh -i /home/lcs/conexao_instancia.pem ec2-user@18.191.223.220
```
Ao executar o comando, observe que aparece "Amazon Linux 2023" e a indicação que estamos logados no ambiente com o usuário ec2-user, o que significa que a conexão foi estabelecida com sucesso.

Agora, se executarmos o comando ls, veremos que não há nada listado. Se usarmos o comando pwd, ele indicará que estamos na home do usuário ec2-user.

## Criando um diretório na instância

Vamos fazer um teste para verificar se tudo o que fazemos aqui é replicado imediatamente na instância. Para isso, criaremos um diretório chamado projeto usando o comando mkdir. Em seguida, executamos ls novamente e veremos que o diretório projeto já aparece listado.

```bash
~$ mkdir projeto

~$ ls

```

Vamos minimizar o terminal e acessar a nossa instância. Ao executar ls, percebemos que estamos na raiz do sistema. Voltamos para a home do usuário com cd e, ao executar ls novamente, observamos que o diretório projeto já foi replicado, pois aparece listado. Isso confirma que conseguimos fazer a conexão remota com a instância na nuvem.

## Conclusão
Portanto, com o protocolo SSH, conseguimos estabelecer uma conexão remota com outros dispositivos, permitindo implementar configurações, realizar atualizações e resolver problemas à distância, com total acesso às configurações e arquivos do sistema.

### Questions

Você está trabalhando em um projeto na Clínica Médica Voll e precisa configurar um servidor na nuvem para hospedar uma aplicação web. Após criar uma instância EC2 na AWS com uma distribuição Linux, você precisa se conectar remotamente a essa instância usando SSH.

Considere que a chave privada está localizada em /home/usuario/voll.pem, o usuário da instância é ec2-user e o endereço IP da instância é 192.168.0.1.

Qual comando você deve usar para se conectar à instância?

```bash
~$ ssh -i /home/usuario/voll.pem ec2-user@192.168.0.1
```