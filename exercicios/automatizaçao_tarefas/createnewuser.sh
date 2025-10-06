#!/bin/bash

# Create a new user is a task that only root users can do.
# So, we need to check if the script is running as root.
if [ "$EUID" -ne 0 ]; then
	echo "Please enter in a super user mode: root"
	exit 1
fi

# Prompt the new user
read -p "Enter new username: " username

# Create a new user with a home directory
useradd -m "$username"

# Set a password to the new user
echo "Set a password for $username"
passwd "$username"

# Set sudo privileges for new user
read -p "Add $username to sudo group? (Y/N): " sudo_choice
if [[ "$sudo_choice" =~ ^[Yy]$ ]]; then
	usermod -aG sudo "$username"
	echo "$username added to sudo group! "
fi

echo "User $username created successfully!"
