//$ used as shorthand for jQuery function

//.ready() wait until the HTML page’s DOM is ready to manipulate.
$(document).ready(() => {});

//target classes & show them
$(document).ready(() => {
  $(".product-photo").show();
});

//target id & hide it
$(document).ready(() => {
  $("#nav-dropdown").hide();
});

//calling function
$(document).ready(() => {
  const $navDropdown = $("#nav-dropdown");
  $navDropdown.hide();
});

//on click event handler
$(document).ready(() => {
  const $menuButton = $(".menu-button");
  const $navDropdown = $("#nav-dropdown");

  $menuButton.on("click", () => {
    $navDropdown.show();
  });
});

//on click show, mouse leave hide
$(document).ready(() => {
  const $menuButton = $(".menu-button");
  const $navDropdown = $("#nav-dropdown");

  $menuButton.on("click", () => {
    $navDropdown.show();
  });

  $navDropdown.on("mouseleave", () => {
    $navDropdown.hide();
  });
});

//Common effects - slideToggle, toggle, fadeIn
$(document).ready(() => {
  $(".menu-button").on("click", () => {
    $("#nav-dropdown").slideToggle("slow");
  });

  $(".login-button").on("click", () => {
    $(".login-form").slideToggle();
  });

  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });

  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });

  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });

  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });

  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });

  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
});

//Hide, Show, Toggle, Fade In, Fade Out, Fade Toggle via button click
$(document).ready(() => {
  $(".hide-button").on("click", () => {
    $(".first-image").hide();
  });

  $(".show-button").on("click", () => {
    $(".first-image").show();
  });

  $(".toggle-button").on("click", () => {
    $(".first-image").toggle();
  });

  $(".fade-out-button").on("click", () => {
    $(".fade-image").fadeOut(500);
  });

  $(".fade-in-button").on("click", () => {
    $(".fade-image").fadeIn(4000);
  });

  $(".fade-toggle-button").on("click", () => {
    $(".fade-image").fadeToggle("fast", "linear");
  });
});

//Slide Up, Slide Down & Slide Toggle
$(document).ready(() => {
  $(".hide-button").on("click", () => {
    $(".first-image").hide();
  });

  $(".show-button").on("click", () => {
    $(".first-image").show();
  });

  $(".toggle-button").on("click", () => {
    $(".first-image").toggle();
  });

  $(".fade-out-button").on("click", () => {
    $(".fade-image").fadeOut(500);
  });

  $(".fade-in-button").on("click", () => {
    $(".fade-image").fadeIn(4000);
  });

  $(".fade-toggle-button").on("click", () => {
    $(".fade-image").fadeToggle();
  });

  $(".up-button").on("click", () => {
    $(".slide-image").slideUp(100);
  });

  $(".down-button").on("click", () => {
    $(".slide-image").slideDown("slow");
  });

  $(".slide-toggle-button").on("click", () => {
    $(".slide-image").slideToggle(400);
  });
});

/*
.hide()
.show()
.toggle()
These methods instantly hide or show elements on a web page.

.fadeOut()
.fadeIn()
.fadeToggle()
These methods make elements disappear or appear over a given period of time.

.slideUp()
.slideDown()
.slideToggle()
*/

//Mouse events
//On Click
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").show();
  });
});

//Mouse enter & mouse leave
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").show();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
  });
  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });
});

//Mouse Enter & Mouse Leave change
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").show();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });

  $(".product-photo")
    .on("mouseenter", () => {
      $(".product-photo").addClass("photo-active");
    })
    .on("mouseleave", () => {
      $(".product-photo").removeClass("photo-active");
    });
});

//event.currentTarget to make only one image at a time zoom in and zoom out when your mouse enters and leaves
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").show();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });

  $(".product-photo")
    .on("mouseenter", event => {
      $(event.currentTarget).addClass("photo-active");
    })
    .on("mouseleave", event => {
      $(event.currentTarget).removeClass("photo-active");
    });
});

/*
Event handlers are comprised of an event listener and a callback function. An event listener specifies the type of event that will be detected. The callback function executes when the event happens. Everything together is the event handler.
An event listener is set up using the .on() method.
The events listened for included: 'click', 'mouseenter', and 'mouseleave'.
In addition to event handlers, you learned how to use event.currentTarget to refer to the individual element that an event occurred on.
*/
