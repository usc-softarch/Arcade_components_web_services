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

router.post('/split',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; //linux + windows
    const toolpath = './tools/Mallet/mallet-2.0.7/bin/mallet'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['split','--input','/tmp/'+req.body.inputFile,'--output', '/tmp/'+ req.body.outputFile,
                    '--prefix-code', req.body.prefixCode,'--training-portion',req.body.trainingPortion,'--validation-portion',req.body.validationPortion,
                    '--random-seed', req.body.randomSeed,'--prune-infogain', req.body.pruneInfogain,'--prune-count', req.body.pruneCount,
                    '--vector-to-sequence', req.body.vectorToSequence,'--hide-targets', req.body.hideTargets,'--reveal-targets', req.body.revealTargets] //linux   
                   
    // var command=['split','--input',req.body.inputFile,'--output', req.body.outputFile,
                    // '--prefix-code', req.body.prefixCode,'--training-portion',req.body.trainingPortion,'--validation-portion',req.body.validationPortion,
                    // '--random-seed', req.body.randomSeed,'--prune-infogain', req.body.pruneInfogain,'--prune-count', req.body.pruneCount,
                    // '--vector-to-sequence', req.body.vectorToSequence,'--hide-targets', req.body.hideTargets,'--reveal-targets', req.body.revealTargets]  //windows        
  
    if (req.body.trainingFile.toString() !== 'null')
    {
        command = command.concat('--training-file', '/tmp/'+ req.body.trainingFile); //linux
        // command = command.concat('--training-file',  req.body.trainingFile); // windows
    }
    
    if (req.body.testingFile.toString() !== 'null')
    {
        command = command.concat('--testing-file', '/tmp/'+ req.body.testingFile); //linux
        // command = command.concat('--testing-file',  req.body.testingFile); // windows
    }

    if (req.body.validationFile.toString() !== 'null')
    {
        command = command.concat('--validation-file', '/tmp/'+ req.body.validationFile); //linux
        // command = command.concat('--validation-file',  req.body.validationFile); // windows
    }   
    
    console.log(command)

    // let childProcess = require('child_process').exec(toolpath, command);  //linux
    let childProcess = require('child_process').spawn(toolpath, command);  //windows
    
    childProcess.stdout.on('data', function(data) {
        console.log('success : '+data.toString());
    });
    
    childProcess.stderr.on("data", function (data) {
        console.log('logging : '+ data.toString());
    });

    childProcess.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated new Mallet Split output file at: /tmp/' + req.body.outputFile)
      }); 
});

module.exports = router;
