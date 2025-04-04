

#include "NKP_V2.h"
#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif


#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"

${EXTINC}


${VARIABLE}

${FUNCTION}

void setup()
{
	Serial.begin(115200);
	
	NKP_V2();
	beep();
	display.clearDisplay();
    /* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}

