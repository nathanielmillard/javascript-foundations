class Ogre {
  constructor(ogre){
    this.name = ogre.name || '';
    this.home = ogre.abode || 'Swamp';
    this.swings = 0;
  }
  encounter(human){
    human.encounter()
  }
  swingAt(human){
    this.swings += 1;
  }
}

module.exports = Ogre
