#!/usr/bin/env sh

cf a > /dev/null
if [[ $? == 1 ]] ; then
    if [[ -z "${PWS_ORG+x}" ]] ; then
        printf "${Cyan}Please set PWS_ORG, PWS_SPACE, PWS_USERNAME, and PWS_PASSWORD environment variables if you would like to automatically push to a Cloud Foundry.\n${NC}"
        exit 1
    else
        cf login -a api.run.pivotal.io -o "$PWS_ORG" -s "$PWS_SPACE" -u "$PWS_USERNAME" -p "$PWS_PASSWORD"
    fi
fi

NODE_ENV=production webpack
#cf zero-downtime-push houndstoothtopia -f manifest.yml
gloud app deploy --project houndstoothtopia