#!/bin/bash

echo $1

kubectl patch deployment netomedia-deployment -p'{"spec":{"template":{"spec":{"containers":[{"name": "nodejs", "image":"ac770/netomedia:$1"}]}}}}'
