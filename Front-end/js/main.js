"use strict";

var src = './'; // const src = 'static/web/';;"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function anchors() {
  var anchors = document.querySelectorAll("a[href*='#']");

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        var blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

anchors();;"use strict";

AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});
window.addEventListener('load', AOS.refresh);;"use strict";

function form_focus() {
  var elems = document.querySelectorAll('input[type="text"], textarea');
  elems.forEach(function (el, i) {
    var focus_el = document.createElement('div');
    focus_el.classList.add('focus');
    el.parentNode.append(focus_el);

    el.onfocus = function () {
      el.parentNode.classList.add('_focus', '_active');
      el.parentNode.classList.remove('_err');
      document.querySelector('.connection').classList.remove('_active');
    };

    el.onblur = function () {
      if (el.value == "" || el.value == " ") {
        el.parentNode.classList.remove('_active');
      }

      el.parentNode.classList.remove('_focus');
    };
  });
}

form_focus();;"use strict";

var getCoords = function getCoords(element, position) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      left = _element$getBoundingC.left,
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;

  var point;

  switch (position) {
    case "top left":
      point = {
        x: left + window.pageXOffset,
        y: top + window.pageYOffset
      };
      break;

    case "top center":
      point = {
        x: left + width / 2 + window.pageXOffset,
        y: top + window.pageYOffset
      };
      break;

    case "top right":
      point = {
        x: left + width + window.pageXOffset,
        y: top + window.pageYOffset
      };
      break;

    case "center left":
      point = {
        x: left + window.pageXOffset,
        y: top + height / 2 + window.pageYOffset
      };
      break;

    case "center":
      point = {
        x: left + width / 2 + window.pageXOffset,
        y: top + height / 2 + window.pageYOffset
      };
      break;

    case "center right":
      point = {
        x: left + width + window.pageXOffset,
        y: top + height / 2 + window.pageYOffset
      };
      break;

    case "bottom left":
      point = {
        x: left + window.pageXOffset,
        y: top + height + window.pageYOffset
      };
      break;

    case "bottom center":
      point = {
        x: left + width / 2 + window.pageXOffset,
        y: top + height + window.pageYOffset
      };
      break;

    case "bottom right":
      point = {
        x: left + width + window.pageXOffset,
        y: top + height + window.pageYOffset
      };
      break;
  }

  return point; // вводишь нужную тебе позицию на елементе 
  // getCoords(document.querySelector('selector'), 'center')
  // getCoords(document.querySelector('selector'), 'bottom right') (нижний правый угол)
  // getCoords(document.querySelector('selector'), 'top center') (верхний центральный)
};;"use strict";

function preloading() {
  var preloader = document.querySelector('.loading');
  preloader.classList.add('_active');
  setTimeout(function () {
    preloader.classList.remove('_active');
  }, 3000);
}

preloading();;"use strict";

function push_msg(text) {
  var bg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#222";
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#fff';
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.8;
  var delay = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.4;
  var stop = delay * 1000;
  var base_style = "\n\t\tbackground:".concat(bg, ";\n\t\tcolor:").concat(color, ";\n\t\tposition: fixed;\n\t\tright: 0; top: 20%;\n\t\tpadding: 0.8em 2em;\n\t\tborder-top-left-radius: 1em;\n\t\tborder-bottom-left-radius: 1em;\n\t\tz-index: 1000;\n\t\ttransition: ").concat(time, "s;\n\t\ttransform: translateX(120%);\n\t");

  if (!document.querySelector('#_push_message_')) {
    var push_el = document.createElement('div');
    push_el.id = '_push_message_';
    push_el.textContent = text;
    push_el.style.cssText = base_style;
    document.body.append(push_el);
    setTimeout(function () {
      push_el.style.transform = 'translateX(0%)';
      setTimeout(function () {
        push_el.style.filter = 'brightness(1.8)';
        setTimeout(function () {
          push_el.style.filter = 'brightness(1)';
        }, 200);
      }, time * 1000);
      setTimeout(function () {
        push_el.style.transform = 'translateX(120%)';
        setTimeout(function () {
          push_el.remove();
        }, time * 1000);
      }, time * 1000 + stop);
    }, 200);
  }
};"use strict";

