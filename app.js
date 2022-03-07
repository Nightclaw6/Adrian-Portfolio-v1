inputFocus: function (e) {
      $(".item").each(function () {
        var e = $(this);
        var padding = 20;
        var input = e.find("input, textarea");
        if (input.val() === "") {
          e.removeClass("active");
        }
        input
          .on("focus", function () {
            e.addClass("active");
            input.css({
              paddingRight: e.find(".placeholder").outerWidth() + padding + 5,
            });
          })
          .on("blur", function () {
            if (input.val() === "") {
              e.removeClass("active");
              input.css({ paddingRight: padding + "px" });
            }
          });
      });
    }