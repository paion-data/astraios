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

variable "aws_deploy_region" {
  type = string
  description = "The EC2 region injected through inversion of control"
}

variable "zone_id" {
  type = string
  description = "Hosted zone ID on Route 53"
  sensitive = true
}

variable "sentry_dsn" {
  type = string
  description = "Sentry.io DSN"
  sensitive = true
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.42.0"
    }
  }
  required_version = ">= 0.14.5"
}

provider "aws" {
  region = var.aws_deploy_region
}

data "aws_ami" "latest-astraios" {
  most_recent = true
  owners = ["899075777617"]

  filter {
    name   = "name"
    values = ["nexusgraph-astraios"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_instance" "astraios" {
  ami = "${data.aws_ami.latest-astraios.id}"
  instance_type = "t2.small"
  tags = {
    Name = "Paion Data Astraios"
  }

  security_groups = ["Paion Data Astraios"]

  user_data = <<-EOF
    #!/bin/bash
    export JETTY_HOME=/home/ubuntu/jetty-home-11.0.15
    export SENTRY_DSN=${var.sentry_dsn}

    sudo /usr/bin/filebeat -e -c filebeat.yml -d "publish" &

    cd /home/ubuntu/jetty-base
    java -jar $JETTY_HOME/start.jar
  EOF
}

resource "aws_route53_record" "astraios" {
  zone_id         = var.zone_id
  name            = "astraios.nexusgraph.com"
  type            = "A"
  ttl             = 300
  records         = [aws_instance.astraios.public_ip]
  allow_overwrite = true
}
