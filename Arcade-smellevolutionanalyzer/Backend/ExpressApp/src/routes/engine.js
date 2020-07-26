var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


router.get ('/', async(req, res) => {
    try {       
        res.status(200);

    } catch (e) {
        res.status(400).send({error:e.message})
    }
})

router.post('/smellevolutionanalyzer',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/SmellEvolutionAnalyzer.jar';//linux
    const toolpath = './tools/Arcade/SmellEvolutionAnalyzer.jar';//linux
    // const toolpath = parent + '\\tools\\Arcade\\SmellEvolutionAnalyzer.jar';//windows
    // const toolpath = 'tools\\Arcade\\SmellEvolutionAnalyzer.jar';//windows

    
    const command=['-jar',toolpath,'/tmp/'+req.body.smellsDir]//linux
    // const command=['-jar',toolpath, req.body.smellsDir]//windows
    console.log(command)

    var s = fs.openSync('/tmp/Smell_Evolution_Analyzer_output.log', 'w'); //linux
    let childProcess = require('child_process').spawn('java', command, {stdio: [process.stdin, s, process.stderr]}); //linux

    // var s = fs.openSync('Smell_Evolution_Analyzer_output.log', 'w'); //windows
    // var s = fs.openSync(parent + '\\output\\Smell_Evolution_Analyzer_output.log', 'w'); //windows
    // let childProcess = require('child_process').spawn('java', command, {stdio: [process.stdin, s, process.stderr]}); //windows 
   

    childProcess.on('exit', function (code, signal) {
        fs.closeSync(s);
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated Smell Evolution Analyzer file at: /tmp/Smell_Evolution_Analyzer_output.log')
      }); 
});

module.exports = router;
