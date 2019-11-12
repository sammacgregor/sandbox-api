'use strict';


exports.destroy = function (req, res) {

    if(req.session.views) {
        console.log("views: "+req.session.views)
        return res.send("views: "+req.session.views)

} else {
    req.session.destroy(function (err) {
        if (err) {
            return res.send({ error: true, message: 'Error logging out' })

        } else {
            return res.send({ error: false, message: 'Logged out' })

        }
    }
    )
}


}