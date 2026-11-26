import 'package:flutter/material.dart';
import 'meus_chamados_screen.dart';

class NovoChamadoScreen extends StatefulWidget {
  const NovoChamadoScreen({super.key});

  @override
  State<NovoChamadoScreen> createState() => _NovoChamadoScreenState();
}

class _NovoChamadoScreenState extends State<NovoChamadoScreen> {
  // Controladores para pegar os dados digitados
  final _nomeController = TextEditingController();
  final _telefoneController = TextEditingController();
  final _embarcacaoController = TextEditingController();
  final _modeloController = TextEditingController();
  final _localizacaoController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF0D2B45),
        iconTheme: const IconThemeData(color: Colors.white),
        title: const Text('Novo Chamado', style: TextStyle(color: Colors.white)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Seção: Dados do Cliente
            const Text('Dados do Cliente', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF0D2B45))),
            const SizedBox(height: 10),
            TextFormField(
              controller: _nomeController,
              decoration: const InputDecoration(labelText: 'Nome', border: OutlineInputBorder()),
            ),
            const SizedBox(height: 10),
            TextFormField(
              controller: _telefoneController,
              decoration: const InputDecoration(labelText: 'Telefone / WhatsApp', border: OutlineInputBorder()),
              keyboardType: TextInputType.phone,
            ),
            
            const SizedBox(height: 20),
            // Seção: Dados da Embarcação
            const Text('Dados da Embarcação', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF0D2B45))),
            const SizedBox(height: 10),
            TextFormField(
              controller: _embarcacaoController,
              decoration: const InputDecoration(labelText: 'Nome da embarcação', border: OutlineInputBorder()),
            ),
            const SizedBox(height: 10),
            DropdownButtonFormField<String>(
              decoration: const InputDecoration(labelText: 'Tipo', border: OutlineInputBorder()),
              items: ['Lancha', 'Veleiro', 'Jet Ski', 'Iate']
                  .map((tipo) => DropdownMenuItem(value: tipo, child: Text(tipo)))
                  .toList(),
              onChanged: (value) {},
            ),
            const SizedBox(height: 10),
            TextFormField(
              controller: _modeloController,
              decoration: const InputDecoration(labelText: 'Modelo / Ano', border: OutlineInputBorder()),
            ),

            const SizedBox(height: 20),
            // Seção: Localização
            const Text('Localização', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF0D2B45))),
            const SizedBox(height: 10),
            TextFormField(
              controller: _localizacaoController,
              decoration: const InputDecoration(
                labelText: 'Localização (Marina, Vaga, Cidade)',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.location_on),
              ),
            ),

            const SizedBox(height: 30),
            // Botão Próximo (Simulando o que vai para a próxima etapa)
                        ElevatedButton(
              onPressed: () {
                // 1. Mostra a mensagem de sucesso na parte de baixo da tela
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Solicitação enviada com sucesso!')),
                );
                
                // 2. Navega para a tela de "Meus Chamados" e remove o formulário da memória
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => const MeusChamadosScreen()),
                );
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF0D2B45),
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('Próximo', style: TextStyle(fontSize: 16, color: Colors.white)),
            ),
          ],
        ),
      ),
    );
  }
}