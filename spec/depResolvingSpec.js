var request = require("request");
const fetchDependencies = require("../app/dependencyResolver").fetchDependencies;
const registry = require('./mockRegistry');

var base_url = "http://localhost:8888/";

describe("Test Server health", function() {
    var server;
    beforeAll(() => {
        server = require("../app");
    });
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                console.log(error);
                console.log(body);
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });
});

describe("Test simple package dependencies resolution", function () {

    it('should return all nested dependencies', function (done) {
        fetchDependencies(registry, 'root', 'latest', function (results) {
            expect(results).toEqual(['root']);
            done();
        })
    });
})