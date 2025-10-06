#!/bin/bash 

read -e -p "Enter folder's path: " folder 

# Ask for a prefix name to rename files
read -e -p "Enter a prefix name for the files: " prefix

FOLDER=$(realpath $(eval echo "$folder"))

#Check if the folder's path is valid
if [ ! -d "$FOLDER" ]; then
	echo "$FOLDER is not a valid diretory!"
	exit 1
fi

# Go to the folder
cd "$FOLDER" || exit

#counter to rename files
count=1

# Loop thought all files on folder path
for file in *; do
	#skip folders
	if [ -f "$file" ]; then
		#store extension
		extension="${file##*.}"
		#new file name
		newfilename="$prefix-$count-$(date +%d%m%Y_%H%M%S).$extension"
		mv "$file" "$newfilename"
		((count++))
	fi
done

echo "Reneme complete"

