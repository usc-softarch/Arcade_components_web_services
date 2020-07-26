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

router.post('/log',async(req, res) => {
    res.connection.setTimeout(0);
    
    // const parent = path.dirname(path.dirname(__dirname)) //windows

    //------clone repo-------
    function git_clone(callback) {   
        return new Promise (function(resolve, reject) {
            var gitclone_command=['clone', req.body.gitRepoURL,'/tmp/project'] //linux                    
            // var command=['clone', req.body.gitRepoURL,parent+'/download_project'] //windows        
            
            if (req.body.shallowSince.toString() !== 'null')
            {
                gitclone_command = gitclone_command.concat('--shallow-since', req.body.shallowSince); 
            }

            console.log(gitclone_command)
            
            let childProcess_gitclone = require('child_process').spawnSync('git', gitclone_command, {
                // stdout: 'pipe',
                // stderr: 'pipe',                       
                // encoding: 'utf-8'
            });        

            console.log(childProcess_gitclone.stdout +'\n'+ childProcess_gitclone.stderr);

            console.log("Clone project success!");

            // callback();
            resolve();
        })
    }

    //------git log in clone repo-------
    function git_log(){
        var gitlog_command=['log'] 
        // var test_command = "log --all --numstat --date=short --pretty=format:--%h--%ad--%aN --no-renames";   
                   
        if (req.body.follow.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--follow'); 
        }

        if (req.body.source.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--source'); 
        }

        if (req.body.fulldiff.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--full-dif'); 
        }

        if (req.body.logsize.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--log-size'); 
        }

        if (req.body.all.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--all'); 
        }

        if (req.body.numstat.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--numstat'); 
        }

        if (req.body.norenames.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--no-renames'); 
        }

        if (req.body.allmatch.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--all-match'); 
        }

        if (req.body.invertgrep.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--invert-grep'); 
        }

        if (req.body.regexpIgnorecase.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--regexp-ignore-case'); 
        }

        if (req.body.basicRegexp.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--basic-regexp'); 
        }

        if (req.body.extendedRegexp.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--extended-regexp'); 
        }

        if (req.body.fixedstrings.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--fixed-strings'); 
        }

        if (req.body.perlRegexp.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--perl-regexp'); 
        }

        if (req.body.removeEmpty.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--remove-empty'); 
        }

        if (req.body.merges.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--merges'); 
        }

        if (req.body.nominParents.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--no-min-parents'); 
        }

        if (req.body.nomaxParents.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--no-max-parents'); 
        }

        if (req.body.firstParent.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--first-parent'); 
        }

        if (req.body.reflog.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--reflog'); 
        }

        if (req.body.alternateRefs.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--alternate-refs'); 
        }

        if (req.body.singleworktree.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--single-worktree'); 
        }

        if (req.body.ignoremissing.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--ignore-missing'); 
        }

        if (req.body.boundary.toString() !== "false")
        {
            gitlog_command = gitlog_command.concat('--boundary'); 
        }
        
        if (req.body.optionalParams.toString() !== 'null')
        {                       
            gitlog_command = gitlog_command.concat(req.body.optionalParams.split(" ")); 
        }

        console.log(gitlog_command)
        
        // console.log('all:'+req.body.all)
        // console.log('numstat:'+req.body.numstat)
        // console.log('numstat:'+req.body.norenames)

        var working_dir = '/tmp/project';//linux
        // var working_dir = parent+'/download_project';//windows
        
        let childProcess_gitlog = require('child_process').spawnSync('git', gitlog_command, {
            cwd:working_dir,            
            on: res.status(200).json('Generated git log file to /tmp/project.log')
        }); //linux

        var gitlogFile = fs.openSync('/tmp/project.log', 'w'); //linux
        console.log(childProcess_gitlog.stdout);       
        fs.writeFileSync(gitlogFile,childProcess_gitlog.stdout);
        
        // var gitlogFile = fs.openSync(parent + '\\output\\project.log', 'w'); //windows
        // let childProcess_gitlog = require('child_process').spawnSync('git', command, {
        //     stdio: [process.stdin, gitlogFile, process.stderr],
        //     on: res.status(200).json('Generated git log file to /tmp/project.log')
        // }); //windows       
        
        fs.closeSync(gitlogFile)

        console.log("Retrieve git log success!");
    }
    //------remove clone repo-------
    function gitrepo_remove(){        
        var clone_dir = '/tmp/project'; //linux
        // var clone_dir = parent+'/download_project'; //windows

        //only work in node12 experiments
        // fs.rmdirSync(clone_dir, { recursive: true });
        // console.log("Remove clone project success!");

        var rimraf = require("rimraf");
        rimraf(clone_dir, function () { console.log("Remove clone project success!"); });        
    }
    git_clone().then(git_log).then(gitrepo_remove) 
    
});

module.exports = router;