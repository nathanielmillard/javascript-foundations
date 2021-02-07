class Direwolf {
  constructor(name, home, size){
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true
  }
  protect(stark){
    if(this.home === stark.location && this.starksToProtect.length < 2) {
      this.huntsWhiteWalkers = false
      stark.changeProtection()
      this.starksToProtect.push(stark)
    }
  }
  leave(stark){
    for(var i=0; i < this.starksToProtect.length; i++){
      if(this.starksToProtect[i].name === stark.name){
        this.starksToProtect.splice(i, 1)
        stark.changeProtection()
      }
    }
  }
}

module.exports = Direwolf
