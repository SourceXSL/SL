FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SourceXSL/SL /root/whatsasena
WORKDIR /root/whatsasena/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
