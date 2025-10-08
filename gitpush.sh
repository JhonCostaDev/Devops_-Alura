#! /bin/bash


read -e -p "Type the commit message: " message
git add .
git commit -m"$message"

git push
