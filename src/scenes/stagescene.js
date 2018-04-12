
// stagescene
phina.namespace(function () {
  phina.define('MainScene', {
    superClass: 'phina.display.DisplayScene',

    init: function (param) {
      this.superInit({
        width: kfap.WIDTH_SIZE,
        height: kfap.HEIGHT_SIZE,
      });

      this.backgroundColor = "#8EF";

      this.ground = phina.display.Shape({
        'width': kfap.WIDTH_SIZE,
        'height': 20,
        'backgroundColor': 'green',
        'padding': 0,
      }).addChildTo(this).setPosition(kfap.WIDTH_SIZE / 2, kfap.BASE_LINE + 10);


      this.spawner = CeruleanSpawner().addChildTo(this);
      this.kaban = Kaban().addChildTo(this).setPosition(100, 200);
      this.enemys = phina.display.DisplayElement().addChildTo(this);
      this.attackers = phina.display.DisplayElement().addChildTo(this);
      this.t = 0;

      this.spawner.setSpawnParam({
        'x': kfap.WIDTH_SIZE + 50,
        'y': kfap.BASE_LINE - 20,
        'parent': this.enemys,
      });
      this.spawner.setInterval(100);

      var self = this;
      var pauseButton = phina.ui.Button({
        text: 'ポーズ',
        fontSize: 16,
        width: 100,
        height: 40,
        x: this.gridX.center(),
        y: this.gridY.center(),
      }).addChildTo(this);

      pauseButton.on('push', function () {
        self.app.pushScene(PauseScene());
      });

    },

    update: function (app) {

      {
        this.t++;
        if (this.t % 3 === 0) {
          // var shot = Shot(90, 255);
          // shot.addChildTo(this.attackers);
          // shot.takeoff(Math.randfloat(0, 10), Math.randfloat(-20, 0), 0.99, 0.2);
        }
      }

      if (app.keyboard.getKeyDown('A')) {
        var shot = Shot(90, 255);

        shot.addChildTo(this.attackers);
      }

      // collision
      {
        var self = this;
        self.attackers.children.eraseIf(function (attacker) {
          var flag = false;

          if (attacker.isHitEnable()) {
            self.enemys.children.eraseIf(function (enemy) {
              if (enemy.isHitEnable() && Collision.testCircleRect(enemy, attacker)) {
                flag = true;
                return true;
              }
            });
          }

          return flag;
        });
      }
    }

  });
});  
