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

router.post('/traintopics',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + 'tools/Mallet/mallet-2.0.7/bin/mallet'; //linux + windows
    const toolpath = './tools/Mallet/mallet-2.0.7/bin/mallet'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; 

    
    var command=['train-topics','--input','/tmp/'+req.body.topicmodelFile,'--inferencer-filename',req.body.inferencerFilename,'--use-ngrams',req.body.useNgrams,
                    '--prefix-code', req.body.prefixCode,'--random-seed', req.body.randomSeed,'--use-pam',req.body.usePam,
                    '--show-topics-interval', req.body.showTopicsInterval,'--output-model-interval', req.body.outputModelInterval,'--alpha',req.body.alpha,
                    '--output-state-interval', req.body.outputStateInterval,'--optimize-interval', req.body.optimizeInterval,'--beta',req.body.beta,
                    '--optimize-burn-in', req.body.optimizeBurnin,'--use-symmetric-alpha', req.body.useSymmetricAlpha,'--gamma',req.body.gamma,'--delta',req.body.delta,
                    '--num-top-words', req.body.numtopwords,'--num-topics', req.body.numTopics,'--num-threads',req.body.numThreads,'--delta1',req.body.delta1,
                    '--delta2',req.body.delta2,'--pam-num-supertopics',req.body.pamNumSupertopics,'--pam-num-subtopics',req.body.pamNumSubtopics,
                    '--num-iterations', req.body.numIterations, '--doc-topics-threshold', req.body.doctopicsThreshold] //linux
    // var command=['train-topics','--input', req.body.topicmodelFile,'--inferencer-filename',req.body.inferencerFilename,--use-ngrams',req.body.useNgrams,
                    // '--prefix-code', req.body.prefixCode,'--doc-topics-max', req.body.docTopicsMax,'--random-seed', req.body.randomSeed,'--use-pam',req.body.usePam,
                    // '--show-topics-interval', req.body.showTopicsInterval,'--output-model-interval', req.body.outputModelInterval,'--alpha',req.body.alpha,
                    // '--output-state-interval', req.body.outputStateInterval,'--optimize-interval', req.body.optimizeInterval,'--beta',req.body.beta,
                    // '--optimize-burn-in', req.body.optimizeBurnin,'--use-symmetric-alpha', req.body.useSymmetricAlpha,'--gamma',req.body.gamma,'--delta',req.body.delta,
                    // '--num-top-words', req.body.numtopwords,'--num-topics', req.body.numTopics,'--num-threads',req.body.numThreads,'--delta1',req.body.delta1,
                    // '--delta2',req.body.delta2,'--pam-num-supertopics',req.body.pamNumSupertopics,'--pam-num-subtopics',req.body.pamNumSubtopics,
                    // '--num-iterations', req.body.numIterations, '--doc-topics-threshold', req.body.doctopicsThreshold] //windows
        
    if (req.body.docTopicsMax > -1)
    {
        command = command.concat('--doc-topics-max', req.body.docTopicsMax); //linux      
    }

    if (req.body.languageInput.toString() !== 'null')
    {
        command = command.concat('--language-inputs', '/tmp/'+ req.body.languageInput); //linux
        // command = command.concat('--language-inputs',  req.body.languageInput); // windows
    }

    if (req.body.testing.toString() !== 'null')
    {
        command = command.concat('--testing', '/tmp/'+req.body.testing); //linux
        // command = command.concat('--testing', req.body.testing); // windows
    }

    if (req.body.outputModel.toString() !== 'null')
    {
        command = command.concat('--output-model', '/tmp/'+req.body.outputModel); //linux
        // command = command.concat('--output-model', req.body.outputModel); // windows
    }

    if (req.body.inputModel.toString() !== 'null')
    {
        command = command.concat('--input-model','/tmp/'+ req.body.inputModel); //linux 
        // command = command.concat('--input-model', req.body.inputModel); //windows        
    }

    if (req.body.evaluatorFilename.toString() !== 'null')
    {
        command = command.concat('--evaluator-filename','/tmp/'+req.body.evaluatorFilename); //linux 
        // command = command.concat('--evaluator-filename', req.body.evaluatorFilename); //windows        
    }

    if (req.body.outputState.toString() !== 'null')
    {
        command = command.concat('--output-state','/tmp/'+req.body.outputState); //linux     
        // command = command.concat('--output-state', req.body.outputState); //windows     
    }

    if (req.body.outputTopicKeys.toString() !== 'null')
    {
        command = command.concat('--output-topic-keys','/tmp/'+req.body.outputTopicKeys); //linux 
        // command = command.concat('--output-topic-keys', req.body.outputTopicKeys); //windows          
    }

    if (req.body.topicWordWeightsFile.toString() !== 'null')
    {
        command = command.concat('--topic-word-weights-file','/tmp/'+req.body.topicWordWeightsFile); //linux
        // command = command.concat('--topic-word-weights-file', req.body.topicWordWeightsFile); //windows     
    }

    if (req.body.wordTopicCountsFile.toString() !== 'null')
    {
        command = command.concat('--word-topic-counts-file',req.body.wordTopicCountsFile); //linux  
        // command = command.concat('--word-topic-counts-file', req.body.wordTopicCountsFile); //windows           
    }

    if (req.body.xmlTopicReport.toString() !== 'null')
    {
        command = command.concat('--xml-topic-report',req.body.xmlTopicReport); //linux        
        // command = command.concat('--xml-topic-report', req.body.xmlTopicReport); //windows
    }

    if (req.body.xmlTopicPhraseReport.toString() !== 'null')
    {
        command = command.concat('--xml-topic-phrase-report',req.body.xmlTopicPhraseReport); //linux  
        // command.concat('--xml-topic-phrase-report', req.body.xmlTopicPhraseReport); //windows           
    }

    if (req.body.outputDocTopics.toString() !== 'null')
    {
        command = command.concat('--output-doc-topics',req.body.outputDocTopics); //linux        
        // command.concat('--output-doc-topics', req.body.outputDocTopics); //windows
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
                    res.status(200).json('Generated new mallet topicmodel file at: /tmp/' + req.body.topicmodelFile + req.body.inferencerFilename)
      }); 
});

module.exports = router;
