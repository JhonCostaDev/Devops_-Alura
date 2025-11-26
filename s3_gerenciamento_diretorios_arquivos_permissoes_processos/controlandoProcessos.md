# Controlando Processos

No gerenciamento de sistemas Linux, não basta monitorar os processos em execução, é necessário entender como interagir diretamente com esses processos quando necessário. Nesta aula, exploramos como usar o comando kill para enviar sinais a processos, permitindo que você possa interromper, pausar ou encerrar processos de maneira eficiente.

### Encerrando processos pelo PID

```bash
$ kill PID # Encerra o processo identificado pelo PID

$ kill -9 PID # Encerra o processo identificado pelo PID bruscamente.

$ kill -STOP PID # Pausa o processo (Depende do processo)

$ pkill #
```