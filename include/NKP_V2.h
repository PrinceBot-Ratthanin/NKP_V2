
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>


#include "NKP_V2Motor_drive.h"
#include "NKP_V2Servo_lib.h"
#include "Adafruit_TCS34725.h"
#include "NKP_V2Interrupt.h"
#include <MPU6050_tockn.h>





#define A1 39
#define A2 36
#define A3 34
#define A4 32
#define A5 25
#define A6 26
#define A7 14
#define A12 33
#define A13 33
#define A14 27




MPU6050 mpu6050(Wire);


Adafruit_SSD1306 display(128, 64, &Wire, -1);
Adafruit_TCS34725 tcs = Adafruit_TCS34725();


int PID_NumPin = 3;
int Front_color = 0;
int Front_sensitive = 20;
int PID_SetupPin[] = {0,0,0,0,0,0,0,0};
int PID_Min[] = {10,10,10,10,10,10,10,10};
int PID_Max[] = {4000,4000,4000,4000,4000,4000,4000,4000};
float errors = 0;
float output = 0;
float integral = 0;
float derivative = 0;
float previous_error = 0;
uint16_t state_on_Line = 0;
uint32_t _lastPosition;
bool first_state_for_calribrate = 0;

int PID_NumPin_B = 3;
int Back_color = 0;
int Black_sensitive = 20;
int PID_SetupPin_B[] = {0,0,0,0,0,0,0,0};
int PID_Min_B[] = {10,10,10,10,10,10,10,10};
int PID_Max_B[] = {4000,4000,4000,4000,4000,4000,4000,4000};
float errors_B = 0;
float output_B = 0;
float integral_B = 0;
float derivative_B = 0;
float previous_error_B = 0;
uint16_t state_on_Line_B = 0;
uint32_t _lastPosition_B;
bool first_state_for_calribrate_B = 0;


int state_IMU = 0;
void draw_pixel(int16_t x, int16_t y)
{
  display.setTextColor(SSD1306_WHITE);
  //display.setColor(WHITE);
  display.setCursor(x, y);
}

void clear_pixel(int16_t x, int16_t y)
{
  //display.setColor(BLACK);
  //display.setPixel(x, y);
  display.setCursor(x, y);
}
void NKP_V2(){
  analogReadResolution(12);
  pinMode(13,INPUT);
  Wire.begin();
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.setTextSize(2);
  if(ADC(0) == 0 and ADC(1) == 0 and ADC(2) == 0 and ADC(4) == 0 and ADC(5) == 0 and ADC(6) == 0 and ADC(7) == 0){
    select_conection_i2c = 1;
    Wire1.begin(16,17);
  }
  delay(2000);
}
void drawString(int x,int y,String Text){
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(x, y);
  display.println(Text);
}
void drawString(int x,int y,int Text){
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(x, y);
  display.println(String(Text));
}

int analog(int _pin){
    if(_pin == 1){return analogRead(36);}
    else if(_pin == 2){return analogRead(39);}
    else if(_pin == 3){return analogRead(34);}
    else if(_pin == 4){return analogRead(32);}
    else if(_pin == 5){return analogRead(25);}
    else if(_pin == 6){return analogRead(26);}
    else if(_pin == 7){return analogRead(14);}
    
    else if(_pin == 12){return analogRead(35);}
    else if(_pin == 13){return analogRead(33);}
    else if(_pin == 14){return analogRead(27);}

    else if(_pin == 8){return ADC(0)*4.00;}
    else if(_pin == 9){return ADC(2)*4.00;}
    else if(_pin == 10){return ADC(5)*4.00;}
    else if(_pin == 11){return ADC(6)*4.00;}
    else if(_pin == 15){return ADC(1)*4.00;}
    else if(_pin == 16){return ADC(4)*4.00;}
    else if(_pin == 17){return ADC(7)*4.00;}
  
}

