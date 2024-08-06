#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name:string;
    constructor(name:string){
        this.name = name;

    }
}
class AddStudent{
    students: Student[]=[];
    addStu(name:Student){
        this.students.push(name)
    }
}
let addStu = new AddStudent()
let user = await inquirer.prompt([{
    name:"name",
    type:"input",
    message:chalk.blueBright.italic("\nWhat is your name?")
}])
console.log(chalk.bold.italic.cyanBright(`\n<<<<<<<< WELCOME ${user.name.toUpperCase()} >>>>>>>>\n`));

 let programBegin = async function (addStu:AddStudent) {
    while (true) {
        
        let user = await inquirer.prompt({
            name:"greet",
            type:"list", 
            message:chalk.blueBright.italic("\nWho would you like to meet up with?"),
            choices:["Staff", "Student", "Exit"]
        })
        let meetWith = user.greet;

        if(meetWith == "Staff"){
            console.log(chalk.greenBright.italic('You can have a word with the Teacher!'));
            console.log(chalk.blueBright.italic("\nHello! Sir/Madam, What are your Queries?"));
        }
        else if (meetWith == "Student"){
            let student = await inquirer.prompt({
                name:"name", 
                type:"input",
                message:chalk.blueBright.italic("\nWhat is the name of the Student?")
            })
            console.log(chalk.greenBright.italic('\nYou can have a word with the Student!'));

            const studentName = student.name;
            addStu.addStu(studentName);
            console.log(chalk.blueBright.italic(`\nHello! I'm ${studentName}.`));
            console.log(chalk.blueBright.italic(`Nice to meet you!`));
            console.log(chalk.greenBright.italic(`\nStudents List: ${addStu.students}`))
         
        }
        else{
            console.log(chalk.greenBright.italic(`\nTHANKS FOR VISITING!`))
            break

        }
        
    }

}(addStu)



