//making the modal that pops up window to show exercise title, reps, difficulty
var addExerciseModalButton = document.getElementById('add-exercise-button');
addExerciseModal = document.getElementById('add-modal');
addExerciseModalBackdrop = document.getElementById('modal-add-backdrop');

addExerciseModalButton.addEventListener('click', function (event){
  console.log('in function');
  addExerciseModalBackdrop.classList.toggle('hidden');
  addExerciseModal.classList.toggle('hidden');

});

var modalExit = document.getElementById('modal-close');
modalExit.addEventListener('click', function (event){
  addExerciseModalBackdrop.classList.toggle('hidden');
  addExerciseModal.classList.toggle('hidden');
});

var modalClose = document.getElementById('modal-cancel');
modalClose.addEventListener('click', function(event){
  addExerciseModalBackdrop.classList.toggle('hidden');
  addExerciseModal.classList.toggle('hidden');
});

var modalExercise = document.getElementById('exercise-text-input');
var modalSets = document.getElementById('exercise-sets-input');
var modalReps = document.getElementById('exercise-reps-input');
var mon = document.getElementById('monday');
var tues = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thur = document.getElementById('thursday');
var fri = document.getElementById('friday');
var sat = document.getElementById('saturday');
var sun = document.getElementById('sunday');

var newExercises = [];

function getModalInfo(){
    var description = document.getElementById('exercise-text-input').value.trim();
    var sets = document.getElementById('exercise-sets-input').value.trim();
    var reps = document.getElementById('exercise-reps-input').value.trim();
    var day = document.querySelector('#exercise-day-fieldset input:checked').value;

    var customExercise = {
      sets: sets,
      reps: reps,
      description: description,
      day: day
    }
    console.log(customExercise);

    exercise = customExercise;

    //var exerciseHtml = Handlebars.templates.customExercise(customExercise);
    //console.log(exerciseHtml);

    //var customExerciseContainer = document.getElementById('exercises');
    //customExerciseContainer.insertAdjacentHTML('beforeend', exerciseHtml);
}


var modalConfirm = document.getElementById('modal-accept');
modalConfirm.addEventListener('click', function (event){
  if (modalExercise.value.length !== 0 && modalSets.value.length !== 0 && modalReps.value.length !== 0){

    //grab the info inputted by the user. and output the data to myPlanData.json so that
    //the new exercise is loaded into the page planPage

    getModalInfo();
    insertNewExercise(exercise);

    addExerciseModalBackdrop.classList.toggle('hidden');
    addExerciseModal.classList.toggle('hidden');

  }
  else {
    alert('You must fill in all the required fields');
  }
})

var addModalOpen = document.getElementById('add-exercise-button');
var modal = document.getElementById('add-modal');
var modalBackdrop = document.getElementById('modal-add-backdrop');
var allExercises = []

function addExercise() {
/*
 * This function shows the "add exercise" modal by removing the "hidden"
 * class from the modal and backdrop.
 */
  console.log("addExercise!");
  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');
  console.log('== modal opened');
}

function modalCancel() {
  /*
  This function closes the modal dialog when "cancel" is pressed
  */
  console.log("modalCancel!");
  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
  console.log('== modal closed');
}

function modalAccept() {
    /*
  This function submits the modal when the "accept" button is pressed
  */
  console.log("modalAccept!");
}

function modalClose() {
  /*
  This function closes the modal dialog when "X" button is pressed
  */
  console.log("modalClose!");
  modalCancel();
}

function updateExercises() {
  //remove elements in the DOM that do not fit the filter
  console.log("updateExercises!");
}

/*
 * This function parses an existing DOM element representing a single exercise
 * into an object representing that exercise and returns that object.  The object
 * is structured like this:
 *
 * {
 *   description: "...",
 *   photoURL: "...",
 *   price: ...,
 *   city: "...",
 *   condition: "..."
 * }
 */
function parseExerciseElem(exerciseElem) {
  console.log('parsing exercise elem...');
  // console.log(exerciseElem);

  var exercise = {
    type: exerciseElem.getAttribute('data-type'),
    difficulty: exerciseElem.getAttribute('data-difficulty'),
    reps: exerciseElem.getAttribute('data-reps')
  };

  var postImageElem = exerciseElem.querySelector('.exercise-image-container img');
  exercise.photoURL = postImageElem.src;
  exercise.description = postImageElem.alt;

  console.log('returning exercise...');
  // console.log(exercise);
  return exercise;
}

