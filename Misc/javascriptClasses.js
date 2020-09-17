// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, and I am a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`I am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Merlin', 'Healer')
const wizard2 = new Wizard('Dumbledore', 'Head Master')

wizard1.introduce()
wizard2.introduce()
wizard1.play()
wizard2.play()