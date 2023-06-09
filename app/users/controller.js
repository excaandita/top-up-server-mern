const User = require('./model')
const bcrypt = require('bcryptjs')

module.exports = {
    viewSignIn: async (req, res)=> {
        try {
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");

            const alert = { message: alertMessage, status: alertStatus };
            if(req.session.user === null || req.session.user === undefined) {

                res.render('admin/users/view_signin',{
                    alert
                })
            } else {
                res.redirect('/dashboard')
            }
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/')
        }
    },

    actionSignIn: async (req, res) => {
        try {
            const {email, username, password} = req.body

            const check = await User.findOne({ email: email})
            if(check) {
                if(check.status === 'Y') {
                    const checkPassword = await bcrypt.compare(password, check.password)
                    if( checkPassword ){
                        req.session.user = {
                            id: check._id,
                            email: check.email,
                            status: check.status,
                            name: check.name
                        }

                        res.redirect('/dashboard')
                    } else {
                        req.flash('alertMessage', `Password Salah!`)
                        req.flash('alertStatus', 'danger')
                        res.redirect('/')
                    }

                } else {
                    req.flash('alertMessage', `Akun Anda Tidak Aktif!`)
                    req.flash('alertStatus', 'danger')
                    res.redirect('/')
                }
            } else {
                req.flash('alertMessage', `E-mail atau Username yang anda masukan tidak terdaftar!`)
                req.flash('alertStatus', 'danger')
                res.redirect('/')
            }

        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/')
        }
    },
    
    actionLogOut : (req, res) => {
        req.session.destroy()
        res.redirect('/')
    }
}