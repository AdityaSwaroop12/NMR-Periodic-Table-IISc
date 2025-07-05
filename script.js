let clickedInsideBoxOrTrigger = false;
function positionContainerRelativeTo(targetElement) {
  const box = document.querySelector('.container');
  const rect = targetElement.getBoundingClientRect();
  const boxWidth = box.offsetWidth;
  const padding = 10;
  const arrowSize = 15;

  // Get scrolling offsets
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Get element’s absolute left and right positions
  const elementLeft = rect.left + scrollLeft;
  const elementRight = rect.right + scrollLeft;

  // Get viewport left and right limits
  const viewportLeft = scrollLeft;
  const viewportRight = scrollLeft + window.innerWidth;

  // Remove previous arrow classes
  box.classList.remove('arrow-left', 'arrow-right');

  let left;
  let top = rect.top + scrollTop;

  // Identify if element is leftmost or rightmost (you can adjust selectors accordingly)
  const isLeftmost = targetElement.classList.contains('leftmost');
  const isRightmost = targetElement.classList.contains('rightmost');

  if (isLeftmost) {
    // Place box to the right of the element, arrow on left
    left = elementRight + padding;
    box.classList.add('arrow-left');
  } else if (isRightmost) {
    // Place box to the left of the element, arrow on right
    left = elementLeft - boxWidth - padding - 200;
    box.classList.add('arrow-right');
  } else {
    // All other elements: place box to the right, arrow on left
    left = elementRight + padding;
    box.classList.add('arrow-left');
  }

  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
  box.style.display = 'block';
}


let larmor = document.querySelector(".input1");
let field = document.querySelector(".input2");
let nuclei = ["1H", "2H", "3He", "6Li", "7Li", "9Be", "10B", "11B", "13C", "14N",  
    "15N", "17O", "19F", "21Ne", "23Na", "25Mg", "27Al", "29Si", "31P", "33S",  
    "35Cl", "37Cl", "39K", "40K", "41K", "43Ca", "45Sc", "47Ti", "49Ti", "50V",  
    "51V", "53Cr", "55Mn", "57Fe", "59Co", "61Ni", "63Cu", "65Cu", "67Zn", "69Ga",  
    "71Ga", "73Ge", "75As", "77Se", "79Br", "81Br", "83Kr", "87Rb", "87Sr", "91Zr",  
    "93Nb", "95Mo", "97Mo", "99Tc", "99Ru", "101Ru", "103Rh", "105Pd", "107Ag", "109Ag",  
    "111Cd", "113Cd", "113In", "115In", "117Sn", "119Sn", "121Sb", "123Sb", "123Te", "125Te",  
    "127I", "129Xe", "131Xe", "133Cs", "135Ba", "137Ba", "139La", "141Pr", "143Nd", "145Nd",  
    "147Sm", "149Sm", "151Eu", "153Eu", "155Gd", "157Gd", "159Tb", "161Dy", "163Dy", "165Ho",  
    "167Er", "169Tm", "171Yb", "173Yb", "175Lu", "177Hf", "179Hf", "181Ta", "183W", "185Re",  
    "187Re", "187Os", "189Os", "191Ir", "193Ir", "195Pt", "197Au", "199Hg", "201Hg", "203Tl",  
    "205Tl", "207Pb", "209Bi", "211Rn", "223Fr", "227Ac", "229Th", "231Pa", "233U", "235U",  
    "237Np", "239Pu"];

let gamma = [42.576, 6.536, -32.434, 6.265, 16.546, -5.984, 4.575, 13.663, 10.708, 3.077,  
    -4.316, -5.772, 40.052, -3.360, 11.262, -2.606, 11.103, -8.465, 17.235, 3.271,  
    4.172, 3.476, 1.987, -2.473, 1.091, -2.869, 10.359, -2.404, -2.405, 4.250,  
    11.213, -2.407, 10.576, 1.382, 10.054, -3.811, 11.319, 12.103, 2.669, 10.247,  
    12.984, -1.485, 7.315, 8.131, 10.667, 11.498, -1.644, 13.936, -1.852, -3.958,  
    10.407, -2.773, -2.832, 9.628, -1.955, -2.191, -1.342, -1.957, -1.723, -1.973,  
    -9.069, -9.498, 9.330, 9.340, -15.168, -15.877, 10.255, 5.553, -11.232, -13.454,  
    8.558, -11.860, 3.515, 5.585, 4.229, 4.729, 6.014, 12.911, -2.315, -1.429,  
    -1.789, -1.463, 4.676, 2.065, -1.305, -1.716, 10.136, -1.460, 2.048, 9.132,  
    -1.228, -3.510, 7.526, -2.080, 4.862, 1.720, 1.085, 5.106, 1.795, 9.717,  
    9.817, 0.986, 3.353, 0.753, 0.816, 9.292, 0.741, 7.617, -2.811, 24.570,  
    24.678, 8.907, 6.838, 2.400, 1.159, 5.606, 0.466, 2.050, -0.320, -0.820,  
    4.050, 0.320];

