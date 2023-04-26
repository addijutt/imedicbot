let mongoose = require("mongoose");
let router = require("express").Router();
let passport = require("passport");
let User = mongoose.model("User");
let { OkResponse, BadRequestResponse, UnauthorizedResponse } = require("express-http-response");

router.get('/', (req, res)=>{
    res.send('testing...')
})

router.post("/login", function (req, res, next) {
    console.log(req.body);
	// console.log("login", req.body);
	passport.authenticate("local", { session: false }, function (err, user, info) {
		if (err) return next(new BadRequestResponse(err));
		if (info) return next(new BadRequestResponse("Invalid Username or password!!!!", 402));
		if (!user) return next(new BadRequestResponse("Data not found! Contact Admin for further assistance!!", 423));
		return next(new OkResponse(user.toAuthJSON()));
	})(req, res, next);
});

router.post("/signup", function (req, res, next) {
    console.log(req.body);

	if (!req.body.email || !req.body.password || !req.body.name)
		return next(new BadRequestResponse("Missing required fields"));

	if (req.body.email.trim().length <= 0 || req.body.password.trim().length <= 0)
		return next(new BadRequestResponse("Missing required fields"));

	if (
		!req.body.email.includes("@") ||
		!req.body.email.includes(".") ||
		!req.body.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	)
		return next(new BadRequestResponse("Invalid email address"));
        try{
            User.findOne({ email: req.body.email }, (err, res) => {
                if (err) return next(new BadRequestResponse(err));
                if (res) return next(new BadRequestResponse("User already exists", 423));
                let user = new User();
                user.companyName = req.body.name;
                user.email = req.body.email;
                user.setPassword(req.body.password);
                user.save((err, res) => {
                    if (err) {
                        return next(new BadRequestResponse(err));
                    }
                    return next(new OkResponse({ user: user.toAuthJSON() }));
                });
            });
        }
         catch (err) {
            console.log(err)
        }
	
});

module.exports = router;
