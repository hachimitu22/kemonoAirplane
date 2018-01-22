phina.namespace(function () {
  phina.define('CreditScene', {
    superClass: 'phina.game.TitleScene',

    init: function (param) {
      this.superInit({
        title: "credit",
        width: kfap.WIDTH_SIZE,
        height: kfap.HEIGHT_SIZE,
      });

      this.backgroundColor = '#8F8';
    },
  });
});