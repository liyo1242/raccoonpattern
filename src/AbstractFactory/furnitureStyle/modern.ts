import { Chair, CoffeeTable, Sofa, FurnitureFactory } from "../type"

export class ModernFurnitureFactory implements FurnitureFactory {
  public createChair(name: string): Chair {
    return new ModernChairFactory(name)
  }
  public createCoffeeTable(name: string): CoffeeTable {
    return new ModernCoffeeTableFactory(name)
  }
  public createSofa(name: string): Sofa {
    return new ModernSofaFactory(name)
  }
}

class ModernChairFactory implements Chair {
  constructor(name: string) {
   console.log(`factory make a ${name}'s ModernChair`)
  }
  leg = 4
  public sitOn() {
    console.log('A man sit on the ModernChair')
  }
}

class ModernCoffeeTableFactory implements CoffeeTable {
  constructor(name: string) {
    console.log(`factory make a ${name}'s ModernCoffeeTable`)
  }
  private cup = 0
  public leg = 4
  public placeCup() {
    console.log('place 1 cup on the ModernCoffeeTable')
    this.cup++
  }
  public howManyCups() {
      return this.cup
  }
}

class ModernSofaFactory implements Sofa {
  constructor(name: string) {
    console.log(`factory make a ${name}'s ModernSofa`)
  }
  leg = 4
  public sitOn() {
    console.log('A man sit on the ModernSofa')
  }
}
