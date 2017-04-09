var request = require('request');
var parser = require('.././util/parser');


exports.one = function(req, res, next) {
    request.get({
            url: "https://ermolaeva.tania@gmail.com:12345@tatiana-ermolaeva.zendesk.com/api/v2/tickets/" + req.params.id + ".json"
        },
        function(er, response, body) {
            if (er) return next(er);
            if (response.statusCode != 200) return next();
            console.log(body)
            res.send(parser.getTicket(body));
        });
}

exports.list = function(req, res, next) {
    var queryObject = {
        page: req.query.page
    }
    request.get({
            url: "https://ermolaeva.tania@gmail.com:12345@tatiana-ermolaeva.zendesk.com/api/v2/tickets.json",
            qs: queryObject
        },
        function(er, response, body) {
            if (er) return next(er);
            if (response.statusCode != 200) return next();

            res.send(parser.getTickets(body));
        });
}