function sendRequest(method, url) {
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = function () {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
};"use strict";

function validation() {
  var forms = document.querySelectorAll('form');
  forms.forEach(function (form, i) {
    var req_el = form.querySelectorAll('._req');
    var number = form.querySelectorAll('._num');
    req_el.forEach(function (req) {
      return add_err_el(req);
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formSend(form);
    });
    only_number(number);
  });

  function add_err_el(el) {
    var err = document.createElement('div');
    err.classList.add('err');
    el.parentNode.append(err);
  }

  function formSend(form) {
    var error = formValidate(form);
    var req_el = form.querySelectorAll('._req');

    if (error === 0) {
      POST_forms(form.id);
      reset(form);
    } else {
      console.log('err');
    }
  }

  function formValidate(form) {
    var error = 0;
    var formReq = form.querySelectorAll('._req');
    formReq.forEach(function (item, i) {
      RemoveError(item);

      if (item.value === '' || item.value === ' ') {
        AddError(item);
        error++;
      }
    });
    return error;
  }

  function AddError(item) {
    item.parentNode.classList.add('_err');
  }

  function RemoveError(item) {
    item.parentNode.classList.remove('_err');
  }

  function reset(form) {
    var elems = form.querySelectorAll('input[type="text"], textarea');
    elems.forEach(function (el, i) {
      el.parentNode.classList.remove('_err');
      el.value = '';
    });
  }

  function only_number(elms) {
    elms.forEach(function (input) {
      input.addEventListener('keydown', function (event) {
        // Разрешаем: backspace, delete, tab и escape
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || // Разрешаем: Ctrl+A
        event.keyCode == 65 && event.ctrlKey === true || // Разрешаем: home, end, влево, вправо
        event.keyCode >= 35 && event.keyCode <= 39) {
          // Ничего не делаем
          return;
        } else {
          // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
          if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
          }
        }
      });
    });
  }
}

validation();;"use strict";

function accordeon_f(data) {
  var accordeon = document.querySelector('.accordeon');
  var list = accordeon.querySelector('ul');
  var old_elems = accordeon.querySelectorAll('li');
  var elems = undefined; // remove_old_el

  old_elems.forEach(function (el) {
    return el.remove();
  });

  function add_acc_elems() {
    data.forEach(function (el, i) {
      var html = '';
      var first = "<li class=\"accordeon__el\">\n\t\t\t<div class=\"accordeon__box\">\n\t\t\t\t<h4 class=\"title _s\">".concat(el.title, "</h4>");
      var index = "";
      if (data.length < 10) index = "<span class=\"accordeon__number\">0".concat(i + 1, "</span>");else index = "<span class=\"accordeon__number\">".concat(i + 1, "</span>");
      var end = "\n\t\t\t\t<p class=\"text accordeon__preview\">".concat(el.preview, "</p>\n\t\t\t\t<p class=\"text accordeon__content scroll_1\">").concat(el.text, "</p>\n\t\t\t</div>\n\t\t\t<svg class=\"accordeon__btn\">\n\t\t\t\t<use xlink:href=\"").concat(src, "assets/svg/sprite.svg#arrow\"></use>\n\t\t\t</svg>\n\t\t\t<div class=\"hr\"></div>\n\t\t</li>");
      html = first + index + end;
      list.insertAdjacentHTML('beforeend', html);
    });
    elems = accordeon.querySelectorAll('li'); //заносим в переменную elems новые DOM из data

    elems[0].classList.add('_active'); //открываем первый елемент
  }

  add_acc_elems();
  elems.forEach(function (el, i) {
    var btn = el.querySelector('.accordeon__btn');
    var title = el.querySelector('.title');

    btn.onclick = function () {
      return toggle(el);
    };

    title.onclick = function () {
      return toggle(el);
    };
  }); // func_____________

  function toggle(el) {
    if (el.classList.contains('_active')) {
      el.classList.remove('_active');
    } else {
      remove_class();
      el.classList.add('_active');
    }
  }

  function remove_class() {
    elems.forEach(function (el, i) {
      el.classList.remove('_active');
    });
  }

  anchors_acc();
} //anchors_acc();


