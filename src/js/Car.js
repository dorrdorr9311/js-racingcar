export default class Car {
  constructor(name) {
    this.name = name;
    this.currentPos = 0;
    this.isFinished = false;
  }

  goFoward() {
    const randValue = Math.floor(Math.random() * 10);
    if (randValue >= 4) this.currentPos++; 
  }
}