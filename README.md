# Náutica Forte Service

Aplicativo móvel operacional para solicitação e gestão de chamados de manutenção náutica. Desenvolvido como projeto da Fase 2 da disciplina de Estágio Supervisionado I do curso de Sistemas de Informação da UNINASSAU Olinda.

## 📋 Sobre o Projeto

O **Náutica Forte Service** tem como objetivo centralizar e padronizar a abertura de chamados de manutenção, substituindo o fluxo informal atual (WhatsApp/telefone) por um sistema estruturado. O aplicativo permite que o cliente informe dados pessoais, dados da embarcação, localização, tipo de serviço, descrição do problema, anexe fotos/vídeos e indique preferência de data/horário.

O sistema conta com três perfis de acesso:
- **Cliente:** Abre chamados e acompanha o status.
- **Mecânico:** Visualiza chamados atribuídos e atualiza o status.
- **Administrador:** Gerencia todos os chamados e usuários.

## 🎯 Escopo do MVP (Fase 2)

- Autenticação e controle de acesso por perfis (Cliente, Mecânico, Administrador);
- Abertura de chamado com dados completos e upload de mídias (fotos/vídeos);
- Listagem e atualização de status dos chamados (Pendente → Em atendimento → Concluído);
- Persistência segura de dados e mídias;
- Documentação técnica e manual do usuário.

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Mobile | Flutter + Dart |
| Backend / Auth / Banco / Storage | Firebase (Authentication + Firestore + Storage) |
| Prototipagem | Figma |
| Versionamento | Git + GitHub |

## 👥 Equipe e Frentes de Trabalho

| Integrante | Frente Principal | Frente Secundária |
|---|---|---|
| Arthur José França Tavares Rodrigues | A definir | - |
| Aylanna Santos de França | A definir | - |
| Lindalva Evellyn Ferreira | N° 5 - Documentação e Gestão | N° 4 - Testes e Validação |
| Natalia Maria Tavares Dantas de Azevedo | A definir | - |
| Pedro Gutemberg de Lima Silva | A definir | - |

> **Nota:** As frentes dos demais integrantes serão atualizadas após a confirmação oficial do grupo (prazo: 09/11/2026).

## 📅 Cronograma Resumido

- **07/11/2026:** Publicação do edital
- **09/11/2026:** Escolha das frentes pelos integrantes
- **11/11/2026:** Confirmação da stack + criação do repositório GitHub
- **15/11/2026:** Protótipo Figma de alta fidelidade concluído
- **20/11/2026:** Backend estável (auth + chamados + mídias)
- **22/11/2026:** Frontend integrado e navegável
- **25/11/2026:** Testes + correção de bugs críticos
- **26/11/2026:** Validação com a Náutica Forte
- **27/11/2026:** ENTREGA OPERACIONAL AO CLIENTE + documentação final

## 📁 Estrutura do Repositório

nautica-forte-service/
├── README.md
├── docs/ # Documentação técnica e manuais
├── design/ # Protótipos e assets (Figma)
├── mobile/ # Código do app Flutter
├── firebase/ # Regras e configs do Firebase (sem segredos)
├── tests/ # Roteiros e registros de testes
└── .gitignore


## 🚀 Como Executar o Projeto (Em breve)

*Instruções de instalação e execução serão adicionadas aqui quando o código estiver disponível.*

## 📝 Documentação de Entrega

- [ ] README com instruções de instalação e uso
- [ ] Instruções claras para o cliente final
- [ ] Registro da validação realizada com a Náutica Forte
- [ ] Repositório GitHub organizado

## 🔒 Segurança e Privacidade

O projeto segue as diretrizes da LGPD, com autenticação segura, controle de acesso baseado em funções (RBAC) e armazenamento criptografado de mídias e dados sensíveis.

---

**UNINASSAU Olinda · Curso de Sistemas de Informação · Estágio Supervisionado I · 2026.2**
