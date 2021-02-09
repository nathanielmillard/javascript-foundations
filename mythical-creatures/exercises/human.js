class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  encounter() {
    this.encounterCounter += 1
  }
  noticesOgre() {
    return (this.encounterCounter % 3 === 0 && this.encounterCounter > 0)
  }
  isHit(){
    this.knockedOut = true
  }
}

module.exports = Human
