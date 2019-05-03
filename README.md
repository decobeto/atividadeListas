# atividadeListas
Atividade sobre listas - aula de estrutura de dados

Você deverão construir um pequeno sistema que gerencia contas pessoais e desejos de compra

1. O usuário deverá lançar uma conta pessoal
    nome da conta, data de vencimento e valor
    essa estrutura de dados deve ser um objeto
    as contas serão organizadas em uma estrutura do tipo pilha, onde o primeiro que entra é o último a sair

2. O usuário poderá informar desejos que ele tem, desejos serão do tipo fila
    nome do desejo, valor
    os desejos são objetos
    os desejos serão armazenados em uma estrutura de dados do tipo fila, onde o primeiro que entra é o primeiro que sai    

3. Quando o usuário executar a função comprar() o próximo desejo que está na fila será removido, gerando uma conta pessoal com vencido para o próximo mês, então é incluido na pilha de contas pessoais

4. Quando o usuário executar a função pagar() a conta pessoal que está na vez deve ser paga

5. Quando o usuário executar a função comprarTudo() todos os desejos da fila são comprados

6. Quando o usuário executar a função pagarTudo() todas as contas da pilha são pagas

Obs.: o sistema não deve guardar histórico de pagamento e nem deve guardar memória em banco de dados e nem em disco
