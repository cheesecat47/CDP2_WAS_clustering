#!/bin/bash

echo "start change_jvmRoute.sh"

tomcat1="tomcat-server1"
tomcat2="tomcat-server2"

hostname=$HOSTNAME

echo "hostname: ${hostname}"
echo "current line in server.xml"
sed -n 133p < conf/server.xml

if [ ${hostname} == ${tomcat1} ]; then
    sed -i "133s/balancer/node1/" conf/server.xml
    if [ $? -ne 0 ]
    then
        echo "Failed!"
        exit 1
    fi
elif [ ${hostname} == ${tomcat2} ]; then
    sed -i "133s/balancer/node2/" conf/server.xml
    if [ $? -ne 0 ]
    then
        echo "Failed!"
        exit 1
    fi
fi

echo "after change"
sed -n 133p < conf/server.xml
