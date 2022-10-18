# MetaBot

This is a boilerplate for Discord bots using the Discord.js library. It is designed to be easy to use and easy to understand.

Create a file called config.json in the root directory of the project. The file should contain the following:


Download the latest version of the bot from the releases page and extract it to the root directory of the project. Then run the following command to install the dependencies:

```
npm install
```

Then run the following command to start the bot:

```

```
{
	"token": "YOUR_TOKEN_HERE",
    "clientId": "YOUR_CLIENT_ID_HERE",
	"guildId": "YOUR_GUILD_ID_HERE",
}
```

Instal pm2 or just run with node


```
pm2 restart index.js
```
or

```
node index.js
```

To deploy new commands, run the following command:

```
node deploy-commands.js
```

Invite the bot to your server using the following link:

```
https://discord.com/api/oauth2/authorize?client_id=1032004910528598119&permissions=8&scope=bot%20applications.commands
```
