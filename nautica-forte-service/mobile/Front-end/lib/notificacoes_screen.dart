import 'package:flutter/material.dart';

class NotificacoesScreen extends StatelessWidget {
  const NotificacoesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF0D2B45),
        iconTheme: const IconThemeData(color: Colors.white),
        title: const Text('Notificações', style: TextStyle(color: Colors.white)),
      ),
      body: ListView(
        children: [
          _buildNotificacaoTile(Icons.check_circle, Colors.green, 'Chamado recebido', 'Seu chamado #NF-000123 foi registrado.'),
          _buildNotificacaoTile(Icons.build, Colors.blue, 'Mecânico atribuído', 'O mecânico Carlos foi notificado sobre o seu chamado.'),
          _buildNotificacaoTile(Icons.local_offer, Colors.red, 'Promoção especial', 'Confira nossa revisão completa com condições especiais!'),
        ],
      ),
    );
  }

  Widget _buildNotificacaoTile(IconData icon, Color color, String title, String subtitle) {
    return ListTile(
      leading: CircleAvatar(
        backgroundColor: color.withOpacity(0.2),
        child: Icon(icon, color: color),
      ),
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
      subtitle: Text(subtitle),
      trailing: const Text('14:30', style: TextStyle(fontSize: 12, color: Colors.grey)),
    );
  }
}