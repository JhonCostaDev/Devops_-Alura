BPL_FOLDER="$HOME/bpl"

if [ ! -d "$BPL_FOLDER" ]; then
  echo "Folder does not exist. Creating it..."
  mkdir -p "$BPL_FOLDER"
else
  echo "Folder already exists."
fi

mkdir -p "$BPL_FOLDER/bin"
mkdir -p "$BPL_FOLDER/scripts"

tree $BPL_FOLDER