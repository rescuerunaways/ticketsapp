exports.getTicket = function(body) {
    data = JSON.parse(body)["ticket"]
    var obj = new Object();
    obj.id = data.id;
    obj.subject = data.subject;
    obj.description = data.description;
    return obj;
}

exports.getTickets = function(body) {
    return JSON.parse(body).tickets.map((x) => [x.id, x.subject, x.description])
}
