const shell = require('shelljs')

const p = JSON.parse(shell.env.npm_config_argv).original
console.log()

if (shell.exec(`git commit --amend --date="Thu Mar ${p.pop()} 13:14:50 2020 -0700"`) !== 0) {
    shell.exit(1)
}

if (shell.exec('git pull') !== 0) {
    shell.exit(1)
}


if (shell.exec('git push') !== 0) {
    shell.exit(1)
}

shell.echo('over~')