const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");

chai.use(chaiHttp);
chai.should();

describe("Public Data API", () => {
  describe("/GET files/data", () => {
    it("it should get all public files ", (done) => {
      chai
        .request(app)
        .get("/files/data")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");

          done();
        });
    });
  });

  describe("/GET file/data", () => {
    it("it should get  a specific file", (done) => {
      const fileName = "file2.csv";
      chai
        .request(app)
        .get(`/file/data?fileName=${fileName}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    it("it should return 404 for a non-existing file", (done) => {
      const nonExistingFileName = "nonExistingFile.csv";
      chai
        .request(app)
        .get(`/file/data?fileName=${nonExistingFileName}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("NOT_FOUND");
          done();
        });
    });

    it("it should return 400", (done) => {
      chai
        .request(app)
        .get("/file/data")
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("BAD_REQUEST");
          done();
        });
    });
  });
});
