var mongoose = require('mongoose');

var requestes = mongoose.Schema({
    Username: {
        type: String
    },
    request: {
        type: String
    },
    Type: {
        type: String
    }
});
var requestes = module.exports = mongoose.model('requestes', requestes);
module.exports.addreq = function (newreq) {
    newreq.save();
}
