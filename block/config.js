const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
    base_blocks : [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
        {
            name : 'Display',
            index: 1,
            color : '230',
            icon : '/static/icons/icons8_picture_96px_1.png',
            blocks : [
                /*{
                    xml : `<block type="variables_set">
                                <field name="VAR">img1</field>
                                <value name="VALUE">
                                    <block type="i2c128x64_create_image" inline="false"></block>
                                </value>
                            </block>`
                },{
                    xml : 
                    `<block type="i2c128x64_display_image">
                        <value name="img">
                            <block type="variables_get">
                                <field name="VAR">img1</field>
                            </block>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
                },*/
                'i2c128x64_display_clear',
                'i2c128x64_display_display',
                { 
                    xml : 
                    `<block type="i2c128x64_display_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'basic_string', 
                'text_join',
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_line">
                        <value name="x0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y0">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="x1">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="y1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_rect">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_circle">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="r">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_progress_bar">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                        <value name="width">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="height">
                            <shadow type="math_number">
                                <field name="NUM">30</field>
                            </shadow>
                        </value>
                        <value name="progress">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="i2c128x64_display_draw_pixel">
                        <value name="x">
                            <shadow type="math_number">
                                <field name="NUM">64</field>
                            </shadow>
                        </value>
                        <value name="y">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>    
                    </block>`
                },
                {
                    xml : 
                    `<block type="i2c128x64_display_string_width">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'i2c128x64_display_width',
                'i2c128x64_display_height',
                'basic_string'
            ]
        },
        {
            name : 'Sensor',
            index: 2,
            color : '230',
            icon : '/static/icons/icons8_thermometer_96px.png',
            blocks : [
                'sw1_press',
                'button_1_status',
                //'Knob_status',
                'TCSensor_status',
                'Ultrasonic_Sensor',
                'NKP_beep',
                //'Compass_getData',
                //'Compass_Read',
                'encoderA_status',
                'encoderB_status',
                'reset_encoderA',
                'reset_encoderB',
                //'Voltage_status',
                {
                    xml : 
                    `<block type="TCS_color_status">
                        <value name="_color">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'Init_IMU',
                {
                    xml : 
                    `<block type="IMU_status">
                        <value name="angle_">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_beep_delay">
                        <value name="_delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'NKP_beep_on',
                'NKP_beep_off',
                
            ]
        },
        {
            name : 'GPIO',
            index: 3,
            color : '230',
            icon : '/static/icons/icons8_electronics_96px.png',
            blocks : [
                'io_board_read',
                'io_board_write',
                {
                    xml : 
                    `<block type="io_board_write_value">
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_setpin">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_digital_read">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_digital_write">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">33</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },                
                {
                    xml : 
                    `<block type="io_analog_read">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml :
                        `<block type="io_analog_write">
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">128</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_pwm_write">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">128</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_pulse_in">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'io_shift_in',
                {
                    xml : 
                    `<block type="io_shift_out">
                        <value name="data">
                            <shadow type="math_number">
                                <field name="NUM">127</field>
                            </shadow>
                        </value>
                    </block>`
                }
            ]
        },        
        {
            name : 'Time',
            index: 4,
            color : '230',
            icon : '/static/icons/icons8_Story_Time_96px.png',
            blocks : [
                {
                    xml : 
                    `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'time_sync',
                'time_get_year',
                'time_get_month',
                'time_get_day',
                'time_get_day_of_week',
                'time_get_hour',
                'time_get_minute',
                'time_get_second',
                'time_millis',
                'time_micros'
            ]
        },        
        {
            name : 'Motor',
            index: 5,
            color : '230',
            //icon: "/static/icons/icons8_workflow_128px.png",
            icon: `file:///${dirIcon}/static/motor.png`,
            blocks : [

                
                { 
                    xml : 
                    `<block type="NKP_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'NKP_motor_stop',
                {
                    xml : 
                    `<block type="NKP_motor_stop_ch">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_V2motor2WD">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_V2motor4WD">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_V2motor_Mecanum">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_forward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_backward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_spin_left">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_spin_right">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_turn_left">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="NKP_motor_turn_right">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="NKP_motor">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="NKP_motor_forward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                { 
                    xml : 
                    `<block type="NKP_motor_backward2">
                        <value name="speed1">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed2">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                

        
                

                ]
        },
        {
            name : 'PID',
            index: 6,
            color : '230',
            //icon: "/static/icons/icons8_workflow_128px.png",
            icon: `file:///${dirIcon}/static/PID.png`,
            blocks : [
                {
                xml: `<sep gap="32"></sep><label text="ขั้นตอนการใช้งาน" web-class="headline"></label>`
              },
              {
                xml: `<sep gap="25"></sep><label text="1.ตั้งค่าการเชื่อมต่อเซ็นเซอร์ เริ่มจากซ้ายไปขวา" web-class="headline"></label>`
              },
              {
                xml: `<sep gap="25"></sep><label text="2.ตั้งค่า Min = ค่าที่อ่านจากพื้นสีดำ" web-class="headline"></label>`
              },
              {
                xml: `<sep gap="25"></sep><label text="3.ตั้งค่า Max = ค่าที่อ่านจากพื้นสีขาว" web-class="headline"></label>`
              },
                {xml:`<block type="NKP_ONE_PID_setPin"></block>`},
                'NKP_ONE_PID_setline_color_front',
	          
	          {xml:
	                  `<block type="NKP_ONE_PID_setMin">
	                        <value name="S0">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S1">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S2">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S3">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S4">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S5">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S6">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S7">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        
	                    </block>`
	          },
	          {
	              xml:
	                  `<block type="NKP_ONE_PID_setMax">
	                        <value name="S0">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S1">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S2">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S3">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S4">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S5">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S6">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S7">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        
	                    </block>`
	          },
              {
                  xml:
                      `<block type="PID_setSensitive">
                            <value name="Sensitive">
                                <shadow type="math_number">
                                    <field name="NUM">20</field>
                                </shadow>
                            </value>
                        </block>`
              },
	          {
	              xml:
	                  `<block type="NKP_ONE_Run_PID">
	                        <value name="speed">
	                            <shadow type="math_number">
	                                <field name="NUM">50</field>
	                            </shadow>
	                        </value>
	                        <value name="KP">
	                            <shadow type="math_number">
	                                <field name="NUM">1</field>
	                            </shadow>
	                        </value>
	                        <value name="KD">
	                            <shadow type="math_number">
	                                <field name="NUM">0</field>
	                            </shadow>
	                        </value>
	                    </block>`
	          },
              "PID_readLine",
              // {xml:`<block type="Read_Min_Front_Sensor"></block>`},
               {xml:
                      `<block type="set_calibrate_Front_sensor">
                            <value name="Round">
                                <shadow type="math_number">
                                    <field name="NUM">100</field>
                                </shadow>
                            </value>
                            
                        </block>`
              },
              'Read_Status_Front_Sensor',
              "Read_Ref_Front_Sensor",
	          {xml:`<block type="NKP_ONE_PID_setPin_B"></block>`},
              'NKP_ONE_PID_setline_color_Black',
	          
	          {xml:
	                  `<block type="NKP_ONE_PID_setMin_B">
	                        <value name="S0">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S1">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S2">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S3">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S4">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S5">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S6">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        <value name="S7">
	                            <shadow type="math_number">
	                                <field name="NUM">100</field>
	                            </shadow>
	                        </value>
	                        
	                    </block>`
	          },
	          {
	              xml:
	                  `<block type="NKP_ONE_PID_setMax_B">
	                        <value name="S0">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S1">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S2">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S3">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S4">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S5">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S6">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        <value name="S7">
	                            <shadow type="math_number">
	                                <field name="NUM">4000</field>
	                            </shadow>
	                        </value>
	                        
	                    </block>`
	          },
              {
                  xml:
                      `<block type="PID_setSensitive_B">
                            <value name="Sensitive">
                                <shadow type="math_number">
                                    <field name="NUM">20</field>
                                </shadow>
                            </value>
                        </block>`
              },
              "PID_readLine_B",
              'Read_Status_Black_Sensor',
	          {
	              xml:
	                  `<block type="NKP_ONE_Run_PID_B">
	                        <value name="speed">
	                            <shadow type="math_number">
	                                <field name="NUM">50</field>
	                            </shadow>
	                        </value>
	                        <value name="KP">
	                            <shadow type="math_number">
	                                <field name="NUM">1</field>
	                            </shadow>
	                        </value>
	                        <value name="KD">
	                            <shadow type="math_number">
	                                <field name="NUM">0</field>
	                            </shadow>
	                        </value>
	                    </block>`
	          },
              
              


        
                

                ]
        },
        {
            name : 'Variables',
            index: 7,
            color : '230',
            icon : '/static/icons/icons8_variable_96px.png',
            custom : 'VARIABLE'
        },
        {
            name : 'Math',
            index: 8,
            color : '230',
            icon : '/static/icons/calculator.png',
            blocks : [
                'math_number',
                {
                    xml : 
                    `<block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_variables_set">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'math_variables_get',
                {
                    xml : 
                    `<block type="math_pow">
                        <value name="NUM1">
                            <shadow type="math_number">
                                <field name="NUM">2</field>
                            </shadow>
                        </value>
                        <value name="NUM2">
                            <shadow type="math_number">
                                <field name="NUM">3</field>
                            </shadow>
                        </value>
                    </block>`
                },                
                /*'math_sqrt',*/
                {
                    xml : 
                    `<block type="math_single">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">9</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_trig">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_round">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">1.2</field>
                            </shadow>
                        </value>
                    </block>`
                },
                /*'math_min',
                'math_max',
                'math_map',*/
                'math_random_int',
                {
                    xml : 
                    `<block type="math_number_property">
                        <value name="NUMBER_TO_CHECK">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>`
                }
            ]
        },
        {
            name : 'Logic',
            index: 9,
            color : '230',
            icon : '/static/icons/icons8_serial_tasks_96px.png',
            blocks : [
                'controls_if',
                {
                    xml : '<block type="controls_if"><mutation else="1"></mutation></block>'
                },
                'logic_compare',
                'logic_operation',
                'logic_negate',
                'logic_boolean',
            ]
        },
        {
            name : 'Loops',
            index: 10,
            color : '230',
            icon : '/static/icons/icons8_repeat_96px.png',
            blocks : [
                'basic_forever',
                'controls_whileUntil',
                {
                    xml : 
                    `<block type="controls_for">
                        <value name="FROM">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="TO">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="BY">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'controls_flow_statements',
            ]
        },
        {
            name : 'Advanced',
            index: 11,
            color : '195',
            icon : '/static/icons/icons8_hacker_128px.png',
            blocks : [
                {
                    type : 'category',
                    name : 'Functions',
                    icon : '/static/icons/icons8_module_96px.png',
                    custom : 'PROCEDURE'
                },
                {
                    type : 'category',
                    name : 'Custom',
                    icon : '/static/icons/icons8_bluetooth_2_96px.png',
                    blocks : [
                        { xml : 
                            `<block type="EditTextCode">
                                <value name="Text">
                                    <shadow type="basic_string">
                                        <field name="VALUE">int Prince = 1;</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="BlockComment">
                                <value name="Text">
                                    <shadow type="basic_string">
                                        <field name="VALUE">comment here </field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                    ]
                },
                /*{
                    type : 'category',
                    name : 'Tasks',
                    icon : '/static/icons/icons8_exercise_96px.png',
                    blocks : [
                        'create task',
                        'start task',
                        'stop task'
                    ]
                },*/
                /*{
                    type : 'category',
                    name : 'Arrays',
                    icon : '/static/icons/icons8_stack_96px.png',
                    blocks : [
                        'lists_create_empty',
                        'lists_repeat',
                        'lists_reverse',
                        'lists_isEmpty',
                        'lists_length',
                        'lists_create_with',
                        'lists_indexOf',
                        'lists_getIndex',
                        'lists_setIndex',
                        'lists_getSublist',
                        'lists_sort',
                        'lists_split',
                    ]
                },*/
                {
                    type : 'category',
                    name : 'Text',
                    icon : '/static/icons/icons8_text_color_96px.png',
                    blocks : [
                        'basic_string',
                                          
                        { xml : 
                            `<block type="text_length">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        'text_join',
                          

                        { xml : 
                            `<block type="text_append">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                                `<block type="text_isEmpty">
                                    <value name="VALUE">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>                                    
                                </block>`
                        },
                        { xml : 
                            `<block type="text_indexOf">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_charAt">
                                <value name="VALUE">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_getSubstring">
                                <value name="STRING">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_changeCase">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_trim">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        { xml : 
                            `<block type="text_replace">
                                <value name="TEXT">
                                    <shadow type="basic_string">
                                        <field name="VALUE">Hello world!</field>
                                    </shadow>
                                </value>                                    
                            </block>`
                        },
                        //'text_compare',
                        //'text_parse_int'
                    ]
                },
                {
                    type : 'category',
                    name : 'WiFi',
                    icon : '/static/icons/icons8_wifi_router_96px.png',
                    blocks : [
                        'wifi_connect',    
                        'wifi_ap',
                        /*{
                            xml : 
                                `<block type="wifi_http_get">
                                    <value name="url">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        {
                            xml : 
                                `<block type="wifi_http_post">
                                    <value name="url">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                    <value name="data">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },*/                   
                        'wifi_start_server',
                        'wifi_server_on',
                        {
                            xml : 
                                `<block type="wifi_server_send">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        
                        'wifi_get_ip_addr',
                        'wifi_get_ap_ip_addr',
                        'wifi_get_arg'
                    ]
                },
                {
                    type : 'category',
                    name : 'Bluetooth',
                    icon : '/static/icons/icons8_bluetooth_2_96px.png',
                    blocks : [
                        'bt_start',
                        {
                            xml : 
                                `<block type="bt_send_string">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        'bt_on_receive',
                        'bt_read_data',
                        'bt_read_line'
                    ]
                },
                {
                    type : 'category',
                    name : 'Serial',
                    icon : '/static/icons/SVG/13.svg',
                    blocks : [
                        'serial_usb_init',
                        'serial_hardware_init',
                        'serial_available',
                        {
                            xml : 
                                `<block type="serial_write_data">
                                    <value name="text">
                                        <shadow type="basic_string">
                                            <field name="VALUE">Hello world!</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                        'serial_write_newline',                        
                        'serial_read_line',
                        'serial_read_until',
                        'basic_string'
                    ]
                }
            ]
        }
    ]
}