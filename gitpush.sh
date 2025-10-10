#! /bin/bash

# load .env
source .env

read -e -p "Type the commit message: " message
git add .
git commit -m"$message"

git push
