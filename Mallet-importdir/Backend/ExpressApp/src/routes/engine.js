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

router.post('/topicmodel',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; //linux + windows
    const toolpath = './tools/Mallet/mallet-2.0.7/bin/mallet'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['import-dir','--input','/tmp/'+req.body.srcDir,'--remove-stopwords',req.body.removeStopwords,'--keep-sequence',req.body.keepSequence,
                    '--prefix-code', req.body.prefixCode,'--preserve-case', req.body.preserveCase,'--skip-header', req.body.skipHeader,
                    '--skip-html', req.body.skipHtml,'--binary-features', req.body.binaryFeatures,'--gram-sizes', req.body.gramSizes,
                    '--keep-sequence-bigrams', req.body.keepSequenceBigrams,'--save-text-in-source', req.body.saveTextinSource,
                    '--encoding', req.body.encoding,'--token-regex', req.body.tokenRegex,'--print-output', req.body.printOutput,
                    '--output', '/tmp/'+req.body.outputFile] //linux
                    
    // const command=[toolpath,'import-dir','--input',req.body.srcDir,'--remove-stopwords',req.body.removeStopwords,'--keep-sequence',req.body.keepSequence,
                    // '--prefix-code', req.body.prefixCode,'--preserve-case', req.body.preserveCase,'--skip-header', req.body.skipHeader,
                    // '--skip-html', req.body.skipHtml,'--binary-features', req.body.binaryFeatures,'--gram-sizes', req.body.gramSizes,
                    // '--keep-sequence-bigrams', req.body.keepSequenceBigrams,'--save-text-in-source', req.body.saveTextinSource,
                    // '--encoding', req.body.encoding,'--token-regex', req.body.tokenRegex,'--print-output', req.body.printOutput,
                    // '--output',req.body.outputFile] //windows

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

    if (req.body.usePipefromFile.toString() !== 'null')
    {
        command =command.concat('--use-pipe-from', '/tmp/'+req.body.usePipefromFile); //linux
        // command =command.concat('--use-pipe-from', req.body.usePipefromFile); // windows
    }

    if (req.body.stringPipe.toString() !== 'null')
    {
        command =command.concat('--string-pipe', req.body.stringPipe); //linux       
    }

    if (req.body.tokenPipe.toString() !== 'null')
    {
        command =command.concat('--token-pipe',req.body.tokenPipe); //linux        
    }

    if (req.body.fvPipe.toString() !== 'null')
    {
        command =command.concat('--fv-pipe',req.body.fvPipe); //linux        
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
                    res.status(200).json('Generated new mallet topicmodel file at: /tmp/' + req.body.outputFile)
      }); 
});

module.exports = router;
