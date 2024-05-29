$(() => {
  $(".togglePasswordVisibility").on("click", function () {
    var passwordInput = $(".passwordInput");
    var type = passwordInput.attr("type") === "password" ? "text" : "password";
    passwordInput.attr("type", type);
    $(this).toggleClass("text-gray-600 text-primary");
  });
});
