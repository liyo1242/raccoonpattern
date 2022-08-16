export class Player {
  public health = 100
  public defense = 10
  public circularReference?: ComponentWithBackReference

  public clone(): this {
    const clone = Object.create(this)

    clone.circularReference = {
      ...this.circularReference || [],
      prototype: { ...this }
    }
    clone.health = this.health
    clone.defense = this.defense
    return clone
  }

  public encounterAttack(attackPoint: number) {
    if (!this.health) {
      return this
    }
    console.log(`Encounter ${attackPoint} points attack`)
    const clone = this.clone()
    if (attackPoint - clone.defense > 0)
      clone.health = clone.health - (attackPoint - clone.defense)
    if (clone.health <= 0) {
      clone.health = 0
      console.log(`You Dead!!! health history : ${printHistory(clone)}`)
    }

    return clone
  }

  public resurrection() {
    if (!this.health) {
      const clone = this.clone()
      clone.health = this.circularReference?.prototype.health!
      console.log(`Resurrection !!!, Your health restore to ${clone.health} points`)
      return clone
    }
    return this
  }
}

function printHistory(player: Player, history: Array<number> = []): Array<number> {
  if (!player.circularReference) {
    return [player.health].concat(history)
  } else {
    return printHistory(player.circularReference.prototype, [player.health].concat(history))
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Player) {
    this.prototype = prototype;
  }
}
