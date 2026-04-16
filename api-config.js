window.UJECA_API = {
  registro: "https://script.google.com/macros/s/AKfycbxE8CIyDb0b2gMBQf_udcLDHkMbJGVVT3imjgEZfNEsoeTV34tUWRQ5iw2YSY4WuOv9/exec",
  listado: "https://script.google.com/macros/s/AKfycbxE8CIyDb0b2gMBQf_udcLDHkMbJGVVT3imjgEZfNEsoeTV34tUWRQ5iw2YSY4WuOv9/exec",
  listadoAlterno: "https://script.google.com/macros/s/AKfycbxE8CIyDb0b2gMBQf_udcLDHkMbJGVVT3imjgEZfNEsoeTV34tUWRQ5iw2YSY4WuOv9/exec",
  pagos: "https://script.google.com/macros/s/AKfycbxE8CIyDb0b2gMBQf_udcLDHkMbJGVVT3imjgEZfNEsoeTV34tUWRQ5iw2YSY4WuOv9/exec"
};

window.UJECA_STORAGE_KEY = "ujeca_registros_locales";

window.normalizarRegistroUJECA = function(registro) {
  if (!registro || typeof registro !== "object") return null;

  const limpio = {};
  Object.keys(registro).forEach((clave) => {
    limpio[clave] = registro[clave] ?? "";
  });

  limpio.Nombre = limpio.Nombre || limpio.nombre || "";
  limpio.Documento = String(limpio.Documento || limpio.documento || limpio.cedula || "").trim();
  limpio.Telefono = limpio.Telefono || limpio.telefono || "";
  limpio.Correo = limpio.Correo || limpio.correo || "";
  limpio.Iglesia = limpio.Iglesia || limpio.iglesia || "";
  limpio.Municipio = limpio.Municipio || limpio.Ciudad || limpio.ciudad || "";
  limpio.Codigo = limpio.Codigo || limpio.codigo || limpio.ID || "";
  limpio.FechaRegistro = limpio.FechaRegistro || limpio.fechaRegistro || limpio.Fecha || "";

  return limpio;
};

window.obtenerRegistrosLocalesUJECA = function() {
  try {
    const raw = localStorage.getItem(window.UJECA_STORAGE_KEY);
    const datos = JSON.parse(raw || "[]");
    return Array.isArray(datos)
      ? datos.map(window.normalizarRegistroUJECA).filter(Boolean)
      : [];
  } catch {
    return [];
  }
};

window.guardarRegistroLocalUJECA = function(registro) {
  const actual = window.obtenerRegistrosLocalesUJECA();
  const normalizado = window.normalizarRegistroUJECA(registro);
  if (!normalizado) return;

  const clave = `${normalizado.Documento}::${normalizado.Correo || normalizado.Nombre}`;
  const sinDuplicado = actual.filter((item) => `${item.Documento}::${item.Correo || item.Nombre}` !== clave);
  sinDuplicado.unshift(normalizado);
  localStorage.setItem(window.UJECA_STORAGE_KEY, JSON.stringify(sinDuplicado));
};

window.unificarRegistrosUJECA = function(remotos) {
  const mapa = new Map();
  const todos = []
    .concat(Array.isArray(remotos) ? remotos : [])
    .concat(window.obtenerRegistrosLocalesUJECA());

  todos.forEach((item) => {
    const normalizado = window.normalizarRegistroUJECA(item);
    if (!normalizado) return;
    const clave = `${normalizado.Documento}::${normalizado.Correo || normalizado.Nombre}`;
    if (!mapa.has(clave)) {
      mapa.set(clave, normalizado);
    }
  });

  return Array.from(mapa.values());
};
