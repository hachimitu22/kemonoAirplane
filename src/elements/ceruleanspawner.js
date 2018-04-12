phina.namespace(function () {
  phina.define('CeruleanSpawner', {
    superClass: 'phina.app.Element',

    init: function (spawnParam, interval) {
      this.superInit();

      if (spawnParam) {
        this.setSpawnParam(spawnParam);
      }

      if (interval) {
        this.setInterval(interval);
      } else {
        this._interval = 0;
        this._time = 0;
      }
    },

    setInterval: function (interval) {
      this._interval = interval;
      this._time = 0;
    },

    setSpawnParam: function (spawnParam) {
      this._spawnParam = {}.$extend(spawnParam);
    },

    spawn: function (spawnParam) {
      var cerulean = Cerulean();
      var param = spawnParam || this._spawnParam;

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
    },

    update: function () {
      if (this._interval) {
        this._time++;

        if (this._time >= this._interval) {
          this.spawn();
          this._time = 0;
        }
      }
    }

  });
});