#!/bin/bash

# path para pasta de logs
LOG_DIR="../myApp/logs"
# confimacao
echo "Checking logs in folder path: $LOG_DIR"

# encontrar arquivos de log
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
	echo "Arquivo encontrado $arquivo"
done
