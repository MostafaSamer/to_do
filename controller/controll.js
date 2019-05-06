const data = require('../model/data');

module.exports = function(app) {

    app.get('/', (req, res) => {
        // get data from database and send it in the render function
        data.get_data(function(data) {
            res.render('home', {
                cuss: data.rows
            });
        })
    })

    app.post('/add', (req, res) => {
        // get the data from the post and sent it to the data
        const mess = req.body.mess;
        data.insert_data(mess);
        res.redirect('/');
    })

    app.post('/delete', (req, res) => {
        // get id from the post and send it to data
        const id = req.body.id;
        const rev = req.body.rev;
        data.delete_data(id, rev)
        res.redirect('/')
    })

};
