var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


router.get ('/', async(req, res) => {
    try {       
        res.status(200);

    } catch (e) {
        res.status(400).send({error:e.message})
    }
})

router.post('/arc',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/BatchClusteringEngine.jar'; //linux
    const toolpath = './tools/Arcade/BatchClusteringEngine.jar'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\BatchClusteringEngine.jar'; //windows
    // const toolpath = 'tools\\Arcade\\BatchClusteringEngine.jar'; //windows 

    
    const command=['-jar',toolpath,'/tmp/'+req.body.srcDir,'/tmp/'+ req.body.outputDir, req.body.classDir ]  //linux
    // const command=['-jar',toolpath, req.body.srcDir, req.body.outputDir, req.body.classDir] //windows
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
                    res.status(200).json('Generated a2a output to /tmp/' + req.body.outputDir)
      }); 
});

module.exports = router;
