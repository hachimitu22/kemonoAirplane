phina.namespace(function () {
  phina.define('ArchievementScene', {
    superClass: 'phina.game.TitleScene',

    init: function (param) {
      this.superInit({
        title: "achievement",
        width: kfap.WIDTH_SIZE,
        height: kfap.HEIGHT_SIZE,
      });

      this.backgroundColor = '#F88';
    },
  });
});