#include "pxt.h"

using namespace pxt;

namespace makerbit {

//%
void enableButtons() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonA.enable();
    uBit.buttonB.enable();
#endif
}

//%
void disableButtons() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonA.disable();
    uBit.buttonB.disable();
#endif
}

} // namespace makerbit