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

variable "nexusgraph_astraios_zone_id" {
  type = string
  description = "Hosted zone ID on Route 53"
  sensitive = true
}

variable "domain_for_nexusgraph" {
  type = string
  description = "Domain name that Nexus Graph queries against"
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

data "template_file" "nexusgraph-astraios-init" {
  template = "${file("../scripts/nexusgraph-astraios-tf-init.sh")}"
  vars = {
    sentry_dsn = "${var.sentry_dsn}"
  }
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

resource "aws_instance" "nexusgraph-astraios" {
  ami = "${data.aws_ami.latest-astraios.id}"
  instance_type = "t2.small"
  tags = {
    Name = "Paion Data Nexus Graph Astraios"
  }

  security_groups = ["Paion Data Nexus Graph Astraios"]

  user_data = "${data.template_file.nexusgraph-astraios-init.rendered}"
}

resource "aws_route53_record" "nexusgraph-astraios" {
  zone_id         = var.nexusgraph_astraios_zone_id
  name            = var.domain_for_nexusgraph
  type            = "A"
  ttl             = 300
  records         = [aws_instance.nexusgraph-astraios.public_ip]
  allow_overwrite = true
}
