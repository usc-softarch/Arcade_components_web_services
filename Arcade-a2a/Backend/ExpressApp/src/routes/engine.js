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

router.post('/a2a',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/BatchSystemEvo.jar'; //linux
    const toolpath = './tools/Arcade/BatchSystemEvo.jar'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\BatchSystemEvo.jar'; //windows
    // const toolpath = 'tools\\Arcade\\BatchSystemEvo.jar'; //windows 

    
    const command=['-jar',toolpath,'/tmp/'+req.body.clusteredDir,'-distopt',req.body.distOp]  //linux
    // const command=['-jar',toolpath, req.body.clusteredDir,'-distopt', req.body.distOp] //windows
    console.log(command)

    var s = fs.openSync('/tmp/a2a_output.log', 'w'); //linux
    let childProcess = require('child_process').spawn('java', command, {stdio: [process.stdin, s, process.stderr]}); //linux

    // var s = fs.openSync(parent + '\\output\\a2a_output.log', 'w'); //windows
    // let childProcess = require('child_process').spawn('java', command, {stdio: [process.stdin, s, process.stderr]}); //windows 
    
    childProcess.on('exit', function (code, signal) {
        fs.closeSync(s);
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated a2a output to /tmp/a2a_output.log')
      }); 
});

module.exports = router;