function anchors_acc() {
  var acc = document.querySelector('.accordeon');
  var acc_elems = acc.querySelectorAll('li');
  var last_num = acc_elems.length - 1;
  var acc_last_el = acc_elems[last_num];
  var btn = document.querySelector('.accordeon-scroll'); //	var acc_h = getAccH(acc, acc_elems);

  btn.onclick = function (e) {
    var pos_1 = e.pageY;
    var pos_2 = getCoords(acc_last_el, 'top center').y;
    var center = e.clientY - window.innerHeight / 2;
    var up = window.innerHeight * 36 / 100;
    var scroll = pos_2 - pos_1 + center + up;
    var scroll_current = scroll;

    if (btn.classList.contains('_active')) {
      acc_elems.forEach(function (el) {
        return el.classList.remove('_active');
      });
    } else {
      start_scroll(scroll_current, scroll);
      acc_class();
    }

    btn.classList.toggle('_active');
  };

  function start_scroll(scroll, scroll_h) {
    var animationTime = 100;
    var duration = 200;
    var scroller = setInterval(function () {
      if (scroll > 0) {
        window.scrollBy(0, duration / 100);
        scroll = scroll - duration / 100;
      } else {
        clearInterval(scroller);
        scroll = scroll_h;
      }
    }, animationTime / 100);
  }

  function acc_class() {
    acc_elems.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('_active');
      }, i * 400);
    });
  }

  function getAccH(list, elems) {
    var height = 0;
    elems.forEach(function (el) {
      return el.classList.add('_active');
    });
    height = list.offsetHeight;
    elems.forEach(function (el) {
      return el.classList.remove('_active');
    });
    elems[0].classList.add('_active');
    return height;
  }
};"use strict";

function add_sevices(data) {
  var list = document.querySelector('.services__list');
  var old_elems = list.querySelectorAll('li');
  old_elems.forEach(function (el) {
    return el.remove();
  }); //remove old elems

  data.forEach(function (el, i) {
    list.insertAdjacentHTML('beforeEnd', "<li class=\"services__el\" data-aos=\"fade-up\">\n\t\t\t<div class=\"services__box\">\n\t\t\t\t<h4 class=\"title _s\">".concat(el.name, "</h4>\n\t\t\t\t<p class=\"text\">").concat(el.text, "</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"hr\"></div>\n\t\t</li>"));
  });
  AOS.refresh;
};"use strict";

function connection_btn_f() {
  var btn = document.querySelector('.connection__logo');

  btn.onclick = function () {
    btn.parentNode.classList.toggle('_active');
  };
}

connection_btn_f();;"use strict";

function hamburger() {
  var hamburger = document.querySelector('.hamburger');
  var hamburger_menu = document.querySelector('.nav__list');
  var link_elems = document.querySelectorAll('.nav__link');
  var overlay = document.querySelector('.overlay');
  var body = document.querySelector('body'); //var preloader = document.querySelector('.preloading');

  hamburger.onclick = function () {
    hamburger.classList.toggle('_active');
  };

  setInterval(function () {
    /*else if(preloader.classList.contains('_active')){
      body.style.overflow = 'hidden';
    }*/
    if (hamburger.classList.contains("_active")) {
      hamburger_menu.classList.add('hamburger-menu_active');
      body.style.overflow = 'hidden';
      overlay.classList.add('_active');
    } else {
      hamburger_menu.classList.remove('hamburger-menu_active');
      body.style.overflow = 'auto';
      overlay.classList.add('_remove');
    }
  }, 100);

  overlay.onclick = function () {
    hamburger.classList.remove('_active');
    overlay.classList.remove('_active');
  };

  link_elems.forEach(function (item, i) {
    item.onclick = function () {
      hamburger.classList.remove("_active");
    };
  });
}

hamburger();;"use strict";

function header_fix() {
  var header = document.querySelector('.header');

  document.onscroll = function () {
    showHeader();
  };

  function showHeader() {
    if (window.pageYOffset > 200) {
      header.classList.add('header_fixed');
    } else {
      header.classList.remove('header_fixed');
    }
  }
}

header_fix();;"use strict";

