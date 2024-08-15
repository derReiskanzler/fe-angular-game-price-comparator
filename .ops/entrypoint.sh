#!/bin/sh

# Use environment variable substitution to replace environment variables in env-vars.js
envsubst < /usr/share/nginx/html/env-vars.js > /usr/share/nginx/html/env-vars.js.tmp
mv /usr/share/nginx/html/env-vars.js.tmp /usr/share/nginx/html/env-vars.js

# Start Nginx
nginx -g 'daemon off;'