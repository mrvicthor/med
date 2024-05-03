$(() => {
  // create product form
  var currentStep = 1;
  var totalSteps = $(".step").length;

  $(".step:not(:first)").hide(); // Hide all steps except the first one initially

  $("#continueBtn").on("click", function () {
    if (currentStep < totalSteps) {
      $(".step").hide();
      $("#step" + (currentStep + 1)).show();
      currentStep++;
      if (currentStep === totalSteps) {
        $("#stepper-line").css("background-color", "#2A8420");
        $(".stepper-end").css({
          "border-color": "#2A8420",
          color: "#2A8420",
        });
        $(this).text("Submit");
      }
    }
  });

  // create product form
  var editCurrentStep = 1;
  var editTotalSteps = $(".edit-step").length;

  $(".edit-step:not(:first)").hide(); // Hide all steps except the first one initially

  $("#editContinueBtn").on("click", function () {
    if (editCurrentStep < editTotalSteps) {
      $(".edit-step").hide();
      $("#editStep" + (editCurrentStep + 1)).show();
      editCurrentStep++;
      if (editCurrentStep === editTotalSteps) {
        $("#edit-stepper-line").css("background-color", "#2A8420");
        $(".edit-stepper-end").css({
          "border-color": "#2A8420",
          color: "#2A8420",
        });
        $(this).text("Submit");
      }
    }
  });

  // disabled action
  $("#disable-product").on("click", () => {
    $("#delete-toast-undo").removeClass("hidden").addClass("flex");
  });
  // delete action
  $("#delete-product").on("click", () => {
    $("#delete-toast-undo").removeClass("hidden").addClass("flex");
  });
});
