int last_value_analog = 0;


void i2c_send(byte data) {
  Wire.beginTransmission(0x20);
  Wire.write(data);
  Wire.endTransmission();
}
void i2c_send_buff(byte *data, uint8_t len_data) {
  Wire.beginTransmission(0x20);
  Wire.write(data, len_data);
  Wire.endTransmission();
  Wire.flush();
}
int i2c_request(int byte_num) {
  int num_lenght = 0;
  int data_in[5];

  int n = Wire.requestFrom(0x20, byte_num);
  if (n < 1) {
    Wire.endTransmission();
    Serial.println("Read data error");
    return 0;
  } else if (n == 2) {
    data_in[0] = Wire.read();
    data_in[1] = Wire.read();
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
  //   uint8_t buff_data[3] = {header,analog_read,port_analog};
  //   i2c_send_buff(buff_data,3);
  //   analog_data = (i2c_request(2));
  //   if(analog_data == 0)analog_data = last_value_analog;
  // delay(0.5);
  // last_value_analog = analog_data;
  //for(int i = 0;i<5;i++){
    uint8_t buff_data[3] = {0XFF,9,port_analog};
    i2c_send_buff(buff_data,3);
    int analog_data_buffer = (i2c_request(2));
    // if(analog_data_buffer == 0)analog_data += last_value_analog;
    // else{analog_data += analog_data_buffer;}
    // last_value_analog = analog_data_buffer;
  //}
  //return analog_data/5;
    return analog_data_buffer;
}

void motor_control(uint8_t state, uint8_t speed) {
  uint8_t buff_data[4] = { 0xFF, 20, state, speed };
  i2c_send_buff(buff_data, 4);
}
void motor(int ch,int speed){
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
