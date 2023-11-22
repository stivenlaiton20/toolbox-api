const data = [
  {
    file: "file1.csv",
    lines: [
      {
        text: "RgTya",
        number: 64075909,
        hex: "aabbccddeeff0011",
      },
    ],
  },
  {
    file: "file2.csv",
    lines: [
      {
        text: "Lorem",
        number: 12345678,
        hex: "2233445566778899",
      },
    ],
  },
  {
    file: "file3.csv",
    lines: [
      {
        text: "Ipsum",
        number: 98765432,
        hex: "0011223344556677",
      },
    ],
  },
  {
    file: "file4.csv",
    lines: [
      {
        text: "Dolor",
        number: 13579246,
        hex: "8899aabbccddeeff",
      },
    ],
  },
  {
    file: "file5.csv",
    lines: [
      {
        text: "Sit",
        number: 24681357,
        hex: "0011223344556677",
      },
    ],
  },
  {
    file: "file6.csv",
    lines: [
      {
        text: "Amet",
        number: 98765432,
        hex: "8899aabbccddeeff",
      },
    ],
  },
  {
    file: "file7.csv",
    lines: [
      {
        text: "Consectetur",
        number: 13579246,
        hex: "0011223344556677",
      },
    ],
  },
  {
    file: "file8.csv",
    lines: [
      {
        text: "Adipiscing",
        number: 24681357,
        hex: "8899aabbccddeeff",
      },
    ],
  },
  {
    file: "file9.csv",
    lines: [
      {
        text: "Elit",
        number: 98765432,
        hex: "0011223344556677",
      },
    ],
  },
  {
    file: "file10.csv",
    lines: [
      {
        text: "Sed",
        number: 13579246,
        hex: "8899aabbccddeeff",
      },
    ],
  },
];

exports.allFiles = async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.oneFileData = (req, res) => {
  const fileName = req.query.fileName;

  if (!fileName) {
    return res.status(400).json({
      code: "BAD_REQUEST",
      message: "File name is required in query parameters",
    });
  }

  const result = data.filter((fileData) => fileData.file === fileName);

  if (result.length === 0) {
    return res.status(404).json({
      code: "NOT_FOUND",
      message: "File not found",
    });
  }

  res.status(200).json(result);
};
