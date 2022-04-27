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


  // calculating volume using formula Volume = π × Radius² × Height
  let volume = Math.PI * (radius**2) * height
  
  // calculating surface area using formula 2π × Radius × Length + 2π × Radius2 
  let surfaceArea = 2*(Math.PI) * radius * length + 2*(Math.PI) * radius**3


  // Displaying volume results  
  document.getElementById('volume').innerHTML = 'The volume of the oblique cylinder is ' + volume.toFixed(2) + 'cm<sup>3</sup>'
  document.getElementById('surfaceArea').innerHTML = 'The surface area of the oblique cylinder is ' + surfaceArea.toFixed(2) + 'cm<sup>2</sup>'
}