document.querySelector(".input-box .input-section .app1").addEventListener('click', (event) => {
    if(larmor.value.trim().length > 0)
    {
        field.value = (larmor.value)/gamma[0];
    }
    else {
        larmor.value = 400;
        field.value = (larmor.value)/gamma[0];
    }
});

document.querySelector(".input-box .input-section2 .app2").addEventListener('click', (event) => {
    if(field.value.trim().length > 0)
    {
        larmor.value = (field.value)*gamma[0];
    }
    else {
        field.value = 9.4;
        larmor.value = (field.value)*gamma[0];
    }
});

document.querySelector(".hydrogen").addEventListener('click', (event) => {
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData);

    document.querySelector('.button-group .two').addEventListener('click', (event) => {
    document.querySelector('.data .spin').style.display = ' block';
    document.querySelector('.data .supspin').style.display = ' block';
    document.querySelector('.data .gamma').style.display = ' block';
    document.querySelector('.data .supgamma').style.display = ' block';
    document.querySelector('.data .mew').style.display = ' block';
    document.querySelector('.data .supmew').style.display = ' block';
    document.querySelector('.data .ab').textContent = '0.01%';
    document.querySelector('.data .spin').textContent = '1';
    document.querySelector('.data .gamma').textContent = `${gamma[1]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[1]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.00286(2) b';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
});

function setActiveData() {
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>1</sup>H';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>2</sup>H';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '99.99%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[0]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[0]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}

});

document.querySelector(".helium").addEventListener('click', (event) => {
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData2();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData2);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData2() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>3</sup>He';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>4</sup>He';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[2]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[2]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".lithium").addEventListener('click', (event) => {
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData3();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData3);

    document.querySelector('.button-group .two').addEventListener('click', (event) => {
    document.querySelector('.data .spin').style.display = ' block';
    document.querySelector('.data .supspin').style.display = ' block';
    document.querySelector('.data .gamma').style.display = ' block';
    document.querySelector('.data .supgamma').style.display = ' block';
    document.querySelector('.data .mew').style.display = ' block';
    document.querySelector('.data .supmew').style.display = ' block';
    document.querySelector('.data .ab').textContent = '7.59%';
    document.querySelector('.data .spin').textContent = '1';
    document.querySelector('.data .gamma').textContent = `${gamma[3]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[3]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.00082(2) b';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
});

function setActiveData3() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>7</sup>Li';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>6</sup>Li';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '92.41%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[4]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[4]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.0406(8)b';
}

});
document.querySelector(".beryllium").addEventListener('click', (event) => {
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData4();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData4);
});

function setActiveData4() {
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>9</sup>Be';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[5]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[5]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.0529(4) b';
}

document.querySelector(".boron").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData5();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData5);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = ' block';
    document.querySelector('.data .supspin').style.display = ' block';
    document.querySelector('.data .gamma').style.display = ' block';
    document.querySelector('.data .supgamma').style.display = ' block';
    document.querySelector('.data .mew').style.display = ' block';
    document.querySelector('.data .supmew').style.display = ' block';
    document.querySelector('.data .ab').textContent = '19.9%';
    document.querySelector('.data .spin').textContent = '3';
    document.querySelector('.data .gamma').textContent = `${gamma[6]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[6]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.0847(6) b';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
});

function setActiveData5() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>11</sup>B';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>10</sup>B';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '80.1%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[7]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[7]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.0407(3) b';
}
});

document.querySelector(".carbon").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData6();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData6);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = ' block';
    document.querySelector('.data .supspin').style.display = ' block';
    document.querySelector('.data .gamma').style.display = ' block';
    document.querySelector('.data .supgamma').style.display = ' block';
    document.querySelector('.data .mew').style.display = ' block';
    document.querySelector('.data .supmew').style.display = ' block';
    document.querySelector('.data .ab').textContent = '1.07%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[8]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[8]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData6() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>12</sup>C';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>13</sup>C';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '98.93%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".nitrogen").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData7();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData7);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = ' block';
    document.querySelector('.data .supspin').style.display = ' block';
    document.querySelector('.data .gamma').style.display = ' block';
    document.querySelector('.data .supgamma').style.display = ' block';
    document.querySelector('.data .mew').style.display = ' block';
    document.querySelector('.data .supmew').style.display = ' block';
    document.querySelector('.data .ab').textContent = '0.37%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[10]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[10]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData7() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>14</sup>N';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>15</sup>N';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '99.63%';
    document.querySelector('.data .spin').textContent = '1';
    document.querySelector('.data .gamma').textContent = `${gamma[9]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[9]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.02001(10) b';
}
});

