#!/usr/bin/env sh

NODE_ENV=production npx webpack

if [[ $(gcloud config configurations list | grep -m1 houndstoothtopia) ]] ; then
	echo "The 'houndstoothtopia' configuration already exists."
else
	gcloud config configurations create houndstoothtopia
fi
gcloud config configurations activate houndstoothtopia
gcloud config set project houndstoothtopia
gcloud config set account kingwoodchuckii@gmail.com
gcloud auth login kingwoodchuckii@gmail.com

gcloud app deploy -q
