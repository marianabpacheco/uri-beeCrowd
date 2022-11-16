# Repositório criado para praticar lógica de programação através do beecrowd


- A linguagem utilizada é JavaScript 

## Como utilizar o beecrowd

- Para utilizar o beecrowd, deve-se entender que a entrada de dados se dá a partir do URI. A própria plataforma, para testar a lógica criada para a solução de problemas, irá testar sua soluçãp com inúmeros casos de testes.
- Assim, para criar o ambiente de estudo, é necessário inicialmente criar um arquivo 'stdin'. É nesse arquivo que os valores para teste no nosso ambiente devem ser escritos.
- Após isso, quando criar um arquivo de solução de problema, os valores utilizados são armazenados em uma variável chamada "input", utilizando uma requisição do módulo 'fs' do Node.js. A função readFileSync do 'fs' permite a leitura de forma síncrona do arquivo que será utilizado como parâmetro.
- Após isso, é necessário criar uma nova variável, chamada de "valores" ou "value", na qual se armazem os valores recebidos no input, e utiliza-se o método split para tratar os valores.
- Lembrando que os valores são recebidos como string, dependendo do problema, pode ser necessário utilizar o método parseInt ou Number do Javascript para transformar em número.
- O tratamento do objeto que é recebido pelo stdin pode variar de problema a problema.
- No beecrowd, é necessário alterar o 'require('fs').readFileSync('stdin', 'utf8')' para require('fs').readFileSync('dev/stdin', 'utf8'), pois é assim que a organização de diretórios da plataforma beecrowd.

### Repositório pessoal

- Há alguns arquivos que a lógica precisa ser refinada para ser aceito como correto no beecrowd.