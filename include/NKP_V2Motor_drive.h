int last_value_analog = 0;
float control_voltage = 0.0;
int select_conection_i2c = 0;

void i2c_send(byte data) {
  if(select_conection_i2c == 0){
    Wire.beginTransmission(0x20);
    Wire.write(data);
    Wire.endTransmission();
  }
  else {
    Wire1.beginTransmission(0x20);
    Wire1.write(data);
    Wire1.endTransmission();
  }
}
void i2c_send_buff(byte *data, uint8_t len_data) {
  if(select_conection_i2c == 0){
    Wire.beginTransmission(0x20);
    Wire.write(data, len_data);
    Wire.endTransmission();
    Wire.flush();
  }
  else {
    Wire1.beginTransmission(0x20);
    Wire1.write(data, len_data);
    Wire1.endTransmission();
    Wire1.flush();
  }
}
int i2c_request(int byte_num) {
  int num_lenght = 0;
  int data_in[5];
  if(select_conection_i2c == 0){
    int n = Wire.requestFrom(0x20, byte_num);
    if (n < 1) {
      Wire.endTransmission();
      Serial.println("Read data error");
      return 0;
    } else if (n == 2) {
      data_in[0] = Wire.read();
      data_in[1] = Wire.read();
    }
  }
  else{
    int n = Wire1.requestFrom(0x20, byte_num);
    if (n < 1) {
      Wire1.endTransmission();
      Serial.println("Read data error");
      return 0;
    } else if (n == 2) {
      data_in[0] = Wire1.read();
      data_in[1] = Wire1.read();
    }
  }


  int data_value = data_in[1] * 256 + data_in[0];
  if (data_value >= 0 && data_value <= 4095) {
    return data_value;
  } else {
    return 0;
  }
}
int ADC(uint8_t port_analog){
  int analog_data = 0;
    uint8_t buff_data[3] = {0XFF,9,port_analog};
    i2c_send_buff(buff_data,3);
    int analog_data_buffer = (i2c_request(2));
    return analog_data_buffer;
}

float map_F(float x, float in_max, float out_min, float out_max) {
  return (x - 0.0) * (out_max - out_min) / (in_max - 0.0) + out_min;
}
float Volt_input(){
  return (((float)ADC(9))*(3.3/1023.0)*5.05);
}
void motor_control(uint8_t state, float speed) {
  if(control_voltage >= 5.0){
    float maxspeed_F = map_F(control_voltage,Volt_input(),0.0,100.0);
    speed = map(speed,0,100,0,maxspeed_F);
    speed = speed * (1 + (Volt_input() - control_voltage) / 120 );
  }


  speed = constrain(speed,0,100); 
  uint8_t buff_data[4] = { 0xFF, 20, state, abs(speed) };
  i2c_send_buff(buff_data, 4);
}




void motor(int ch,float speed){
  
  if(ch == 1){
    if(speed >0){motor_control(0,speed);}
    else{motor_control(1,abs(speed));}
  }
  else if(ch == 2){
    if(speed >0){motor_control(2,speed);}
    else{motor_control(3,abs(speed));}
  }
  else if(ch == 3){
    if(speed >0){motor_control(4,speed);}
    else{motor_control(5,abs(speed));}
  }
  else if(ch == 4){
    if(speed >0){motor_control(6,speed);}
    else{motor_control(7,abs(speed));}
  }
  else if(ch == 5){
    if(speed >0){motor_control(8,speed);}
    else{motor_control(9,abs(speed));}
  }
  else if(ch == 6){
    if(speed >0){motor_control(10,speed);}
    else{motor_control(11,abs(speed));}
  }
  else if(ch == 7){
    if(speed >0){motor_control(12,speed);}
    else{motor_control(13,abs(speed));}
  }
}

// void MT(int speeda, int speedb,int time_speed){ 
//   motor(1,1,speeda);
//   motor(2,1,speeda);
//   delay(time_speed);
// }
void ao(){
  motor_control(14,0);
}
void aot(int _timer){
  motor_control(14,0);
  delay(_timer);
}
void fd(int _Speed){
  motor_control(12,_Speed);
}
void bk(int _Speed){
  motor_control(13,_Speed);
}
void sl(int _Speed){
  // motor(1,2,_Speed);
  // motor(2,1,_Speed);
}
void sr(int _Speed){
  // motor(1,1,_Speed);
  // motor(2,2,_Speed);
}
