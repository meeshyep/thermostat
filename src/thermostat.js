function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  this.temperature -= 1;
};
