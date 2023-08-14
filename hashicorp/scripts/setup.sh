#!/bin/bash
set -x

# Copyright Paion Data
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

sudo apt update && sudo apt upgrade -y
sudo apt install software-properties-common -y

# Install JDK 17 - https://www.rosehosting.com/blog/how-to-install-java-17-lts-on-ubuntu-20-04/
sudo apt update
sudo apt install openjdk-17-jdk openjdk-17-jre

# Install Maven
sudo apt install maven -y

# Package WAR
git clone https://github.com/ORG/REPO.git
cd REPO
mvn clean package -Dmaven.test.skip
cd ../

# Install and configure Jetty (version 17) container
JETTY_VERSION=11.0.15
wget https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/$JETTY_VERSION/jetty-home-$JETTY_VERSION.tar.gz
tar -xzvf jetty-home-$JETTY_VERSION.tar.gz
rm jetty-home-$JETTY_VERSION.tar.gz
export JETTY_HOME=/home/ubuntu/jetty-home-$JETTY_VERSION
mkdir jetty-base
cd jetty-base
java -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy
mv /home/ubuntu/REPO/target/REPO-1.0-SNAPSHOT.war webapps/ROOT.war
cd ../
