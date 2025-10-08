!# /bin/bash

if [ "$#" -lt 2 ]; then
	echo "O programa $0 requer nome do arquivo e arquivo a serem compactados!"
	exit 1
fi
output_file="$1"
files=("${@:2}")
tar -czf "$output_file" "${files[@]}"
echo "Compactado com sucesso e $output_file"
