(function () {

    var app = angular.module('pagey', []);



    app.controller('PortfolioController', function () {
        this.works = portfolio;
    });

    app.controller('ServicesController', function () {
        this.service = services;
    });


    app.controller('TestimonialController', function () {
        this.test = testimonials;
    })





    var portfolio =
        [
            {
                name: 'Screensavers',
                description: 'For Mobile Screens',
                link: 'ssaver.html',
                image: 'assets/images/ousumbre2.jpg'
            },
            {
                name: 'People of Ghana',
                description: 'Story Album of Random People and Events',
                link: 'peepo.html',
                image: 'assets/images/osu_castle.jpg'
            }
        ];
    var services =
        [
            {
                icon: 'pe-7s-phone pe-dj pe-va',
                head: 'Screen Savers',
                content: 'Give your phone\'s homescreen a cool feel! Use pictures from my weekly series as Wallpapers.',
                link: 'ssaver.html',
                target: '_blank'
            },
            {
                icon: 'pe-7s-camera pe-dj pe-va',
                head: 'Photography',
                content: 'Observe nature\'s diverse intricacies and beauty through my lens, and of course, your screens.',
                link: 'peepo.html',
                target: '_blank'
            },
            {
                icon: 'pe-7s-note2 pe-dj pe-va',
                head: 'Events & Coverage',
                content: 'Be it weddings or graduations, or leisurely picnics, I\'m the go to guy, if you want to get going.',
                link: '#contact',
                target: ''
            },
            {
                icon: 'pe-7s-config pe-dj pe-va',
                head: 'Support',
                content: 'Are you an upcoming photographer? Do you need mentoring or tips to get started? Drop me a line!',
                link: '#contact',
                target: ''
            },


        ];


    var testimonials =
        [
            {
                pic: 'assets/images/testimonial2.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Jacob, they\'ll think you\'re a hard worker',
            },
            {
                pic: 'assets/images/testimonial2.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Jacob, they\'ll think you\'re a hard worker',
            },
            {
                pic: 'assets/images/testimonial2.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Jacob, they\'ll think you\'re a hard worker',
            },
            {
                pic: 'assets/images/testimonial2.jpg',
                name: 'Barnabas Nomo',
                title: 'C.E.O',
                content: 'Careful Jacob, they\'ll think you\'re a hard worker',
            },
        ];

})();