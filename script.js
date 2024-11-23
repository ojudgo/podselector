const garage = document.getElementById('garage');
const pod1 = document.getElementById('pod1');
const pod2 = document.getElementById('pod2');
const pod3 = document.getElementById('pod3');
const pod4 = document.getElementById('pod4');
const pod5 = document.getElementById('pod5');
const pod6 = document.getElementById('pod6');
const pod1Btn = document.getElementById('pod1-btn');
const pod2Btn = document.getElementById('pod2-btn');
const pod3Btn = document.getElementById('pod3-btn');
const pod4Btn = document.getElementById('pod4-btn');
const pod5Btn = document.getElementById('pod5-btn');
const pod6Btn = document.getElementById('pod6-btn');
const messageBar = document.getElementById('message-bar')

let podVehicles = [
  // Garage (Pod Zero)
  [
    { id: 'monobrake', name: 'Monobrake', colour: 'var(--utility-orange)', text: 'white'},
    { id: 'domo', name: 'Domo', colour: 'red', text: 'white' },
    { id: 'excavator', name: 'Excavator', colour: 'red', text: 'white' },
    { id: 'transmitter-truck', name: 'Transmitter Truck', colour: '#666666', text: 'white'},
    { id: 'booster-mortar', name: 'Booster Mortar', colour: 'var(--utility-orange)', text: 'white'},
    { id: 'neutralizer-tractor', name: 'Neutralizer Tractor', colour: 'var(--utility-orange)', text: 'white'},
    { id: 'jet-air-transporter', name: 'Jet-Air Transporter', colour: 'var(--utility-orange)', text: 'white'},
    { id: 'laser-beam-cutter', name: 'Laser Beam Cutter', colour: 'var(--utility-orange)', text: 'white'},
    { id: 'mobile-crane', name: 'Mobile Crane', colour: 'red', text: 'white'},
    { id: 'sealing-device', name: 'Sealing Device', colour: '#0066ff', text: 'white'}
  ],
  // Pod 1 Vehicles
  [
    { id: 'firefly', name: 'Firefly', colour: 'yellow', text: 'red'},
    { id: 'fire-truck', name: 'Fire Truck', colour: 'red', text: 'white' },
    { id: 'mcv', name: 'Mobile Ctrl Vehicle', colour: 'red', text: 'white' },
    { id: 'dicetylene-cage', name: 'Dicetylene Cage', colour: '#666666', text: 'white'}
  ],
  
  // Pod 2 Vehicles
  [
    { id: 'bed', name: "Child's Bed", colour: 'blue', text: 'pink'}
  ],
  
  // Pod 3 Vehicles
  [
    {id: 'elevator-car-1', name: 'Master Elevator Car', colour: 'var(--utility-orange)', text: 'white'},
    {id: 'elevator-car-2', name: 'Elevator Car 2', colour: 'var(--utility-orange)', text: 'white'},
    {id: 'elevator-car-3', name: 'Elevator Car 3', colour: 'var(--utility-orange)', text: 'white'},
    {id: 'elevator-car-4', name: 'Elevator Car 4', colour: 'var(--utility-orange)', text: 'white'}
  ],
  
    // Pod 4 Vehicles
  [
    {id: 'thunderbird4', name: 'Thunderbird 4', colour: 'yellow', text: 'red'}
  ],
  
    // Pod 5 Vehicles
  [
    {id: 'mole', name: 'The Mole', colour: 'yellow', text: 'black'},
    {id: 'recovery-vehicle-1', name: 'Recovery Vehicle 1', colour: 'red', text: 'white'},
    {id: 'recovery-vehicle-2', name: 'Recovery Vehicle 2', colour: 'red', text: 'white'}
  ],
  
    // Pod 6 Vehicles
  [
    {id: 'thunderbird6', name: 'Thunderbird 6', colour: 'yellow', text: 'red'},
    {id: 'thunderbirdS', name: 'Thunderbird Shadow', colour: '#4d4d4d', text: 'white'}
  ],
];

let vehicleToLoad;
let pods = [garage, pod1, pod2, pod3, pod4, pod5, pod6];

