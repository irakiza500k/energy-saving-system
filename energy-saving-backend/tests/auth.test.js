const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = require("../src/app");

describe("Authentication API", () => {

  it("Should reject invalid login", async () => {

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "wrong@gmail.com",
        password: "wrong"
      });

    expect(res.status).to.equal(401);

  });

});