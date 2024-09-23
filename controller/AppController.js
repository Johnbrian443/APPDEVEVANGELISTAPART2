const main = {
    index: (req, res) => {
        res.render('index');
    },
    error: (req, res) => {
        res.render('404');
    },
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    feature: (req, res) => {
        res.render('feature');
    },
    quote: (req, res) => {
        res.render('quote');
    },
    service: (req, res) => {
        res.render('service');
    },
    team: (req, res) => {
        res.render('team');
    },
    testimonial: (req, res) => {
        res.render('testimonial');
    }

};

module.exports = main;