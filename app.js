const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('Olá');
})

app.listen(port, () => {
    console.log(`Port=${port}`)
    class Pessoa {
        constructor(nome, email) {
            this.nome = nome;
            this.email = email;
            this.telefone = '';
            this.pessoa = {};
        }
    }
    
    class Endereco{
        constructor(rua, numero, bairro, complemento, cep, cidade, estado){
            this.rua = rua;
            this.numero = numero;
            this.bairro = bairro;
            this.complemento = complemento;
            this.cep = cep;
            this.cidade = cidade;
            this.estado = estado;
        }
    }
    class Cliente extends Pessoa {
        constructor(nome, email, cpf) {
            super(nome, email);
            if(cpf === undefined) {
                throw new Error(`O CPF é obrigatorio`);
            }
            this.sobrenome = '';
            this.cpf = cpf;
        }
    }
    class Fornecedor extends Pessoa {
        constructor(nome, email, cnpj) {
            super(nome, email);
            if(cnpj === undefined) {
                throw new Error(`O CNPJ é obrigatorio`);
            }
            this.razaoSocial = '';
            this.cnpj = cnpj;
        }
    }
   // class Telefone {
     //   construtor(numero, ddd, ddi)
            //this.numero = numero;
            //this.ddd = ddd;
            //this.ddi = ddi;
    //}
    var cliente1 = new Cliente('Chrys', 'chrys@hotmail.com', '123.456.789-10');
    console.log(`Nome: ${cliente1.nome}, Email: ${cliente1.email}, CPF: ${cliente1.cpf}`);

    var fornecedor1 = new Fornecedor('Atacado', 'atacado@hotmail.com.br', '12345678910121');
    fornecedor1.razaoSocial = 'Atacado 1';
    console.log(`Fornecedor1: ${fornecedor1.nome}, ${fornecedor1.razaoSocial}, ${fornecedor1.email}, ${fornecedor1.cnpj}`);

    var endereco1 = new Endereco('RUA', "1", "BAIRRO", "CASA", "87043-220", "MGA", "ESTADO");
    console.log(`Nome: ${endereco1.rua}, Numero: ${endereco1.numero}, Bairro: ${endereco1.bairro}, Complemento: ${endereco1.complemento}, CEP: ${endereco1.cep}, Cidade: ${endereco1.cidade}, Estado: ${endereco1.estado}`);

});
