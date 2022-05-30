# MakerBit Pins

[![Build Status](https://travis-ci.org/1010Technologies/pxt-makerbit-pins.svg?branch=master)](https://travis-ci.org/1010Technologies/pxt-makerbit-pins)

MakeCode package for convenient programming of micro:bit pins.

## MakerBit Board

The MakerBit connects to the BBC micro:bit to provide easy connections to a wide variety of sensors, actuators and other components. Among other things, it features convienent pin connectors.

http://makerbit.com/

| ![MakerBit](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit.png "MakerBit") | ![MakerBit+R](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit+R.png "MakerBit+R") |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                                            _MakerBit_                                            |                                   _MakerBit+R with motor controller_                                   |

## Pin Blocks

### MakerBit setLedPins

Sets LED pins from 5 to 16 to either on or off.
The pins from pin 5 to 16 are the MakerBit LED pins.
Make sure to turn off the built-in LED display when using all MakerBit LED pins.

```sig
makerbit.setLedPins(level: number)
```

### MakerBit setDigitalPin

Sets a digital pin to either on or off and configures this pin as a digital output.

```sig
makerbit.setDigitalPin(pin: number, level: number)
```

### MakerBit setAnalogPin

Sets an analog pin to a given level and configures this pin as an analog/pwm output with the duty cycle proportional to the provided value. The value is a number between 0 (0% duty cycle) and 1023 (100% duty).

```sig
makerbit.setAnalogPin(pin: number, level: number)
```

### MakerBit timeAveragedLevel

Returns the time-averaged input level from a sensor. The first time this is called it saves the time average. On the next calls, it subtracts this time-averaged level from the current time average and returns the absolute value.

```sig
makerbit.timeAveragedLevel(pin: number, timeSample: number)
```

## License

Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets

- for PXT/microbit