document.querySelector(".oxygen").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData8();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData8);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '0.21%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '99.76%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData8() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>16</sup>O';
    document.querySelector('.button-group .active').innerHTML = '<sup>17</sup>O';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>18</sup>O';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.04%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[11]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[11]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.02578 b';
}
});

document.querySelector(".fluorine").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData9();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData9);
});

function setActiveData9() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>19</sup>F';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[12]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[12]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}

document.querySelector(".neon").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData10();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData10);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '90.48%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '9.25%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData10() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>20</sup>Ne';
    document.querySelector('.button-group .active').innerHTML = '<sup>21</sup>Ne';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>22</sup>Ne';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.27%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[13]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[13]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.103(8) b';
}
});

document.querySelector(".sodium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData11();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData11);
});

function setActiveData11() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>23</sup>Na';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[14]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[14]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.1045(10) b';
}

document.querySelector(".magnesium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData12();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData12);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '11.01%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '78.99%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData12() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>24</sup>Mg';
    document.querySelector('.button-group .active').innerHTML = '<sup>25</sup>Mg';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>26</sup>Mg';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '10%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[15]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[15]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.199(2) b';
}
});

document.querySelector(".aluminium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData13();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData13);
});

function setActiveData13() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>27</sup>Al';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[16]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[16]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.1466(10) b';
}

document.querySelector(".silicon").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData14();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData14);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '3.09%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '92.23%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData14() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>28</sup>Si';
    document.querySelector('.button-group .active').innerHTML = '<sup>29</sup>Si';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>30</sup>Si';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '4.68%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[17]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[17]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.199(2) b';
}
});

document.querySelector(".phosphorous").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData15();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData15);
});

function setActiveData15() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>31</sup>P';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[18]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[18]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}

document.querySelector(".sulphur").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData16();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData16);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '4.29%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '94.93%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '0.02%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData16() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>32</sup>S';
    document.querySelector('.button-group .active').innerHTML = '<sup>33</sup>S';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>34</sup>S';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>36</sup>S';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.76%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[19]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[19]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.064(10) b';
}
});

document.querySelector(".chlorine").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData17();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData17);

    document.querySelector('.button-group .two').addEventListener('click', (event) => {
    document.querySelector('.data .spin').style.display = ' block';
    document.querySelector('.data .supspin').style.display = ' block';
    document.querySelector('.data .gamma').style.display = ' block';
    document.querySelector('.data .supgamma').style.display = ' block';
    document.querySelector('.data .mew').style.display = ' block';
    document.querySelector('.data .supmew').style.display = ' block';
    document.querySelector('.data .ab').textContent = '24.22%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[21]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[21]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.06493(2) b';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
});

function setActiveData17() {
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>35</sup>Cl';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>37</sup>Cl';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '75.78%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[20]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[20]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.08249(2) b';
}
});

document.querySelector(".argon").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData18();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData18);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '99.6%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .ab').textContent = '0.34%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData18() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>36</sup>Ar';
    document.querySelector('.button-group .active').innerHTML = '<sup>38</sup>Ar';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>40</sup>Ar';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.06%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".potassium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData19();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData19);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.01%';
    document.querySelector('.data .spin').textContent = '4';
    document.querySelector('.data .gamma').textContent = `${gamma[23]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[23]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.073(1) b';
})

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '6.73%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[24]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[24]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.0711(7) b';
});

function setActiveData19() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>39</sup>K';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>40</sup>K';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>41</sup>K';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '93.26%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[22]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[22]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.585(6) b';
}
});

document.querySelector(".calcium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData20();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData20);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '96.94%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.14%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[25]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[25]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.0408(8) b';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '2.09%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.19%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
function setActiveData20() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>40</sup>Ca';
    document.querySelector('.button-group .active').innerHTML = '<sup>42</sup>Ca';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>43</sup>Ca';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>44</sup>Ca';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>46</sup>Ca';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>48</sup>Ca';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.65%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".scandium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData21();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData21);
});

function setActiveData21() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>45</sup>Sc';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[26]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[26]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.046(14) b';
}

document.querySelector(".titanium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData22();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData22);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '8.25%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '73.72%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '5.41%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[28]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[28]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '0.247(11) b';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '5.18%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData22() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>46</sup>Ti';
    document.querySelector('.button-group .active').innerHTML = '<sup>47</sup>Ti';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>48</sup>Ti';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>49</sup>Ti';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>50</sup>Ti ';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '7.44%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[27]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[27]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.30(2) b';
}
});

document.querySelector(".vanadium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData23();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData23);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '99.75%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[30]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[30]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.043(5) b';
})

function setActiveData23() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>50</sup>V';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>51</sup>V';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.25%';
    document.querySelector('.data .spin').textContent = '6';
    document.querySelector('.data .gamma').textContent = `${gamma[29]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[29]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.21(4) b';
}
});

