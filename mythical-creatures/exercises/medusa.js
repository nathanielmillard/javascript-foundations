var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim){
    if(this.statues.length < 3) {
      this.statues.push( new Statue(victim.name))
    } else {
      let statue = this.statues.shift()
      this.statues.push( new Statue(victim.name))
      return new Person (statue.name, 'relieved')
    }
  }
}

module.exports = Medusa
