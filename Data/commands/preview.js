exports.run = (Discord, client, message, args, DefaultChallangejson, UserChallangejson, purgeCache, mytimer) => {

  var userchallange = require(UserChallangejson);
  const embed = new Discord.RichEmbed()
    .setTitle("__Map__ » " + userchallange.set.mapname)
    .setAuthor("Challange Number " + userchallange.set.challangenumber.number, userchallange.set.challangenumber.url)
    .setColor(userchallange.set.Hexcolor)
    .setDescription(userchallange.set.discription)
    .setFooter("Challenge By " + userchallange.set.user.Discordname, userchallange.set.user.Discordpic)
    .setImage(userchallange.set.mapimage)
    .setThumbnail(userchallange.set.extraimage)
    .addField("__Challenge Rules__ »", userchallange.set.rules)
    .addField("__Restrictions__ »", userchallange.set.restrictions)
    .addField("Game »", userchallange.set.game, true)
    .addField("Max Players »", userchallange.set.maxplayers, true);

  message.channel.send({ embed });
  purgeCache(UserChallangejson);
  mytimer.start(5);
  mytimer.on("end", function () {
    purgeCache(UserChallangejson);
  });
};