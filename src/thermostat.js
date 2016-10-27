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
