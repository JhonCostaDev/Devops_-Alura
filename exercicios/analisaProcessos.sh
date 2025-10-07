#! /bin/bash

# O servidor que sua equipe está utilizando está apresentando uma certa lentidão. Para entender o que está 
#ocorrendo, você precisa analisar os processos que estão consumindo maior memória ao longo do dia.

# Um colega da equipe sugeriu a criação de um script que identifique os 15 processos com maior consumo de 
# memória a cada 5 minutos e armazene o resultado em um arquivo. Como você tem atuado na elaboração de scripts 
#e automação de tarefas, essa tarefa ficou sob sua responsabilidade.

# O servidor que sua equipe está utilizando está apresentando uma certa lentidão. Para entender o que está 
# ocorrendo, você precisa analisar os processos que estão consumindo maior memória ao longo do dia.

# Um colega da equipe sugeriu a criação de um script que identifique os 15 processos com maior consumo de 
# memória a cada 5 minutos e armazene o resultado em um arquivo. Como você tem atuado na elaboração de scripts 
#e automação de tarefas, essa tarefa ficou sob sua responsabilidade.

# Implemente o script que identifique os 15 processos com maior consumo de memória em um dado instante usando os 
# comandos ps, grep e head(utilize o pipe para direcionar a saída de um comando como entrada para outro) e, na 
# sequência, agende a execução do script utilizando o crontab.




# Definimos o caminho para o arquivo de saída
output_file="~/Documents/top_processes_$(date +\%Y\%m\%d_\%H\%M).txt"

# Listamos os 15 processos com maior consumo de memória e salvamos no arquivo de saída
ps -e -o pid,%mem --sort=-%mem | head -n 16 > "$output_file"



# crontab executa a cada 5 min > */5 * * * * /caminho/do/script.sh
