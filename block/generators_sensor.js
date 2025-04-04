module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['button_1_status'] = function(block) {  
  var code = '(digitalRead(13))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Knob_status'] = function(block) {  
  var code = '(analogRead(33))';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['encoderA_status'] = function(block) {  
  var code = '(encoderA())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['encoderB_status'] = function(block) {  
  var code = '(encoderB())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['reset_encoderA'] = function(block) {  
  var code = 'resetEncoderA();\n';
  return code;
};
Blockly.JavaScript['reset_encoderB'] = function(block) {  
  var code = 'resetEncoderB();\n';
  return code;
};
Blockly.JavaScript['Read_position_TCSensor'] = function(block) {  
  var code = '(readline())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['TCSensor_status'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = `(analog(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['Digital_IN_status'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = `((IN(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['Ultrasonic_Sensor'] = function(block) {
  var dropdown_pin_Trig = block.getFieldValue('pin_Trig');
  var dropdown_pin_Echo = block.getFieldValue('pin_Echo');
  var code = `(readDistance(${dropdown_pin_Trig},${dropdown_pin_Echo}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['TCS_color_status'] = function(block) {
  var dropdown_pin = block.getFieldValue('_color');
  var code = `(Read_Color_TCS(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['NKP_beep'] = function(block) {  
  var code = 'beep();\n';
  return code;
};
Blockly.JavaScript['NKP_beep_on'] = function(block) {  
  var code = 'beep_on();\n';
  return code;
};
Blockly.JavaScript['NKP_beep_off'] = function(block) {  
  var code = 'beep_off();\n';
  return code;
};
Blockly.JavaScript['NKP_beep_delay'] = function(block) {
  var value_delay = Blockly.JavaScript.valueToCode(block, '_delay', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = 'beep(' + value_delay + ');\n';
  return code;
};
Blockly.JavaScript['Set_pin_Tcsensor'] = function(block) {
  var value_x0 = Blockly.JavaScript.valueToCode(block, 'x0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x5 = Blockly.JavaScript.valueToCode(block, 'x5', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = `setSensorPins((const int[]){${value_x0}, ${value_x1}, ${value_x2} , ${value_x3},${value_x4}}, 5);\n`;
  return code;
};

Blockly.JavaScript['TCSensor_pin'] = function(block) {
  var dropdown_ch1 = block.getFieldValue('ch1');
  var dropdown_ch2 = block.getFieldValue('ch2');
  var dropdown_ch3 = block.getFieldValue('ch3');
  var dropdown_ch4 = block.getFieldValue('ch4');
  var dropdown_ch5 = block.getFieldValue('ch5');
  var code = `setSensorPins((const int[]){${dropdown_ch1}, ${dropdown_ch2}, ${dropdown_ch3} , ${dropdown_ch4},${dropdown_ch5}}, 5);\n`;
  return code;
};
Blockly.JavaScript['Set_min_Tcsensor'] = function(block) {
  var value_x0 = Blockly.JavaScript.valueToCode(block, 'x0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x5 = Blockly.JavaScript.valueToCode(block, 'x5', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = `setSensorMin((const uint16_t[]){${value_x0}, ${value_x1}, ${value_x2} , ${value_x3},${value_x4}});\n`;
  return code;
};
Blockly.JavaScript['Set_max_Tcsensor'] = function(block) {
  var value_x0 = Blockly.JavaScript.valueToCode(block, 'x0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x5 = Blockly.JavaScript.valueToCode(block, 'x5', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = `setSensorMax((const uint16_t[]){${value_x0}, ${value_x1}, ${value_x2} , ${value_x3},${value_x4}});\n`;
  return code;
};
Blockly.JavaScript['sw1_press'] = function(block) {  
  var code = 'wait();\n';
  return code;
};
Blockly.JavaScript['Init_IMU'] = function(block) {  
  var code = 'set_IMU();\n';
  return code;
};
Blockly.JavaScript['IMU_status'] = function(block) {
  var dropdown_pin = block.getFieldValue('angle_');
  var code = `(Read_angle(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['Voltage_status'] = function(block) {  
  var code = 'Volt_input();\n';
  return code;
};

  Blockly.JavaScript['Compass_getData'] = function(block) {

  var statements_code = Blockly.JavaScript.statementToCode(block, 'HANDLER');
  var code = `
  #EXTINC#include "QMC5883LCompass.h" #END
  #VARIABLE QMC5883LCompass compass; #END
  #SETUP compass.init(); \n #END
  compass.read();\n${statements_code}`;
  return code;
  };
  
Blockly.JavaScript['Compass_Read'] = function(block) {
  var dropdown_pin = block.getFieldValue('angle_');
  var code = `compass.getAzimuth() `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};





Blockly.JavaScript['IMU_begin'] = function(block) {  

  var code = '#SETUP   display.setTextSize(1); drawString(0, 0, "Wait IMU"); display.display(); initIMU();updateIMU_fine_offset_Yaw(200); #END\n';
  return code;
};
Blockly.JavaScript['IMU_update'] = function(block) {  
  var code = 'mpu6050.update();\n';
  return code;
};
Blockly.JavaScript['IMU_getData_Yaw'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');

  var code = ``;
  if(dropdown_axis == '0'){code += `getYaw()`}
    if(dropdown_axis == '1'){code += `getContinuousYaw()`}
      if(dropdown_axis == '2'){code += `getOffsetYaw()`}
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['IMU_getData'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');

  var code = ``;
  if(dropdown_axis == '0'){code += `getPitch()`}
    if(dropdown_axis == '1'){code += `getRoll()`}
      if(dropdown_axis == '2'){code += `getYaw()`}
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['IMU_TurnPID'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'turnPID('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+');\n';
  return code;
};


Blockly.JavaScript['IMU_set_dataFor_turnDirection'] = function(block) {
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'set_data_for_turnDirection('+value_s4+','+value_s0+','+value_s1+','+value_s2+','+value_s3+');\n';
  return code;
};

Blockly.JavaScript['IMU_TurnByDirection'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');

  var code = ``;
  if(dropdown_direction == '0'){code += `turn_180();`}
  if(dropdown_direction == '1'){code += `turn_270();`}
  if(dropdown_direction == '2'){code += `turn_360();`}
  if(dropdown_direction == '3'){code += `turn_90();`}
  if(dropdown_direction == '4'){code += `turn_45();`}
  if(dropdown_direction == '5'){code += `turn_135();`}
  if(dropdown_direction == '6'){code += `turn_225();`}
  if(dropdown_direction == '7'){code += `turn_315();`}

  return code;
};

Blockly.JavaScript['IMU_TurnByAngle'] = function(block) {
  var dropdown_angle = block.getFieldValue('angle');

  var code = ``;
  if(dropdown_angle == '0'){code += `turnByAngle(90);`}
  if(dropdown_angle == '1'){code += `turnByAngle(-90);`}
  if(dropdown_angle == '2'){code += `turnByAngle(180);`}
  if(dropdown_angle == '3'){code += `turnByAngle(-180);`}
  if(dropdown_angle == '4'){code += `turnByAngle(45);`}
  if(dropdown_angle == '5'){code += `turnByAngle(-45);`}
  return code;
};

Blockly.JavaScript['IMU_moveStraightPID'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var checkbox_newline = (block.getFieldValue('Slow') == 'TRUE')? '1' : '0';

  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'moveStraightPID('+dropdown_dir+','+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+checkbox_newline+');\n';
  return code;
};
Blockly.JavaScript['IMU_moveStraightDirection'] = function(block) {
  var dropdown_direction = block.getFieldValue('dir');
  var dropdown_angle = block.getFieldValue('angle');
  
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var checkbox_newline = (block.getFieldValue('Slow') == 'TRUE')? '1' : '0';

  var code = ``;
  code += 'MoveStraightDirection('+dropdown_direction+','+dropdown_angle+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+checkbox_newline+');\n';
  return code;
};


}
