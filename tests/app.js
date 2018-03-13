const app = require('../app.js');
const supertest = require('supertest');
const assert = require('chai').assert;

describe('app', function() {
    it('should not throw', function(done) {
        supertest(app)
        .get('/artist/madonna')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(function(res) {
            assert.equal(res.body.message.header.status_code, 200);
        })
        .end(done);
    });
});
