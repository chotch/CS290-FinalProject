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

// var exerciseInfoButton = document.getEement
//CHRISTIEN WORKING ON FILTER FUNCTIONALITY



var filterText = document.getElementById('filter-text');
var filterType = document.getElementById('filter-type');
var filterDifficulty0 = document.getElementById('filter-difficulty-0');
var filterDifficulty1 = document.getElementById('filter-difficulty-1');
var filterDifficulty2 = document.getElementById('filter-difficulty-2');
var filterDifficulty3 = document.getElementById('filter-difficulty-3');
var filterDifficulty4 = document.getElementById('filter-difficulty-4');
var filterDifficulty5 = document.getElementById('filter-difficulty-5');

filterText.addEventListener('change', function (event){
  var userFilterText = event.target.value;
});

filterType.addEventListener('change', function (event){
  var userFilterType = event.target.value;
});

filterDifficulty0.addEventListener('click', function (event){
  filterDifficulty0.classList.toggle('checked');
});

filterDifficulty1.addEventListener('click', function (event){
  filterDifficulty1.classList.toggle('checked');
});

filterDifficulty2.addEventListener('click', function (event){
  filterDifficulty2.classList.toggle('checked');
});

filterDifficulty3.addEventListener('click', function (event){
  filterDifficulty3.classList.toggle('checked');
});

filterDifficulty4.addEventListener('click', function (event){
  filterDifficulty4.classList.toggle('checked');
});

filterDifficulty5.addEventListener('click', function (event){
  filterDifficulty5.classList.toggle('checked');
  console.log('5 is checked');
});

var findButton = document.getElementById('filter-find-button');
findButton.addEventListener('click', function (event){
  var exercises = document.getElementsByClassName('exercise-contents');

  var exercisesInfo = document.getElementsByClassName('exercise-title-container');

  var i;
  var j;

  for (i = 0; i<exercisesInfo.length; i++){
    for (j = 0; j<62; j++){
      var exerciseTitle = ((document.getElementsByClassName('exercise-title'))[i].textContent);
      // var exerciseType = ((document.))

      var filterTextValue = filterText.value.toUpperCase();
      exerciseTitle = exerciseTitle.toUpperCase();

      var includes = exerciseTitle.includes(filterTextValue);

      //filter description works!!
      if (!includes && filterText.value.length !== 0){
        exercises[i].parentNode.remove();
      }

      var exerciseDifficulty = exercises[i].parentNode.getAttribute('data-difficulty');


      if (filterDifficulty0.classList.contains('checked')){
        if (exerciseDifficulty !== '0'){
          exercises[i].parentNode.remove();
        }
      }

      if (filterDifficulty1.classList.contains('checked')){
        if (exerciseDifficulty !== '1'){
          exercises[i].parentNode.remove();
        }
      }

      if (filterDifficulty2.classList.contains('checked')){
        if (exerciseDifficulty !== '2'){
          exercises[i].parentNode.remove();
        }
      }

      if (filterDifficulty3.classList.contains('checked')){
        if (exerciseDifficulty !== '3'){
          exercises[i].parentNode.remove();
        }
      }

      if (filterDifficulty4.classList.contains('checked')){
        if (exerciseDifficulty !== '4'){
          exercises[i].parentNode.remove();
        }
      }

      if (filterDifficulty5.classList.contains('checked')){
        if (exerciseDifficulty !== '5'){
          exercises[i].parentNode.remove();
        }
      }

      //filter by difficulty works

      var exerciseType = exercises[i].parentNode.getAttribute('data-type');


      if (filterType.value === 'Arms'){
        if (exerciseType !== 'biceps' && exerciseType !== 'triceps'){
          exercises[i].parentNode.remove();
        }
      }
      else {
        if((exerciseType !== filterType.value.toLowerCase()) && filterType.value.length !== 0){
          exercises[i].parentNode.remove();
        }
      }

      //filter by type works






    }
  }

});
