import 'package:flutter/material.dart';

class MinhaEmbarcacaoScreen extends StatelessWidget {
  const MinhaEmbarcacaoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF0D2B45),
        iconTheme: const IconThemeData(color: Colors.white),
        title: const Text('Minha Embarcação', style: TextStyle(color: Colors.white)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Card(
          elevation: 2,
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                const Row(
                  children: [
                    Icon(Icons.directions_boat, color: Color(0xFF0D2B45), size: 40),
                    SizedBox(width: 10),
                    Text('Christine', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                  ],
                ),
                const Divider(height: 30),
                _buildInfoRow('Tipo', 'Lancha'),
                _buildInfoRow('Modelo / Ano', '2026'),
                _buildInfoRow('Localização', 'Marina Example, Olinda - PE'),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildInfoRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(color: Colors.grey, fontSize: 16)),
          Text(value, style: const TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
        ],
      ),
    );
  }
}