#!/bin/sh

# Use environment variable substitution to replace environment variables in env-vars.js
envsubst < /usr/share/nginx/html/assets/env-vars.sample.js > /usr/share/nginx/html/assets/env-vars.js

# For env-vars approach where env-vars file is a .ts file
# envsubst < /usr/share/nginx/html/env-vars.js > /usr/share/nginx/html/env-vars.js.tmp
# mv /usr/share/nginx/html/env-vars.js.tmp /usr/share/nginx/html/env-vars.js

# Start Nginx
nginx -g 'daemon off;'