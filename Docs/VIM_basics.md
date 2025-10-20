# Manual básico do Vim


O Vim é um editor de texto poderoso e amplamente utilizado no ambiente Linux. Deixamos 
esse guia que cobre os comandos essenciais para começar a usar o Vim:

## 1. Iniciando o Vim

Para abrir um arquivo:

```bash
~$ vim nome_do_arquivo
```

## 2. Modos do Vim

O Vim possui diferentes modos, sendo os principais:

	* **Modo Normal**: Usado para navegação e comandos (o modo padrão ao abrir o Vim).
	* **Modo de Inserção**: Usado para inserir texto.
	* **Modo de Comando**: Usado para executar comandos do Vim.

## 3. Mudando de modos

* Para entrar no modo de inserção: pressione i (inserir antes do cursor) ou a 
(inserir após o cursor).

* Para voltar ao modo normal: pressione Esc.

## 4. Navegação

É possível usar as teclas de seta para navegar pelo arquivo no Vim, sendo:

* Seta para cima: move o cursor uma linha para cima.
* Seta para baixo: move o cursor uma linha para baixo.
* Seta para esquerda: move o cursor um caractere para a esquerda.
* Seta para direita: move o cursor um caractere para a direita.

Embora usar as teclas de seta seja conveniente, muitos usuários preferem os comandos de 
navegação do Vim, devido a eficiência que proporcionam, especialmente quando você está 
digitando e não quer tirar as mãos do teclado.

### Assim, as seguintes teclas podem ser utilizadas para a navegação no Vim:

* h: move o cursor para a esquerda.
* j: move o cursor para baixo.
* k: move o cursor para cima.
* l: move o cursor para a direita.


#### Outros comandos de navegação que podem ser úteis:

* gg: ir para o início do arquivo.
* G: ir para o final do arquivo.
* 0: ir para o início da linha.
* $: ir para o final da linha.


## 5. Salvar e sair

* Para salvar as alterações: no modo normal, digite :w e pressione Enter.

### Para sair do Vim:
* :q: sai se não houver alterações.
* :q!: sai sem salvar as alterações.
* :wq: salva e sai.