document.querySelector(".chromium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData23();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData23);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '4.35%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '83.79%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '2.37%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});


function setActiveData23() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>50</sup>Cr';
    document.querySelector('.button-group .active').innerHTML = '<sup>53</sup>Cr';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>52</sup>Cr';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>54</sup>Cr';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '9.5%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[31]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[31]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.15(5) b';
}
});

document.querySelector(".manganese").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData24();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData24);
});

function setActiveData24() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>55</sup>Mn';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[32]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[32]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.33(1) b';
}

document.querySelector(".iron").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData25();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData25);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '5.85%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '91.75%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.28%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});


function setActiveData25() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>54</sup>Fe';
    document.querySelector('.button-group .active').innerHTML = '<sup>57</sup>Fe';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>56</sup>Fe';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>58</sup>Fe';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '2.12%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[33]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[33]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".cobalt").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData26();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData26);
});

function setActiveData26() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>59</sup>Co';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[34]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[34]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.41(1) b';
}

document.querySelector(".nickel").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData27();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData27);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '68.08%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '26.22%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '3.63%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.93%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData27() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>58</sup>Ni';
    document.querySelector('.button-group .active').innerHTML = '<sup>61</sup>Ni';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>60</sup>Ni';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>62</sup>Ni';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>64</sup>Ni ';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '1.14%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[35]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[35]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.162(15) b';
}
});

document.querySelector(".copper").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData28();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData28);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '30.83%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[37]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[37]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.195(4) b';
})

function setActiveData28() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>63</sup>Cu';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>65</sup>Cu';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '69.17%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[36]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[36]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.211(4) b';
}
});
document.querySelector(".zinc").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData29();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData29);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '48.63%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '27.9%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '18.75%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.62%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData29() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>64</sup>Zn';
    document.querySelector('.button-group .active').innerHTML = '<sup>67</sup>Zn';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>66</sup>Zn';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>68</sup>Zn';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>70</sup>Zn';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '4.1%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[38]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[38]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.150(15) b';
}
});

document.querySelector(".gallium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData30();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData30);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '39.89%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[40]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[40]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.1040(8) b';
})

function setActiveData30() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>69</sup>Ga';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>71</sup>Ga';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '60.11%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[39]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[39]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.1650(8) b';
}
});

document.querySelector(".germanium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData31();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData31);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '20.84%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '27.54%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '36.28%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '7.61%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData31() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>70</sup>Ge';
    document.querySelector('.button-group .active').innerHTML = '<sup>73</sup>Ge';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>72</sup>Ge';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>74</sup>Ge';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>76</sup>Ge ';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '7.73%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[41]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[41]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.17(3) b';
}
});

document.querySelector(".arsenic").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData32();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData32);
});

function setActiveData32() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>75</sup>As';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[42]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[42]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '0.314(6) b';
}

document.querySelector(".selenium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData33();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData33);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.89%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '9.37%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '23.77%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '49.61%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '8.73%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
});
function setActiveData33() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>74</sup>Se';
    document.querySelector('.button-group .active').innerHTML = '<sup>77</sup>Se';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>76</sup>Se';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>78</sup>Se';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>80</sup>Se';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>82</sup>Se';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '7.63%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[43]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[43]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}

document.querySelector(".bromine").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData34();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData34);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '49.31%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[45]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[45]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.266(4) b';
})

function setActiveData34() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>79</sup>Br';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>81</sup>Br';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '50.69%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[44]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[44]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.318(5) b';
}
});

document.querySelector(".krypton").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData35();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData35);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.35%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '2.28%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '11.58%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '57%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '17.3%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
});
function setActiveData35() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>78</sup>Kr';
    document.querySelector('.button-group .active').innerHTML = '<sup>83</sup>Kr';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>80</sup>Kr';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>82</sup>Kr';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>84</sup>Kr';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>86</sup>Kr';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '11.49%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[46]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[46]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.259(1) b';
}

document.querySelector(".rubidium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData36();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData36);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '27.83%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[47]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[47]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.19(3) b';
})

function setActiveData36() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>85</sup>Rb';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>87</sup>Rb';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '72.17%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `4.13 MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${4.13*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.277(1) b';
}
});

document.querySelector(".strontium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData37();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData37);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.56%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '9.86%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '82.58%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});


function setActiveData37() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>84</sup>Sr';
    document.querySelector('.button-group .active').innerHTML = '<sup>87</sup>Sr';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>86</sup>Sr';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>88</sup>Sr';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '7%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[48]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[48]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.33(2) b';
}
});

document.querySelector(".yttrium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData38();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData38);
});

function setActiveData38() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>89</sup>Y';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `-2.09 MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(-2.09*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}

