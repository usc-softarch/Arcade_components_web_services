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

router.post('/infertopics',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; //linux + windows
    const toolpath = './tools/Mallet/mallet-2.0.7/bin/mallet'; //linux
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['infer-topics','--input','/tmp/'+req.body.inputFile,'--output-doc-topics','/tmp/'+req.body.outputDocTopics,
                    '--prefix-code', req.body.prefixCode,'--random-seed', req.body.randomSeed,'--inferencer', '/tmp/'+req.body.inferencerFilename,
                    '--num-iterations', req.body.numIterations,'--sample-interval', req.body.sampleInterval,
                    '--burn-in', req.body.burnIn] //linux
                   
    // var command=['infer-topics','--input',req.body.inputFile,'--output-doc-topics',req.body.outputDocTopics,
                    // '--prefix-code', req.body.prefixCode,'--random-seed', req.body.randomSeed,
                    // '--num-iterations', req.body.numIterations,'--sample-interval', req.body.sampleInterval,'--burn-in', 
                    // req.body.burnIn] //windows
        
    if (req.body.docTopicsMax > -1)
    {
        command = command.concat('--doc-topics-max', req.body.docTopicsMax); //linux      
    }

    // if (req.body.inferencerFilename.toString() !== 'null')
    // {
    //     command = command.concat('--inferencer', '/tmp/'+req.body.inferencerFilename); //linux
    //     // command = command.concat('--inferencer', req.body.inferencerFilename); // windows
    // }
        
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
                    res.status(200).json('Generated new inferred topic file at: /tmp/' + req.body.outputDocTopics)
      }); 
});

module.exports = router;
