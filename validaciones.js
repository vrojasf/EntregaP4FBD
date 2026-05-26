db.runCommand({
    collMod: "hoteles",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "nombre", "ciudad"],
        properties: {
          _id: { bsonType: "string" },
          nombre: { bsonType: "string" },
          ciudad: { bsonType: "string" },
          ratingPromedio: { bsonType: "double" }
        }
      }
    }
  })

db.runCommand({
  collMod: "clientes",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre", "correo"],
      properties: {
        _id: { bsonType: "string" },
        nombre: { bsonType: "string" },
        correo: { bsonType: "string" }
      }
    }
  }
})

db.runCommand({
    collMod: "administradores",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "nombre", "hotel_id"],
        properties: {
          _id: { bsonType: "string" },
          nombre: { bsonType: "string" },
          hotel_id: { bsonType: "string" }
        }
      }
    }
  })

  db.runCommand({
    collMod: "reservas",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "cliente_id", "hotel_id", "fechaIngreso"],
        properties: {
          _id: { bsonType: "string" },
          cliente_id: { bsonType: "string" },
          hotel_id: { bsonType: "string" },
          fechaIngreso: { bsonType: "string" },
          reseña: {
            bsonType: "object",
            properties: {
              calificacion: { bsonType: "int", minimum: 1, maximum: 5 },
              comentario: { bsonType: "string" },
              fecha: { bsonType: "string" }
            }
          }
        }
      }
    }
  })

  db.runCommand({
    collMod: "reseñas",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "hotel_id", "cliente_id", "calificacion", "comentario"],
        properties: {
          _id: { bsonType: "string" },
          hotel_id: { bsonType: "string" },
          cliente_id: { bsonType: "string" },
          reserva_id: { bsonType: "string" },
          calificacion: { bsonType: "int", minimum: 1, maximum: 5 },
          comentario: { bsonType: "string" },
          destacada: { bsonType: "bool" },
          votos_utilidad: { bsonType: "int" },
          visible: { bsonType: "bool" },
          respuesta: {
            bsonType: "object",
            properties: {
              administrador_id: { bsonType: "string" },
              mensaje: { bsonType: "string" },
              fecha: { bsonType: "string" }
            }
          }
        }
      }
    }
  })
  
  db.runCommand({
    collMod: "resenas",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["reserva_id", "hotel_id", "cliente_id", "calificacion", "comentario"],
        properties: {
          reserva_id: { bsonType: "string" },
          hotel_id: { bsonType: "string" },
          cliente_id: { bsonType: "string" },
          calificacion: { bsonType: "int", minimum: 1, maximum: 5 },
          comentario: { bsonType: "string" },
          visible: { bsonType: "bool" },
          destacada: { bsonType: "bool" },
          votos_utilidad: { bsonType: "int" },
          fecha: { bsonType: "string" }
        }
      }
    }
  })