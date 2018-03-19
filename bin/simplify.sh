#!/usr/bin/env sh

for file in ./geometry/*
do
  obj-simplify -in "$file"
  rm "$file"
  mv ${file%.obj}.simplified.obj "$file"
done
