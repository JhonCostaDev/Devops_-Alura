# Alterando permissões

No Linux, o comando chmod (change mode) é usado para alterar as permissões de arquivos e diretórios. As permissões controlam quem pode ler, escrever ou executar um arquivo.

Vimos que as permissões são representadas por três grupos de três caracteres, cada um representando as permissões do proprietário, do grupo e de outros usuários. Cada conjunto de três caracteres pode incluir:

  * r (read) - Permissão de leitura
  * w (write) - Permissão de escrita
  * x (execute) - Permissão de execução
  
Para definir essas permissões, usamos valores numéricos:

  * 4 para leitura (r)
  * 2 para escrita (w)
  * 1 para execução (x)
Esses valores podem ser combinados. Por exemplo, uma permissão de leitura e escrita seria 4 + 2 = 6.

No caso da chave privada que utilizamos para a conexão SSH, usamos o comando:

```bash
~$ chmod 400 caminho/para/sua-chave.pem
```

O valor 400 define as permissões como:

  * 4 (leitura) para o proprietário do arquivo
  * 0 (sem permissões) para o grupo
  * 0 (sem permissões) para outros usuários

Desse modo, somente o proprietário pode ler a chave privada e ninguém mais conseguirá acessá-la garantindo sua segurança. Essa configuração é essencial para a segurança das conexões SSH, pois impede que outros usuários leiam ou modifiquem a chave privada, protegendo o acesso ao servidor remoto.