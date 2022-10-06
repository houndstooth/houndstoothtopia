#!/usr/bin/env sh

if [[ $(gcloud config configurations list | grep -m1 houndstoothtopia) ]] ; then
	echo "The 'houndstoothtopia' configuration already exists."
else
	gcloud config configurations create houndstoothtopia
fi
gcloud config configurations activate houndstoothtopia