void set_IMU(){
  delay(500);
  display.clearDisplay();
  display.setTextSize(2);
  //display.setFont(ArialMT_Plain_16);
  drawString(15,0,"IMU_Calibrat");
  drawString(25,17,"3 Second");
  drawString(18,35,"Don't Move");
  display.display();
  mpu6050.begin();
  mpu6050.calcGyroOffsets(true);
  mpu6050.update();
  if((1000+ mpu6050.getAngleX()) > 1100 || (1000+ mpu6050.getAngleX()) < 900 ||
  	 (1000+ mpu6050.getAngleY()) > 1100 || (1000+ mpu6050.getAngleY()) < 900 ||
  	 (1000+ mpu6050.getAngleZ()) > 1100 || (1000+ mpu6050.getAngleZ()) < 900 )
  {
  	mpu6050.calcGyroOffsets(true);
  	mpu6050.update();
  }
  display.clearDisplay();
  drawString(0,0,"AngleX:");
  drawString(70,0,String(1000 + mpu6050.getAngleX()));
  drawString(0,17,"AngleY:");
  drawString(70,17,String(1000 + mpu6050.getAngleY()));
  drawString(0,35,"AngleZ:");
  drawString(70,35,String(1000 + mpu6050.getAngleZ()));
  display.display();
  delay(700);
  state_IMU = 1;
}
int Read_angle(int angle_){
	
	if(state_IMU == 0){
		set_IMU();
	}
	else{
	mpu6050.update();
	    if(angle_ == 0){
	    	return 1000+mpu6050.getAngleX();
		}
		else if(angle_ == 1){
		    return  1000+mpu6050.getAngleY();
		}
		else if(angle_ == 2){
		    return  1000+mpu6050.getAngleZ();
		}
	}
	
}
void buzzer(int freq, int timr_delay) {
  pinMode(12, OUTPUT);
  ledcSetup(7, 5000, 8);
  ledcAttachPin(12,7);
  ledcWriteTone(7, freq);
  delay(timr_delay);
  
}


void beep(){
  buzzer(1000,200);
  buzzer(0,200);
}
void beep_on(){
  buzzer(1000,200);
}
void beep_off(){
  buzzer(0,200);
}
void beep(int _delay){
  buzzer(1000,_delay);
  buzzer(0,1);
}



