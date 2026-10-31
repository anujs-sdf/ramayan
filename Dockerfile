FROM nginx:stable-alpine

COPY index.html evidence.html story-data.js extended-scenes.js journey-scenes.js additional-languages.js evidence-page.js scene-artwork.js favicon.svg robots.txt /usr/share/nginx/html/

EXPOSE 80