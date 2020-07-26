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

router.post('/dependencyfinderprocessing',async(req, res) => {
    res.connection.setTimeout(0);
    // const parent = path.dirname(path.dirname(__dirname))
   
    // const toolpath = parent + '/tools/Arcade/DependencyFinderProcessing_ExportJSON.jar'; //linux
    const toolpath = './tools/Arcade/DependencyFinderProcessing_ExportJSON.jar'; //linux 
    // const toolpath = parent + '\\tools\\Arcade\\DependencyFinderProcessing_ExportJSON.jar'; //windows
    // const toolpath = 'tools\\Arcade\\DependencyFinderProcessing_ExportJSON.jar'; //windows 

    const parentDir = '/tmp/'+req.body.inputDir; // linux
    // const parentDir = req.body.inputDir; // windows

    // const command=['-jar',toolpath, parentDir, parentDir + req.body.clusterDir, parentDir + req.body.depFinderDir,
    //                 parentDir + req.body.cloneDir, parentDir + req.body.logicalDepFile, req.body.packageName, 
    //                 parentDir + req.body.outputDir]  //linux
    const command=['-jar',toolpath, parentDir, req.body.clusterDir, req.body.depFinderDir,
                    req.body.cloneDir, req.body.logicalDepFile, req.body.packageName, 
                    req.body.outputDir]  //linux  //should fix this auto-concat parent dir in sourcve code.

    // const command=['-jar',toolpath, parentDir, parentDir + req.body.clusterDir, parentDir + req.body.depFinderDir,
                    // parentDir + req.body.cloneDir, parentDir + req.body.logicalDepFile, req.body.packageName, 
                    // parentDir + req.body.outputDir] //windows
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
                    res.status(200).json('Generated new interfaces_smell.csv(/json) files at: /tmp/' + req.body.outputDir)
      }); 
});

module.exports = router;
