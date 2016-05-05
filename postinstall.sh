#!/bin/bash

find node_modules -type d -name crypto-browserify | xargs rm -fr
npm install crypto-browserify@3.11.0
npm run build
