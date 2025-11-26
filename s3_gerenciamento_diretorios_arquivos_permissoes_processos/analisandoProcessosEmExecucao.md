# Análisando processos em execução

```bash
$ top

$ htop

$btop
```

### Questions

Você está gerindo um servidor Linux que está apresentando lentidão. Para identificar a causa, você decide usar o comando top para analisar os processos em execução. Após abrir a tabela dinâmica gerada pelo top, você observa que há muitos processos em estado "sleeping" e alguns consumindo uma quantidade significativa de CPU e memória.

Qual processo é mais crítico para o desempenho do servidor?

r. processos com maior %CPU



# Filtrando processos

```bash
# processo em execução
$ ps

# 
$ ps aux

$ ps -u usuario # identifica os processos iniciado pelo usuario

$ pstree - # exi os processos em formato de árvore

$ ps -C bash # exibe o processo do comando específico.

$ ps aux --sort=-%mem #maior consumo de memória

$ ps aux --sort=-%mem | head -n 11 # apenas os 11 processos com maior consumo de memória.

```

### Questions

Você está administrando um servidor Linux e precisa identificar rapidamente os processos que estão consumindo mais memória.

Qual combinação de comandos você deve usar para listar os 15 processos que mais consomem memória em seu servidor?

```bash
$ ps aux --sort=-%mem | head -n 16
```

