var addModalopen = document.getElementById('add-exercise-button');
var modal = document.getElementById('add-modal');
var modalBackdrop = document.getElementById('modal-add-backdrop');

function addExercise()
{
  modal.classList.remove('hidden');
  modalBackdrop.classList.removed('hidden');
    console.log('== modal opened');
}

function modalCancel()
{
  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
    console.log('== modal closed');
}

function modalAccept()
{
  
}

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

var modalCancel = document.getElementById('modal-cancel');
if(modalCancel)
{
  modalCancel.addEventListener('click', modalCancel);
}
var modalAccept = document.getElementById('modal-accept');
if(modalAccept)
{
  modalAccept.addEventListener('click', modalAccept);
}



var viewPlanButton = document.getElementById('viewPlan-button');
if(viewPlanButton){
  viewPlanButton.addEventListener('click', viewPlan);
}

function viewPlan(){
  //unhide modal that will show a grid of the users workout schedule
  //will show exercise with reps/sets for each day
}
