makerbit.setLedPins(0);
makerbit.setDigitalPin(5, 1);
makerbit.setAnalogPin(5, 1023);
const level: number = makerbit.level(PinLevel.High);
loops.forLoop(0, 5, (idx) => { });
input.disableButtons();
input.enableButtons();
