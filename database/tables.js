class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarTabelas()
    }
    criarTabelas(){

        const sql = `create table if not exists atendimentos (
            id int primary key not null auto_increment,
            cliente varchar(50) not null,
            pet varchar(20),
            servico varchar(20) not null,
            status varchar(20) not null,
            observacoes text,
            data datetime not null,
            dataCriacao datetime not null
        )`
            
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela criada com sucesso')
            }
        })
        
    }
} 

module.exports = new Tabelas