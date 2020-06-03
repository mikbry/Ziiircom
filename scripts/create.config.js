#!/usr/bin/env node
const fs = require('fs');

const configjs = process.argv[2];
if (!fs.existsSync(configjs)) {
  fs.writeFileSync(configjs, '{}');
}
