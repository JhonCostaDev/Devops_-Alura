# Removendo Diretórios e Redirecionando Saídas

```bash

### Remoção recursiva
$ rm -ri /folder # Remoção recursiva interativa - garante que nada será removido sem atenção
```

### Guardando informações importantes

```bash
#Sanvando a saída de comando em arquivos.

$ ls > arquivo.txt # salva a lista de itens no diretório em um arquivo .txt
# Não é necessário criar o arquivo previamente!
```

```bash
$ cat lista_projeto.txt >> arquivo.txt # Utilizando duas setas, o arquivo não será sobrescrito, o conteúdo do comando adiciona ao conteúdo já existente.
```

## Questio

1. Na Clínica Médica Voll, você foi designado para organizar os arquivos e diretórios do sistema. Durante essa tarefa, você encontrou um diretório chamado pacientes_antigos dentro do diretório arquivos_clinica. Ao tentar removê-lo usando o comando rmdir, você recebeu uma mensagem de erro indicando que o diretório não está vazio.

Sabendo que será necessário verificar os itens armazenados no diretório antes de realizar sua exclusão para evitar perdas de informações, qual a melhor abordagem para resolver essa situação?

2. Você está trabalhando em um projeto no terminal Linux e precisa remover o diretório backup. Após verificar o conteúdo do diretório com ls ./backup e confirmar que pode ser removido, você decide ainda assim realizar a exclusão de maneira segura, evitando perdas acidentais de arquivos importantes. Além disso, você quer redirecionar a saída do comando ls para um arquivo chamado lista_projeto.txt para manter um registro do conteúdo do diretório antes da remoção.

Qual sequência de comandos é a mais adequada para realização bem sucedida dessa tarefa?

```bash
$ ls ./backup >> lista_projeto.txt
$ rm -ri ./backup
```