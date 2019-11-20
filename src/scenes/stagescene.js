
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
      this.uiGroup = phina.display.DisplayElement().addChildTo(this);
      this.shotPointerPanel = phina.display.RectangleShape({
        width: 500,
        height: 300,
        stroke: 0,
        fill: '#8080FF80',
        x: 400,
        y: 150,
      }).addChildTo(this).setInteractive(true).on('pointstart', function (e) {
        var x = e.pointer.x;
        var y = e.pointer.y;

        self.shotPointer.setPosition(x, y);
        self._shot();
      }).on('pointmove', function (e) {
        var x = Math.clamp(e.pointer.x, this.left, this.right);
        var y = Math.clamp(e.pointer.y, this.top, this.bottom);

        self.shotPointer.setPosition(x, y);
      });
      this.shotPointer = phina.display.CircleShape({
        radius: 5,
        fill: "#FF000080",
        x: 200,
        y: 100,
      }).addChildTo(this).setPosition(this.shotPointerPanel.centerX, this.shotPointerPanel.centerY);
      this.t = 1;

      this.spawner.setSpawnParam({
        'x': kfap.WIDTH_SIZE + 50,
        'y': kfap.BASE_LINE - 20,
        'parent': this.enemys,
      });
      this.spawner.setInterval(100);

      var self = this;
      this.score = 0;
      this.scoreLabel = phina.display.Label({
        fill: '#FFFFFF',
        stroke: 'black',
        fontSize: 12,
        strokeWidth: 2,
      }).addChildTo(this.uiGroup).setOrigin(0, 0).setPosition(10, 10);
      this._updateScore(0);

      var pauseButton = phina.ui.Button({
        text: 'ポーズ',
        fontSize: 16,
        width: 100,
        height: 40,
        x: 50,
        y: this.gridY.center(),
      }).addChildTo(this.uiGroup).on('push', function () {
        self.app.pushScene(PauseScene());
      });

    },

    _updateScore: function (diffScore) {
      this.score += diffScore;
      this.scoreLabel.text = (this.score).padding(7, ' ');
    },

    _shot: function () {
      var shot = Shot(90, 255);
      var vx = (this.shotPointer.x - this.kaban.x) * 0.05;
      var vy = (this.shotPointer.y - this.kaban.y) * 0.05;
      shot.addChildTo(this.attackers);
      // shot.takeoff(Math.randfloat(0, 10), Math.randfloat(-20, 0), 0.99, 0.2);
      shot.takeoff(vx, vy, 0.99, 0.2);
    },

    update: function (app) {

      {
        this.t++;
        if (this.t % (app.fps * 2) === 0) {
          // this._shot();
          // var shot = Shot(90, 255);
          // var vx = (this.shotPointer.x - this.kaban.x) * 0.05;
          // var vy = (this.shotPointer.y - this.kaban.y) * 0.05;
          // shot.addChildTo(this.attackers);
          // // shot.takeoff(Math.randfloat(0, 10), Math.randfloat(-20, 0), 0.99, 0.2);
          // shot.takeoff(vx, vy, 0.99, 0.2);
          this.t = 0;
        }
      }

      // if (app.keyboard.getKeyDown('A')) {
      //   var shot = Shot(90, 255);

      //   shot.addChildTo(this.attackers);
      // }

      // collision
      {
        var self = this;
        self.attackers.children.eraseIf(function (attacker) {
          var flag = false;

          if (attacker.isHitEnable()) {
            self.enemys.children.eraseIf(function (enemy) {
              if (enemy.isHitEnable() && Collision.testCircleRect(enemy, attacker)) {
                flag = true;
                this.score += 1;
                self._updateScore(1);
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
