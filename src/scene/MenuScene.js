/**
 * Menu Scene - the opening scene of the game.
 * <p>
 * It cope with the navigation logic and the logos display.
 * </p>
 *
 * @class
 * @extends cc.Scene
 */
var MenuScene = cc.Scene.extend(/** @lends MenuScene# */{

    /**
     * Constructor of cc.Scene
     */
    _className: "MenuScene",

    onEnter: function () {
        this._super();
        var layer = new GameMenuLayer();
        this.addChild(layer, 1);
    }
});
