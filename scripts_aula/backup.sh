#! /bin/bash


backUpFolder="/home/jhon/Documents/GitHub/Devops_-Alura/devops/*"
#backUpFolder="~/Documents/GitHub/Devops_-Alura/devops/"

fileName="backup_$(date +%Y%m%d_%H%M%S).tar.gz"
tar -czvf "$fileName" "backUpFolder"
echo "Backup Completed Successfully!"

