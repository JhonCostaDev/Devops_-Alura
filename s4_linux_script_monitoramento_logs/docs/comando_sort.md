# Explorando opções do comando sort


O comando sort no linux é usado para ordenar linhas de texto em arquivos ou na saída de outros comandos. Ele organiza os dados em ordem alfabética ou numérica, dependendo da necessidade. Abaixo, estão algumas das suas principais opções:

-r: ordena em ordem reversa (decrescente).
-n: usa a ordenação numérica em vez de alfabética, útil para ordenar números.
-k: especifica uma coluna para ordenação (ex.: -k 2 ordena pela segunda coluna).
-u: remove linhas duplicadas na saída, deixando apenas uma instância de cada.
-t: define um delimitador de campo, útil para arquivos com colunas separadas por vírgulas ou outros caracteres (ex.: -t ,).
-o: salva a saída ordenada em um arquivo especificado, útil para sobrescrever o arquivo original sem precisar usar redirecionamento.
-f: trata letras maiúsculas e minúsculas igualmente, útil quando é necessário ignorar a distinção entre elas para uma ordenação puramente alfabética