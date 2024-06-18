#!/bin/bash

BASE_DIR=/home/ubuntu/app

# Function to print messages with a timestamp
print_message() {
    local message=$1
    local timestamp="$(date +"%Y-%m-%d %H:%M:%S")"
    echo "$timestamp - $message"
}
cd "$BASE_DIR/mtap-nextjs/" || exit
npm install

# Start port check and app monitoring
print_message "Starting port check and app monitoring..."

# Check if port 3000 is open
if netstat -tulpn | grep -q ':3000'; then
    print_message "mTap Application is running successfully."
else
    print_message "mTap Application is not running. Attempting to start mTap Application..."
    cd "$BASE_DIR/mtap-nextjs/" || exit
    nohup npm run dev > /dev/null 2>&1 &
    print_message "Application started. Checking status in 20 seconds..."
    sleep 20

    # Check again if the port is open after starting the app
    if netstat -tulpn | grep -q ':3000'; then
        print_message "mTap Application is now running successfully after starting the app."
    else
        print_message "Failed to start the mTap Application on port 3000."
    fi
fi

