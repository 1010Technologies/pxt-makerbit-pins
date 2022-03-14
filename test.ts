makerbit.setLedPins(false);
makerbit.setDigitalPin(5, true);
makerbit.setAnalogPin(5, 1023);
const level: boolean = makerbit.level(PinLevel.High);
loops.forLoop(0, 5, (idx) => { });