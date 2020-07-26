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

router.post('/importfile',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; //linux + windows
    const toolpath = './tools/Mallet/mallet-2.0.7/bin/mallet'; //linux
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['import-file','--input','/tmp/'+req.body.inputFile,'--prefix-code', req.body.prefixCode,    
                    '--line-regex',req.body.lineRegex,'--label', req.body.label,'--name', req.body.name,'--data', req.body.data,
                    '--keep-sequence',req.body.keepSequence,'--keep-sequence-bigrams', req.body.keepSequenceBigrams,
                    '--remove-stopwords',req.body.removeStopwords,'--preserve-case', req.body.preserveCase,'--encoding', req.body.encoding,
                    '--token-regex', req.body.tokenRegex,'--print-output', req.body.printOutput,  
                    '--output', '/tmp/'+req.body.outputFile] //linux
                    
    // var command=['import-file','--input',req.body.inputFile,'--prefix-code', req.body.prefixCode,    
                    // '--line-regex',req.body.lineRegex,'--label', req.body.label,'--name', req.body.name,'--data', req.body.data,
                    // '--keep-sequence',req.body.keepSequence,'--keep-sequence-bigrams', req.body.keepSequenceBigrams,
                    // '--remove-stopwords',req.body.removeStopwords,'--preserve-case', req.body.preserveCase,'--encoding', req.body.encoding,
                    // '--token-regex', req.body.tokenRegex,'--print-output', req.body.printOutput,  
                    // '--output',req.body.outputFile] //windows

    if (req.body.usePipefromFile.toString() !== 'null')
    {
        command =command.concat('--use-pipe-from', '/tmp/'+req.body.usePipefromFile); //linux
        // command =command.concat('--use-pipe-from', req.body.usePipefromFile); // windows
    }                    

    if (req.body.stoplistFile.toString() !== 'null')
    {
        command =command.concat('--stoplist-file', '/tmp/'+ req.body.stoplistFile); //linux
        // command =command.concat('--stoplist-file',  req.body.stoplistFile); // windows
    }

    if (req.body.extraStopwords.toString() !== 'null')
    {
        command =command.concat('--extra-stopwords', '/tmp/'+req.body.extraStopwords); //linux
        // command =command.concat('--extra-stopwords', req.body.extraStopwords); // windows
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
                    res.status(200).json('Generated new instance list file at: /tmp/' + req.body.outputFile)
      }); 
});

module.exports = router;
