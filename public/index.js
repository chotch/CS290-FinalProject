var filterFindButton = document.getElementById('filter-find-button');
if (filterFindButton){
  filterFindButton.addEventListener('click', updateExercises);
}

function updateExercises(){
//remove elements in the DOM that do not fit the filter

}

var exerciseInfoButton = document.getElementById('info-exercise-button');
if (exerciseInfoButton){
  exerciseInfoButton.addEventListener('click', showExerciseInfo);
}

function showExerciseInfo(){
  //unhide modal and display info of exercise (including difficulty and reps)
}

var addExerciseButton = document.getElementById('add-exercise-button');
if (addExerciseButton){
  addExerciseButton.addEventListener('click', addExercise);
}


function addExercise(){
  //open up a new window. User enters name of exercise, reps, sets, and day
}


var viewPlanButton = document.getElementById('viewPlan-button');
if(viewPlanButton){
  viewPlanButton.addEventListener('click', viewPlan);
}

function viewPlan(){
  //unhide modal that will show a grid of the users workout schedule
  //will show exercise with reps/sets for each day
}
