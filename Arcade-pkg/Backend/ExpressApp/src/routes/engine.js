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

router.post('/pkg',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/batchpackager.py'; //linux
    const toolpath = './tools/Arcade/batchpackager.pyc'; //linux
    // const toolpath = parent + '\\tools\\Arcade\\batchpackager.py'; //windows
    // const toolpath = 'tools\\Arcade\\batchpackager.py'; //windows 
    
    const command=[toolpath,'--startdir','/tmp/'+req.body.depsDir,'--pkgprefixes', req.body.pkgprefixes] //linux
    // const command=['-2',toolpath,'--startdir',req.body.depsDir,'--pkgprefixes',req.body.pkgprefixes] //windows
    console.log(command)

    let childProcess = require('child_process').spawn('python', command); //linux
    // let childProcess = require('child_process').spawn('py', command); //windows
    
    childProcess.stdout.on('data', function(data) {
        console.log('success : '+data.toString());
    });
    
    childProcess.stderr.on("data", function (data) {
        console.log('error : '+ data.toString());
    });

    childProcess.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated new pkg clustered file at: /tmp/' + req.body.depsDir)
      }); 
});

module.exports = router;
