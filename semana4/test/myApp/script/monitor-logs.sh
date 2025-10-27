#!/bin/bash

# Define the logs folder
LOG_FOLDER="../logs"
LOGS_FILTERED="$LOG_FOLDER/filtered"


# Check if the folder exists
if [ ! -d "$LOG_FOLDER" ]; then
    echo "Log directory '$LOG_FOLDER' does not exits."
    exit 1
fi

#create filtered folder if it doesn't exists
mkdir -p "$LOGS_FILTERED"


# Loop through all .log files in the folder
for LOG_FILE in "$LOG_FOLDER"/*.log; do
    echo "Reading file: $LOG_FILE"
    BASE_NAME=$(basename "$LOG_FILE" .log)
    FILTER_FILE="$LOGS_FILTERED/$BASE_NAME.filter"
    
    # Extract lines with "ERROR" and save to .filter file
    grep "ERROR" "$LOG_FILE" > "$FILTER_FILE"
    echo "created $FILTER_FILE"
    
    # Replace sensitive data
    # 
    sed -i -E \
        -e 's/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/REDACTED/g' \
        -e 's/\b[0-9]{1,3}(\.[0-9]{1,3}){3}\b/REDACTED/g' \
        -e 's/\b[0-9]{4}[- ]?[0-9]{4}[- ]?[0-9]{4}[- ]?[0-9]{4}\b/REDACTED/g' \
        -e 's/\b[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}\b/REDACTED/g' \
        -e 's/\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}/REDACTED/g' \
        -e 's/(SENSITIVE_DATA:.*token )[0-9]+/\1REDACTED/g' \
        "$FILTER_FILE"

done
echo "Done ..."
