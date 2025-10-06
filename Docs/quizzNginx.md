# Coletando métricas do Nginx

Você está trabalhando em uma startup e seu trabalho inclui o monitoramento de recursos de um servidor web, Nginx. 
A empresa está prestes a estrear a "Screen Match", uma plataforma de vídeo similar à do YouTube.

Você precisa se certificar de que o servidor está operando dentro de sua capacidade e não sobrecarregado. Considerando 
esse cenário, é necessário criar um script para monitorar as métricas de conexões ativas e requisições por segundo.

Sabendo que a **URL “http://localhost/nginx_status”** permite acesso ao status do servidor Nginx e o comando **curl** é usado como 
ferramenta para fazer solicitações HTTP e coletar informações de URLs.

Qual script você faria para coletar essas métricas?

a) (X)
```bash
#!/bin/bash

get_nginx() {
  local metrics=$(curl -s "http://localhost/nginx_status")
  if [[ -n "$metrics" ]]; then
    local active_connections=$(awk 'NR==1 {print $3}' <<< "$metrics")
    local requests_per_second=$(awk 'NR==3 {print $2}' <<< "$metrics")
    echo "Active connections: $active_connections"
    echo "Requests per second: $requests_per_second"
  else
    echo "Failure in collecting Nginx metrics."
  fi
}

get_nginx
```
Este script está coletando corretamente as métricas. O uso do curl -s obtém o status do Nginx silenciosamente, que é armazenado na 
variável local 'metrics'. A seguir, são usados comandos 'awk' para extrair o número de conexões ativas e requisições por segundo, 
que são então impressos.



b) ()
```bash
#!/bin/bash

get_nginx() {
  local metrics=$(ping -c4 "http://localhost/nginx_status")
  echo "Ping results: $metrics"
}

get_nginx
```

c) ()
```bash
#!/bin/bash

get_nginx() {
  local metrics=$(curl -s "http://localhost/nginx_status")
  if [[ -n "$metrics" ]]; then
    echo "Active connections: $active_connections"
    echo "Requests per second: $requests_per_second"
  else
    echo "Failure in collecting Nginx metrics."
  fi
}

get_nginx
```

d) ()

```bash
#!/bin/bash

get_nginx() {
  local metrics=$(curl -s "http://localhost/nginx_status")
  echo "Active connections: $metrics"
}

get_nginx
```
