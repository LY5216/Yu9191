
/* 
芒果TV 7.6.2
[rewrite_local]
^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv1.js
https://mobile-stream.api.mgtv.com/v1/video/source? url script-request-header mg会员.js
https://nuc.api.mgtv.com/GetUserInfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv.js
https://me.bz.mgtv.com/v3/module/list?_support url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv.js
https://mobile-stream.api.mgtv.com/v1/video/source url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv.js
#开屏以及首页广告
^https?:\/\/nuc\.api\.mgtv.com\/Logout url reject-dict
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-dict
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ url reject-dict
^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot url reject-dict
#小芒好物 影响会员到期显示
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-dict
^https?:\/\/vip\.bz\.mgtv\.com\/client\/dynamic_entry url reject-dict
#我的积分
^https?:\/\/credits\.bz\.mgtv\.com\/credits\/url url reject-dict
#首页下拉的互动空间广告 保留学习时刻
https://floor.bz.mgtv.com/floor/detail? url reject-dict

[mitm] 
hostname = *.mgtv.com

*/
var _0xodj='jsjiami.com.v7';var _0x1266f4=_0x200f;function _0x200f(_0x2f4ac,_0x57de70){var _0x3ef632=_0x3ef6();return _0x200f=function(_0x200fab,_0x4fc002){_0x200fab=_0x200fab-0x18b;var _0x346828=_0x3ef632[_0x200fab];if(_0x200f['vowAVt']===undefined){var _0x440d13=function(_0x277437){var _0x49e24c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5bbea4='',_0x3bffbf='';for(var _0x313f1f=0x0,_0x3f93c5,_0x3b7a34,_0x277484=0x0;_0x3b7a34=_0x277437['charAt'](_0x277484++);~_0x3b7a34&&(_0x3f93c5=_0x313f1f%0x4?_0x3f93c5*0x40+_0x3b7a34:_0x3b7a34,_0x313f1f++%0x4)?_0x5bbea4+=String['fromCharCode'](0xff&_0x3f93c5>>(-0x2*_0x313f1f&0x6)):0x0){_0x3b7a34=_0x49e24c['indexOf'](_0x3b7a34);}for(var _0x4d5a5e=0x0,_0x423db2=_0x5bbea4['length'];_0x4d5a5e<_0x423db2;_0x4d5a5e++){_0x3bffbf+='%'+('00'+_0x5bbea4['charCodeAt'](_0x4d5a5e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3bffbf);};var _0x4b0e86=function(_0x56a6b8,_0x4417b7){var _0x1c230a=[],_0x26ee76=0x0,_0x40e240,_0x595d75='';_0x56a6b8=_0x440d13(_0x56a6b8);var _0x418ae7;for(_0x418ae7=0x0;_0x418ae7<0x100;_0x418ae7++){_0x1c230a[_0x418ae7]=_0x418ae7;}for(_0x418ae7=0x0;_0x418ae7<0x100;_0x418ae7++){_0x26ee76=(_0x26ee76+_0x1c230a[_0x418ae7]+_0x4417b7['charCodeAt'](_0x418ae7%_0x4417b7['length']))%0x100,_0x40e240=_0x1c230a[_0x418ae7],_0x1c230a[_0x418ae7]=_0x1c230a[_0x26ee76],_0x1c230a[_0x26ee76]=_0x40e240;}_0x418ae7=0x0,_0x26ee76=0x0;for(var _0x1833ae=0x0;_0x1833ae<_0x56a6b8['length'];_0x1833ae++){_0x418ae7=(_0x418ae7+0x1)%0x100,_0x26ee76=(_0x26ee76+_0x1c230a[_0x418ae7])%0x100,_0x40e240=_0x1c230a[_0x418ae7],_0x1c230a[_0x418ae7]=_0x1c230a[_0x26ee76],_0x1c230a[_0x26ee76]=_0x40e240,_0x595d75+=String['fromCharCode'](_0x56a6b8['charCodeAt'](_0x1833ae)^_0x1c230a[(_0x1c230a[_0x418ae7]+_0x1c230a[_0x26ee76])%0x100]);}return _0x595d75;};_0x200f['Maqgbp']=_0x4b0e86,_0x2f4ac=arguments,_0x200f['vowAVt']=!![];}var _0x3b59cd=_0x3ef632[0x0],_0x464969=_0x200fab+_0x3b59cd,_0x49f35f=_0x2f4ac[_0x464969];return!_0x49f35f?(_0x200f['iRSbIn']===undefined&&(_0x200f['iRSbIn']=!![]),_0x346828=_0x200f['Maqgbp'](_0x346828,_0x4fc002),_0x2f4ac[_0x464969]=_0x346828):_0x346828=_0x49f35f,_0x346828;},_0x200f(_0x2f4ac,_0x57de70);}(function(_0x5be3ee,_0x5e51f7,_0xc53f9c,_0x2c9cd0,_0x1ef7b0,_0x339e19,_0x37df46){return _0x5be3ee=_0x5be3ee>>0x9,_0x339e19='hs',_0x37df46='hs',function(_0x4a3687,_0x45d2ac,_0x3534ba,_0x21f43e,_0x3cd01f){var _0x14ac96=_0x200f;_0x21f43e='tfi',_0x339e19=_0x21f43e+_0x339e19,_0x3cd01f='up',_0x37df46+=_0x3cd01f,_0x339e19=_0x3534ba(_0x339e19),_0x37df46=_0x3534ba(_0x37df46),_0x3534ba=0x0;var _0x2596d2=_0x4a3687();while(!![]&&--_0x2c9cd0+_0x45d2ac){try{_0x21f43e=parseInt(_0x14ac96(0x18d,'zfLS'))/0x1*(-parseInt(_0x14ac96(0x18c,'U&h0'))/0x2)+-parseInt(_0x14ac96(0x1a1,'fkvD'))/0x3*(-parseInt(_0x14ac96(0x18e,'iO!z'))/0x4)+parseInt(_0x14ac96(0x198,'6XD3'))/0x5+-parseInt(_0x14ac96(0x195,'HuTP'))/0x6*(-parseInt(_0x14ac96(0x199,'IPGq'))/0x7)+-parseInt(_0x14ac96(0x19a,')HmL'))/0x8*(parseInt(_0x14ac96(0x19c,'Re!k'))/0x9)+parseInt(_0x14ac96(0x19d,'UZ]X'))/0xa*(parseInt(_0x14ac96(0x196,'2Nnv'))/0xb)+parseInt(_0x14ac96(0x1a7,'UZ]X'))/0xc*(parseInt(_0x14ac96(0x193,'fkvD'))/0xd);}catch(_0x45d421){_0x21f43e=_0x3534ba;}finally{_0x3cd01f=_0x2596d2[_0x339e19]();if(_0x5be3ee<=_0x2c9cd0)_0x3534ba?_0x1ef7b0?_0x21f43e=_0x3cd01f:_0x1ef7b0=_0x3cd01f:_0x3534ba=_0x3cd01f;else{if(_0x3534ba==_0x1ef7b0['replace'](/[dSAYQNuHrCRWJPkOKngB=]/g,'')){if(_0x21f43e===_0x45d2ac){_0x2596d2['un'+_0x339e19](_0x3cd01f);break;}_0x2596d2[_0x37df46](_0x3cd01f);}}}}}(_0xc53f9c,_0x5e51f7,function(_0x2cce90,_0x4f0b84,_0x2e9773,_0x26fec2,_0x5934dc,_0x3b9b34,_0x3e4ccc){return _0x4f0b84='\x73\x70\x6c\x69\x74',_0x2cce90=arguments[0x0],_0x2cce90=_0x2cce90[_0x4f0b84](''),_0x2e9773='\x72\x65\x76\x65\x72\x73\x65',_0x2cce90=_0x2cce90[_0x2e9773]('\x76'),_0x26fec2='\x6a\x6f\x69\x6e',(0x14a468,_0x2cce90[_0x26fec2](''));});}(0x17c00,0xb6ee1,_0x3ef6,0xc0),_0x3ef6)&&(_0xodj=_0x1266f4(0x1a3,'pK68'));function _0x3ef6(){var _0x6fb5c5=(function(){return[_0xodj,'QuHjORPsjikamWriR.coBSmYJB.rvnP7CgKAOdNk==','W5NdJqCvWOJdMmodWQe','WRvWtSkVsKVcTmk0W67cVW','W7qScCoYt3NcLa','WPVcJZ4XAxlcMSoAdHPHiG','W7/cU8oHWRaPWRNcNCk7WPvuuuK','WRVdKhpcQfamW61H','5yAC6lwb6isY5P6C6k+z5yMF5zwt5yYJWQJNG6VLH5BOVAdLHkRKVQlOG63POQ7PGzK55BEN6l6H6k6l5lQU5RQj','W4urneZdNfpdIc4YAmk/kG','orRcOwSTi8oVWPZdKsiu','W6LYWQi3WRPIuHy'].concat((function(){return['EmkMzwW8tSozWOlcMCoycCkW','WRpcGSorW77cGG','WQVcJrBdTNpcQCowW5f+WRBcUq','W4RdPM5tfW','dMbapSoIW7XcF8kQWRldUmkwWQ4k','WRa9oxaE','W6H1W6rOW55/sWjPtJa','W7hdImoJWRKrWQNcTSoMW4CYWPRdImkU','pHVcRMKTySkZWRxdUbestfq','W5FdKutcNxO','W6HnW4mbW6vhn8o2','5Q2P6l2y6kAv552s'].concat((function(){return['zCofW4bYvNlcQq','W4X1WPTvgbhdN8oSvZaWWQe','W7/dGmkxW797W7pdK8oD','W4ZcIrSCWRpdPCo/W6RcLaDsWOWGbmk0t8oeWPb6d8kymIXYoCk7kx/dRe/dP8ktsalcS0RcRx/dVIC','W6JdTgi','W6mzFCo7wCoIhW','FSkWnSoRvXOcf31mW5/cPW','WQJcIwNcHIhcHSo/W5G','W7JcVSkDW4r5W6dcJCk/'];}()));}()));}());_0x3ef6=function(){return _0x6fb5c5;};return _0x3ef6();};var modifiedUrl=$request[_0x1266f4(0x190,'uuj7')][_0x1266f4(0x197,'2Nnv')](/^(https:\/\/mobile.*\.api\.mgtv\.com\/v\d\/video\/.+ource.+)(&ticket=\w{32})(.*)/,function(_0xfc2fcd,_0x5197c2,_0x3c421f,_0x42066f){var _0x4132b5=_0x1266f4,_0x307e52={'JWJnD':function(_0x47d6e5,_0x3dbbff,_0x4c0e6b,_0x5b4b68,_0x565328){return _0x47d6e5(_0x3dbbff,_0x4c0e6b,_0x5b4b68,_0x565328);},'pUSAE':_0x4132b5(0x18b,'3get'),'ZuajR':'https://t.me/chxm1023','eZbVM':function(_0x3b5cec,_0x41bcfc){return _0x3b5cec+_0x41bcfc;}};return _0x307e52[_0x4132b5(0x1a8,'uuj7')]($notify,_0x307e52['pUSAE'],'lovebabyforever❤️',_0x4132b5(0x19b,'x)j0'),{'open-url':_0x307e52[_0x4132b5(0x1a4,'])l%')]}),_0x307e52[_0x4132b5(0x1a2,'6XD3')](_0x307e52[_0x4132b5(0x1a0,'H4ML')](_0x5197c2,_0x4132b5(0x18f,'HuTP')),_0x42066f);});$done({'url':modifiedUrl});var version_ = 'jsjiami.com.v7';
