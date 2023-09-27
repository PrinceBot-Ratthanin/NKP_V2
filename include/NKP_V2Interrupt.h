#define Pin_encoderA 26
#define Pin_encoderB 27
volatile int interruptCounterA = 0;
volatile int interruptCounterB = 0;
int numberOfInterruptsA = 0;
int numberOfInterruptsB = 0;
bool attachEncoderA = false;
bool attachEncoderB = false;

void update_EncoderA(){
	numberOfInterruptsA++;
}
void update_EncoderB(){
	numberOfInterruptsB++;
}
void resetEncoderA(){
	numberOfInterruptsA = 0;
}
void resetEncoderB(){
	numberOfInterruptsB = 0;
}
unsigned int encoderA(){
	if(attachEncoderA == false){
		attachEncoderA = true;
		pinMode(Pin_encoderA, INPUT_PULLUP);
 		attachInterrupt(digitalPinToInterrupt(Pin_encoderA), update_EncoderA, CHANGE);
	}
	return numberOfInterruptsA;
}
unsigned int encoderB(){
	if(attachEncoderB == false){
		attachEncoderB = true;
		pinMode(Pin_encoderB, INPUT_PULLUP);
 		attachInterrupt(digitalPinToInterrupt(Pin_encoderB), update_EncoderB, CHANGE);
	}
	return numberOfInterruptsB;
}