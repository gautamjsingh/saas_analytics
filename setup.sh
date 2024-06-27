#!/bin/bash

# Define the environment parameter
if [ -z "$1" ]; then
    echo "Usage: $0 <environment>"
    echo "Supported environments: local, qa, prod"
    exit 1
fi

env="$1"

# Define an array of files to delete
files=(
    "./.env"
)

# Loop through the array and delete each file
for file in "${files[@]}"
do
    if [ -f "$file" ]; then
        rm "$file"
        echo "Deleted $file"
    else
        echo "$file does not exist"
    fi
done

# Define the operations for each environment
case "$env" in
    local)
        operations=(
            "./.env.local:./.env"
        )
        ;;
    qa)
        operations=(
            "./.env.qa:./.env"
        )
        ;;
    prod)
        operations=(
            "./.env.production:./.env"
        )
        ;;
    *)
        echo "Invalid environment parameter. Exiting..."
        exit 1
        ;;
esac

# Loop through the operations and copy/rename files
for operation in "${operations[@]}"
do
    IFS=':' read -ra parts <<< "$operation"
    dest="${parts[1]}"
    src="${parts[0]}"

    if [ -f "$src" ]; then
        cp "$src" "$dest"
        echo "Copied $src to $dest"
    else
        echo "$src does not exist"
    fi
done