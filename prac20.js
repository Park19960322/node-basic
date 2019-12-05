const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimeter:', path.delimiter);
console.log('-------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.absename():', path.basename(string));
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('--------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C:\\Users\\tyarn\\Desktop\\노드 기초',
    name: 'path',
    ext:'.js',
}));
console.log('path.normalize():', path.normalize('C://Users\\tyarn\\Desktop\\노드 기초\\prac20.js'));
console.log('---------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('C:\\'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('----------------------------------');
console.log('path.relative():', path.relative('C://Users\\tyarn\\Desktop\\노드 기초\\prac20.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..','..','/users','.','/노드기초'));
console.log('path.resolve():', path.resolve(__dirname, '..','users', '.','/노도 기초'));