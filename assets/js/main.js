$(() => {
  // Open modal on button click
  $("#open-modal").on("click", function () {
    $("#modal").removeClass("hidden").addClass("flex opacity-100"); // Add opacity-100 on open
    $("#modal-body").removeClass("opacity-100").addClass("opacity-100");
  });

  // Close modal on close button click or clicking outside the modal
  $("#close-modal, #modal").on("click", function (event) {
    if (
      event.target.id === "modal" ||
      event.target.className.includes("close-modal")
    ) {
      $("#modal").addClass("hidden"); // Remove opacity-100 on close
      $("#modal-child").removeClass("opacity-100");
    }
  });

  // switch inputs
  $(".switch").each(function () {
    var $switch = $(this);
    var $toggle = $switch.find('input[type="checkbox"]');
    var $indicator = $switch.find(".absolute");
    var $switchBg = $switch.find(".switch-bg");
    var bgColor = $switch.data("bg-color") || "bg-green-500";

    $toggle.on("change", function () {
      if ($(this).prop("checked")) {
        $indicator.addClass("translate-x-full");
        $switchBg.addClass(`bg-primary`);
      } else {
        $indicator.removeClass("translate-x-full");
        $switchBg.removeClass("bg-primary").addClass(`bg-gray-100`);
      }
    });
  });

  // Function to handle file input change
  function handleFileSelect(files) {
    var fileNames = "";
    for (var i = 0; i < files.length; i++) {
      fileNames += files[i].name;
      if (i < files.length - 1) {
        fileNames += ", ";
      }
    }
    $("#selected-files").text(fileNames);
  }

  // Event listener for file input change
  $("#file-input").change(function () {
    handleFileSelect($(this)[0].files);
  });

  // Event listeners for drag and drop functionality
  $("#file-picker").on({
    dragover: function (e) {
      e.preventDefault();
      $(this).addClass("dragover");
    },
    dragleave: function (e) {
      e.preventDefault();
      $(this).removeClass("dragover");
    },
    drop: function (e) {
      e.preventDefault();
      $(this).removeClass("dragover");
      var files = e.originalEvent.dataTransfer.files;
      handleFileSelect(files);
    },
  });
});

window.increment = increment
window.save = save
window.reset = reset