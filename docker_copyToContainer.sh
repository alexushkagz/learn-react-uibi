#!/bin/sh
container_name=learn-react-uibi-myReactApp-1

docker cp ./package.json $container_name:/app/react_app/
docker exec $container_name npm install