void wait(){
  int state_sw0 = 0;
  pinMode(13,INPUT);
  pinMode(0,INPUT);
  display.clearDisplay();
  display.setTextSize(2);
  //display.setFont(ArialMT_Plain_16);
  drawString(25,0,"NKP_V2");
  drawString(24,20,"Welcome");
  display.display();
  delay(700);
  display.setTextSize(1);
  //display.setFont(ArialMT_Plain_10);
  while(digitalRead(13) == 1){
    if(digitalRead(0) == 1){
	  	display.clearDisplay();
	  	drawString(0,0,String(String("A1::")));
	  	drawString(28,0,String(analog(1)));
	  	drawString(65,0,String(String("A2::")));
	  	drawString(93,0,String(analog(2)));
	  	drawString(0,12,String(String("A3::")));
	  	drawString(28,12,String(analog(3)));
	 	  drawString(65,12,String(String("A4::")));
	  	drawString(93,12,String(analog(4)));
	  	drawString(0,24,String(String("A5::")));
	  	drawString(28,24,String(analog(5)));
	  	drawString(65,24,String(String("A6::")));
	  	drawString(93,24,String(analog(6)));
      drawString(0,36,String(String("A7::")));
      drawString(28,36,String(analog(7)));
      drawString(65,36,String(String("A8::")));
      drawString(93,36,String(analog(8)));
      drawString(0,48,String(String("press boot to read A9-A17")));
	  	display.display();
	  	delay(100);
    }
    else{
      display.clearDisplay();
      drawString(0,0,String(String("A9::")));
      drawString(28,0,String(analog(9)));
      drawString(65,0,String(String("A10::")));
      drawString(93,0,String(analog(10)));
      drawString(0,12,String(String("A11::")));
      drawString(28,12,String(analog(11)));
      drawString(65,12,String(String("A12::")));
      drawString(93,12,String(analog(12)));
      drawString(0,24,String(String("A13::")));
      drawString(28,24,String(analog(13)));
      drawString(65,24,String(String("A14::")));
      drawString(93,24,String(analog(14)));
      drawString(0,36,String(String("A15::")));
      drawString(28,36,String(analog(15)));
      drawString(65,36,String(String("A16::")));
      drawString(93,36,String(analog(16)));
      drawString(0,48,String(String("A17::")));
      drawString(28,48,String(analog(17)));
      drawString(65,48,String(String("Volt=")));
      drawString(95,48,String(Volt_input()));
      display.display();
      delay(100);
    }
  }
  beep();
  display.clearDisplay();
  display.display();
  delay(500);
}
float Read_Color_TCS(int color_of_sensor){
  uint16_t clearcol_lib, red_lib, green_lib, blue_lib;
 float average_lib, r_lib, g_lib, b_lib;
 //delay(100); // Farbmessung dauert c. 50ms 
 tcs.getRawData(&red_lib, &green_lib, &blue_lib, &clearcol_lib);
 average_lib = (red_lib+green_lib+blue_lib)/3;
 r_lib = red_lib/average_lib;
 g_lib = green_lib/average_lib;
 b_lib = blue_lib/average_lib;
 if(color_of_sensor == 0){
  return r_lib*100;
 }
 else if(color_of_sensor == 1){
  return g_lib*100;
 }
  else if(color_of_sensor == 2){
  return b_lib*100;
 }
}
void set_Front_color(){

}
void PID_set_Min(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Min[0] = S0;PID_Min[1] = S1;PID_Min[2] = S2;PID_Min[3] = S3;
  PID_Min[4] = S4;PID_Min[5] = S5;PID_Min[6] = S6;PID_Min[7] = S7;
}
void PID_set_Max(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Max[0] = S0;PID_Max[1] = S1;PID_Max[2] = S2;PID_Max[3] = S3;
  PID_Max[4] = S4;PID_Max[5] = S5;PID_Max[6] = S6;PID_Max[7] = S7;
}
void PID_set_Pin(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_SetupPin[0] = S0;PID_SetupPin[1] = S1;PID_SetupPin[2] = S2;PID_SetupPin[3] = S3;
  PID_SetupPin[4] = S4;PID_SetupPin[5] = S5;PID_SetupPin[6] = S6;PID_SetupPin[7] = S7;
}
void setCalibrate(int round){
  display.clearDisplay();
  display.setTextSize(3);
  //display.setFont(ArialMT_Plain_24);
  drawString(0,0,"Front Sensor");
  drawString(0,25,"  Calribrate  ");
  display.display();
  if(first_state_for_calribrate == 0){
    for (uint8_t i = 0; i < PID_NumPin; i++)
    {
      PID_Max[i] = 0;
      PID_Min[i] = 4095;
    }
    first_state_for_calribrate = 1;
  }
  for(int roundOfCalribtate = 0; roundOfCalribtate < round ;roundOfCalribtate++ ){
    for (uint8_t i = 0; i < PID_NumPin; i++)
    {
      if(analog(PID_SetupPin[i]) > PID_Max[i] || PID_Max[i] >= 4095 ){
        PID_Max[i]  = analog(PID_SetupPin[i]);
        if(PID_Max[i] > 4095 )PID_Max[i] = 4095;
      }
    }
    for (uint8_t i = 0; i < PID_NumPin; i++)
    {
      if(analog(PID_SetupPin[i]) < PID_Min[i] || PID_Min[i] == 0){
        PID_Min[i] = analog(PID_SetupPin[i]);
        if(PID_Min[i] < 0) PID_Min[i] = 0;
      }
    }
    delay(1);
  }
  display.clearDisplay();
    
}
int ReadSensorMinValue(uint8_t _Pin){
    return PID_Min[_Pin];
}
int ReadSensorMaxValue(uint8_t _Pin){
    return PID_Max[_Pin];
}

