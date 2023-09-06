$(document).ready(function () {
    $(".image").slick({
        // slidesToShow: 4,
        // slidesToScroll: 1,
        // infinite: true,
        // arrows: true,
        // draggable: false,
        // prevArrow: `<button type='button' class='slick-prev slick-next'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        // nextArrow: `<button type='button' class='slick-next slick-next'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        arrows: true,
        // responsive: [
        //     {
        //         breakpoint: 1025,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             infinite: false,
        //         },
        //     },
        // ],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });

    $(".row-ntfBox").slick({
        // normal options...
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        dots: false,

        // the magic
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 1,
                    // swipe: true,

                },
            },

            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // swipe: true,

                },
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                },
            },

            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                },
            },

            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                },
            },

            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
            // {
            //     breakpoint: 300,
            //     settings: "unslick", // destroys slick
            // },
        ],
    });
});

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset >= 500) {
        document.getElementsByClassName("scroll-to-top")[0].style.display = "block";
    } else {
        document.getElementsByClassName("scroll-to-top")[0].style.display = "none";
    }
});

// var body = document.body,
//     overlay = document.querySelector('.overlay'),
//     overlayBtts = document.querySelectorAll('button[class$="overlay"]'),
//     openingBtt;

// [].forEach.call(overlayBtts, function (btt) {

//     btt.addEventListener('click', function () {

//         /* Detect the button class name */
//         var overlayOpen = this.className === 'open-overlay';

//         /* storing a reference to the opening button */
//         if (overlayOpen) {
//             openingBtt = this;
//         }

//         /* Toggle the aria-hidden state on the overlay and the
//            no-scroll class on the body */
//         overlay.setAttribute('aria-hidden', !overlayOpen);
//         body.classList.toggle('noscroll', overlayOpen);

//         /* On some mobile browser when the overlay was previously
//            opened and scrolled, if you open it again it doesn't
//            reset its scrollTop property */
//         overlay.scrollTop = 0;

//         /* forcing focus for Assistive technologies but note:
//       - if your modal has just a phrase and a button move the
//         focus on the button
//       - if your modal has a long text inside (e.g. a privacy
//         statement) move the focus on the first heading inside
//         the modal
//       - otherwise just focus the modal.

//       When you close the overlay restore the focus on the
//       button that opened the modal.
//       */
//         if (overlayOpen) {
//             overlay.focus();
//         }
//         else {
//             openingBtt.focus();
//             openingBtt = null;
//         }

//     }, false);

// });

// document.body.addEventListener('keyup', (ev) => {
//     if (ev.key === "Escape" &&
//         overlay.getAttribute('aria-hidden') === 'false') {
//         overlay.setAttribute('aria-hidden', 'true');
//         body.classList.toggle('noscroll', false);
//         openingBtt.focus();
//         openingBtt = null;
//     }
// })

//<-- Side nav -->
function openNav() {
    document.getElementById("sideNav").style.width = "350px";
    document.body.style['overflow-y'] = 'hidden';
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.body.style['overflow-y'] = 'visible';
}
