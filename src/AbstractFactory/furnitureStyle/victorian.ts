import { Chair, CoffeeTable, Sofa, FurnitureFactory } from "../type"

export class VictorianFurnitureFactory implements FurnitureFactory {
  public createChair(name: string): Chair {
    return new VictorianChairFactory(name)
  }
  public createCoffeeTable(name: string): CoffeeTable {
    return new VictorianCoffeeTableFactory(name)
  }
  public createSofa(name: string): Sofa {
    return new VictorianSofaFactory(name)
  }
}

class VictorianChairFactory implements Chair {
  constructor(name: string) {
   console.log(`factory make a ${name}'s VictorianChair`)
  }
  leg = 4
  public sitOn() {
    console.log('A man sit on the VictorianChair')
  }
}

class VictorianCoffeeTableFactory implements CoffeeTable {
  constructor(name: string) {
    console.log(`factory make a ${name}'s VictorianCoffeeTable`)
  }
  private cup = 0
  public leg = 4
  public placeCup() {
    console.log('place 1 cup on the VictorianCoffeeTable')
    this.cup++
  }
  public howManyCups() {
      return this.cup
  }
}

class VictorianSofaFactory implements Sofa {
  constructor(name: string) {
    console.log(`factory make a ${name}'s VictorianSofa`)
  }
  leg = 4
  public sitOn() {
    console.log('A man sit on the VictorianSofa')
  }
}
