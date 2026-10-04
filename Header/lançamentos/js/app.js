const lancamentos = [
  { id: 1, data: "2026-10-01", descricao: "Mercado", tipo: "despesa", cliente: "—", valor: 230.45 },
  { id: 2, data: "2026-09-29", descricao: "Salário", tipo: "receita", cliente: "Empresa", valor: 1850.00 },
  { id: 3, data: "2026-09-27", descricao: "Mercado", tipo: "despesa", cliente: "—", valor: 154.30 },
  { id: 4, data: "2026-09-25", descricao: "Freelance", tipo: "receita", cliente: "Cliente A", valor: 650.00 },
  { id: 5, data: "2026-09-22", descricao: "Internet", tipo: "despesa", cliente: "Operadora", valor: 99.90 },
  { id: 6, data: "2026-09-20", descricao: "Transporte", tipo: "despesa", cliente: "—", valor: 75.50 },
  { id: 7, data: "2026-09-15", descricao: "Venda", tipo: "receita", cliente: "Cliente B", valor: 320.00 },
  { id: 8, data: "2026-09-10", descricao: "Farmácia", tipo: "despesa", cliente: "—", valor: 87.40 },
  { id: 9, data: "2026-09-05", descricao: "Aluguel", tipo: "despesa", cliente: "Imobiliária", valor: 900.00 },
  { id: 10, data: "2026-08-30", descricao: "Projeto", tipo: "receita", cliente: "Cliente C", valor: 1200.00 },
  { id: 11, data: "2026-08-27", descricao: "Restaurante", tipo: "despesa", cliente: "—", valor: 65.80 },
  { id: 12, data: "2026-08-20", descricao: "Venda", tipo: "receita", cliente: "Cliente D", valor: 450.00 }
];

let ordemRecente = true;


const $ = (id) => document.getElementById(id);

