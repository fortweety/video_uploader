
# set env variables
cp .env.sample .env

# run sidekiq
run redis
run rails s

# server running on localhost:3000
