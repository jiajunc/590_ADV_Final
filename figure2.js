var yourVlSpec2 = {
    "width": 800,
    "height":600,
    "data": {
      "url": "./adv matplot/human-development/export.csv"
    },
    "mark": "point",
    "transform": [
      {
        "fold": ["life", "expected_education", "gni"],
        "as": ["var_x", "val_x"]
      },
          {
        "fold": ["life", "expected_education", "gni"],
        "as": ["var_y", "val_y"]
      },
      {
        "filter": {
          "selection": "x_axis"
        }
      }, {
        "filter": {
        "selection": "y_axis"
        }
      }
    ],
    "selection": {
      "x_axis": {
        "type": "single",
        "fields": [
          "var_x"
        ],
        "bind": {
          "input": "select",
          "options": [
            "life", "expected_education", "gni"
          ]
        }
      },
      "y_axis": {
        "type": "single",
        "fields": [
          "var_y"
        ],
        "bind": {
          "input": "select",
          "options": [
            "life", "expected_education", "gni"
          ]
        }
      }
    },
    "encoding": {
      "x": {
        "field": "val_x",
        "type": "quantitative"
      },
      "y": {
        "field": "val_y",
        "type": "quantitative"
      },
      "size": {"value": 200}
    }
};

var embedded = vegaEmbed('#vis2', yourVlSpec2);
