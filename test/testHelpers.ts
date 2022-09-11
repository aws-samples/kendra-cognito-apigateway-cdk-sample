const util = require('util');

export const inspectObject = (obj: any) => {
    return util.inspect(obj, { showHidden: false, depth: null, colors: true });
};