document.querySelector(".zirconium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData39();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData39);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '51.45%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '17.15%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '17.38%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '2.8%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData39() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>90</sup>Zr';
    document.querySelector('.button-group .active').innerHTML = '<sup>91</sup>Zr';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>92</sup>Zr';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>94</sup>Zr';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>96</sup>Zr';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '11.22%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[49]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[49]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.176(3) b';
}
});

document.querySelector(".niobium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData40();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData40);
});

function setActiveData40() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>93</sup>Nb';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[50]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[50]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.32(2) b';
}

document.querySelector(".molybdenum").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData41();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData41);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '9.63%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '24.13%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '16.68%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '15.92%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[51]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[51]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.022(1) b';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '9.25%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '14.84%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData41() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>100</sup>Mo';
    document.querySelector('.button-group .active').innerHTML = '<sup>97</sup>Mo';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>98</sup>Mo';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>96</sup>Mo';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>95</sup>Mo';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>94</sup>Mo';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>92</sup>Mo';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '9.55%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[52]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[52]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.255(13) b';
}
});

document.querySelector(".ruthenium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData42();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData42);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '12.6%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '31.55%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '18.62%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '5.54%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '1.87%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '12.76%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[54]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[54]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.079(4) b';
});

function setActiveData42() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>100</sup>Ru';
    document.querySelector('.button-group .active').innerHTML = '<sup>101</sup>Ru';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>102</sup>Ru';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>104</sup>Ru';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>96</sup>Ru';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>98</sup>Ru';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>99</sup>Ru';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '17.06%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[55]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[55]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.46(2) b';
}
});

document.querySelector(".rhodium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData43();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData43);
});

function setActiveData43() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>103</sup>Rh';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[56]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[56]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}

document.querySelector(".palladium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData44();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData44);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '1.02%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '11.14%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '27.33%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '26.46%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '11.72%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData44() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>102</sup>Pd';
    document.querySelector('.button-group .active').innerHTML = '<sup>105</sup>Pd';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>104</sup>Pd';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>106</sup>Pd';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>108</sup>Pd';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>110</sup>Pd';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '22.33%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[57]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[57]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '0.660(11) b';
}
});

document.querySelector(".silver").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData45();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData45);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '48.16%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[59]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[59]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

function setActiveData45() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>107</sup>Ag';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>109</sup>Ag';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '51.84%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[58]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[58]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".cadmium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData46();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData46);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '1.25%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.89%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '12.49%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '12.22%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[61]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[61]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '28.73%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '7.49%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});


function setActiveData46() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>106</sup>Cd';
    document.querySelector('.button-group .active').innerHTML = '<sup>111</sup>Cd';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>108</sup>Cd';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>110</sup>Cd';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>113</sup>Cd';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>114</sup>Cd';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>116</sup>Cd';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '12.8%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[60]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[60]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".indium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData47();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData47);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '4.29%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[62]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[62]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.80(4) b';
})

function setActiveData47() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>115</sup>In';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>113</sup>In';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.data .ab').textContent = '95.71%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[63]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[63]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.81(5) b';
}
});

