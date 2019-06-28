#!/bin/bash
curPATH=`pwd`
imageNAME='doc-sdbao'
hasDockerRun=`docker ps -a | grep $imageNAME`
cmd=$1

# 如果已经构建过这个镜像，则清理下镜像
clearImage(){
  if [ -n "$hasDockerRun" ]
  then
  containerId=${hasDockerRun:0-0:12}
  echo "删除已有镜像:"
  docker rm -f $containerId
  fi
}

# 开发
if [ $cmd = "dev" ]
then
  clearImage
  docker build -t $imageNAME .
  docker run --name $imageNAME -p 3000:3000 -p 35729:35729 -v $curPATH/docs:/usr/src/app/docs -d $imageNAME
fi

if [ $cmd = "stop" ]
then
  docker stop $imageNAME
  clearImage
fi
