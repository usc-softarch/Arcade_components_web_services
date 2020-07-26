var express = require('express');
var router = express.Router();
var path = require('path');

var command=[];

router.get ('/', async(req, res) => {
    try {       
        res.status(200);

    } catch (e) {
        res.status(400).send({error:e.message})
    }
})


router.post('/depsBuilder',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/';//Acdc.jar' //linux
    const toolpath = './tools/Arcade/';//Acdc.jar' //linux
    // const toolpath = parent + '\\tools\\Arcade\\';    // windows
    // const toolpath = 'tools\\Arcade\\';    // windows

    if (req.body.language.toString() === 'java')
         command=['-jar',toolpath+'JavaDepsBuilder.jar','/tmp'+req.body.classpath,'/tmp'+req.body.depsFile] //linux
        // command =['-jar',toolpath+'JavaDepsBuilder.jar',req.body.classpath,req.body.depsFile] //windows
    else
         command=['-jar',toolpath+'CDepsBuilder.jar','/tmp'+req.body.srcDir,'/tmp'+req.body.depsFile] //linux
        // command=['-jar',toolpath+'CDepsBuilder.jar',req.body.srcDir,req.body.depsFile] //windows

    console.log(command)

    let childProcess = require('child_process').spawn('java', command);
    
    childProcess.stdout.on('data', function(data) {
        console.log('success : '+data.toString());
    });
    
    childProcess.stderr.on("data", function (data) {
        console.log('error : '+ data.toString());
    });

    childProcess.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
                    res.status(200).json('Generated new deps file at: /tmp' + req.body.depsFile)
      }); 
});

module.exports = router;


