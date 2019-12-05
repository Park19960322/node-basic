const url = require('url');

const URL = url.URL;
const myURL = new URL('https://www.acmicpc.net/problem/tag/%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D');
console.log('new URL():', myURL);
console.log('url.format():', url,format(myURL));
console.log('---------------------------------');
const parsedUrl = url.parse('https://www.acmicpc.net/problem/tag/%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));