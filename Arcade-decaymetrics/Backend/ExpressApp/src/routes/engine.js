var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var command=[];

router.get ('/', async(req, res) => {
    try {       
        res.status(200);

    } catch (e) {
        res.status(400).send({error:e.message})
    }
})

router.post('/decaymetrics',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/';//linux
    const toolpath = './tools/Arcade/';//linux
    // const toolpath = parent + '\\tools\\Arcade\\';    //windows
    // const toolpath = 'tools\\Arcade\\';    //windows 
    
    command=['-jar',toolpath+'DecaymetricsAnalyzer.jar','/tmp'+req.body.depsDir,'/tmp'+req.body.clusterDir]//linux
    // command =['-jar',toolpath+'DecaymetricsAnalyzer.jar',req.body.depsDir,req.body.clusterDir]//windows
    
    console.log(command)

    let childProcess = require('child_process').spawn('java', command);
    
    childProcess.stdout.on('data', function(data) {
        console.log('success : '+data.toString());
    });
    
    childProcess.stderr.on("data", function (data) {
        console.log('error : '+ data.toString());
    });

    childProcess.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    fs.createReadStream('logs/root.log').pipe(fs.createWriteStream('/tmp/Decay_Metrics_Analyzer_output.log'));//linux
                    // fs.createReadStream('logs/root.log').pipe(fs.createWriteStream(parent + '/output/root.log'));//windows
                    res.status(200).json('Generated new Decay Metrics Analyzer output file at: /tmp/Decay_Metrics_Analyzer_output.log')
      }); 
});

module.exports = router;


