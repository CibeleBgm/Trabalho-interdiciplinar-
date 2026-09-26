# Introdução

Informações básicas do projeto.

- Projeto: Control
- Repositório GitHub: [[LINK]](https://github.com/CibeleBgm/Trabalho-interdiciplinar-.git)
- Membros da equipe:

  #
- Cibele Gomes
- Isabelle Fernandes
- Joaquim Fernandes
- Junio César
- Pedro Cristian
- Ryan Gabriel

A documentação do projeto é estruturada da seguinte forma:

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução
7. Referências Bibliográficas



# 1. Contexto do Projeto

## 1.1 Problema

Muitas pessoas possuem dificuldade para acompanhar e organizar suas receitas e despesas ao longo do mês. A falta de um controle financeiro simples pode fazer com que o usuário não tenha uma visão clara de quanto está gastando, em quais categorias concentra seus gastos e quanto ainda possui disponível para utilizar.

Esse problema pode ser ainda mais relevante quando a pessoa possui diferentes tipos de despesas, como alimentação, transporte, lazer, contas e compras, ou quando precisa separar gastos pessoais de gastos relacionados a atividades profissionais ou negócios.

Dessa forma, existe a necessidade de compreender melhor os hábitos de controle financeiro das pessoas e as dificuldades encontradas por elas no acompanhamento de suas movimentações financeiras.

## 1.2 Objetivo do Projeto

### Objetivo Geral

Desenvolver uma solução de software que auxilie os usuários no controle e na organização de suas receitas e despesas, permitindo acompanhar suas movimentações financeiras de maneira simples e organizada.

### Objetivos Específicos

* Facilitar o registro e a organização de receitas e despesas.
* Permitir a classificação das movimentações por categorias.
* Possibilitar a separação entre movimentações pessoais e relacionadas a negócios.
* Auxiliar o usuário no acompanhamento de seus gastos ao longo do período.
* Facilitar a identificação dos hábitos de consumo e das principais categorias de despesas.

## 1.3 Justificativa

O controle das movimentações financeiras é importante para que as pessoas possam compreender melhor como seus recursos estão sendo utilizados. Quando os gastos não são registrados ou organizados, torna-se mais difícil acompanhar o orçamento e identificar situações que podem comprometer o planejamento financeiro.

O projeto é motivado pela necessidade de oferecer uma forma simples de registrar e organizar essas informações, evitando que o usuário precise utilizar métodos dispersos, como anotações manuais ou diferentes ferramentas para acompanhar seus gastos.

A definição dos objetivos específicos busca atender principalmente às dificuldades relacionadas ao registro, à classificação e ao acompanhamento das movimentações financeiras. A organização por categorias e a separação entre gastos pessoais e de negócio também permitem uma visualização mais adequada das informações registradas.

## 1.4 Público-alvo

O projeto é direcionado principalmente a pessoas que desejam organizar melhor suas finanças e acompanhar suas receitas e despesas no dia a dia.

Entre os possíveis usuários estão estudantes, trabalhadores, autônomos e pessoas que possuem atividades profissionais ou pequenos negócios e precisam acompanhar tanto movimentações pessoais quanto relacionadas ao trabalho.

O público-alvo não precisa possuir conhecimentos avançados de tecnologia ou de educação financeira. A proposta considera usuários que buscam uma forma prática e simples de registrar suas movimentações e visualizar sua situação financeira.


## 2. Product Discovery
## 2.1 Matriz CSD (Matriz de Alinhamento)

A Matriz CSD foi utilizada para organizar os conhecimentos, dúvidas e hipóteses levantados pela equipe durante o processo de entendimento do problema.

Certezas
A maioria das pessoas ainda recorre a planilhas ou meios paralelos para controle financeiro.
O medo de expor senhas bancárias ainda é um obstáculo para a adoção de automações financeiras.
Muitas pessoas se lembram de organizar as finanças principalmente quando ficam sem dinheiro no fim do mês.
Dúvidas
Os usuários gostariam de ter acesso a conteúdos de educação financeira básica dentro do aplicativo?
Quanto mais simples e intuitiva for a utilização, menor será o abandono da ferramenta?
O principal motivo de abandono de aplicativos financeiros é a dificuldade ou falta de hábito de registrar cada gasto manualmente no momento da compra?
Suposições
O usuário utilizará o aplicativo com frequência.
Lembretes por notificação podem contribuir para aumentar a utilização da ferramenta.
O usuário deseja visualizar gráficos sobre seus gastos.
Pequenas compras realizadas no dia a dia podem ser mais difíceis de registrar e acompanhar.

Artefato:

![Matriz CSD](imagens/matriz-csd.png)

## 2.2 Mapa de Stakeholders

O mapa de stakeholders foi elaborado para identificar as pessoas, organizações e grupos que possuem algum envolvimento com o problema, com o desenvolvimento ou com a utilização da solução.

### Pessoas fundamentais

Principais envolvidos no problema e potenciais usuários da solução:

* Usuários que gerenciam e controlam suas despesas.
* Pequenos empreendedores e trabalhadores autônomos.

### Pessoas importantes

Stakeholders que podem influenciar o desenvolvimento ou a utilização da solução:

* Lojas de aplicativos.
* Concorrentes e outros aplicativos financeiros.
* Familiares e amigos.
* Órgãos reguladores relacionados à proteção de dados, como a ANPD.
* Serviços de nuvem e backup.

### Pessoas influenciadoras

Stakeholders que podem contribuir com avaliações e conhecimentos relacionados ao problema e à solução:

* Opinião pública.
* Consultores de planejamento financeiro.
* Educadores financeiros.

**Artefato:**

![Mapa de Stakeholders](imagens/stakeholders.png)


## 2.3 Pesquisa e Entendimento do Problema

Durante a etapa de Product Discovery, a equipe realizou pesquisas sobre educação financeira, controle de despesas, endividamento e diferentes perfis de renda.

Os dados pesquisados indicaram dificuldades relevantes relacionadas ao controle das finanças pessoais. Entre os dados levantados pela equipe estão informações sobre a dificuldade de parte da população em calcular juros, acompanhar os próprios gastos e pagar as despesas mensais.

Também foram pesquisadas informações relacionadas aos trabalhadores autônomos e à inadimplência no Brasil. Esses dados contribuíram para a definição de um público que contempla tanto pessoas com renda fixa quanto pessoas com renda variável.

A pesquisa também ajudou a equipe a identificar dificuldades relacionadas ao registro das despesas, ao planejamento financeiro e à necessidade de uma comunicação simples para usuários com diferentes níveis de conhecimento sobre finanças.

### Principais fontes consultadas

* Serasa Experian.
* Banco Central do Brasil.
* IBGE.
* SPC Brasil e CNDL.

Os resultados dessa pesquisa serviram como base para a definição do problema, do público-alvo e das personas utilizadas nas etapas seguintes.

## 2.4 Personas

Com base no problema identificado e no público-alvo definido, foram elaboradas três personas que representam diferentes perfis de usuários que podem utilizar a solução.

### Regina Silva — Profissional com renda variável

Regina Silva representa uma usuária que possui rendimento variável e precisa lidar com diferentes valores de renda ao longo dos meses.

**Perfil:**

* Profissional com renda variável.
* Possui dificuldade para prever quanto poderá gastar em cada mês.
* Precisa se preparar para períodos de menor rendimento.
* Busca construir uma reserva financeira.

**Necessidades:**

* Ter uma referência de renda segura para planejar os gastos.
* Acompanhar sua reserva financeira.
* Organizar receitas e despesas.
* Visualizar seu histórico financeiro.

**Dificuldades:**

* Variação da renda mensal.
* Necessidade de reservar dinheiro para impostos e emergências.
* Incerteza sobre os valores disponíveis para gastar.

### Camila Andrade — Trabalhadora com renda fixa

Camila Andrade representa uma usuária com renda estável, mas que possui dificuldades relacionadas ao controle dos gastos e às compras por impulso.

**Perfil:**

* Possui renda fixa.
* Tem dificuldade para acompanhar o destino do próprio salário.
* Pode realizar compras por impulso.
* Deseja melhorar seus hábitos financeiros.

**Necessidades:**

* Visualizar seus gastos de forma simples.
* Identificar comportamentos de consumo.
* Acompanhar o progresso de suas economias.
* Compreender os impactos de determinadas compras.

**Dificuldades:**

* Compras por impulso.
* Controle da fatura do cartão.
* Falta de uma visão simples dos gastos durante o mês.

### Lucas Martins — Jovem em início de carreira

Lucas Martins representa um usuário que está começando sua vida profissional e deseja desenvolver hábitos de organização financeira.

**Perfil:**

* Está no início da carreira.
* Possui pouca experiência com planejamento financeiro.
* Deseja aprender a organizar suas receitas e despesas.
* Busca criar hábitos financeiros para o futuro.

**Necessidades:**

* Registrar movimentações de forma simples.
* Entender para onde seu dinheiro está indo.
* Criar e acompanhar metas financeiras.
* Ter acesso a conteúdos básicos sobre educação financeira.

**Dificuldades:**

* Pouco conhecimento sobre finanças.
* Falta de experiência com planejamento financeiro.
* Dificuldade para interpretar informações financeiras complexas.




# 3. Product Design

## 3.1 Histórias de Usuários

A partir das personas identificadas, foram elaboradas histórias de usuários para representar necessidades e funcionalidades esperadas pelos diferentes perfis.

### Regina Silva

* Como usuária de rendimento variável, desejo que o aplicativo calcule automaticamente uma "renda segura", baseada na minha renda mínima, média e máxima, para que eu possa planejar meus gastos sem prejudicar os meses de menor rendimento.

* Como usuária independente, desejo destinar automaticamente uma parcela de cada Pix que recebo para pagamento de impostos e reserva, para evitar surpresas no final do mês.

* Como uma usuária que obtém informações de diversas fontes, desejo visualizar um histórico básico de meses favoráveis e desfavoráveis, para me organizar com mais segurança.

* Como usuária sem proteção financeira, desejo monitorar visualmente meu objetivo de reserva, em meses de custo de vida, para entender o quanto ainda preciso acumular.

### Camila Andrade

* Como usuária com renda fixa, desejo visualizar um painel simples que mostre o destino do meu dinheiro ao longo do mês, facilitando a compreensão dos meus gastos sem a necessidade de consultar planilhas.

* Como consumidora que realiza compras por impulso, desejo receber notificações sobre possíveis compras por impulso à noite ou aos finais de semana, para me auxiliar a evitar gastos desnecessários.

* Como usuária que acompanha a fatura do cartão, desejo utilizar um simulador que mostre o custo real de entrar no crédito rotativo, para compreender melhor as consequências dessa escolha.

* Como usuária que deseja guardar dinheiro, quero acompanhar o progresso da minha economia mês a mês de forma visual e simples, para acompanhar minha evolução.

### Lucas Martins

* Como usuário no início da carreira, quero registrar minhas receitas e despesas de forma simples, para começar a desenvolver o hábito de controle financeiro.

* Como usuário com pouca experiência financeira, quero visualizar relatórios e gráficos simples dos meus gastos, para entender onde meu dinheiro está sendo utilizado.

* Como usuário que deseja se planejar, quero criar metas financeiras, como uma reserva ou objetivo específico, e acompanhar seu progresso.

* Como usuário iniciante, quero acessar conteúdos básicos de educação financeira dentro do próprio aplicativo, para aprender aos poucos sem precisar buscar essas informações em outro lugar.


## 3.2 Proposta de Valor

[Inserir o mapa/diagrama da proposta de valor.]

## 3.3 Projeto de Interface

### 3.3.1 Fluxo do Usuário

[Inserir o fluxo das telas.]

### 3.3.2 Wireframes

[Inserir os wireframes.]

### 3.3.3 Protótipo Interativo

[Inserir o link do Figma/protótipo.]


# 4. Metodologia

## 4.1 Ferramentas

[Lista das ferramentas utilizadas + links + justificativa.]

## 4.2 Organização da Equipe e Divisão de Papéis

[Explicar como a equipe se organizou, divisão de tarefas e utilização do Scrum.]

## 4.3 Kanban

[Inserir imagem do Kanban e link para o quadro.]
