# 🚤 Náutica Forte Service

Aplicativo mobile desenvolvido como projeto para a disciplina de **Estágio Supervisionado I** do curso de Sistemas de Informação (UNINASSAU Olinda).

## 📝 Sobre o Projeto
O **Náutica Forte Service** é um MVP (Minimum Viable Product) focado na digitalização e padronização do fluxo de abertura de chamados de manutenção para a empresa Náutica Forte (Olinda-PE). O app substitui os canais informais (WhatsApp/telefone) por um formulário estruturado, enviando os dados da embarcação, localização e descrição do problema diretamente para os mecânicos.

## 🚀 O que já foi desenvolvido (Front-end)
Nesta primeira etapa de desenvolvimento, a interface (UI/UX) foi construída em **Flutter** e já está 100% navegável, contendo as seguintes telas e funcionalidades:

- [x] **Splash Screen:** Tela de abertura com a identidade visual da marca e transição automática.
- [x] **Login:** Tela de acesso com campos de e-mail/senha e opções de login social.
- [x] **Home (Tela Inicial):** Menu principal com atalhos em grid para as funcionalidades.
- [x] **Novo Chamado:** Formulário completo dividido em seções (Dados do Cliente, Embarcação, Localização), incluindo campo de seleção (Dropdown) para o tipo de embarcação.
- [x] **Meus Chamados:** Lista de chamados com cartões exibindo IDs, serviços e status coloridos (Pendente, Em andamento, Concluído).
- [x] **Minha Embarcação:** Tela com os detalhes e dados técnicos da lancha do cliente.
- [x] **Notificações:** Feed de avisos com ícones e atualizações do status do serviço.
- [x] **Meu Perfil:** Tela do usuário com opções de configuração e botão para sair (logout).
- [x] **Barra de Navegação Inferior:** Menu fixo no rodapé para navegação rápida entre Início, Chamados, Embarcações e Perfil.

## 🛠️ Tecnologias Utilizadas
- **Flutter:** Framework para desenvolvimento multiplataforma.
- **Dart:** Linguagem de programação.
- **VS Code:** Ambiente de desenvolvimento.
- **Git/GitHub:** Versionamento de código.

## 🔜 Próximos Passos (Back-end e Integração)
A próxima fase do projeto consistirá na integração com um banco de dados em nuvem (previsto para o Firebase) para:
1. Autenticação real de usuários (Cliente, Mecânico, Admin).
2. Salvar os chamados de forma persistente no banco de dados.
3. Realizar o upload de fotos/vídeos (anexos) para o pré-diagnóstico.
4. Implementar notificações push automáticas.
5. Validação formal do protótipo com o cliente (Náutica Forte).
6. O formulário ainda não tem o botão para anexar mídia. Alguém da Frente 2 precisará implementar isso junto com o upload para o Firebase Storage.
7. "Front-end visual concluído. Próxima etapa: Integração com Firebase para persistência de dados."

## 📊 Status do Projeto (Fase 2)
Abaixo está o mapeamento do escopo mínimo obrigatório exigido no edital, separando o que já foi desenvolvido no Front-end e o que ainda precisa ser integrado ao Back-end.

### 5.1 Autenticação e Perfis
- [x] **Front-end:** Telas de Login e Perfil desenhadas e navegáveis.
- [ ] **Back-end:** Integração com Firebase Auth (login real por e-mail/senha).
- [ ] **Regras:** Criação e bloqueio de telas por permissão (Cliente, Mecânico e Administrador).

### 5.2 Abertura de Chamado (Cliente)
- [x] **Front-end:** Formulário completo com dados do cliente, embarcação, localização e serviço.
- [x] **Front-end:** Criação visual do status "Pendente" ao finalizar.
- [ ] **Back-end:** Salvar os dados do formulário no Firestore.
- [ ] **Back-end:** Implementar botão de upload de fotos/vídeos (Firebase Storage).

### 5.3 Atendimento (Mecânico/Admin)
- [x] **Front-end:** Tela "Meus Chamados" com listagem visual e status coloridos.
- [ ] **Back-end:** Puxar chamados reais do banco de dados.
- [ ] **Back-end:** Criar visão do Mecânico/Admin para atualizar o status (Pendente → Em atendimento → Concluído).

### 5.4 Persistência e Segurança
- [ ] **Back-end:** Persistência de dados e mídias (os dados atuais são apenas visuais e se perdem ao fechar o app).
- [ ] **Segurança:** Configurar regras de segurança no Firebase, HTTPS e senhas com hash.

### 5.5 Documentação e Entrega
- [x] **Gestão:** Repositório GitHub organizado e README estruturado.
- [ ] **Testes:** Registro formal da validação realizada com a Náutica Forte.
- [ ] **Entrega:** Manual de instruções de uso para o cliente final.

---
## 👨‍💻 Autores
Projeto desenvolvido pelo grupo de alunos do curso de Sistemas de Informação (UNINASSAU Olinda):
- Arthur José França Tavares Rodrigues
- Aylanna Santos de França
- Lindalva Evellyn Ferreira
- Natalia Maria Tavares Dantas de Azevedo
- Pedro Gutemberg de Lima Silva
