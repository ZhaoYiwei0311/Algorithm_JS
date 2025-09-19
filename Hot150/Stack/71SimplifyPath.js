/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = [];
    for (const name of path.split('/')) {
        if (name === '' || name === '.') {
            continue;
        }
        if (name === '..') {
            if (paths.length > 0) {
                paths.pop();
            }
        } else {
            paths.push(name);
        }
    }
    return '/' + paths.join('/');
};

const path = "/home/";
simplifyPath(path);