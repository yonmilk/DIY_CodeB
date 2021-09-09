Blockly.defineBlocksWithJsonArray(
    [
      {
        "type": "short_math",
        "message0": "%1 %2 = %3 %4",
        "args0": [
            {
                "type": "input_value",
                "name": "a",
                "check": "Number"
            },
            {
                "type": "field_dropdown",
                "name": "select",
                "options": [
                    [
                        "+",
                        "+"
                    ],
                    [
                        "*",
                        "*"
                    ],
                    [
                        "-",
                        "-"
                    ],
                    [
                        "/",
                        "/"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "b",
                "check": "Number"
            }],
        "inputsInline": true,
        "nextStatement":null,
        "previousStatement":null,
        "colour": 260,
        "tooltip": "Short version of arithmetic calculations",
        "helpUrl": ""
       },
    ]
);