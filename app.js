const CATALOG = [
  {id:"GEN-110", curso:"Cloudera Essentials for CDP (GEN-110)", paths:["Data Engineer","Data Analyst","Data Ops","App Developer","Platform Administrator"], link:"https://education.cloudera.com/content-details/303586047/2", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:0, estado0:"Completado"},
  {id:"DENG-152", curso:"DENG-152 Cloudera Iceberg Fundamentals", paths:["Data Engineer"], link:"https://education.cloudera.com/store/3128041-deng-152-cloudera-iceberg-fundamentals", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:0, estado0:"Completado"},
  {id:"INTRO-DA", curso:"Introducing Cloudera Data Analyst Training", paths:["Data Analyst","Data Governance"], link:"https://education.cloudera.com/store/3086306-introducing-cloudera-data-analyst-training", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"DANA-161", curso:"Introducing Modern Data Architecture", paths:["App Developer","Solutions Architect"], link:"https://education.cloudera.com/store/2920862-dana-161-introducing-modern-data-architecture", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"GEN-117", curso:"CDP Data Service Essentials (GEN-117)", paths:["Solutions Architect","Data Governance","Cloud Administrator"], link:"https://education.cloudera.com/store/3270203-gen-117-cloudera-data-service-essentials", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"GEN-113", curso:"Introducing GIT", paths:["App Developer"], link:"https://education.cloudera.com/store/2998688-gen-113-introducing-git", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"GEN-211", curso:"Datagen", paths:["App Developer"], link:"https://education.cloudera.com/store/2998820-gen-211-datagen-a-data-generation-utility-for-cloudera", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"GEN-111", curso:"Introducing CDP Data services Public Cloud", paths:["App Developer"], link:"https://education.cloudera.com/store/2924499-gen-111-introducing-cloudera-data-services", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"INTRO-NIFI", curso:"Introducing Cloudera Data Flow (NiFi)", paths:["Data Ops"], link:"https://education.cloudera.com/store/2729520-cloudera-dataflow-flow-management-with-apache-nifi-description-only", alt:"https://education.cloudera.com/content-details/2664596/0", tipo:"On Demand / De pago", costo:"De pago (hay alternativa)", horas:4, nivel:"Essential", fase:1},
  {id:"DOPS-245", curso:"Apache NiFi Anti-Patterns", paths:["Data Ops"], link:"https://education.cloudera.com/store/2515343-dops-245-apache-nifi-anti-patterns", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"DENG-157", curso:"DENG-157 Introducing Apache Kafka", paths:["Data Ops"], link:"https://education.cloudera.com/store/2638136-deng-157-introducing-apache-kafka", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"CML-AI", curso:"Building AI Applications with CML", paths:["ML Engineer"], link:"https://education.cloudera.com/store/3035246-cdp-building-ai-applications-with-cml", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"CML-EXP", curso:"Rapidly Build an AI-driven Expense Processing", paths:["ML Engineer"], link:"https://education.cloudera.com/store/3039088-rapidly-build-an-ai-driven-expense-processing-microservice-with-no-code-ui", tipo:"On Demand", costo:"Gratuito", horas:4, nivel:"Essential", fase:1},
  {id:"DENG-255", curso:"DENG-255 Building an Open Data Lakehouse Using Apache Iceberg", paths:["Data Engineer"], link:"https://education.cloudera.com/content-details/4344902/0", tipo:"On Demand", costo:"Gratuito", horas:24, nivel:"Básico", fase:2},
  {id:"DENG-254", curso:"DENG-254 Preparing with Cloudera Data Engineering", paths:["Data Engineer"], link:"https://education.cloudera.com/content-details/3412324/0", tipo:"On Demand", costo:"Gratuito", horas:24, nivel:"Básico", fase:2},
  {id:"DANA-262", curso:"DANA-262 Analyzing with Cloudera Data Warehouse", paths:["Data Analyst"], link:"https://education.cloudera.com/content-details/2692246/0", tipo:"On Demand", costo:"Gratuito", horas:24, nivel:"Básico", fase:2},
  {id:"DOPS-242", curso:"DOPS-242 Ingesting with Cloudera Data Flow", paths:["Data Ops"], link:"https://education.cloudera.com/content-details/4870508/0", tipo:"On Demand", costo:"Gratuito", horas:24, nivel:"Básico", fase:2},
  {id:"DSCI-272", curso:"DSCI-272 Predicting with Cloudera Machine Learning", paths:["ML Engineer"], link:"https://education.cloudera.com/content-details/4577927/0", alt:"https://education.cloudera.com/content-details/3379385/0", tipo:"On Demand", costo:"Gratuito", horas:24, nivel:"Básico", fase:2},
  {id:"HBASE", curso:"Cloudera Training for Apache HBase", paths:["App Developer"], link:"https://education.cloudera.com/content-details/2712670/0", tipo:"On Demand", costo:"Gratuito", horas:18, nivel:"Básico", fase:2},
  {id:"ADMIN-332", curso:"ADMIN-332 Building Secure Cloudera Clusters", paths:["Solutions Architect","Platform Administrator"], link:"https://education.cloudera.com/content-details/3196228/0", tipo:"On Demand", costo:"Gratuito", horas:24, nivel:"Básico", fase:2},
  {id:"ADMIN-336", curso:"ADMIN-336: Running Cloudera on Cloud", paths:["Solutions Architect"], link:"https://education.cloudera.com/content-details/3245311/0", tipo:"On Demand", costo:"Gratuito", horas:24, nivel:"Básico", fase:2},
  {id:"ADMIN-230", curso:"ADMIN-230: Administering Cloudera on premises", paths:["Platform Administrator"], link:"https://education.cloudera.com/content-details/4809505/0", tipo:"On Demand / ILT", costo:"Por confirmar", horas:24, nivel:"Básico", fase:3},
  {id:"DOPS-244", curso:"Cloudera Training for Apache Kafka (DOPS-244)", paths:["Data Ops"], link:"https://education.cloudera.com/store/4948038-ilt-dops-244-apache-kafka-on-cloudera-4948038", tipo:"Sincrónico ILT", costo:"Pago", horas:24, nivel:"Básico", fase:3},
  {id:"ADMIN-335", curso:"ADMIN-335 Running Cloudera Private Cloud", paths:["Solutions Architect","Cloud Administrator"], link:"https://www.cloudera.com/services-and-support/training/courses/running-cloudera-private-cloud.html", tipo:"Sincrónico ILT", costo:"Pago", horas:24, nivel:"Básico", fase:3},
  {id:"ARCH-492", curso:"ARCH-492 Architecting Cloudera Edge to AI", paths:["Solutions Architect"], link:"https://education.cloudera.com/store/4948100-ilt-arch-492-architecting-cloudera-edge-to-ai-4948100", tipo:"Sincrónico ILT", costo:"Pago", horas:24, nivel:"Intermedio", fase:3},
  {id:"DGOV-221", curso:"DGOV-221 Controlling with Cloudera Data Governance", paths:["Data Governance"], link:"https://education.cloudera.com/content-details/3247309/0", tipo:"Sincrónico ILT", costo:"Pago", horas:12, nivel:"Básico", fase:3},
  {id:"ADMIN-231", curso:"ADMIN-231: Monitoring with Cloudera Observability", paths:["Platform Administrator"], link:"https://www.cloudera.com/services-and-support/training/courses/monitoring-with-cloudera-observability.html", tipo:"Sincrónico ILT", costo:"Pago", horas:12, nivel:"Essential", fase:3},
  {id:"ADMIN-237", curso:"ADMIN-237: Administering Apache Ozone", paths:["Cloud Administrator"], link:"https://www.cloudera.com/services-and-support/training/courses/managing-apache-ozone.html", tipo:"Sincrónico ILT", costo:"Pago", horas:18, nivel:"Básico", fase:3},
  {id:"ADMIN-280", curso:"ADMIN-280: Administering Cloudera on cloud", paths:["Cloud Administrator"], link:"https://education.cloudera.com/store/4933530-ilt-admin-280-administering-cloudera-on-cloud-4933530", tipo:"Sincrónico ILT", costo:"Pago", horas:24, nivel:"Básico", fase:3}
];

