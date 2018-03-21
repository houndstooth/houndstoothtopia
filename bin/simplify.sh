#!/usr/bin/env sh

rm ./geometry/*.mtl

for file in ./geometry/*
do
  # VERTICES

  ## rational

  sed -i 's/\.00000[123]//g' "$file"

  sed -i 's/0\.99999[789]/1/g' "$file"
  sed -i 's/1\.99999[789]/2/g' "$file"
  sed -i 's/2\.99999[789]/3/g' "$file"
  sed -i 's/3\.99999[789]/4/g' "$file"
  sed -i 's/4\.99999[789]/5/g' "$file"
  sed -i 's/5\.99999[789]/6/g' "$file"
  sed -i 's/6\.99999[789]/7/g' "$file"
  sed -i 's/7\.99999[789]/8/g' "$file"
  sed -i 's/8\.99999[789]/9/g' "$file"

  sed -i 's/\.50000[123]/.5/g' "$file"
  sed -i 's/\.49999[789]/.5/g' "$file"

  sed -i 's/\.33333[012456]/.333333/g' "$file"
  sed -i 's/\.66666[45689]/.666667/g' "$file"

  sed -i 's/\.25000[123]/.25/g' "$file"
  sed -i 's/\.24999[789]/.25/g' "$file"

  sed -i 's/\.75000[123]/.75/g' "$file"
  sed -i 's/\.74999[789]/.75/g' "$file"

  ## irrational

  ### sqrt 2
  sed -i 's/\.41421[123567]/.414214/g' "$file"
  ### sqrt 2 * 2
  sed -i 's/\.82842[45689]/.828427/g' "$file"
  ### sqrt 2 * 1/2
  sed -i 's/\.70710[45689]/.707107/g' "$file"
  ### sqrt 2 * 3/2
  sed -i 's/\.12132[123]/.121320/g' "$file"
  sed -i 's/\.12131[789]/.121320/g' "$file"
  ### sqrt 2 * 1/4
  sed -i 's/\.35355[123567]/.353554/g' "$file"

  ### 1 - sqrt 2
  sed -i 's/\.58578[345789]/.585786/g' "$file"
  ### 1 - (sqrt 2 * 1/2)
  sed -i 's/\.29289[012456]/.292893/g' "$file"
  ### 1 - (sqrt 2 * 1/4)
  sed -i 's/\.64644[345789]/.646446/g' "$file"

  ### (2 - sqrt 2) * 1/4
  sed -i 's/\.14644[345789]/.146446/g' "$file"
  ### (2 + sqrt 2) * 1/4
  sed -i 's/\.85355[123567]/.853554/g' "$file"

  ### sqrt 3
  sed -i 's/\.73205[0234]/.732051/g' "$file"
  sed -i 's/\.73204[89]/.732051/g' "$file"

  ### sqrt 2 * 3
  sed -i 's/\.24264[0234]/.242641/g' "$file"
  sed -i 's/\.24263[89]/.242641/g' "$file"

  ### sqrt 2 * 6
  sed -i 's/\.485281[0234]/.485281/g' "$file"
  sed -i 's/\.485280[89]/.485281/g' "$file"

  ### sqrt 2 * 9
  sed -i 's/\.727922[01345]/.727922/g' "$file"
  sed -i 's/\.727919/.727922/g' "$file"

  ### sqrt 2 * 12
  sed -i 's/\.97056[01345]/.970562/g' "$file"
  sed -i 's/\.970559/.970562/g' "$file"


  # VERTEX NORMALS

  ## rational

  sed -i 's/\0.9999 /1 /g' "$file"
  sed -i 's/\0.0001 /0 /g' "$file"
  sed -i 's/\0.9999\n/1\n/g' "$file"
  sed -i 's/\0.0001\n/0\n/g' "$file"

  sed -i 's/\0.4999 /0.5 /g' "$file"
  sed -i 's/\0.5001 /0.5 /g' "$file"
  sed -i 's/\0.4999\n/0.5\n/g' "$file"
  sed -i 's/\0.5001\n/0.5\n/g' "$file"

  sed -i 's/\0.3332 /0.3333 /g' "$file"
  sed -i 's/\0.3334 /0.3333 /g' "$file"
  sed -i 's/\0.3332\n/0.3333\n/g' "$file"
  sed -i 's/\0.3334\n/0.3333\n/g' "$file"

  sed -i 's/\0.6666 /0.6667 /g' "$file"
  sed -i 's/\0.6668 /0.6667 /g' "$file"
  sed -i 's/\0.6666\n/0.6667\n/g' "$file"
  sed -i 's/\0.6668\n/0.6667\n/g' "$file"

  sed -i 's/\.2499 /.25 /g' "$file"
  sed -i 's/\.2501 /.25 /g' "$file"
  sed -i 's/\.2499\n/.25\n/g' "$file"
  sed -i 's/\.2501\n/.25\n/g' "$file"

  sed -i 's/\.7499 /.75 /g' "$file"
  sed -i 's/\.7501 /.75 /g' "$file"
  sed -i 's/\.7499\n/.75\n/g' "$file"
  sed -i 's/\.7501\n/.75\n/g' "$file"

  ## irrational



  # SIMPLIFY

  obj-simplify -in "$file"
  rm "$file"
  mv ${file%.obj}.simplified.obj "$file"
  sed -i '/^[#lmosu].*$/d' "$file"
  sed -i '/^$/d' "$file"
done
