let expect  = require("chai").expect;
let request = require("request");

describe("Add number and number", function() {
    let url = "http://localhost:3000/addTwoNumbers/-3/10";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });
    it("returns the result equal to 7", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.equal(7);
            done()
          });
    });
    it("returns the result not equal to 10", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.not.equal(10);
            done()
          });
    });
  });

  describe("Add string and string", function() {
    let url = "http://localhost:3000/addTwoNumbers/a/b";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });
  });

  describe("Add string and number", function() {
    let url = "http://localhost:3000/addTwoNumbers/a/5";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });
  });

  describe("Add string and speacial character", function() {
    let url = "http://localhost:3000/addTwoNumbers/a/*";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });
  });

  describe("Validate Projects api", function() {
    var url = "http://localhost:3000/api/project";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as array", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.data).to.be.a('array');
            done()
          });
    });
  });