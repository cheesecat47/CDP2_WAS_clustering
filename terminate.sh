#!/bin/sh

echo "This script stops the running containers"
echo "and remove related images.\n"

THIS_OS="`uname -s`"
echo "You are running on ${THIS_OS} machine."

if [ ${THIS_OS} = "Linux" ]; then
    # Request root privilege
    [ "$UID" -eq 0 ] || exec sudo "$0" "$@"
fi

docker-compose down
docker rmi myapache
docker rmi mytomcat