const PLAN = [
  {semana:0, ini:"2026-04-01", fin:"2026-04-01", id:"GEN-110", nota:"Completado en el calendario original."},
  {semana:0, ini:"2026-04-02", fin:"2026-04-02", id:"DENG-152", nota:"Completado en el calendario original."},
  {semana:1, ini:"2026-09-07", fin:"2026-09-11", id:"INTRO-DA", nota:"Nivel 1 · Data Analyst / Governance."},
  {semana:1, ini:"2026-09-07", fin:"2026-09-11", id:"DANA-161", nota:"Nivel 1 · App Dev / Architect."},
  {semana:2, ini:"2026-09-14", fin:"2026-09-17", id:"GEN-117", nota:"Evitar 18-sep (Fiestas Patrias)."},
  {semana:2, ini:"2026-09-14", fin:"2026-09-17", id:"GEN-113", nota:"Semana corta por feriado."},
  {semana:3, ini:"2026-09-21", fin:"2026-09-25", id:"GEN-211", nota:"Utilidad de generación de datos."},
  {semana:3, ini:"2026-09-21", fin:"2026-09-25", id:"GEN-111", nota:"Data Services en cloud pública."},
  {semana:4, ini:"2026-09-28", fin:"2026-10-02", id:"INTRO-NIFI", nota:"Usar alternativa gratuita si el principal es de pago."},
  {semana:4, ini:"2026-09-28", fin:"2026-10-02", id:"DOPS-245", nota:"Complemento práctico de NiFi."},
  {semana:5, ini:"2026-10-05", fin:"2026-10-09", id:"DENG-157", nota:"Base para Data Ops y streaming."},
  {semana:5, ini:"2026-10-05", fin:"2026-10-09", id:"CML-AI", nota:"Nivel 1 ML Engineer."},
  {semana:6, ini:"2026-10-13", fin:"2026-10-16", id:"CML-EXP", nota:"12-oct feriado. Cierra Fase 1."},
  {semana:7, ini:"2026-10-19", fin:"2026-10-22", id:"DENG-255", nota:"Data Engineer L2. Ya tienes Iceberg Fundamentals."},
  {semana:8, ini:"2026-10-26", fin:"2026-10-29", id:"DENG-254", nota:"Prep certificación Data Engineer."},
  {semana:9, ini:"2026-11-02", fin:"2026-11-05", id:"DANA-262", nota:"Data Analyst L2."},
  {semana:10, ini:"2026-11-09", fin:"2026-11-12", id:"DOPS-242", nota:"Data Ops L2. Después de NiFi intro."},
  {semana:11, ini:"2026-11-16", fin:"2026-11-19", id:"DSCI-272", nota:"ML Engineer L2."},
  {semana:12, ini:"2026-11-23", fin:"2026-11-25", id:"HBASE", nota:"App Developer L2. 3 días."},
  {semana:13, ini:"2026-11-30", fin:"2026-12-03", id:"ADMIN-332", nota:"Architect / Platform Admin. Seguridad."},
  {semana:14, ini:"2026-12-07", fin:"2026-12-11", id:"ADMIN-336", nota:"8-dic feriado: estudiar 7, 9, 10 y 11."},
  {semana:15, ini:"2026-12-14", fin:"2026-12-17", id:"ADMIN-230", nota:"Platform Admin. Modalidad por confirmar."},
  {semana:16, ini:"2026-12-21", fin:"2026-12-23", id:"PREP", curso:"Repaso + exam prep", paths:["Varios"], horas:8, tipo:"On Demand", costo:"Gratuito", nivel:"Prep", fase:2, nota:"Semana corta pre-Navidad.", link:""}
];

