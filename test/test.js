const axios = require('axios');
const expect = require('chai').expect;
const request = require('request');

describe('Hatchways_BackendAssessment', function() {
    describe('Should return correct output for Route 1: Ping', function(done) {
        request('http://localhost:3000/api/ping', function(error, response, body) {
            expect(body).to.equal('{"success":"true"}');
            done();
        });
    });

    it('Return correct status code for Route 1 when successful', function(done) {
        request('http://localhost:3000/api/ping', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
      });
      it('Return the correct status code for Route 1 when incorrect', function(done) {
        request('http://localhost:2222/api/pings', function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
      });
})