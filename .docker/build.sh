#!/usr/bin/env bash

PATH=$(dirname "$0")
DOCKER_IMAGE_TAG='project-template-minimal'

/usr/local/bin/docker build -t ${DOCKER_IMAGE_TAG} "${PATH}"