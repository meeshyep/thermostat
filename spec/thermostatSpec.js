describe ('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('The thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it ('The thermostat has a minimum temperature of 10 degress', function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it ('Can increase the temperature with an up function', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it ('Can decrease the temperature with an down function', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  describe ('Power saving mode', function () {
    it ('If power saving mode is on, maxTemp is 25 degrees', function() {
      thermostat.powerSaving(true);
      expect(thermostat.maxTemp).toEqual(25);
    });

    it ('If power saving mode is off, maxTemp is 32 degress', function() {
      thermostat.powerSaving(false);
      expect(thermostat.maxTemp).toEqual(32);
    });
  });
});
