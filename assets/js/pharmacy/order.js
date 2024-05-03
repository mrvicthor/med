$(() => {
  $("#cancel-order").on("click", () => {
    $("#cancel-toast-undo").removeClass("hidden").addClass("flex");
  });

  $("#undo").on("click", () => {
    $("#undone-toast").removeClass("hidden").addClass("flex");
    $("#cancel-toast-undo").addClass("hidden").removeClass("flex");
  });

  $("#confirm-order").on("click", () => {
    $("#confirm-toast").removeClass("hidden").addClass("flex");
  });

  $("#confirm-shipped").on("click", () => {
    $("#confirm-shipped-toast").removeClass("hidden").addClass("flex");
  });

  $("#confirm-picked").on("click", () => {
    $("#confirm-picked-toast").removeClass("hidden").addClass("flex");
  });
});
