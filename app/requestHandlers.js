const fetchDependencies = require("./dependencyResolver").fetchDependencies;
const registry = require('./registry');


function resolvePackage(parsedUrl, outResponse) {
    console.log("Request Handler package called.");
    let query = parsedUrl.query;
    if (parsedUrl.query.name) {
        fetchDependencies(registry, query.name, query.version || 'latest', function (results) {
            outResponse.writeHead(200, {"Content-Type": "application/json"});
            outResponse.write(JSON.stringify(results));
            outResponse.end();
        });

    } else {
        outResponse.writeHead(500);
        outResponse.write("Failed with no package name");
        outResponse.end();
    }
}

function health(parsedUrl, response) {
    response.writeHead(200);
    response.write("OK");
    response.end();
}




exports.resolvePackage = resolvePackage;
exports.health = health;