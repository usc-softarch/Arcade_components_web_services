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

router.post('/c2caverageanalyze',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/C2cAverageAnalyze.jar';  //linux
    const toolpath = './tools/Arcade/C2cAverageAnalyze.jar';  //linux
    // const toolpath = parent + '\\tools\\Arcade\\C2cAverageAnalyze.jar';  //windows
    // const toolpath = 'tools\\Arcade\\C2cAverageAnalyze.jar';  //windows
    
    const command=['-jar',toolpath,'/tmp/'+req.body.cvglogFile]  //linux
    // const command=['-jar',toolpath, req.body.cvglogFile]  //windows
    console.log(command)

    var s = fs.openSync('/tmp/c2caverageanalyze_output.log', 'w'); //linux
    let childProcess = require('child_process').spawn('java', command, {stdio: [process.stdin, s, process.stderr]}); //linux

    // var s = fs.openSync('c2caverageanalyze_output.log', 'w'); // windows pkg
    // var s = fs.openSync(parent + '\\output\\c2caverageanalyze_output.log', 'w'); //windows
    // let childProcess = require('child_process').spawn('java', command, {stdio: [process.stdin, s, process.stderr]}); //windows  

    childProcess.on('exit', function (code, signal) {
        fs.closeSync(s);
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated c2c average analyze output at: /tmp/c2caverageanalyze_output.log')
      }); 
});

module.exports = router;
