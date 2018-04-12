phina.namespace(function () {

  phina.define('Shot', {
    superClass: 'phina.display.Sprite',

    init: function (x, y) {
      var self = this;

      this.superInit("paperairplane2", 180, 55);
      this.width *= 0.3;
      this.height *= 0.3;
      this.setPosition(x, y);

      this.hitDisable();
      this._status = Shot.STATE.WAIT;

      this._attachFlickable();

      // 墜落時の演出
      this.one('crash', this.crash);
    },

    _attachFlickable: function () {
      var self = this;

      this.flickable.vertical = false;
      this.flickable.horizontal = false;
      this.flickable.on('flickstart', function () {
        var flick = this;
        var vx;
        var vy;
        // 以下の値は調整する必要あり
        vx = flick.velocity.x / 8;
        if (vx > 10) {
          vx = 10;
        }
        vy = flick.velocity.y / 5;

        self.takeoff(vx, vy, 0.99, 0.2);
      });
    },

    takeoff: function (vx, vy, fr, g) {
      this._status = Shot.STATE.FLYING;
      this.setInteractive(false);
      this.hitEnable();

      this.physical.setFriction(fr || 0.99);
      this.physical.setGravity(0, g || 0.2);
      this.physical.force(vx || 0, vy || 0);
      this.flickable.remove();
    },

    crash: function () {
      var self = this;

      this._status = Shot.STATE.CRASH;
      this.hitDisable();

      this.physical.setGravity(0, 0);
      this.physical.force(0, 0);

      this.tweener.wait(2000).call(function () {
        self.remove();
      });
    },

    update: function () {
      this.setRotation(this.physical.velocity.toDegree());

      if (this.y >= (kfap.BASE_LINE - this.height / 2)) {
        this.y = (kfap.BASE_LINE - this.height / 2);
        this.flare('crash');
      }
    },

    _static: {
      STATE: {
        WAIT: 0,
        FLYING: 1,
        // LANDING: 2,
        CRASH: 3,
      }
    }
  });
});