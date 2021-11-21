//import convert from 'webp-batch-convert';
const convert = require('webp-batch-convert');
let res;

// 示例一: 生成 img 目录下的图片文件至 webp 目录
res = convert.cwebp('./source/img', './source/webp');
console.log('total: ', res);

// 更多参数参考：https://developers.google.com/speed/webp/docs/cwebp?csw=1#options
// 也可以执行如下命令通过 cwebp 帮助信息了解： `yarn cwebp --longhelp`
