jQuery.ajaxSetup({
  'beforeSend':function(xhr) {xhr.setRequestHeader('Accept', 'text/javascript')}
}  )

var game = new Phaser.Game(1264, 768, Phaser.AUTO, '', { init: init, preload: preload, create: create, update: update});
$.ajax({type: "GET", url: "/load"});
//setInterval(function(){ $.ajax({type: "GET", url: "/load"});}, 2000);

function init(){
    game.scale.pageAlignVertically = true;        //put the game interface in the middle of the website
    game.scale.pageAlignHorizontally = true;
}

var imageList = [ { "key": "veryfirst" , "path" : "assets/veryfirst.jpg"},{ "key": "herewego" , "path" : "assets/herewego.png"},{ "key": "shuiliandong" , "path" : "assets/shuiliandong.jpg"},
{ "key": "douzhanshengfo" , "path" : "assets/douzhanshengfo.png"},{ "key": "jiaye" , "path" : "assets/jiaye.png"},
{ "key": "goon" , "path" : "assets/goon.png"},{ "key": "dialogue" , "path" : "assets/dialogue.png"},
{ "key": "nantianmen" , "path" : "assets/nantianmen.jpg"},{ "key": "pantaoyuan" , "path" : "assets/yaochi.jpg"},
{ "key": "wall" , "path" : "assets/newwall.png"},{ "key": "cloud" , "path" : "assets/tiangong.jpg"},
{ "key": "attributes" , "path" : "assets/attributes.png"},{ "key": "grey" , "path" : "assets/liehuo.png"}]

