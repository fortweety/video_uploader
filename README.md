# create postgres user for authenticate

- CREATE USER test_c with password 'test_ppass';
- ALTER USER test_c WITH SUPERUSER;

# set env variables
cp .env.sample .env

# run docker-compose
docker-compose up

# server running on localhost:3000
