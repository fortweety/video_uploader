#!/bin/sh

set -e
gem instal bundler
bundle install
apt-get install ffmpeg -y

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

bundle exec sidekiq