document.querySelector(".tin").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData48();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData48);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.97%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.34%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `-14.01 MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(-14.01*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '14.54%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '7.68%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[64]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[64]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '24.22%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '8.59%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[65]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[65]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .seven').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '32.58%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .eight').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '4.63%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .nine').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '5.79%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});


function setActiveData48() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>112</sup>Sn';
    document.querySelector('.button-group .active').innerHTML = '<sup>114</sup>Sn';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>115</sup>Sn';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>116</sup>Sn';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>117</sup>Sn';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>118</sup>Sn';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>119</sup>Sn';
    document.querySelector('.button-group .seven').style.display = 'block';
    document.querySelector('.button-group .seven').innerHTML = '<sup>120</sup>Sn';
    document.querySelector('.button-group .eight').style.display = 'block';
    document.querySelector('.button-group .eight').innerHTML = '<sup>122</sup>Sn';
    document.querySelector('.button-group .nine').style.display = 'block';
    document.querySelector('.button-group .nine').innerHTML = '<sup>124</sup>Sn';
    document.querySelector('.data .ab').textContent = '0.66%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".antimony").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData49();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData49);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '42.79%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[67]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[67]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.49(5) b';
})

function setActiveData49() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>121</sup>Sb';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>123</sup>Sb';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '57.21%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[66]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[66]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.36(4) b';
}
});

document.querySelector(".iodine").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData49();
});

function setActiveData49() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>127</sup>I';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[70]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[70]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.710(10) b';
}

document.querySelector(".tellurium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData50();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData50);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.09%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.89%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[68]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[68]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '4.74%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '7.07%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[69]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[69]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '18.84%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '31.74%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .seven').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '34.08%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData50() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>120</sup>Te';
    document.querySelector('.button-group .active').innerHTML = '<sup>122</sup>Te';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>123</sup>Te';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>124</sup>Te';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>125</sup>Te';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>126</sup>Te';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>128</sup>Te';
    document.querySelector('.button-group .seven').style.display = 'block';
    document.querySelector('.button-group .seven').innerHTML = '<sup>130</sup>Te';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '2.55%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".xenon").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData51();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData51);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.09%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';




    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '1.92%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '26.44%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[71]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[71]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '4.08%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '21.18%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[72]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[72]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.116(4) b';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '26.89%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .seven').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '10.44%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .eight').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '8.87%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData51() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>124</sup>Xe';
    document.querySelector('.button-group .active').innerHTML = '<sup>126</sup>Xe';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>128</sup>Xe';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>129</sup>Xe';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>130</sup>Xe';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>131</sup>Xe';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>132</sup>Xe';
    document.querySelector('.button-group .seven').style.display = 'block';
    document.querySelector('.button-group .seven').innerHTML = '<sup>134</sup>Xe';
    document.querySelector('.button-group .eight').style.display = 'block';
    document.querySelector('.button-group .eight').innerHTML = '<sup>136</sup>Xe';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.09%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".cesium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData52();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData52);
});

function setActiveData52() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>133</sup>Cs';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[73]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[73]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.00355(4) b';
}

document.querySelector(".barium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData53();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData53);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.11%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '2.42%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '6.59%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[74]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[74]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.160(3) b';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '7.85%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '11.23%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[75]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[75]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.245(4) b';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '71.7%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData53() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>130</sup>Ba';
    document.querySelector('.button-group .active').innerHTML = '<sup>132</sup>Ba';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>134</sup>Ba';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>135</sup>Ba';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>136</sup>Ba';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>137</sup>Ba';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>138</sup>Ba';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.1%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".hafnium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData54();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData54);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.16%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '18.6%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[95]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[95]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+3.37(3) b';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '27.28%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '13.62%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[96]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[96]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+3.79(3) b';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '35.08%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData54() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>174</sup>Hf';
    document.querySelector('.button-group .active').innerHTML = '<sup>176</sup>Hf';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>177</sup>Hf';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>178</sup>Hf';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>179</sup>Hf';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>180</sup>Hf';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '5.26%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".tantalum").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData55();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData55);
});

function setActiveData55() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>181</sup>Ta';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '99.99%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[97]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[97]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+3.17(2) b';
}

document.querySelector(".tungsten").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData56();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData56);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.12%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '14.31%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[98]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[98]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '30.64%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '28.43%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData56() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>180</sup>W';
    document.querySelector('.button-group .active').innerHTML = '<sup>182</sup>W';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>183</sup>W';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>184</sup>W';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>186</sup>W';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '26.5%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".rhenium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData57();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData57);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '37.4%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[99]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[99]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+2.18(2) b';
})

function setActiveData57() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>185</sup>Re';
    document.querySelector('.button-group .active').innerHTML = '<sup>187</sup>Re';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '62.6%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[100]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[100]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+2.07(2) b';
}
});

document.querySelector(".osmium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData58();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData58);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.02%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '1.96%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[101]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[101]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '13.24%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '16.15%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[102]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[102]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.86(3) b';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '26.26%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '40.78%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData58() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>184</sup>Os';
    document.querySelector('.button-group .active').innerHTML = '<sup>186</sup>Os';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>187</sup>Os';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>188</sup>Os';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>189</sup>Os';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>190</sup>Os';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>192</sup>Os';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '1.59%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".iridium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData59();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData59);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '37.4%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[103]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[103]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.816(9) b';
})

function setActiveData59() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>191</sup>Ir';
    document.querySelector('.button-group .active').innerHTML = '<sup>193</sup>Ir';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '62.6%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[104]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[104]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.751(9) b';
}
});

document.querySelector(".platinum").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData60();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData60);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.01%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '32.97%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
 });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '13.24%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[105]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[105]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '25.24%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '7.16%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});


function setActiveData60() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>190</sup>Pt';
    document.querySelector('.button-group .active').innerHTML = '<sup>192</sup>Pt';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>194</sup>Pt';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>195</sup>Pt';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>196</sup>Pt';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>198</sup>Pt';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.78%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".gold").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData61();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData61);
});

function setActiveData61() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>197</sup>Au';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[106]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[106]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.547(16) b';
}

document.querySelector(".mercury").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData62();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData62);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.15%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '16.87%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[107]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[107]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '23.1%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '13.18%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[108]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[108]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '29.86%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '6.87%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData62() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>196</sup>Hg';
    document.querySelector('.button-group .active').innerHTML = '<sup>198</sup>Hg';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>199</sup>Hg';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>200</sup>Hg';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>201</sup>Hg';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>202</sup>Hg';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>204</sup>Hg';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '9.97%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".thallium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData63();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData63);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '29.52%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[109]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[109]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

function setActiveData63() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>203</sup>Tl';
    document.querySelector('.button-group .active').innerHTML = '<sup>205</sup>Tl';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '70.48%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[110]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[110]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".lead").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData64();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData64);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '1.4%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '22.1%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[111]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[111]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '52.4%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});


function setActiveData64() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>204</sup>Pb';
    document.querySelector('.button-group .active').innerHTML = '<sup>206</sup>Pb';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>207</sup>Pb';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>208</sup>Pb';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '24.1%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".bismuth").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData65();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData65);
});

function setActiveData65() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>209</sup>Bi';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[112]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[112]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.516(15) b';
}

document.querySelector(".lanthanum").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData66();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData66);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.09%';
    document.querySelector('.data .spin').textContent = '5';
    document.querySelector('.data .gamma').textContent = `5.66 MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(5.66*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.45(2) b';
})

