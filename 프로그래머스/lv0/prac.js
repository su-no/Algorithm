console.log('orange🍊'.split(''));
console.log([...'orange🍊']);
console.log(Array.from('orange🍊'));

// 'orange🍊'.split(''); // [ 'o', 'r', 'a', 'n', 'g', 'e', '\ud83c', '\udf4a' ]
// [...'orange🍊']; // ['o',  'r', 'a', 'n',  'g', 'e', '🍊']
// Array.from('orange🍊'); // ['o',  'r', 'a', 'n',  'g', 'e', '🍊']
// console.log('\ud83c');
console.log('\ud83c'.toString('utf16'));
console.log('string');
console.log(123);
console.log(['o', 'r', 'a', 'n', 'g', 'e', '🍊']);
console.log(['a']);
console.log([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]);
