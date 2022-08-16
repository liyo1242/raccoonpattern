import { ChairBuilder } from './type'

export class FurnitureDirector {
  private builder?: ChairBuilder

  public setBuilder(builder: ChairBuilder) {
    this.builder = builder
  }

  public buildSpecialChair() {
    if (this.builder) {
      this.builder.buildBack().buildLeg(1).buildSeat().drawColor('yellow')
      this.builder.assembly()
    } else {
      console.log('there is no builder can work')
    }
  }

  public buildAChairNeedDiy() {
    if (this.builder) {
      this.builder.buildBack().buildLeg().buildSeat().drawColor()
    } else {
      console.log('there is no builder can work')
    }
  }
}
