FROM node:alpine
RUN mkdir -p /usr/src/next-website/test1
WORKDIR /usr/src/next-website/test1
COPY . .
###########################################################################
# PYTHON:
###########################################################################

ARG INSTALL_PYTHON=false

RUN if [ ${INSTALL_PYTHON} = true ]; then \
  apt-get -y install python python2.7 python-pip python-dev build-essential  \
  && python -m pip install --upgrade pip  \
  && python -m pip install --upgrade virtualenv \
;fi

RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
