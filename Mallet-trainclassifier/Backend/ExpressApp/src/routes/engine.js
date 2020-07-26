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

router.post('/trainclassifier',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; //linux + windows
    const toolpath = './tools/Mallet/mallet-2.0.7/bin/mallet'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['train-classifier','--input','/tmp/'+req.body.inputFile,'--prefix-code', req.body.prefixCode,'--report', req.body.report,
                    '--trainer', req.body.trainer,'--training-portion',req.body.trainingPortion,'--validation-portion',req.body.validationPortion,
                    '--unlabeled-portion',req.body.unlabeledPortion,'--random-seed', req.body.randomSeed,'--num-trials',req.body.numTrials,
                    '--classifier-evaluator', req.body.classifierEvaluator,'--verbosity',req.body.verbosity,'--noOverwriteProgressMessages',req.body.noOverwriteProgressMessages,
                    '--cross-validation', req.body.crossValidation,'--output-classifier', '/tmp/'+req.body.outputClassifier] //linux
                   
    // var command=['train-classifier','--input',req.body.inputFile,'--prefix-code', req.body.prefixCode,'--report', req.body.report,
                    // '--trainer', req.body.trainer,'--training-portion',req.body.trainingPortion,'--validation-portion',req.body.validationPortion,
                    // '--unlabeled-portion',req.body.unlabeledPortion,'--random-seed', req.body.randomSeed,'--num-trials',req.body.numTrials,
                    // '--classifier-evaluator', req.body.classifierEvaluator,'--verbosity',req.body.verbosity,'--noOverwriteProgressMessages',req.body.noOverwriteProgressMessages,
                    // '--cross-validation', req.body.crossValidation,'--output-classifier', req.body.outputClassifier]  //windows        
  
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
                    res.status(200).json('Generated new Classifier file at: /tmp/' + req.body.outputClassifier)
      }); 
});

module.exports = router;
