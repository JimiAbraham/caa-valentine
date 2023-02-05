const User = require('../model/index')

exports.newUser = (req, res, next) => {
    res.render('index', {

        //  path: '/admin/add-product'
    });
};

exports.newValData = (req, res, next) => {

    const name = req.body.name;

    User.create(name);

    res.render('response', { message: 'your name entered successfully' })
}

exports.allUsers = async(req, res) => {
    const vals = await User.findAll();
    res.render('vals', { names: vals })
}


exports.newVal = (req, res, next) => {
    res.render('index');
}