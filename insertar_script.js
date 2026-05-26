

db.hoteles.insertMany([
  { _id: "H001", nombre: "Hotel Andes", ciudad: "BOG", ratingPromedio: 0.0 },
  { _id: "H002", nombre: "Hotel Sol", ciudad: "MED", ratingPromedio: 0.0 },
  { _id: "H003", nombre: "Hotel Luna", ciudad: "CAL", ratingPromedio: 0.0 },
  { _id: "H007", nombre: "Hotel Salcedo", ciudad: "BOG", ratingPromedio: 0.0 },
  { _id: "H008", nombre: "Hotel Margarita", ciudad: "MED", ratingPromedio: 0.0 },
  { _id: "H009", nombre: "Hotel Rosas", ciudad: "CAL", ratingPromedio: 0.0 },
  { _id: "H010", nombre: "Hotel Solecitos", ciudad: "BOG", ratingPromedio: 0.0 }
])

db.clientes.insertMany([
  { _id: "CLI100", nombre: "Maria Perez", correo: "maria@email.com" },
  { _id: "CLI101", nombre: "Stefani Germanotta", correo: "stef@email.com" }
])

db.administradores.insertMany([
  { _id: "ADM10", nombre: "Carlos Gomez", hotel_id: "H001" },
  { _id: "ADM11", nombre: "Juan Londoño", hotel_id: "H002" },
  { _id: "ADM12", nombre: "Benito Martinez", hotel_id: "H007" }
])

db.reservas.insertMany([
  { _id: "RES800", cliente_id: "CLI100", hotel_id: "H001", fechaIngreso: "2026-05-10", estado: "completada" },
  { _id: "RES801", cliente_id: "CLI101", hotel_id: "H007", fechaIngreso: "2026-05-12", estado: "completada" },
  { _id: "R00028", cliente_id: "U0008", hotel_id: "H001", fechaIngreso: "2026-07-22", estado: "completada" },
  { _id: "R00070", cliente_id: "U0022", hotel_id: "H002", fechaIngreso: "2026-04-26", estado: "completada" }
])

db.resenas.insertMany([
  { reserva_id: "R00024", hotel_id: "H008", cliente_id: "U0004", calificacion: 2, comentario: "Servicio muy lento", visible: true, destacada: false, votos_utilidad: 0, fecha: "2026-06-12" },
  { reserva_id: "R00025", hotel_id: "H009", cliente_id: "U0005", calificacion: 5, comentario: "Espectacular vista", visible: true, destacada: false, votos_utilidad: 6, fecha: "2026-06-22" },
  { reserva_id: "R00026", hotel_id: "H010", cliente_id: "U0006", calificacion: 4, comentario: "Muy cómodo", visible: true, destacada: false, votos_utilidad: 2, fecha: "2026-07-06" },
  { reserva_id: "R00027", hotel_id: "H007", cliente_id: "U0007", calificacion: 5, comentario: "Atención impecable", visible: true, destacada: true, votos_utilidad: 8, fecha: "2026-07-18" },
  { reserva_id: "R00029", hotel_id: "H001", cliente_id: "U0009", calificacion: 3, comentario: "Aceptable pero caro", visible: true, destacada: false, votos_utilidad: 1, fecha: "2026-08-10" },
  { reserva_id: "R00035", hotel_id: "H001", cliente_id: "U0005", calificacion: 5, comentario: "El mejor hotel de la ciudad", visible: true, destacada: true, votos_utilidad: 10, fecha: "2026-10-01" }
])