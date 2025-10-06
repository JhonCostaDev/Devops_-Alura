#! /bin/bash

if pgrep nginx &> /dev/null
then
	echo "Nginx is running $(date +"%Y/%m/%d_%H:%M:%S")"
else
	echo "Nginx is not running $(date +"%Y/%m/%d_%H:%M:%S")"
fi
