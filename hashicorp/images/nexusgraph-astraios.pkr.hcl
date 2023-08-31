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

packer {
  required_plugins {
    amazon = {
      version = ">= 0.0.2"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

source "amazon-ebs" "astraios" {
  ami_name = "nexusgraph-astraios"
  force_deregister = "true"
  force_delete_snapshot = "true"

  instance_type = "t2.small"
  region = "${var.aws_image_region}"
  source_ami_filter {
    filters = {
      name = "ubuntu/images/*ubuntu-*-20.04-amd64-server-*"
      root-device-type = "ebs"
      virtualization-type = "hvm"
    }
    most_recent = true
    owners = ["099720109477"]
  }
  ssh_username = "ubuntu"
}

build {
  name = "install-astraios"
  sources = [
    "source.amazon-ebs.astraios"
  ]

  # Load SSL Certificates into AMI image
  provisioner "file" {
    source = "./server.crt"
    destination = "/home/ubuntu/server.crt"
  }
  provisioner "file" {
    source = "./server.key"
    destination = "/home/ubuntu/server.key"
  }

  # Load Nginx config file into AMI image
  provisioner "file" {
    source = "./nginx-ssl.conf"
    destination = "/home/ubuntu/nginx-ssl.conf"
  }

  # Load Astraios WAR file into AMI image
  provisioner "file" {
    source = "../../target/astraios-1.0-SNAPSHOT.war"
    destination = "/home/ubuntu/ROOT.war"
  }

  provisioner "shell" {
    script = "../scripts/setup.sh"
  }
}
