export interface ChairBuilder {
  buildLeg(count?: number): ChairBuilder
  buildBack(): ChairBuilder
  buildSeat(): ChairBuilder
  drawColor(color?: string): ChairBuilder
  assembly(): ChairBuilder
}
