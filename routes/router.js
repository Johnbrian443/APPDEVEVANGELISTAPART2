const express = require('express');

const router = express.Router();
const Controller = require("../controller/AppController");

router.get('/', Controller.index);
router.get('/404', Controller.error);
router.get('/about', Controller.about);
router.get('/contact', Controller.contact);
router.get('/feature', Controller.feature);
router.get('/quote', Controller.quote);
router.get('/service', Controller.service);
router.get('/team', Controller.team);
router.get('/testimonial', Controller.testimonial);


module.exports = router;