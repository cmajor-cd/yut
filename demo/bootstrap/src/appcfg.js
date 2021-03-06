/**
 * system configuration for this app
 * some predifinations to control the app
 * 1. set debug flag
 * --------------
 * YangYutong
 * 2019-6-3
 ***********/ 

var appCfg = {
    //1. set debug flag -------
    // @param 'type' => define the enable type of the server link for this app
    // @param 'link' => define the multi lines of server link, in case of multi debug/running server data
    debugCfg:{
        type: 'mock',   //!!! IMPORTANT, 根据您的需求设置该值. e.g.实际量产时填写 'real'
        link: {         //!!! 请将以下链接填写为自己的真实链接 !!!
            'real':'/index.php',
            'mock':'./debug/mock',
            'php':'./debug/action/action.test.php'
        }
    }
};
