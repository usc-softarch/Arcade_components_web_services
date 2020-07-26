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

router.post('/hlda',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; //linux + windows
    const toolpath = './tools/Mallet/mallet-2.0.7/bin/mallet'; //linux
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['hlda','--input','/tmp/'+req.body.inputFile,
                    '--prefix-code', req.body.prefixCode,'--random-seed', req.body.randomSeed,'--show-progress', req.body.showProgress,
                    '--show-topics-interval', req.body.showTopicsInterval,'--num-top-words', req.body.numtopwords,
                    '--num-levels', req.body.numLevels,'--alpha',req.body.alpha,'--gamma',req.body.gamma,'--eta',req.body.eta] //linux
                    
    // var command=['hlda','--input',req.body.inputFile,
                    // '--prefix-code', req.body.prefixCode,'--random-seed', req.body.randomSeed,'--show-progress', req.body.showProgress,
                    // '--output-model-interval', req.body.outputModelInterval,'--num-top-words', req.body.numtopwords,
                    // '--num-levels', req.body.numLevels,'--alpha',req.body.alpha,'--gamma',req.body.gamma,'--eta',req.body.eta] //linux//windows
        
    
    if (req.body.outputState.toString() !== 'null')
    {
        command = command.concat('--output-state','/tmp/'+req.body.outputState); //linux     
        // command = command.concat('--output-state', req.body.outputState); //windows     
    }    

    if (req.body.testingFile.toString() !== 'null')
    {
        command = command.concat('--testing','/tmp/'+req.body.testingFile); //linux 
        // command = command.concat('--testing',req.body.testingFile); //windows          
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
                    res.status(200).json('Generated new mallet hlda file at: /tmp/' + req.body.outputState)
      }); 
});

module.exports = router;
