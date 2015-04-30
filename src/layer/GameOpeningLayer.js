/*
 * opening animation
 * 
 */

var GameOpeningLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        var bg = new cc.Sprite(res.open.bg);
        bg.setPosition(cc.p(cc.winSize.width / 2, cc.winSize.height / 2));
        this.addChild(bg, 0);

        var logo = new cc.Sprite(res.open.logo);
        logo.setPosition(cc.p(cc.winSize.width / 2, cc.winSize.height / 2));
        //缩放
        logo.setScale(0.6);
        this.addChild(logo, 1);
        //设置透明
        logo.opacity = 0;
        //var fadeIn = new cc.FadeIn(1.0);上下等效
        var fadeIn = cc.fadeIn(1.0);
        var fadeOut = cc.fadeOut(1.0);
        var delay = cc.delayTime(1);
        var seq = cc.sequence(
            fadeIn,
            delay,
            fadeOut);
        logo.runAction(seq);

        cc.audioEngine.playEffect(res.sound.opening);

        //之后可以加载占用时间的资源
        return true;
    }
});