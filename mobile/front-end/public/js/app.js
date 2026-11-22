const state = {
  user: {
    name: "Mariana Silva",
    email: "mariana.silva@nautica.com",
    phone: "(81) 98765-4321",
    role: "Cliente"
  },
  selectedRegRole: "Cliente",
  ticketsFilter: "Todos",
  tickets: [
    {
      id: "#NF-000123",
      service: "Manutenção",
      date: "12/09/2026 - 14:30",
      status: "Pendente",
      vessel: "Lancha 250 (Sea Breeze)",
      location: "Marina Paulista - Vaga 12"
    },
    {
      id: "#NF-000122",
      service: "Reparo no motor",
      date: "10/09/2026 - 09:15",
      status: "Em andamento",
      vessel: "Lancha 250 (Sea Breeze)",
      location: "Marina Paulista - Vaga 12"
    },
    {
      id: "#NF-000121",
      service: "Revisão geral",
      date: "05/09/2026 - 16:20",
      status: "Concluído",
      vessel: "Lancha 250 (Sea Breeze)",
      location: "Marina Paulista - Vaga 12"
    },
    {
      id: "#NF-000120",
      service: "Manutenção elétrica",
      date: "28/08/2026 - 11:10",
      status: "Concluído",
      vessel: "Lancha 250 (Sea Breeze)",
      location: "Marina Paulista - Vaga 12"
    }
  ],
  notifications: [
    {
      icon: "✓",
      bg: "#38b26f",
      title: "Seu chamado foi recebido!",
      time: "14:32",
      text: "Seu chamado #NF-000123 foi registrado e já está em análise."
    },
    {
      icon: "👤",
      bg: "#2563eb",
      title: "Mecânico atribuído",
      time: "14:45",
      text: "O mecânico Carlos foi notificado sobre o seu chamado."
    },
    {
      icon: "🔧",
      bg: "#0d9488",
      title: "Em atendimento",
      time: "15:10",
      text: "O mecânico já está a caminho para realizar o atendimento."
    },
    {
      icon: "🏷️",
      bg: "#e11d48",
      title: "Promoção especial",
      time: "Ontem",
      text: "Confira nossa revisão completa com condições especiais!"
    },
    {
      icon: "📅",
      bg: "#072540",
      title: "Lembrete",
      time: "05/09",
      text: "Sua embarcação está com a próxima revisão em 30 dias."
    }
  ]
};

const views = Array.from(document.querySelectorAll(".app-view"));
const statusBar = document.getElementById("iosStatusBar");
const bottomTabBar = document.getElementById("bottomTabBar");
const btabs = Array.from(document.querySelectorAll(".btab"));

const darkTopViews = new Set([
  "splash",
  "home",
  "new-step-1",
  "new-step-2",
  "confirmation",
  "tickets",
  "notifications",
  "profile",
  "vessels"
]);

const tabBarViews = new Set(["home", "tickets", "vessels", "profile"]);

function navigate(viewId) {
  views.forEach((v) => v.classList.toggle("active", v.id === `view-${viewId}`));
  statusBar.classList.toggle("dark-text-white", darkTopViews.has(viewId));
  bottomTabBar.classList.toggle("hidden", !tabBarViews.has(viewId));

  btabs.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.go === viewId);
  });

  if (viewId === "tickets") renderTickets();
  if (viewId === "notifications") renderNotifications();
}

// Splash automático -> Login (e clique também avança na hora)
const splashTimer = setTimeout(() => navigate("login"), 2000);
document.getElementById("view-splash").addEventListener("click", () => {
  clearTimeout(splashTimer);
  navigate("login");
});

// Delegação de navegação para qualquer botão com data-go
document.body.addEventListener("click", (event) => {
  const target = event.target.closest("[data-go]");
  if (!target) return;
  navigate(target.dataset.go);
});

// Mostrar / ocultar senha
document.querySelectorAll(".eye-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
  });
});

// Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = document.getElementById("loginEmail").value.trim();
  if (emailVal && !emailVal.includes("mariana")) {
    state.user.name = emailVal.split("@")[0];
    state.user.email = emailVal;
  }
  syncUserUI();
  navigate("home");
});

document.querySelectorAll(".btn-social").forEach((btn) => {
  btn.addEventListener("click", () => {
    syncUserUI();
    navigate("home");
  });
});

