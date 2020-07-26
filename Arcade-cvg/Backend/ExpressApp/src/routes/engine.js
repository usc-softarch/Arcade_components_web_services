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

router.post('/cvg',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/simevolanalyzer.py'; //linux
    const toolpath = './tools/Arcade/simevolanalyzer.pyc'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\simevolanalyzer.py'; //windows
    // const toolpath = parent + '\\tools\\Arcade\\simevolanalyzer.py'; //windows
    
    const command=[toolpath,'--inputdir','/tmp/'+req.body.clusterDir] //linux
    // const command=['-2',toolpath,'--inputdir',req.body.clusterDir] //windows
    console.log(command)

    var s = fs.openSync('/tmp/cvg.log', 'w'); //linux
    let childProcess = require('child_process').spawn('python', command, {stdio: [process.stdin, s, process.stderr]}); //linux
    
    // var s = fs.openSync(req.body.clusterDir + '\\cvg.log', 'w'); //windows
    // let childProcess = require('child_process').spawn('py', command, {stdio: [process.stdin, s, process.stderr]}); //windows   
   
    childProcess.on('exit', function (code, signal) {
        fs.closeSync(s);        
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated new cvg output at: /tmp/cvg.log')
      }); 
});

module.exports = router;
