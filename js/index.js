/* --- Here starts the onscrolldown change of color of the navbar --- */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $links = $(".nav-link");
        var $brand = $(".navbar-brand");
        var $toggler = $(".navbar-toggler-icon");
        var $signup = $(".signup");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('navbar-dark', $(this).scrollTop() < $nav.height());
        $nav.toggleClass('navbar-light', $(this).scrollTop() > $nav.height());
        $links.toggleClass('text-dark', $(this).scrollTop() > $nav.height());
        $brand.toggleClass('text-dark', $(this).scrollTop() > $nav.height());
        $toggler.toggleClass('text-dark', $(this).scrollTop() > $nav.height());
        $signup.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/* --- Here starts the function change of color of the navbar --- */
function toggleNav() {
    var $nav = $(".navbar");
    var $links = $(".nav-link");
    var $brand = $(".navbar-brand");
    var $toggler = $(".navbar-toggler-icon");
    var $signup = $(".signup");

    if ($(this).scrollTop() < $nav.height()) {
        $nav.toggleClass('scrolled');
        $nav.toggleClass('navbar-dark');
        $nav.toggleClass('navbar-light');
        $links.toggleClass('text-dark');
        $brand.toggleClass('text-dark');
        $toggler.toggleClass('text-dark');
        $signup.toggleClass('scrolled');
    }
}

/* --- Stablish the current year so its always updated --- */
document.getElementById("year").innerHTML = new Date().getFullYear();

/* --- Here starts the function that toggles classes between some divs --- */
$(".input_icon").click(function () {
    var bar = this;
    if ($(this).hasClass("magnet_icon")) {
        if ($(".magnet").hasClass("active_bar")) {
            console.log("Submit thingie now");
        } else {
            $(".magnet").addClass("active_bar");
            $(".torrent").removeClass("active_bar");
        }
    } else if ($(this).hasClass("torrent_icon")) {
        if ($(".torrent").hasClass("active_bar")) {
            console.log("Submit thingie now");
        } else {
            $(".torrent").addClass("active_bar");
            $(".magnet").removeClass("active_bar");
        }
    }
});

/* --- Here starts the initialization of the Particle.JS lib --- */
particlesJS('particles', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 0,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.45,
            "width": 1.4
        },
        "move": {
            "enable": true,
            "speed": 0.45,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 160,
                "size": 8,
                "duration": 2,
                "opacity": 8,
                "speed": 2
            },
            "repulse": {
                "distance": 160,
                "duration": 0.8
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
});
