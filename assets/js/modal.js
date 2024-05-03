$(() => {
  // Open modal when clicking on button with data-modal-id attribute
  $("[data-modal-id]").click(function () {
    var modalId = $(this).data("modal-id");
    $('[data-modal-id="' + modalId + '"]')
      .removeClass("hidden")
      .addClass("flex");
  });

  // Close modal when clicking outside of modal content
  $(document).on("click", ".modal", function (event) {
    if ($(event.target).hasClass("modal")) {
      $(this).addClass("hidden");
    }
  });

  // Close modal when clicking on close button
  $(document).on("click", ".modal-close", function () {
    $(this).closest(".modal").addClass("hidden");
  });
});
