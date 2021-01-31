const { setConfig } = require('next/config');
const { publicRuntimeConfig, serverRuntimeConfig } = require('../next.config');

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig({ publicRuntimeConfig, serverRuntimeConfig });
