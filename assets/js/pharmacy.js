$(() => {
  let isProfileMenuOpen = false;
  let isNotificationMenuOpen = false;
  $("#open-profile-menus").on("click", (event) => {
    if (!isProfileMenuOpen) {
      // Toggle state only if not already open
      $("#profile-menus").removeClass("hidden").addClass("flex");
      $("#notification-menus").addClass("hidden").removeClass("flex");
      isNotificationMenuOpen = false;
      isProfileMenuOpen = true; // Update modal state
    } else {
      $("#profile-menus").addClass("hidden").removeClass("flex");
      isProfileMenuOpen = false; // Update modal state
    }
  });

  $("#open-notification-menus").on("click", (event) => {
    if (!isNotificationMenuOpen) {
      // Toggle state only if not already open
      $("#notification-menus").removeClass("hidden").addClass("flex");
      isProfileMenuOpen = false;
      $("#profile-menus").addClass("hidden").removeClass("flex");
      isNotificationMenuOpen = true; // Update modal state
    } else {
      $("#notification-menus").addClass("hidden").removeClass("flex");
      isNotificationMenuOpen = false; // Update modal state
    }
  });

  // Function to switch tabs
  function switchTab(tabId, tabs, contents) {
    // Remove border-primary class from all tabs
    tabs.removeClass("border-primary");
    // Hide all tab contents
    contents.addClass("hidden");
    // Show the selected tab content
    $("#" + tabId + "-content").removeClass("hidden");
    // Add border-primary class to the active tab button
    $("#" + tabId + "-tab").addClass("border-primary");
  }
  switchTab("default", $(".tab-button"), $(".tab-content"));
  $(".tab-button").on("click", function () {
    var tabId = $(this).attr("id").replace("-tab", "");
    switchTab(tabId, $(".tab-button"), $(".tab-content"));
  });

  // drop downs
  // close notification drop down incase anywhere is clicked
  $("#notification-dropdown").on("click", () => {
    $("#notification-dropdown").removeClass("absolute").addClass("hidden");
  });

  // close message dropdown incase anywhere is clicked
  $("#messages-dropdown").on("click", () => {
    $("#messages-dropdown").removeClass("absolute").addClass("hidden");
  });
});
