phina.namespace(function () {
  phina.define('CeruleanSpawner', {
    superClass: 'Element',

    init: function () {
      this.superInit();
    },


    spawn: function (param) {
      var cerulean = Cerulean();

      if (param.parent) {
        cerulean.addChildTo(param.parent);
      } else {
        cerulean.addChildTo(this.parent);
      }

      if (param.x && param.y) {
        cerulean.setPosition(param.x, param.y);
      } else {
        cerulean.setPosition(100, 100);
      }

      if (param.direction) {
        cerulean.direction = param.direction;
        cerulean.scaleX *= param.direction;
      } else {
        cerulean.direction = 1;
      }
    }

  });
});