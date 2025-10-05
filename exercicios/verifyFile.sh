#!/bin/bash

read -e  -p "Enter the folder's name: " dirname

dirname=$(realpath "$(eval echo "$dirname")")

if [ -f "$dirname" ]; then
	echo "The $dirname exist"
else
	echo "The $dirname do not exist"
fi
