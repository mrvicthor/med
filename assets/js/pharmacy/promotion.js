$(() => {
  var dropDownOpen = false;
  $(".product-drop-down").on("click", () => {
    if (!dropDownOpen) {
      $(".product-drop-down-item").removeClass("hidden").addClass("flex");
      return (dropDownOpen = true);
    } else {
      $(".product-drop-down-item").removeClass("flex").addClass("hidden");
      return (dropDownOpen = false);
    }
  });
});
