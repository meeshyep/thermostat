function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  this.temperature -= 1;
};

Thermostat.prototype.powerSaving = function(status) {
  if (status) {
    this.maxTemp = 25;
  }
  if (status === false) {
    this.maxTemp = 32;
  }
};

Thermostat.prototype.reset = function() {
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
