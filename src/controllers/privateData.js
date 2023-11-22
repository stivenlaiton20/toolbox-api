const fs = require("fs");
const path = require("path");

exports.allFiles = async (req, res) => {
  try {
    res.status(200).json({
      files: [
        "test1.csv",
        "test2.csv",
        "test3.csv",
        "test4.csv",
        "test5.csv",
        "test6.csv",
        "test7.csv",
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.oneFile = async (req, res) => {
  let file = req.params.file;
  const folderPath = path.join(__dirname, "..", "files");

  try {
    const filePath = path.join(folderPath, file);
    if (!fs.existsSync(filePath)) {
      res.status(404).json({
        code: "NOT_FOUND",
        message: "File not found",
      });
      return;
    }

    res.download(filePath, file);
  } catch (error) {
    console.error(`Error al procesar el archivo ${file}: ${error.message}`);
    res.status(500).json({
      code: "INTERNAL_ERROR",
      message: "Internal Server Error",
    });
  }
};
