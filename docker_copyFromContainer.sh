#!/bin/sh
container_name=learn-react-uibi-myReactApp-1

docker cp $container_name:/app/react_app/package.json ./package.json