var yourVlSpec2 = {
    "width": 800,
    "height":600,
    "data": {
      "url": "./adv matplot/human-development/export.csv"
    },
    "mark": "point",
    "transform": [
      {
        "fold": ["Life Expectancy at Birth", "Mean Years of Education", "Gross National Income (GNI) per Capita"],
        "as": ["var_x", "val_x"]
      },
          {
        "fold": ["Life Expectancy at Birth", "Mean Years of Education", "Gross National Income (GNI) per Capita"],
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
            "Life Expectancy at Birth", "Mean Years of Education", "Gross National Income (GNI) per Capita"
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
            "Life Expectancy at Birth", "Mean Years of Education", "Gross National Income (GNI) per Capita"
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
