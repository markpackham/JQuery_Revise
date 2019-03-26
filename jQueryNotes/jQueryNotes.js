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

//.css()
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".menu-button").css("color", "#C3FF00");
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".menu-button").css("color", "#EFEFEF");
  });
});

//.css() background color
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
    $(".menu-button").css({
      color: "#C3FF00",
      backgroundColor: "#535353"
    });
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
    $(".menu-button").css({
      color: "#EFEFEF",
      backgroundColor: "#303030"
    });
  });
});

//.animate()
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
    $(".menu-button").css({
      color: "#C3FF00",
      backgroundColor: "#535353"
    });

    $(".menu-button").animate(
      {
        fontSize: "24px"
      },
      200
    );
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
    $(".menu-button").css({
      color: "#EFEFEF",
      backgroundColor: "#303030"
    });

    $(".menu-button").animate(
      {
        fontSize: "18px"
      },
      200
    );
  });
});

//.addClass()
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
    $(".menu-button").addClass("button-active"); //replace the code in the menu button mouse enter handler with the .addClass() method taking .button-active's styling from a CSS file

    $(".menu-button").animate(
      {
        fontSize: "24px"
      },
      200
    );
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
    $(".menu-button").css({
      color: "#EFEFEF",
      backgroundColor: "#303030"
    });

    $(".menu-button").animate(
      {
        fontSize: "18px"
      },
      200
    );
  });
});

//.removeClass()
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
    $(".menu-button").addClass("button-active");
    $(".nav-menu").removeClass("hide");

    $(".menu-button").animate(
      {
        fontSize: "24px"
      },
      200
    );
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".menu-button").removeClass("button-active");

    $(".menu-button").animate(
      {
        fontSize: "18px"
      },
      200
    );
  });
});

//.toggleClass()
$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").show();
  });

  $(".menu-button").on("click", () => {
    $(".nav-menu").toggleClass("hide");
    $(".menu-button").toggleClass("button-active");
  });
});

/*
The .css() method can change style properties of an element.
The .css() method can accept multiple styles at once if you pass it a JavaScript object as its argument.
The .animate() method can change specific style properties over a period of time.
The .addClass() will add a CSS class to an element, and the .removeClass() method will remove a CSS class.
The .toggleClass() method will toggle a class on or off an element.
*/

//Traverse DOM

//.children() target children in dom
$(document).ready(() => {
  $(".shoe-details").show();

  $(".more-details-button").on("click", event => {});

  $(".shoe-details li").on("click", event => {
    $(event.currentTarget).addClass("active");

    $(event.currentTarget)
      .siblings()
      .removeClass("active");

    $(".shoe-details")
      .children()
      .removeClass("disabled");
  });

  $(".login-button").on("click", () => {
    $(".login-form").toggle();
    $(".login-button").toggleClass("button-active");
  });

  $(".product-photo")
    .on("mouseenter", () => {
      $(this).addClass("photo-active");
    })
    .on("mouseleave", function() {
      $(this).removeClass("photo-active");
    });

  $(".menu-button").on("click", () => {
    $(".menu-button").toggleClass("button-active");
    $(".nav-menu").toggleClass("hide");
  });
});

//.parent()
$(".choice").on("click", event => {
  $(event.currentTarget)
    .parent()
    .hide();
});

//.siblings()
$(document).ready(() => {
  $(".shoe-details").show();

  $(".more-details-button").on("click", event => {});

  $(".shoe-details li").on("click", event => {
    $(event.currentTarget).addClass("active");

    $(".shoe-details")
      .children()
      .removeClass("disabled");
    $(event.currentTarget)
      .siblings() //do a removeClass on siblings
      .removeClass("active");
  });

  $(".login-button").on("click", () => {
    $(".login-form").toggle();
    $(".login-button").toggleClass("button-active");
  });

  $(".product-photo")
    .on("mouseenter", () => {
      $(this).addClass("photo-active");
    })
    .on("mouseleave", function() {
      $(this).removeClass("photo-active");
    });

  $(".menu-button").on("click", () => {
    $(".menu-button").toggleClass("button-active");
    $(".nav-menu").toggleClass("hide");
  });
});