int readline()   
{                
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < PID_NumPin ; i++) 
  {
  	long value;
  	if(Front_color == 0){
  		value = map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
  	}
  	else {
  		value = map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
  	}
    
    value = constrain(value,0,100);      
    if (value > Front_sensitive) { 
      onLine = true;
    }
    if (value > 5){
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < ((PID_NumPin-1) * 100)/2){
      return 0;
    }
    else{
      return ((PID_NumPin-1) * 100);
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}
void Run_PID(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  
  int present_position = readline();
  int setpoint = ((PID_NumPin - 1) * 100) / 2;
  errors = present_position - setpoint;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    
  int m1Speed = RUN_PID_speed + output ;
  int m2Speed = RUN_PID_speed - output;
  motor(1,m1Speed);
  motor(2,m2Speed);
  delay(1);
  previous_error = errors;
}
void Run_PID_4WD(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  
  int present_position = readline();
  int setpoint = ((PID_NumPin - 1) * 100) / 2;
  errors = present_position - setpoint;
  integral = integral + errors ;
  derivative = (errors - previous_error) ;
  output = RUN_PID_KP * errors  + RUN_PID_KD * derivative;
    
  int m1Speed = RUN_PID_speed + output ;
  int m2Speed = RUN_PID_speed - output;
  motor(1,m1Speed);
  motor(2,m2Speed);
  motor(3,m1Speed);
  motor(4,m2Speed);
  delay(1);
  previous_error = errors;
}

void PID_set_Min_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Min_B[0] = S0;PID_Min_B[1] = S1;PID_Min_B[2] = S2;PID_Min_B[3] = S3;
  PID_Min_B[4] = S4;PID_Min_B[5] = S5;PID_Min_B[6] = S6;PID_Min_B[7] = S7;
}
void PID_set_Max_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_Max_B[0] = S0;PID_Max_B[1] = S1;PID_Max_B[2] = S2;PID_Max_B[3] = S3;
  PID_Max_B[4] = S4;PID_Max_B[5] = S5;PID_Max_B[6] = S6;PID_Max_B[7] = S7;
}
void PID_set_Pin_B(int S0,int S1,int S2,int S3,int S4,int S5,int S6,int S7){
  PID_SetupPin_B[0] = S0;PID_SetupPin_B[1] = S1;PID_SetupPin_B[2] = S2;PID_SetupPin_B[3] = S3;
  PID_SetupPin_B[4] = S4;PID_SetupPin_B[5] = S5;PID_SetupPin_B[6] = S6;PID_SetupPin_B[7] = S7;
}
int readline_B()   
{                
  bool onLine_B = false;
  long avg_B = 0;
  long sum_B = 0;
  for (uint8_t i = 0; i < PID_NumPin_B ; i++) 
  {
  	long value_B;
  	if(Back_color == 0){
  		value_B = map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 100, 0);
  	}
    else {
    	value_B = map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 0, 100);
    }
    value_B = constrain(value_B,0,100); 
    if (value_B > Black_sensitive) { 
      onLine_B = true;
    }
    if (value_B > 5){
      avg_B += (long)value_B * (i * 100);
      sum_B += value_B;
    }
  }
  if (!onLine_B)
  {
    if (_lastPosition_B < ((PID_NumPin_B-1) * 100)/2){
      return 0;
    }
    else{
      return ((PID_NumPin_B-1) * 100);
    }
  }
  _lastPosition_B = avg_B / sum_B;
  return _lastPosition_B;
}
void Run_PID_B(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  int present_position_B = readline_B();
  int setpoint_B = ((PID_NumPin_B - 1) * 100) / 2;
  errors_B = present_position_B - setpoint_B;
  integral_B = integral_B + errors_B ;
  derivative_B = (errors_B - previous_error_B) ;
  output_B = RUN_PID_KP * errors_B  + RUN_PID_KD * derivative_B;
  
  int m1Speed = RUN_PID_speed + output_B ;
  int m2Speed = RUN_PID_speed - output_B;

  motor(1,-m1Speed);
  motor(2,-m2Speed);
  delay(1);
  previous_error_B = errors_B;
}
void Run_PID_B_4WD(int RUN_PID_speed,float RUN_PID_KP,float RUN_PID_KD){
  int present_position_B = readline_B();
  int setpoint_B = ((PID_NumPin_B - 1) * 100) / 2;
  errors_B = present_position_B - setpoint_B;
  integral_B = integral_B + errors_B ;
  derivative_B = (errors_B - previous_error_B) ;
  output_B = RUN_PID_KP * errors_B  + RUN_PID_KD * derivative_B;
  
  int m1Speed = RUN_PID_speed + output_B ;
  int m2Speed = RUN_PID_speed - output_B;

  motor(1,-m1Speed);
  motor(2,-m2Speed);
  motor(3,-m1Speed);
  motor(4,-m2Speed);
  delay(1);
  previous_error_B = errors_B;
}
long readDistance(int Trig,int Echo){
  long duration, cm;
  pinMode(Echo, OUTPUT);
  digitalWrite(Echo, 0);
  delayMicroseconds(2);
  digitalWrite(Echo, 1);
  delayMicroseconds(5);
  digitalWrite(Echo, 0);
  pinMode(Trig, INPUT);
  duration = pulseIn(Trig, 1);
  return duration / 29 / 2;
}
bool Read_status_sensor(int pin_sensor){
	return analog(PID_SetupPin[pin_sensor]) < ((PID_Max[pin_sensor] + PID_Min[pin_sensor]) / 2) ? true : false;
}
bool Read_status_sensor_B(int pin_sensor){
	return analog(PID_SetupPin_B[pin_sensor]) < ((PID_Max_B[pin_sensor] + PID_Min_B[pin_sensor]) / 2) ? true : false;
}
void setCalibrate_B(int round){
  display.clearDisplay();
  display.setTextSize(3);
  //display.setFont(ArialMT_Plain_24);
  drawString(0,0,"Black Sensor");
  drawString(0,25,"  Calribrate  ");
  display.display();
  if(first_state_for_calribrate_B == 0){
    for (uint8_t i = 0; i < PID_NumPin_B; i++)
    {
      PID_Max_B[i] = 0;
      PID_Min_B[i] = 4095;
    }
    first_state_for_calribrate_B = 1;
  }
  for(int roundOfCalribtate = 0; roundOfCalribtate < round ;roundOfCalribtate++ ){
    for (uint8_t i = 0; i < PID_NumPin_B; i++)
    {
      if(analog(PID_SetupPin_B[i]) > PID_Max_B[i] || PID_Max_B[i] >= 4095 ){
        PID_Max_B[i]  = analog(PID_SetupPin_B[i]);
        if(PID_Max_B[i] > 4095 )PID_Max_B[i] = 4095;
      }
    }
    for (uint8_t i = 0; i < PID_NumPin_B; i++)
    {
      if(analog(PID_SetupPin_B[i]) < PID_Min_B[i] || PID_Min_B[i] == 0){
        PID_Min_B[i] = analog(PID_SetupPin_B[i]);
        if(PID_Min_B[i] < 0) PID_Min_B[i] = 0;
      }
    }
    delay(1);
  }
  display.clearDisplay();
    
}
int Read_sumValue_sensor(){
  int value = 0;
  for(int i = 0;i<PID_NumPin;i++){
    if(Front_color == 0){
        value += map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 100, 0);
      }
      else {
        value += map(analog(PID_SetupPin[i]), PID_Min[i], PID_Max[i], 0, 100);
      } 
  }
   
    return value;
}
int Read_sumValue_sensor_B(){
  int value = 0;
  for(int i = 0;i<PID_NumPin_B;i++){
    if(Back_color == 0){
        value += map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 100, 0);
      }
      else {
        value += map(analog(PID_SetupPin_B[i]), PID_Min_B[i], PID_Max_B[i], 0, 100);
      } 
  }
   
    return value;
}