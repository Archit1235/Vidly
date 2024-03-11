const jwt = require("jsonwebtoken");
const { User } = require("../../../models/user");
const mongoose = require("mongoose");

describe("user.generateAuthToken", () => {
  it("valid JWT", () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      isAdmin: true,
    };
    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, "vidly_jwtPrivateKey");
    expect(decoded).toMatchObject(payload);
  });
});
