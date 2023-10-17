#!/bin/bash
set -x
set -e

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

export JETTY_HOME=/home/ubuntu/jetty-home-11.0.15
export SENTRY_DSN=${sentry_dsn}

sudo /usr/bin/filebeat -e -c filebeat.yml -d "publish" &

cd /home/ubuntu/jetty-base
java -jar $JETTY_HOME/start.jar
