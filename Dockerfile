FROM balenalib/raspberry-pi-node:11 as build-env

RUN sudo sed 's/$/ universe/' -i /etc/apt/sources.list
RUN sudo apt-get update
RUN sudo apt-get install python-pip python make build-essential

WORKDIR /root/

# Install app dependencies
COPY package.json .
COPY app.js .
RUN npm install --production

FROM balenalib/raspberry-pi-node:11
WORKDIR /root/
COPY --from=build-env /root/ ./

EXPOSE 3000

CMD ["node", "app.js"]
