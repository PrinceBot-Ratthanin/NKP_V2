module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['button_1_status'] = function(block) {  
  var code = '(digitalRead(15))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Knob_status'] = function(block) {  
  var code = '(_Knob())';
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
  var code = 'voltage_sensor();\n';
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
}
