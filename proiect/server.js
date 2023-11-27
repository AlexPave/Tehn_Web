const {resolve, join} = require('path');
const express = require('express');
const service = require('./service')('items.json');
const PORT = process.env.PORT || 8080;
express()
    .use(express.static(join(resolve(), 'web')))
    .use(express.text())
    .listen(PORT, () => console.log(`Server is running on port ${PORT}.`));