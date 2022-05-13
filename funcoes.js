const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

async function solicitarOperacoes() {
   await inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Escolha o serviço: ",
            choices: [
                "Criar Conta",
                "Consultar Saldo",
                "Depositar",
                "Sacar",
                "Sair",
            ],
        })
        .then((resposta) => {
            const action = resposta["action"];

            if (action === "Criar Conta");
        });
}



function exibirMensagensAoCriarConta() {
    console.log(chalk.bgRed.black(`Parabéns por escolher nosso banco.`));
    console.log(chalk.green("Defina as opções da sua conta: "));
}




function criarConta() {
    inquirer
        .prompt({
            name: "nomeDaConta",
            message: "Digite um nome para conta: ",
        })
        .then((resp) => {
            const nomeDaConta = resp["nomeDaConta"];
            console.info(`Conta de nome: ${nomeDaConta}`);
        });
}




function validarConta() {
    if (!fs.existsSync("db_contas")) fs.mkdirSync("db_contas");

    if (fs.existsSync(`db_contas/${criarConta.name}.json`)) {
        console.log(chalk.bgRed.black("Conta já existe, escolha outro nome."));
    }
}




function criarArquivoDeConta() {
    const arquivo = fs.writeFileSync(
        `db_contas/${criarConta.name}.json`,
        "(balance: 0)",
        (err) => {
            console.log(`Erro: ${err}`);
        }
    );
    return arquivo;
}



// async function continuarServicos() {
//     await inquirer.prompt({
//         name: "action",
//         message: "quer continuar usando os servicos?",
//         choices: ["sim", "nao"],
//     }).then(resp => {
//         const action = resp['action']

//         if(action === 'sim')
//             return 'Deu tudo certo'
//     })
// }




module.exports = {
    solicitarOperacoes,
    exibirMensagensAoCriarConta,
    criarConta,
    validarConta,
    criarArquivoDeConta,
    // continuarServicos,
};
