import express from "express";
import multer from "multer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "tickets.json");
const UPLOADS_DIR = path.join(__dirname, "uploads");

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(UPLOADS_DIR, { recursive: true });

if (!fs.existsSync(DATA_FILE)) {
  const seed = [
    {
      id: "NF-2026-001",
      status: "Pendente",
      createdAt: "2026-11-21T10:30:00.000Z",
      client: {
        name: "Carlos Eduardo Menezes",
        phone: "(81) 99812-3456",
        email: "carlos.menezes@exemplo.com",
        cpf: ""
      },
      vessel: {
        type: "Lancha",
        model: "Coral 28",
        year: "2022",
        engineBrand: "Mercury",
        engineType: "Popa",
        engineCount: "1"
      },
      location: {
        marina: "Marina Itamaracá",
        berth: "Píer A — Vaga 08",
        condition: "Vaga molhada",
        city: "Ilha de Itamaracá - PE"
      },
      service: {
        type: "Revisão preventiva",
        preferredDate: "2026-11-25",
        preferredPeriod: "Manhã",
        description: "Revisão periódica de 100h, troca de óleo e verificação elétrica do painel.",
        mediaFiles: []
      }
    }
  ];
  fs.writeFileSync(DATA_FILE, JSON.stringify(seed, null, 2), "utf-8");
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
    cb(null, `${Date.now()}-${safeName}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(UPLOADS_DIR));

function readTickets() {
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeTickets(tickets) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tickets, null, 2), "utf-8");
}

app.get("/api/tickets", (_req, res) => {
  res.json(readTickets());
});

app.post("/api/tickets", upload.array("mediaFiles", 5), (req, res) => {
  const b = req.body;

  if (
    !b.clientName ||
    !b.clientPhone ||
    !b.clientEmail ||
    !b.vesselType ||
    !b.vesselModel ||
    !b.vesselYear ||
    !b.engineBrand ||
    !b.marinaName ||
    !b.berthNumber ||
    !b.locationCity ||
    !b.preferredDate ||
    !b.problemDescription
  ) {
    return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
  }

  const tickets = readTickets();
  const nextSeq = String(tickets.length + 1).padStart(3, "0");

  const mediaFiles = (req.files || []).map((file) => ({
    name: file.originalname,
    url: `/uploads/${file.filename}`,
    mimetype: file.mimetype
  }));

  const newTicket = {
    id: `NF-2026-${nextSeq}`,
    status: "Pendente",
    createdAt: new Date().toISOString(),
    client: {
      name: b.clientName.trim(),
      phone: b.clientPhone.trim(),
      email: b.clientEmail.trim(),
      cpf: (b.clientCpf || "").trim()
    },
    vessel: {
      type: b.vesselType.trim(),
      model: b.vesselModel.trim(),
      year: b.vesselYear.trim(),
      engineBrand: b.engineBrand.trim(),
      engineType: b.engineType || "Popa",
      engineCount: b.engineCount || "1"
    },
    location: {
      marina: b.marinaName.trim(),
      berth: b.berthNumber.trim(),
      condition: b.berthCondition || "Vaga molhada",
      city: b.locationCity.trim()
    },
    service: {
      type: b.serviceType || "Revisão preventiva",
      preferredDate: b.preferredDate.trim(),
      preferredPeriod: b.preferredPeriod || "Manhã",
      description: b.problemDescription.trim(),
      mediaFiles
    }
  };

  tickets.unshift(newTicket);
  writeTickets(tickets);
  res.status(201).json(newTicket);
});

app.patch("/api/tickets/:id/status", (req, res) => {
  const { status } = req.body;
  const allowed = ["Pendente", "Agendamento Aprovado", "Em Atendimento", "Concluído"];
  if (!allowed.includes(status)) {
    return res.status(400).json({ error: "Status inválido." });
  }

  const tickets = readTickets();
  const ticket = tickets.find((item) => item.id === req.params.id);
  if (!ticket) {
    return res.status(404).json({ error: "Chamado não encontrado." });
  }

  ticket.status = status;
  writeTickets(tickets);
  res.json(ticket);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});