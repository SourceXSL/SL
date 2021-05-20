FROM fusuf/SL:latest

RUN git clone https://github.com/SourceXSL/SL /root/SL
WORKDIR /root/SL/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
