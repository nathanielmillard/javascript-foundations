class Ogre {
  constructor(ogre){
    this.name = ogre.name || '';
    this.home = ogre.abode || 'Swamp';
    this.swings = 0;
  }
  encounter(human){
    human.encounter()
    if (human.encounterCounter % 3 === 0 && human.encounterCounter > 0) {
      this.swingAt(human)
    }
  }
  swingAt(human){
    this.swings += 1;
    if(this.swings % 2 === 0){
      human.isHit()
    }
  }
  apologize(human){
    human.knockedOut = false
  }
}

module.exports = Ogre
