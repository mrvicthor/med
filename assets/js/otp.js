$(".otp-input").on("input", function () {
  var $this = $(this);
  var val = $this.val();
  if (val.length === 1) {
    $this.next(".otp-input").focus();
  } else if (val.length === 0 && event.inputType === "deleteContentBackward") {
    $this.prev(".otp-input").focus();
  }
});
