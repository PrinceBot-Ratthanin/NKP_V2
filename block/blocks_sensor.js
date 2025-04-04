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
          .appendField("Wait Switch OK press");
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
  Blockly.Blocks['IN_status'] = {
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
  // Blockly.Blocks['IN_status'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("Read Digital INPUT")
  //         .appendField(new Blockly.FieldDropdown([["A3","1"], ["A4","2"], ["A5","3"], ["26","26"], ["27","27"], ["14","14"], ["13","13"]]), "pin");
  //     this.setInputsInline(true);
  //     this.setOutput(true, "Number");
  //     this.setColour(90);
  //  this.setTooltip("read input pin");
  //  this.setHelpUrl("");
  //   }
  // };
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

  Blockly.Blocks['IMU_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IMU begin and calcGyroOffsets");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("IMU Init");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['IMU_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Gyro update");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("IMU update");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['IMU_getData_Yaw'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("getYawData")
          .appendField(new Blockly.FieldDropdown([["getCurrentYaw","0"],["getContinuousYaw","1"], ["getOffsetYaw","2"]]), "axis");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("Get Data from IMU");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks['IMU_getData'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("getData")
          .appendField(new Blockly.FieldDropdown([["getPitch","0"],["getRoll","1"], ["getYaw","2"]]), "axis");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("Get Data from IMU");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks['IMU_TurnPID'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TurnPID to angle=");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("Min speed=");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("Max speed=");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("KP=");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("KD=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};
Blockly.Blocks['IMU_TurnByDirection'] = {
  init: function() {
    this.appendDummyInput()
          .appendField("Turn to Direction=")
          .appendField(new Blockly.FieldDropdown([["⬆ turn_180","0"],["➡ turn_270","1"], ["⬇ turn_390","2"], ["⬅ turn_90","3"],
                                                  ["⬋ turn_45","4"],["⬉ turn_135","5"], ["⬈ turn_225","6"], ["⬊ turn_315","7"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("Gyro update");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['IMU_TurnByAngle'] = {
  init: function() {
    this.appendDummyInput()
          .appendField("Turn By angle =")
          .appendField(new Blockly.FieldDropdown([["90","0"],["-90","1"], ["180","2"], ["-180","3"], ["45","4"], ["-45","5"]]), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['IMU_moveStraightPID'] = {
  init: function() {
    
    this.appendDummyInput()
          .appendField("Move ")
          .appendField(new Blockly.FieldDropdown([["⬆ Forward","0"],["⬇ Backward","1"]]), "dir");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("Straight At Angle=");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("speed=");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("time=");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("KP=");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("KI=");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("KD=");
    this.appendDummyInput()
        .appendField("Slow before Stop")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Slow");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};
Blockly.Blocks['IMU_set_dataFor_turnDirection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Data for TurnDirection=");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("Angle Error = ");
    this.appendValueInput("S0")
      .setCheck("Number")
      .appendField("speed Min=");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("Max=");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("KP=");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("KD=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};

Blockly.Blocks['IMU_moveStraightDirection'] = {
  init: function() {
    
    this.appendDummyInput()
          .appendField("Move ")
          .appendField(new Blockly.FieldDropdown([["⬆ Forward","0"],["⬇ Backward","1"]]), "dir");
    this.appendDummyInput()
          .appendField("At ")
          .appendField(new Blockly.FieldDropdown([["⬆ North","0"],["➡ East","1"], ["⬇ South","2"], ["⬅ West","3"],
                                                   ["⬋ SW","4"],["⬉ NW","5"], ["⬈ NE","6"], ["⬊ SE","7"]]), "angle");
    this.appendValueInput("S1")
      .setCheck("Number")
      .appendField("speed=");
    this.appendValueInput("S2")
      .setCheck("Number")
      .appendField("time=");
    this.appendValueInput("S3")
      .setCheck("Number")
      .appendField("KP=");
    this.appendValueInput("S4")
      .setCheck("Number")
      .appendField("KI=");
    this.appendValueInput("S5")
      .setCheck("Number")
      .appendField("KD=");
    this.appendDummyInput()
        .appendField("Slow before Stop")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Slow");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("");
  }
};

}