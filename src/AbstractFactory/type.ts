export interface Chair {
  leg: number
  sitOn(): void
}

export interface CoffeeTable {
  leg: number
  placeCup(): void
  howManyCups(): number
}

export interface Sofa {
  leg: number
  sitOn(): void
}

export interface FurnitureFactory {
  createChair: (name: string) => Chair
  createCoffeeTable: (name: string) => CoffeeTable
  createSofa: (name: string) => Sofa
}
