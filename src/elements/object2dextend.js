(function () {
  phina.app.Object2D.prototype._hitEnable = false;
  phina.app.Object2D.prototype.hitEnable = function () {
    this._hitEnable = true;
  };
  phina.app.Object2D.prototype.hitDisable = function () {
    this._hitEnable = false;
  };
  phina.app.Object2D.prototype.isHitEnable = function () {
    return this._hitEnable;
  };
})();
