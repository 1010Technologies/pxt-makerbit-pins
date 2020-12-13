namespace makerbit {
  /**
   * Returns the next value in a range.
   * @param current the value which is used to calculate the next value
   * @param start first value in the range
   * @param end last value in the range
   */
  //% blockId="makerbit_helper_next"
  //% block="next of %current in range from %start to %end"
  //% weight=20
  //% subcategory="Pins"
  export function next(current: number, start: number, end: number): number {
    let next = current;
    if (start <= end) {
      next += 1;
      if (next < start || next > end) {
        return start;
      }
    } else {
      next -= 1;
      if (next < end || next > start) {
        return start;
      }
    }
    return next;
  }
}
