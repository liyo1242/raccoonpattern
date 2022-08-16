import { ChairBuilder } from './type'

class Chair {
  public feature: Array<string> = []

  sitOn() {
    if (this.feature.includes('assembly')) {
      console.log('A man sit on this chair')
    } else {
      console.log('can not sit on this chair before DIY')
    }
  }
  diy() {
    if (!this.feature.includes('assembly')) {
      console.log('DIY the chair...')
      this.feature.push('assembly')
    }
  }
  featureList() {
    console.log(`The chair has those feature: ${this.feature.join(', ')}`)
  }
}

export class FurnitureBuilder implements ChairBuilder {
  private chair = new Chair()

  constructor() {
    this.reset()
  }

  public reset(): void {
    this.chair = new Chair()
  }

  public buildLeg(count = 4) {
    this.chair.feature.push(`${count} leg`)
    return this
  }

  public buildBack() {
    this.chair.feature.push(`chair back`)
    return this
  }

  public buildSeat() {
    this.chair.feature.push(`chair seat`)
    return this
  }

  public drawColor(color = 'white') {
    this.chair.feature.push(`${color} chair`)
    return this
  }
  public assembly() {
    this.chair.feature.push(`assembly`)
    return this
  }

  public getResult() {
    return this.chair
  }
}