document.getElementById("forgotPassBtn").addEventListener("click", () => {
  alert("Enviamos um link de redefinição de senha para o seu e-mail cadastrado.");
});

// Cadastro
document.getElementById("registerRoleControl").addEventListener("click", (e) => {
  const btn = e.target.closest(".seg-btn");
  if (!btn) return;
  document.querySelectorAll("#registerRoleControl .seg-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  state.selectedRegRole = btn.dataset.role;
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.user = {
    name: document.getElementById("regName").value.trim(),
    email: document.getElementById("regEmail").value.trim(),
    phone: document.getElementById("regPhone").value.trim(),
    role: state.selectedRegRole
  };
  syncUserUI();
  navigate("home");
});

function syncUserUI() {
  const firstName = state.user.name.split(" ")[0] || "Mariana";
  document.getElementById("homeGreeting").textContent = `Olá, ${firstName}!`;
  document.getElementById("profileFullName").textContent = state.user.name;
  document.getElementById("profileRoleText").textContent = state.user.role;
  document.getElementById("profileAvatarInitials").textContent = state.user.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() || "")
    .join("");

  document.getElementById("fClientName").value = state.user.name;
  document.getElementById("fClientPhone").value = state.user.phone;
}

// Alternar rapidamente entre Cliente / Mecânico / Administrador no ícone de engrenagem do Perfil
document.getElementById("switchRoleQuick").addEventListener("click", () => {
  const order = ["Cliente", "Mecânico", "Administrador"];
  const next = order[(order.indexOf(state.user.role) + 1) % order.length];
  state.user.role = next;
  syncUserUI();
  alert(`Modo de visão alterado para: ${next}`);
});

// Etapa 1 -> Etapa 2
document.getElementById("useGpsBtn").addEventListener("click", () => {
  document.getElementById("fLocationAddress").value = "Marina do Forte — Píer A, Vaga 08, Olinda/PE";
});

document.getElementById("toStep2Btn").addEventListener("click", () => {
  const name = document.getElementById("fClientName").value.trim();
  const model = document.getElementById("fVesselModel").value.trim();
  if (!name || !model) {
    alert("Preencha o nome do cliente e o modelo da embarcação.");
    return;
  }
  navigate("new-step-2");
});

// Seleção do Tipo de Serviço
document.getElementById("serviceTypeGrid").addEventListener("click", (e) => {
  const box = e.target.closest(".srv-box");
  if (!box) return;
  document.querySelectorAll(".srv-box").forEach((b) => b.classList.remove("active"));
  box.classList.add("active");
  document.getElementById("fServiceType").value = box.dataset.srv;
});

// Contador de arquivos anexados
const mediaInput = document.getElementById("fMediaFiles");
mediaInput.addEventListener("change", () => {
  const count = mediaInput.files?.length || 0;
  document.getElementById("mediaCountLabel").textContent =
    count > 0 ? `${count} arquivo(s) selecionado(s)` : "Nenhum arquivo anexado";
});

