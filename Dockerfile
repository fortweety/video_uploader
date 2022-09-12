FROM ruby:3.0

ENV BUNDLER_VERSION=2.3.22

WORKDIR /app

COPY Gemfile Gemfile.lock ./

COPY package.json yarn.lock ./

COPY . ./

ENTRYPOINT ["./entrypoints/docker-entrypoint.sh"]
