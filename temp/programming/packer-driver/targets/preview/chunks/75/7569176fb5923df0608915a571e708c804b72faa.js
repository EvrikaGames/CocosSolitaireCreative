System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, LineGraphics;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dff2bq1UF5E04Q6BQePvody", "LineGraphics", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Graphics', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LineGraphics", LineGraphics = (_dec = ccclass('LineGraphics'), _dec(_class = class LineGraphics extends Component {
        constructor() {
          super(...arguments);
          this.graphics = void 0;
        }

        start() {
          this.graphics = this.getComponent(Graphics);
        }

        redrawLine(points) {
          this.graphics.clear();
          if (points.length < 1) return;

          for (var i = 0; i < points.length; i++) {
            var point = points[i];
            if (i === 0) this.graphics.moveTo(point.x, point.y);else this.graphics.lineTo(point.x, point.y);
          }

          this.graphics.stroke();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7569176fb5923df0608915a571e708c804b72faa.js.map