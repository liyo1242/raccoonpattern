// * AbstractFactory Part
console.log('==================== AbstractFactory Part ================')
import { ModernFurnitureFactory } from './AbstractFactory'
import type { FurnitureFactory } from './AbstractFactory/type'

function purchaseFurniture(man: string, factory: FurnitureFactory) {
  const chair = factory.createChair(man)
  const coffeeTable = factory.createCoffeeTable(man)

  chair.sitOn()
  coffeeTable.placeCup()
  console.log(`Now has ${coffeeTable.howManyCups()} cup on the table `)
}

purchaseFurniture('Tom', new ModernFurnitureFactory())

// * Builder Part
console.log('==================== Builder Part ========================')
import { FurnitureBuilder, FurnitureDirector } from './Builder'
const director = new FurnitureDirector()
function purchaseChair() {
  const builder = new FurnitureBuilder()
  director.setBuilder(builder)
  director.buildAChairNeedDiy()
  return builder.getResult()
}

const chair = purchaseChair()
chair.sitOn()
chair.diy()
chair.sitOn()
chair.featureList()

// * Prototype Part
console.log('==================== Prototype Part ======================')
import { Player } from './Prototype'

function play() {
  const player = new Player()
  player
    .encounterAttack(25)
    .encounterAttack(15)
    .encounterAttack(10000)
    .resurrection()
    .encounterAttack(1000)
}

play()
