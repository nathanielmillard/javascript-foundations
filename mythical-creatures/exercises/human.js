class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }
  encounter() {
    this.encounterCounter += 1
  }
  noticesOgre() {
    return (this.encounterCounter % 3 === 0 && this.encounterCounter > 0)
  }

}

module.exports = Human
