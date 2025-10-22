#!/bin/bash

LOG_PATH="$HOME/logs"

## Check if the folder exists
if [ ! -d "$LOG_PATH" ]; then
  echo "Folder does not exist. Creating it..."
  mkdir -p "$LOG_PATH"
else
  echo "Folder already exists."
fi
