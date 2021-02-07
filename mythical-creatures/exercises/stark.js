const Direwolf = require('./direwolf');

class Stark {
  constructor(person){
    this.name = person.name || 'Name';
    this.location = person.area || 'Winterfell';
    this.safe = false;
  }
  changeProtection(){
    this.safe = !this.safe;
  }
  sayHouseWords(){
    return this.safe ?'The North Remembers' : 'Winter is Coming'
  }
  callDirewolf(name, area){
    let wolf = new Direwolf(name, this.location)
    wolf.protect(this)
    return wolf
  }
}

module.exports = Stark
