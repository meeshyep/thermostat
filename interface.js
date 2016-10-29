function updateTemperature (){
  $('#temperature').text(thermostat.temperature);
}

$(document).ready(function) {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(fuction() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(fuction() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function){
    thermostat.powerSaving();
    $('power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
   thermostat.powerSaving();
   $('#power-saving').text('off')
   updateTemperature();
 })

 function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

});
