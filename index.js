const Configstore = require('configstore');
// const settings = require('settings.json');

// create a Configstore instance with a unique ID, e.g.,
// settings name, and optionally some default values
const conf = new Configstore({foo: 'bar'}, {configPath: './data'});

console.log(conf.get('foo'));
// => 'bar'

conf.set('awesome', true);
console.log(conf.get('awesome'));
// => true

// use dot-notation to access nested properties
conf.set('bar.baz', true);
console.log(conf.get('bar'));
// => {baz: true}

conf.delete('awesome');
console.log(conf.get('awesome'));
// => undefined