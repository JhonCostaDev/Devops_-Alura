O monitoramento de processos e o agendamento de tarefas em servidores são práticas essenciais para garantir a 
eficiência, disponibilidade e segurança dos sistemas e aplicações. O agendamento de tarefas automatiza processos 
recorrentes por meio do cron jobs, permitindo a execução automática de scripts, backups, atualizações e outras 
operações.

Criamos uma lista de atividades (não obrigatórias) para que você possa praticar ainda mais sobre como monitorar 
processos e agendar tarefas em um servidor. Bora avançar nos estudos de forma prática!?


1. Crie um script que utiliza comandos como ps e grep para monitorar os processos que estão utilizando uma 
porcentagem significativa da CPU.

```
#!/bin/bash
echo "Top 5 processos por uso de CPU:"
ps aux --sort=-%cpu | head -n 6
```

2. Desenvolva um script que utiliza comandos como ps e sort para exibir os processos que estão consumindo mais 
memória.

```
#!/bin/bash
echo "Top 5 processos por uso de memória:"
ps aux --sort=-%mem | head -n 6

```

3. Crie um script que verifica se um processo específico está em execução e exibe seu status.
```
#!/bin/bash
processo="nginx"
if pgrep $processo > /dev/null; then
  echo "$processo está em execução."
else
  echo "$processo não está em execução."
fi
```
4. Elabore um script para analisar os logs do sistema em busca de mensagens de erro relacionadas a processos.
```
#!/bin/bash
echo "Últimas 10 linhas de mensagens de erro:"
tail -n 10 /var/log/syslog | grep "error"
```
5. Crie um script para monitorar as mensagens de erro no log do sistema em intervalos regulares usando cron jobs. 
O script deve registrar em um arquivo as últimas 5 linhas de mensagens de erro, possibilitando uma visão 
periódica da atividade do sistema.
```
#!/bin/bash
echo "Mensagens de erro - $(date)" >> /caminho/do/log_monitorado.txt
tail -n 5 /var/log/syslog | grep "error" >> /caminho/do/log_monitorado.txt

# Adicione a seguinte linha ao crontab para executar o script a cada duas horas
0 */2 * * * /caminho/do/seu/script.sh
```
