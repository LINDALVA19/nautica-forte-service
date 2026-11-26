import 'package:flutter/material.dart';
import 'novo_chamado_screen.dart';
import 'meus_chamados_screen.dart';
import 'minha_embarcacao_screen.dart';
import 'notificacoes_screen.dart';
import 'perfil_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: const Color(0xFF0D2B45),
        title: const Text('Náutica Forte', style: TextStyle(color: Colors.white)),
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications, color: Colors.white),
            onPressed: () {},
          ),
        ],
      ),
      // 1. O body começa aqui
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Olá, Mariana!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Color(0xFF0D2B45)),
            ),
            const Text(
              'Pronto para solicitar um serviço?',
              style: TextStyle(fontSize: 16, color: Colors.grey),
            ),
            const SizedBox(height: 24),
            
            // Grid de botões (Menu principal)
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
                children: [
                  _buildMenuCard(Icons.build, 'Novo Chamado', () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const NovoChamadoScreen()),
                    );
                  }),
                  _buildMenuCard(Icons.list_alt, 'Meus Chamados', () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const MeusChamadosScreen()),
                    );
                  }),
                  _buildMenuCard(Icons.directions_boat, 'Minha Embarcação', () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const MinhaEmbarcacaoScreen()),
                    );
                  }),
                  _buildMenuCard(Icons.notifications_active, 'Notificações', () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const NotificacoesScreen()),
                    );
                  }),
                ],
              ),
            ),
          ],
        ),
      ), // 2. O body termina aqui

      // 3. O bottomNavigationBar fica aqui, alinhado com o body
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        selectedItemColor: const Color(0xFF0D2B45),
        unselectedItemColor: Colors.grey,
        currentIndex: 0, // Deixa o "Início" selecionado
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Início'),
          BottomNavigationBarItem(icon: Icon(Icons.list), label: 'Chamados'),
          BottomNavigationBarItem(icon: Icon(Icons.directions_boat), label: 'Embarcações'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Perfil'),
        ],
        onTap: (index) {
          if (index == 1) {
            Navigator.push(context, MaterialPageRoute(builder: (context) => const MeusChamadosScreen()));
          } else if (index == 2) {
            Navigator.push(context, MaterialPageRoute(builder: (context) => const MinhaEmbarcacaoScreen()));
          } else if (index == 3) {
            Navigator.push(context, MaterialPageRoute(builder: (context) => const PerfilScreen()));
          }
        },
      ),
    ); // 4. O Scaffold termina aqui
  }

  // Função para criar os quadradinhos do menu
  Widget _buildMenuCard(IconData icon, String title, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.grey.shade300),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.1),
              spreadRadius: 1,
              blurRadius: 4,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 40, color: const Color(0xFF0D2B45)),
            const SizedBox(height: 12),
            Text(
              title,
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
            ),
          ],
        ),
      ),
    );
  }
}