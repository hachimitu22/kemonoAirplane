phina.namespace(function () {

  phina.define("TitleScene", {
    superClass: "phina.display.DisplayScene",

    init: function () {
      this.superInit({
        title: "ABC",
        width: kfap.WIDTH_SIZE,
        height: kfap.HEIGHT_SIZE,
      });
      this.backgroundColor = '#88F';

      var self = this;

      var storyButton = phina.ui.Button({
        text: 'ストーリー',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(3),
      });
      var archivementButton = phina.ui.Button({
        text: '実績',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(5),
      });
      var creditButton = phina.ui.Button({
        text: 'クレジット',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(7),
      });



      var startButton = phina.ui.Button({
        text: 'はじめから',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(5),
      });
      var continueButton = phina.ui.Button({
        text: 'つづきから',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(7),
      });
      var backButton = phina.ui.Button({
        text: '戻る',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.span(9),
      });


      storyButton.on('push', function () {
        storyButton.remove();
        archivementButton.remove();
        creditButton.remove();

        startButton.addChildTo(self);
        continueButton.addChildTo(self);
        backButton.addChildTo(self);
      });
      archivementButton.on('push', function () {
        self.exit('archivement');
      });
      creditButton.on('push', function () {
        self.exit('credit');
      });

      startButton.on('push', function () {
        self.exit('main');
      });
      continueButton.on('push', function () {
        self.exit('main');
      });
      backButton.on('push', function () {
        storyButton.addChildTo(self);
        archivementButton.addChildTo(self);
        creditButton.addChildTo(self);

        startButton.remove();
        continueButton.remove();
        backButton.remove();
      });


      storyButton.addChildTo(this);
      archivementButton.addChildTo(this);
      creditButton.addChildTo(this);
    }
  });
});