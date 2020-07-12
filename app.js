var newman = require('newman'); 

newman.run({
    collection: require('./PostmanCollection/Demo-RestAPI.postman_collection.json'),
    environment: require('./PostmanEnvironment/ST2.postman_environment.json'),
    reporters: ['html','cli'],
    reporter : { html : { export : './report/htmlReport.html'}},
    insecure: true, // allow self-signed certs, required in postman too
    timeout: 180000  // set time out
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        console.log('collection run completed.');
    }
});