function setActiveData66() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>138</sup>La';
    document.querySelector('.button-group .active').innerHTML = '<sup>139</sup>La';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '99.91%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[76]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[76]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.20(1) b';
}
});

document.querySelector(".praseodymium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData67();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData67);
});

function setActiveData67() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>141</sup>Pr';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '9/2';
    document.querySelector('.data .gamma').textContent = `${gamma[77]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[77]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.077(6) b';
}

document.querySelector(".neodymium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData68();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData68);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '27.2%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '23.8%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '8.3%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[79]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[79]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.314(12) b';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '17.2%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '5.7%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '5.6%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData68() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>142</sup>Nd';
    document.querySelector('.button-group .active').innerHTML = '<sup>143</sup>Nd';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>144</sup>Nd';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>145</sup>Nd';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>146</sup>Nd';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>148</sup>Nd';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>150</sup>Nd';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '12.2%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[78]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[78]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.61(2) b';
}
});

document.querySelector(".samarium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData69();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData69);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '3.07%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '11.24%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '13.82%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[81]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[81]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.078(8) b';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '7.38%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '26.75%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '22.75%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData69() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>144</sup>Sm';
    document.querySelector('.button-group .active').innerHTML = '<sup>147</sup>Sm';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>148</sup>Sm';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>149</sup>Sm';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>150</sup>Sm';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>152</sup>Sm';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>154</sup>Sm';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '14.99%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[80]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[80]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '-0.261(7) b';
}
});

document.querySelector(".europium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData70();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData70);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '47.81%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[82]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[82]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+0.95(3) b';
})

function setActiveData70() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>151</sup>Eu';
    document.querySelector('.button-group .active').innerHTML = '<sup>153</sup>Eu';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '52.19%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[83]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[83]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+2.41(2) b';
}
});

document.querySelector(".gadolinium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData71();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData71);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.2%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '14.8%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[84]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[84]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+1.27(5) b';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '20.47%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '15.65%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[85]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[85]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+1.36(6) b';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '24.84%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '21.86%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData71() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>152</sup>Gd';
    document.querySelector('.button-group .active').innerHTML = '<sup>154</sup>Gd';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>155</sup>Gd';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>156</sup>Gd';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>157</sup>Gd';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>158</sup>Gd';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>160</sup>Gd';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '2.18%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".terbium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData72();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData72);
});

function setActiveData72() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>159</sup>Tb';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '3/2';
    document.querySelector('.data .gamma').textContent = `${gamma[86]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[86]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+1.432(8) b';
}

document.querySelector(".dysprosium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData73();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData73);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.06%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '2.34%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '18.91%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[87]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[87]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+2.51(2) b';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '25.51%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '24.9%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[88]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[88]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '2.318(6) b';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '28.18%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData73() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>156</sup>Dy';
    document.querySelector('.button-group .active').innerHTML = '<sup>158</sup>Dy';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>160</sup>Dy';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>161</sup>Dy';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>162</sup>Dy';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>163</sup>Dy';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>164</sup>Dy';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '0.1%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".holmium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData74();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData74);
});

function setActiveData74() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>165</sup>Ho';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[89]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[89]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '3.58(2) b';
}

document.querySelector(".erbium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData75();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData75);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.14%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '33.61%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '22.93%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[90]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[90]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+3.57(3) b';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '26.78%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '14.93%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData75() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>162</sup>Er';
    document.querySelector('.button-group .active').innerHTML = '<sup>164</sup>Er';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>166</sup>Er';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>167</sup>Er';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>168</sup>Er';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>170</sup>Er';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '1.61%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".thulium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData76();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData76);
});

function setActiveData76() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>169</sup>Tm';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '100%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[91]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[91]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}

