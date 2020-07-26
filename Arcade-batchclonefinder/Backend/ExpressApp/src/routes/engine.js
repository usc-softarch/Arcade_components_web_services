var express = require('express');
var router = express.Router();
var path = require('path');
// var fs = require('fs');


router.get ('/', async(req, res) => {
    try {       
        res.status(200);

    } catch (e) {
        res.status(400).send({error:e.message})
    }
})

router.post('/batchclonefinder',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/BatchCloneFinder.jar'; //linux
    const toolpath = './tools/Arcade/BatchCloneFinder.jar'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\BatchCloneFinder.jar'; //windows
    // const toolpath = 'tools\\Arcade\\BatchCloneFinder.jar'; //windows 
    
    const command=['-jar',toolpath,'/tmp/'+req.body.inputDir,'/tmp/'+req.body.outputDir]  //linux
    // const command=['-jar',toolpath, req.body.inputDir, req.body.outputDir] //windows
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
                    res.status(200).json('Generated new clustered file at: /tmp/' + req.body.outputDir)
      }); 
});

module.exports = router;
