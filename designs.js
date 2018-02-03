function makeGrid() {

    //Get nb of rows and cols input
    //we use # because of the id="input_height"
    var rows = $("#input_height").val();
    var cols = $("#input_width").val();
  
    //Get table
    var table = $("#pixel_canvas");
  
    //Reset to empty table --- in case one already created
    table.children().remove();
  
    //Create rows
    for (var i = 0; i < rows; i++) {
      table.append("<tr></tr>");
      //Create cols
      for (var j = 0; j < cols; j++) {
        table.children().last().append("<td></td>");
      }
    }
  
    //Listen for cell clicks
    table.on("click", "td", function() {
      //Get color from color picker
      var color = $('#colorPicker').val();
      //Apply color to cell
      $(this).attr("bgcolor", color);
    });
      // color = $("input[class='jscolor']").val();

  ///////////////////////////////////
      //click and drag to draw  
  table.on('mousemove', 'td', function(evt) {
    if (evt.buttons == 1) {
      color = $('#colorPicker').val();
      $(this).attr("bgcolor", color);
    }
  });
  }
  //////////////////////////////////

  // Listen for button clicks to trigger makeGrid()
  $("input[type='submit']").click(function(e) {
    e.preventDefault(); //Required to avoid submit and page reload
    makeGrid();
  });
  
 