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

router.post('/sed',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
    
    var command=[req.body.sedCommand]     

    if (req.body.extendedRegex.toString() !== "null")
    {
        command = command.concat('-r', req.body.extendedRegex); 
    }

    if (req.body.sedCommandFile.toString() !== "null")
    {
        command = command.concat('-f', req.body.sedCommandFile); 
    }

    command = command.concat('/tmp/'+req.body.inputFile); //linux
    // command = command.concat(req.body.inputFile); //windows

    console.log(command)

    var s = fs.openSync('/tmp/sed_output.log', 'w'); //linux
    let childProcess = require('child_process').spawn('sed', command, {stdio: [process.stdin, s, process.stderr]}); //linux
    // fs.closeSync(s);

    // var s = fs.openSync(parent + '\\output\\sed_output.log', 'w'); //windows
    // let childProcess = require('child_process').spawn('sed', command, {stdio: [process.stdin, s, process.stderr]}); //windows 
    
    childProcess.on('exit', function (code, signal) {
        fs.closeSync(s);
        console.log('child process exited with ' + `code ${code} and signal ${signal}`);
            res.status(200).json('Generated sed output file /tmp/sed_output.log')
    }); 
});

module.exports = router;
