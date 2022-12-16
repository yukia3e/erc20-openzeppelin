const { expect } = require("chai");

describe("Box", () => {
    it("store and retrieve", async () => {
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Box");
        const myToken = await Token.deploy();
        await myToken.deployed();

        await myToken.store(100)
        expect(await myToken.retrieve()).to.equal(100);
    });
});
