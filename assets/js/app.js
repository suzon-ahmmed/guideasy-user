/**
 * bootstrap tooltip Module
 * 
 * @param void
 * @return void
 */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
})

/**
 * see mor function of flight ticket Module
 * 
 * @param void
 * @return void
 */
 function seeMore() {
   const showMoreBtn = document.querySelector(".flight-show-more-btn");
   const showMoreUi = document.querySelector(".details-content .right-details ul");
   showMoreBtn.addEventListener("click", () => {
      //Toggle Nav
      showMoreUi.classList.toggle("scrole-ui");
   });
 }
 seeMore();