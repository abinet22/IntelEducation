const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const passport = require('passport');
const db = require("../models");
const path = require("path");
const Op = db.Sequelize.Op;
const { v4: uuidv4 } = require('uuid');
router.get('/', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('index',{category:category,subcategory:subcategory});
});

router.get('/about', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('about',{category:category,subcategory:subcategory});
});

router.get('/codeprogramming', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('codeprogramming',{category:category,subcategory:subcategory});
})

router.get('/team', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('team',{category:category,subcategory:subcategory});
});

router.get('/contact', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('contact',{category:category,subcategory:subcategory});
});
router.get('/forschools', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('forschools',{category:category,subcategory:subcategory});
});
router.get('/stem', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
    res.render('stem',{category:category,subcategory:subcategory});
    });
    
router.get('/acadamicssearchtutor/(:category)', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('acadamicssearchtutor',{searchcategory:req.params.category,category:category,subcategory:subcategory});
});
router.get('/apply-for-becoming-tutor', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('applyforbecomingtutor',{category:category,subcategory:subcategory});
});

router.get('/tutor-application-form', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('tutorapplicationform',{category:category,subcategory:subcategory});
});

router.post('/searchfortutor', forwardAuthenticated, async (req, res) =>{
    const {question1,gender,fullname,yourfuture,phonenumber,region,subcity,woreda,localname,interestedin,methodofdelivery,preferedday,educational_background,ifk12} = req.body;
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})

    let errors =[];
    if(errors.length >0){

    }else{
      
           const requestform={
            treqid: uuidv4(),
            requestby:question1,
            gender:gender,
            fullname:fullname,
            phonenumber:phonenumber,
            region:region,
            subcity:subcity,
            woreda:woreda,
            localname:localname,
            interestedin:interestedin,
            methodofdelivery:methodofdelivery,
            preferedday:preferedday,
            educational_background:educational_background,
            ifk12:ifk12,
            seen:"No",
            yourfuture:yourfuture
           };
         db.TotorRequestForm.create(requestform).then(rform =>{
            res.render('search',{success_msg:'Request form successfully created. We will call you as soon as possible',category:category,subcategory:subcategory});
         }).catch(err =>{
            console.log(err)
            res.render('search',{error_msg:'Error while ordering tutor request form please try again',category:category,subcategory:subcategory});
         })

       
    }

});
   
    
router.get('/organizationscontactform/(:whois)', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('organizationscontactform',{question1:req.params.whois,category:category,subcategory:subcategory});
});
    
router.get('/summercamp', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('summercamp',{question1:req.params.whois,category:category,subcategory:subcategory});
});
    
router.get('/personaldevelopment', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('personaldevelopment',{question1:req.params.whois,category:category,subcategory:subcategory});
});
router.post('/organizationcontactform', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
    const {question1,fullname,jobtitle,organizationname,organizationaddress,organizationemail,organizationphone,personalphone} = req.body;

let errors =[];
if(errors.length >0){

}else{
  
       const requestform={
        oreqid: uuidv4(),
        requestby:question1,
      
        fullname:fullname,
        jobtitle:jobtitle,
        organizationname:organizationname,
        organizationaddress:organizationaddress,
        organizationemail:organizationemail,
        organizationphone:organizationphone,
        personalphone:personalphone,
        seen:"No",
       
       };
     db.OrganizationRequestForm.create(requestform).then(rform =>{
        res.render('organizationscontactform',{question1:question1,success_msg:'Request form successfully created. We will call you as soon as possible',category:category,subcategory:subcategory});
     }).catch(err =>{
        console.log(err)
        res.render('organizationscontactform',{question1:question1,error_msg:'Error while submitting form please try again',category:category,subcategory:subcategory});
     })

   
}
});
    
    
router.get('/search-for-tutor', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
res.render('search',{category:category,subcategory:subcategory});
});
router.get('/oshatrainings', forwardAuthenticated, async (req, res) =>{
    const category = await db.Category.findAll({where:{is_active:'Yes'}})
    const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
    res.render('osha',{category:category,subcategory:subcategory});
    });
            
    router.get('/educationconsultancy', forwardAuthenticated, async (req, res) =>{
        const category = await db.Category.findAll({where:{is_active:'Yes'}})
        const subcategory =await  db.Subcategory.findAll({where:{is_active:'Yes'}})
        res.render('educationconsultancy',{category:category,subcategory:subcategory});
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