document.querySelector(".ytterbium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData73();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData73);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0.13%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
})

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '14.28%';
    document.querySelector('.data .spin').textContent = '1/2';
    document.querySelector('.data .gamma').textContent = `${gamma[92]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[92]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
    });

    document.querySelector('.button-group .three').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '21.83%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .four').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '16.13%';
    document.querySelector('.data .spin').textContent = '5/2';
    document.querySelector('.data .gamma').textContent = `${gamma[93]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(gamma[93]*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+2.80(4) b';
});
document.querySelector('.button-group .five').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '31.83%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

document.querySelector('.button-group .six').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '12.76%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
});

function setActiveData73() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>168</sup>Yb';
    document.querySelector('.button-group .active').innerHTML = '<sup>170</sup>Yb';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>171</sup>Yb';
    document.querySelector('.button-group .three').style.display = 'block';
    document.querySelector('.button-group .three').innerHTML = '<sup>172</sup>Yb';
    document.querySelector('.button-group .four').style.display = 'block';
    document.querySelector('.button-group .four').innerHTML = '<sup>173</sup>Yb';
    document.querySelector('.button-group .five').style.display = 'block';
    document.querySelector('.button-group .five').innerHTML = '<sup>174</sup>Yb';
    document.querySelector('.button-group .six').style.display = 'block';
    document.querySelector('.button-group .six').innerHTML = '<sup>176</sup>Yb';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '3.04%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".lutetium").addEventListener('click', (event) => {
     
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData74();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData74);

    document.querySelector('.button-group .two').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '2.59%';
    document.querySelector('.data .spin').textContent = '7';
    document.querySelector('.data .gamma').textContent = `3.45 MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(3.45*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+4.92(3) b';
})

function setActiveData74() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'none';
    document.querySelector('.button-group .active').innerHTML = '<sup>175</sup>Lu';
    document.querySelector('.button-group .two').style.display = 'block';
    document.querySelector('.button-group .two').innerHTML = '<sup>176</sup>Lu';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '97.41%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `${gamma[94]} MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${gamma[94]*(field.value)} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '+3.49(2) b';
}
});

document.querySelector(".uranium").addEventListener('click', (event) => {
    clickedInsideBoxOrTrigger = true; 
    const box = document.querySelector(".container");
    box.style.display = 'block';
    positionContainerRelativeTo(event.currentTarget);
    setActiveData75();
    document.querySelector('.button-group .active').addEventListener('click', setActiveData75);

    document.querySelector('.button-group .one').addEventListener('click', (event) => { 
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.data .ab').textContent = '0%';
    document.querySelector('.data .spin').textContent = '7/2';
    document.querySelector('.data .gamma').textContent = `-0.83 MHz/T`;
    document.querySelector('.data .mew').innerHTML = `${Math.abs(-0.83*(field.value))} at ${larmor.value} MHz for <sup>1</sup>H`;
    document.querySelector('.data .que').textContent = '4.936(6) b';
});

function setActiveData75() {
    document.querySelector('.data .spin').style.display = 'block';
    document.querySelector('.data .supspin').style.display = 'block';
    document.querySelector('.data .gamma').style.display = 'block';
    document.querySelector('.data .supgamma').style.display = 'block';
    document.querySelector('.data .mew').style.display = 'block';
    document.querySelector('.data .supmew').style.display = 'block';
    document.querySelector('.data .que').style.display = 'block';
    document.querySelector('.data .supque').style.display = 'block';
    document.querySelector('.button-group .one').style.display = 'block';
    document.querySelector('.button-group .one').innerHTML = '<sup>235</sup>U';
    document.querySelector('.button-group .active').innerHTML = '<sup>238</sup>U';
    document.querySelector('.button-group .two').style.display = 'none';
    document.querySelector('.button-group .three').style.display = 'none';
    document.querySelector('.button-group .four').style.display = 'none';
    document.querySelector('.button-group .five').style.display = 'none';
    document.querySelector('.button-group .six').style.display = 'none';
    document.querySelector('.button-group .seven').style.display = 'none';
    document.querySelector('.button-group .eight').style.display = 'none';
    document.querySelector('.button-group .nine').style.display = 'none';
    document.querySelector('.data .ab').textContent = '99.27%';
    document.querySelector('.data .spin').style.display = 'none';
    document.querySelector('.data .supspin').style.display = 'none';
    document.querySelector('.data .gamma').style.display = 'none';
    document.querySelector('.data .supgamma').style.display = 'none';
    document.querySelector('.data .mew').style.display = 'none';
    document.querySelector('.data .supmew').style.display = 'none';
    document.querySelector('.data .que').style.display = 'none';
    document.querySelector('.data .supque').style.display = 'none';
}
});

document.querySelector(".container").addEventListener('click', () => {
    clickedInsideBoxOrTrigger = true;
});

document.addEventListener('click', () => {
    if (!clickedInsideBoxOrTrigger) {
        document.querySelector(".container").style.display = 'none';
    }
    clickedInsideBoxOrTrigger = false; // reset for next click
});


