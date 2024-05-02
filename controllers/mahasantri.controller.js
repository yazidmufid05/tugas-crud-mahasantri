const db = require("../models");
const Mahasantri = db.mahasantris;

exports.index = (req, res) => {
  Mahasantri.findAll()
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil didapat",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal didapat",
      });
    });
};

exports.create = (req, res) => {
  const mahasantri = {
    nama: req.body.nama,
    asal: req.body.asal,
    umur: req.body.umur,
    telepon: req.body.telepon,
  };

  Mahasantri.create(mahasantri)
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal ditambahkan",
      });
    });
};

exports.destroy = (req, res) => {
  const id = req.params.id;
  Mahasantri.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil dihapus",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal dihapus",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Mahasantri.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil diupdate",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal diupdate",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;
  Mahasantri.findByPk(id)
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil didapat",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal didapat",
      });
    });
};
