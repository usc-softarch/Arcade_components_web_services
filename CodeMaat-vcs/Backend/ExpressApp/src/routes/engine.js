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

router.post('/vcs',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; // windows
    const toolpath = './tools/CodeMaat/code-maat-1.0.jar'; //linux
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['-jar',toolpath,'-l','/tmp/'+req.body.inputLogFile,'-o', '/tmp/'+req.body.outputFile,'-c', req.body.versionControlType,
                    '-a', req.body.analysis,'--input-encoding', req.body.inputEncoding,'-r', req.body.maxRows,
                    '-n', req.body.minRevisions,'-m', req.body.minSharedRevisions,'-i', req.body.minCouplings,
                    '-x', req.body.maxCouplings,'-s', req.body.maxChangeSetSize] //linux
                    
    // var command=['-jar', toolpath, '-l',req.body.inputLogFile,'-o', req.body.outputFile,'-c', req.body.versionControlType,
    //                 '-a', req.body.analysis,'--input-encoding', req.body.inputEncoding,'-r', req.body.maxRows,
    //                 '-n', req.body.minRevisions,'-m', req.body.minSharedRevisions,'-i', req.body.minCouplings,
    //                 '-x', req.body.maxCouplings,'-s', req.body.maxChangeSetSize] //windows
                        
    
    if (req.body.groupFile.toString() !== 'null')
    {
        command = command.concat('-g','/tmp/'+req.body.groupFile); //linux     
        // command = command.concat('-g',req.body.groupFile);  //windows     
    }    

    if (req.body.regex.toString() !== 'null')
    {
        command = command.concat('-e',req.body.regex);              
    }

    if (req.body.temporalPeriod.toString() !== 'null')
    {
        command = command.concat('-t', 1);              
    }

    if (req.body.agetimeNow.toString() !== "0")
    {
        command = command.concat('-d', req.body.agetimeNow);             
    }
    
    console.log(command)

    let childProcess = require('child_process').spawn('java', command);  
    
    childProcess.stdout.on('data', function(data) {
        console.log('success : '+data.toString());
    });
    
    childProcess.stderr.on("data", function (data) {
        console.log('logging : '+ data.toString());
    });

    childProcess.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated new Code Maat statistics file at: /tmp/' + req.body.outputFile)
      }); 
});

module.exports = router;
