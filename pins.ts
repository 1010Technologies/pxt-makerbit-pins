// MakerBit Pin blocks

const enum PinLevel {
  //% block="high"
  High = 1,
  //% block="low"
  Low = 0,
}

//% color=#0fbc11 icon="\u272a" block="MakerBit"
//% category="MakerBit"
namespace makerbit {

  /**
   * Sets LED pins from 5 to 16 to either on or off.
   * The pins from pin 5 to 16 are the MakerBit LED pins.
   * Make sure to turn off the built-in LED display when using the MakerBit LED pins. 
   * Button A (pin 5) and button B (pin 11) cannot be used while LEDs are connected to those pins. 
   * @param level digital pin level, either true or false
   */
  //% blockId="makerbit_helper_set_led_pins"
  //% block="set all LED pins to %level=makerbit_helper_level"
  //% weight=90
  //% subcategory="Pins"
  export function setLedPins(level: boolean): void {
    buttons.disable();
    for (let i = 5; i <= 16; i++) {
      setDigitalPin(i, level);
    }
  }

  /**
   * Sets a digital pin to either on or off.
   * Configures this pin as a digital output (if necessary).
   * @param pin pin number in the range from 0 to 16, eg: 5
   * @param level digital pin level, either true or false
   */
  //% blockId="makerbit_helper_set_digital_pin"
  //% block="set digital pin %pin | to %level=makerbit_helper_level"
  //% pin.min=0 pin.max=16
  //% weight=89
  //% subcategory="Pins"
  export function setDigitalPin(pin: number, level: boolean): void {
    pin = pin | 0; // cast to int
    if (pin < 0 || pin > 16) {
      return;
    }
    pins.digitalWritePin(pin + DigitalPin.P0, level ? 1 : 0);
  }

  /**
   * Sets an analog pin to a given level.
   * Configures this pin as an analog/pwm output, and change the output value to the given level
   * with the duty cycle proportional to the provided value.
   * The value is a number between 0 (0% duty cycle) and 1023 (100% duty).
   * @param pin pin number in the range from 0 to 16, eg: 5
   * @param level value in the range from 0 to 1023 eg: 1023
   */
  //% blockId="makerbit_helper_set_analog_pin"
  //% block="set analog pin %pin | to %level"
  //% pin.min=0 pin.max=16
  //% level.min=0 level.max=1023
  //% weight=88
  //% subcategory="Pins"
  export function setAnalogPin(pin: number, level: number): void {
    pin = pin | 0; // cast to int
    if (pin < 0 || pin > 16) {
      return;
    }
    pins.analogWritePin(pin + AnalogPin.P0, level);
  }

  /**
   * Converts a digital pin level into a boolean value.
   * @param pinLevel the pin level, eg: PinLevel.High
   */
  //% blockId=makerbit_helper_level
  //% block="%level"
  //% blockHidden=true
  //% subcategory="Pins"
  export function level(pinLevel: PinLevel): boolean {
    return pinLevel === PinLevel.High;
  }


  let analogTimeAverages: number[] = [];

  const getTimeAverage = (pin: number, timeSample: number, offset: number) => {
    let samples = 0;
    let timeAverage = 0;
    let startTime = control.millis();
    while ((control.millis() - startTime) < timeSample) {
      timeAverage += Math.abs(pins.analogReadPin(pin + AnalogPin.P0) - offset);
      samples++;
    }
    timeAverage = Math.round(timeAverage / ((samples !== 0) ? samples : 1));
    return timeAverage;
  }

  /**
   * Returns the time-averaged input level from a sensor.
   * The first time this is called it saves the time average.
   * On the next calls, it subtracts this time-averaged level from
   * the current time average and returns the absolute value.
   * @param pin pin number in the range from 0 to 16, eg: 0
   * @param timeSample sample length in milliseconds, eg: 64
   */
  //% blockId="makerbit_helper_time_averaged_level"
  //% block="input level from %pin | with time sample %timeSample ms"
  //% pin.min=0 pin.max=16
  //% timeSample.defl=64
  //% weight=80
  //% subcategory="Pins"
  export function timeAveragedLevel(pin: number, timeSample: number): number {
    pin = pin | 0; // cast to int
    if (pin < 0 || pin > 16) {
      return 0;
    }
    if (analogTimeAverages[pin] === undefined) {
      analogTimeAverages[pin] = getTimeAverage(pin, timeSample, 0);
    }
    const result = getTimeAverage(pin, timeSample, analogTimeAverages[pin]);
    return result;
  }

}
