function getTicketId() {
  const url = new URL(window.location.href);
  return Number(url.searchParams.get("id") || 1);
}

function applyTicketToUI(t) {
  const mapText = {
    evento: t.evento,
    ubicacion: t.ubicacion,
    pais: t.pais,
    tipo: t.tipo,
  };

  const mapValue = {
    numero: t.numero,
    nombres: t.nombres,
    apellidos: t.apellidos,
  };

  for (const id in mapText) {
    const el = document.getElementById(id);
    if (el) el.textContent = mapText[id] ?? "";
  }

  for (const id in mapValue) {
    const el = document.getElementById(id);
    if (el) el.value = mapValue[id] ?? "";
  }
}

function loadTicket() {
  const id = getTicketId();
  const list = window.TICKETS || [];
  const t = list.find(x => x.id === id) || list[0];
  if (!t) return;
  applyTicketToUI(t);
}

document.addEventListener("DOMContentLoaded", loadTicket);

// Lee lo guardado desde editar.html y lo refleja
(function(){
  const raw = localStorage.getItem("TICKET_EDIT");
  if(!raw) return;
  try{
    const d = JSON.parse(raw);
    if(d.evento) document.getElementById("evento").textContent = d.evento;
    if(d.ubicacion) document.getElementById("ubicacion").textContent = d.ubicacion;
    if(d.pais) document.getElementById("pais").textContent = d.pais;
    if(d.tipo) document.getElementById("tipo").textContent = d.tipo;
    if(d.numero) document.getElementById("numero").value = d.numero;
    if(d.nombres) document.getElementById("nombres").value = d.nombres;
    if(d.apellidos) document.getElementById("apellidos").value = d.apellidos;
  }catch(e){}
})();
