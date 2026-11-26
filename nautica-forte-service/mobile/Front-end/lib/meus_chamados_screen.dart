import 'package:flutter/material.dart';

class MeusChamadosScreen extends StatelessWidget {
  const MeusChamadosScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF0D2B45),
        iconTheme: const IconThemeData(color: Colors.white),
        title: const Text('Meus Chamados', style: TextStyle(color: Colors.white)),
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _buildCardChamado('#NF-000123', 'Manutenção', 'Pendente', Colors.orange),
          _buildCardChamado('#NF-000122', 'Reparo no motor', 'Em andamento', Colors.blue),
          _buildCardChamado('#NF-000121', 'Revisão geral', 'Concluído', Colors.green),
        ],
      ),
    );
  }

  Widget _buildCardChamado(String id, String servico, String status, Color corStatus) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(id, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: corStatus.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    status,
                    style: TextStyle(color: corStatus, fontWeight: FontWeight.bold, fontSize: 12),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(servico, style: const TextStyle(fontSize: 14)),
            const SizedBox(height: 4),
            const Text('Data: 13/11/2026 - 14:30', style: TextStyle(color: Colors.grey, fontSize: 12)),
          ],
        ),
      ),
    );
  }
}