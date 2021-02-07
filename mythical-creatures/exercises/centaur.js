class Centaur {
  constructor(centaur){
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activities = 0;
  }
  shootBow(){
    this.activities += 1
    this.activities > 2 ? this.cranky = true : this.cranky = false
    return (this.cranky || this.layingDown) ? 'NO!' : 'Twang!!!'
  }
  run(){
    this.activities += 1
    this.activities > 2 ? this.cranky = true : this.cranky = false
    return (this.cranky || this.layingDown) ? 'NO!' : 'Clop clop clop clop!!!'
  }
  sleep(){
    if(this.standing) return 'NO!'
    this.activities = 0
    this.cranky = false
    return 'ZZZZ'
  }
  layDown(){
    this.standing = false
    this.layingDown = true
  }
  standUp(){
    this.standing = true
    this.layingDown = false
  }
  drinkPotion(){
    if(this.standing){
      this.cranky = false
      this.activities = 0
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur
