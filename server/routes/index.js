// load all the node router, it should NOT be modified

import fs from 'fs';
import path from 'path';
import Router from 'koa-router';

const router = new Router({ prefix: '/api' });
let subRouter;

fs.readdirSync(__dirname)
  .filter(filename =>
    filename !== path.basename(__filename)
  )
  .forEach((filename) => {
    /* eslint-disable */
    subRouter = require(`./${filename}`);
    /* eslint-enable */
    router.use(subRouter.routes(), subRouter.allowedMethods());
  });

export default router;
