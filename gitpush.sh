#! /bin/bash/expect -f

# load .env
#source .env

read -e -p "Type the commit message: " message
git add .
git commit -m"$message"

#spawn git push

git push

#expect "Enter passphrase for key '/home/jhon/.ssh/id_ed25519'"

#send "$GITPASS\r"

#expect eof
