phina.namespace(function () {
  phina.define("PauseScene", {
    superClass: 'DisplayScene',

    init: function (param) {
      this.superInit({
        title: "pause",
        width: kfap.WIDTH_SIZE,
        height: kfap.HEIGHT_SIZE,
      });

      this.backgroundColor = 'rgba(0, 0, 0, 0.7)';

      var self = this;

      var resumeButton = phina.ui.Button({
        text: 'ポーズ解除',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(3),
      }).on('push', function () {
        self.app.popScene();
      });

      var titleButton = phina.ui.Button({
        text: 'タイトルへ戻る',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(5),
      }).on('push', function () {
        resumeButton.remove();
        titleButton.remove();

        yesButton.addChildTo(self);
        noButton.addChildTo(self);
      });

      var yesButton = phina.ui.Button({
        text: 'はい',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(3),
      }).on('push', function () {
        var app = self.app;
        app.popScene(); // ポーズ画面終了
        app.replaceScene(TitleScene()); // メインシーンをタイトルシーンに書換え
      });
      var noButton = phina.ui.Button({
        text: 'いいえ',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(5),
      }).on('push', function () {
        yesButton.remove();
        noButton.remove();

        resumeButton.addChildTo(self);
        titleButton.addChildTo(self);
      });

      resumeButton.addChildTo(this);
      titleButton.addChildTo(this);
    },

  });
});