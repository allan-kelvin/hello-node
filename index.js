import inquirer from "inquirer";

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'nome',
            message: 'Qual seu nome?',
        },{
            type:'list',
            name: 'idade',
            message: 'Qual sua idade?',
            choices: [
                '29 á 39',
                '40 a 50',
                '50 ou +'
            ]
        }
    ]
).then((ansers)=>{
    console.log(
        `Oi ${ansers.nome}, com a idade de: ${ansers.idade} anos`
    )
});