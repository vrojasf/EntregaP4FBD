db.resenas.insertOne({
    reserva_id: "R99999",
    hotel_id: "H001",
    cliente_id: "U0001",
    comentario: "Sin calificacion"
  })

db.resenas.insertOne({
  reserva_id: "R99998",
  hotel_id: "H001",
  cliente_id: "U0001",
  calificacion: 4
})

db.resenas.updateOne(
    { reserva_id: "R00029" },
    {$set: { calificacion: 4, comentario: 12345 } }
  )