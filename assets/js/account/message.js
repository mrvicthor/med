$(() => {
  $(".tab-message-button").click(function () {
    var tabId = $(this).data("tab");
    $(".tab-message-content").removeClass("flex").addClass("hidden");
    $("#" + tabId)
      .removeClass("hidden")
      .addClass("flex");
  });
});
