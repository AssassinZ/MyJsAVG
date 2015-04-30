/**
 * Splash Scene - the opening scene of the game.
 * <p>
 * It cope with the navigation logic and the logos display.
 * </p>
 *
 * @class
 * @extends cc.Scene
 */
var SplashScene = cc.Scene.extend(/** @lends SplashScene# */{

    /**
     * Constructor of cc.Scene
     */
    _className: "SplashScene",

    onEnter: function () {
        this._super();
        var open = new GameOpeningLayer();
        //设置层使其缓存所有子节点到一个sprite上，然后绘出自身。推荐在UI中使用。
        open.bake();
        this.addChild(open, 1, 1);
        //设置计时器，下列方法为JS，推荐改为cocos2d的
        //setTimeout(function () {
        //    if (sys.localStorage.getItem("username")) {
        //        //过场动画效果
        //        cc.director.runScene(new cc.TransitionTurnOffTiles(2, new MenuScene()));
        //    } else {
        //        cc.director.runScene(new cc.TransitionTurnOffTiles(2, new MenuScene()));
        //    }
        //}.bind(this)/*把当前的this传入到函数体内，防止this指向错误，不过当前没有用到this，所以可以忽略*/, 3000);

        this.scheduleOnce(function () {
            if (cc.sys.localStorage.getItem("username")) {
                //过场动画效果
                this.runMyScene(cc.sys.isNative);
            } else {
                this.runMyScene(cc.sys.isNative);
            }
        }, 3);


    },

    runMyScene: function (isNative) {
        if (isNative) {
            cc.director.runScene(new cc.TransitionTurnOffTiles(2, new MenuScene()));
        } else {
            cc.director.runScene(new MenuScene());
        }
    }
});
