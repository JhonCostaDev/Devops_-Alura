# Notação Simbólica para Permissões

 

A notação simbólica usa letras e sinais **(+, -, =)** para definir permissões e grupos 
específicos. Nessa notação, você pode controlar quem tem permissões e quais permissões são 
aplicadas usando comandos como **chmod**.

## Componentes da Notação Simbólica

###Categorias de Usuários
* u: refere-se ao usuário proprietário do arquivo ou diretório.
* g: refere-se ao grupo ao qual o arquivo ou diretório pertence.
* o: refere-se a outros, ou seja, todos os outros usuários do sistema.
* a: refere-se a todos (equivalente a ugo), aplicando-se ao usuário, ao grupo e a outros.

### Tipos de Permissão
* r: Leitura – permite ver o conteúdo do arquivo ou listar os arquivos em um diretório.
* w: Escrita – permite modificar o conteúdo de um arquivo ou alterar o conteúdo de um diretório (como criar, renomear ou remover arquivos).
* x: Execução – permite executar um arquivo (caso seja um script ou executável) ou acessar um diretório.

### Operadores
* +: adiciona uma permissão.
* -: remove uma permissão.
* =: define a permissão exatamente como especificada, removendo qualquer permissão que não esteja incluída.

### Exemplos de Uso

Vamos analisar alguns exemplos práticos para entender melhor a notação simbólica em 
comandos:

Se executarmos o comando:

```bash
chmod u+r arquivo.txt
```

Ele adiciona permissão de leitura apenas para o proprietário (u). Caso o usuário já tenha 
permissões adicionais, elas permanecem inalteradas.

Se executarmos o comando:
```bash
chmod g-w arquivo.txt
```

Ele remove a permissão de escrita do grupo (g). Isso é útil quando se deseja evitar que o 
grupo modifique o conteúdo de um arquivo.

Ao executar:
```bash
chmod o=x arquivo.txt
```

Definimos a permissão de execução apenas para outros (o) e removemos qualquer outra 
permissão que o proprietário e o grupo possam ter.

Já o comando:
```bash
chmod a+r arquivo.txt
```

Adiciona permissão de leitura para todos os tipos de usuários (a), ou seja, proprietário, 
grupo e outros. Isso é útil para tornar um arquivo acessível a todos, mantendo as 
permissões existentes.

Caso desejarmos, é possível combinar os tipos de usuários com diferentes permissões com 
essa notação, utilizando como separador a vírgula:

```bash
chmod u=rwx,g=rx,o=r arquivo.txt
```

Aqui, definimos permissões específicas para cada categoria:

* Usuário (u): tem leitura, escrita e execução (rwx).
* Grupo (g): tem leitura e execução (rx).
* Outros (o): têm apenas leitura (r).

Desse modo, a notação simbólica tem um formato mais explícito e pode ser mais intuitiva 
para alterações específicas, permitindo a mudança de permissões de forma mais granular.
