#!/usr/bin/env sh

rm ./geometry/*.mtl

for file in ./geometry/*
do
  sed -i 's/\.00000[123]//' "$file"
  sed -i 's/\.50000[123]/.5/' "$file"
  sed -i 's/\.49999[789]/.5/' "$file"
  sed -i 's/0\.99999[789]/1/' "$file"
  sed -i 's/1\.99999[789]/2/' "$file"
  sed -i 's/2\.99999[789]/3/' "$file"
  sed -i 's/3\.99999[789]/4/' "$file"
  sed -i 's/4\.99999[789]/5/' "$file"
  sed -i 's/5\.99999[789]/6/' "$file"
  sed -i 's/6\.99999[789]/7/' "$file"
  sed -i 's/7\.99999[789]/8/' "$file"
  sed -i 's/8\.99999[789]/9/' "$file"

  sed -i 's/\.0001 / /' "$file"
  sed -i 's/0\.9999 /1 /' "$file"
  sed -i 's/1\.9999 /2 /' "$file"
  sed -i 's/2\.9999 /3 /' "$file"
  sed -i 's/3\.9999 /4 /' "$file"
  sed -i 's/4\.9999 /5 /' "$file"
  sed -i 's/5\.9999 /6 /' "$file"
  sed -i 's/6\.9999 /7 /' "$file"
  sed -i 's/7\.9999 /8 /' "$file"
  sed -i 's/8\.9999 /9 /' "$file"

  sed -i 's/\.0001\n/\n/' "$file"
  sed -i 's/0\.9999\n/1\n/' "$file"
  sed -i 's/1\.9999\n/2\n/' "$file"
  sed -i 's/2\.9999\n/3\n/' "$file"
  sed -i 's/3\.9999\n/4\n/' "$file"
  sed -i 's/4\.9999\n/5\n/' "$file"
  sed -i 's/5\.9999\n/6\n/' "$file"
  sed -i 's/6\.9999\n/7\n/' "$file"
  sed -i 's/7\.9999\n/8\n/' "$file"
  sed -i 's/8\.9999\n/9\n/' "$file"

  obj-simplify -in "$file"
  rm "$file"
  mv ${file%.obj}.simplified.obj "$file"
  sed -i '/^[#lmosu].*$/d' "$file"
  sed -i '/^$/d' "$file"
done
