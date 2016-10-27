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

  it ('Can reset the temperature to 20 degrees', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
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

  describe('Energy usage', function() {
    beforeEach(function(){
      thermostat.energyUsage();
    });

    it('The energy usage is low if temperature is below 18 degrees', function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('Low usage');
    });
    it('The energy usage is medium if temperature is between 18 and 25 degrees', function() {
      thermostat.temperature = 24;
      expect(thermostat.energyUsage()).toEqual('Medium usage');
    });
    it('The energy usage is high if temperature is above 25 degrees', function() {
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('High usage');
    });
  });
});
