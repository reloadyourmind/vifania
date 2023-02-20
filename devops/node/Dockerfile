FROM node
#
#ARG USER_ID
#
#RUN deluser --remove-home node
#RUN addgroup docker && \
#    adduser -S -h /home/docker -u ${USER_ID:-1000} -G docker docker && \
#    chown -R docker /home/docker /var/www/html/react
#
#USER docker
WORKDIR /var/www/html
EXPOSE 3000
CMD ["npm", "install"]
