var express = require('express');
var router = express.Router();
var path = require('path');


router.get ('/', async(req, res) => {
    try {       
        res.status(200);

    } catch (e) {
        res.status(400).send({error:e.message})
    }
})

router.post('/pipeextractor',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/PipeExtractor.jar'; //Linux
    const toolpath = './tools/Arcade/PipeExtractor.jar'; //Linux
    // const toolpath = parent + '\\tools\\Arcade\\PipeExtractor.jar'; //Windows
    // const toolpath = 'tools\\Arcade\\PipeExtractor.jar'; //Windows

    
    const command=['-jar',toolpath,'/tmp/'+req.body.srcDir,'/tmp/'+req.body.outputDir] //Linux
    // const command=['-jar',toolpath, req.body.srcDir, req.body.outputDir] //Windows
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
                    res.status(200).json('Generated new output.pipe file at: /tmp/' + req.body.outputDir)
      }); 
});

module.exports = router;
