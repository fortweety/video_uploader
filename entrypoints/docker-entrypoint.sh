#!/bin/sh

set -e
gem instal bundler
sleep 3
bundle install
bundle exec rake db:create db:migrate db:seed
apt-get update && apt-get install -y \
      nodejs \
      openssl \
      python \
      yarn \
      ffmpeg

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

bundle exec rails s -b 0.0.0.0