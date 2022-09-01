### Requisitos funcionais

- Cada conteúdo deverá conter os seguintes dados:
  - Título: texto curto, obrigatório, sem formatação;
  - Corpo: texto longo, opcional, com formatação (wysiwyg);
  - Data de criação: oculto, timestamp, preenchido automaticamente no momento da criação;
  - Data de atualização: oculto, timestamp, preenchido automaticamente na última modificação;
- Cada modificação salva no conteúdo deve ser registrada como uma nova revisão, nunca sobrescrevendo ou apagando as versões anteriores anterior;
- O histórico de modificações deve exibir, em ordem cronológica pela data de atualização, todas as versões de um conteúdo específico, viabilizando a navegação entre as diferentes versões;
- Na visualização ou listagem dos conteúdos, o usuário deve ter acesso à versão mais atualizada de cada conteúdo.
- O usuário deve ser capaz de reverter o conteúdo para uma revisão anterior;
- Os conteúdos na listagem devem ser paginados;
- A lista deve ter recurso para execução as seguintes operações em lote:
  - Apagar vários conteúdos de uma vez;
  - Publicar ou despublicar vários conteúdos de uma vez.

### Requisitos técnicos

- O front-end deverá ser desenvolvido em React utilizando o framework Next.js;
- O back-end deverá ser desenvolvido em Node.js, com ou sem framework;
- A comunicação entre a aplicação e a camada de dados deverá ser através de uma API REST;
- A aplicação deverá se basear nos seguintes serviços da AWS:
  - API Gateway para rotas da API,
  - Lambda para computação distribuída,
  - DynamoDB para armazenamento de dados;
- Todo o setup da infraestrutura de back-end deverá ser entregue em Serverless Framework;
- Todos inputs de dados (na UI e na API) devem ter validações adequadas;

### Entrega do desafio

- O código do desafio deve ser entregue em um repositório aberto no Github, incluindo:

- Todos os artefatos necessários para a execução da solução em ambiente local e deploy na AWS (usando Serverless);
  Documentação técnica para a execução do projeto.

- Além disso, deve ser entregue uma breve apresentação técnica sobre as abordagens escolhidas para o desenvolvimento da solução. Essa apresentação pode ser em formato de screencast ou texto.

Caso opte pelo formato de screencast, sugerimos o uso do Loom. Não há necessidade de mostrar o rosto.
