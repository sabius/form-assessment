import "./style.scss"

console.log('from the index in src!');

let testing = ['config', 2, {}, [], "amiwi", 24, 2];

let filtered = testing.map(e => {return typeof e});

console.log(filtered);
