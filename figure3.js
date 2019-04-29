var yourVlSpec3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "title": "Relation between education and life expectancy",
    "data": {
      "url": "./export.csv"
    },
    "vconcat": [
      {
        "encoding": {
          "color": {
            "condition": {
              "title": "Continent",
              "field": "continent",
              "scale": {
                "domain": ["Asia", "Americas", "Africa", "Oceania", "Europe"],
                "range": ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
              },
              "selection": "brush",
              "type": "nominal"
            },
            "value": "lightgray"
          },
          "size": {
            "title": "Population",
            "field": "population",
            "scale": {"domain": [1000000, 1000000000]},
            "type": "quantitative"
          },
          "x": {
            "axis": {"title": "Mean Years of Education"},
            "field": "expected_education",
            "scale": {"domain": [6, 20]},
            "type": "quantitative"
          },
          "y": {
            "axis": {"title": "Life Expectancy"},
            "field": "life",
            "scale": {"domain": [40, 100]},
            "type": "quantitative"
          }
        },
        "width": 1000,
        "height": 1000,
        "mark": "point",
        "selection": {"brush": {"encodings": ["x"], "type": "interval"}},
        "transform": [
            {"filter": {"selection": "click"}}
        ]
      },
      {
        "encoding": {
          "color": {
            "condition": {
              "field": "continent",
              "scale": {
                "domain": ["Asia", "Americas", "Africa", "Oceania", "Europe"],
                "range": ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
              },
              "selection": "click",
              "type": "nominal"
            },
            "value": "lightgray"
          },
          "x": {"aggregate": "count", "type": "quantitative"},
          "y": {"title": "Continent", "field": "continent", "type": "nominal"}
        },
        "width": 1000,
        "mark": "bar",
        "selection": {"click": {"encodings": ["color"], "type": "multi"}},
        "transform": [{"filter": {"selection": "brush"}}]
      }
    ]
};

var embedded = vegaEmbed('#vis3', yourVlSpec3);