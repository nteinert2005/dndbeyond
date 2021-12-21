import connectDB from "../../middleware/connectDB";
import User from '../../models/User';

const handler = (req, res) => {
    console.log('api/login reached');

    User.findOne({
        username: req.body.user.username,
        password: req.body.user.password
    }, (err, user) => {

        //console.log(user);
        if(err) res.send(500);
        if(user) {
            res.send(user);
        }
    });
}

export default connectDB(handler);