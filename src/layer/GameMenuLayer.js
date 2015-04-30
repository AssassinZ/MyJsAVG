var GameMenuLayer = cc.Layer.extend(/** @lends GameMenuLayer# */{

    /**
     * Initialize the application menu layer.
     */
    aboutItem: null,

    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {

        var spritebg = new cc.Sprite(res.menu.bg);
        spritebg.setPosition(cc.p(cc.winSize.width / 2, cc.winSize.height / 2));
        this.addChild(spritebg, 0);


        var startLab = new cc.LabelTTF("开始游戏", "Arial", 38);
        var startItem = new cc.MenuItemLabel(
            startLab, this.clickStart, this);
        startItem.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2 + 50,
            anchorX: 0.5,
            anchorY: 0.5
        });


        var setItem = new cc.MenuItemImage(
            res.menu.setBtn,
            res.menu.setBtnS,
            this.clickSetting, this);
        setItem.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2 - 50,
            anchorX: 0.5,
            anchorY: 0.5
        });


        aboutItem = new cc.MenuItemImage(
            res.menu.aboutBtn,
            res.menu.aboutBtnS,
            this.clickAbout, this);
        aboutItem.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2 - 150,
            anchorX: 0.5,
            anchorY: 0.5
        });


        var menu = new cc.Menu(startItem, setItem, aboutItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 2);


        return true;

    },

    clickAbout: function () {
        cc.log("clickAbout");
        this.initAVGDialog();
    },
    clickSetting: function () {
        cc.log("clickSetting");
    },
    clickStart: function () {
        cc.log("clickStart");
    },


    initAVGDialog: function () {
        this.removeAllChildren();
        var test = "1中文测试中asdsad文测中文测中文测asdas中文测中文测";
        var mlabel = new cc.LabelTTF(test);
        mlabel.attr({
            x: cc.winSize.width / 2 - 100,
            y: cc.winSize.height / 2,
            anchorX: 0,
            anchorY: 0.5

        });
        this.addChild(mlabel);
        mlabel.setString(this.autoNewLine(test, 10));
//        this.autoTyper(mlabel, 20, 0.3);
    },


    autoTyper: function (label, lineNum, textDelayTime) {
        var mString = this.autoNewLine(label.getString(), lineNum);
        var totalLen = mString.length;
        label.setString("");
        var i = 1;

        this.schedule(function () {
            label.setString(mString.substr(0, i++));
            if (i === totalLen + 1) {
                cc.log("end");
                this.scheduleOnce(function () {
                    cc.director.runScene(new MenuScene());
                }, 0.5);

            }
        }, textDelayTime, totalLen - 1, 0.1);

    },


    autoNewLine: function (str, bytenum) {
        var mstring = "";
        var len = 0;
        var tmp = "";
        for (var i = 0; i < str.length; i++) {
            mstring += str.charAt(i);
            tmp += str.charAt(i);
            len = GT.getStringAllLength(tmp);
            if (len === bytenum || ((len + 1) === bytenum && GT.isChineseChars(str.charCodeAt(i))) || (len + 1 === bytenum && GT.isChineseChars(str.charCodeAt(i + 1)))) {
                mstring += "\n";
                tmp = "";
            }
        }
        return mstring;
    }

});
