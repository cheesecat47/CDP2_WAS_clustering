FROM tomcat:9.0

RUN apt-get update
RUN apt-get -y upgrade

# Copy Local's config file into Container
COPY ./conf/server.xml /usr/local/tomcat/conf/server.xml
COPY ./conf/web.xml /usr/local/tomcat/conf/web.xml

# Replace webapps directory with local contents
RUN rm -rf /usr/local/tomcat/webapps
RUN mv /usr/local/tomcat/webapps.dist /usr/local/tomcat/webapps
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*
COPY ./webcontents/* /usr/local/tomcat/webapps/ROOT/

# Change jvmRoute in conf/server.xml
COPY ./change_jvmRoute.sh /usr/local/tomcat/change_jvmRoute.sh
RUN ./change_jvmRoute.sh

# After change, restart tomcat
RUN bin/shutdown.sh
RUN bin/startup.sh
