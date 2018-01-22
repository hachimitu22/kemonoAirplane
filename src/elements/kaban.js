phina.namespace(function () {
  phina.define('Kaban', {
    superClass: 'DisplayElement',

    init: function () {
      this.superInit();

      this.img = phina.display.Sprite("kaban2", 125, 215).addChildTo(this);
      this.img.width *= 0.4;
      this.img.height *= 0.4;

      this.setSize(this.img.width - 8, this.img.height - 4);
      this.vy = 100;
    },

    update: function () {
      if (1) {
        this.vy += 100;
        this.y += this.vy;

        if (this.y >= (kfap.BASE_LINE - this.height / 2)) {
          this.y = kfap.BASE_LINE - this.height / 2;
          this.vy = 0;
        }
      }
    }
  });
});
