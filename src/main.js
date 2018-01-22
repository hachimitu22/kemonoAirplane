phina.globalize();

var kfap = kfap || {};
kfap.WIDTH_SIZE = 640;
kfap.HEIGHT_SIZE = 320;
kfap.BASE_LINE = 300;
kfap.GLAVITY = 0.5;
kfap.DIRECTION = {};
kfap.DIRECTION.RIGHT = 1;
kfap.DIRECTION.LEFT = -1;

var ASSETS = {
  image: {
    "kaban2": 'https://rawgit.com/hachimitu22/kemonoAirplane/test/res/assets/img/kaban2.png',
    "paperairplane2": 'https://rawgit.com/hachimitu22/kemonoAirplane/test/res/assets/img/paperairplane2.png',
  },
};

phina.main(function () {
  var app = GameApp({
    width: kfap.WIDTH_SIZE,
    height: kfap.HEIGHT_SIZE,
    assets: ASSETS,
    scenes: [
      {
        className: 'SplashScene',
        label: 'splash',
        nextLabel: 'title',
      },
      {
        className: 'TitleScene',
        label: 'title',
        nextLabel: 'main',
      },
      {
        className: 'PauseScene',
        label: 'pause',
      },
      {
        className: 'MainScene',
        label: 'main',
        nextLabel: 'result',
      },
      {
        className: 'ResultScene',
        label: 'result',
        nextLabel: 'title',
      },
      {
        className: 'ArchievementScene',
        label: 'archivement',
        nextLabel: 'title',
      },
      {
        className: 'CreditScene',
        label: 'credit',
        nextLabel: 'title',
      },
    ],
  });

  app.enableStats();
  app.run();
});