function formatarData(data) {
  if (!data) return "—";

  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano.slice(2)}`;
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(valor) || 0);
}

function dataHojeISO() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

/* =========================================================
   FILTROS
========================================================= */

function obterLancamentosFiltrados() {
  const termo = $("busca").value.trim().toLowerCase();
  const tipoSelecionado = $("tipoFiltro").value;
  const periodoSelecionado = $("periodo").value;

  const hoje = new Date();
  hoje.setHours(12, 0, 0, 0);

  return lancamentos
    .filter((item) => {
      const textoBusca = [
        item.descricao,
        item.cliente,
        item.tipo
      ].join(" ").toLowerCase();

      const buscaOK = !termo || textoBusca.includes(termo);

      const tipoOK =
        tipoSelecionado === "todos" ||
        item.tipo === tipoSelecionado;

      let periodoOK = true;

      if (periodoSelecionado !== "todos") {
        const dataItem = new Date(`${item.data}T12:00:00`);
        const diferenca = Math.floor(
          (hoje - dataItem) / 86400000
        );

        if (periodoSelecionado === "hoje") {
          periodoOK = diferenca === 0;
        }

        if (periodoSelecionado === "7dias") {
          periodoOK = diferenca >= 0 && diferenca <= 7;
        }

        if (periodoSelecionado === "30dias") {
          periodoOK = diferenca >= 0 && diferenca <= 30;
        }
      }

      return buscaOK && tipoOK && periodoOK;
    })
    .sort((a, b) => {
      const diferenca =
        new Date(b.data) - new Date(a.data);

      return ordemRecente ? diferenca : -diferenca;
    });
}

/* =========================================================
   TABELA
========================================================= */

function renderizar() {
  const filtrados = obterLancamentosFiltrados();

  $("contador").textContent = filtrados.length;

  if (filtrados.length === 0) {
    $("tabelaArea").style.display = "none";
    $("estadoVazio").classList.add("mostrar");

    const termo = $("busca").value.trim();

    $("mensagemVazio").textContent = termo
      ? `Não encontramos lançamentos com o termo "${termo}".`
      : "Não encontramos lançamentos que correspondam aos filtros selecionados.";

    return;
  }

  $("tabelaArea").style.display = "block";
  $("estadoVazio").classList.remove("mostrar");

  $("tabela").innerHTML = filtrados.map((item) => `
    <tr>
      <td class="check">
        <input
          type="checkbox"
          class="check-item"
          data-id="${item.id}"
          aria-label="Selecionar ${item.descricao}"
        >
      </td>

      <td>${formatarData(item.data)}</td>

      <td>
        <strong>${item.descricao}</strong>
      </td>

      <td>
        <span class="tipo ${item.tipo}">
          ${item.tipo === "receita" ? "Receita" : "Despesa"}
        </span>
      </td>

      <td>${item.cliente}</td>

      <td class="valor ${item.tipo}">
        ${item.tipo === "receita" ? "+" : "-"}
        ${formatarMoeda(item.valor)}
      </td>

      <td>
        <div class="acoes">
          <button
            type="button"
            class="btn-acao"
            data-acao="editar"
            data-id="${item.id}"
          >
            Editar
          </button>

          <button
            type="button"
            class="btn-acao"
            data-acao="excluir"
            data-id="${item.id}"
          >
            Excluir
          </button>
        </div>
      </td>
    </tr>
  `).join("");

  $("selecionarTodos").checked = false;
}

/* =========================================================
   EDIÇÃO
========================================================= */

function editarLancamento(id) {
  const item = lancamentos.find(
    (lancamento) => lancamento.id === id
  );

  if (!item) return;

  $("edicaoId").value = item.id;
  $("edicaoDescricao").value = item.descricao;
  $("edicaoCliente").value = item.cliente === "—" ? "" : item.cliente;
  $("edicaoTipo").value = item.tipo;
  $("edicaoValor").value = item.valor;
  $("edicaoData").value = item.data;

  $("modalEdicao").classList.add("mostrar");
  document.body.classList.add("modal-aberto");

  setTimeout(() => {
    $("edicaoDescricao").focus();
  }, 50);
}

function fecharEdicao() {
  $("modalEdicao").classList.remove("mostrar");
  document.body.classList.remove("modal-aberto");
}

$("formEdicao").addEventListener("submit", (event) => {
  event.preventDefault();

  const id = Number($("edicaoId").value);

  const item = lancamentos.find(
    (lancamento) => lancamento.id === id
  );

  if (!item) return;

  item.descricao = $("edicaoDescricao").value.trim();
  item.cliente = $("edicaoCliente").value.trim() || "—";
  item.tipo = $("edicaoTipo").value;
  item.valor = Number($("edicaoValor").value);
  item.data = $("edicaoData").value;

  fecharEdicao();
  renderizar();
});

$("fecharEdicao").addEventListener("click", fecharEdicao);
$("fecharModalEdicao").addEventListener("click", fecharEdicao);

$("modalEdicao").addEventListener("click", (event) => {
  if (event.target === $("modalEdicao")) {
    fecharEdicao();
  }
});

/* =========================================================
   EXCLUSÃO
========================================================= */

function excluirLancamento(id) {
  const index = lancamentos.findIndex(
    (lancamento) => lancamento.id === id
  );

  if (index === -1) return;

  const item = lancamentos[index];

  const confirmar = window.confirm(
    `Deseja excluir o lançamento "${item.descricao}"?`
  );

  if (!confirmar) return;

  lancamentos.splice(index, 1);
  renderizar();
}

/* =========================================================
   NOVO LANÇAMENTO
========================================================= */

function abrirNovoLancamento() {
  $("formLancamento").reset();
  $("novaData").value = dataHojeISO();

  $("modal").classList.add("mostrar");
  document.body.classList.add("modal-aberto");

  setTimeout(() => {
    $("novaDescricao").focus();
  }, 50);
}

function fecharNovoLancamento() {
  $("modal").classList.remove("mostrar");
  document.body.classList.remove("modal-aberto");
}

$("abrirModal").addEventListener(
  "click",
  abrirNovoLancamento
);

$("cancelarNovo").addEventListener(
  "click",
  fecharNovoLancamento
);

$("fecharModal").addEventListener(
  "click",
  fecharNovoLancamento
);

$("modal").addEventListener("click", (event) => {
  if (event.target === $("modal")) {
    fecharNovoLancamento();
  }
});

$("formLancamento").addEventListener("submit", (event) => {
  event.preventDefault();

  const descricao = $("novaDescricao").value.trim();
  const cliente = $("novoCliente").value.trim() || "—";
  const tipo = $("novoTipo").value;
  const valor = Number($("novoValor").value);
  const data = $("novaData").value;

  if (!descricao || !data || !valor || valor <= 0) {
    return;
  }

  lancamentos.push({
    id: Date.now(),
    data,
    descricao,
    tipo,
    cliente,
    valor
  });

  fecharNovoLancamento();
  event.target.reset();
  renderizar();
});

/* =========================================================
   FILTROS / ORDENAÇÃO
========================================================= */

$("busca").addEventListener("input", renderizar);
$("periodo").addEventListener("change", renderizar);
$("tipoFiltro").addEventListener("change", renderizar);

$("ordenar").addEventListener("click", () => {
  ordemRecente = !ordemRecente;

  $("ordenar").textContent = ordemRecente
    ? "↕ Mais recentes"
    : "↕ Mais antigos";

  renderizar();
});

/* =========================================================
   EVENTOS DA TABELA
========================================================= */

$("tabela").addEventListener("click", (event) => {
  const botao = event.target.closest("[data-acao]");

  if (!botao) return;

  const id = Number(botao.dataset.id);
  const acao = botao.dataset.acao;

  if (acao === "editar") {
    editarLancamento(id);
  }

  if (acao === "excluir") {
    excluirLancamento(id);
  }
});

$("selecionarTodos").addEventListener("change", (event) => {
  document.querySelectorAll(".check-item").forEach((checkbox) => {
    checkbox.checked = event.target.checked;
  });
});

/* =========================================================
   MENU LATERAL
========================================================= */

document.querySelectorAll(".menu__item").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelectorAll(".menu__item").forEach((menuItem) => {
      menuItem.classList.remove("ativo");
    });

    item.classList.add("ativo");
  });
});

/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if ($("modalEdicao").classList.contains("mostrar")) {
    fecharEdicao();
    return;
  }

  if ($("modal").classList.contains("mostrar")) {
    fecharNovoLancamento();
  }
});

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderizar();
