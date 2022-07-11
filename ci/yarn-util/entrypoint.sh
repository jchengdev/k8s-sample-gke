#!/bin/bash
if [ "$#" -gt 1 ]
then
  echo "ENTRYPOINT: $1" # add version label to parent script (e.g. 18.1.0-alpine)
  shift
  sh -c "$*" # WARNING: make sure this doesn't break anything
else
  echo "entrypoint.sh: invalid inputs"
fi