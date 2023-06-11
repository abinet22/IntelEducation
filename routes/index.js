const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const passport = require('passport');
const db = require("../models");
const path = require("path");
const Op = db.Sequelize.Op;
const { v4: uuidv4 } = require('uuid');
router.get('/', forwardAuthenticated, async (req, res) =>{
res.render('index');
});

router.get('/about', forwardAuthenticated, async (req, res) =>{
res.render('about');
});

router.get('/enrichments', forwardAuthenticated, async (req, res) =>{
res.render('enrichments');
})

router.get('/team', forwardAuthenticated, async (req, res) =>{
res.render('team');
});

router.get('/contact', forwardAuthenticated, async (req, res) =>{
res.render('contact');
});
router.get('/forschools', forwardAuthenticated, async (req, res) =>{
res.render('forschools');
});

router.get('/acadamics-lowgrade-tutor', forwardAuthenticated, async (req, res) =>{
res.render('acadamics-lowgrade-tutor');
});
router.get('/apply-for-becoming-tutor', forwardAuthenticated, async (req, res) =>{
res.render('applyforbecomingtutor');
});

router.get('/tutor-application-form', forwardAuthenticated, async (req, res) =>{
res.render('tutorapplicationform');
});
   
    
router.get('/organizationscontactform', forwardAuthenticated, async (req, res) =>{
res.render('organizationscontactform');
});
            
    
router.get('/search-for-tutor', forwardAuthenticated, async (req, res) =>{
res.render('search');
});
        
                                
router.get('/login', forwardAuthenticated, async (req, res) =>{
res.render('login');
});


// Logout
router.get('/logout', (req, res) => {
req.logout();
req.flash('success_msg', 'You are logged out');
res.redirect('/misaleacadamy/login')

})

// Post Routers 
router.post('/login', (req, res, next) => {


passport.authenticate('local', {
successRedirect: '/dashboard',
failureRedirect: '/login',
failureFlash: true

})(req, res, next);
});
module.exports = router;