/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {

  /*
   * Remember all of the initial post elements initially displayed in the page.
   */
  var exerciseElems = document.getElementsByClassName('exercise');
  for (var i = 0; i < exerciseElems.length; i++) {
    allExercises.push(parseExerciseElem(exerciseElems[i]));
  }
});


// this function will insert a new Exercise to the end of the exercises section
function insertNewExercise(exercise) {
  console.log('adding new exercise...');
  console.log(exercise);
  var newExerciseHTML = Handlebars.templates.exercise({
    "description": exercise.description,
    "url": exercise.photoURL,
    "type": exercise.type,
    "difficulty": exercise.difficulty,
    "reps": exercise.reps
  });

  console.log('exercise HTML:');
  console.log(newExerciseHTML);

  /*
   * Add the new post element into the DOM at the end of the posts <section>.
   */
  var exercisesSection = document.getElementById('exercises');
  exercisesSection.insertAdjacentHTML('beforeend', newExerciseHTML);
}

/*
 * Applies the filters currently entered by the user to the set of all posts.
 * Any post that satisfies the user's filter values will be displayed,
 * including posts that are not currently being displayed because they didn't
 * satisfy an old set of filters.  Posts that don't satisfy the filters are
 * removed from the DOM.
 */
function doFilterUpdate() {
  console.log('doFilterUpdate()!');
  /*
   * Grab values of filters from user inputs.
   */
  var filters = {
    text: document.getElementById('filter-text').value.trim(),
    type: document.getElementById('filter-type').value,
    difficulties: []
  }

  console.log('filters after getting type and text:');
  console.log(filters);

  var filterDifficultyCheckedInputs = document.querySelectorAll("#filter-difficulty input:checked");
  for (var i = 0; i < filterDifficultyCheckedInputs.length; i++) {
    filters.difficulties.push(filterDifficultyCheckedInputs[i].value);
  }

  console.log('filters after getting difficulties:');
  console.log(filters);
  /*
   * Remove all "post" elements from the DOM.
   */
  console.log('removing all exercises...');
  var exerciseContainer = document.getElementById('exercises');
  while (exerciseContainer.lastChild) {
    exerciseContainer.removeChild(exerciseContainer.lastChild);
  }

  /*
   * Loop through the collection of all "post" elements and re-insert ones
   * that meet the current filtering criteria.
   */
  console.log('adding new exercises...');
  allExercises.forEach(function (exercise) {
    if (exercisePassesFilters(exercise, filters)) {
      console.log("exercise vars = ", exercise);
      insertNewExercise(exercise);
    }
  });

  // if no exercises after filtering, show message
  if (!exerciseContainer.lastChild) {
    var exerciseContainer = document.getElementById('exercises');
    var h3 = document.createElement('h3');

    h3.innerHTML = "No exercises matching this criteria! Refresh page to view all.";
    exerciseContainer.appendChild(h3);
  }
}

/*
 * A function to apply the current filters to a specific post.  Returns true
 * if the post passes the filters and should be displayed and false otherwise.
 */
function exercisePassesFilters(exercise, filters) {
  console.log('testing if exercise passes filters...');
  console.log('exercise:');
  console.log(exercise);
  console.log('filters:');
  console.log(filters);

  if (filters.text) {
    var exerciseDescription = exercise.description.toLowerCase();
    var filterText = filters.text.toLowerCase();
    if (exerciseDescription.indexOf(filterText) === -1) {
      return false;
    }
  }

  if (filters.type) {
    if (exercise.type.toLowerCase() !== filters.type.toLowerCase()) {
      return false;
    }
  }

  if (filters.difficulties && filters.difficulties.length > 0) {
    if (filters.difficulties.indexOf(exercise.difficulty) === -1) {
      return false;
    }
  }

  return true;

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
  'filter-find-button': doFilterUpdate,
  'add-exercise-button': addExercise,
  'modal-cancel': modalCancel,
  'modal-accept': modalAccept,
  'viewPlan-button': viewPlan,
  'modal-close': modalClose
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
