# Compreendendo o sistema de arquivos do Linux (FHS)

A estrutura de diretórios da raiz **(/) no Ubuntu**, distribuição que adotamos em nossa jornada de aprendizado, observa o padrão conhecido como **Filesystem Hierarchy Standard (Padrão para Sistema de Arquivos Hierárquico - FHS)**, que define os principais diretórios e o seu conteúdo em sistemas baseados no Linux.

Vamos descrever sinteticamente os principais diretórios que comumente encontramos na raiz do Ubuntu com suas respectivas finalidades de uso. A raiz do sistema de arquivos é o “ponto de partida”, assim todos os demais diretórios e arquivos ficam localizados abaixo desse diretório.

    /bin → armazenamento de arquivos binários essenciais do sistema.

    /boot → armazenamento de arquivos necessários para a inicialização do sistema, incluindo o carregador de inicialização (boot loader) e o kernel do Linux.

    /dev → armazenamento de arquivos de dispositivo (device files) que representam dispositivos de hardware, como discos rígidos, terminais e outros periféricos.

    /etc → armazenamento de arquivos de configuração do sistema.

    /home → armazenamento de diretórios pessoais dos usuários.

    /lib → armazenamento de bibliotecas compartilhadas essenciais para binários localizados nos diretórios /bin e \sbin.

    /media → ponto de montagem para mídias removíveis (drivers USB, por exemplo).

    /mnt → ponto de montagem temporária para sistemas de arquivos. Usado para montar temporariamente outros sistemas de arquivos durante a administração do sistema.

    /opt → armazenamento de aplicativos opcionais e pacotes de software adicionais que não fazem parte da instalação padrão do sistema.

    /proc → sistema de arquivos virtual que armazena informações sobre os processos em execução e o estado do kernel.

    /root → diretório pessoal do usuário root (superusuário).

    /run → armazenamento de informações voláteis sobre o sistema desde a última inicialização, como PID files e sockets.

    /sbin → armazenamento de binários essenciais para a administração do sistema, necessários para o boot e recuperação do sistema.

    /srv → armazenamento de dados específicos de serviços fornecidos pelo sistema.

    /sys → sistema de arquivos virtual que fornece informações e interfaces para o kernel do Linux.

    /tmp → armazenamento de arquivos temporários criados por aplicativos e pelo sistema. Esses arquivos geralmente são excluídos ao reiniciar o sistema.

    /usr → armazenamento de dados de usuário mais instalados pelo sistema, incluindo binários adicionais, bibliotecas e arquivos de cabeçalho.

    /var → armazenamento de arquivos variáveis, como logs, filas de email e arquivos de spool.

Cada diretório presente na raiz do sistema possui um propósito bem definido, atuando para manter o sistema operacional de modo eficiente. A compreensão detalhada de seu funcionamento e configuração está fora do escopo do nosso curso, mas, caso queira entender mais sobre o tema, recomendamos algumas referências ao final do curso.

