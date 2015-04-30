var res = {

    open: {
        bg: 'res/open_bg.png',
        logo: 'res/open_logo.png'
    },
    //menu
    menu: {
        bg: 'res/menu_bg.png',
        playBtn: 'res/play-btn.png',
        playBtnS: 'res/play-btn-s.png',
        setBtn: 'res/set-btn.png',
        setBtnS: 'res/set-btn-s.png',
        startBtn: 'res/start-btn.png',
        startBtnS: 'res/start-btn.png',
        aboutBtn: 'res/about-btn.png',
        aboutBtnS: 'res/about-btn-s.png'
    },

    // Sound Effect
    sound: {
        opening: 'res/sound/opening.mp3'
    }


};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}