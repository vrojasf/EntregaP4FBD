//rfc1
db.reseñas.aggregate([
    { $match: { fecha: { $gte: "2026-01-01", $lte: "2026-12-31" } } },
    { $group: {
        _id: "$hotel_id",
        calificacionPromedio: { $avg: "$calificacion" },
        totalReseñas: { $sum: 1 }
    }},
    { $sort: { calificacionPromedio: -1 } },
    { $limit: 10 },
    { $lookup: {
        from: "hoteles",
        localField: "_id",
        foreignField: "_id",
        as: "hotel"
    }},
  ])
  
//rfc2
db.reseñas.aggregate([
    { $match: { hotel_id: "H001", fecha: { $regex: "^2026" } } },
    { $group: {
        _id: { $substr: ["$fecha", 0, 7] },
        calificacionPromedio: { $avg: "$calificacion" },
        totalReseñas: { $sum: 1 }
    }},
    { $sort: { _id: 1 } },
    { $project: {
        mes: "$_id",
        calificacionPromedio: 1,
        totalReseñas: 1
    }}
  ])

//rfc3
db.reseñas.aggregate([
    { $lookup: {
        from: "hoteles",
        localField: "hotel_id",
        foreignField: "_id",
        as: "hotel"
    }},
    { $match: { "hotel.ciudad": "BOG" } },
    { $group: {
        _id: "$hotel_id",
        calificacionPromedio: { $avg: "$calificacion" },
        totalReseñas: { $sum: 1 },
        conRespuesta: { $sum: { $cond: [{ $ifNull: ["$respuesta", false] }, 1, 0] } },
        destacadas: { $sum: { $cond: ["$destacada", 1, 0] } },
        nombreHotel: { $first: { $arrayElemAt: ["$hotel.nombre", 0] } }
    }},
    { $project: {
        nombreHotel: 1,
        calificacionPromedio: 1,
        totalReseñas: 1,
        pctConRespuesta: { $multiply: [{$divide: ["$conRespuesta", "$totalReseñas"] }, 100] },
        pctDestacadas: { $multiply: [{$divide: ["$destacadas", "$totalReseñas"] }, 100] }
    }}
  ])
  