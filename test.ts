makerbit.setLedPins(0);
makerbit.setDigitalPin(5, 1);
makerbit.setAnalogPin(5, 1023);
const levelValue: number = makerbit.level(PinLevel.High);
const level: PinLevel = makerbit.level(makerbit.toLevel(true));
loops.forLoop(0, 5, (idx) => { });