# Criando a Trigger
Para criar a Trigger, abrimos uma nova aba clicando no primeiro ícone no canto superior esquerdo. O processo de criação é semelhante ao de uma função, começando com a definição do DELIMITER no início e no final do código.

DELIMITER $$

DELIMITER ; 
Copiar código
Quando criamos uma Trigger, também utilizamos o CREATE após o DELIMITER $$. No CREATE passamos o objeto que desejamos criar. Nesse caso, desejamos criar uma Trigger. Portanto, digitamos: CREATE TRIGGER e na sequência informamos o nome da Trigger, que será atualizarResumoAluguel.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel

DELIMITER ; 
Copiar código
Agora que indicamos a criação da Trigger e seu nome, vamos definir quando ela será acionada. Ela será ativada sempre que houver uma inserção na tabela de aluguel. Portanto, será do tipo AFTER INSERT, ou seja, após o insert. Informamos onde com ON e indicamos o nome da tabela, sendo a tabela de alugueis.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis

DELIMITER ; 
Copiar código
Sempre que uma inserção for feita na tabela de aluguéis, a Trigger será acionada. Na sequência, indicamos que isso deve ser feito para cada linha inserida. Para isso, usamos o FOR EACH ROW, ou seja, para cada linha.

Assim como nas funções, também fazemos a abertura e o encerramento do nosso bloco de código. Então, BEGIN e END$$.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN


END$$

DELIMITER ; 
Copiar código
Dentro do BEGIN é onde indicamos o que essa Trigger executará no momento em que ela for acionada.

O primeiro passo é capturar o valor de desconto. Qual é a porcentagem de desconto que essa pessoa cliente vai receber? Porque iremos armazenar essa informação também na nossa tabela de resumo aluguel. Voltando para a aba com o CREATE TABLE resumo_aluguel, vamos pegar o descontoaplicado, o valortotal, o valorfinal, além dos IDs.

Voltamos para a aba de criação da Trigger.

Dentro da nossa Trigger, chamaremos nossas funções. Assim como é possível chamar uma função dentro de outra função, também podemos fazer isso dentro de uma Trigger.

Seguiremos um processo semelhante ao anterior. Iremos definir o valor do desconto em uma variável, utilizando a mesma abordagem de declaração de variáveis que usamos antes, já que também é possível declarar variáveis dentro de uma Trigger.

Portanto, copiamos a seguinte linha:

SET Desconto = CalcularDescontoPorDias(AluguelID);
Copiar código
E colamos dentro da criação da Trigger.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN

SET Desconto = CalcularDescontoPorDias(AluguelID);

END$$

DELIMITER ; 
Copiar código
Logo após, copiamos a declaração de variáveis:

DECLARE Desconto INT;
Copiar código
Colamos abaixo do BEGIN:

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN
DECLARE Desconto INT;
SET Desconto = CalcularDescontoPorDias(AluguelID);

END$$

DELIMITER ; 
Copiar código
Estamos declarando a variável Desconto e não declaramos Desconto INT. Como mencionamos, é bem semelhante ao que fizemos ao criar uma função. Estamos definindo em Desconto o CalcularDescontoPorDias() que vem do AluguelID. Vamos retirar, por enquanto, esse AluguelID. Porque essa questão de passar os parâmetros para esta função vai ser um pouco diferente.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN
DECLARE Desconto INT;
SET Desconto = CalcularDescontoPorDias();

END$$

DELIMITER ; 
Copiar código
Além de Desconto, também precisamos do valorFinal. Copiamos a linha DECLARE ValorFinal DECIMAL(10,2);, igual fizemos na nossa função CalcularValorFinalComDesconto(). Colamos abaixo do Desconto na Trigger e definimos ValorFinal. Este irá receber o ValorFinal da função CalcularValorFinalComDesconto().

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN

DECLARE Desconto INT;
DECLARE ValorFinal DECIMAL(10,2);

SET Desconto = CalcularDescontoPorDias();
SET ValorFinal = CalcularValorFinalComDesconto();

END$$

DELIMITER ; 
Copiar código
Vamos buscar as duas informações necessárias, que já estão disponíveis: o Desconto e o valorFinal.

Agora que possuímos esses dados, podemos incluí-los na nossa tabela de resumo de aluguel através de um comando insert.

Inserindo as informações na tabela
Vamos realizar o INSERT INTO() na tabela resumo_aluguel, especificando os campos a serem inseridos: aluguel_id, cliente_id, valortotal, descontoaplicado e, por último, o valorfinal. Estes valores serão adicionados à tabela ResumoAluguel na ordem mencionada.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN

DECLARE Desconto INT;
DECLARE ValorFinal DECIMAL(10,2);

SET Desconto = CalcularDescontoPorDias();
SET ValorFinal = CalcularValorFinalComDesconto();

INSERT INTO resumo_aluguel(aluguel_id, cliente_id, valortotal, descontoaplicado,  valorfinal)

END$$

DELIMITER ; 
Copiar código
Agora, passamos os valores usando a palavra reservada VALUES().

Inserindo os valores
Nos valores, indicamos o que desejamos passar para ele. Tanto o Desconto, como o valorFinal, que são referentes a esses dois últimos campos que passamos no INSERT INTO. Para isso, passamos o Desconto e o valorfinal dentro do VALUES().

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN

DECLARE Desconto INT;
DECLARE ValorFinal DECIMAL(10,2);

SET Desconto = CalcularDescontoPorDias();
SET ValorFinal = CalcularValorFinalComDesconto();

INSERT INTO resumo_aluguel(aluguel_id, cliente_id, valortotal, descontoaplicado,  valorfinal)
VALUES(Desconto, valorFinal)