//.closest()   travel up the DOM tree to find a specified selector closest to it.
$(document).ready(() => {
  $(".shoe-details").show();

  $(".more-details-button").on("click", event => {
    $(event.currentTarget)
      .closest(".product-details") //select '.product-details'
      .next()
      .toggle();
  });

  $(".shoe-details li").on("click", event => {
    $(event.currentTarget).addClass("active");

    $(event.currentTarget)
      .siblings()
      .removeClass("active");

    $(event.currentTarget)
      .closest(".shoe-details")
      .children()
      .removeClass("disabled");
  });

  $(".login-button").on("click", () => {
    $(".login-form").toggle();
    $(".login-button").toggleClass("button-active");
  });

  $(".product-photo")
    .on("mouseenter", () => {
      $(this).addClass("photo-active");
    })
    .on("mouseleave", function() {
      $(this).removeClass("photo-active");
    });

  $(".menu-button").on("click", () => {
    $(".menu-button").toggleClass("button-active");
    $(".nav-menu").toggleClass("hide");
  });
});

//.next()
$(document).ready(() => {
  $(".shoe-details").show();

  $(".more-details-button").on("click", event => {
    $(event.currentTarget)
      .closest(".product-details")
      .next()
      .toggle();
  });

  $(".shoe-details li").on("click", event => {
    $(event.currentTarget).addClass("active");

    $(event.currentTarget)
      .siblings()
      .removeClass("active");

    $(event.currentTarget)
      .closest(".shoe-details")
      .children()
      .removeClass("disabled");
  });
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
    $(".login-button").toggleClass("button-active");
  });

  $(".product-photo")
    .on("mouseenter", () => {
      $(this).addClass("photo-active");
    })
    .on("mouseleave", function() {
      $(this).removeClass("photo-active");
    });

  $(".menu-button").on("click", () => {
    $(".menu-button").toggleClass("button-active");
    $(".nav-menu").toggleClass("hide");
  });
});

//.find() targets singular or multiple elements that are descendants of an element. Unlike the .children() method, it traverses all descendants of the specified element, not just the first level down.
$(document).ready(() => {
  $(".more-details-button").on("click", event => {
    $(event.currentTarget)
      .closest(".product-details")
      .next()
      .toggle();

    $(event.currentTarget)
      .find("img")
      .toggleClass("rotate");
  });

  $(".shoe-details li").on("click", event => {
    $(event.currentTarget).addClass("active");

    $(event.currentTarget)
      .siblings()
      .removeClass("active");

    $(event.currentTarget)
      .closest(".shoe-details")
      .children()
      .removeClass("disabled");
  });
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
    $(".login-button").toggleClass("button-active");
  });

  $(".product-photo")
    .on("mouseenter", () => {
      $(this).addClass("photo-active");
    })
    .on("mouseleave", function() {
      $(this).removeClass("photo-active");
    });

  $(".menu-button").on("click", () => {
    $(".menu-button").toggleClass("button-active");
    $(".nav-menu").toggleClass("hide");
  });
});

/*
.children() to target an element’s child elements.
.siblings() to target elements adjacent to an element.
.parent() to target an element’s parent.
.closest() travels up the DOM tree from the current element to target the closest element with a given selector.
.next() to target the element immediately following the selected element.
.prev() to target the element that is immediately preceding the selected element.
.find() to target descendant elements by some selector, ie- class, id, tag etc.
In addition to these methods, there are even more, including .prevUntil(), .nextUntil()
*/

//uses closest, next, siblings, children
$(document).ready(() => {
  $(".shoe-details").show();

  $(".more-details-button").on("click", event => {
    $(event.currentTarget)
      .closest(".product-details")
      .next()
      .toggle();
  });

  $(".shoe-details li").on("click", event => {
    $(event.currentTarget).addClass("active");

    $(event.currentTarget)
      .siblings()
      .removeClass("active");

    $(event.currentTarget)
      .closest(".shoe-details")
      .children()
      .removeClass("disabled");
  });
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
    $(".login-button").toggleClass("button-active");
  });

  $(".product-photo")
    .on("mouseenter", () => {
      $(this).addClass("photo-active");
    })
    .on("mouseleave", function() {
      $(this).removeClass("photo-active");
    });

  $(".menu-button").on("click", () => {
    $(".menu-button").toggleClass("button-active");
    $(".nav-menu").toggleClass("hide");
  });
});

//Return all sibling elements between two <li> elements with class name "start" and "stop":
$(document).ready(function() {
  $("li.start")
    .prevUntil("li.stop")
    .css({ color: "red", border: "2px solid red" });
});

/*
the .nextUntil() method searches through the successors of these elements in the DOM tree, stopping when it reaches an element matched by the method's argument.
*/
