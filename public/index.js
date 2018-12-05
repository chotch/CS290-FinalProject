var addModalOpen = document.getElementById('add-exercise-button');
var modal = document.getElementById('add-modal');
var modalBackdrop = document.getElementById('modal-add-backdrop');

function infoModalOpen() {
/*
 * This function shows the "add exercise" modal by removing the "hidden"
 * class from the modal and backdrop.
 */
  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');
  console.log('== modal opened');
}

function modalClose() {
  /*
  This function closes the modal dialog when "cancel" is pressed
  */
  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
  console.log('== modal closed');
}

function modalAccept() {
    /*
  This function submits the modal when the "accept" button is pressed
  */
  var exercise = document.getElementById('exercise-text-input').text;
  var reps = document.getElementById('exercise-reps-input').text;
  var sets = document.getElementById('exercise-sets-input').text;
  var dayDropdown = document.getElementById('add-exercise-day')
  var day = dayDropdown.options[dayDropdown.selectedIndex].text;
    console.log(exercise + reps + sets + day);
}

function updateExercises() {
  //remove elements in the DOM that do not fit the filter
  console.log("updateExercises!");
}

function showExerciseInfo() {
  //unhide modal and display info of exercise (including difficulty and reps)
  console.log("showExerciseInfo!");
}

function viewPlan() {
  //unhide modal that will show a grid of the users workout schedule
  //will show exercise with reps/sets for each day
  console.log("viewPlan!");
}

// maps JS functions (ie. object properties)
//    to HTML button element id's (ie. object keys)
var oButtonIdsFunctions = {
  'filter-find-button': updateExercises,
  'modal-cancel': modalClose,
  'modal-close': modalClose,
  'modal-accept': modalAccept,
  'viewPlan-button': viewPlan
};

// assign a button click function (ie. a property in oButtonIdsFunctions object)
//    to each button (ie. key in oButtonIdsFunctions)
for (var thisButtonID in oButtonIdsFunctions) {
  // check key is actual property of object
  //    (ie. skip JS object prototypes, only process ones we added above)
  if (oButtonIdsFunctions.hasOwnProperty(thisButtonID)) {
    var thisButton = document.getElementById(thisButtonID);
    var thisFunction = oButtonIdsFunctions[thisButtonID];
    thisButton.addEventListener('click', thisFunction);
  }
}

var infoButton = document.getElementsByClassName('exercise-info-button');
for(var i = 0; i < infoButton.length; i++)
{
  if(infoButton[i])
  {
    infoButton[i].addEventListener('click', infoModalOpen)
  }
}
