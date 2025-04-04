
//Block from IKB1 


module.exports = function(Blockly) {

Blockly.JavaScript['NKP_control_voltage'] = function(block) {
  var value_volt = Blockly.JavaScript.valueToCode(block, 'volt', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'control_voltage = (' + value_volt + ');\n';
  return code;
};

Blockly.JavaScript['NKP_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + '' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['NKP_V2motor2WD'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  var code = '';
  if(dropdown_dir == '1'){code += 'motor_control(0,'+ value_speed +');\tmotor_control(2,'+ value_speed +');';}
  if(dropdown_dir == '2'){code += 'motor_control(1,'+ value_speed +');\tmotor_control(3,'+ value_speed +');';}
  if(dropdown_dir == '3'){code += 'motor_control(0,0);\tmotor_control(2,'+ value_speed +');';}
  if(dropdown_dir == '4'){code += 'motor_control(0,'+ value_speed +');\tmotor_control(2,0);';}
  if(dropdown_dir == '5'){code += 'motor_control(1,'+ value_speed +');\tmotor_control(2,'+ value_speed +');';}
  if(dropdown_dir == '6'){code += 'motor_control(0,'+ value_speed +');\tmotor_control(3,'+ value_speed +');';}
  return code;
};
Blockly.JavaScript['NKP_V2motor4WD'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  var code = '';
  if(dropdown_dir == '1'){code += 'motor_control(15,'+ value_speed +');\tmotor_control(17,'+ value_speed +');';}
  if(dropdown_dir == '2'){code += 'motor_control(16,'+ value_speed +');\tmotor_control(18,'+ value_speed +');';}
  if(dropdown_dir == '3'){code += 'motor_control(15,0);\tmotor_control(17,'+ value_speed +');';}
  if(dropdown_dir == '4'){code += 'motor_control(15,'+ value_speed +');\tmotor_control(17,0);';}
  if(dropdown_dir == '5'){code += 'motor_control(16,'+ value_speed +');\tmotor_control(17,'+ value_speed +');';}
  if(dropdown_dir == '6'){code += 'motor_control(15,'+ value_speed +');\tmotor_control(18,'+ value_speed +');';}
  return code;
};
Blockly.JavaScript['NKP_V2motor_Mecanum'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  var code = '';
  if(dropdown_dir == '1'){code += 'motor_control(15,'+ value_speed +');\tmotor_control(17,'+ value_speed +');';}
  if(dropdown_dir == '2'){code += 'motor_control(16,'+ value_speed +');\tmotor_control(18,'+ value_speed +');';}
  if(dropdown_dir == '3'){code += 'motor_control(15,0);\tmotor_control(17,'+ value_speed +');';}
  if(dropdown_dir == '4'){code += 'motor_control(15,'+ value_speed +');\tmotor_control(17,0);';}
  if(dropdown_dir == '5'){code += 'motor_control(16,'+ value_speed +');\tmotor_control(17,'+ value_speed +');';}
  if(dropdown_dir == '6'){code += 'motor_control(15,'+ value_speed +');\tmotor_control(18,'+ value_speed +');';}
  if(dropdown_dir == '7'){code += 'motor_control(20,'+ value_speed +');\tmotor_control(21,'+ value_speed +');';}
  if(dropdown_dir == '8'){code += 'motor_control(19,'+ value_speed +');\tmotor_control(22,'+ value_speed +');';}
  if(dropdown_dir == '9'){code += 'motor_control(19,0);\tmotor_control(21,'+ value_speed +');';}
  if(dropdown_dir == '10'){code += 'motor_control(19,'+ value_speed +');\tmotor_control(21,0);';}
  return code;
};
Blockly.JavaScript['NKP_servo'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo(' + dropdown_ch + ', ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['NKP_servo2'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo2(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['NKP_servo_speed_control'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_speed = block.getFieldValue('speed');
  var value_servo_degree = Blockly.JavaScript.valueToCode(block, 'servo_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_traget_degree = Blockly.JavaScript.valueToCode(block, 'traget_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  
  var code = 'control_servo(' + dropdown_ch + ', ' + value_servo_degree + ', ' + value_traget_degree + ', ' + dropdown_speed + ');\n';
  return code;
};


Blockly.JavaScript['NKP_motor_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(0,'+value_speed+');';
  code += 'motor_control(2,'+value_speed+');';
  return code;
};

Blockly.JavaScript['NKP_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(1,'+value_speed+');';
  code += 'motor_control(3,'+value_speed+');';
  return code;
};

Blockly.JavaScript['NKP_motor_turn_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(1,0);';
  code += 'motor_control(2,'+value_speed+');';
  return code;
};

Blockly.JavaScript['NKP_motor_turn_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(0,'+value_speed+');';
  code += 'motor_control(2,0);';
  return code;
};

Blockly.JavaScript['NKP_motor_spin_left'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(1,'+value_speed+');';
  code += 'motor_control(2,'+value_speed+');';
  return code;
};

Blockly.JavaScript['NKP_motor_spin_right'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(0,'+value_speed+');';
  code += 'motor_control(3,'+value_speed+');';
  return code;
};

Blockly.JavaScript['NKP_motor_stop'] = function(block) {  
  var code = 'ao();\n';
  //code += 'errors = 0;integral =0 ;derivative =0;output =0;\n';
  return code;
};

Blockly.JavaScript['NKP_motor_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = 'motor('+dropdown_ch+',0);';
  return code;
};

Blockly.JavaScript['NKP_motor_forward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(0,'+value_speed1+');';
  code += 'motor_control(2,'+value_speed2+');';
  return code;
};
Blockly.JavaScript['NKP_motor_forward2_4WD'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(15,'+value_speed1+');';
  code += 'motor_control(17,'+value_speed2+');';
  return code;
};

Blockly.JavaScript['NKP_motor_backward2'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(1,'+value_speed1+');';
  code += 'motor_control(3,'+value_speed2+');';
  return code;
};
Blockly.JavaScript['NKP_motor_backward2_4WD'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor_control(16,'+value_speed1+');';
  code += 'motor_control(18,'+value_speed2+');';
  return code;
};


}
