const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#12BDF3").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#12BDF3").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#12BDF3").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#66CDAA").bold('[ CYBER-CAT ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#5F9EA0").bold('[ EMon-BHai ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#87CEFA").bold(`[ CYBER-CAT ] » `) + data);
			break;
	}
	}