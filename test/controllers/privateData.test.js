const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");

chai.use(chaiHttp);
chai.should();

describe("Files API", () => {
  describe("/GET files", () => {
    it("should get all files", (done) => {
      chai
        .request(app)
        .get("/v1/secret/file")
        .set("Authorization", "Bearer aSuperSecretKey")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("/GET files", () => {
    it("it should return 401", (done) => {
      chai
        .request(app)
        .get("/v1/secret/file")
        .set("Authorization", "Bearer CualquierKey")
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a("string");
          done();
        });
    });
  });

  describe("/GET file/:file", () => {
    it("should get a specific file", (done) => {
      chai
        .request(app)
        .get("/v1/secret/file/test1.csv")
        .set("Authorization", "Bearer aSuperSecretKey")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("it should return 401", (done) => {
      chai
        .request(app)
        .get("/v1/secret/file/test1.csv")
        .set("Authorization", "Bearer CualquierKey")
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a("string");
          done();
        });
    });

    it("it should return 404 for a non-existing file", (done) => {
      chai
        .request(app)
        .get("/v1/secret/file/nonExistingFile.csv")
        .set("Authorization", "Bearer aSuperSecretKey")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("NOT_FOUND");
          res.body.should.have.property("message").eql("File not found");
          done();
        });
    });
  });
});
