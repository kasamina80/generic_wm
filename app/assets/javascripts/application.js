//= require jquery
//= require popper
//= require bootstrap

document.addEventListener('DOMContentLoaded', function() {
  console.log("hello bootstrap world!");
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => { return new bootstrap.Tooltip(tooltipTriggerEl); });
});