function slider_portfolio(data) {
  var slider = document.querySelector('.portfolio');
  var list = document.querySelector('.portfolio__list');
  var list_img = list.querySelectorAll('li');
  var info = document.querySelector('.portfolio__info');
  var info_el = info.querySelectorAll('li');
  var btn_prev = slider.querySelector('._prev');
  var btn_next = slider.querySelector('._next');
  var order_active = slider.querySelector('.portfolio__active');
  var order_length = slider.querySelector('.portfolio__length');
  var activeIndex = 0;
  var slides = data.length;

  btn_next.onclick = function () {
    return next();
  };

  btn_prev.onclick = function () {
    return prev();
  };
  /*func___________*/


  function check() {
    list.style.transform = "translateX(-".concat(activeIndex * 100, "%)");
    info.style.transform = "translateY(".concat(activeIndex * 100, "%)");
    order();
    check_btns();
  }

  check();

  function next() {
    if (activeIndex < slides - 1) {
      activeIndex++;
      check();
    } else check();
  }

  function prev() {
    if (activeIndex > 0) {
      activeIndex--;
      check();
    } else check();
  }

  function order() {
    var order_a;
    var order_l;
    if (slides < 10) order_l = "/0".concat(slides);else order_l = "/".concat(slides);
    if (activeIndex + 1 < 10) order_a = "0".concat(activeIndex + 1);else order_a = "".concat(activeIndex + 1);
    order_active.textContent = order_a;
    order_length.textContent = order_l;
  }

  function check_btns() {
    if (activeIndex == 0) {
      btn_prev.disabled = true;
    } else if (activeIndex == slides - 1) {
      btn_next.disabled = true;
    } else {
      btn_prev.disabled = false;
      btn_next.disabled = false;
    }
  }

  function remove_slides() {
    list_img.forEach(function (el) {
      return el.remove();
    });
    info_el.forEach(function (el) {
      return el.remove();
    });
  }

  remove_slides();

  function add_slides() {
    data.forEach(function (el, i) {
      list.insertAdjacentHTML('beforeEnd', "<li class=\"portfolio__img\">\n\t\t\t\t\t<img src=\"".concat(src, "assets/images/portfolio/").concat(el.img, ".jpg\">\n\t\t\t\t</li>"));
      var first = "<li class=\"portfolio__el \">\n\t\t\t\t\t<h3 class=\"title _m\">".concat(el.title, "</h3>\n\t\t\t\t\t<div class=\"text scroll_1\">\n\t\t\t\t\t\t<p>").concat(el.text[0], "</p>");
      var list_p = "";

      if (el.list) {
        el.list.forEach(function (el) {
          return list_p += "<div class=\"portfolio-text-list\">".concat(el, "</div>");
        });
      }

      var p_2 = '';
      if (el.text[1]) p_2 = "<p>".concat(el.text[1], "</p>");
      var end = "</div></li>";
      var html = first + list_p + p_2 + end;
      info.insertAdjacentHTML('beforeEnd', html);
    });
  }

  add_slides();
};"use strict";

var team_slider = new Splide('#team-slider', {
  pagination: false,
  arrows: false,
  speed: 300
}).mount();
team_slider.on('moved', function () {
  return team_slider_check(team_slider.index);
});

function team_slider_check(activeIndex) {
  slide_opacity(activeIndex, data_team);
  team_slider_order(activeIndex, data_team);
  team_slider_info(activeIndex, data_team);
  team_slider_btns(activeIndex, data_team);
}
/*____________func________*/


function team_addSlides(data) {
  var slider = document.querySelector('#team-slider');
  var old_slides = slider.querySelectorAll('li');
  old_slides.forEach(function (el) {
    return el.remove();
  }); //remove_slides

  data.forEach(function (el, i) {
    team_slider.add("<li class=\"splide__slide\">\n\t\t\t\t<div class=\"splide__box\">\n\t\t\t\t\t<img src=\"".concat(src, "assets/images/team/").concat(el.img, ".png\">\n\t\t\t\t</div>\n\t\t\t</li>"));
  });
  slide_opacity(0, data);
  team_slider_order(0, data);
  team_slider_info(0, data);
  team_slider_btns(0, data);
}

function slide_opacity(activeIndex, data) {
  var slider = document.querySelector('#team-slider');
  var slides = slider.querySelectorAll('li');
  slides.forEach(function (el, i) {
    el.classList.remove('_visible_1', '_visible_2');
  });

  if (activeIndex != slides.length - 1) {
    var second_slide = slides[activeIndex + 1];
    second_slide.classList.add('_visible_1');
  }

  if (activeIndex != slides.length - 2) {
    var third_slide = slides[activeIndex + 2];
    if (third_slide) third_slide.classList.add('_visible_2');
  }
}

function team_slider_order(activeIndex, data) {
  var slider = document.querySelector('#team-slider');
  var slides = slider.querySelectorAll('li').length;
  var order_active = document.querySelector('#team_active-index');
  var order_length = document.querySelector('#team_length');
  var order_a;
  var order_l;
  if (slides < 10) order_l = "/0".concat(slides);else order_l = "/".concat(slides);
  if (activeIndex + 1 < 10) order_a = "0".concat(activeIndex + 1);else order_a = "".concat(activeIndex + 1);
  order_active.textContent = order_a;
  order_length.textContent = order_l;
}

function team_slider_info(activeIndex, data) {
  var team_info = document.querySelector('.team__info');
  var name = team_info.querySelector('.text');
  var post = team_info.querySelector('.placeholder');
  name.textContent = "".concat(data[activeIndex].name);
  post.textContent = "".concat(data[activeIndex].post);
}

