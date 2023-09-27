module.exports = function(Blockly){
  'use strict';

  Blockly.Blocks['button_1_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
          .appendField("SW1 Status:");
      this.setInputsInline(true);
      this.setOutput(true, ['Number','Boolean']);
      this.setColour(90);
   this.setTooltip("get SW1 pressed or not");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['Knob_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
          .appendField("read Knob_status");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("read Knob_status");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['sw1_press'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Wait SW1 press");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['encoderA_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Read EncoderA");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("read pos EncoderA Pin 26");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['encoderB_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Read EncoderB");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("read pos EncoderB Pin 27");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['reset_encoderA'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Reset_EncoderA");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(130);
      this.setTooltip("reset pos EncoderA Pin 26");
   	this.setHelpUrl("");
    }
  };
  Blockly.Blocks['reset_encoderB'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Reset_EncoderB");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(130);
      this.setTooltip("reset pos EncoderB Pin 27");
   	this.setHelpUrl("");
    }
  };
  Blockly.Blocks['Init_IMU'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Init IMU");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['IMU_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("GetAngle at:")
          .appendField(new Blockly.FieldDropdown([["X","0"],["Y","1"], ["Z","2"]]), "angle_");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("GetAngle at:");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['Voltage_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Voltage");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("read Voltage from Battery");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['Read_position_TCSensor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("read Position of line");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("read Position of line");
   this.setHelpUrl("");
    }
  };
  /*Blockly.Blocks['TCSensor_status'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("TCSensor pin")
        .appendField(new Blockly.FieldDropdown([["A0","A0"],["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"], ["A8","A8"], ["A9","A9"]]), "_pin")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
      this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
    }
  };*/
  Blockly.Blocks['TCSensor_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Light sensor pin")
          .appendField(new Blockly.FieldDropdown([["A1","1"], ["A2","2"], ["A3","3"], ["A4","4"]
                                                , ["A5","5"], ["A6","6"], ["A7","7"], ["A8","8"], ["A9","9"]
                                                , ["A10","10"], ["A11","11"], ["A12","12"], ["A13","13"], ["A14","14"]
                                                , ["A15","15"], ["A16","16"], ["A17","17"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("read input pin");
   this.setHelpUrl("");
    }
  };
    Blockly.Blocks['Ultrasonic_Sensor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(" Read Ultrasonic (cm) Echo:")
          .appendField(new Blockly.FieldDropdown([ ["A2(32)","32"], ["A4(25)","25"], ["A5(33)","33"], ["A6(27)","27"], ["A7(26)","26"], ["A8(13)","13"], ["A9(14)","14"]]), "pin_Trig");
      this.appendDummyInput()
          .appendField("Trig:")
          .appendField(new Blockly.FieldDropdown([ ["A2(32)","32"], ["A4(25)","25"], ["A5(33)","33"], ["A6(27)","27"], ["A7(26)","26"], ["A8(13)","13"], ["A9(14)","14"]]), "pin_Echo");
      
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("read input pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['TCS_color_status'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("TCS_color pin")
          .appendField(new Blockly.FieldDropdown([["R","0"],["G","1"], ["B","2"]]), "_color");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("color");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['TCSensor_pin'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("TCSensor pin Ch1")
        .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch1");
      this.appendDummyInput()
        .appendField(" Ch2")
        .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch2");
      this.appendDummyInput()
        .appendField(" Ch3")
        .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch3");
      this.appendDummyInput()
        .appendField(" Ch4")
        .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch4");
      this.appendDummyInput()
        .appendField(" Ch5")
        .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "ch5");   
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
    }
  };

  Blockly.Blocks['NKP_beep'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Buzzer beep");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
   this.setTooltip("Buzzer beep");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['NKP_beep_delay'] = {
    init: function() {
      this.appendValueInput("_delay")
        .setCheck("Number")
        .appendField("Buzzer Ond");
      this.appendDummyInput()
        .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['NKP_beep_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Buzzer on");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
   this.setTooltip("Buzzer beep");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['NKP_beep_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Buzzer off");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
   this.setTooltip("Buzzer beep");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['Set_pin_Tcsensor'] = {
    init: function() {
      this.appendValueInput("x0")
          .setCheck("Number")
          .appendField(" Set_pin_Tcsensor Pin A");
      this.appendValueInput("x1")
          .setCheck("Number")
          .appendField("Pin B");
      this.appendValueInput("x2")
          .setCheck("Number")
          .appendField("Pin C");
      this.appendValueInput("x3")
          .setCheck("Number")
          .appendField("Pin D");
      this.appendValueInput("x4")
          .setCheck("Number")
          .appendField("Pin E");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Set_pin_Tcsensor");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['Set_min_Tcsensor'] = {
    init: function() {
      this.appendValueInput("x0")
          .setCheck("Number")
          .appendField(" Set min value Pin A");
      this.appendValueInput("x1")
          .setCheck("Number")
          .appendField("Pin B");
      this.appendValueInput("x2")
          .setCheck("Number")
          .appendField("Pin C");
      this.appendValueInput("x3")
          .setCheck("Number")
          .appendField("Pin D");
      this.appendValueInput("x4")
          .setCheck("Number")
          .appendField("Pin E");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Set_min_Tcsensor");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['Set_max_Tcsensor'] = {
    init: function() {
      this.appendValueInput("x0")
          .setCheck("Number")
          .appendField(" Set max value Pin A");
      this.appendValueInput("x1")
          .setCheck("Number")
          .appendField("Pin B");
      this.appendValueInput("x2")
          .setCheck("Number")
          .appendField("Pin C");
      this.appendValueInput("x3")
          .setCheck("Number")
          .appendField("Pin D");
      this.appendValueInput("x4")
          .setCheck("Number")
          .appendField("Pin E");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Set_max_Tcsensor");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks["Compass_getData"] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Compass getData QMC5883L');
    this.appendStatementInput('HANDLER');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
    }
  };
  Blockly.Blocks['Compass_Read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Compass");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour(165);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


}