#!/usr/bin/env sh

NODE_ENV=production ./node_modules/.bin/webpack
gcloud config configurations activate houndstoothtopia
gcloud app deploy -q