function addVehicles() {
  for (var h = 0; h < podVehicles.length; h++) {
    podVehicles[h].forEach(({ id, name, colour, text }) => {
      pods[h].innerHTML += `<div id=${id} class='pod-vehicle' style='background: ${colour}; color: ${text}'>${name}</div>`;
    });
  }  
}
//end of addVehicles


function loadVehicle(number, pod, vehicle) {
  let vehicleMoved = podVehicles[pod][vehicle];
  let vehicleDeleted = podVehicles[pod].splice(vehicle, 1);
  podVehicles[number].push(vehicleMoved);
   };


function addButtons() {
    let vehicleButtons = document.querySelectorAll('.pod-vehicle');
    let podButtons = document.querySelectorAll('.pod-door') 
    
    for (var i = 0; i < vehicleButtons.length; i++) {
      let selectedVehicle = vehicleButtons[i];
      let vehicleID = selectedVehicle.id;
      vehicleButtons[i].addEventListener('click', () => {
        
        moveVehicle(vehicleID)
        
               })
               }}
                                
// End of addButtons

function moveVehicle(selectedID) {
   
  console.log('Selected vehicle: ' + selectedID);
   for (var i = 0; i < podVehicles.length; i++) {  
       for (var j = 0; j < podVehicles[i].length; j++)
           { if (podVehicles[i][j].id === selectedID)
             { messageBar.innerText = `${podVehicles[i][j].name} selected`
              if (podVehicles.indexOf(podVehicles[i]) != 0) {     
                    messageBar.innerText = `${podVehicles[i][j].name} unloaded`;
          loadVehicle(0, i, j);
          loadGame()         
        }
              
         else {
           vehicleToLoad = j
              }
           // end of else   
             }          
           }
   }
}
// END OF moveVehicle

function loadGame() {
    for (var l = 0; l < pods.length; l++) {
            pods[l].innerHTML = ''}
    addVehicles();
    addButtons();    
}
// end of loadGame

loadGame()

pod1Btn.addEventListener('click', () => 
                        {
  if (podVehicles[1].length <= 3) {
  messageBar.innerText = `${podVehicles[0][vehicleToLoad].name} loaded to Pod 1`
  loadVehicle(1, 0, vehicleToLoad)
  loadGame() 
  }        
  else {messageBar.innerText = 'Pod 1 full'}  
})

pod2Btn.addEventListener('click', () => 
                        {
  if (podVehicles[2].length <= 3) {
  messageBar.innerText = `${podVehicles[0][vehicleToLoad].name} loaded to Pod 2`
  loadVehicle(2, 0, vehicleToLoad)
  loadGame() 
  }        
  else {messageBar.innerText = 'Pod 2 full'}  
})

pod3Btn.addEventListener('click', () => 
                        {
  if (podVehicles[3].length <= 3) {
  messageBar.innerText = `${podVehicles[0][vehicleToLoad].name} loaded to Pod 3`
  loadVehicle(3, 0, vehicleToLoad)
  loadGame() 
  }        
  else {messageBar.innerText = 'Pod 3 full'}  
})

pod4Btn.addEventListener('click', () => 
                        {
  if (podVehicles[4].length <= 3) {
  messageBar.innerText = `${podVehicles[0][vehicleToLoad].name} loaded to Pod 4`
  loadVehicle(4, 0, vehicleToLoad)
  loadGame() 
  }        
  else {messageBar.innerText = 'Pod 4 full'}  
})

pod5Btn.addEventListener('click', () => 
                        {
  if (podVehicles[5].length <= 3) {
  messageBar.innerText = `${podVehicles[0][vehicleToLoad].name} loaded to Pod 5`
  loadVehicle(5, 0, vehicleToLoad)
  loadGame() 
  }        
  else {messageBar.innerText = 'Pod 5 full'}  
})

pod6Btn.addEventListener('click', () => 
                        {
  if (podVehicles[6].length <= 3) {
  messageBar.innerText = `${podVehicles[0][vehicleToLoad].name} loaded to Pod 6`
  loadVehicle(6, 0, vehicleToLoad)
  loadGame() 
  }        
  else {messageBar.innerText = 'Pod 6 full'}  
})