const PATHS = [
  {name:"Data Engineer", cert:"CDP Certified Data Engineer", courses:["GEN-110","DENG-152","DENG-255","DENG-254"]},
  {name:"Data Analyst", cert:"CDP Certified Data Analyst", courses:["GEN-110","INTRO-DA","DANA-262"]},
  {name:"Data Ops", cert:"CDP Certified Data Operator", courses:["GEN-110","INTRO-NIFI","DOPS-245","DENG-157","DOPS-244","DOPS-242"]},
  {name:"ML Engineer", cert:"CDP Certified ML Engineer", courses:["CML-AI","CML-EXP","DSCI-272"]},
  {name:"App Developer", cert:"CDP Certified Data Developer", courses:["GEN-110","DANA-161","GEN-113","GEN-211","GEN-111","HBASE"]},
  {name:"Platform Administrator", cert:"CDP Certified Administrator Private Cloud", courses:["GEN-110","ADMIN-231","ADMIN-230","ADMIN-332"]},
  {name:"Cloud Administrator", cert:"CDP Certified Cloud Administrator", courses:["GEN-117","ADMIN-237","ADMIN-280","ADMIN-335"]},
  {name:"Data Governance", cert:"CDP Certified Data Governance", courses:["GEN-117","INTRO-DA","DGOV-221"]},
  {name:"Solutions Architect", cert:"Sin certificación oficial listada", courses:["DANA-161","GEN-117","ADMIN-332","ADMIN-335","ADMIN-336","ARCH-492"]}
];

