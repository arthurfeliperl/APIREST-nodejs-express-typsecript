class Usuario {
    nome: string;
    email: string;
    private senha: string;

    constructor(nome:string,email:string,senha:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    conferirsenha(tentativa:string):boolean {
        return this.senha === tentativa

    }
}
const usuario1 = new Usuario("Joao", "joao@teste.com", "12345")

console.log(usuario1.conferirsenha("12345"))