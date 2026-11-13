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

8. Requisito do Edital|	O que eu já fiz?|	O que falta? (Frentes 1 e 2)
5.1 Autenticação e perfis|	A tela de Login e Perfil visual.|	Fazer o cadastro/login real (Firebase Auth), criar os perfis (Cliente, Mecânico, Admin) e bloquear telas por permissão.
5.2 Abertura de chamado|	A tela do formulário completa e o status "Pendente" visual.|	Fazer o botão "Próximo" salvar os dados no banco de dados (Firestore).
5.3 Atendimento (Mecânico/Admin)|	A tela "Meus Chamados" visual.|	Criar uma tela de mecânico onde ele consiga ver os chamados de outras pessoas e mudar o status (Pendente -> Em andamento -> Concluído).
5.4 Persistência e segurança|	Nada (os dados somem ao atualizar a tela).|	Integração com o Firebase (Banco de Dados e Storage para fotos) e regras de segurança (HTTPS, senhas com hash).
5.5 Documentação|	Você já está indo bem (vai fazer o README).|	Falta o registro da validação com a Náutica Forte e instruções para o cliente.

## 👨‍💻 Autores
Projeto desenvolvido pelo grupo de alunos do curso de Sistemas de Informação (UNINASSAU Olinda):
- Arthur José França Tavares Rodrigues
- Aylanna Santos de França
- Lindalva Evellyn Ferreira
- Natalia Maria Tavares Dantas de Azevedo
- Pedro Gutemberg de Lima Silva