function team_slider_btns(activeIndex, data) {
  var section = document.querySelector('#s_team');
  var btn_prev = section.querySelector('._prev');
  var btn_next = section.querySelector('._next');
  var overlay_next = document.querySelector('.overlay-next');
  var slides = data.length;

  btn_next.onclick = function () {
    team_slider.go('+');
    team_slider.refresh();
  };

  btn_prev.onclick = function () {
    team_slider.go('-');
    team_slider.refresh();
  };

  overlay_next.onclick = function () {
    team_slider.go('+');
    team_slider.refresh();
  };
  /*____check___*/


  if (activeIndex == 0) {
    btn_prev.disabled = true;
  } else if (activeIndex == slides - 1) {
    btn_next.disabled = true;
  } else {
    btn_prev.disabled = false;
    btn_next.disabled = false;
  }
};"use strict";

/*_______src________req*/
var url_team = "".concat(src, "resources/data/team.json");
var url_portfolio = "".concat(src, "resources/data/portfolio.json");
var url_accordeon = "".concat(src, "resources/data/accordeon.json");
var url_services = "".concat(src, "resources/data/services.json");
/*______data_vars__________*/

var data_team = null;
var data_portfolio = null;
var data_accordeon = null;
var data_services = null;
/*_______dom_vars_______*/

var dom_team = undefined;
var dom_portfolio = undefined;
var dom_accordeon = undefined;
var dom_services = undefined;
/*req________________*/

/*team*/

sendRequest('GET', url_team).then(function (data) {
  data_team = data.team;
  team_addSlides(data_team);
}).then(function (e) {
  var parent = document.querySelector('#team-slider');
  dom_team = parent.querySelectorAll('li');
})["catch"](function (err) {
  return console.log(err);
});
/*portfolio*/

sendRequest('GET', url_portfolio).then(function (data) {
  data_portfolio = data.portfolio;
  slider_portfolio(data_portfolio);
})["catch"](function (err) {
  return console.log(err);
});
/*accordeon*/

sendRequest('GET', url_accordeon).then(function (data) {
  data_accordeon = data.accordeon;
  accordeon_f(data_accordeon);
})["catch"](function (err) {
  return console.log(err);
});
/*services*/

sendRequest('GET', url_services).then(function (data) {
  data_services = data.services;
  add_sevices(data_services);
})["catch"](function (err) {
  return console.log(err);
});;"use strict";

function POST_bid(id) {
  var form = document.querySelector("#".concat(id));
  var name = form.querySelector('input[name="name"]');
  var type = form.querySelector('input[name="type"]');
  var connection = form.querySelector('input[name="connection"]');
  var cash = form.querySelector('input[name="cash"]');
  var description = form.querySelector('textarea[name="description"]');
  var platform_arr = form.querySelectorAll('input[name="platform"]');
  var platform = '';
  platform_arr.forEach(function (item, i) {
    if (item.checked) {
      platform = item;
    }
  });
  var html = '';
  var body = {
    data: {
      name: name.value,
      type: type.value,
      connection: connection.value,
      cash: cash.value,
      platform: platform.value,
      description: description.value
    },
    form: html
  };
  console.log(body);
  sendRequest('POST', '/project/', body).then(function (res) {
    if (res.status == "success") {
      push_msg('Успешно', '#1EB039');
    }
  })["catch"](function (err) {
    return console.log(err);
  });
};"use strict";

function POST_contact(id) {
  var form = document.querySelector("#".concat(id));
  var name = form.querySelector('input[name="name"]');
  var number = form.querySelector('input[name="number"]');
  var mail = form.querySelector('input[name="mail"]');
  var telegram = form.querySelector('input[name="telegram"]');
  var description = form.querySelector('textarea[name="description"]');
  var html = '<h1>hello Den!</h1>';
  var body = {
    data: {
      name: name.value,
      number: number.value,
      mail: mail.value,
      telegram: telegram.value,
      description: description.value
    },
    form: html
  };
  sendRequest('POST', '/contact/', body).then(function (res) {
    if (res.status == "success") {
      push_msg('Успешно', '#1EB039');
    }
  })["catch"](function (err) {
    return console.log(err);
  });
};"use strict";

function POST_forms(id) {
  if (id == 'form-bid') {
    POST_bid(id);
  }

  if (id == 'form-contact') {
    POST_contact(id);
  }
}