// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the volume of a sphere given its radius
 */
function calculate() {
  // Entering radius in cm
  let radius = parseFloat(document.getElementById('radius').value)
  let height = parseFloat(document.getElementById('height').value)
  let length = parseFloat(document.getElementById('length').value)


  // calculating volume using formula (Note: I was unable to get math.pi working properly)
  // const pi = 3.141592653589793238
  let volume = (4.0/3.0) * Math.PI * radius**3


  // Displaying volume results  
  document.getElementById('volume').innerHTML = 'The volume of the circle is ' + volume.toFixed(2) + 'cm<sup>3</sup>'
  
