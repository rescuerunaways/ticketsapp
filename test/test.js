var parser = require('./../util/parser')

var should = require('should');

describe('getTicket tests', function(){
        var ticket=  '{"ticket":{"id":2,"external_id":null,"type":null,"description":"description-value","fields":[],"brand_id":7057327,"allow_channelback":false}}'
        it('description is parsed', function(){
          console.log(parser.getTicket(ticket))
          parser.getTicket(ticket)["description"].should.equal("description-value");
        })
})
