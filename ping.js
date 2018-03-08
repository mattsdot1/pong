import discord
from discord.ext import commands

bot = commands.Bot("!!")

@bot.event
async def on_ready():
    print("bot online")


@bot.command(pass_context=True)
async def ping(ctx):
    await bot.say("Pong!")


@bot.command(pass_context=True)
async def hello(ctx):
    await bot.say("hi :wave:")



bot.run("NDIxNDAxMjIwNzkyNTgyMTY5.DYMu5g.4pdC-WZnqZecKEu7U18o7dMuy8w")
