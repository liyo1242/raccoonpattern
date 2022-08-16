import { Chair, CoffeeTable, Sofa, FurnitureFactory } from "../type"

export class ArtDecoFurnitureFactory implements FurnitureFactory {
  public createChair(name: string): Chair {
    return new ArtDecoChairFactory(name)
  }
  public createCoffeeTable(name: string): CoffeeTable {
    return new ArtDecoCoffeeTableFactory(name)
  }
  public createSofa(name: string): Sofa {
    return new ArtDecoSofaFactory(name)
  }
}

class ArtDecoChairFactory implements Chair {
  constructor(name: string) {
   console.log(`factory make a ${name}'s ArtDecoChair`)
  }
  leg = 4
  public sitOn() {
    console.log('A man sit on the ArtDecoChair')
  }
}

class ArtDecoCoffeeTableFactory implements CoffeeTable {
  constructor(name: string) {
    console.log(`factory make a ${name}'s ArtDecoCoffeeTable`)
  }
  private cup = 0
  public leg = 4
  public placeCup() {
    console.log('place 1 cup on the ArtDecoCoffeeTable')
    this.cup++
  }
  public howManyCups() {
      return this.cup
  }
}

class ArtDecoSofaFactory implements Sofa {
  constructor(name: string) {
    console.log(`factory make a ${name}'s ArtDecoSofa`)
  }
  leg = 4
  public sitOn() {
    console.log('A man sit on the ArtDecoSofa')
  }
}
