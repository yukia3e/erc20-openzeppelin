const { expect } = require("chai");

describe("MyToken", () => {
    it("name", async () => {
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("MyToken");
        const myToken = await Token.deploy();
        await myToken.deployed();

        expect(await myToken.name()).to.equal("MyToken")
    });
});