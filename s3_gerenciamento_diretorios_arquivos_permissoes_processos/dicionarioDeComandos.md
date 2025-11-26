# dicionário de comandos

Ao longo desta aula, tivemos a oportunidade de explorar vários comandos e dar os primeiros passos no mundo do terminal Linux. Para relembrar tudo o que vimos de forma sintética, preparamos um pequeno “dicionário de comandos” com a descrição de todos os comandos que aprendemos aqui.

    $ pwd : (Print Working Directory): Exibe o caminho completo do diretório atual em que você está no terminal.

    ls (List): Lista os arquivos e diretórios no diretório atual. Com a opção -a, exibe também arquivos ocultos.

    cd (Change Directory): Altera o diretório atual para o especificado. Exemplo (cd /projeto muda para o diretório projeto.

    sudo (SuperUser Do): Permite a execução de comandos com privilégios de superusuário (root). Exemplo (sudo ls /root exibe o conteúdo do diretório root com permissões elevadas.

    sudo -i: Inicia uma sessão de shell interativa como usuário root, permitindo executar comandos com permissões administrativas sem precisar prefixar cada comando com sudo.

    sudo su: Abre uma sessão de shell como usuário root, mantendo o ambiente do usuário atual. Semelhante a sudo -i, mas mantém o ambiente do usuário.

    cat (Concatenate): Exibe o conteúdo de arquivos. Pode também ser usado para concatenar e criar arquivos.

    exit: Encerra a sessão atual de shell, seja ela como usuário normal ou root.

    git clone: Cria uma cópia local de um repositório Git remoto. Exemplo: git clone https://github.com/alura-cursos/adopet-frontend-cypress clona o repositório especificado.

    mkdir (Make Directory): Cria novos diretórios.

    touch: Cria um arquivo vazio ou atualiza a data de modificação de um arquivo existente.

    nano: Editor de texto no terminal, usado para criar e editar arquivos.

    mv (Move): Move ou renomeia arquivos e diretórios.

    cp (Copy): Copia arquivos e diretórios.

    clear: Limpa a tela do terminal, removendo o histórico visível.

    ls -l (List Long): Lista arquivos e diretórios com detalhes, incluindo permissões e proprietários.

    ls -al (List All Long): Combina as opções -a e -l, listando todos os arquivos com detalhes
    
    rm (Remove): Remove arquivos especificados.
    
    rm -i (Remove Interactive): Remove arquivos especificados solicitando confirmação antes da exclusão.
    
    rmdir (Remove Directory): Remove somente diretórios vazios.
    
    rm -r (Remove Recursive): Remove diretórios e seus conteúdos de forma recursiva.
    
    ls > arquivo.txt (List to File): Redireciona a saída do comando ls para o arquivo especificado, criando o arquivo se ele não existir.
    
    ls >> arquivo.txt (Append List to File): Adiciona a saída do comando ls ao final do arquivo especificado sem sobrescrevê-lo.
    
    echo "mensagem" >> arquivo.txt (Echo Append): Adiciona a mensagem especificada ao final do arquivo, sem sobrescrever seu conteúdo.
    
    echo "mensagem" (Echo): Exibe a mensagem especificada no terminal.
    
    sudo apt update (Update Packages): Atualiza a lista de pacotes disponíveis e suas versões no sistema. O comando requer privilégios de superusuário.
    
    sudo apt upgrade (Upgrade Packages): Instala as atualizações de pacotes disponíveis no sistema. O comando requer privilégios de superusuário.
    
    sudo apt install pacote (Install Package): Instala o pacote especificado. O comando requer privilégios de superusuário.
    
    sudo apt remove pacote (Remove Package): Remove o pacote especificado do sistema.


    top (Table of Processes): Exibe uma visão em tempo real dos processos em execução, mostrando detalhes como PID, uso de CPU e memória e o estado dos processos.
    
    ps (Process Status): Fornece uma "fotografia" dos processos em execução no momento. Algumas opções que utilizamos foram:
    
    ps aux (All Users Extended): lista todos os processos em execução com detalhes extensivos, como %CPU, %MEM, PID etc.
    ps -u [usuario] (User): filtra e exibe apenas os processos pertencentes ao usuário especificado.
    ps -p [PID] (Process ID): exibe informações detalhadas sobre um processo específico com o PID fornecido.
    ps -C [comando] (Command): filtra e exibe os processos associados ao comando especificado.
    pstree (Process Tree): Mostra a árvore de processos, ilustrando a relação hierárquica entre processos pai e filho.
    
    head (Head of File): Exibe as primeiras linhas de um arquivo ou saída de um comando. Por padrão, exibe as primeiras 10 linhas.
    
    pipe (|) (Pipe): Redireciona a saída de um comando como entrada para outro comando. É utilizado no encadeamento de comandos e processamento de dados de modo sequencial.
    
    sort (Sort): Ordena a saída de um comando ou o conteúdo de um arquivo. Pode ser combinado com outros comandos usando pipe para organizar dados.
    
    kill (Kill Process): Envia sinais para processos em execução, sendo comumente utilizado com os seguintes sinais:
    
    kill [PID] (Process ID): envia o sinal padrão de interrupção (SIGTERM) para o processo com o PID especificado, permitindo uma interrupção suave.
    kill -9 [PID] (Signal 9): envia um sinal de interrupção abrupta (SIGKILL) para o processo com o PID especificado, forçando o encerramento imediato.
    kill -STOP [PID] (Stop Signal): envia um sinal de pausa (SIGSTOP) para o processo, interrompendo sua execução sem encerrar o processo.
    kill -CONT [PID] (Continue Signal): envia um sinal de continuação (SIGCONT) para retomar a execução de um processo que foi pausado.
    pkill (Process Kill): Envia sinais para processos com base no nome do processo. Ao utilizar esse comando, lembre-se que todos os processos que correspondem ao nome fornecido poderão ser afetados.
    
    killall (Kill All): Envia sinais para todos os processos com um nome específico. É um comando bastante prático para enviar sinais a múltiplos processos de forma simultânea.
    
    ssh (Secure Shell): Estabelece uma conexão segura entre um cliente e um servidor remoto.
    
    ssh -i caminho/para/sua-chave.pem usuário@ip_da_instância (SSH with Identity File): Conecta-se a uma instância EC2 usando um arquivo de chave privada para autenticação.
    
    chmod (Change Mode): Modifica as permissões de arquivos ou diretórios.
    
    chmod 400 caminho/para/sua-chave.pem (Change Mode 400): Define permissões de leitura para o proprietário e remove todas as permissões para grupo e outros usuários.
    
    sudo yum update (YUM Update): Atualiza todos os pacotes instalados na distribuição Linux baseada em CentOS, como o Amazon Linux.
    
    history (History): Exibe o histórico de comandos executados no terminal.