const byId = Object.fromEntries(CATALOG.map(c => [c.id, c]));
const KEY = "cdp-plan-done-v1";
const done = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
CATALOG.forEach(c => { if (c.estado0 === "Completado") done.add(c.id); });

function save() { localStorage.setItem(KEY, JSON.stringify([...done])); render(); }
function isDone(id) { return done.has(id); }
function toggle(id) {
  if (done.has(id)) done.delete(id); else done.add(id);
  save();
}
function fmt(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("es-CL", {day:"numeric", month:"short"});
}
function faseChip(f) {
  const map = {0:["ok","Fase 0"],1:["fase-1","Fase 1"],2:["fase-2","Fase 2"],3:["fase-3","Fase 3"]};
  const [cls, label] = map[f] || ["pend","Fase"];
  return `<span class="chip ${cls}">${label}</span>`;
}
function statusChip(id, fallbackFase) {
  if (isDone(id)) return `<span class="chip ok">Completado</span>`;
  if (fallbackFase === 3) return `<span class="chip fase-3">A agendar</span>`;
  return `<span class="chip pend">Pendiente</span>`;
}
function matches(item) {
  const q = document.getElementById("q").value.trim().toLowerCase();
  const path = document.getElementById("pathFilter").value;
  const fase = document.getElementById("faseFilter").value;
  const paths = item.paths || [];
  const hay = (item.curso + " " + (item.id||"") + " " + paths.join(" ")).toLowerCase();
  if (q && !hay.includes(q)) return false;
  if (path && !paths.includes(path)) return false;
  if (fase !== "" && String(item.fase) !== fase) return false;
  return true;
}
function kpis() {
  const total = CATALOG.length;
  const nDone = CATALOG.filter(c => isDone(c.id)).length;
  const hrsDone = CATALOG.filter(c => isDone(c.id)).reduce((s,c)=>s+c.horas,0);
  const hrsPend = CATALOG.filter(c => !isDone(c.id)).reduce((s,c)=>s+c.horas,0);
  const ilt = CATALOG.filter(c => c.fase === 3 && !isDone(c.id)).length;
  document.getElementById("kpis").innerHTML = [
    ["Cursos", total],
    ["Completados", nDone],
    ["Pendientes", total - nDone],
    ["Horas hechas", hrsDone + " h"],
    ["Horas restantes", hrsPend + " h"],
    ["ILT por agendar", ilt]
  ].map(([k,v]) => `<div class="kpi"><span>${k}</span><b>${v}</b></div>`).join("");
}
function courseLine(c, extra="") {
  return `<div class="item card" style="box-shadow:none">
    <button class="toggle ${isDone(c.id)?"on":""}" aria-label="Marcar ${c.curso}" onclick="toggle('${c.id}')"></button>
    <div>
      <p class="course-title">${c.curso}</p>
      <div class="meta">
        ${faseChip(c.fase)} ${statusChip(c.id, c.fase)}
        <span>${c.horas} h</span><span>${c.tipo}</span><span>${c.costo}</span>
        <span>${(c.paths||[]).join(" · ")}</span>
      </div>
      ${extra ? `<p class="muted" style="margin:8px 0 0">${extra}</p>` : ""}
    </div>
    <div class="right">${c.link ? `<a href="${c.link}" target="_blank" rel="noopener">Abrir curso</a>${c.alt?` · <a href="${c.alt}" target="_blank" rel="noopener">alternativa</a>`:""}` : ""}</div>
  </div>`;
}
function renderPlan() {
  const groups = new Map();
  PLAN.forEach(p => {
    const c = p.id === "PREP" ? p : byId[p.id];
    if (!c || !matches(c)) return;
    const key = p.semana;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({p, c});
  });
  let html = "";
  for (const [semana, rows] of groups) {
    const first = rows[0].p;
    const title = semana === 0 ? "Ya realizado (abr 2026)" : `Semana ${semana} · ${fmt(first.ini)} – ${fmt(first.fin)}`;
    html += `<div class="week-block"><h3>${title}</h3>${rows.map(({p,c}) => courseLine(c, p.nota)).join("")}</div>`;
  }
  document.getElementById("view-plan").innerHTML = html || `<p class="muted">No hay cursos con ese filtro.</p>`;
}
function renderPaths() {
  document.getElementById("view-paths").innerHTML = PATHS.map(path => {
    const courses = path.courses.map(id => byId[id]).filter(Boolean).filter(matches);
    if (!courses.length && document.getElementById("q").value) return "";
    const all = path.courses.map(id => byId[id]).filter(Boolean);
    const d = all.filter(c => isDone(c.id)).length;
    const pct = all.length ? Math.round(d * 100 / all.length) : 0;
    return `<article class="card path-card" style="margin-bottom:12px">
      <div class="row">
        <h3>${path.name}</h3>
        <span class="chip pend">${d}/${all.length} · ${pct}%</span>
      </div>
      <div class="muted">${path.cert}</div>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <div class="grid" style="margin-top:12px">${courses.map(c => courseLine(c)).join("")}</div>
    </article>`;
  }).join("");
}
function renderCatalog() {
  const rows = CATALOG.filter(matches).map(c => `<tr>
    <td>${c.id}</td>
    <td>${c.curso}<div class="muted">${c.nivel}</div></td>
    <td>${c.paths.join("<br>")}</td>
    <td>${c.horas} h</td>
    <td>${c.tipo}<div class="muted">${c.costo}</div></td>
    <td>${statusChip(c.id, c.fase)}</td>
    <td>${c.link ? `<a href="${c.link}" target="_blank" rel="noopener">Link</a>` : ""}</td>
  </tr>`).join("");
  document.getElementById("view-catalogo").innerHTML = `<div class="card" style="overflow:auto">
    <table><thead><tr><th>Código</th><th>Curso</th><th>Paths</th><th>Horas</th><th>Modalidad</th><th>Estado</th><th></th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}
function renderIlt() {
  const items = CATALOG.filter(c => c.fase === 3 || /Pago|por confirmar|alternativa/i.test(c.costo)).filter(matches);
  document.getElementById("view-ilt").innerHTML = `<div class="card" style="margin-bottom:12px">
    <strong>No tienen fecha fija.</strong>
    <p class="muted">Hay que inscribirse cuando Cloudera publique cupos ILT. DOPS-242, ADMIN-332 y ADMIN-336 tienen versión on-demand: no esperes el sincrónico para esos tres.</p>
  </div>` + items.map(c => courseLine(c)).join("");
}
function render() {
  kpis();
  renderPlan();
  renderPaths();
  renderCatalog();
  renderIlt();
}
const pathSel = document.getElementById("pathFilter");
PATHS.forEach(p => {
  const o = document.createElement("option");
  o.value = p.name; o.textContent = p.name; pathSel.appendChild(o);
});
document.getElementById("q").addEventListener("input", render);
pathSel.addEventListener("change", render);
document.getElementById("faseFilter").addEventListener("change", render);
document.getElementById("tabs").addEventListener("click", e => {
  const btn = e.target.closest("button"); if (!btn) return;
  document.querySelectorAll("nav.tabs button").forEach(b => b.classList.toggle("active", b === btn));
  ["plan","paths","catalogo","ilt"].forEach(v => {
    document.getElementById("view-"+v).classList.toggle("hidden", v !== btn.dataset.view);
  });
});
render();
