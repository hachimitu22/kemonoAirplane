
phina.namespace(function () {
  phina.define('Cerulean', {
    superClass: 'DisplayElement',

    init: function (param) {
      this.superInit();

      this.image = phina.display.DisplayElement().addChildTo(this).setPosition(0, 0);
      this.body = phina.display.CircleShape({
        fill: 'blue',
        radius: 20,
        // 'padding': 0,
      }).addChildTo(this.image);
      this.eyeWhite = phina.display.CircleShape({
        fill: 'white',
        radius: 7,
      }).addChildTo(this.image).x += 10;
      this.eyeBlack = phina.display.CircleShape({
        fill: 'black',
        radius: 5,
      }).addChildTo(this.image).x += 10;
      this.hitEnable();

      this.setSize(this.body.width, this.body.height);
      this.padding = this.body.padding;

      this.direction = -1;
      this.vx = 3 * this.direction;
      this.vy = 0;
      this.speed = 300;
      this.jumpPower = 7;
      this.jumpInterval = 10;
      this.jumpIntervalNow = this.jumpInterval;

      this.scaleX *= this.direction;
    },

    update: function () {
      // x
      if (1) {
        if (this.vy !== 0) {
          this.x += this.vx;

          if (this.x >= kfap.WIDTH_SIZE) {
            this.x = kfap.WIDTH_SIZE;
            this.vx *= -1;
            this.direction *= -1;
            this.scaleX *= -1;
          } else if (this.x <= 0) {
            this.x = 0;
            this.vx *= -1;
            this.direction *= -1;
            this.scaleX *= -1;
          }
        }
      }
      // y
      if (1) {
        this.vy += kfap.GLAVITY;
        this.y += this.vy;

        if (this.y >= (kfap.BASE_LINE - (this.height + this.padding / 2) / 2)) {
          this.y = kfap.BASE_LINE - (this.height + this.padding / 2) / 2;
          this.vy = 0;
          if (this.jumpIntervalNow === 0) {
            this.jumpIntervalNow = this.jumpInterval;
            this.vy = -this.jumpPower;
          }
          if (this.jumpIntervalNow >= 1) {
            this.jumpIntervalNow--;
          }
        }
      }
    }

  });

});
