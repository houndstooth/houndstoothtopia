#!/usr/bin/env sh

make build

gcloud config set project houndstoothtopia
gcloud config set account kingwoodchuckii@gmail.com
gcloud auth login kingwoodchuckii@gmail.com

gcloud app deploy -q
