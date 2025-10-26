#!/bin/bash

# path para pasta de logs
LOG_DIR="../myApp/logs"
# confimacao
echo "Checking logs in folder path: $LOG_DIR"

# encontrar arquivos de log
find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
	#echo "Arquivo encontrado $arquivo"
	grep "ERROR" $arquivo > "${arquivo}.filtrado"
	grep "SENSITIVE_DATA" >> "${arquivo}.filtrado"
	
	#cobrindo dados sensiveis
	sed -i 's/User password is .*/User password is REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/User password reset request with token .*/User password reset request with token REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/API key leaked: .*/API key leaked: REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/User credit card last four digits: .*/User credit card last four digits: REDACTED/g' "${arquivo}.filtrado"
    sed -i 's/User session initiated with token: .*/User session initiated with token: REDACTED/g' "${arquivo}.filtrado"
    # ✗ sort myapp-frontend.log.filtrado -o logs-ordenados
    sort "${arquivo}.filtrado" -o "${arquivo}.filtrado"
done
