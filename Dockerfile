FROM balenalib/raspberry-pi-node:6

RUN sudo sed 's/$/ universe/' -i /etc/apt/sources.list
RUN sudo apt-get update
RUN sudo apt-get install python-pip python make build-essential

WORKDIR /root/

# Install app dependencies
#COPY dist/package.json .
COPY app.js .
#RUN npm install --production

#COPY dist/ .

EXPOSE 3000
#ENV NODE_MAX_MEM=100
#CMD ["node", "app.js", "--max-old-space-size=200"]
CMD ["node", "app.js"]
