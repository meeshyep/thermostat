describe ('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('The thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it ('Can increase the temperature with an up function', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
});