// Finalizar Chamado (envia para o backend Node + adiciona na lista e abre Confirmação)
document.getElementById("ticketSubmitForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const service = document.getElementById("fServiceType").value;
  const dateRaw = document.getElementById("fPrefDate").value;
  const desc = document.getElementById("fProblemDesc").value.trim();
  const vesselType = document.getElementById("fVesselType").value;
  const vesselModel = document.getElementById("fVesselModel").value.trim();
  const vesselName = document.getElementById("fVesselName").value.trim();
  const location = document.getElementById("fLocationAddress").value.trim();

  const nextNum = 124 + state.tickets.length;
  const code = `#NF-000${nextNum}`;

  const formattedDate = dateRaw
    ? `${dateRaw.split("-").reverse().join("/")} - 09:00`
    : "23/11/2026 - 09:00";

  // Também tenta registrar na API Node.js em segundo plano
  try {
    const fd = new FormData();
    fd.append("clientName", document.getElementById("fClientName").value);
    fd.append("clientPhone", document.getElementById("fClientPhone").value);
    fd.append("clientEmail", state.user.email);
    fd.append("vesselType", vesselType);
    fd.append("vesselModel", vesselModel);
    fd.append("vesselYear", document.getElementById("fVesselYear").value);
    fd.append("engineBrand", document.getElementById("fEngineBrand").value || "Mercury");
    fd.append("engineType", "Popa");
    fd.append("engineCount", "1");
    fd.append("marinaName", location);
    fd.append("berthNumber", "Vaga 12");
    fd.append("berthCondition", document.getElementById("fBerthType").value);
    fd.append("locationCity", "Paulista - PE");
    fd.append("serviceType", service);
    fd.append("preferredDate", dateRaw || "2026-11-23");
    fd.append("preferredPeriod", document.getElementById("fPrefPeriod").value);
    fd.append("problemDescription", desc);
    Array.from(mediaInput.files || []).forEach((f) => fd.append("mediaFiles", f));
    await fetch("/api/tickets", { method: "POST", body: fd });
  } catch (_) {
    // Mantém fluxo fluido no simulador
  }

  state.tickets.unshift({
    id: code,
    service,
    date: formattedDate,
    status: "Pendente",
    vessel: `${vesselType} ${vesselModel} (${vesselName})`,
    location
  });

  state.notifications.unshift({
    icon: "✓",
    bg: "#38b26f",
    title: "Seu chamado foi recebido!",
    time: "Agora",
    text: `Seu chamado ${code} foi registrado e já está em análise.`
  });

  document.getElementById("homeNotifBadge").textContent = String(state.notifications.length);
  document.getElementById("createdProtocolCode").textContent = code;
  document.getElementById("ticketSubmitForm").reset();
  document.getElementById("mediaCountLabel").textContent = "Nenhum arquivo anexado";

  navigate("confirmation");
});

// Filtros e renderização de Meus Chamados
document.getElementById("ticketsFilterTabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".tf-tab");
  if (!tab) return;
  document.querySelectorAll(".tf-tab").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  state.ticketsFilter = tab.dataset.filter;
  renderTickets();
});

function renderTickets() {
  const container = document.getElementById("ticketsListContainer");
  const filtered = state.tickets.filter((t) => {
    if (state.ticketsFilter === "Todos") return true;
    if (state.ticketsFilter === "Em andamento") return t.status === "Pendente" || t.status === "Em andamento";
    return t.status === "Concluído";
  });

  const isStaff = state.user.role === "Mecânico" || state.user.role === "Administrador";

  container.innerHTML = filtered
    .map((t) => {
      const badgeClass =
        t.status === "Concluído"
          ? "badge-concluido"
          : t.status === "Em andamento"
          ? "badge-andamento"
          : "badge-pendente";

      const staffControls = isStaff
        ? `<div class="staff-mini-actions">
            <button type="button" class="mini-act-btn" data-id="${t.id}" data-status="Em andamento">Iniciar</button>
            <button type="button" class="mini-act-btn" data-id="${t.id}" data-status="Concluído">Concluir</button>
          </div>`
        : "";

      return `
        <article class="nf-ticket-card">
          <div class="ntc-top">
            <strong>${t.id}</strong>
            <span class="badge-pill ${badgeClass}">${t.status}</span>
          </div>
          <div class="ntc-service">${t.service}</div>
          <div class="ntc-date">${t.date}</div>
          ${staffControls}
        </article>
      `;
    })
    .join("");
}

document.getElementById("ticketsListContainer").addEventListener("click", (e) => {
  const btn = e.target.closest(".mini-act-btn");
  if (!btn) return;
  const item = state.tickets.find((t) => t.id === btn.dataset.id);
  if (item) {
    item.status = btn.dataset.status;
    renderTickets();
  }
});

function renderNotifications() {
  document.getElementById("notificationsContainer").innerHTML = state.notifications
    .map(
      (n) => `
      <div class="notif-card">
        <div class="notif-circle" style="background:${n.bg}">${n.icon}</div>
        <div class="notif-body">
          <div class="notif-head">
            <strong>${n.title}</strong>
            <span>${n.time}</span>
          </div>
          <p>${n.text}</p>
        </div>
      </div>
    `
    )
    .join("");
}

document.getElementById("supportBtn").addEventListener("click", () => {
  alert("Central Náutica Forte Service: (81) 98765-4321 • Atendimento 24h para emergências.");
});

// Inicializa no Splash por 2 segundos e segue para o Login
syncUserUI();
