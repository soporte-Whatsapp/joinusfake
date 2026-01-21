// editar.js
function qs(id){ return document.getElementById(id); }

function loadFromStorage(){
  const raw = localStorage.getItem("TICKET_EDIT");
  if(!raw) return null;
  try{ return JSON.parse(raw); }catch{ return null; }
}

function saveToStorage(data){
  localStorage.setItem("TICKET_EDIT", JSON.stringify(data));
}

const initial = loadFromStorage() || {
  evento: "NOCHE BLANQUIAZUL 2026",
  ubicacion: "Sur – 20% Dsct.",
  pais: "Perú",
  tipo: "DNI",
  numero: "73092753",
  nombres: "",
  apellidos: ""
};

// pintar arriba
qs("evento").textContent = initial.evento;
qs("ubicacion").textContent = initial.ubicacion;
qs("pais").textContent = initial.pais;
qs("tipo").textContent = initial.tipo;
qs("numero").value = initial.numero;
qs("nombres").value = initial.nombres;
qs("apellidos").value = initial.apellidos;

qs("limpiarBtn").addEventListener("click", ()=>{
  qs("numero").value = "";
  qs("nombres").value = "";
  qs("apellidos").value = "";
});

qs("guardarBtn").addEventListener("click", ()=>{
  const data = {
    ...initial,
    numero: qs("numero").value.trim(),
    nombres: qs("nombres").value.trim(),
    apellidos: qs("apellidos").value.trim()
  };
  saveToStorage(data);
  window.location.href = "./participante.html";
});
