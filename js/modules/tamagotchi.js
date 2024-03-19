export default class Tamagotchi {
  constructor() {
    this.health = { value: 10, importance: 1 };
    this.hunger = { value: 10, importance: 3 };
    this.energy = { value: 10, importance: 2 };
    this.fun = { value: 10, importance: 4 };
    console.log("Tamagotchi initialized");

    this.energyDecreaseInterval = setInterval(
      this.decreaseEnergy.bind(this),
      2000
    );

    this.hungerDecreaseInterval = setInterval(
      this.decreaseHunger.bind(this),
      1000
    );

    this.funDecreaseInterval = setInterval(this.decreaseFun.bind(this), 1000);

    this.healthDecreaseInterval = setInterval(
      this.decreaseHealth.bind(this),
      1000
    );
  }

  decreaseEnergy() {
    if (this.energy.value > 0) {
      this.energy.value--;
      console.log("energy:", this.energy.value);
    } else {
      clearInterval(this.energyDecreaseInterval);
    }
    this.additionalEnergyDecrease();
  }

  additionalEnergyDecrease() {
    if (this.fun.value === 0) {
      this.energy.value--;
    }
  }

  decreaseHunger() {
    if (this.hunger.value > 0) {
      this.hunger.value--;
      console.log("hunger:", this.hunger.value);
    } else {
      clearInterval(this.hungerDecreaseInterval);
    }
  }

  decreaseFun() {
    if (this.fun.value > 0) {
      this.fun.value--;
      console.log("fun:", this.fun.value);
    } else {
      clearInterval(this.funDecreaseInterval);
    }
  }

  decreaseHealth() {
    if (this.energy.value < 1 || this.hunger.value < 1) {
      this.health.value--;
      console.log("health:", this.health.value);
      this.checkHealthStatus();
      this.checkHealthInterval();
    }
  }

  checkHealthStatus() {
    if (this.health.value === 0) {
      clearInterval(this.healthDecreaseInterval);
    }
  }

  checkHealthInterval() {
    if (this.energy.value > 1 && this.hunger.value > 1) {
      clearInterval(this.healthDecreaseInterval);
    }
  }

  displayHealth = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.health.value;
  };

  displayEnergy = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.energy.value;
  };

  displayFun = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.fun.value;
  };

  displayHunger = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.hunger.value;
  };

  mount = ({ healthElement, hungerElement, energyElement, funElement }) => {
    this.displayHealth(healthElement);
    this.displayEnergy(energyElement);
    this.displayFun(funElement);
    this.displayHunger(hungerElement);
  };
}
