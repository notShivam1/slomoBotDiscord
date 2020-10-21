const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content.startsWith("!slomo")) {
    if (
      msg.member.roles.cache.some((r) => r.name === "admin") ||
      msg.member.roles.cache.some((r) => r.name === "mod"||msg.member.roles.cache.some((r) => r.name === "Admin") ||
      msg.member.roles.cache.some((r) => r.name === "Mod")
    ) {
      const theMessage = msg.content.split(" ");
      console.log(theMessage);
      console.log(client);
      try {
        const theChannel = await client.channels.cache.find(
          (r) => r.name === theMessage[1]
        );
        console.log(theChannel);
        const done = await theChannel.setRateLimitPerUser(theMessage[2]);
        if (done) {
          console.log("done");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
});

client.login("NzY4NTI4NDI3MzcxNDYyNjY3.X5Bx3w.xy7L1pPsHP_99Fxryw9hhjFTXkM");