END$$

DELIMITER ; 
Copiar código
No entanto, é necessário também obter as informações de identificação, tanto do cliente quanto do aluguel, juntamente com o valor total. Esses dados estão sendo diretamente incluídos em nossa tabela de aluguéis. Como podemos capturar essa informação?

Podemos usar a palavra NEW para isso. Uma abordagem seria passar NEW.aluguel_id dentro de VALUES(). Em outras palavras, estamos instruindo nossa Trigger a considerar que o aluguel_id a ser inserido na nossa tabela de resumo de aluguel é o novo aluguel_id que está sendo adicionado à nossa tabela de aluguéis.

Dessa maneira, conseguimos recuperar um valor que está sendo inserido na tabela quando a Trigger é acionada. Aplicamos a mesma lógica tanto para o cliente_id, como também para o valorTotal. Vamos fazer o seguinte, vamos passar aqui NEW.preco_total.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN

DECLARE Desconto INT;
DECLARE ValorFinal DECIMAL(10,2);

SET Desconto = CalcularDescontoPorDias();
SET ValorFinal = CalcularValorFinalComDesconto();

INSERT INTO resumo_aluguel(aluguel_id, cliente_id, valortotal, descontoaplicado,  valorfinal)
VALUES(NEW.aluguel_id, NEW.cliente_id, NEW.preco_total, Desconto, valorFinal);

END$$

DELIMITER ; 
Copiar código
Agora que a Trigger está montada, precisamos também passar o aluguel_id para as funções CalcularDescontoPorDias() e CalcularValorFinalComDesconto(). Utilizamos o NEW para indicar que se trata do novo aluguel_id sendo inserido na tabela de aluguéis, de onde queremos extrair essas informações.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN

DECLARE Desconto INT;
DECLARE ValorFinal DECIMAL(10,2);

SET Desconto = CalcularDescontoPorDias(NEW.aluguel_id);
SET ValorFinal = CalcularValorFinalComDesconto(NEW.aluguel_id);

INSERT INTO resumo_aluguel(aluguel_id, cliente_id, valortotal, descontoaplicado,  valorfinal)
VALUES(NEW.aluguel_id, NEW.cliente_id, NEW.preco_total, Desconto, valorFinal);

END$$

DELIMITER ; 
Copiar código
Com a Trigger pronta, podemos selecionar e executar, mas já confirmamos que a Trigger foi criada com sucesso. Observamos isso no check na cor verde na parte inferior.

Vamos realizar um SELECT na tabela de resumo de aluguéis para verificar que não há valores presentes, indicando que a tabela está vazia.

DELIMITER $$

CREATE TRIGGER AtualizarResumoAluguel
AFTER INSERT ON alugueis
FOR EACH ROW
BEGIN

DECLARE Desconto INT;
DECLARE ValorFinal DECIMAL(10,2);

SET Desconto = CalcularDescontoPorDias(NEW.aluguel_id);
SET ValorFinal = CalcularValorFinalComDesconto(NEW.aluguel_id);

INSERT INTO resumo_aluguel(aluguel_id, cliente_id, valortotal, descontoaplicado,  valorfinal)
VALUES(NEW.aluguel_id, NEW.cliente_id, NEW.preco_total, Desconto, valorFinal);

END$$

DELIMITER ; 

SELECT * FROM resumo_aluguel;
Copiar código
Ao rodarmos o SELECT, obtemos:

aluguel_id	cliente_id	valortotal	descontoaplicado	valorfinal
NULL	NULL	NULL	NULL	NULL
Como podemos acionar nossa Trigger para que ela adicione esses dados à nossa tabela? Inserindo um novo registro. Vamos copiar isso; já temos o SET pronto para inserir na tabela de aluguéis e colamos abaixo do SELECT.

SELECT * FROM resumo_aluguel;

INSERT INTO alugueis (aluguel_id, cliente_id, hospedagem_id, data_inicio, data_fim, preco_total)
VALUES (10001, 42, 15, '2024-01-01', '2024-01-08', 3000.00);
Copiar código
Estamos definindo todos os campos aqui e passando o aluguel_id, cliente_id, hospedagem_id, data_inicio, data_fim e valor. Selecionamos e executamos o comando. Observamos na parte inferior a mensagem informando que uma linha foi adicionada.

Na tabela de resumo de aluguel, encontraremos o aluguel_id e o cliente_id ao executarmos o SELECT * FROM resumo_aluguel.

aluguel_id	cliente_id	valortotal	descontoaplicado	valorfinal
10001	42	3000.00	10.00	2700.00
NULL	NULL	NULL	NULL	NULL
Também teremos o valortotal, que é de 3 mil reais. Além disso, veremos o descontoAplicado, que corresponde a 10%, e o valorfinal, que fica em 2.700 reais.

Conseguimos não só criar as duas funções, a calcularDescontoPorDias baseada no tempo que o cliente passou hospedado, mas também uma função para calcular o valorFinalComDesconto.

E criamos a nossa Trigger que aciona essas duas funções e armazena essas informações em uma tabela. Que sempre que o gestor, ou qualquer outra pessoa colaboradora da empresa necessitar dessas informações, é só vir aqui e realizar um SELECT na nossa tabela de resumo aluguel.

Conclusão e Próximos Passos
No entanto, não paramos por aqui. Aprendemos como criar funções, como invocar uma função dentro de outra, e como usar os gatilhos (Triggers) para acionar funções. Mas também precisamos compreender aplicar a manutenção dessas funções: o que acontece ao atualizarmos uma função, como excluir funções, entre outras questões. Vamos continuar explorando esses temas no próximo conteúdo.