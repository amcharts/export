/**
 * PDF-specfic configuration
 */
AmCharts.exportPDF = {
  "format": "PDF",
  "content": [ "Saved from:", window.location.href, {
    "image": "reference",
    "fit": [ 523.28, 769.89 ] // fit image to A4
  } ]
};

/**
 * Print-specfic configuration
 */
AmCharts.exportPrint = {
  "format": "PRINT",
  "label": "Print"
};

/**
 * Define main universal config
  */
AmCharts.exportCFG = {
  "enabled": true,
  "libs": {
    "path": "../libs/"
  },
  "menu": [ {
    "class": "export-main",
    "label": "Export",
    "menu": [ {
      "label": "Download as ...",
      "menu": [ "PNG", "JPG", "SVG", AmCharts.exportPDF ]
    }, {
      "label": "Save data ...",
      "menu": [ "CSV", "XLSX", "JSON" ]
    }, {
      "label": "Annotate",
      "action": "draw",
      "menu": [ "UNDO", "REDO", "CANCEL", {
        "label": "Save as ...",
        "menu": [ "PNG", "JPG", "SVG", AmCharts.exportPDF ]
      }, AmCharts.exportPrint ]
    }, AmCharts.exportPrint ]
  } ]
};