function preload() {

    game.load.text('someData', '/assets/table.json');

  //  game.load.image('veryfirst', 'assets/veryfirst.jpg');
  for(a in imageList){
    game.load.image(imageList[a].key,imageList[a].path);
  }
   
    // game.load.image('herewego', 'assets/herewego.png');
    // game.load.image('shuiliandong', 'assets/shuiliandong.jpg');
    // game.load.image('douzhanshengfo', 'assets/douzhanshengfo.png');
    // game.load.image('jiaye', 'assets/jiaye.png');
    // game.load.image('goon', 'assets/goon.png');
    // game.load.image('dialogue', 'assets/dialogue.png');
    // game.load.image('whitedialogue', 'assets/whitedialogue.png');
    // game.load.image('nantianmen', 'assets/nantianmen.jpg');
    // game.load.image('pantaoyuan', 'assets/pantaoyuan.jpg');
    // game.load.image('wall', 'assets/newwall.png');     //400*32
    // game.load.image('cloud', 'assets/tiangong2.png');
    // game.load.image('attributes', 'assets/attributes.png');
    // game.load.image('grey', 'assets/liehuo.png');

   //game.load.image('enter', 'assets/enter.png');
  // game.load.image('enter', 'assets/newenter.png');
     game.load.spritesheet('enter', 'assets/newenter.png', 70, 70);

    game.load.audio('wukonghit',  'assets/wukonghit.MP3')        //fighting
    game.load.audio('monsterhit',  'assets/monsterhit.MP3')
    game.load.image('playerVictory', 'assets/playerVictory.png');     
    game.load.spritesheet('vs', 'assets/vs.png',250,83);       
    game.load.spritesheet('biu', 'assets/biu.png', 128, 96);
    game.load.spritesheet('biubiu', 'assets/whitetoblack.png', 79, 48);
    game.load.image('scroll', 'assets/scroll.png');                                //prop
    game.load.image('wing', 'assets/wing.png');
    game.load.image('infopopup', 'assets/infopopup.png');         //infopopup
    game.load.image('infoqilin', 'assets/blackqilin.png');
    game.load.image('infosnake', 'assets/infosnake.png');
    game.load.spritesheet('turnleft', 'assets/turnleft.png',60,48);
    game.load.spritesheet('turnright', 'assets/turnright.png',60,48);
    game.load.spritesheet('characterinfo', 'assets/characterinfo.png',60,58);
    game.load.spritesheet('backinfo', 'assets/backinfo.png',60,54);
    game.load.spritesheet('upgrade', 'assets/upgrade.png',66,66);
    game.load.spritesheet('plus', 'assets/plus.png',35,35);
    game.load.spritesheet('minus', 'assets/minus.png',35,35);
    game.load.image('exp', 'assets/exp.png'); 
    game.load.image('expBackground', 'assets/expbackground.png');

    game.load.image('infodialogue', 'assets/infodialogue.png');
    game.load.image('analyzepopup', 'assets/analyzepopup.png');
    game.load.image('flypopup', 'assets/flypopup.png'); game.load.image('firstfloor', 'assets/firstfloor.png'); game.load.image('secondfloor', 'assets/secondfloor.png'); game.load.image('thirdfloor', 'assets/thirdfloor.png'); game.load.image('forthfloor', 'assets/forthfloor.png'); 
    game.load.image('fifthfloor', 'assets/fifthfloor.png'); game.load.image('sixthfloor', 'assets/sixthfloor.png'); game.load.image('seventhfloor', 'assets/seventhfloor.png'); game.load.image('eighthfloor', 'assets/eighthfloor.png'); game.load.image('ninthfloor', 'assets/ninthfloor.png'); 
    game.load.spritesheet('player', 'assets/maincharacter.png', 77.1, 57);
    game.load.image('weapon', 'assets/ruby.png');                                   //things can change attributes
    game.load.image('mapweapon', 'assets/mapweapon.png'); 
    game.load.image('shield', 'assets/blueruby.png'); 
    game.load.image('mapdefence', 'assets/mapdefence.png'); 
    game.load.image('normalshoes', 'assets/normalshoes.png'); 

    game.load.image('white', 'assets/white.jpg'); 

    game.load.image('fightkong', 'assets/player1.png'); 
    game.load.image('jingubang', 'assets/jingubang.png'); 
    game.load.image('blade', 'assets/blade.png'); 
    game.load.image('defence', 'assets/defence.png'); 
    game.load.image('health', 'assets/health.png'); 
    game.load.spritesheet('ladder', 'assets/fireladder.png',70,120);
    game.load.spritesheet('downstair', 'assets/waterladder.png',150,114);                     //NPC
    game.load.image('qilin', 'assets/qilin7.png'); 
    game.load.spritesheet('movableqilin', 'assets/qilinqilin.png',380,380); 
    game.load.image('snakeshop', 'assets/snake.png'); 
    game.load.image('shopPopup', 'assets/shopPopup.jpg'); 

    game.load.image('mapredanimal', 'assets/mapredanimal.png');              //doors
    game.load.image('mapyellowdoor', 'assets/mapyellowdoor.png');
    game.load.image('mapbluedoor', 'assets/mapbluedoor.png');
     game.load.image('mapgreendoor', 'assets/mapgreendoor.png');

    game.load.image('fightingResult', 'assets/fightingResult.jpg');  
    game.load.image('get', 'assets/get.png');                                                                 //buttons
    game.load.spritesheet('interfacescroll', 'assets/interfacescroll.png',142,40);
    game.load.spritesheet('renyimen', 'assets/interfacewing.png',142,40);
    game.load.spritesheet('eye', 'assets/analyze.png',60,50);
    game.load.spritesheet('save', 'assets/save.png',116,34);                                                  //save and load 
    game.load.image('saving', 'assets/saving.png');
    game.load.image('back', 'assets/back.png');
    game.load.image('saveBg', 'assets/saveBg.png');    
    game.load.image('loadBg', 'assets/loadBg.png');    
    game.load.spritesheet('versionone', 'assets/versionone.png',484,97);
    game.load.spritesheet('versiontwo', 'assets/versiontwo.png',484,96);
    game.load.spritesheet('load', 'assets/load.png',117,34);
    game.load.spritesheet('help', 'assets/help.png',50,50);
    game.load.spritesheet('control', 'assets/control.png',50,50);
    game.load.spritesheet('volumeBtn', 'assets/volumeBtn.png',50,50);
   game.load.spritesheet('upCtl', 'assets/upCtl.png',60,36);
   game.load.spritesheet('downCtl', 'assets/downCtl.png',60,37);   
   game.load.spritesheet('leftCtl', 'assets/leftCtl.png',37,60);      
   game.load.spritesheet('rightCtl', 'assets/rightCtl.png',36,60);         
    game.load.image('helpPopup', 'assets/helpPopup.jpg'); 
    game.load.image('UDRL', 'assets/UDRL.png'); 
    game.load.image('WASD', 'assets/WASD.png'); 

                  //monsters 
    game.load.image('analyzezengzhang', 'assets/analyzezengzhang.png'); 
    game.load.image('mapzengzhang', 'assets/mapzengzhang.png'); 
 //   game.load.image('duowen', 'assets/duowen1.png'); 
    game.load.image('analyzeduowen', 'assets/analyzeduowen.png'); 
    game.load.image('mapduowen', 'assets/mapduowen.png'); 
    game.load.image('firewizard', 'assets/firewizard.png');
    game.load.image('analyzefirewizard', 'assets/analyzefirewizard.png');
    game.load.image('mapfirewizard', 'assets/mapfirewizard.png');
    game.load.image('mapwindwizard', 'assets/mapwindwizard.png');
    game.load.image('windwizard', 'assets/windwizard.png');
    game.load.image('analyzewindwizard', 'assets/analyzewindwizard.png');
    game.load.image('water', 'assets/shuidi.png');
    game.load.image('waterwizard', 'assets/waterwizard.png');
    game.load.image('analyzewaterwizard', 'assets/analyzewaterwizard.png');
    game.load.image('mapwaterwizard', 'assets/mapwaterwizard.png');
    game.load.image('treeman', 'assets/treeman.png');
    game.load.image('analyzetreeman', 'assets/analyzetreeman.png');
    game.load.image('maptreeman', 'assets/maptreeman.png');
    game.load.image('stonewizard', 'assets/stonewizard.png');
    game.load.image('analyzestonewizard', 'assets/analyzestonewizard.png');
    game.load.image('mapstonewizard', 'assets/mapstonewizard.png');
    game.load.image('lightwizard', 'assets/lightwizard.png');
    game.load.image('analyzelightwizard', 'assets/analyzelightwizard.png');
    game.load.image('maplightwizard', 'assets/maplightwizard.png');
    game.load.image('bluefire', 'assets/bluefire.png');
    game.load.image('analyzebluefire', 'assets/analyzebluefire.png');
    game.load.image('mapbluefire', 'assets/mapbluefire.png');
    game.load.image('snow', 'assets/snow.png');
    game.load.image('analyzesnow', 'assets/analyzesnow.png');
    game.load.image('mapsnow', 'assets/mapsnow.png');
    game.load.image('bubble', 'assets/bubble.png');
    game.load.image('analyzebubble', 'assets/analyzebubble.png');
    game.load.image('mapbubble', 'assets/mapbubble.png');
    game.load.image('mapxiaozi', 'assets/mapxiaozi.png');


    game.load.spritesheet('addAttack', 'assets/addAttack.png',353,55);         // useful items
    game.load.spritesheet('addDefence', 'assets/addDefence.png',352,54); 
    game.load.spritesheet('addHealth', 'assets/addHealth.png',353,54); 
    game.load.spritesheet('walkAway', 'assets/walkAway.png',237,54); 
    game.load.image('redkey', 'assets/redkey.png'); 
    game.load.image('mapredkey', 'assets/mapredkey.png'); 
    game.load.image('yellowkey', 'assets/yellowkey.png');
     game.load.image('mapyellowkey', 'assets/mapyellowkey.png');
    game.load.image('bluekey', 'assets/bluekey.png');
    game.load.image('mapbluekey', 'assets/mapbluekey.png');
    game.load.image('smallhealth', 'assets/xiaoxuepin.png');
    game.load.image('mapsmallhealth', 'assets/mapsmallhealth.png');
    game.load.image('mapbighealth', 'assets/mapbighealth.png');

    game.load.image('qilingong', 'assets/qilingong.jpg');       //qilin animation

    game.load.image('lingshedong', 'assets/lingshedong.jpg');       //second floor animation

 
    game.load.spritesheet('gobacksecond', 'assets/gobacksecond.png',163,40);    //third floor animation
    game.load.spritesheet('gothirdfloor', 'assets/gothirdfloor.png',163,40);
    game.load.image('fairybg', 'assets/fairybg.jpg');
    game.load.image('xiaozi', 'assets/xiaozi.png');
    game.load.image('infoxiaozi', 'assets/infoxiaozi.png');
    game.load.image('xiaolan', 'assets/xiaolan.png');
    game.load.image('xiaolanmasaike', 'assets/xiaolanmasaike.png');
    game.load.image('xiaoju', 'assets/xiaoju.png');  
    game.load.image('xiaohong', 'assets/xiaohong.png'); 
    game.load.image('xiaoshenzi', 'assets/xiaoshenzi.png'); 
    game.load.image('fairyshy', 'assets/xiaohonghaixiu.png'); 
    game.load.image('liehuo', 'assets/liehuo.jpg'); 

    game.load.spritesheet('xiaolanAM', 'assets/xiaolanAM.png',115,200); 
    game.load.spritesheet('xiaoshenziAM', 'assets/xiaoshenziAM.png',115,200); 
    game.load.spritesheet('xiaojuAM', 'assets/xiaojuAM.png',115,200); 
    game.load.spritesheet('xiaohongAM', 'assets/xiaohongAM.png',115,200); 
    game.load.spritesheet('accept', 'assets/accept.png',161,40); 
    game.load.spritesheet('refuse', 'assets/refuse.png',161,40); 
    game.load.spritesheet('fightingBtn', 'assets/fighting.png',200,53); 




       game.load.image('platform', 'assets/platform.png');                 //forth floor
       game.load.spritesheet('handongfeilong', 'assets/handongfeilong.png',113,105); 
       game.load.spritesheet('yalong', 'assets/yalong.png',105,105); 
       game.load.spritesheet('tradeyellowkey', 'assets/tradeyellowkey.png',51,49); 
       game.load.spritesheet('tradebluekey', 'assets/tradebluekey.png',52,51); 
       game.load.spritesheet('traderedkey', 'assets/traderedkey.png',48,59); 
       game.load.spritesheet('xixuemianju', 'assets/xixuemianju.png',53,60);
        game.load.image('iceDragon', 'assets/icedragon.png'); 
        game.load.image('greenDragon', 'assets/greendragon.png'); 
        game.load.image('mapshouxin', 'assets/mapshouxin.png'); 
        game.load.image('shouxin', 'assets/shouxin.png'); 
        game.load.image('infoshouxin', 'assets/infoshouxin.png'); 
        game.load.image('shou', 'assets/shou.jpg'); 

        game.load.image('analyzeqiuniu', 'assets/analyzeqiuniu.png');   //fifth floor
        game.load.image('mapqiuniu', 'assets/mapqiuniu.png');
        game.load.image('qiuniu', 'assets/qiuniu.png');
        game.load.image('analyzeyazi', 'assets/analyzeyazi.png');   
        game.load.image('mapyazi', 'assets/mapyazi.png');
        game.load.image('yazi', 'assets/yazi.png');        

      game.load.image('mappurpledoor', 'assets/mappurpledoor.png');     //sixth floor    
      game.load.image('maphouyigong', 'assets/maphouyigong.png');  
         game.load.image('analyzechaofeng', 'assets/analyzechaofeng.png');   
        game.load.image('mapchaofeng', 'assets/mapchaofeng.png');
        game.load.image('chaofeng', 'assets/chaofeng.png'); 
        game.load.image('analyzepulao', 'assets/analyzepulao.png');   
        game.load.image('mappulao', 'assets/mappulao.png');
        game.load.image('pulao', 'assets/pulao.png');      
        game.load.image('analyzesuanni', 'assets/analyzesuanni.png');   
        game.load.image('mapsuanni', 'assets/mapsuanni.png');
        game.load.image('suanni', 'assets/suanni.png');      
        game.load.image('analyzebian', 'assets/analyzebian.png');   
        game.load.image('mapbian', 'assets/mapbian.png');
        game.load.image('bian', 'assets/bian.png'); 
        game.load.image('mapbutianshi', 'assets/mapbutianshi.png'); 
        game.load.image('analyzebixi', 'assets/analyzebixi.png');   
        game.load.image('mapbixi', 'assets/mapbixi.png');
        game.load.image('bixi', 'assets/bixi.png'); 
        game.load.image('analyzechiwen', 'assets/analyzechiwen.png');   
        game.load.image('mapchiwen', 'assets/mapchiwen.png');
        game.load.image('chiwen', 'assets/chiwen.png'); 
        game.load.image('analyzetaotie', 'assets/analyzetaotie.png');   
        game.load.image('maptaotie', 'assets/maptaotie.png');
        game.load.image('taotie', 'assets/taotie.png');


     game.load.audio('introductionBgm',  'assets/veryfirst_64.MP3');
 //    game.load.audio('acdc',  'assets/ACDC2_64.MP3');
     game.load.audio('bgm',  'assets/bgm1.MP3');
     game.load.audio('bgm2',  'assets/bgm2.MP3');
     game.load.audio('jingsong',  'assets/jingsong.MP3');
  //   game.load.audio('talktofairy',  'assets/talkwithfairy.mp3');
     game.load.audio('qilinBgm',  'assets/qilin_64.MP3'); 
     game.load.audio('huaguoshanBgm',  'assets/huaguoshan_64.MP3');
     game.load.audio('bossBgm',  'assets/fairy_64.MP3');
     game.load.audio('fightBgm',  'assets/fight_128.MP3');
     game.load.audio('PersonalBg',  'assets/PersonalBg_64.MP3');     
     game.load.audio('shoppingBgm',  'assets/shopping_64.MP3');     
}



   
var all = {1: {0:[[709, 700, "smallhealth", 1, "mapsmallhealth"], [47, 345, "smallhealth", 1, "mapsmallhealth"], [120,695, "smallhealth", 1, "mapsmallhealth"],[176,200, "smallhealth", 1, "mapsmallhealth"]],
                      1:[[213,578,"weapon",1, "mapweapon"],[188,701,"weapon",1, "mapweapon"],[666,37,"weapon",1, "mapweapon"],[672,125,"weapon",1, "mapweapon"]],
                      2:[[705, 587, "defence",1, "mapdefence"], [711, 648, "defence",1, "mapdefence"],[834, 655, "defence",1, "mapdefence"], [594, 40, "defence",1, "mapdefence"], [600, 125, "defence",1, "mapdefence"]],
                      3:[[6, 584, "redkey",1, "mapredkey"]],
                      4:[[258, 703, "yellowkey",1, "mapyellowkey"], [123, 350, "yellowkey",1, "mapyellowkey"], [70, 118, "yellowkey",1, "mapyellowkey"], [172, 118, "yellowkey",1, "mapyellowkey"], [268, 118, "yellowkey",1, "mapyellowkey"]],
                      5:[[960, 586, "bluekey",1, "mapbluekey"],[963, 650, "bluekey",1, "mapbluekey"],[960, 714, "bluekey",1, "mapbluekey"]],
                      6:[[253,288, "redanimal",1, "mapredanimal"],[714,288, "redanimal",1, "mapredanimal"],[461,461, "redanimal",1, "mapredanimal"]],
                      7:[[400,647,"yellowdoor",1, "mapyellowdoor"],[522,647,"yellowdoor",1, "mapyellowdoor"],[775,519,"yellowdoor",1, "mapyellowdoor"]],
                      8:[[338,463,"firewizard", 1,"mapfirewizard","firewizard","analyzefirewizard"], [158,463,"firewizard", 1, "mapfirewizard","firewizard","analyzefirewizard"], [85,463,"firewizard", 1, "mapfirewizard","firewizard","analyzefirewizard"],
                          [8,473,"firewizard", 1,"mapfirewizard","firewizard","analyzefirewizard"], [8,663,"firewizard", 1,"mapfirewizard","firewizard","analyzefirewizard"], [344,654,"firewizard", 1,"mapfirewizard","firewizard","analyzefirewizard"]],
                      9:[[236,465,"windwizard", 1,"mapwindwizard","windwizard","analyzewindwizard"]],
                    10:[[661,462,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],[761,462,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],
                          [885,462,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],[584,530,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],
                          [824,584,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],[824,710,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],
                          [762,645,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],
                          [210,347,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"],[319,347,"waterwizard", 1,"mapwaterwizard","waterwizard","analyzewaterwizard"]],
                    11:[[762,581,"treeman", 1,"maptreeman","treeman", "analyzetreeman"],[899,581,"treeman", 1,"maptreeman","treeman","analyzetreeman"],[905,705,"treeman", 1,"maptreeman","treeman","analyzetreeman"],
                          [899,645,"treeman", 1,"maptreeman","treeman","analyzetreeman"],[762,705,"treeman", 1,"maptreeman","treeman","analyzetreeman"]],
                   // 12:[[20, 5,"zengzhang", 1,"mapzengzhang","zengzhang","analyzezengzhang"]],
                  //  13:[[770, 5,"duowen", 1,"mapduowen","duowen","analyzeduowen"]],
                    14:[[260,182, "bighealth", 1 ,"mapbighealth"],[70,182, "bighealth", 1 ,"mapbighealth"]],
                    18:[[62,0,'scroll',1,'scroll']],
                    19:[[754,50,'wing',1,'wing']],
                    20:[[752,207,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"],[819,207,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"]],
                    21:[[609,207,"snow", 1,"mapsnow","snow","analyzesnow"],[680,207,"snow", 1,"mapsnow","snow","analyzesnow"],[883,207,"snow", 1,"mapsnow","snow","analyzesnow"],[951,207,"snow", 1,"mapsnow","snow","analyzesnow"]]
                                        
            },    
              2:{15:[[786,242, "bluedoor", 1 ,"mapbluedoor"],[786,473, "bluedoor", 1 ,"mapbluedoor"],[244,359,"bluedoor", 1 ,"mapbluedoor"]],
                    0:[[855, 150, "smallhealth", 1, "mapsmallhealth"],[802, 150, "smallhealth", 1, "mapsmallhealth"]],
                    1:[[665,126,"weapon",1, "mapweapon"],[532,182,"weapon",1, "mapweapon"]],
                    2:[[662, 182, "defence",1, "mapdefence"]],              
                    3:[[661, 559, "redkey",1, "mapredkey"],[721, 559, "redkey",1, "mapredkey"]],
                    4:[[464, 250, "yellowkey",1, "mapyellowkey"],[852, 5, "yellowkey",1, "mapyellowkey"],[721, 5, "yellowkey",1, "mapyellowkey"]],
                    5:[[722, 124, "bluekey",1, "mapbluekey"],[728, 178, "bluekey",1, "mapbluekey"]],
                    7:[[592,174,"yellowdoor",1, "mapyellowdoor"],[786,58,"yellowdoor",1, "mapyellowdoor"]],
                    9:[[663,304,"windwizard", 1,"mapwindwizard","windwizard","analyzewindwizard"],[748,304,"windwizard", 1,"mapwindwizard","windwizard","analyzewindwizard"],
                         [830,304,"windwizard", 1,"mapwindwizard","windwizard","analyzewindwizard"]],
                    16:[[523,247,"stonewizard",1,"mapstonewizard", "stonewizard", "analyzestonewizard"],[391,247,"stonewizard",1,"mapstonewizard", "stonewizard", "analyzestonewizard"],
                           [724,402,"stonewizard",1,"mapstonewizard", "stonewizard", "analyzestonewizard"],[818,402,"stonewizard",1,"mapstonewizard", "stonewizard", "analyzestonewizard"]],
                    17:[[787,561,"lightwizard",1,"maplightwizard", "lightwizard", "analyzelightwizard"],[525,116,"lightwizard",1,"maplightwizard", "lightwizard", "analyzelightwizard"]],
                    20:[[63,58,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"],[131,57,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"],[199,58,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"],
                    [264,57,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"]],
                    21:[[390,329,"snow", 1,"mapsnow","snow","analyzesnow"],[458,331,"snow", 1,"mapsnow","snow","analyzesnow"],[525,329,"snow", 1,"mapsnow","snow","analyzesnow"]],
                    22:[[136,252,"bubble", 1,"mapbubble","bubble","analyzebubble"],[173,332,"bubble", 1,"mapbubble","bubble","analyzebubble"],[136,415,"bubble", 1,"mapbubble","bubble","analyzebubble"],[173,493,"bubble", 1,"mapbubble","bubble","analyzebubble"]],
                    23:[[157,576,"normalshoes", 1,"normalshoes"]]                 
              },
               3:{ 24:[[528,175,"greendoor",1, "mapgreendoor"]],
                     25:[[539,305,"fairy",1, "mapxiaozi"]],
                     20:[],
                     8:[],
                     11:[]
              },
              4:{ 14:[[455,33, "bighealth", 1 ,"mapbighealth"],[565,34, "bighealth", 1 ,"mapbighealth"],[668,33, "bighealth", 1 ,"mapbighealth"]],
                    23:[[901,193,"normalshoes", 1,"normalshoes"],[703,272,"normalshoes", 1,"normalshoes"],[60,380,"normalshoes", 1,"normalshoes"],
                          [430,580,"normalshoes", 1,"normalshoes"],[678,455,"normalshoes", 1,"normalshoes"],[843,6,"normalshoes", 1,"normalshoes"]],
                      0:[[870, 350, "smallhealth", 1, "mapsmallhealth"],[961, 351, "smallhealth", 1, "mapsmallhealth"],[916, 284, "smallhealth", 1, "mapsmallhealth"],
                         [85, 585, "smallhealth", 1, "mapsmallhealth"],[175, 584, "smallhealth", 1, "mapsmallhealth"],[133, 495, "smallhealth", 1, "mapsmallhealth"],
                         [250, 271, "smallhealth", 1, "mapsmallhealth"],[346, 270, "smallhealth", 1, "mapsmallhealth"],[300, 198, "smallhealth", 1, "mapsmallhealth"]]
               }, 
               5:{  7:[[378,6,"yellowdoor",1, "mapyellowdoor"],[378,190,"yellowdoor",1, "mapyellowdoor"],
                          [378,550,"yellowdoor",1, "mapyellowdoor"], [378,676,"yellowdoor",1, "mapyellowdoor"],
                          [378,370,"yellowdoor",1, "mapyellowdoor"],[602,6,"yellowdoor",1, "mapyellowdoor"],
                          [602,190,"yellowdoor",1, "mapyellowdoor"],[602,370,"yellowdoor",1, "mapyellowdoor"],
                          [602,550,"yellowdoor",1, "mapyellowdoor"],[602,676,"yellowdoor",1, "mapyellowdoor"],
                          [210,550,"yellowdoor",1, "mapyellowdoor"],[130,550,"yellowdoor",1, "mapyellowdoor"],
                          [780,550,"yellowdoor",1, "mapyellowdoor"],[870,550,"yellowdoor",1, "mapyellowdoor"]],
                      4:[[290, 10, "yellowkey",1, "mapyellowkey"],[210, 10, "yellowkey",1, "mapyellowkey"],[130, 10, "yellowkey",1, "mapyellowkey"],
                          [50, 10, "yellowkey",1, "mapyellowkey"],[780, 190, "yellowkey",1, "mapyellowkey"],
                          [870, 190, "yellowkey",1, "mapyellowkey"],[960, 190, "yellowkey",1, "mapyellowkey"],
                          [290, 676, "yellowkey",1, "mapyellowkey"],[210, 676, "yellowkey",1, "mapyellowkey"],
                          [130, 676, "yellowkey",1, "mapyellowkey"],[50, 676, "yellowkey",1, "mapyellowkey"],
                          [690, 676, "yellowkey",1, "mapyellowkey"],[780, 676, "yellowkey",1, "mapyellowkey"],
                          [870, 676, "yellowkey",1, "mapyellowkey"],[960, 676, "yellowkey",1, "mapyellowkey"]],
                      0:[[690, 8, "smallhealth", 1, "mapsmallhealth"],[780, 8, "smallhealth", 1, "mapsmallhealth"],
                           [870, 8, "smallhealth", 1, "mapsmallhealth"],[960, 8, "smallhealth", 1, "mapsmallhealth"],
                           [210, 190, "smallhealth", 1, "mapsmallhealth"],[130, 190, "smallhealth", 1, "mapsmallhealth"],
                           [50, 190, "smallhealth", 1, "mapsmallhealth"],[290, 370, "smallhealth", 1, "mapsmallhealth"],
                           [210, 370, "smallhealth", 1, "mapsmallhealth"],[130, 370, "smallhealth", 1, "mapsmallhealth"],
                           [50, 370, "smallhealth", 1, "mapsmallhealth"],[690, 370, "smallhealth", 1, "mapsmallhealth"],
                           [780, 370, "smallhealth", 1, "mapsmallhealth"],[870, 370, "smallhealth", 1, "mapsmallhealth"],
                           [960, 370, "smallhealth", 1, "mapsmallhealth"]],
                     26:[[290, 190, "qiuniu", 1, "mapqiuniu",'qiuniu','analyzeqiuniu'],[690, 190, "qiuniu", 1, "mapqiuniu",'qiuniu','analyzeqiuniu']],   
                     27: [[290, 550, "yazi", 1, "mapyazi",'yazi','analyzeyazi'],[690, 550, "yazi", 1, "mapyazi",'yazi','analyzeyazi']],
                      5:[[50, 550, "bluekey",1, "mapbluekey"],[960, 550, "bluekey",1, "mapbluekey"]]
               },
               6:{   28: [[181,522,"purpledoor",1, "mappurpledoor"],[782,290,"purpledoor",1, "mappurpledoor"]],
                       29: [[182,258,"houyigong",1, "maphouyigong"]],
                       26:[[952, 698, "qiuniu", 1, "mapqiuniu",'qiuniu','analyzeqiuniu']],
                       27: [[606, 677, "yazi", 1, "mapyazi",'yazi','analyzeyazi']],
                       30:[[35, 63, "chaofeng", 1, "mapchaofeng",'chaofeng','analyzechaofeng']],
                       31:[[365, 200, "pulao", 1, "mappulao",'pulao','analyzepulao']],
                       32:[[2, 388, "suanni", 1, "mapsuanni",'suanni','analyzesuanni']],
                       33:[[787, 420, "bian", 1, "mapbian",'bian','analyzebian']],
                       37: [[786,522,"butianshi",1, "mapbutianshi"]]
               }


}






var allthings;
var table = {zengzhang: [220,150,400,75,100,500], duowen:[230,160,400,85,90,580],firewizard: [38,21,80,6,4,80], waterwizard: [34,30,60,5,5,60], treeman:[60,20,150,15,15,100],
  windwizard:[65,20,70,15,15,70], stonewizard: [33,45,50,30,10,50],lightwizard:[100,25,130,50,50,130],bluefire:[50,50,100,12,14,100],snow:[30,60,200,18,15,200],
  bubble: [60,60,80,25,25,80],iceDragon: [100,300,500,10,10,500], greenDragon: [500,300,200,10,10,200],qiuniu:[50,50,100,20,30,100],
  yazi:[30,40,100,20,10,100], chaofeng: [30,45,100,20,10,100],pulao: [30,40,100,20,10,100],suanni: [30,40,100,20,10,100],bian:[30,40,100,20,10,100],
  bixi:[30,40,100,20,10,100], chiwen: [30,40,100,20,10,100], taotie: [30,40,100,20,10,100],
  player: {}, playerattributes: {'attack': 'attack', 'defence': 'defence', 'health': 'health', 'red_key': 'red_key', 
  'blue_key': 'blue_key', 'yellow_key': 'yellow_key', 'experience': 'experience', 'nectar': 'nectar', 'level': 'level', 'x': 'x', 'y': 'y', 'layer': 'layer', 
  'animationone': 'animationone', 'qilintimes': 'qilintimes', 'snaketimes': 'snaketimes', 'maxlayer':'maxlayer', 'scrollexist': 'scrollexist', 'wingexist': 'wingexist',
   'speed': 'speed', 'progress': 'progress', 'statpoints': 'statpoints', 'greenkey': 'greenkey', 'thirdfloornotice':'thirdfloornotice', 'shouxintimes': 'shouxintimes' ,
    'purplekey': 'purplekey'},floor:['firstfloor','secondfloor', 'thirdfloor','forthfloor','fifthfloor',
  'sixthfloor','seventhfloor','eighthfloor','ninthfloor'],floorname:['firstfloor','secondfloor', 'thirdfloor','forthfloor','fifthfloor',
  'sixthfloor','seventhfloor','eighthfloor','ninthfloor'], showFloorName: ['Floor 1','Floor 2', 'Floor 3','Floor 4','Floor 5',
  'Floor 6','Floor 7','Floor 8','Floor 9'],upgrade: [80,100,120,140,150,200,210,250], gonextfloor:{2:[466,61],3:[953,130],4:[113,702],5:[456,4],6:[200,703],7:[300,300]}, goperiousfloor:{1:[469,138],2:[323,40],3:[778,6],4:[212,8],5: [472,468]}}

var analyzepopup; var flypopup; var savepopup; var informationpopup; var characterpopup; var helps; var volumesPopup;
var savepopup; var loadpopup;  var controlGroups;

var healthtext; var healthtext2;

var bgm; var bgmVolume = 1;
var wallup; var walldown; var wallleft; var wallright;
var wallsv;
var cursors;    var controllerOpen =0;  var pointX; var pointY; 
var player;

var playerText;
var setint;

var isFighting = 0;
var popupExist = 0;
var moveKey = 1;
var enterValue = 0;
var buttonClick = 0;
var count = 0; 
var huanzhuang = 0;  //fairy amination
var getThingsPopup;
var iceDragon;

function create() {
   //var parsedJsonData = JSON.parse( game.cache.getText('someData') );
   //  var birdFrameX = parsedJsonData[1].bird.frame.x;
    //alert(parsedJsonData);


    var versiononetime;
    var versiontwotime;

     for(a in state){                                                      
      if(state[a]['user_id'] == user['id']){
        versiononetime = state[a]['time']
        break;
      }
     }

      for(a in statetwo){                                                      
      if(statetwo[a]['user_id'] == user['id']){
        versiontwotime = statetwo[a]['time']
        break;
      }
     }


    if((versiononetime == undefined&&versiontwotime == undefined)||(versiononetime != undefined&&versiontwotime == undefined)||
      (versiononetime != undefined&&versiontwotime != undefined&&versiononetime > versiontwotime)){

          for(a in state){    
            if(state[a]['user_id'] == user['id']){
              for(b in all){   
                for(c in all[b]){  
                  for(d in all[b][c]){  
                    if(state[a]['x'] == all[b][c][d][0]&&state[a]['y'] == all[b][c][d][1]&&state[a]['layer'] == b){ 
                      all[b][c][d][3] = state[a]['exist'];  
                    }
                  }
                }
              }
            }
          }

         for(a in userone){                                                      
          if(userone[a]['user_id'] == user['id']){
            for(b in table['playerattributes']){
              table.player[b] = userone[a][b];
            }
            break;    
          }
         }



        }

        else{

          for(a in statetwo){    
            if(statetwo[a]['user_id'] == user['id']){
              for(b in all){   
                for(c in all[b]){  
                  for(d in all[b][c]){  
                    if(statetwo[a]['x'] == all[b][c][d][0]&&statetwo[a]['y'] == all[b][c][d][1]&&statetwo[a]['layer'] == b){ 
                      all[b][c][d][3] = statetwo[a]['exist'];  
                    }
                  }
                }
              }
            }
          }

          for(a in usertwo){                                                      
          if(usertwo[a]['user_id'] == user['id']){
            for(b in table['playerattributes']){
              table.player[b] = usertwo[a][b];
            }
          break;
        }
       }
     }


      game.physics.startSystem(Phaser.Physics.ARCADE);

      if(table.player.animationone == 1){
        firstanimation();
      }
      else if(table.player.animationone == 0){
        refreshmap();
      }
}





function update() {
  
  if(table.player.animationone ==0 ){
   game.physics.arcade.collide(player, wallsv); 
   game.physics.arcade.collide(zengzhangboss, platforms);
   game.physics.arcade.overlap(iceDragons,platforms,iceDragonGoback,null,this);
   game.physics.arcade.overlap(greenDragons,platforms,greenDragonGoback,null,this);
   game.physics.arcade.collide(player, yellowDoors,openyellowDoor, null, this);  
   game.physics.arcade.collide(player, blueDoors,openblueDoor, null, this);   
   game.physics.arcade.collide(player, redAnimials,openredDoor, null, this);    
   game.physics.arcade.collide(player, greenDoors,opengreenDoor, null, this);      
   game.physics.arcade.collide(player, PurpleDoors,openpurpleDoor, null, this); 
   game.physics.arcade.collide(player, Snakeshops,tradewithsnake, null, this); 
   game.physics.arcade.collide(player, shouxins,tradewithshouxin, null, this);
   game.physics.arcade.collide(player, fairies,talkwithfairy, null, this); 
   game.physics.arcade.overlap(player, weapons, getWeapon, null, this);
   game.physics.arcade.overlap(player, houyigongs, getHouyigong, null, this);  
   game.physics.arcade.overlap(player, defences, getDefence, null, this);     
   game.physics.arcade.overlap(player, butianshis, getButianshi, null, this);     
   game.physics.arcade.overlap(player, normalShoes, getNormalShoes, null, this); 
   game.physics.arcade.overlap(player, smallhealths, getSmallhealth, null, this);
   game.physics.arcade.overlap(player, bighealths, getBighealth, null, this);
   game.physics.arcade.overlap(player, yellowKeys, getYellowkey, null, this);
   game.physics.arcade.overlap(player, redKeys, getRedkey, null, this); 
   game.physics.arcade.overlap(player, blueKeys, getBluekey, null, this);
   game.physics.arcade.overlap(player, wings, getWing, null, this);   
   game.physics.arcade.overlap(player, scrolls, getScroll, null, this); 
   game.physics.arcade.overlap(player, Upstairs, gonextfloor, null, this); 
   game.physics.arcade.overlap(player, Downstairs, goperiousfloor, null, this);
   game.physics.arcade.collide(player, firewizards,kill, null, this);  
   game.physics.arcade.collide(player, waterwizards,kill, null, this); 
   game.physics.arcade.collide(player, windwizards,kill, null, this);
   game.physics.arcade.collide(player, treemans,kill, null, this);   
   game.physics.arcade.collide(player, stonewizards,kill, null, this);   
   game.physics.arcade.collide(player, lightwizards,kill, null, this);
   game.physics.arcade.collide(player, bluefires,kill, null, this);
   game.physics.arcade.collide(player, snows,kill, null, this);  
   game.physics.arcade.collide(player, bubbles,kill, null, this);          
   game.physics.arcade.collide(player, iceDragons,kill, null, this);   
   game.physics.arcade.collide(player, greenDragons,kill, null, this); 
   game.physics.arcade.collide(player, qiunius,kill, null, this);
   game.physics.arcade.collide(player, yazis,kill, null, this); 
   game.physics.arcade.collide(player, chaofengs,kill, null, this); 
   game.physics.arcade.collide(player, pulaos,kill, null, this);  
   game.physics.arcade.collide(player, suannis,kill, null, this);  
   game.physics.arcade.collide(player, bians,kill, null, this);

  if(moveKey==1){
    pointX = game.input.activePointer.x;
    pointY = game.input.activePointer.y;
    if (cursors.left.isDown||A.isDown||controllerOpen==1&&pointX>=22&&pointX<=58&&pointY>=673&&pointY<=727)
    {
        player.body.velocity.x = -100 - table.player.speed;  
        player.animations.play('left');
    }

    else if (cursors.right.isDown||D.isDown||controllerOpen==1&&pointX>=149&&pointX<=183&&pointY>=673&&pointY<=727)
    {
        player.body.velocity.x = 100 + table.player.speed;
        player.animations.play('right');
 }
 
    else if (cursors.up.isDown||W.isDown||controllerOpen==1&&pointX>=74&&pointX<=131&&pointY>=642&&pointY<=673){
        if(table.player.layer!=4){
         player.body.velocity.y = -100 - table.player.speed;
         player.animations.play('up');
       }
       else{
         player.body.velocity.y -=7.8;
         player.animations.play('up');
       }
    }


        else if (cursors.down.isDown||S.isDown||controllerOpen==1&&pointX>=74&&pointX<=131&&pointY>=716&&pointY<=748)
    {
        player.body.velocity.y = 100 + table.player.speed;
        player.animations.play('down');                    
    }

     

    else{
                if(table.player.layer!=4){
                   player.body.velocity.x = 0;
                   player.body.velocity.y = 0;
                   player.frame = 30;
                  }
                 else if(table.player.layer==4){
                    player.body.velocity.x = 0;
                    player.frame = 30;

                  }
           }
    }



     if (flyKey.isDown&&table.player.wingexist==1)
        {
            fly();   flyKey.enabled = false;flyKey.enabled = true;
          }
      // if (scrollButton.isDown&&table.player.scrollexist==1)
      //   {
      //       info();   scrollButton.enabled = false;scrollButton.enabled = true;
      //     }
      if (enter.isDown)
        { if(enterValue==0){iSee(); enter.enabled = false;enter.enabled = true;}
           else if(enterValue==2){qilinlistener(); enter.enabled = false;enter.enabled = true;}
           else if(enterValue==3){snakeshoplistener(); enter.enabled = false;enter.enabled = true;}
           else if(enterValue==4){fairylistener(); enter.enabled = false;enter.enabled = true;}
           else if(enterValue==5){shouxinlistener(); enter.enabled = false;enter.enabled = true;}
          }
       if (moveKey==0)
        {         
                   player.body.velocity.x = 0;
                   player.body.velocity.y = 0;
                   player.frame = 30;
          } 


               }}


function refreshmap(){

      if(table.player.animationone == 1){
         firstanimation();
        }
     
      playerBgm();
      if(table.player.layer <3){
       background1 = game.add.sprite(0, 0, 'cloud'); 
        }
       else if(table.player.layer >2){
        background1 = game.add.sprite(0, 0, 'pantaoyuan');   
      }
      allthings = game.add.group();
      allthings.add(background1);   
          
      wallsv = game.add.group();  
      allthings.add(wallsv);                                            //create walls 
      wallsv.enableBody = true;
          
            attributes = wallsv.create(1024, 0, 'attributes'); attributes.scale.setTo(0.676,1.0786); attributes.body.immovable = true; 
           
            layerText = game.add.text(1050, 20, '       '+ table['showFloorName'][table['player']['layer']-1] , { font: "25px bold", fill: '#9A89F0' }); 
            
            strlevelText = game.add.text(1050, 60, '  等级:', { font: "23px bold", fill: '#FAFFFB' }); 
            levelText = game.add.text(1190, 60,   table.player.level, { font: "23px bold", fill: '#FAFFFB' }); 

            strattackText = game.add.text(1050, 100, '  攻击力:         ', { font: "23px bold", fill: '#FAFFFB' }); 
            attackText = game.add.text(1190, 100, table.player.attack, { font: "23px bold", fill: '#FAFFFB' });  
          //  attackText.addColor('#ffff00', 2);
         //   attackText.addColor('#ff00ff', 3);
            strdenfenceText = game.add.text(1050, 140, '  防御力:       ', { font: "23px bold", fill: '#FAFFFB' });  
            denfenceText = game.add.text(1190, 140,table.player.defence, { font: "23px bold", fill: '#FAFFFB' });  

            strhealthText = game.add.text(1050, 180, '  生命值:          ', { font: "23px bold", fill: '#FAFFFB' });
            healthText = game.add.text(1190, 180,table.player.health, { font: "23px bold", fill: '#FAFFFB' }); 

            strnectarText = game.add.text(1050, 220, '  琼浆:            ', { font: "23px bold", fill: '#FAFFFB' }); 
            nectarText = game.add.text(1190, 220, ''+table.player.nectar, { font: "23px bold", fill: '#FAFFFB' }); 
 
            strexperienceText = game.add.text(1050, 260, '  经验值:     ', { font: "23px bold", fill: '#FAFFFB' });          
            experienceText = game.add.text(1190, 260, '' + table.player.experience, { font: "23px bold", fill: '#FAFFFB' }); 

            strredkeyText = game.add.text(1050, 380, '  麒麟酒:       ', { font: "23px bold", fill: '#FA3939' }); 
            redkeyText = game.add.text(1190, 380, '' + table.player.red_key, { font: "23px bold", fill: '#FA3939' }); 

            stryellowkeyText = game.add.text(1050, 300, '  离火秘钥:   ', { font: "23px bold", fill: '#E4F24B' });
            yellowkeyText = game.add.text(1190, 300, '' + table.player.yellow_key, { font: "23px bold", fill: '#E4F24B' });

            strbluekeyText = game.add.text(1050, 340, '  坎水秘钥:       ', { font: "23px bold", fill: '#419AD9' }); 
            bluekeyText = game.add.text(1190, 340, '' + table.player.blue_key, { font: "23px bold", fill: '#419AD9' }); 

      var scrollbuttonExist = table.player.scrollexist;
      if(scrollbuttonExist == 1){
       scrollbutton = game.add.button(1060, 435, 'interfacescroll', info, this, 1,0,2);     //create scroll button
       allthings.add(scrollbutton);
        }


      analyzebutton = game.add.button(1095, 485, 'eye', analyze, this, 1,0,2);     //create analyze button
      allthings.add(analyzebutton);

      var flybuttonExist = table.player.wingexist;
      if(flybuttonExist ==1){
      flybutton = game.add.button(1060, 545, 'renyimen', fly, this, 1,0,2);     //create fly button
      allthings.add(flybutton);
       }

       var savebutton = game.add.button(1075, 605, 'save', save, this, 1,0,2);     //create save button
      allthings.add(savebutton);

      var loadbutton = game.add.button(1075, 655, 'load', load, this,1,0,2);
      allthings.add(loadbutton);
 

      var helpbutton = game.add.button(1030, 706, 'help', help, this,1,0,2);
      allthings.add(helpbutton);


     var controlbutton = game.add.button(1090, 706, 'control', changeController, this,1,0,2);
      allthings.add(controlbutton);

      var volumebuttpn = game.add.button(1150, 706, 'volumeBtn', changeVolume, this,1,0,2);
      allthings.add(volumebuttpn);




      //61.75, 58.56
         for(a in walls){
            if(walls[a]['layer']==table.player.layer){
                if(table.player.layer!=4){
               wall = wallsv.create(walls[a]['x'], walls[a]['y'], 'wall');  wall.scale.setTo(0.86971,0.9009);   wall.body.immovable = true;
                }
                else if(table.player.layer==4){ 
               wall = wallsv.create(walls[a]['x'], walls[a]['y'], 'platform');    wall.body.immovable = true;
                }
           }
     }



      if( player == undefined){                                                                                                         // create player
          player = game.add.sprite(table.player.x, table.player.y, 'player');                                     
          player.scale.setTo(0.583,0.8771);
          game.physics.arcade.enable(player);   player.enableBody = true; 
          player.body.collideWorldBounds = true;
        if(table.player.layer==4){ player.body.gravity.y=400;}
          player.animations.add('left', [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13], 16, true);
          player.animations.add('right', [14,15, 16, 17, 18,19,20,21,22,23,24,25], 16, true);   
          player.animations.add('down', [26,27, 28, 29, 30,31,32,33,34,35,36,37,38,39], 16, true);  
          player.animations.add('up', [40,41, 42, 43, 44,45,46,47,48,49,50], 12, true);  
       }
          
          cursors = game.input.keyboard.createCursorKeys();
          A = game.input.keyboard.addKey(Phaser.Keyboard.A);
          D = game.input.keyboard.addKey(Phaser.Keyboard.D);
         W = game.input.keyboard.addKey(Phaser.Keyboard.W);
          S = game.input.keyboard.addKey(Phaser.Keyboard.S);
          flyKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
          scrollButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
          enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

         smallhealths = game.add.group();  allthings.add(smallhealths);    smallhealths.enableBody = true; 

        bighealths = game.add.group();  allthings.add(bighealths);   bighealths.enableBody = true;   
         
        weapons = game.add.group();    allthings.add(weapons);    weapons.enableBody = true;                  //create weapon       
                                    
        defences = game.add.group();          allthings.add(defences);      defences.enableBody = true;          //create defence     

        normalShoes = game.add.group();      allthings.add(normalShoes);   normalShoes.enableBody = true;             //create normalshoes      
                   
        redKeys = game.add.group();       allthings.add(redKeys);        redKeys.enableBody = true;             //create redkey
         
        yellowKeys = game.add.group();       allthings.add(yellowKeys);   yellowKeys.enableBody = true;       //create yellowkey
                                                                                      
        blueKeys = game.add.group();         allthings.add(blueKeys);          blueKeys.enableBody = true;                                                               //create bluekey
          
        redAnimials = game.add.group();     allthings.add(redAnimials);     redAnimials.enableBody = true;                              //create redanimals
          
        yellowDoors = game.add.group();  allthings.add(yellowDoors); yellowDoors.enableBody = true;       //create yellowDoors                                                   

        blueDoors = game.add.group();   allthings.add(blueDoors); blueDoors.enableBody = true;          //create blueDoors
           
        greenDoors = game.add.group();  allthings.add(greenDoors);   greenDoors.enableBody = true;                                       //create greenDoors
           
        scrolls = game.add.group();allthings.add(scrolls);  scrolls.enableBody = true; 

        wings = game.add.group();allthings.add(wings);  wings.enableBody = true; 

        firewizards = game.add.group(); allthings.add(firewizards);   firewizards.enableBody = true;    //162,168
        
        windwizards = game.add.group(); allthings.add(windwizards);   windwizards.enableBody = true;  

        waterwizards = game.add.group(); allthings.add(waterwizards);waterwizards.enableBody = true;        //162,186  

        treemans = game.add.group(); allthings.add(treemans);treemans.enableBody = true;

        zengs = game.add.group(); allthings.add(zengs);   zengs.enableBody = true;

        duowens = game.add.group(); allthings.add(duowens);   duowens.enableBody = true;

        stonewizards = game.add.group(); allthings.add(stonewizards);   stonewizards.enableBody = true;  

        lightwizards = game.add.group(); allthings.add(lightwizards);   lightwizards.enableBody = true;  

        bluefires = game.add.group(); allthings.add(bluefires);   bluefires.enableBody = true;
                
                   //bluefire.tint = Math.random() * 0xffffff;

                // var graphics = game.add.graphics(game.world.centerX, game.world.centerY);
                // graphics.lineStyle(8, 0xffd900);
                // graphics.drawEllipse(100, 100, 200, 60);

        snows = game.add.group(); allthings.add(snows);   snows.enableBody = true;

        bubbles = game.add.group(); allthings.add(bubbles);   bubbles.enableBody = true;

        fairies = game.add.group(); allthings.add(fairies);   fairies.enableBody = true;

        qiunius = game.add.group(); allthings.add(qiunius);   qiunius.enableBody = true;

        yazis = game.add.group(); allthings.add(yazis);   yazis.enableBody = true;

        platforms = game.add.group(); allthings.add(platforms);platforms.enableBody = true;
     
        zengzhangboss = game.add.group(); allthings.add(zengzhangboss);zengzhangboss.enableBody = true;

        iceDragons = game.add.group();  allthings.add(iceDragons);  iceDragons.enableBody = true; 
        greenDragons = game.add.group(); allthings.add(greenDragons);  greenDragons.enableBody = true; 
           if(table.player.layer==4){createDragon();}


       PurpleDoors = game.add.group(); allthings.add(PurpleDoors);PurpleDoors.enableBody = true;
  
       houyigongs = game.add.group(); allthings.add(houyigongs);houyigongs.enableBody = true;

       butianshis = game.add.group(); allthings.add(butianshis);   butianshis.enableBody = true;

       chaofengs = game.add.group(); allthings.add(chaofengs);   chaofengs.enableBody = true;

        pulaos = game.add.group(); allthings.add(pulaos);   pulaos.enableBody = true;

        suannis = game.add.group(); allthings.add(suannis);   suannis.enableBody = true;

        bians = game.add.group(); allthings.add(bians);   bians.enableBody = true;

         bixis = game.add.group(); allthings.add(bixis);   bixis.enableBody = true;

         chiwens = game.add.group(); allthings.add(chiwens);   chiwens.enableBody = true;

         taoties = game.add.group(); allthings.add(taoties);   taoties.enableBody = true;

        Snakeshops = game.add.group();  allthings.add(Snakeshops);  Snakeshops.enableBody = true; 
        shouxins = game.add.group();  allthings.add(shouxins);  shouxins.enableBody = true; 

           for(a in snakeshops){
                if(snakeshops[a]['layer']==table.player.layer&&table.player.layer==2){
                  snakeshop = Snakeshops.create(snakeshops[a]['x'],snakeshops[a]['y'],'snakeshop');  snakeshop.scale.setTo(0.38,0.4); snakeshop.body.immovable = true;
                  }
                  else if(snakeshops[a]['layer']==table.player.layer&&table.player.layer==4){ shouxin = shouxins.create(100,1,'mapshouxin');   shouxin.body.immovable = true;}
            }





        Upstairs = game.add.group();  allthings.add(Upstairs); Upstairs.enableBody = true;

         for(a in upstairs){
            if(upstairs[a]['layer']==table.player.layer){
                 upstair = game.add.sprite(upstairs[a]['x'], upstairs[a]['y'], 'ladder'); upstair.scale.setTo(1,0.8);
                 Upstairs.add(upstair);
                 upstair.animations.add('spin', [0, 1, 2, 3,4,5,6,7,8,9], 5, true);
                 upstair.animations.play('spin'); }}

        Downstairs = game.add.group();  allthings.add(Downstairs);  Downstairs.enableBody = true; 

                 for(a in downstairs){
                    if(downstairs[a]['layer']==table.player.layer){
                       downstair = game.add.sprite(downstairs[a]['x'], downstairs[a]['y'], 'downstair');  downstair.scale.setTo(0.3,0.5);   
                        Downstairs.add(downstair);
                        downstair.animations.add('spin', [0, 1, 2, 3,4,5,6,7,8,9], 5, true);
                         downstair.animations.play('spin'); }}





         var groups = [smallhealths, weapons, defences, redKeys, yellowKeys, blueKeys, redAnimials,yellowDoors, firewizards, windwizards,
                                waterwizards, treemans, zengs, duowens, bighealths, blueDoors,stonewizards,lightwizards,scrolls,wings,
                                bluefires, snows, bubbles, normalShoes, greenDoors, fairies, qiunius, yazis, PurpleDoors,houyigongs,
                                chaofengs, pulaos, suannis, bians,  bixis, chiwens, taoties, butianshis];          

              for(a in all){
                if(a==table.player.layer){  
                    for(b in all[a]){  
                      for(c in all[a][b]){
                        if (all[a][b][c][3]==1){  
                      all[a][b][c][2] = groups[b].create(all[a][b][c][0],all[a][b][c][1],all[a][b][c][4]);  
                      all[a][b][c][2].body.immovable = true;
                      all[a][b][c][2].name = all[a][b][c][5]
                     }}}}}
            if(controllerOpen==1){controlGroups.destroy(); controlGroups = undefined; changeController();}
      
}
  
function createDragon(){
                awall = platforms.create(1100, 0, 'platform');    awall.body.immovable = true; awall.scale.setTo(0.0001,100);
                awall = platforms.create(-60, 0, 'platform');    awall.body.immovable = true; awall.scale.setTo(0.0001,100);
             var dragon = {'iceDragon': [[-50,530,150],[200,347,180],[727,156,160]], 'greenDragon': [[800,433,-220],[456,245,-180]]}
              for(a in dragon['iceDragon']){
                    iceDragon = game.add.sprite(dragon['iceDragon'][a][0], dragon['iceDragon'][a][1], 'handongfeilong');    
                    iceDragons.add(iceDragon);
                    iceDragon.animations.add('spin', [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15], 16, true);
                    iceDragon.animations.play('spin'); 
                    iceDragon.body.velocity.x = dragon['iceDragon'][a][2]; 
                    iceDragon.name = 'iceDragon';
                    iceDragon.body.immovable = true;
                    }
 
             for(a in dragon['greenDragon']){     
                greenDragon = game.add.sprite(dragon['greenDragon'][a][0], dragon['greenDragon'][a][1], 'yalong');    
                greenDragons.add(greenDragon);
                greenDragon.animations.add('spin', [0, 1, 2, 3,4,5,6,7,8,9,10,11,12], 13, true);
                greenDragon.animations.play('spin'); 
                greenDragon.body.velocity.x = dragon['greenDragon'][a][2]; 
                greenDragon.name = 'greenDragon';
                greenDragon.body.immovable = true;
                   }}


function iceDragonGoback(iceDragon, platform){
    iceDragon.x = -50 ;
 }
  
function greenDragonGoback(greenDragon,platform){
   greenDragon.x = 1000;
 }

function load(){

  var versiononestate;
  var versiontwostate;  

 if(loadpopup==undefined&&popupExist ==0){
  disable();
  $.ajax({type: "GET", url: "/load"});
  loadpopup = game.add.group();
  loadBackground = loadpopup.create(200,214,'loadBg');


   setTimeout(function(){ 
  versionone = game.add.button(265, 294, 'versionone', loadversionone, this,1,0,2);
  loadpopup.add(versionone);

   versiontwo = game.add.button(265, 417, 'versiontwo', loadversiontwo, this,1,0,2);
   loadpopup.add(versiontwo);
  // loadpopup.add(backbutton);

    for(a in state){                                                                               //show the version state   
     if(state[a]['user_id'] == user['id']&&state[a]['time']!=undefined){ 
       versiononestate = 1;
       var newTime = new Date(state[a]['time']);
          for(b in userone){
            if(userone[b]['user_id'] == user['id']){ 
             versiononeText = game.add.text(390, 315,  'Level:     '+ userone[b]['level'] + '          Place: Floor:    ' +userone[b]['layer']+ '\n' + newTime.toUTCString()  , { font: "25px bold", fill: '#EBE4E1' }); 
             loadpopup.add(versiononeText);           
            }       
        }
        break;
     }
        else if(state[a]['user_id'] == user['id']&&state[a]['time']==undefined){  
            versiononeText = game.add.text(431, 322, "NO RECORD" , { font: "32px bold", fill: '#EBE4E1' }); 
            loadpopup.add(versiononeText);  
            break;  
          }        
     }

  for(a in statetwo){     
   if(statetwo[a]['user_id'] == user['id']&&statetwo[a]['time']!=undefined){ 
       versiontwostate = 1;
       var newTime = new Date(statetwo[a]['time']);
       for(b in usertwo){
          if(usertwo[b]['user_id'] == user['id']){
           versiontwoText = game.add.text(390, 441, 'Level:     '+ usertwo[b]['level'] + '          Place: Floor:    ' +usertwo[b]['layer']+ '\n' + newTime.toUTCString()  , { font: "25px bold", fill: '#EBE4E1' }); 
           loadpopup.add(versiontwoText);
          }          
        }  
       break;  
      }
   else if(statetwo[a]['user_id'] == user['id']&&statetwo[a]['time']==undefined){ 
        versiontwoText = game.add.text(431, 448, "NO RECORD" , { font: "32px bold", fill: '#EBE4E1' }); 
        loadpopup.add(versiontwoText);
        break;     
      }      }
  },350);
  }

   else{ loadpopup.destroy(); loadpopup = undefined; able();}


  
   function loadversionone(){
    able();
    if(versiononestate == 1){
      loadpopup.destroy(); loadpopup = undefined;
          allthings.destroy();

      for(a in state){    
        if(state[a]['user_id'] == user['id']){
          for(b in all){   
            for(c in all[b]){  
              for(d in all[b][c]){  
                if(state[a]['x'] == all[b][c][d][0]&&state[a]['y'] == all[b][c][d][1]&&state[a]['layer'] == b){ 
                  all[b][c][d][3] = state[a]['exist'];  
                }
              }
            }
          }
        }
      }

        for(a in userone){                                                      
          if(userone[a]['user_id'] == user['id']){
              for(b in table['playerattributes']){
                table.player[b] = userone[a][b];
              }
            break;
            }
          }
          player.kill();   player = undefined; refreshmap();
        }

      }


   function loadversiontwo(){
    able();
    if(versiontwostate == 1){
      loadpopup.destroy(); loadpopup = undefined;
          allthings.destroy();

      for(a in statetwo){    
        if(statetwo[a]['user_id'] == user['id']){
          for(b in all){   
            for(c in all[b]){  
              for(d in all[b][c]){  
                if(statetwo[a]['x'] == all[b][c][d][0]&&statetwo[a]['y'] == all[b][c][d][1]&&statetwo[a]['layer'] == b){ 
                  all[b][c][d][3] = statetwo[a]['exist'];  
                }
              }
            }
          }
        }
      }

      for(a in usertwo){                                                      
         if(usertwo[a]['user_id'] == user['id']){
            for(b in table['playerattributes']){
              table.player[b] = usertwo[a][b];
            }
         break;
       }
      }
         player.kill();   player = undefined; refreshmap();
                   

        }

      }
}

function save(){

  // $.ajax({type: "GET", url: "/load"});
 
 if(savepopup == undefined&&popupExist ==0){
      disable();
      savepopup = game.add.group(); 
      saveBackground = savepopup.create(200,214,'saveBg');
      
      var versiononeText;
     
       setTimeout(function(){ 
       versionone = game.add.button(265, 294, 'versionone', saveversionone, this,1,0,2);
       savepopup.add(versionone);

       versiontwo = game.add.button(265, 417, 'versiontwo', saveversiontwo, this,1,0,2);
       savepopup.add(versiontwo);



      for(a in state){                                                                               //show the version state   
         if(state[a]['user_id'] == user['id']&&state[a]['time']!=undefined){
           var newTime = new Date(state[a]['time']);
           for(b in userone){ 
                if(userone[b]['user_id'] == user['id']){
                versiononeText = game.add.text(390, 315,  'Level:     '+ userone[b]['level'] + '          Place: Floor:    ' +userone[b]['layer']+ '\n' + newTime.toUTCString()  , { font: "25px bold", fill: '#EBE4E1' }); 
                savepopup.add(versiononeText);
                }
             //  break;
              }
           break;
          }
                   else if(state[a]['user_id'] == user['id']&&state[a]['time']==undefined){
                    versiononeText = game.add.text(431, 322, "NO RECORD" , { font: "32px bold", fill: '#EBE4E1' }); 
                    savepopup.add(versiononeText);
                    break;     
                 }
             }

      for(a in statetwo){     
       if(statetwo[a]['user_id'] == user['id']&&statetwo[a]['time']!=undefined){ 
            var newTime = new Date(statetwo[a]['time']);
            for(b in usertwo){ 
                        if(usertwo[b]['user_id'] == user['id']){        
                        versiontwoText = game.add.text(390, 441, 'Level:     '+ usertwo[b]['level'] + '          Place: Floor:    ' +usertwo[b]['layer']+ '\n' + newTime.toUTCString()  , { font: "25px bold", fill: '#EBE4E1' }); 
                        savepopup.add(versiontwoText);                 
                        }
               //     break; 
                 }
            break;
          }
       else if(statetwo[a]['user_id'] == user['id']&&statetwo[a]['time']==undefined){
            versiontwoText = game.add.text(431, 448, "NO RECORD" , { font: "32px bold", fill: '#EBE4E1' }); 
            savepopup.add(versiontwoText);
            break;     
          }      }

      },350);

    }
    
    else{
       savepopup.destroy(); savepopup = undefined;able();
     }
         
         function saveversiontwo(){
           var timetime = (new Date()).getTime();
           table.player.x = player.x;
           table.player.y = player.y;       
           savepopup.destroy(); savepopup = undefined;
           saving = game.add.image(113, 340, 'saving'); saving.scale.setTo(1.1,1.2);

           setTimeout(function(){saving.destroy();able();}, 8000);

            for(a in table['playerattributes']){  
             $.ajax({type: "GET", url: "/updateusertwo", data:{ result:{kind: a, value : table.player[table['playerattributes'][a]]}, id:user.id}});
               }

             for(a in all){  
               for(b in all[a]){
                 for(c in all[a][b]){  
                  $.ajax({type: "GET", url: "/savingtwo", data:{ exist:all[a][b][c][3], Time:timetime, id:user.id, x:all[a][b][c][0], y:all[a][b][c][1], layer:a}});
                }
              }
            }
             $.ajax({type: "GET", url: "/load"});

     }


     function saveversionone(){

       var time = (new Date()).getTime();
       table.player.x = player.x;
       table.player.y = player.y;
       savepopup.destroy(); savepopup = undefined;
       saving = game.add.image(113, 340, 'saving'); saving.scale.setTo(1.1,1.2);

       setTimeout(function(){saving.destroy(); able();}, 8000);

     for(a in table['playerattributes']){
      $.ajax({type: "GET", url: "/updateuserone", data:{ result:{kind: a, value : table.player[table['playerattributes'][a]]}, id:user.id}});
        }
               
              for(a in all){
                for(b in all[a]){
                  for(c in all[a][b]){  
                    $.ajax({type: "GET", url: "/savingone", data:{ exist:all[a][b][c][3], Time:time, id:user.id, x:all[a][b][c][0], y:all[a][b][c][1], layer:a}});
                  }
                }
              }
              $.ajax({type: "GET", url: "/load"});
        }
}  


function kill(player, monster){

 if ((table.player.attack > table[monster.name][1])&&(table.player.health/(table[monster.name][0] - table.player.defence)) >= (table[monster.name][2]/(table.player.attack - table[monster.name][1]))
  ||(table.player.attack>table[monster.name][1])&&(table.player.defence>table[monster.name][0]))
  {
 
 bgm.loop = false;bgm.stop(); bgm = undefined;
 biu(); monster.kill(); disable(); changestate(monster.x, monster.y);
 isFighting = 1;
  setTimeout(function(){
 bgm = game.add.audio('fightBgm'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play();
 fightinterface = game.add.group();
 gets = game.add.group();
 background = fightinterface.create(0,0,'grey'); background.scale.setTo(1.28,1.7); //688, 496
 kong = fightinterface.create(183,259,'fightkong');  //162.5,168.4
 monst = fightinterface.create(678,259,monster.name); 
 vsLogo = game.add.sprite(360, 50, 'vs'); 
 fightinterface.add(vsLogo);                 
 vsLogo.animations.add('spin', [0, 1, 2, 3,4,5], 12, true);
 vsLogo.animations.play('spin');


  var health = fightinterface.create(351, 220, 'health');             health.scale.setTo(0.153,0.165);        //46,46                         
  var health1 = fightinterface.create(621, 220, 'health');           health1.scale.setTo(0.153,0.165);                                                                      
  var attack = fightinterface.create(351, 308, 'jingubang');        attack.scale.setTo(0.164,0.164);                                                           
  var attack1 = fightinterface.create(621, 308, 'blade');             attack1.scale.setTo(0.102,0.15);                                                                
  var defence = fightinterface.create(351, 396, 'defence');        defence.scale.setTo(0.179,0.179);                                                     
  var defence1 = fightinterface.create(621, 396, 'defence');      defence1.scale.setTo(0.179,0.179);  
  
  nametext = game.add.text(240,200, 'kong' +"                                               " +
  monster.name, 
  { font: "33px bold", fill: '#232420' });
  healthtext = game.add.text(402, 223, table.player.health, 
  { font: "35px bold", fill: '#BF2434' });              
  healthtext2 = game.add.text(550, 223, table[monster.name][2], 
  { font: "35px bold", fill: '#BF2434' });      
  attacktext = game.add.text(402, 308, table.player.attack, { font: "35px bold", fill: '#BF2434' });      
  attacktext2 = game.add.text(550, 308, table[monster.name][0], { font: "35px bold", fill: '#BF2434' });      
  defencetext = game.add.text(402, 396, table.player.defence, { font: "35px bold", fill: '#BF2434' });  
  defencetext2 = game.add.text(550, 396, table[monster.name][1], { font: "35px bold", fill: '#BF2434' });  
    fightinterface.add(nametext);
    fightinterface.add(healthtext);
    fightinterface.add(healthtext2);
    fightinterface.add(attacktext);
    fightinterface.add(attacktext2);    
    fightinterface.add(defencetext);
    fightinterface.add(defencetext2);
    table.player.nectar += table[monster.name][3];
    table.player.experience += table[monster.name][4];

    setint = setInterval(function(){caculate(monster.name);if(table[monster.name][2]<=0){ table[monster.name][2]= table[monster.name][5];
    clearInterval(setint);
    setTimeout(function(){fightinterface.destroy();healthText.text = '' + table.player.health; 
      nectarText.text = '' + table.player.nectar; experienceText.text =''  + table.player.experience;
      getThingsPopup = game.add.group();
      get = getThingsPopup.create(226, 200, 'fightingResult');    
      EXPtext = game.add.text(291, 212,  "EXP" ,  { font: "35px bold", fill: '#050A05' }); getThingsPopup.add(EXPtext);
      exptext = game.add.text(291, 255, '  '+ table[monster.name][4], { font: "37px bold", fill: '#BD7C0B' }); getThingsPopup.add(exptext);
      exptext2 = game.add.text(360, 274, 'EXP', { font: "14px bold", fill: '#050A05' }); getThingsPopup.add(exptext2);
      result = game.add.text(245, 510,  " Result" , { font: "65px bold", fill: '#050A05' }); getThingsPopup.add(result);

       MONEYtext = game.add.text(291, 296,  "MONEY" ,  { font: "35px bold", fill: '#050A05' }); getThingsPopup.add(MONEYtext);
       moneytext = game.add.text(291, 340, '  '+ table[monster.name][3] , { font: "37px bold", fill: '#BD7C0B' }); getThingsPopup.add(moneytext);
       moneytext2 = game.add.text(360, 359, 'NECTAR', { font: "14px bold", fill: '#050A05' }); getThingsPopup.add(moneytext2);

       enterAmi = game.add.sprite(745, 494, 'enter'); 
       getThingsPopup.add(enterAmi);                 
       enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
       enterAmi.animations.play('spin');
       enterAmi.inputEnabled = true;  
       enterAmi.events.onInputDown.add(iSee,this);    
       playerVictory = getThingsPopup.create(652, 247, 'playerVictory');    

      
 
  }, 800);   
    }}, 2000);}, 1000);
 

    }
 }



function zengzhanglistener(){

    if(count<=dialogue['zeng'].length-1){     
    text.text = dialogue['zeng'][count];
    count++;     
         }
   if(count >dialogue['zeng'].length-1){     
     fight(player, zengs);   
         }

}

function getWing(player, wing){
  wing.kill(); disable(); changestate(wing.x, wing.y); table.player.wingexist = 1;
  flybutton = game.add.button(1060, 545, 'renyimen', fly, this, 1,0,2);    allthings.add(flybutton);
  getThings('wings');
}

function getScroll(player, scroll){
  scroll.kill(); disable(); table.player.scrollexist = 1; changestate(scroll.x, scroll.y); 
  scrollbutton = game.add.button(1060, 435, 'interfacescroll', info, this, 1,0,2);  allthings.add(scrollbutton);
  getThings('scroll');
}

function getYellowkey (player, yellowkey){
      yellowkey.kill();disable();
      changestate(yellowkey.x, yellowkey.y);
      table.player.yellow_key += 1 ;
      yellowkeyText.text = '' + table.player.yellow_key;    
      getThings('yellowkey');  
}



function getRedkey (player, redkey) {
   redkey.kill(); disable();
   changestate(redkey.x, redkey.y);
   table.player.red_key += 1 ;
   redkeyText.text = '' + table.player.red_key;
   getThings('redkey');

}


function getBluekey (player, bluekey){
  bluekey.kill(); disable();
  changestate(bluekey.x, bluekey.y);
  table.player.blue_key += 1 ;
  bluekeyText.text = '' + table.player.blue_key;   
  getThings('bluekey');
}



function shouxinlistener(){
    if(count <= dialogue['shouxin'].length-1&&shouxin!=undefined){
      disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group();shouxin = undefined;
      douzhanshengfo = disappearGroup.create(112,190,'douzhanshengfo'); douzhanshengfo.scale.setTo(0.62,0.62);
      blackdialogue = disappearGroup.create(75,506,'dialogue'); blackdialogue.scale.setTo(0.712,1);
       nametext = game.add.text(190, 523, dialogue.shouxinname[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
       text = game.add.text(253, 567, dialogue.shouxin[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
       count++;
      }
    else if(count <= dialogue['shouxin'].length-1&&douzhanshengfo!=undefined){
            disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group(); douzhanshengfo==undefined;
            shouxin = disappearGroup.create(639,176,'shouxin'); 
            blackdialogue = disappearGroup.create(75,506,'dialogue'); blackdialogue.scale.setTo(0.712,1);
              nametext = game.add.text(190, 523, dialogue.shouxinname[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
       text = game.add.text(253, 567, dialogue.shouxin[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
       count++; 
       }
   else if(count == dialogue['shouxin'].length){
          disappearGroup.destroy(); disappearGroup = undefined;  douzhanshengfo==undefined;
          tradepopup.destroy(); tradepopup = undefined; tradewithshouxin();
   }
  
}

function tradewithshouxin(player,shouxin){
    var time = table.player.shouxintimes;  
    function back(){player.x = 208; player.y = 12;  disable(); }
    if(time==0){

        if(count==0){
           enterValue = 5; back();
           bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('qilinBgm'); bgm.volume = bgmVolume;bgm.loop = true;bgm.play();
           tradepopup = game.add.group();
           shopInterface = tradepopup.create(75,42,'shou');  
           
        //   entertext = game.add.text(826, 645, "Enter...", { font: "24px bold", fill: '#FCFAFB'});tradepopup.add(entertext); 
           disappearGroup = game.add.group(); 
             
           shouxin = disappearGroup.create(639,176,'shouxin'); 
           blackdialogue = disappearGroup.create(75,506,'dialogue'); blackdialogue.scale.setTo(0.712,1);
           enterAmi = game.add.sprite(896, 611, 'enter'); 
           tradepopup.add(enterAmi);                 
           enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
           enterAmi.animations.play('spin');
           enterAmi.inputEnabled = true;    enterAmi.events.onInputDown.add(shouxinlistener,this);
          // nametext = game.add.text(190, 523, "寿星:", { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
          // text = game.add.text(253, 567, "     执星愁，添海屋，我腰挂葫芦并宝禄，你说谁是寿星，寿\n\n星就是我.", { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
          nametext = game.add.text(190, 523, "God of longevity:", { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
          text = game.add.text(253, 567, "     Do you know who is god of longevity? It's me.", { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);

        }
   else if(count != 0){beginTrading();  count = 0;  enterValue = 0;table.player.shouxintimes = 1;table.player.progress +=1; }
                }
    else if(time==1){back(); beginTrading();}
   function beginTrading(){
       bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('shoppingBgm'); bgm.volume = bgmVolume;bgm.loop = true;bgm.play();
       tradepopup = game.add.group();
       shopInterface = tradepopup.create(75,42,'shopPopup'); 
       shouxin = tradepopup.create(639,176,'shouxin'); blackdialogue = tradepopup.create(75,506,'dialogue');blackdialogue.scale.setTo(0.712,1);
  
       textTip = game.add.text(150, 71, "Use your health to trade with god of  longevity", { font: "40px bold", fill: '#022B00'}); tradepopup.add(textTip); 
       text = game.add.text(150, 570, " What can I do for you?", { font: "45px bold", fill: '#28B516'}); tradepopup.add(text); 
       yellowkeyBtn = game.add.button(160,149, 'tradeyellowkey', addYellowkey, this,1,0,2); tradepopup.add(yellowkeyBtn);
       bluekeyBtn = game.add.button(160,230, 'tradebluekey', addBluekey, this,1,0,2); tradepopup.add(bluekeyBtn);
       redkeyBtn = game.add.button(160,300, 'traderedkey', addRedkey, this,1,0,2);tradepopup.add(redkeyBtn);
       maskBtn = game.add.button(160,390, 'xixuemianju', null, this,1,0,2);tradepopup.add(maskBtn);
       leaveBtn = game.add.button(653,564, 'walkAway', walkAway, this,1,0,2);tradepopup.add(leaveBtn);
       yellowkeyTxt= game.add.text(248, 150, " (-300 Health)", { font: "34px bold", fill: '#BA0606'}); tradepopup.add(yellowkeyTxt); 
       bluekeyTxt= game.add.text(248, 230, " (-800 Health)", { font: "34px bold", fill: '#BA0606'}); tradepopup.add(bluekeyTxt); 
       redkeyTxt= game.add.text(248, 314, " (-2000 Health)", { font: "34px bold", fill: '#BA0606'}); tradepopup.add(redkeyTxt); 
       maskTxt= game.add.text(248, 403, " (-50000 Health)", { font: "34px bold", fill: '#BA0606'}); tradepopup.add(maskTxt);  
      }
     function addYellowkey(){
       if(table['player']['health']>300){ 
        table.player.health -=300; table.player.yellow_key +=1;
        yellowkeyText.text = '' + table.player.yellow_key;
        healthText.text = '' + table.player.health; 
       }
      }
      function addBluekey(){
       if(table['player']['health']>800){ 
        table.player.health -=800; table.player.blue_key +=1;
        bluekeyText.text = '' + table.player.blue_key;
        healthText.text = '' + table.player.health; 
       }
      }     
      function addRedkey(){
       if(table['player']['health']>2000){ 
        table.player.health -=2000; table.player.red_key +=1;
        redkeyText.text = '' + table.player.red_key;
        healthText.text = '' + table.player.health; 
       }
      }          

      function walkAway(){
         tradepopup.destroy(); tradepopup = undefined; able();
         playerBgm();
        }

}

function snakeshoplistener(){
    if(count <= dialogue['snake'].length-1&&snake!=undefined){
      disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group();snake = undefined;
      douzhanshengfo = disappearGroup.create(60,230,'douzhanshengfo'); douzhanshengfo.scale.setTo(0.7,0.7);
      blackdialogue = disappearGroup.create(0,581,'dialogue'); blackdialogue.scale.setTo(0.81,1);
       nametext = game.add.text(190, 593, dialogue.snakename[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
       text = game.add.text(253, 640, dialogue.snake[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
       count++;
      }
    else if(count == 5&&douzhanshengfo!=undefined){
        nametext.text = dialogue.snakename[count];
       text.text = dialogue.snake[count];
       count++; 
    }
    else if(count <= dialogue['snake'].length-1&&douzhanshengfo!=undefined&&count!=5){
            disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group(); douzhanshengfo==undefined;
           snake = disappearGroup.create(586,306,'snakeshop');   snake.scale.setTo(0.9,0.9);
           blackdialogue = disappearGroup.create(0,581,'dialogue'); blackdialogue.scale.setTo(0.81,1);
              nametext = game.add.text(190, 593, dialogue.snakename[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
       text = game.add.text(253, 640, dialogue.snake[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
       count++; 
       }
   else if(count == dialogue['snake'].length){
          disappearGroup.destroy(); disappearGroup = undefined;  douzhanshengfo==undefined;
          tradepopup.destroy(); tradepopup = undefined; tradewithsnake(); 
   }

}

function tradewithsnake(player,snakeshop){
  
  var time = table.player.snaketimes; 
  function back(){player.x = 324; player.y = 432;  disable(); }     
    if(time==0){
        if(count==0){
           back(); enterValue = 3;   
           bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('qilinBgm'); bgm.volume = bgmVolume;bgm.loop = true;bgm.play();
           tradepopup = game.add.group();
          shopInterface = tradepopup.create(0,0,'lingshedong');
 //          entertext = game.add.text(920, 724, "Enter...", { font: "28px bold", fill: '#FCFAFB'});tradepopup.add(entertext);  
           disappearGroup = game.add.group();   
           snake = disappearGroup.create(586,306,'snakeshop');   snake.scale.setTo(0.9,0.9);
           blackdialogue = disappearGroup.create(0,581,'dialogue'); blackdialogue.scale.setTo(0.81,1);

            enterAmi = game.add.sprite(926, 700, 'enter'); 
            tradepopup.add(enterAmi);                 
            enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
            enterAmi.animations.play('spin');
             enterAmi.inputEnabled = true;    enterAmi.events.onInputDown.add(snakeshoplistener,this);
           // nametext = game.add.text(190, 593, "灵蛇:", { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
           // text = game.add.text(253, 640, "     别打别打，神仙饶命！", { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
           nametext = game.add.text(190, 593, "Xiao Qing:", { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
           text = game.add.text(253, 640, "     Don't beat me", { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
       
         }
        else if(count != 0){enterValue = 0;count = 0;beginTrading(); table.player.snaketimes = 1; table.player.progress +=1; }
                }
    else if(time==1){back(); beginTrading();}


  function beginTrading(){
   bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('shoppingBgm'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play();
  tradepopup = game.add.group();
  shopInterface = tradepopup.create(75,42,'lingshedong'); shopInterface.scale.setTo(0.879,0.846);
  blackdialogue = tradepopup.create(75,506,'dialogue'); blackdialogue.scale.setTo(0.712,1);
  snake = tradepopup.create(500,153,'snakeshop');
  textTip = game.add.text(207, 71, "Use 10 nectar to trade with snake", { font: "45px bold", fill: '#D5FF2E'}); tradepopup.add(textTip); 
  text = game.add.text(150, 570, " What can I do for you?", { font: "45px bold", fill: '#28B516'}); tradepopup.add(text); 
   
   addAttackBtn = game.add.button(140,159, 'addAttack', addAttack, this,1,2,0); tradepopup.add(addAttackBtn);
   addDefenceBtn = game.add.button(140,240, 'addDefence', addDenfence, this,1,0,2); tradepopup.add(addDefenceBtn);
   addHealthBtn = game.add.button(140,320, 'addHealth', addHealth, this,1,0,2);tradepopup.add(addHealthBtn);
   leaveBtn = game.add.button(192,400, 'walkAway', walkAway, this,1,0,2);tradepopup.add(leaveBtn);

      function addAttack(){
       if(table['player']['nectar']>=10){ 
        table.player.nectar -=10; table.player.attack +=3;
        nectarText.text = '' + table.player.nectar;
        attackText.text = '' + table.player.attack; 
       }
      }

          function addDenfence(){
            if(table['player']['nectar']>=10){ 
            table.player.nectar -=10; table.player.defence +=3;
            nectarText.text = '' + table.player.nectar;
            denfenceText.text = '' + table.player.defence; 
           }
          }

          function addHealth(){
            if(table['player']['nectar']>=10){ 
            table.player.nectar -=10; table.player.health +=500;
            nectarText.text ='' + table.player.nectar;
            healthText.text = '' + table.player.health;  
           }
          }

          function walkAway(){
              tradepopup.destroy(); tradepopup = undefined; able();
              playerBgm();
             }
     }
}

function talkwithfairy(player, fairies){
    bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('bossBgm'); bgm.loop = true;bgm.play();
    player.x = 519; player.y = 486;disable();  enterValue = 4; 
    changestate(fairies.x,fairies.y);
    fairygroup = game.add.group(); disappearGroup = game.add.group(); 
    fairyInterface = fairygroup.create(0, 0, 'fairybg'); fairyInterface.scale.setTo(1.234,1.315);
    xiaozi = disappearGroup.create(99,170,'xiaozi'); xiaozi.scale.setTo(1.15,1.15);
    dialoguebackground = disappearGroup.create(0,581,'dialogue');
    nametext = game.add.text(290, 593, "Purple:", { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
    text = game.add.text(310, 640, "     I have waited you here. Take some drink.", { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
        
        enterAmi = game.add.sprite(1172, 688, 'enter'); 
        fairygroup.add(enterAmi);                 
        enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
        enterAmi.animations.play('spin');

}
    //小仙已在此恭候多时，有好酒相待
function fairylistener(){  
   var image = [0,'xiaozi',2,'xiaozi','xiaohong',5,'xiaohong','xiaoshenzi',8,'xiaoshenzi','xiaoju',11,'xiaoju','xiaolan',14,'',
                          16,'xiaolanmasaike',18,'xiaolanmasaike',20,'xiaolanmasaike',22,'xiaolanmasaike',24,'xiaolanmasaike',
                          26,27,'xiaolanmasaike',29,'xiaolanmasaike',31,'xiaozi'];
   var dynamicImage = [0,1,2,3,'xiaohongAM',5,6,'xiaoshenziAM',8,9,'xiaojuAM',11,12,'xiaolanAM'];
    if(count <= dialogue['fairy'].length-1&&xiaozi!=undefined&&huanzhuang==0){
      disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group();xiaozi = undefined;
            if(count!=16){douzhanshengfo = disappearGroup.create(887,160,'douzhanshengfo'); douzhanshengfo.scale.setTo(0.63,0.77);}     
            dialoguebackground = disappearGroup.create(0,581,'dialogue');
            if(count == 26){
              enterValue = 100; 
              acceptBtn = game.add.button(776,631, 'accept', losegame, this,1,0,2); disappearGroup.add(acceptBtn);
              refuseBtn = game.add.button(776,690, 'refuse', fairylistener, this,1,0,2); disappearGroup.add(refuseBtn);
               }
       nametext = game.add.text(290, 593, dialogue.fairyname[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
       text = game.add.text(310, 640, dialogue.fairy[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
       count++;
      }
     else if(count==27){
        enterValue = 4; acceptBtn.destroy();acceptBtn=undefined; refuseBtn.destroy(); refuseBtn = undefined;
        nametext.text = dialogue.fairyname[count];
        text.text = dialogue.fairy[count];
        count++;
        bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('PersonalBg'); bgm.loop = true;bgm.play();

      }
      else if(count <= dialogue['fairy'].length-1&&douzhanshengfo!=undefined&&count!=27||count <= dialogue['fairy'].length-1&&huanzhuang == 1){
          if(count<3||count>14){     
            disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group(); douzhanshengfo==undefined;
            xiaozi = disappearGroup.create(99,170,image[count]); xiaozi.scale.setTo(1.15,1.15);
            dialoguebackground = disappearGroup.create(0,581,'dialogue');
             nametext = game.add.text(290, 593, dialogue.fairyname[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
             text = game.add.text(310, 640, dialogue.fairy[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
             count++; 
          }    

          else if(count ==3 ||count ==6||count==9||count==12){ 
            disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group(); douzhanshengfo==undefined;
            xiaozi = disappearGroup.create(99,170,image[count]); xiaozi.scale.setTo(1.15,1.15);
            dialoguebackground = disappearGroup.create(0,581,'dialogue');
             nametext = game.add.text(290, 593, dialogue.fairyname[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
             text = game.add.text(310, 640, dialogue.fairy[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
            count++; 
            huanzhuang = 1; enterValue = 100; 
            setTimeout(function(){ fairylistener(); },1000);    
          }
          else if(count ==4||count ==7||count==10||count==13){
              disappearGroup.destroy(); disappearGroup = undefined;disappearGroup = game.add.group();
              xiaozi = disappearGroup.create(99,170,image[count]); xiaozi.scale.setTo(1.15,1.15);  //264.5,460
              bianhong = game.add.sprite(99,170, dynamicImage[count]);
              bianhong.scale.setTo(2.3,2.3);
              bianhong.animations.add('shine', [0, 1,2, 3,4,5,6,7], 4, false);  //115 200
              bianhong.animations.play('shine'); 
              dialoguebackground = disappearGroup.create(0,581,'dialogue'); 
              setTimeout(function(){ bianhong.destroy(); 
              nametext = game.add.text(290, 593, dialogue.fairyname[count], { font: "28px bold", fill: '#DCE86D'});disappearGroup.add(nametext);
              text = game.add.text(310, 640, dialogue.fairy[count], { font: "24px bold", fill: '#FCFAFB'});disappearGroup.add(text);
              count++; 
              huanzhuang = 0; enterValue = 4; }, 2000);                
          }
    }
   else if(count == dialogue['fairy'].length){
               enterValue = 0; count = 0;
               fairygroup.destroy(); fairygroup = undefined; 
               disappearGroup.destroy(); disappearGroup = undefined;                
               bound = platforms.create(0,768,'scroll');  bound.scale.setTo(3.42,0.00001); bound.body.immovable = true;
               zengzhangBounce = zengzhangboss.create(250, -275, 'mapzengzhang');
               zengzhangBounce.body.gravity.y = 500;
               zengzhangBounce.body.bounce.y = 0.45 + Math.random() * 0.2;
               duowenBounce = zengzhangboss.create(640, -275, 'mapduowen');
               duowenBounce.body.gravity.y = 500;
               duowenBounce.body.bounce.y = 0.45 + Math.random() * 0.2; 
                setTimeout(function(){ 
                popup = game.add.group();  disappearGroup = game.add.group(); 
                 background = popup.create(0, 0, 'liehuo');   background.scale.setTo(1.264,1.364);
                 zengzhang = popup.create(220, 168,'mapzengzhang');   zengzhang.scale.setTo(1.2,1.2);    
                 dialoguebackground = disappearGroup.create(0,581,'dialogue');
                 // zengzhangtext = game.add.text(421, 645, '快让我来把你一刀两断!!', { font: "45px bold", fill: '#F7F1E6'}); disappearGroup.add(zengzhangtext);
                 // nametext = game.add.text(290, 593, "增长天王:", { font: "28px bold", fill: '#DCE86D'}); disappearGroup.add(nametext);     
                 zengzhangtext = game.add.text(421, 645, 'Why are you not running!!', { font: "45px bold", fill: '#F7F1E6'}); disappearGroup.add(zengzhangtext);
                 nametext = game.add.text(290, 593, "Demon ZengZhang:", { font: "28px bold", fill: '#DCE86D'}); disappearGroup.add(nametext);     
                 
                 fightingBtn = game.add.button(965, 644, 'fightingBtn', fighting, this, 1,0,2);  disappearGroup.add(fightingBtn);
                    },6000);

               //setTimeout(function(){ alert('ss'); disappearGroup.destroy(); disappearGroup = undefined; fighting();},2000);
    }
         function losegame(){
              fairygroup.destroy(); fairygroup = undefined; 
              disappearGroup.destroy(); disappearGroup = undefined; 
              lastword = game.add.image(0,0,'veryfirst');
              //nametext = game.add.text(394, 224, '你跪了', { font: "120px bold", fill: '#C22D40'});
              nametext = game.add.text(394, 224, 'Game Over', { font: "120px bold", fill: '#C22D40'});
           }

          function fighting(){
                disappearGroup.destroy(); disappearGroup = undefined;
                tweenplayer =  game.add.group();  
                character = tweenplayer.create(815, 768, 'douzhanshengfo');                                                
                character.scale.setTo(0.6,0.65);
                var health = tweenplayer.create(470, 848, 'health');             health.scale.setTo(0.203,0.205);                                 
                var health1 = tweenplayer.create(755, 848, 'health');           health1.scale.setTo(0.203,0.205);                                                                       
                var attack = tweenplayer.create(755, 935, 'jingubang');        attack.scale.setTo(0.217,0.203);                                                           
                var attack1 = tweenplayer.create(470, 935, 'blade');             attack1.scale.setTo(0.1355,0.186);                                                                
                var defence = tweenplayer.create(470, 1022, 'defence');        defence.scale.setTo(0.238,0.222);                                                     
                var defence1 = tweenplayer.create(755, 1022, 'defence');      defence1.scale.setTo(0.238,0.222);         
                   healthtext = game.add.text(690, 860, table.player.health, 
                 { font: "33px bold", fill: '#EB0E0E' });        
                 healthtext2 = game.add.text(560, 860,table['zengzhang'][2], 
                 { font: "33px bold", fill: '#EB0E0E' });
                  attacktext = game.add.text(560, 947, table['zengzhang'][0]+ "           "   +
                   table.player.attack, 
                  { font: "33px bold", fill: '#EB0E0E' });      
                  defencetext = game.add.text(560, 1034, table['zengzhang'][1]+ "           "   +
                  table.player.defence, 
                  { font: "33px bold", fill: '#EB0E0E' });  
                   tweenplayer.add(healthtext);
                   tweenplayer.add(healthtext2);
                   tweenplayer.add(attacktext);
                   tweenplayer.add(defencetext);
                   tween = game.add.tween(tweenplayer);
                   tween.to({ y: -600 }, 1000);
                   tween.start();
                  setTimeout(function(){
                     setint = setInterval(function(){bosscaculate('zengzhang');
                                          if(table['zengzhang'][2]<=0){
                                             table['zengzhang'][2]= 150;
                                             clearInterval(setint);
                                             setTimeout(function(){
                                                tweenplayer.destroy(); tweenplayer = undefined;
                                                popup.destroy(); popup = undefined; zengzhangBounce.destroy();

                                                 popup = game.add.group();  disappearGroup = game.add.group(); 
                                                 background = popup.create(0, 0, 'liehuo');   background.scale.setTo(1.264,1.364);
                                                 duowen = popup.create(815, 168,'mapduowen');                              
                                                 duowen.scale.setTo(1.05,1.05);   
                                                 dialoguebackground = disappearGroup.create(0,581,'dialogue');
                                                 // duowentext = game.add.text(421, 645, '我的伞已经饥渴难耐!!', { font: "45px bold", fill: '#F7F1E6'}); disappearGroup.add(duowentext);
                                                 // nametext = game.add.text(290, 593, "多闻天王:", { font: "28px bold", fill: '#DCE86D'}); disappearGroup.add(nametext);     
                                                 duowentext = game.add.text(421, 645, 'Run or Die!!', { font: "45px bold", fill: '#F7F1E6'}); disappearGroup.add(duowentext);
                                                 nametext = game.add.text(290, 593, "Demon DuoWen:", { font: "28px bold", fill: '#DCE86D'}); disappearGroup.add(nametext);     
                                                 fightingBtn = game.add.button(965, 644, 'fightingBtn', fightingAgain, this, 1,0,2);  disappearGroup.add(fightingBtn);

                                            }, 700);
                                          }
                                       if(table.player.health <= 0){
                                             clearInterval(setint);       
                                             setTimeout(function(){
                                                tweenplayer.destroy(); tweenplayer = undefined;
                                                popup.destroy(); popup = undefined;  gameover();
                                                bgm.loop = false; bgm.stop(); bgm = undefined;
                                            }, 700);
                                           }                                             
                                       }, 1200);
                  }, 1200);
         }

            function fightingAgain(){
               disappearGroup.destroy(); disappearGroup = undefined;
                tweenplayer =  game.add.group();  
                character = tweenplayer.create(220, 768, 'douzhanshengfo');                                                
                character.scale.setTo(0.6,0.65);
                var health = tweenplayer.create(755, 848, 'health');             health.scale.setTo(0.203,0.205);                                 
                var health1 = tweenplayer.create(470, 848, 'health');           health1.scale.setTo(0.203,0.205);                                                                       
                var attack = tweenplayer.create(470, 935, 'jingubang');        attack.scale.setTo(0.217,0.203);                                                           
                var attack1 = tweenplayer.create(755, 935, 'blade');             attack1.scale.setTo(0.1355,0.186);                                                                
                var defence = tweenplayer.create(755, 1022, 'defence');        defence.scale.setTo(0.238,0.222);                                                     
                var defence1 = tweenplayer.create(470, 1022, 'defence');      defence1.scale.setTo(0.238,0.222);         
                   healthtext = game.add.text(560, 860,table.player.health, 
                 { font: "33px bold", fill: '#EB0E0E' });        
                 healthtext2 = game.add.text(690, 860, table['duowen'][2], 
                 { font: "33px bold", fill: '#EB0E0E' });
                  attacktext = game.add.text(560, 947, table.player.attack + "           "   +
                   table['duowen'][0], 
                  { font: "33px bold", fill: '#EB0E0E' });      
                  defencetext = game.add.text(560, 1034, table.player.defence + "           "   +
                  table['duowen'][1], 
                  { font: "33px bold", fill: '#EB0E0E' });  
                   tweenplayer.add(healthtext);
                   tweenplayer.add(healthtext2);
                   tweenplayer.add(attacktext);
                   tweenplayer.add(defencetext);
                   tween = game.add.tween(tweenplayer);
                   tween.to({ y: -600 }, 1000);
                   tween.start();
                   setTimeout(function(){
                     setint = setInterval(function(){bosscaculate('duowen');
                                          if(table['duowen'][2]<=0){
                                             table['duowen'][2] = 150;
                                             clearInterval(setint);
                                             setTimeout(function(){
                                                tweenplayer.destroy(); tweenplayer = undefined;
                                                popup.destroy(); popup = undefined; duowenBounce.destroy();
                                                table.player.greenkey += 1; fairies.destroy(); monsterAppear();
                                                table.player.thirdfloornotice=1; table.player.progress+=1; table.player.statpoints+=5; 
                                                table.player.level+=1; isFighting = 2; 
                                                levelText.text = '' + table.player.level;
                                                getThingsPopup = game.add.group(); get = getThingsPopup.create(180, 310, 'get');    
                                                enterAmi = game.add.sprite(739, 371, 'enter'); 
                                                getThingsPopup.add(enterAmi);                 
                                                enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
                                                enterAmi.animations.play('spin');
                                                enterAmi.inputEnabled = true;  
                                                enterAmi.events.onInputDown.add(iSee,this);         
                                                gettext = game.add.text(310, 340, "Got 1 Green key.", { font: "24px bold", fill: '#21B824' }); getThingsPopup.add(gettext); 
                                                gettext = game.add.text(310, 380, "Level up !", { font: "24px bold", fill: '#D2F547' }); getThingsPopup.add(gettext);       
                                            }, 700);
                                          }
                                           if(table.player.health <= 0){
                                             clearInterval(setint);       
                                             setTimeout(function(){
                                                tweenplayer.destroy(); tweenplayer = undefined;
                                                popup.destroy(); popup = undefined;  gameover();
                                                bgm.loop = false; bgm.stop(); bgm = undefined;
                                            }, 700);
                                           }
                                       }, 1200);
                  }, 1200);
         }
                                       
             function monsterAppear(){
                        fromLeftbluefire = bluefires.create(-60,116,'mapbluefire'); fromLeftbluefire.body.immovable = true; 
                        fromLeftbluefire.name = "bluefire"; fromLeftbluefire.body.gravity.x =115;   

                        fromLeftfirewizard = firewizards.create(-120,67,'mapfirewizard'); fromLeftfirewizard.body.immovable = true; 
                        fromLeftfirewizard.name = "firewizard"; fromLeftfirewizard.body.gravity.x =118;   

                        fromRightbluefire = bluefires.create(1264,116,'mapbluefire'); fromRightbluefire.body.immovable = true; 
                        fromRightbluefire.name = "bluefire";   fromRightbluefire.body.gravity.x =-145; 

                        fromRightfirewizard = firewizards.create(1324,67,'mapfirewizard'); fromRightfirewizard.body.immovable = true; 
                        fromRightfirewizard.name = "firewizard";   fromRightfirewizard.body.gravity.x =-144;                      

                        fromUpbluefire = bluefires.create(529,-60,'mapbluefire'); fromUpbluefire.body.immovable = true; 
                        fromUpbluefire.name = "bluefire";    fromUpbluefire.body.gravity.y =26; 

                        fromUptreeman = treemans.create(601,-120,'maptreeman'); fromUptreeman.body.immovable = true; 
                        fromUptreeman.name = "treeman";    fromUptreeman.body.gravity.y =26; 

                        fromUptreeman2 = treemans.create(459,-120,'maptreeman'); fromUptreeman2.body.immovable = true; 
                        fromUptreeman2.name = "treeman";    fromUptreeman2.body.gravity.y =26;                       

                        setTimeout(function(){  fromLeftbluefire.x = 465;   fromLeftbluefire.body.gravity.x =0; fromLeftbluefire.body.velocity.x =0;
                                                                  fromLeftfirewizard.x = 405;   fromLeftfirewizard.body.gravity.x =0; fromLeftfirewizard.body.velocity.x =0;
                                                                  fromRightbluefire.x = 598;   fromRightbluefire.body.gravity.x = 0;  fromRightbluefire.body.velocity.x =0;
                                                                  fromRightfirewizard.x = 660;   fromRightfirewizard.body.gravity.x = 0;  fromRightfirewizard.body.velocity.x =0;
                                                                  fromUpbluefire.y = 57;   fromUpbluefire.body.gravity.y = 0;  fromUpbluefire.body.velocity.y =0; 
                                                                  fromUptreeman.y = 7;   fromUptreeman.body.gravity.y = 0;  fromUptreeman.body.velocity.y =0;
                                                                  fromUptreeman2.y = 7;   fromUptreeman2.body.gravity.y = 0;  fromUptreeman2.body.velocity.y =0; },3000);

                        all[3][20].push([465,116,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"]);
                        all[3][20].push([529,57,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"]);
                        all[3][20].push([598,116,"bluefire", 1,"mapbluefire","bluefire","analyzebluefire"]);
                        all[3][8].push([405,67,"firewizard", 1,"mapfirewizard","firewizard","analyzefirewizard"]);
                        all[3][8].push([660,67,"firewizard", 1,"mapfirewizard","firewizard","analyzefirewizard"]);
                        all[3][11].push([601,7,"treeman", 1,"maptreeman","treeman","analyzetreeman"]);
                        all[3][11].push([459,7,"treeman", 1,"maptreeman","treeman","analyzetreeman"]);
             }

 }



function openyellowDoor(player, yellowDoors){
       if(table.player.yellow_key>0){
        yellowDoors.kill();
        table.player.yellow_key -= 1; 
        yellowkeyText.text = '' + table.player.yellow_key;    
        changestate(yellowDoors.x,yellowDoors.y);
       }   
   }

function openblueDoor(player, blueDoors){
        if(table.player.blue_key>0){
        blueDoors.kill();
        table.player.blue_key -= 1;
        bluekeyText.text = '' + table.player.blue_key;    
        changestate(blueDoors.x,blueDoors.y);
       }  

}

function qilinlistener(){
    if(count <= dialogue['redanimal'].length-1&&table.player.qilintimes==0){
          text.text = dialogue['redanimal'][count];
          nametext.text = dialogue['redanimalname'][count];
          count++; 
      }     
    if(count > dialogue['redanimal'].length-1&&table.player.qilintimes==0){ 

      table.player.qilintimes = 1;  count = 0;  
      popup.destroy();  popup = undefined;  
      getThingsPopup = game.add.group(); get = getThingsPopup.create(180, 310, 'get');    
       enterAmi = game.add.sprite(739, 371, 'enter'); 
       getThingsPopup.add(enterAmi);                 
       enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
       enterAmi.animations.play('spin');
       enterAmi.inputEnabled = true;  
       enterAmi.events.onInputDown.add(iSee,this);         
      gettext = game.add.text(310, 356, "Got 2 Yellow keys", { font: "29px bold", fill: '#F1FC1E' }); getThingsPopup.add(gettext); 
      enterValue=0; 
      playerBgm();
          }    

    if(count <= dialogue['redanimal1'].length-1&&table.player.qilintimes==2){
                  
          text.text = dialogue['redanimal1'][count];
          nametext.text = dialogue['redanimalname1'][count];
          count++; 
      }
    if(count >dialogue['redanimal1'].length-1&&table.player.qilintimes==2){     
      table.player.qilintimes = 3;     count = 0;  enterValue=0; 
      popup1.destroy();  popup1 = undefined;  able(); 
      playerBgm();
         }
}

function openredDoor(player, redAnimials){
    
 if(table.player.red_key >0&&table.player.qilintimes==1){  

   redAnimials.kill(); changestate(redAnimials.x, redAnimials.y); disable();
   table.player.qilintimes = 2; table.player.progress +=1 ; enterValue=2;

   bgm.stop();  bgm.loop = false; bgm = undefined; bgm = game.add.audio('qilinBgm'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play();
   popup1 = game.add.group();   
   interface1 = popup1.create(0, 0, 'qilingong');   interface1.scale.setTo(1.28, 1.46);
   qilin = game.add.sprite(258, 244, 'movableqilin'); qilin.scale.setTo(1.5,1.5);
   popup1.add(qilin);
   qilin.animations.add('shine', [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15], 5, true);
   qilin.animations.play('shine');   
   dialoguebackground = popup1.create(0,581,'dialogue');   dialoguebackground.scale.setTo(0.81,1);
   dialoguebackground.inputEnabled = true;    dialoguebackground.events.onInputDown.add(qilinlistener,this);
   text = game.add.text(253, 640, "小麒麟，你要的酒我给你找来了", { font: "24px bold", fill: '#EDE4E9'});    popup1.add(text);
   nametext = game.add.text(190, 593, "悟空: ", { font: "28px bold", fill: '#DCE86D'});popup1.add(nametext);
   
    enterAmi = game.add.sprite(926, 700, 'enter'); 
    popup1.add(enterAmi);                   
    enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
    enterAmi.animations.play('spin');
    table.player.red_key -= 1;
    redkeyText.text = '' + table.player.red_key;  
  
 }
   if(table.player.red_key >0&&redAnimials.x!=461&&redAnimials.y!=461)   
    {   
       redAnimials.kill();
       changestate(redAnimials.x, redAnimials.y);
       table.player.red_key -= 1;;

        redkeyText.text = '' + table.player.red_key;  
    }

 if(table.player['red_key'] ==0&&redAnimials.x==461&&redAnimials.y==461&&count==0&&table.player.qilintimes==0){

   bgm.stop();  bgm.loop = false; bgm = undefined; bgm = game.add.audio('qilinBgm'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play();
   table.player.yellow_key += 2;
   yellowkeyText.text = '' + table.player.yellow_key;    
   player.y =600; enterValue=2;

   popup = game.add.group();  disable();
   popupinterface = popup.create(0, 0, 'qilingong');   popupinterface.scale.setTo(1.28, 1.46);
   qilin = game.add.sprite(258, 244, 'movableqilin'); qilin.scale.setTo(1.5,1.5);
   popup.add(qilin);
   qilin.animations.add('shine', [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15], 5, true);
   qilin.animations.play('shine');   
   dialoguebackground = popup.create(0,581,'dialogue');   dialoguebackground.scale.setTo(0.81,1); 
   dialoguebackground.inputEnabled = true;    dialoguebackground.events.onInputDown.add(qilinlistener,this);
    enterAmi = game.add.sprite(926, 700, 'enter'); 
    popup.add(enterAmi);                 
    enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
    enterAmi.animations.play('spin');
    

    text = game.add.text(253, 640, " 吼，是谁擅闯此地！ ", { font: "24px bold", fill: '#EDE4E9'});   popup.add(text);
    nametext = game.add.text(190, 593, "火麒麟:", { font: "28px bold", fill: '#DCE86D'});popup.add(nametext);


    }
}

function opengreenDoor(player, greenDoors){
 if(table.player.greenkey > 0){
    greenDoors.kill();
    table.player.greenkey -=1;    
    changestate(greenDoors.x,greenDoors.y);
 }
}

function openpurpleDoor(player, purpleDoors){
    if(table.player.purplekey>0){
      purpleDoors.kill();
      table.player.purplekey-=1;
    }
    
}



function getWeapon (player, weapon) {  
    weapon.kill();  disable();
    changestate(weapon.x, weapon.y);
    table.player.attack += 3 ;
    attackText.text = '' + table.player.attack;     
    getThings('weapon');
}

function getHouyigong(player, houyigong){
   houyigong.kill(); 
   table.player.attack += 20 ;
    attackText.text = '' + table.player.attack;     
}

function getDefence (player, defence) {
    
    defence.kill(); disable();
    changestate(defence.x, defence.y);
    table.player.defence += 2 ;
    denfenceText.text = '' + table.player.defence;
    getThings('defence');
}
function getButianshi(player, butianshi){
    butianshi.kill();
     table.player.defence += 20 ;
    denfenceText.text = '' + table.player.defence;
}


function getNormalShoes(player, normalshoes){
  normalshoes.kill(); 
  if(table.player.layer!=4){disable(); getThings('normalshoes');}
  table.player.speed += 5 ;
  
}


function getSmallhealth (player, smallhealth) {
    
    smallhealth.kill(); 
    if(table.player.layer!=4){disable(); getThings('smallhealth');}
    changestate(smallhealth.x, smallhealth.y);
    table.player.health += 200 ;
    healthText.text = '' + table.player.health;    
     

 }

function getBighealth (player, bighealth) {
    
    bighealth.kill();  
    if(table.player.layer!=4){disable(); getThings('bighealth');}
    changestate(bighealth.x, bighealth.y);
    table.player.health += 500 ;
    healthText.text = '' + table.player.health;    
    
}


function bosscaculate(monster){

    var pattack = table.player.attack;
    var pdefence = table.player.defence;
    var phealth = table.player.health;
    var mattack = table[monster][0];
    var mdefence = table[monster][1];
    var mhealth = table[monster][2];
     if(pattack <= mdefence){
       table[monster][2] = mhealth;beignfight();
     }
     if(pattack > mdefence){
       table[monster][2] = mhealth - (pattack - mdefence);beignfight();
     }

     function beignfight(){
        if(table[monster][2]>0&&mattack>pdefence){
          table.player.health = phealth - (mattack - pdefence);
          healthtext2.text = table[monster][2];
           music = game.add.audio('wukonghit'); music.play();
           if(table.player.health<=0){
            setTimeout(function(){healthtext.text = 0;  musica = game.add.audio('monsterhit'); musica.play();}, 600);
           }
           if(table.player.health>0){
            setTimeout(function(){healthtext.text = table.player.health;  musica = game.add.audio('monsterhit'); musica.play();}, 600);
           }                    
         }
       else if(table[monster][2]>0&&mattack<=pdefence){
            table.player.health = phealth;
            healthtext2.text = table[monster][2];
            music = game.add.audio('wukonghit'); music.play();
            setTimeout(function(){healthtext.text = table.player.health; musica = game.add.audio('monsterhit'); musica.play();}, 600);
       }
        else{healthtext2.text = 0; musica = game.add.audio('wukonghit'); musica.play();}
         }
}


function caculate(monster){

  var pattack = table.player.attack;
  var pdefence = table.player.defence;
  var phealth = table.player.health;
  var mattack = table[monster][0];
  var mdefence = table[monster][1];
  var mhealth = table[monster][2];
  table[monster][2] = mhealth - (pattack - mdefence);

  if(table[monster][2]>0&&mattack>pdefence){
  table.player.health = phealth - (mattack - pdefence);
  healthtext2.text = table[monster][2];
  music = game.add.audio('wukonghit'); music.play(); music.volume = bgmVolume;
  setTimeout(function(){healthtext.text = table.player.health;  musica = game.add.audio('monsterhit'); musica.volume = bgmVolume; musica.play();}, 1000);
  }
  else if(table[monster][2]>0&&mattack<=pdefence){
  table.player.health = phealth;
  healthtext2.text = table[monster][2];
  music = game.add.audio('wukonghit'); music.play();
  setTimeout(function(){healthtext.text = table.player.health; musica = game.add.audio('monsterhit'); musica.volume = bgmVolume;musica.play();}, 1000);
  }

  else{healthtext2.text = 0; musica = game.add.audio('wukonghit'); musica.play();}

}

function changestate(x,y){
  for(a in all){
    if(a == table.player.layer){
      for(b in all[a]){
        for(c in all[a][b]){
          if(all[a][b][c][0] == x&&all[a][b][c][1] == y){
            all[a][b][c][3] = 0;      
          }
        }
      }
    }
  }
}

function disable(){
    moveKey=0;          
    popupExist = 1;          

    // player.body.velocity.x = 0;
    // player.body.velocity.y = 0;
    // player.frame = 30; 
    // buttonClick+=1;


 }

function able(){
    moveKey=1;
    popupExist = 0;
   // buttonClick-=1;
   //   if(buttonClick == 0&&wallup!=undefined){
   //     wallup.destroy();  wallup = undefined;
   //     walldown.destroy(); walldown = undefined;
   //     wallleft.destroy();    wallleft = undefined;
   //     wallright.destroy();  wallright = undefined;
   //   }
}


function analyze(){
  if(analyzepopup==undefined&&popupExist ==0){
   disable();
   var y=1;
   var monsterstext;

   analyzepopup = game.add.group();    
   popup = analyzepopup.create(0,0,'analyzepopup');
  
    for(a in all){
      if(a == table.player.layer){ 
        for(b in all[a]){
            if(all[a][b][0][5]!=undefined){
                    var x=0;
                for(c in all[a][b]){
                    x = x+all[a][b][c][3]; 

                }
               
                  if(x>0&&table.player.attack > table[all[a][b][0][5]][1]&&table[all[a][b][0][5]][0] > table.player.defence){

                  head = analyzepopup.create(20, 60+y,all[a][b][0][6]);
             
                  monsterstext = game.add.text(70, 70+y, "Attack: "+ table[all[a][b][0][5]][0]+ 
                    "     Defence: "+ table[all[a][b][0][5]][1]+ "   Health: "+ table[all[a][b][0][5]][2] +
                   "    Nectar owned:  "+table[all[a][b][0][5]][3] + "    Experience owned: " + table[all[a][b][0][5]][4]+
                   "    You will lose " + (Math.floor(table[all[a][b][0][5]][2]/(table.player.attack - table[all[a][b][0][5]][1])))*(table[all[a][b][0][5]][0] - table.player.defence)+ ' health', 
                  { font: "20px bold", fill: '#0B1978' });      
                  analyzepopup.add(monsterstext);

                   y+=55;}


                  if(x>0&&table.player.attack > table[all[a][b][0][5]][1]&&table[all[a][b][0][5]][0] <= table.player.defence){

                  head = analyzepopup.create(20, 60+y,all[a][b][0][6]);
             
                  monsterstext = game.add.text(70, 70+y, "Attack: "+ table[all[a][b][0][5]][0]+ 
                    "     Defence: "+ table[all[a][b][0][5]][1]+ "   Health: "+ table[all[a][b][0][5]][2] + 
                    "    Nectar owned:  "+table[all[a][b][0][5]][3] + "    Experience owned: " + table[all[a][b][0][5]][4]+
                   "    You will lose " + 0 + ' health', 
                  { font: "20px bold", fill: '#0B1978' });      
                  analyzepopup.add(monsterstext);

                   y+=55;}


                  if(x>0&&table.player.attack <= table[all[a][b][0][5]][1]){

                  head = analyzepopup.create(20, 60+y,all[a][b][0][6]);
             
                  monsterstext = game.add.text(70, 70+y, "Attack: "+ table[all[a][b][0][5]][0]+ 
                    "     Defence: "+ table[all[a][b][0][5]][1]+ "   Health: "+ table[all[a][b][0][5]][2] + 
                    "    Nectar owned:  "+table[all[a][b][0][5]][3] + "    Experience owned: " + table[all[a][b][0][5]][4]+
                   "    ???"  , 
                  { font: "20px bold", fill: '#0B1978' });      
                  analyzepopup.add(monsterstext);

                   y+=55;}

            }

          
        }
      }
    }

  }
  
 else if(analyzepopup!=undefined){
     analyzepopup.destroy();
     analyzepopup=undefined;
     able();
  }
}

function fly(){
  if(flypopup==undefined&&popupExist ==0){

      disable();
      flypopup = game.add.group();
      popup = flypopup.create(128,104,'flypopup');
      var maxPlayer = table.player.maxlayer;
      var y = 0; var z = 0; var x;

  for(a in table['floor']){
    a = parseInt(a);
             if(a < maxPlayer){
                if(a<7){
                      x = 149;     
                  }    
                else if (a>6){
                      x = 341;
                  }   
           y = (a % 7)*80;
          table['floorname'][a] = game.add.button(x,114+y, table['floor'][a], zouni, this); flypopup.add(table['floorname'][a]);
          table['floorname'][a].num = a+1; 
                
              }

  }

      function zouni(floorbutton){
        table.player.layer = floorbutton.num; bieluanpao();
        flypopup.destroy(); flypopup=undefined; able();
        allthings.destroy();  

        player.kill();   player = undefined; 
        refreshmap();
      }

      function bieluanpao(){
        if(table.player.layer==1){ table.player.x = 469; table.player.y = 119}
        if(table.player.layer==2){ table.player.x = 466; table.player.y = 61}   
        if(table.player.layer==3){ table.player.x = 953; table.player.y = 130}
        if(table.player.layer==4){ table.player.x = 113; table.player.y = 702}
        if(table.player.layer==5){ table.player.x = 456; table.player.y = 4}  
        if(table.player.layer==6){ table.player.x = 200; table.player.y = 703}
      }

    }
    else if(flypopup!=undefined){
        flypopup.destroy();
        flypopup=undefined;
        able();
    }
}

function info(){
   var pageNum = 0; var storyProgress = table.player.progress; var rightorleft = 0;  var scale; var plusExist = 0; 
   var attack = table.player.attack; var defence = table.player.defence; var health = table.player.health; var level = table.player.level; var speed = table.player.speed + 180; var bld = 0; var cri = 0;
   var experience = table.player.experience;  var upgradeExp = table.upgrade[table['player']['level'] -1]; var point = table.player.statpoints; var PointText; var AtcText; var DefText; var HealText;
   function recallStory(){
       placetext = game.add.text(418, 85,  storyInfo[pageNum]['place'], { font: "30px italic", fill: '#2C0638'}); informationpopup.add(placetext);
       npc = informationpopup.create(395,160, storyInfo[pageNum]['image']);
       infotext = game.add.text(280, 470,  storyInfo[pageNum]['info'], { font: "35px italic", fill: '#2C0638'}); informationpopup.add(infotext);
       characterbutton = game.add.button(469, 640, 'characterinfo', showCharacterDetail, this, 1,0,2);  informationpopup.add(characterbutton);
            if(storyProgress>1){
              if(pageNum == 0&&rightorleft ==0){
              turnrightbutton = game.add.button(688, 650, 'turnright', clickright, this, 1,0,2);  informationpopup.add(turnrightbutton);
              }
              if(pageNum == 0&&rightorleft ==1){
               turnleftbutton.destroy();
              }
             if(pageNum ==1&&rightorleft ==0 ){
               turnleftbutton = game.add.button(257, 650, 'turnleft', clickleft, this, 1,0,2);  informationpopup.add(turnleftbutton);
              }
            if(pageNum == storyProgress-1){
              turnrightbutton.destroy();
              }
            if(pageNum == storyProgress-2&&rightorleft ==1){
              turnrightbutton = game.add.button(688, 650, 'turnright', clickright, this, 1,0,2);  informationpopup.add(turnrightbutton);
              }
           }    
     }

   function clickright(){ pageNum += 1; rightorleft = 0; placetext.destroy(); npc.destroy(); infotext.destroy(); recallStory();}
   function clickleft(){ pageNum -= 1; rightorleft = 1; placetext.destroy(); npc.destroy(); infotext.destroy(); recallStory();}
   
   function showCharacterDetail(){
        informationpopup.destroy();  informationpopup = undefined;
        characterpopup = game.add.group();
        popup = characterpopup.create(75,0,'infopopup'); popup.scale.setTo(1.8,2);
        qilinbutton = game.add.button(469, 650, 'backinfo', backCharacterInfo, this, 1,0,2);  characterpopup.add(qilinbutton);
        showExp();
        showPlus();
        character = characterpopup.create(625,215,'douzhanshengfo'); character.scale.setTo(0.6,0.7);  

        LevText = game.add.text(205, 305,   'LEVEL:              ' + level, { font: "25px italic", fill: '#060A07'}); characterpopup.add(LevText);
        AtcText = game.add.text(205, 355,   'ATTACK:          ' + attack, { font: "25px italic", fill: '#060A07'}); characterpopup.add(AtcText);
        DefText = game.add.text(205, 405,   'DEFENCE:        ' + defence, { font: "25px italic", fill: '#060A07'}); characterpopup.add(DefText);
        HealText = game.add.text(205, 455, 'HEALTH:          ' + health, { font: "25px italic", fill: '#060A07'}); characterpopup.add(HealText);
        SpeedText = game.add.text(205, 505, 'SPEED:              ' + speed, { font: "25px italic", fill: '#060A07'}); characterpopup.add(SpeedText);
        BldText = game.add.text(205, 555, 'BLD:                   ' + bld + '%', { font: "25px italic", fill: '#060A07'}); characterpopup.add(BldText);
        CriText = game.add.text(205, 605, 'CRI:                    ' + cri + '%', { font: "25px italic", fill: '#060A07'}); characterpopup.add(CriText);
        PointText = game.add.text(350, 240, 'Stat Points:  ' + point, { font: "33px italic", fill: '#F6FC72'}); characterpopup.add(PointText);
      }

      function upgradeLevel(){
         upgradeIcon.destroy(); upgradeIcon = undefined; Expbackground.destroy(); Expbackground = undefined;
         Expexp.destroy(); Expexp = undefined; expValuetext.destroy(); expValuetext = undefined; exptext.destroy(); exptext = undefined;
         experience -= upgradeExp;  table.player.experience = experience;
         experienceText.text = '  experience:     ' + table.player.experience;
         level +=1; table.player.level = level;
         levelText.text = '  Level:           ' + table.player.level;
         upgradeExp = table.upgrade[table['player']['level'] -1];
         
         point += 5;  table.player.statpoints = point;
         LevText.text = 'LEVEL:          ' + level;
         PointText.text = 'Stat Points:  ' + point;
         showPlus();
         showExp();
      }
          
      function showExp(){
       if(experience > upgradeExp){scale = 1} 
        else if (experience <= upgradeExp){scale = experience/ upgradeExp}       
       if(scale >= 1){
          upgradeIcon = game.add.sprite(625, 165, 'upgrade'); characterpopup.add(upgradeIcon);
          upgradeIcon.animations.add('shine', [0, 1, 2, 3,4,5,6], 9, true);
          upgradeIcon.animations.play('shine'); 
          upgradeIcon.inputEnabled = true;    
          upgradeIcon.events.onInputDown.add(upgradeLevel,this);    
                           }
           
            Expbackground = characterpopup.create(281,180,'expBackground'); Expbackground.scale.setTo(3,0.9); 
            Expexp = characterpopup.create(283,181.5,'exp'); Expexp.scale.setTo( 3* scale,0.84); 
             expValuetext = game.add.text(393, 185,  experience+ '   /   ' + upgradeExp , { font: "24px italic", fill: '#111203'}); characterpopup.add(expValuetext);
            exptext = game.add.text(205, 184,  'EXP:', { font: "25px italic", fill: '#13036E'}); characterpopup.add(exptext);
            Roletext = game.add.text(405, 85,  'Role Detail', { font: "35px italic", fill: '#13036E'}); characterpopup.add(Roletext);
       }

      function showPlus(){
        if(point>0&&plusExist ==0){ 
          plusExist = 1;
          addPoints = game.add.group(); characterpopup.add(addPoints); 
          addAttackbutton = game.add.button(488,305,'plus', addAtk, this, 1,0,2);  addPoints.add(addAttackbutton);
          addDefencebutton = game.add.button(488,355,'plus', addDef, this, 1,0,2);  addPoints.add(addDefencebutton);
          addHealthbutton = game.add.button(488,405,'plus', addHeal, this, 1,0,2);  addPoints.add(addHealthbutton);
        }
      }

     function addAtk(){
         attack += 3; point -=1;
         table.player.statpoints = point;
         table.player.attack = attack;  attackText.text = '' + table.player.attack;
         AtcText.text = 'ATTACK:      ' + attack;
         PointText.text = 'Stat Points:  ' + point;
         if(point==0){addPoints.destroy(); addPoints = undefined; plusExist = 0;}
      }

     function addDef(){
         defence += 2; point -=1; table.player.statpoints = point;
         PointText.text = 'Stat Points:  ' + point;
         table.player.defence = defence;  DefText.text = 'DEFENCE:    ' + defence;
         denfenceText.text = '' + table.player.defence;
         if(point==0){addPoints.destroy(); addPoints = undefined; plusExist = 0;}
     }

     function addHeal(){
         health += 200; point -=1; table.player.statpoints = point;
         PointText.text = 'Stat Points:  ' + point;
         table.player.health = health;  HealText.text = 'HEALTH:      ' + health;
         healthText.text = '' + table.player.health;
         if(point==0){addPoints.destroy(); addPoints = undefined; plusExist = 0;}
     }

    function backCharacterInfo(){
       characterpopup.destroy(); characterpopup = undefined; 
       judge();plusExist = 0;
    }

    function judge(){
                  if(informationpopup==undefined&&characterpopup==undefined&&popupExist ==0&&infoJudge==0){
                     disable();  informationpopup = game.add.group(); 
                     popup = informationpopup.create(75,0,'infopopup'); popup.scale.setTo(1.8,2);  
                     popupdialogue = informationpopup.create(198,463,'infodialogue'); popupdialogue.scale.setTo(10,1);
                     recallStory();  infoJudge = 1; 
                     }
                  else if(informationpopup==undefined&&characterpopup==undefined&&popupExist ==1&&infoJudge==1){
                     informationpopup = game.add.group();
                     popup = informationpopup.create(75,0,'infopopup'); popup.scale.setTo(1.8,2);  
                     popupdialogue = informationpopup.create(198,463,'infodialogue'); popupdialogue.scale.setTo(10,1);
                     pageNum = 0; rightorleft = 0;
                     recallStory(); 
                     } 
                  else if(informationpopup!=undefined || characterpopup==undefined){
                      informationpopup.destroy();  informationpopup = undefined; 
                      able(); 
                     }
                  else if(informationpopup==undefined || characterpopup!=undefined){
                     characterpopup.destroy(); characterpopup = undefined;
                     able(); 
                    }
     }
   var infoJudge = 0; 
   if(popupExist==0){
       bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('shoppingBgm'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play();
      judge(); 
  }
   else{               
                    if(informationpopup!=undefined || characterpopup==undefined){
                      informationpopup.destroy();  informationpopup = undefined; 
                      able(); 

                     }
                  else if(informationpopup==undefined || characterpopup!=undefined){
                     characterpopup.destroy(); characterpopup = undefined;
                     able(); 
                    }  
                     playerBgm();
   }


}

function help(){
    if(helps == undefined&&popupExist ==0){
    disable();
    helps = game.add.group();
    helpPopup = helps.create(65,64, 'helpPopup');
    guidetext = game.add.text(420, 74,  "GUIDANCE", { font: "40px italic", fill: '#3447C7'}); helps.add(guidetext);
    wasd =  helps.create(109,137, 'WASD'); udrl =  helps.create(217,137, 'UDRL');
    controlltext = game.add.text(324, 157,  ": Use keyboards to control the movement of character.", { font: "23px italic", fill: '#43097D'}); helps.add(controlltext);
    eye = game.add.button(235, 231, 'eye', null, this, 1,0,2); helps.add(eye);
    eyetext = game.add.text(324, 251,  ": Character's skill. Click to see attributes of monsters in this floor.", { font: "23px italic", fill: '#43097D'}); helps.add(eyetext);
    controllll = game.add.button(235, 322, 'control', null, this, 1,0,2); helps.add(controllll);
    controlllltext = game.add.text(324, 342,  ": If you use phones or pad, click it to open the controller.", { font: "23px italic", fill: '#43097D'}); helps.add(controlllltext);
   
    enterAmi = game.add.sprite(850, 600, 'enter');  enterAmi.scale.setTo(0.5,0.5);
    helps.add(enterAmi);                 
    enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 4, true);
    enterAmi.animations.play('spin');
    enterAmi.inputEnabled = true;  
    enterAmi.events.onInputDown.add(help,this);    
    if(table.player.wingexist ==1){
      wing = game.add.button(165, 416, 'renyimen', null, this, 1,0,2); helps.add(wing);
      wingtext = game.add.text(324, 436,  ": Click to fly between different floors.       'F' ", { font: "23px italic", fill: '#43097D'}); helps.add(wingtext);
       }
    if(table.player.scrollexist ==1){
      scroll = game.add.button(165, 507, 'interfacescroll', null, this, 1,0,2); helps.add(scroll);
      interfacescrolltext = game.add.text(324, 527,  ": Click to see storyline and upgrade character. ", { font: "23px italic", fill: '#43097D'}); helps.add(interfacescrolltext);
       }    
    }
  else{
        helps.destroy(); helps = undefined;
        able();
  }
}

function changeController(){ 
         if(controlGroups==undefined&&popupExist ==0){
           controlGroups = game.add.group();
           var upCTL = game.add.button(74, 640, 'upCtl', null, this,1,0,2);
     
           controlGroups.add(upCTL);
            var downCTL = game.add.button(74, 715, 'downCtl', null, this,1,0,2);

           controlGroups.add(downCTL);
           var leftCTL = game.add.button(22, 670, 'leftCtl', null, this,1,0,2);
           controlGroups.add(leftCTL);
           var rightCTL = game.add.button(148, 670, 'rightCtl', null, this,1,0,2);
           controlGroups.add(rightCTL);
           controllerOpen=1;
            }
         else{controlGroups.destroy(); controlGroups = undefined; controllerOpen=0;}
   }

function changeVolume(){
    if(volumesPopup==undefined){
    
    volumesPopup = game.add.group();
    bgmIMage =  volumesPopup.create(1200,697,'get'); bgmIMage.scale.setTo(0.1,0.5);
    plusBtn = volumesPopup.create(1200,697,'get'); bgmIMage.scale.setTo(0.1,0.5);
    plusBtn = game.add.button(1215, 697, 'plus', plusVolume, this,1,0,2);   volumesPopup.add(plusBtn);
    minusBtn = game.add.button(1215, 745, 'minus', minusVolume, this,1,0,2);    volumesPopup.add(minusBtn);
  }
    else{volumesPopup.destroy(); volumesPopup = undefined; }
      function plusVolume(){
        if(bgm.volume>=0&&bgm.volume<3){
            bgm.volume+=0.2;
            bgmVolume = bgm.volume;
        }
      }
      function minusVolume(){
         if(bgm.volume>0.1&&bgm.volume<=3.3){
            bgm.volume-=0.1;
            bgmVolume = bgm.volume;
        }
      }
}

function playerBgm(){
       if(table.player.layer <3){
           if(bgm ==undefined ){bgm = game.add.audio('bgm'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play(); } 
          else{bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('bgm'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play(); }
        }

       else if(table.player.layer >2){
                  if(table.player.layer ==3&&table.player.progress<3){
                       if(bgm ==undefined ){bgm = game.add.audio('jingsong'); bgm.volume = bgmVolume;bgm.loop = true;bgm.play(); } 
                       else{bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('jingsong'); bgm.volume = bgmVolume;bgm.loop = true;bgm.play();}
                        }
                  else if(table.player.layer ==3&&table.player.progress>2){
                         if(bgm ==undefined ){bgm = game.add.audio('PersonalBg'); bgm.volume = bgmVolume;bgm.loop = true;bgm.play(); } 
                         else{bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('PersonalBg'); bgm.volume = bgmVolume;bgm.loop = true;bgm.play();}
                            }
                      else if (table.player.layer !=3){ 
                           if(bgm ==undefined ){bgm = game.add.audio('bgm2');bgm.volume = bgmVolume; bgm.loop = true; bgm.play(); } 
                          else{bgm.loop = false;bgm.stop(); bgm = undefined;bgm = game.add.audio('bgm2'); bgm.volume = bgmVolume; bgm.loop = true;bgm.play();}
                      }
      }
}
function fightOrRun(){
   disable();
   query = game.add.group();
   queryInterface = query.create(158,129,'dialogue'); queryInterface.scale.setTo(0.6,1.6);
   querytext = game.add.text(230, 201,  'Feel the danger...Do you want to go back?', { font: "38px italic", fill: '#DB2351'}); query.add(querytext);
   yesbutton = game.add.button(330, 306, 'gothirdfloor', go, this, 1,0,2);  query.add(yesbutton);
   nobutton = game.add.button(590, 306, 'gobacksecond', goback, this, 1,0,2);  query.add(nobutton);
    function go(){query.destroy(); query = undefined; able(); }
    function goback(){
      query.destroy(); query = undefined;able();
      goperiousfloor();
    }

}

function getThings(things){

        getThingsPopup = game.add.group(); get = getThingsPopup.create(180, 310, 'get');    
        enterAmi = game.add.sprite(739, 371, 'enter'); 
        getThingsPopup.add(enterAmi);                 
        enterAmi.animations.add('spin', [0, 1, 2, 3,4,5,6,7], 8, true);
        enterAmi.animations.play('spin');
        enterAmi.inputEnabled = true;  
        enterAmi.events.onInputDown.add(iSee,this);    
   
        if(things == 'smallhealth'){
             gettext = game.add.text(310, 356, "+ 200 生命值", { font: "29px bold", fill: '#18F54C' }); getThingsPopup.add(gettext);
            }
        else if(things == 'yellowkey'){
             gettext = game.add.text(310, 356, "得到离火秘钥＊1", { font: "29px bold", fill: '#F1FC1E' }); getThingsPopup.add(gettext);   
            }
        else if(things == 'redkey'){     
             gettext = game.add.text(310, 356, "得到五粮液＊1", { font: "29px bold", fill: '#FC4E88' }); getThingsPopup.add(gettext);
            }
         else if(things == 'bluekey'){  
              gettext = game.add.text(310, 356, "得到坎水秘钥＊1", { font: "29px bold", fill: '#4ED4FC' }); getThingsPopup.add(gettext); 
          }
         else if(things == 'weapon'){ 
              gettext = game.add.text(310, 356, "红色大力, 攻击力 + 3", { font: "29px bold", fill: '#F54559' }); getThingsPopup.add(gettext);
         }
         else if(things == 'defence'){    
              gettext = game.add.text(310, 356, "蓝色大力, 防御力 + 3", { font: "29px bold", fill: '#6392FF' }); getThingsPopup.add(gettext);
         }
         else if(things == 'bighealth'){    
              gettext = game.add.text(310, 356, "生命值 + 500", { font: "29px bold", fill: '#18F54C' }); getThingsPopup.add(gettext);
         }
         else if(things == 'normalshoes'){    
              gettext = game.add.text(310, 356, "滑板鞋，＋20 移动速度", { font: "29px bold", fill: '#FFF8F7' }); getThingsPopup.add(gettext);
         }
         else if(things == 'wings'){    
              gettext = game.add.text(270, 320, "取得凤凰的翅膀 !! \n\n你现在可以在楼层旋转跳跃了！点击右处图标或按键盘F使用。 ", { font: "25px bold", fill: '#FFF8F7' }); getThingsPopup.add(gettext);
         }         
         else if(things == 'scroll'){    
              gettext = game.add.text(270, 320, "取得凤凰的翅膀  !!\n\n你现在可以给人物升级了！点击右处图标使用。 ", { font: "25px bold", fill: '#FFF8F7' }); getThingsPopup.add(gettext);
         }             
}

function iSee(){
      if(getThingsPopup!=undefined){
        if(isFighting==1){
             playerBgm();
             isFighting = 0;
        }
        else if(isFighting==2){
             playerBgm();         
        }
        getThingsPopup.destroy();getThingsPopup = undefined; able();
        }
 }


function gonextfloor(){

  allthings.destroy();
  table.player.layer +=1;

  player.x = table['gonextfloor'][table.player.layer][0];
  player.y = table['gonextfloor'][table.player.layer][1];
  table.player.x = player.x;   
  table.player.y = player.y;
  changeMaxlayer();
  player.kill();   player = undefined; refreshmap();
    if (table.player.layer == 3&&table.player.thirdfloornotice==0){
      fightOrRun();
  }
}      


function goperiousfloor(){

  allthings.destroy();
  table.player.layer -=1;
  player.x = table['goperiousfloor'][table.player.layer][0];
  player.y = table['goperiousfloor'][table.player.layer][1];
  table.player.x = player.x;   
  table.player.y = player.y;
  player.kill();   player = undefined; refreshmap();

}

function changeMaxlayer(){
  if(table.player.layer>table.player.maxlayer){
    table.player.maxlayer = table.player.layer;
  }
}

function biu(){

   popup = game.add.sprite(0, 0, 'biubiu');
   popup.scale.setTo(13,29);
   popup.animations.add('shine', [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18,19,20,21,22,23,24], 24, true);
   popup.animations.play('shine'); 
   setTimeout(function(){popup.destroy(); popup = undefined;}, 1000);

}

function biubiu(){

   popup = game.add.sprite(0, 0, 'biu');
   popup.scale.setTo(9.875,8);
   popup.animations.add('shine', [0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18,19,20,21,22,23,24], 24, true);
   popup.animations.play('shine'); 
   setTimeout(function(){popup.destroy();popup = undefined;}, 1000);
}

function biubiubiu(){
   
   popup = game.add.sprite(0, 0, 'biu');
   popup.scale.setTo(9.875,8);
   popup.animations.add('shine', [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18,19,20,21,22,23,24], 25, true);
   popup.animations.play('shine'); 
   setTimeout(function(){popup.destroy();popup = undefined;}, 2000);
}


function firstanimation(){
  bgm = game.add.audio('introductionBgm'); bgm.loop = true;bgm.play();
  gameintroduction = game.add.group();
  story = gameintroduction.create(0,0,'veryfirst');

  storyline = game.add.text(40, 760, '    唐朝开元之后,有武媚娘侍政。她本命格妖星，后自名武曌而霍乱\n\n阴阳，混淆天机。在位数年，其透支龙气以开创贞观之治，龙脉被阴\n\n气蚕食。所后阴盛阳衰，国运不起，自此中华名族走向了下坡路。\n\n\n\n    西天如来佛祖敏锐地计算到了这点，为防止悲剧发生，普渡众生，\n\n便派遣坐下四大弟子之一摩诃迦叶前往花果山，故事由此开始…' , { font: "40px bold", fill: '#84A0E3' }); 
  
   tween = game.add.tween(storyline);
   tween.to({ y: 100 }, 10000);
   tween.start();
 
    setTimeout(function(){  startgamebutton = game.add.button(511, 680, 'herewego', huaguoshan, this);}, 10000);  
  


     function huaguoshan(){
      bgm.loop = false; bgm.stop(); bgm = undefined;bgm = game.add.audio('huaguoshanBgm'); bgm.loop = true;bgm.play();
      story.destroy();
      storyline.destroy();
      startgamebutton.destroy();

      background = gameintroduction.create(0,0, 'shuiliandong'); background.scale.setTo(1.2343,1.1361);
 
     setTimeout(function(){  

        jiaye = gameintroduction.create(850,170,'jiaye'); jiaye.scale.setTo(1.207,0.829);

       dialoguebackground = gameintroduction.create(0,581,'dialogue');
       dialoguebackground.inputEnabled = true;    
       dialoguebackground.events.onInputDown.add(huaguoshanlistener,this);    
       goon = gameintroduction.create(1000,722,'goon'); goon.scale.setTo(0.8,0.8);
      
        nametext = game.add.text(290, 593, "迦叶:", { font: "28px bold", fill: '#DCE86D'});
        
         gameintroduction.add(nametext);
         text = game.add.text(310, 640, "     斗战胜佛可在？", { font: "24px bold", fill: '#F9FAF5'});

         gameintroduction.add(text);
     }, 1000);  


    }
 }

function huaguoshanlistener(){
  if(count <= dialogue['huaguoshanname'].length-1&&jiaye!=undefined){
    jiaye.destroy(); jiaye = undefined;
    douzhanshengfo = gameintroduction.create(64,129,'douzhanshengfo'); douzhanshengfo.scale.setTo(0.77,0.77);
    nametext.text = dialogue.huaguoshanname[count];
    text.text = dialogue.huaguoshan[count];
    count++;  
 }

  else if(count <= dialogue['huaguoshanname'].length-1&&douzhanshengfo!=undefined){
    douzhanshengfo.destroy(); douzhanshengfo = undefined;  
    jiaye = gameintroduction.create(850,170,'jiaye'); jiaye.scale.setTo(1.207,0.829); 
    nametext.text = dialogue.huaguoshanname[count];
    text.text = dialogue.huaguoshan[count];
    count++;
 }

  else if(count == dialogue['huaguoshanname'].length){
    bgm.loop = false; bgm.stop(); bgm = undefined;
    biubiu(); count = 0;
    gameintroduction.destroy();    gameintroduction = undefined;
    setTimeout(function(){
      dark = game.add.group();
      nantianmen = dark.create(0,0,'nantianmen'); nantianmen.scale.setTo(1.2343, 1.7904); 
      nantianmentext = game.add.text(946, 41, "Entering the Heaven...", { font: "35px bold", fill: '#DCE86D'});dark.add(nantianmentext);
      setTimeout(function(){nantianmen.destroy(); nantianmentext.destroy();
         bgm = game.add.audio('bossBgm'); bgm.loop = true;bgm.play();    
         text = game.add.text(200, 220, "剧烈地摇晃！ \n\n感受到被一股无可抵挡的力量包围!", { font: "37px bold", fill: '#CF4255'}); dark.add(text);
          goon = dark.create(892,652,'goon'); goon.scale.setTo(1,1); 
          goon.inputEnabled = true;    
          goon.events.onInputDown.add(shakelistener,this); }, 2000); 
          }, 1000);   

 
  //    table.player.animationone =0;  
   // refreshmap();
  }

}

function shakelistener(){
  if(count <= dialogue['darkshake'].length-1){
    text.text = dialogue.darkshake[count];
    count++;
  }
  
  else if(count == dialogue['darkshake'].length){
    dark.destroy(); dark = undefined;
    count = 0; table.player.animationone =0;   
    refreshmap(); 
   //  help();

   }  
}

function gameover(){
        lastword = game.add.image(0,0,'veryfirst');
        nametext = game.add.text(394, 224, 'Game Over', { font: "120px bold", fill: '#C22D40'});
}


function render () {

  game.debug.inputInfo(32, 32);
}


var storyInfo = { 
                                 0: { "place": "Fire Qi Palace", "image" : "infoqilin", "info": "Get red calabash to feed Fire Qi\n and he will go away."},
                                 1: {"place": "Snake Little green", "image": "infosnake", "info": "Little green can help you reduce the \nseal from the five elements."},
                                 2: { "place": "      Purple", "image" : "infoxiaozi", "info": "Fairy wanted to kill you."},
                                 3: {"place": "God of longevity", "image": "infoshouxin", "info": "Use your health to trade with god of \nlongevity"}
                           }





var dialogue = 
   {   
   redanimal: [  
   "     哈哈，小麒麟，你莫要慌。我且问你，天宫为何有如此封印？",
   "     哼，你这猴子来戏弄我，此间何来封印？",  "     难不成你感觉不到？",
   "     本来就没有，我如何感觉得到", "     那你走开些，俺老孙去找玉帝问个究竟。",
   "     不可。此地乃我镇守，任何人不得出入。", "     现在我的力量被封，不可与其硬拼。",
   "     你既为瑞兽，该看出我也为天地本源所化的灵明石猴，大家同根同\n\n源，让我过去罢",
   "     哼，话虽如此，但这么弱的天地之力，却是我第一次见到，放你走\n\n岂不太没面子",
   "     真是龙游浅水遭虾戏，虎落平阳被狗欺。",
   "     看在你我同源的份上，要不这样吧，你去别处寻个用红色葫芦装的\n\n五粮液来给我，我且放你过去", 
   "     没想到麒麟也是酒鬼，好，那我便帮你去寻","等等，天宫各处要道除了有我麒麟镇守以外，还有八卦门，你\n\n没有钥匙可去不了",
   "     钥匙？俺老孙变个苍蝇就能飞进去", "     哼，那这八卦门也能像拍死苍蝇一样拍死你，卦像借周天\n\n之力，连我都无法硬闯，更别说是你",
   "     那我应当如何？","     我恰巧有两把离火密钥，就给你罢，用它们来开启火门即可。",
   "     我明白了"," 好了，你快去把酒寻来，我还在此处等你",""],
   redanimalname: ['悟空:','火麒麟:','悟空:','火麒麟:','悟空:','火麒麟:','悟空心道:','悟空:','火麒麟:',
   '悟空心道:','火麒麟:','悟空:','火麒麟:','悟空:','火麒麟:','悟空:','火麒麟:','悟空:','火麒麟:',''],
   redanimal1:[
   "     让我尝尝，嗯~是它是它，你既将酒送到，我这就让你过去吧", 
   "     但我还有个问题要问你",
   "     嗯？你说便是", 
   "     这宫中怎么到处都有仙气凝结而成的实体，这般阻挠我",
   "     它们都是守卫九重天的灵体，你最好少去招惹，有些灵体甚至有\n\n另我都感到压迫的力量",
   "     守卫九重天的灵体？还有这火麒麟，天宫看来必有大事",
   "     原来如此，俺老孙自会小心行事",""],
    redanimalname1: ['火麒麟:','悟空:','火麒麟:','悟空:','火麒麟:','悟空心道:','悟空:',''],
   huaguoshan:[
   "     找俺老孙干嘛？","     阿弥陀佛，佛祖料到武曌之后，中华名族将有大劫，是以\n派我寻你渡劫。",
   "     嗯？什么劫？怎儿个渡法？","     当今世间阴气过盛，大道不正。需有一人到九重天斗牛\n宫，取得易之本源--乾坤经，并教授给人间君王，扶正天地\n之气，方可解救民族国运。",
   "     笑话，民族国运，与俺老孙何干。是谓天地不仁，视万\n物为刍狗，要阴要阳，随它去好了",
   "     胜佛此言正为道家之想，是以其袖手旁观。而现在汝已\n入佛门，自当以济世救人，普渡苍生为任",
   "     哼，去天宫拿本书，比喝汤还简单，你为何不自己去","  胜佛不知，那乾坤经乃道家至宝，迦叶自然不可去取。",
   "     你别忘了，我也是佛门弟子", "但胜佛本散仙出身，与天宫又颇有渊源，是以此行再合适不过。",
      "     好，那看在佛祖面子上，俺老孙就去跑一次腿，我去去便回。（飞起）","  默默：阿弥陀佛，若将容易得，便作等闲看。孙悟空，\n你可小心了。（意味深长的微笑）"],
     huaguoshanname:["悟空:", "迦叶:", "悟空:", "迦叶:","悟空:", "迦叶:","悟空:", "迦叶:","悟空:", "迦叶:","悟空:", "迦叶:"],
      darkshake:["     悟空：怎么回事！","     悟空：五行封印！哼！我可从没忘掉这感觉。",
        "     悟空：发生了什么，天宫怎会布置下结界？难不成\n\n是想对付我？","     悟空：不好，我的力量正在迅速减弱",
        "     悟空：先去问问前面那只麒麟，小心行事吧"],
        fairy:["     既有美酒，但喝无妨（举杯而饮）","     别人都叫我紫儿，因为我喜欢紫色的衣裳","     可这颜色太艳，瞧得我头疼",
        "     你若是不喜欢，那我便换一件好了…", "     瞧现在如何？" ,"     有趣有趣 ，但这红色又令我心生烦躁", 
        "     如此…", "     现在又如何？","     这颜色又未免太冷",
        "     太冷...","     那现在呢？", "     你实在应该叫花儿，只有花会有这么多颜色，不过只有土狗才喜欢\n\n金色",
        "     你真挑剔，但现在…","     蓝色为水，你为灵石所化，水土而融，你不能不喜欢了","     我只对成熟的女人感兴趣，你怎么看都还是个小丫头",
        "     （脱下衣服）","     ………………","     你现在该发现我是个成熟的女人了",
        "     我发现了", "     你喜欢吗", "     我喜欢",
        "     你既然喜欢，为什么还不快点过来","     你在成了佛的人面前脱得再怎么光，他都不会动心的","     你真的没有动心？",
        "     眼不视色，耳不听声，鼻不嗅香，舌不尝味，身不知寒暑，意不存\n\n妄想，如何动心？","     天地育你为灵，而不为佛。既为灵，自该顺应天道。且玄化初辟，铸男\n\n女之两体，范阴阳之二仪。你若不探交接之奥秘，如何登道法之巅峰？","     （她说的好像很有道理，我…...",
        "     你莫再诡诈欺心诱我，我早已看穿一切","     一切？....","     蟠桃园怎会如此冷清，只有你一人？你在此地候我多时，只为让我喝下融有\n\n麒麟血的酒，以使我神智错乱中你诡计，却不知我根本没将酒咽下",
        "     你.....", "     哼，莫要多话了，我劝你还是把衣服穿起来罢", "     孙悟空，今日你必葬身此处，来人!", 
        "     哈哈，既要战，那便战！"],
         fairyname:[
        "悟空:", "紫儿:","悟空:","紫儿:","紫儿:","悟空:","紫儿:","紫儿:","悟空:","紫儿:","紫儿:",
        "悟空:","紫儿:","紫儿:","悟空:","紫儿:","悟空:","紫儿:","悟空:","紫儿:","悟空:","紫儿:",
        "悟空:","紫儿:","悟空:","紫儿:","悟空:","悟空:","紫儿:","悟空:","紫儿:","悟空:","紫儿:","悟空:"],
       shouxin:[
       "     你这老头怎么疯疯癫癫，我到了这四重天，才碰到个熟人\n\n，谁知竟也似个神经病",
       "     哎哟，原来是大圣来了，可此处已无碧藕水桃，也没交梨\n\n火枣，招待不周，切莫责怪小仙", "     老头你唧唧歪歪些个什么，我受佛祖之托而来，要借那乾\n\n坤经一用，可不是来与你叙旧",
       "     大圣不与我叙旧，但也要听小仙两句话", "     什么话?",
       "     天宫已有巨变，善亦为恶恶为善，大圣务必小心", "     这我早就看出来",
       "     如此最好，小仙可为大圣敬绵薄之力。","     如何？",
       "     我参悟生命造化，可用生命力提取八卦密钥", "     那开始交易吧"],
       shouxinname:["悟空:",'寿星:',"悟空:",'寿星:',"悟空:",'寿星:',"悟空:",'寿星:',"悟空:",'寿星:',"悟空:"],
       snake:[
       "     你是谁？在这里干什么？", "     我只是个蛇精，感到这里灵气格外充沛，才冒险来此地\n\n修炼",
       "     天宫之中灵气自然充沛，你胆子挺肥，敢来此处修炼","     因为我盤踞二重天已有数月，也没有神仙来驱逐，那些\n\n灵体似乎没有自己的思想，只要不去招惹它，它也不会来进攻我",
       "     心道：的确奇怪，天宫虽不热闹，但也没见过有现在般\n\n冷清", "     你可曾感到封印的力量？",
       "     当然，此间有强大的封印之力，不过我已在无意中找到\n\n了破解封印的办法", "     哦？",
       "     你若能用玉液琼浆给我，我便尝试为你减轻封印的力量", "如此，那边开始交易吧"

       ],
       snakename:["悟空:","灵蛇:","悟空:","灵蛇:","悟空:","悟空:","灵蛇:","悟空:","灵蛇:","悟空:"]
}

var englishdialogue = 
   {   
   redanimal: [  
   "     Calm down, Qi. I'm wondering why is seal here？","     Where is the seal ? ", 
   "     Don't you feel it？", "     No, there is no any seal. ", 
   "     All right, I will ask others. So let me go.",  "     No one can pass here. Unless you can find the liquor in the red \n\ncalabash to me. ", 
   "     No problem, where is the red calabash? ","     You can search it in the heaven. I have two yellow keys to you, \n\nyou can use them to open yellow doors. ",
   "     Sounds good.","     Ok, find the liquor. I am waiting for you here. "
   ,""],
   redanimalname: ['Kong:','Fire Qi:','Kong:','Fire Qi:','Kong:','Fire Qi:','Kong:','Fire Qi:','Kong:','Fire Qi:',''],
   redanimal1:[
   "     Let me taste it. En..It is. So you can go now.", "     But why there are so many monsters stand in the way?",
   "     They are all windwizards which protect the heaven.", "     I see.",
   ""],
    redanimalname1: ['Fire Qi:','Kong:','Fire Qi:','Kong:',''],
   huaguoshan:[
   "     Why are you coming here?","     Amitābha，Gautama Buddha prediected Empress Wu Zetian would bring \n\nadversity to people. So he told me to find you to save the people.",
   "     How to save ? ","     You should go to the heaven and get the I Ching. It can recover the vital breath in the \n\nworld",
   "     All right, it couldn't be easier. (Fly away..)", "  Really?"],
     huaguoshanname:["Kong:", "Jia Ye:", "Kong:", "Jia Ye:","Kong:", "Jia Ye:"],
      darkshake:["     Kong:\n\nWhat's the matter！","     Kong:\n\nThis is the power of seal. ",
        "     Kong:\n\nMy strength is reducing now...","     Kong:\n\nLet me ask the red animal there, I should be careful"],
         fairy:["     Grand.","     My name is purple. Caz I like this color.","     I hate the color.",
            "    ..Wait a moment", "     Do you feel better now?" ,"     Intersting. But I still don't like red.", 
            "     ..So", "     How about now？","     This color is too cold.",
            "     Cold...","     Now？", "     Your name should be flower，caz only flower has so many colors，but only bumpkin\n\n likegolden",
            "     You are so nitpick. But now..","     Blue is water, you came from stone. You will not dislike.","     I only be interested in mature women, but you still look like a litter gril",
            "     （Take off）","     ………………","     Now you have known I'm a mature girl",
            "     I see", "     Do you like?", "     I like",
            "     Why don't you come?","     Caz I'm Buddha. I will never be attracted. ","     Never？",
            "     My eyes see the colors,  but they are only colors.","     World gave your life, doesn't want to you be a Buddha.","     （What she said is reasonable, So…...",
            "     Don't keep cheating me.","     Cheating?","     You gave me the poisonous wine. But I didn't drink it",
            "     You.....", "     Stop talking.", "     I'll kill you!", 
            "     Come on！"],
         fairyname:["Wokong:", "Purple:","Wokong:", "Purple:","Purple:","Wokong:", "Purple:","Purple:","Wokong:", "Purple:","Purple:",
                                 "Wokong:", "Purple:","Purple:","Wokong:", "Purple:","Wokong:", "Purple:","Wokong:","Purple:","Wokong:","Purple:",
                                 "Wokong:","Purple:","Wokong:","Purple:","Wokong:","Wokong:","Purple:","Wokong:","Purple:","Wokong:","Purple:","Wokong:"],
       shouxin:[
       "     Bullshit! You stupid geezer.","     A Ha，Great Sage! I never assume you will come. But heaven is \n\ndangerous know.", 
       "     I did know.", "     You must be careful, and I can do a little to help you.",
       "     So?", "     Give me your health, and I can make them into keys.",
       "     Nice. Let's trade."],
       shouxinname:["Kong:",'God of longevity:',"Kong:",'God of longevity:',"Kong:",'God of longevity:',"Kong:"],
       snake:[
       "     Who are you?", "     I am a snake, I feel here is full of energy so come here to make pills \n\nof immortality.",
       "     Of course heaven is full of energy. But you are relly audacious.","     Because I have been here for several months, no other immortal \n\ncame.",
       "     think：It's strange. Heaven has never been such deserted.", "     Have you ever felt the power of seal?",
       "     Sure, but I have find the method to reduce the seal. ", "     Are you kidding me ?",
       "     If you can give me your nectar, I will help you.", "Great, let's trade."

       ],
       snakename:["Kong:","Xiao Qing:","Kong:","Xiao Qing:","Kong:","Kong:","Xiao Qing:","Kong:","Xiao Qing:","Kong:"]
   }
