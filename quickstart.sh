#!/bin/bash
set -x
set -e

# Copyright 2024 Paion Data
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

rm -rf astraios-data-models-example
git clone https://github.com/paion-data/astraios-data-models-example.git
cd astraios-data-models-example
mvn clean install
cd ../

cat >settings.xml <<'EOT'
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <profiles>
        <profile>
            <id>astraios-data-models</id>
            <properties>
                <model.package.jar.group.id>com.paiondata</model.package.jar.group.id>
                <model.package.jar.artifact.id>astraios-data-models-example</model.package.jar.artifact.id>
                <model.package.jar.version>1.0.0</model.package.jar.version>
            </properties>
        </profile>
    </profiles>

    <activeProfiles>
        <activeProfile>astraios-data-models</activeProfile>
    </activeProfiles>
</settings>
EOT

rm -rf astraios
git clone https://github.com/paion-data/astraios.git
cd astraios
mvn --settings ../settings.xml clean package
MODEL_PACKAGE_NAME=com.paiondata.astraios.data.models docker compose up --build --force-recreate
cd ../
