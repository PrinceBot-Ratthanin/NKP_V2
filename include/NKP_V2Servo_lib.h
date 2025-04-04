#include "NKP_V2Servo.h"
#define _servo1 2
#define _servo2 4
#define _servo3 5
#define _servo4 18
#define _servo5 19
#ifndef ALL
#define ALL 100
#endif

Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
Servo servo5;


int current_degree_servo = 90;
void servo(uint8_t servo, int16_t angle)
{
  if (servo == ALL)
  {
    if (angle == -1)
    {
      servo1.detach();
      servo2.detach();
      servo3.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);

      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);

      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);

      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
    }
  }
  if (servo == 1)
  {
    if (angle == -1)
    {
      servo1.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);
    }
  }
  if (servo == 2)
  {
    if (angle == -1)
    {
      servo2.detach();
    }
    else
    {
      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
  if (servo == 3)
  {
    if (angle == -1)
    {
      servo3.detach();
    }
    else
    {
      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);
    }
  }
  if (servo == 4)
  {
    if (angle == -1)
    {
      servo4.detach();
    }
    else
    {
      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
    }
  }
   if (servo == 5)
  {
    if (angle == -1)
    {
      servo5.detach();
    }
    else
    {
      if (!(servo5.attached()))
      {
        servo5.attach(_servo5);
      }
      servo5.write(angle);
    }
  }
}

void control_servo(int servo_ch,int servo_degree,int traget_degree,int servo_speed){
    if(servo_degree < traget_degree ){
      for(int i = servo_degree;i<traget_degree;i++){
        servo(servo_ch,i);
        delay(servo_speed);
        current_degree_servo = i;
      }
    }
    else {
      for(int i = servo_degree;i>traget_degree;i--){
        servo(servo_ch,i);
        delay(servo_speed);
        current_degree_servo = i;
      }
    }
}


//Cr. Inex