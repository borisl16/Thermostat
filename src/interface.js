document.addEventListener("DOMContentLoaded", () =>  {
    const thermostat = new Thermostat();
    document.querySelector('#temperature').innerText = thermostat.temperature
})

const thermostat = new Thermostat();

document.querySelector('#temperature-up').addEventListener('click', () => { 
    thermostat.up(); 
    document.querySelector('#temperature').innerText = thermostat.temperature; 
})

document.querySelector('#temperature-down').addEventListener('click', () => { 
    thermostat.down(); 
    document.querySelector('#temperature').innerText = thermostat.temperature; 
})

document.querySelector('#temperature-reset').addEventListener('click', () => { 
  thermostat.resetTemperature(); 
  document.querySelector('#temperature').innerText = thermostat.temperature; 
})

document.querySelector('#powersaving-off').addEventListener('click', () => { 
  thermostat.switchPowerSavingModeOff(); 
  document.querySelector('#temperature').innerText = thermostat.temperature; 
  document.querySelector('#power-saving-status').innerText = 'off'
})

document.querySelector('#powersaving-on').addEventListener('click', () => { 
  thermostat.switchPowerSavingModeOn(); 
  document.querySelector('#temperature').innerText = thermostat.temperature; 
  document.querySelector('#power-saving-status').innerText = 'on'
})