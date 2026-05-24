const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = require("../src/app");

describe("Energy Saving System API Tests", () => {

  it("Should return health status", async () => {

    const res = await request(app)
      .get("/api/health");

    expect(res.status).to.equal(200);

  });

});