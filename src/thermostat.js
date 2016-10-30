function Thermostat(){
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
  this.minTemp = 10;
  this.maxTempPowerSave = 25;
  this.maxTempNoPowerSave = 32;
  this.maxTemp = this.maxTempPowerSave;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  this.temperature -= 1;
};

Thermostat.prototype.powerSaving = function(status) {
  if (status) {
    this.maxTempPowerSave = 25;
  }
  if (status === false) {
    this.maxTempNoPowerSave = 32;
  }
};

Thermostat.prototype.tempReset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature <= 18) {
    return 'Low usage';
  } else if (this.temperature <= 24) {
    return 'Medium usage';
  } else {
    return 'High usage';
  }
};
