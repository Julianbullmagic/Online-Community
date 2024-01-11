import  {Scene} from "phaser";
import Phaser from "phaser"
import { io } from 'socket.io-client';


const URL = process.env.NODE_ENV === 'production' ?'https://onlinecommunity.onrender.com' : 'http://localhost:5000';
console.log(URL,"connection url")
const socket = io(URL);

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

// if(this.player.sword){
//   this.player.anims.play('cuttingtreebrownhairback',10)
// }
// if(this.player.fishingrod){
//   this.player.anims.play('cuttingtreebrownhairback',10)
// }
// if(this.player.pickaxe){
//   this.player.anims.play('cuttingtreebrownhairback',10)
// }
// if(this.player.shovel){
//   this.player.anims.play('cuttingtreebrownhairback',10)
// }

const animations = {
    'guy': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703638847/idle_front_wbb8vs.png",
    'idlewithshovelbrownhairfront':"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703931071/digging_front_dgdyx5.png",
    'idlewithshovelbrownhairback':"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703931130/idle_with_shovel_back_ihvxnz.png",
    'diggingbrownhairfront':"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703987501/digging_front_dgdyx5.png",
    'diggingbrownhairback':"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703987465/digging_back_gselrt.png",
    'attackbrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651707/attack_01_back_yetngq.png",
    'attackbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651651/attack_01_front_ybvmrv.png",
    'catchingthefishbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651775/catching_the_fish_front_zqraqm.png",
    'cuttingtreebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651795/cutting_tree_front_rafvgm.png",
    'cuttingtreebrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651780/cutting_tree_back_zc8j6s.png",
    // 'deathbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651800/death_front_fbijj7.png",
    // 'deathbrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651798/death_back_vzrtla.png",
    'fishbitthelinebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651826/fish_bit_the_line_front_ivoqvr.png",
    'idlebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703638847/idle_front_wbb8vs.png",
    'idlebrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651830/idle_back_tlwe07.png",
    'throwingfishingrodbrownhairfront':"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651912/throwing_fishing_rod_front_ritizd.png",
    'idlefishingbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651832/idle_fishing_front_aupnm2.png",
    // 'idlewithaxebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651845/idle_whit_axe_front_pvew9x.png",
    // 'idlewithaxebrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651841/idle_whit_axe_back_evr7us.png",
    // 'idlewithfishingrodbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651848/idle_whit_fishing_rod_front_yamiem.png",
    // 'idlewithpickaxebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651856/idle_whit_pickaxe_front_rpbq1s.png",
    // 'idlewithpickaxebrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651853/idle_whit_pickaxe_back_p2pctb.png",
    // 'idlewithswordbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651865/idle_whit_sword_front_jo36oj.png",
    // 'idlewithswordbrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651860/idle_whit_sword_back_btnp8f.png",
    // 'ladderclimbbrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651867/ladder_climb_n3oblo.png",
    'miningbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651875/mining_front_buuvra.png",
    'miningbrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651871/mining_back_jh9ett.png",
    'runbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651882/run_front_xahweo.png",
    'runbrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651879/run_back_hqtln5.png",
    // 'runwithfishingrodbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651894/run_whit_fishing_rod_front_cgzcfn.png",
    // 'runwithaxebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651889/run_whit_axe_front_zjj5gy.png",
    // 'runwithaxebrownhairback':"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651886/run_whit_axe_back_xgzri1.png",
    // 'runwithpickaxebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651900/run_whit_pickaxe_front_xdz2ie.png",
    // 'runwithpickaxebrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651898/run_whit_pickaxe_back_ej4u77.png",
    // 'runwithswordbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651907/run_whit_sword_front_xq86b4.png",
    // 'runwithswordbrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651904/run_whit_sword_back_rhfdwu.png",
    'strugglingwiththefishbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651910/struggling_whit_the_fish_front_uhh8oa.png",
    'catchingfishbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651775/catching_the_fish_front_zqraqm.png",
}


export default class MainScene extends Scene {
  constructor() {
    super('TestScene');
    this.playernames=[]
    this.players=[]
    this.rockids=[]
    this.rocks=[]
    this.houseids=[]
    this.houses=[]
    this.holes=[]
    this.holeids=[]
    this.player={}
    this.treeids=[]
    this.flowerids=[]
    this.flowers=[]
    this.wheatids=[]
    this.wheat=[]
    this.trees=[]
    this.cowids=[]
    this.cows=[]
    this.chickenids=[]
    this.chickens=[]
    this.bearids=[]
    this.bears=[]
    this.spiderids=[]
    this.spiders=[]
    this.dragonids=[]
    this.dragons=[]
    this.collectiveInventory={}
    this.collectiveInventoryCopy={}
    this.positiontimer=0
    this.incr=0
    this.hitting=""
    this.fishing=false
    this.hitbearflag=false
    this.hitchickenflag=false
    this.hitspiderflag=false
    this.hitdragonflag=false
    this.hitcowflag=false
    this.hittreeflag=false
    this.hitrockflag=false
    this.hithouseflag=false
    this.hitwheatflag=false
    this.hitflowerflag=false
    this.messagecountdown=0
    this.waterlayer={}
    this.timer=0
    this.framecounter=0
    this.message=""
    this.sendstate=this.sendstate.bind(this)
  }

  sendstate(x,y,id,moving,direction){
    let playerdata = {
      "x": Math.round(x),
      "y": Math.round(y),
      "id":id,
      // "moving":moving,
      // "direction":direction
    }
    socket.emit('returning state', JSON.stringify(playerdata))
  }

 isPlayerNearWater(player, waterLayer, proximity) {
      let playerX = player.x
      let playerY = player.y

      let left = playerX - proximity
      let right = playerX + proximity
      let top = playerY - proximity*1.5
      let bottom = playerY + proximity*1.5

      let directions = []

      if (waterLayer.getTileAtWorldXY(left, playerY)) {
          directions.push('left')
      }

      if (waterLayer.getTileAtWorldXY(right, playerY)) {
          directions.push('right')
      }

      if (waterLayer.getTileAtWorldXY(playerX, top)) {
          directions.push('up')
      }

      if (waterLayer.getTileAtWorldXY(playerX, bottom)) {
          directions.push('down')
      }
      // if(directions.length>0){
      //   console.log(directions)
      // }
      return directions
  }

  preload() {
    for (const [animationName, spritesheet] of Object.entries(animations)) {
    if(animationName.includes("fish")){
      this.load.spritesheet(animationName, animations[`${animationName}`], { frameWidth: 64, frameHeight: 64 });
    }else{
      this.load.spritesheet(animationName, animations[`${animationName}`], { frameWidth: 48, frameHeight: 32 });
    }
}
    this.load.tilemapTiledJSON('map', 'https://res.cloudinary.com/dfksh5mnb/raw/upload/v1704715185/MMORPGWORLD_zjk670.json')
    this.load.image('map image', 'https://res.cloudinary.com/dfksh5mnb/image/upload/v1704697572/Animated_water_tiles_eiybkw.png');
    this.load.spritesheet('cow',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704328238/cows_ywbkba.png",{frameWidth:48,frameHeight:48})
    this.load.spritesheet('chicken',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704328237/chicken_wxeqws.png",{frameWidth:48,frameHeight:48})
    this.load.spritesheet('bear',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704326973/AsSFtpV_cckgyk.png",{frameWidth:48,frameHeight:48})
    this.load.spritesheet('spider',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704494955/Spider1_sgq2xs.png",{frameWidth:52,frameHeight:50})
    this.load.spritesheet('dragon',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704534878/flying_dragon-red_tt6y85.png",{frameWidth:192,frameHeight:161})
    this.load.spritesheet('rock breaking segment 3 frame 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703885197/rock2layer3breaking3_kp97tt.png",{frameWidth:180,frameHeight:194})
    this.load.spritesheet('rock breaking segment 3 frame 1',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703885197/rock2layer3breaking2_x7e8c4.png",{frameWidth:180,frameHeight:194})
    this.load.spritesheet('rock breaking segment 2 frame 1',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703885197/rock2layer2breaking1_ikczma.png",{frameWidth:180,frameHeight:194})
    this.load.spritesheet('rock breaking segment 2 frame 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703885197/rock2layer2breaking3_tkkhbr.png",{frameWidth:180,frameHeight:194})
    this.load.spritesheet('rock breaking segment 1 frame 1',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703885196/rock2layer1breaking2_yo1di5.png",{frameWidth:180,frameHeight:194})
    this.load.spritesheet('rock breaking segment 1 frame 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703885196/rock2layer1breaking3_b4oi2x.png",{frameWidth:180,frameHeight:194})
    this.load.spritesheet('wheat top',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703873336/wheetstalks2_l81918.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('wheat 5',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703806411/wheat_fifthth_layer_ulfo1y.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('wheat 4',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703806411/wheat_fourth_layer_rz7xp2.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('wheat 3',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703806411/wheat_third_layer_wxk92a.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('wheat 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703806412/wheat_second_layer_pc8oza.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('wheat 1',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703806412/wheat_first_layer_ntrszx.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('rock 2 layer 1',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704707909/rock2layer1_ctnf0j_snijmx.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('rock 2 layer 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704707909/rock2layer2_mnteia_phx3uh.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('rock 2 layer 3',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704707908/rock2layer3_dhlgvq_oievwy.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('rock 2 layer 1 top',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703802635/rock2layer1_fz1vxa.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('rock 2 layer 2 top',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703802818/rock2layer2_mnteia.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('rock 2 layer 3 top',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703802818/rock2layer3_dhlgvq.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('grass sprite',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705008581/flowerstems_atig5s.png",{frameWidth:100,frameHeight:100})
    // this.load.spritesheet('grass sprite 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703765960/grasssprite2_fokcrk.png",{frameWidth:100,frameHeight:100})
    // this.load.spritesheet('grass sprite 3',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703765959/grasssprite3_b7ew6r.png",{frameWidth:100,frameHeight:100})
    // this.load.spritesheet('grass sprite 4',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703765959/grassspritetop_peczej.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('yellow flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705008581/flowersyellow_kxhoar.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('purple flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705010125/flowerspurple_xie2sr.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('red flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705010126/flowersred_trpt5n.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('white flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705008581/flowerswhite_dzampv.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('medicinal herbs leaves',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705011615/medicinalherbsleaves_kswvbe.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('medicinal herbs leaves 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705011615/medicinalherbsleaves2_jwhzn7.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('wheat base',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703758128/wheetstalks_fqloqr.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('wheat seeds',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703758122/wheetstalks2_r5ws4c.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('tree segment',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703669885/tree_segment_xgluqh.png",{frameWidth:94,frameHeight:80})
    this.load.spritesheet('orange tree segment',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704108740/orange_tree_segment_eqytmu.png",{frameWidth:94,frameHeight:80})
    this.load.spritesheet('apple tree segment',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704108740/apple_tree_segment_mjic8m.png",{frameWidth:94,frameHeight:80})
    this.load.spritesheet('bannana tree segment 1',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704109612/bannana_tree_layer_1_hbqevy.png",{frameWidth:60,frameHeight:59})
    this.load.spritesheet('bannana tree segment 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704109579/bannana_tree_layer_2_wlvupt.png",{frameWidth:64,frameHeight:61})
    this.load.spritesheet('bannana tree segment 3',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1704109579/bannana_tree_layer_3_xh2tpu.png",{frameWidth:64,frameHeight:61})
    this.load.spritesheet('rock',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703652883/rock_opfhgc.png",{frameWidth:180,frameHeight:194})
    this.load.spritesheet('tree',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703652888/tree_n6kyuy.png",{frameWidth:96,frameHeight:250})
    this.load.spritesheet('house',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703652895/house_eds3ey.png",{frameWidth:150,frameHeight:150})
    this.load.image('soil',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1705010786/soil_zcf3wi.png")
    this.load.image("grass",'https://res.cloudinary.com/dfksh5mnb/image/upload/v1703637696/grass_caru0u.png')
    this.load.scenePlugin('AnimatedTiles', 'https://raw.githubusercontent.com/nkholski/phaser-animated-tiles/master/dist/AnimatedTiles.js', 'animatedTiles', 'animatedTiles');

    this.load.audio('tree falling', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704003187/Voicy_Tree_Falling_Down_Fast_lfajlk.mp3')
    this.load.audio('rock smash', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062484/rock-smash_xa3zxn.mp3')
    this.load.audio('swoosh', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062484/clean-fast-swooshaiff-14784_uqjep5.mp3')
    this.load.audio('digging', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062485/420876__inspectorj__digging-ice-hammer-c_dv6fmq.wav')
    this.load.audio('pickaxe hits rock', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062484/638696__captainyulef__pickaxe_edjpig.wav')
    this.load.audio('axe hits tree', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704542384/audiomass-output_1_u1s6wt.mp3')
    this.load.audio('chicken screaming', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704534475/413823__henlord__chicken-scream-soft_zxa6im.wav')
    this.load.audio('dragon roar', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704534470/713920__scpsea__t-rex-dragon-roar_jeqwwu.wav')
    this.load.audio('bear roar', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704534470/49127__aesqe__monster_growl_01_dc7l5i.wav')
    this.load.audio('spider roar', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704534470/672712__kongg__spider-attack-2_gdpeny.mp3')
    this.load.audio('cow mooing', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704537479/57791__reinsamba__1192_cow_close_t8fyrb.wav')
  }

  destroyObject(object) {
    let toaddtoinventory=""
    this.messagecountdown=5
    if(object.name=="tree"){
      toaddtoinventory="4-wood,4-pinecones"
      this.message="You found 4 wood and 4 pinecones"
    }
    if(object.name=="apple tree"){
      toaddtoinventory="4-wood,10-apple"
      this.message="You found 4 wood and 10 apples"
    }
    if(object.name=="orange tree"){
      toaddtoinventory="4-wood,10-orange"
      this.message="You found 4 wood and 10 oranges"
    }
    if(object.name=="wheat"){
      toaddtoinventory="4-wheat"
      this.message="You found 4 wheat"
    }
    if(object.name=="flower"){
      toaddtoinventory="4-flowerseeds,3-flowers"
      this.message="You found 4 flowerseeds and some flowers"
    }
    if(object.name=="house"){
      toaddtoinventory="40-wood"
      this.message="You found 40 wood"
    }
    if(object.name=="cow"){
      toaddtoinventory="5-rawbeef"
      this.message="You found 5 raw beef"
    }
    if(object.name=="chicken"){
      toaddtoinventory="3-rawchicken"
      this.message="You found 3 raw chicken"
    }
    if(object.name=="hole"){
      let rand=Math.random()
      if(rand<0.5){
        toaddtoinventory="3-clay"
        this.message="You found 3 clay"
      }
      if(rand>=0.7&&rand<0.9){
        toaddtoinventory="3-clay,3-copperore"
        this.message="You found 3 copper ore and 3 clay"
      }
      if(rand>=0.9&&rand<1.1){
        toaddtoinventory="3-clay,3-ironore"
        this.message="You found 3 iron ore and 3 clay"
      }
    }
    if(object.name=="rock"){
      let rand=Math.random()
      if(rand<0.5){
        toaddtoinventory="3-stone"
        this.message="You found 3 stone"
      }
      if(rand>=0.5&&rand<0.8){
        toaddtoinventory="3-stone,3-copperore"
        this.message="You found 3 stone and 3 copper ore"
      }
      if(rand>=0.8&&rand<1.1){
        toaddtoinventory="3-stone,3-ironore"
        this.message="You found 3 stone and 3 iron ore"
      }
    }

    socket.emit('remove object', {id:object.id,toaddtoinventory:toaddtoinventory});
    if (this.trees.contains(object)) {
      this.trees.remove(object, true, true);
    } else if (this.holes.contains(object)) {
      this.holes.remove(object, true, true);
    }  else if (this.rocks.contains(object)) {
      this.rocks.remove(object, true, true);
    } else if (this.houses.contains(object)) {
      this.houses.remove(object, true, true);
    } else if (this.flowers.contains(object)) {
      this.flowers.remove(object, true, true);
    } else if (this.wheat.contains(object)) {
      this.wheat.remove(object, true, true);
    } else if (this.cows.contains(object)) {
      this.cows.remove(object, true, true);
    } else if (this.chickens.contains(object)) {
      this.chickens.remove(object, true, true);
    } else if (this.bears.contains(object)) {
      this.bears.remove(object, true, true);
    } else if (this.spiders.contains(object)) {
      this.spiders.remove(object, true, true);
    } else if (this.dragons.contains(object)) {
        this.dragons.remove(object, true, true);
      } else {
      console.log("Object not found in any group");
    }
  }

  takeSeedsOrFruit(object){
    let toaddtoinventory=""
    this.messagecountdown=5
    console.log(object)
    if(!object.fruit&&object.name=="tree"){
      toaddtoinventory="4-pinecones"
      this.message="You found 4 pinecones"
    }
    if(object.fruit=="apple"){
      toaddtoinventory="10-apples"
      this.message="You found 10 apples"
    }
    if(object.fruit=="orange"){
      toaddtoinventory="10-oranges"
      this.message="You found 10 oranges"
    }
    if(object.name=="wheat"){
      toaddtoinventory="4-wheat"
      this.message="You found 4 wheat"
    }
    if(object.name=="flower"){
      toaddtoinventory="4-flowerseeds,3-flowers"
      this.message="You found 4 flowerseeds and some flowers"
    }
    console.log(toaddtoinventory)
    socket.emit('gather seeds or fruit', {id:object.id,toaddtoinventory:toaddtoinventory})
  }


  create(){
    const map = this.make.tilemap({ key: 'map' })
    const tileset = map.addTilesetImage('Animated water tiles',"map image")
    const grassLayer = map.createLayer('Grass', tileset, 0, 0).setScale(2)
    this.waterlayer = map.createLayer('Water', tileset, 0, 0).setScale(2)
    this.waterlayer.forEachTile(tile => {
      const x = tile.x * tile.width;
      const y = tile.y * tile.height;
            if (tile.index === -1) {
            const leftTile = this.waterlayer.getTileAt(x - 32, y);
            const rightTile = this.waterlayer.getTileAt(x + 32, y);
            const upTile = this.waterlayer.getTileAt(x, y - 32);
            const downTile = this.waterlayer.getTileAt(x, y + 32);
            if (leftTile && leftTile.index === -1) {
                this.waterlayer.putTileAt(-1, leftTile.x, leftTile.y);
            }
            if (rightTile && rightTile.index === -1) {
                this.waterlayer.putTileAt(-1, rightTile.x, rightTile.y);
            }
            if (upTile && upTile.index === -1) {
                this.waterlayer.putTileAt(-1, upTile.x, upTile.y);
            }
            if (downTile && downTile.index === -1) {
                this.waterlayer.putTileAt(-1, downTile.x, downTile.y);
            }
        } else {
            this.waterlayer.putTileAt(tile.index, x, y);
        }
    });
    this.waterlayer.setCollisionByExclusion([-1]);
    this.trees= this.add.group()
    this.rocks=this.add.group()
    this.houses=this.add.group()
    this.holes=this.add.group()
    this.flowers=this.add.group()
    this.wheat=this.add.group()
    this.cows= this.add.group()
    this.chickens=this.add.group()
    this.bears=this.add.group()
    this.spiders=this.add.group()
    this.dragons=this.add.group()
    let tempplayer=JSON.parse(sessionStorage.getItem("jwt"))
    tempplayer=tempplayer.user
    this.player=this.physics.add.sprite(100,100,'guy').setBounce(0).setBodySize(20, 25)
    this.player.body.setOffset(14,5)
    this.physics.add.existing(this.player);
    this.player.health=tempplayer.health
    this.player.tiredness=tempplayer.tiredness
    this.player.hunger=tempplayer.hunger
    this.player.uddirection="down"
    this.player.lrdirection="right"
    this.player.lastcursor=""
    this.player.fishing=false
    this.space=false
    this.player.doingaction=false
    this.player.touchingwater=""
    this.player.axe=false
    this.player.hammer=true
    this.player.sword=false
    this.player.pickaxe=true
    this.player.fishingrod=false
    this.player.shovel=false
    this.player.hittingbear=false
    this.player.hittingspider=false
    this.player.hittingdragon=false
    let tool=localStorage.getItem("equipped tool")
    if(!tool){
      this.player.axe=false
      this.player.hammer=false
      this.player.sword=false
      this.player.pickaxe=false
      this.player.fishingrod=false
      this.player.shovel=false
    }
    if(tool=="axes"){
      this.player.axe=true
      this.player.hammer=false
      this.player.sword=false
      this.player.pickaxe=false
      this.player.fishingrod=false
      this.player.shovel=false
    }
    if(tool=="hammers"){
      this.player.axe=false
      this.player.hammer=true
      this.player.sword=false
      this.player.pickaxe=false
      this.player.fishingrod=false
      this.player.shovel=false
    }
    if(tool=="swords"){
      this.player.axe=false
      this.player.hammer=false
      this.player.sword=true
      this.player.pickaxe=false
      this.player.fishingrod=false
      this.player.shovel=false
    }
    if(tool=="pickaxes"){
      this.player.axe=false
      this.player.hammer=false
      this.player.sword=false
      this.player.pickaxe=true
      this.player.fishingrod=false
      this.player.shovel=false
    }
    if(tool=="fishingrods"){
      this.player.axe=false
      this.player.hammer=false
      this.player.sword=false
      this.player.pickaxe=false
      this.player.fishingrod=true
      this.player.shovel=false
    }
    if(tool=="spades"){
      this.player.axe=false
      this.player.hammer=false
      this.player.sword=false
      this.player.pickaxe=false
      this.player.fishingrod=false
      this.player.shovel=true
    }
    this.player.setScale(2);
    this.physics.add.collider(this.player, this.trees,collisionHandler)
    this.physics.add.collider(this.player,this.rocks,collisionHandler)
    this.physics.add.collider(this.player,this.houses,collisionHandler)
    this.physics.add.collider(this.player,this.flowers,collisionHandler)
    this.physics.add.collider(this.player,this.wheat,collisionHandler)
    this.physics.add.collider(this.player,this.cows,collisionHandler)
    this.physics.add.collider(this.player,this.bears,collisionHandler)
    this.physics.add.collider(this.player,this.chickens,collisionHandler)
    this.physics.add.collider(this.player,this.spiders,collisionHandler)
    this.physics.add.collider(this.player,this.dragons,collisionHandler)

    this.physics.add.collider(this.player,this.cows)
    this.physics.add.collider(this.player,this.bears,collisionWithBearHandler)
    this.physics.add.collider(this.player,this.chickens)
    this.physics.add.collider(this.player,this.spiders,collisionWithSpiderHandler)
    this.physics.add.collider(this.player,this.dragons,collisionWithDragonHandler)
    this.physics.add.collider(this.player,this.waterlayer,collisionWithWaterHandler)

    function collisionHandler(player,object){
      // console.log("collided",object)
    }

    function collisionWithWaterHandler(player,object){

    }

    function collisionWithBearHandler(player,object){
        player.hittingbear=true
    }
    function collisionWithSpiderHandler(player,object){
        player.hittingspider=true
    }
    function collisionWithDragonHandler(player,object){
        player.hittingdragon=true
    }

    this.input.keyboard.on('keydown-SPACE',spaceDown,this)
    this.input.keyboard.on('keyup-SPACE',spaceUp,this)
    this.treeFallingSound = this.sound.add('tree falling')
    this.rockSmashSound = this.sound.add('rock smash')
    this.swooshSound = this.sound.add('swoosh')
    this.diggingSound = this.sound.add('digging')
    this.pickAxeHitsSound = this.sound.add('pickaxe hits rock')
    this.axeHitsTreeSound = this.sound.add('axe hits tree')
    this.chickenscreaming = this.sound.add('chicken screaming')
    this.dragonroar = this.sound.add('dragon roar')
    this.bearroar = this.sound.add('bear roar')
    this.spiderroar = this.sound.add('spider roar')
    this.cowmooing = this.sound.add('cow mooing')

    function spaceDown(){
      if(!this.player.shovel&&!this.player.axe&&!this.player.pickaxe&&!this.player.sword&&this.player.hammer&&!this.player.fishingrod){

      }
      if(this.player.shovel){
        console.log("digging hole")
        let holex=0
        let holey=0
        if(this.player.lastcursor=="l"){
          holex=this.player.x-32
          holey=this.player.y
        }
        if(this.player.lastcursor=="r"){
          holex=this.player.x+32
          holey=this.player.y
        }
        if(this.player.lastcursor=="u"){
          holex=this.player.x
          holey=this.player.y-32
        }
        if(this.player.lastcursor=="d"){
          holex=this.player.x
          holey=this.player.y+32
        }
        if(this.player.lastcursor=="lu"){
          holex=this.player.x-32
          holey=this.player.y-32
        }
        if(this.player.lastcursor=="ld"){
          holex=this.player.x-32
          holey=this.player.y+32
        }
        if(this.player.lastcursor=="ru"){
          holex=this.player.x+32
          holey=this.player.y-32
        }
        if(this.player.lastcursor=="rd"){
          holex=this.player.x+32
          holey=this.player.y+32
        }
        console.log(this.player.lastcursor)
        socket.emit('hole dug', {"x":holex,"y":holey})
      }
      if(this.player.touchingwater=="left"&&this.player.fishingrod){
        this.player.fishing=true
        this.swooshSound.play({loop: false})
        this.player.anims.play('throwingfishingrodbrownhairfront', 10).on('animationcomplete', () => {
          this.player.anims.play('idlefishingbrownhairfront', 10)
              const delay = Math.floor(Math.random() * (20000 - 1000 + 1) + 1000)
              setTimeout(() => {
                this.player.anims.play('fishbitthelinebrownhairfront', 10).on('animationcomplete', () => {
                  this.player.anims.play('catchingfishbrownhairfront', 10).on('animationcomplete', () => {
                  socket.emit('remove object', {id:null,toaddtoinventory:"1-rawfish"})
                  this.messagecountdown=5
                  this.message="You caught 1 fish"
                  this.player.anims.play("idlebrownhairfront")
                })
              })
            }, delay)

        })
      }
      if(this.player.touchingwater=="right"&&this.player.fishingrod){
        this.player.fishing=true
        this.player.flipX=false
        this.swooshSound.play({loop: false})
        this.player.anims.play('throwingfishingrodbrownhairfront', 10).on('animationcomplete', () => {
          this.player.anims.play('idlefishingbrownhairfront', 10)
              const delay = Math.floor(Math.random() * (20000 - 1000 + 1) + 1000)
              setTimeout(() => {
                this.player.anims.play('fishbitthelinebrownhairfront', 10).on('animationcomplete', () => {
                  this.player.anims.play('catchingfishbrownhairfront', 10).on('animationcomplete', () => {
                  socket.emit('remove object', {id:null,toaddtoinventory:"1-rawfish"})
                  this.messagecountdown=5
                  this.message="You caught 1 fish"
                  this.player.anims.play("idlebrownhairfront")
                })
              })
            }, delay)
        })
      }
      if(this.hitting=="tree"){
            this.axeHitsTreeSound.play({loop: true})
      }
      if(this.hitting=="house"){
            this.axeHitsTreeSound.play({loop: true})
      }
      if(this.hitting=="rock"){
        this.pickAxeHitsSound.play({loop: true})
      }
      if(this.hitting=="chicken"){
        this.chickenscreaming.play({loop: true})
      }
      if(this.hitting=="cow"){
        this.cowmooing.play({loop: true})
      }
      if(this.hitting=="bear"){
        this.bearroar.play({loop: true})
      }
      if(this.hitting=="dragon"){
        this.dragonroar.play({loop: true})
      }
      if(this.hitting=="spider"){
        this.spiderroar.play({loop: true})
      }
      if(this.player.axe){
        this.swooshSound.play({loop: true})
      }
      if(this.player.sword){
        this.swooshSound.play({loop: true})
      }
      if(this.player.pickaxe){
        this.swooshSound.play({loop: true})
      }
      if(this.player.shovel){
        this.diggingSound.play({loop: true})
      }
    }
    function spaceUp(){
        this.player.fishing=false
        this.axeHitsTreeSound.stop()
        this.pickAxeHitsSound.stop()
        this.chickenscreaming.stop()
        this.cowmooing.stop()
        this.bearroar.stop()
        this.dragonroar.stop()
        this.spiderroar.stop()
        this.swooshSound.stop()
        this.diggingSound.stop()
        this.player.anims.stop('idlefishingbrownhairfront')
    }
    for (const [key, value] of Object.entries(animations)) {
        if(key=="throwingfishingrodbrownhairfront"){
          this.anims.create({
              key: key,
              frameRate: 10,
              frames: this.anims.generateFrameNumbers(key, { start: 0, end: 7 }),
              repeat: 0
          })
        }else if(key=="fishbitthelinebrownhairfront"){
                  this.anims.create({
                      key: key,
                      frameRate: 10,
                      frames: this.anims.generateFrameNumbers(key, { start: 0, end: 7 }),
                      repeat: 0
                  })
                }else if(key=="catchingfishbrownhairfront"){
                  this.anims.create({
                      key: key,
                      frameRate: 10,
                      frames: this.anims.generateFrameNumbers(key, { start: 0, end: 7 }),
                      repeat: 0
                  })
                }else{
          this.anims.create({
              key: key,
              frameRate: 10,
              frames: this.anims.generateFrameNumbers(key, { start: 0, end: 7 }),
              repeat: -1
          })
        }
    }
    this.anims.create({
        key: "cow walking up",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("cow", { start: 39, end: 41 }),
        repeat: -1
    })
    this.anims.create({
        key: "cow walking down",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("cow", { start: 3, end: 5 }),
        repeat: -1
    })
    this.anims.create({
        key: "cow walking left",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("cow", { start: 15, end: 17 }),
        repeat: -1
    })
    this.anims.create({
        key: "cow walking right",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("cow", { start: 27, end: 29 }),
        repeat: -1
    })
    this.anims.create({
        key: "chicken walking up",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("chicken", { start: 36, end: 38 }),
        repeat: -1
    })
    this.anims.create({
        key: "chicken walking down",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("chicken", { start: 0, end: 2 }),
        repeat: -1
    })
    this.anims.create({
        key: "chicken walking left",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("chicken", { start: 12, end: 14 }),
        repeat: -1
    })
    this.anims.create({
        key: "chicken walking right",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("chicken", { start: 24, end: 26 }),
        repeat: -1
    })
    this.anims.create({
        key: "spider walking up",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("spider", { start:9, end: 11 }),
        repeat: -1
    })
    this.anims.create({
        key: "spider walking down",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("spider", { start: 0, end: 2 }),
        repeat: -1
    })
    this.anims.create({
        key: "spider walking left",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("spider", { start: 3, end: 5 }),
        repeat: -1
    })
    this.anims.create({
        key: "spider walking right",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("spider", { start: 6, end: 8 }),
        repeat: -1
    })
    this.anims.create({
        key: "bear walking up",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("bear", { start:42, end: 44 }),
        repeat: -1
    })
    this.anims.create({
        key: "bear walking down",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("bear", { start: 6, end: 8 }),
        repeat: -1
    })
    this.anims.create({
        key: "bear walking left",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("bear", { start: 18, end: 20 }),
        repeat: -1
    })
    this.anims.create({
        key: "bear walking right",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("bear", { start: 30, end: 32 }),
        repeat: -1
    })
    this.anims.create({
        key: "dragon flying up",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("dragon", { start:0, end: 2 }),
        repeat: -1
    })
    this.anims.create({
        key: "dragon flying down",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("dragon", { start: 6, end: 8 }),
        repeat: -1
    })
    this.anims.create({
        key: "dragon flying left",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("dragon", { start: 9, end: 1 }),
        repeat: -1
    })
    this.anims.create({
        key: "dragon flying right",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("dragon", { start: 3, end: 5 }),
        repeat: -1
    })
    this.treeFallingSound = this.sound.add('tree falling')
    this.rockSmashSound = this.sound.add('rock smash')
    this.swooshSound = this.sound.add('swoosh')
    this.diggingSound = this.sound.add('digging')
    this.pickAxeHitsSound = this.sound.add('pickaxe hits rock')
    this.axeHitsTreeSound = this.sound.add('axe hits tree')
    this.chickenscreaming = this.sound.add('chicken screaming')
    this.dragonroar = this.sound.add('dragon roar')
    this.bearroar = this.sound.add('bear roar')
    this.spiderroar = this.sound.add('spider roar')
    this.cowmooing = this.sound.add('cow mooing')
    this.cameras.main.startFollow(this.player,true,1,1)
    this.cameras.main.setFollowOffset(0,-this.player.height)
    let name=localStorage.getItem("name")
    socket.emit('player joining', JSON.stringify({"name":name,"x":this.player.x,"y":this.player.y}))
    this.player.id=name

    socket.on('updateState',(data)=>{
      this.positiontimer=0
      let state=JSON.parse(data)
      this.collectiveInventory=state.collectiveInventory
      this.collectiveInventoryCopy=state.collectiveInventoryCopy
      const event = new CustomEvent('updateCollectiveInventory',{ detail:this.collectiveInventory});
      window.dispatchEvent(event);
      const eventy = new CustomEvent('updateCollectiveInventoryCopy',{ detail:this.collectiveInventoryCopy});
      window.dispatchEvent(eventy);
      let tempplayers=state.players
      let trees=state.trees
      let rocks=state.rocks
      let houses=state.houses
      let flowers=state.flowers
      let wheat=state.wheat
      let cows=state.cows
      let chickens=state.chickens
      let bears=state.bears
      let dragons=state.dragons
      let spiders=state.spiders
      let holes=state.holes
      let cowsingroup = this.cows.getChildren()
      for (let cow of cows){
        if (!this.cowids.includes(cow._id)){
          this.cowids.push(cow._id)
          let newcow=this.physics.add.sprite(cow.x,cow.y,'cow').setCircle(20).setScale(1.3).setVisible(true)
          newcow.name="cow"
          newcow.mode=cow.mode
          newcow.id=cow._id
          newcow.health=cow.health
          newcow.xdistlerp=cow.xdistlerp
          newcow.ydistlerp=cow.ydistlerp
          this.physics.world.enable(newcow);
          newcow.body.setImmovable(true);
          this.cows.add(newcow)
        }
        if(this.cowids.includes(cow._id)){
          let targetCow=cowsingroup.find(sprite => sprite.id === cow._id)
          targetCow.mode=cow.mode
          targetCow.x=cow.oldx
          targetCow.y=cow.oldy
          targetCow.xdistlerp=cow.xdistlerp
          targetCow.ydistlerp=cow.ydistlerp
        }
      }
      let chickensingroup = this.chickens.getChildren()
      for (let chicken of chickens){
        if (!this.chickenids.includes(chicken._id)){
          this.chickenids.push(chicken._id)
          let newchicken=this.physics.add.sprite(chicken.x,chicken.y,'chicken').setCircle(20).setScale(1.3).setVisible(true)
          newchicken.name="chicken"
          newchicken.mode=chicken.mode
          newchicken.id=chicken._id
          newchicken.health=chicken.health
          newchicken.xdistlerp=chicken.xdistlerp
          newchicken.ydistlerp=chicken.ydistlerp
          this.physics.world.enable(newchicken);
          newchicken.body.setImmovable(true);
          this.chickens.add(newchicken)
        }
        if(this.chickenids.includes(chicken._id)){
          let targetChicken=chickensingroup.find(sprite => sprite.id === chicken._id)
          targetChicken.mode=chicken.mode
          targetChicken.x=chicken.oldx
          targetChicken.y=chicken.oldy
          targetChicken.xdistlerp=chicken.xdistlerp
          targetChicken.ydistlerp=chicken.ydistlerp
        }
      }
      let bearsingroup = this.bears.getChildren()
      for (let bear of bears){
        if (!this.bearids.includes(bear._id)){
          this.bearids.push(bear._id)
          let newbear=this.physics.add.sprite(bear.x,bear.y,'bear').setCircle(20).setScale(1.3).setVisible(true)
          newbear.name="bear"
          newbear.mode=bear.mode
          newbear.id=bear._id
          newbear.health=bear.health
          newbear.xdistlerp=bear.xdistlerp
          newbear.ydistlerp=bear.ydistlerp
          this.physics.world.enable(newbear);
          newbear.body.setImmovable(true);
          this.bears.add(newbear)
        }
        if(this.bearids.includes(bear._id)){
          let targetbear=bearsingroup.find(sprite => sprite.id === bear._id)
          targetbear.mode=bear.mode
          targetbear.x=bear.oldx
          targetbear.y=bear.oldy
          targetbear.xdistlerp=bear.xdistlerp
          targetbear.ydistlerp=bear.ydistlerp
        }
      }
      let dragonsingroup = this.dragons.getChildren()
      for (let dragon of dragons){
        if (!this.dragonids.includes(dragon._id)){
          this.dragonids.push(dragon._id)
          let newdragon=this.physics.add.sprite(dragon.x,dragon.y,'dragon').setScale(1.3).setVisible(true)
          newdragon.name="dragon"
          newdragon.mode=dragon.mode
          newdragon.id=dragon._id
          newdragon.xdistlerp=dragon.xdistlerp
          newdragon.ydistlerp=dragon.ydistlerp
          newdragon.health=dragon.health
          this.physics.world.enable(newdragon);
          newdragon.body.setImmovable(true);
          this.dragons.add(newdragon)
        }
        if(this.dragonids.includes(dragon._id)){
          let targetDragon=dragonsingroup.find(sprite => sprite.id === dragon._id)
          targetDragon.mode=dragon.mode
          targetDragon.x=dragon.oldx
          targetDragon.y=dragon.oldy
          targetDragon.xdistlerp=dragon.xdistlerp
          targetDragon.ydistlerp=dragon.ydistlerp
        }
      }
      let spidersingroup = this.spiders.getChildren()
      for (let spider of spiders){
        if (!this.spiderids.includes(spider._id)){
          this.spiderids.push(spider._id)
          let newspider=this.physics.add.sprite(spider.x,spider.y,'spider').setCircle(20).setScale(1.3).setVisible(true)
          newspider.name="spider"
          newspider.mode=spider.mode
          newspider.id=spider._id
          newspider.xdistlerp=spider.xdistlerp
          newspider.ydistlerp=spider.ydistlerp
          newspider.health=spider.health
          this.physics.world.enable(newspider);
          newspider.body.setImmovable(true);
          this.spiders.add(newspider)
        }
        if(this.spiderids.includes(spider._id)){
          let targetSpider=spidersingroup.find(sprite => sprite.id === spider._id)
          targetSpider.mode=spider.mode
          targetSpider.x=spider.oldx
          targetSpider.y=spider.oldy
          targetSpider.xdistlerp=spider.xdistlerp
          targetSpider.ydistlerp=spider.ydistlerp
        }
      }
      for (let tree of trees){
        if (!this.treeids.includes(tree._id)){
          this.treeids.push(tree._id)
          let newtree=this.physics.add.staticSprite(tree.x,tree.y,'tree segment').setCircle(50).setScale(1.3).setVisible(false).setOffset(-10,-10)
          newtree.name="tree"
          newtree.fruit=tree.fruit
          newtree.falling=1
          newtree.rotator=tree.rotator
          newtree.health=tree.health
          newtree.hasseeds=tree.hasseeds
          newtree.countdowntoreplenish=tree.countdowntoreplenish
          newtree.id=tree._id
          this.trees.add(newtree)
        }
      }
      for (let hole of holes){
        if (!this.holeids.includes(hole._id)){
          this.holeids.push(hole._id)
          let newhole=this.physics.add.staticSprite(hole.x,hole.y,'soil').setCircle(20).setVisible(false)
          newhole.name="hole"
          newhole.id=hole._id
          this.holes.add(newhole)
        }
      }
      for (let rock of rocks){
        if (!this.rockids.includes(rock._id)){
          this.rockids.push(rock._id)
          let newrock=this.physics.add.staticSprite(rock.x,rock.y,'rock 1 layer 1').setCircle(60).setScale(0.4).setVisible(false).setOffset(-35,-35)
          newrock.type=rock.type
          newrock.name="rock"
          newrock.breaking=1
          newrock.health=rock.health
          newrock.alpha=1
          newrock.id=rock._id
          this.rocks.add(newrock)
        }
      }
      for (let house of houses){
        if (!this.houseids.includes(house._id)){
          this.houseids.push(house._id)
          let newhouse=this.physics.add.staticSprite(house.x,house.y,'house').setBodySize(200, 145).setVisible(false)
          newhouse.name="house"
          newhouse.health=house.health
          newhouse.id=house._id
          this.houses.add(newhouse)
        }
      }
      for (let flower of flowers){
        if (!this.flowerids.includes(flower._id)){
          this.flowerids.push(flower._id)
          let newflower=this.physics.add.staticSprite(flower.x,flower.y,'flower').setBodySize(50, 50).setVisible(false)
          newflower.colour=flower.colour
          newflower.name="flower"
          newflower.health=flower.health
          newflower.hasseeds=flower.hasseeds
          newflower.countdowntoreplenish=flower.countdowntoreplenish
          newflower.id=flower._id
          console.log(newflower.colour,"flower colour")
          this.flowers.add(newflower)
        }
      }
      for (let wheat of wheat){
        if (!this.wheatids.includes(wheat._id)){
          this.wheatids.push(wheat._id)
          let newwheat=this.physics.add.staticSprite(wheat.x,wheat.y,'wheat').setBodySize(60, 60).setVisible(false)
          newwheat.name="wheat"
          newwheat.health=wheat.health
          newwheat.hasseeds=wheat.hasseeds
          newwheat.countdowntoreplenish=wheat.countdowntoreplenish
          newwheat.id=wheat._id
          this.wheat.add(newwheat)
        }
      }
      // for (let player of tempplayers){
      //   if (player.id==this.player.id){
      //     continue
      //   }
      //   if (!this.playernames.includes(player['id'])){
      //     this.playernames.push(player['id'])
      //     let play=this.physics.add.sprite(player['x'],player['y'],'character')
      //     play.id=player.id
      //     this.players.push(play)
      //   }
      //   console.log(this.players)
      //   for (let play of this.players){
      //     console.log(play,player)
      //     if (play.id==player.id){
      //       play.direction=player.direction
      //       play.lastx=play.currentx
      //       play.lasty=play.currenty
      //       play.currentx=player.x
      //       play.currenty=player.y
      //       play.increx=play.currentx-play.lastx
      //       play.increx=play.increx/6
      //       play.increy=play.currenty-play.lasty
      //       play.increy=play.increy/6
      //     }
      //   }
      // }
    })
    this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });
    this.tempSprites = this.add.group();
    this.healthtext=this.add.text(10, 10, 'Health', {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#ffffff'
    });
    this.hungertext=this.add.text(10, 10, 'Hunger', {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#ffffff'
    });
    this.fatiguetext=this.add.text(10, 10, 'Fatigue', {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#ffffff'
    });
    this.graphics1 = this.add.graphics();
    this.graphics1.fillStyle(0xffffff, 1);
    this.healthbar=this.graphics1.fillRect(0, 0, 150, 20);
    this.graphics2 = this.add.graphics();
    this.graphics2.fillStyle(0xffffff, 1);
    this.fatiguebar=this.graphics2.fillRect(0, 0, 150, 20)
    this.graphics3 = this.add.graphics();
    this.graphics3.fillStyle(0xffffff, 1);
    this.hungerbar=this.graphics3.fillRect(0, 0, 150, 20)
    this.graphics21 = this.add.graphics();
    this.graphics21.fillStyle(0xFF0000, 1);
    this.healthbarvalue=this.graphics21.fillRect(0, 0, 150, 20);
    this.graphics22 = this.add.graphics();
    this.graphics22.fillStyle(0xFF0000, 1);
    this.fatiguebarvalue=this.graphics22.fillRect(0, 0, 150, 20)
    this.graphics23 = this.add.graphics();
    this.graphics23.fillStyle(0xFF0000, 1);
    this.hungerbarvalue=this.graphics23.fillRect(0, 0, 150, 20)
    this.messagetext=this.add.text(300, 10, this.message, {
          fontFamily: 'Arial',
          fontSize: 16,
          color: '#ffffff'
        })
        this.waterlayer.forEachTile(firstcallback,this)
        function firstcallback(tile){
          tile.originalindex=tile.index
        }

}

  update(time,delta){
    this.timer += delta
    while (this.timer > 100) {
     this.timer -= 100
     this.waterlayer.forEachTile(callback)
     let first=false
     function callback(tile,framecounter){
       if(tile.index==-1){
         return
       }
       if(!first){
         first=true
       }
      if((tile.index-tile.originalindex)>5){
        tile.index=tile.originalindex
        return
      }
       tile.index+=1
     }
 }
 let directions = this.isPlayerNearWater(this.player, this.waterlayer,32)
  this.player.touchingwater=""
 if (directions.length > 0) {
   if(directions.includes("left")){
     this.player.touchingwater="left"
   }
   if(directions.includes("right")){
     this.player.touchingwater="right"
   }
  }
    if(this.messagecountdown>=0){
      this.messagecountdown-=0.01
    }
    if(this.messagecountdown<=0){
      this.message=""
    }
    this.messagetext.setText(this.message, {
          fontFamily: 'Arial',
          fontSize: 16,
          color: '#ffffff'
        });
    this.messagetext.x= this.cameras.main.scrollX+this.game.scale.width/2
    this.messagetext.y= 10 + this.cameras.main.scrollY
    // this.positiontimer+=1
    // console.log(this.tempSprites)
    // for (let sprite of this.tempSprites.list){
    //   sprite.destroy()
    // }
    const cursors=this.input.keyboard.createCursorKeys()
    if(cursors.space.isDown){
      this.player.doingaction=true
    }
    if(this.player.tiredness>0){
      this.player.tiredness-=0.0005
    }
    if(this.player.hunger>0){
      this.player.hunger-=0.0005
    }
    if(this.player.tiredness<0){
      if(this.player.health>0.1){
        this.player.health-=0.0005
      }
    }
    if(this.player.hunger<0.1){
      if(this.player.health>0){
        this.player.health-=0.0005
      }
    }
    this.tempSprites.clear(true,true);
    this.graphics.clear();
    this.player.depth=this.player.y
    this.player.setVelocity(0);
    this.healthtext.x= 10 + this.cameras.main.scrollX
    this.healthtext.y= 10 + this.cameras.main.scrollY
    this.healthbar.x= 65 + this.cameras.main.scrollX
    this.healthbar.y= 10 + this.cameras.main.scrollY
    this.hungertext.x= 10 + this.cameras.main.scrollX
    this.hungertext.y= 40 + this.cameras.main.scrollY
    this.hungerbar.x= 65 + this.cameras.main.scrollX
    this.hungerbar.y= 40 + this.cameras.main.scrollY
    this.healthtext.y= 10 + this.cameras.main.scrollY
    this.fatiguetext.x= 10 + this.cameras.main.scrollX
    this.fatiguetext.y= 70 + this.cameras.main.scrollY
    this.fatiguebar.x= 65 + this.cameras.main.scrollX
    this.fatiguebar.y= 70 + this.cameras.main.scrollY
    this.healthbarvalue.clear()
    this.healthbarvalue.fillStyle(0xFF0000, 1)
    this.healthbarvalue.fillRect(0,0,150/10*this.player.health,20)
    this.hungerbarvalue.clear()
    this.hungerbarvalue.fillStyle(0xFF0000, 1)
    this.hungerbarvalue.fillRect(0,0,150/10*this.player.hunger,20)
    this.fatiguebarvalue.clear()
    this.fatiguebarvalue.fillStyle(0xFF0000, 1)
    this.fatiguebarvalue.fillRect(0,0,150/10*this.player.tiredness,20)

    this.healthbarvalue.x= 65 + this.cameras.main.scrollX
    this.healthbarvalue.y= 10 + this.cameras.main.scrollY
    this.hungerbarvalue.x= 65 + this.cameras.main.scrollX
    this.hungerbarvalue.y= 40 + this.cameras.main.scrollY
    this.fatiguebarvalue.x= 65 + this.cameras.main.scrollX
    this.fatiguebarvalue.y= 70 + this.cameras.main.scrollY

    let centreX=this.player.x
    let centreY=this.player.y
    let allObjects=[]
    if(this.rocks){
      allObjects.push(...this.rocks.children.entries)
    }
    if(this.trees){
      allObjects.push(...this.trees.children.entries)
    }
    if(this.wheat){
      allObjects.push(...this.wheat.children.entries)
    }
    if(this.flowers){
      allObjects.push(...this.flowers.children.entries)
    }
    if(this.houses){
      allObjects.push(...this.houses.children.entries)
    }
    if(this.cows){
      allObjects.push(...this.cows.children.entries)
    }
    if(this.chickens){
      allObjects.push(...this.chickens.children.entries)
    }
    if(this.bears){
      allObjects.push(...this.bears.children.entries)
    }
    if(this.spiders){
      allObjects.push(...this.spiders.children.entries)
    }
    if(this.dragons){
      allObjects.push(...this.dragons.children.entries)
    }
    if(this.holes){
      allObjects.push(...this.holes.children.entries)
    }
    if(allObjects){
      for(let object of allObjects){
          let distanceFromPlayerX=object.x-centreX
          let distanceFromPlayerY=object.y-centreY
          let distance=Math.round(Math.sqrt(((distanceFromPlayerX*distanceFromPlayerX)+(distanceFromPlayerY*distanceFromPlayerY))))
          object.distance=distance
          if(object.x<centreX){
            object.left=true
            object.right=false
          }
          if(object.x>=centreX){
            object.left=false
            object.right=true
          }
          if(object.y<centreY){
            object.above=true
            object.below=false
          }
          if(object.y>=centreY){
            object.above=false
            object.below=true
          }
      }
    let allObjectsSorted=allObjects.sort(function(a, b){
      return b.distance-a.distance
    });
    for(let object of allObjectsSorted){
      object.caninteract=false
      if(object.distance<150){
        if(object.left&&this.player.lrdirection=="left"){
          object.caninteract=true
        }
        if(object.above&&this.player.uddirection=="above"){
          object.caninteract=true
        }
        if(object.right&&this.player.lrdirection=="right"){
          object.caninteract=true
        }
        if(object.below&&this.player.uddirection=="below"){
          object.caninteract=true
        }
        if(object.name=="bear"){
          this.hitting="bear"
          this.hitbearflag=true
        }
        if(object.name=="chicken"&&(this.player.pickaxe||this.player.axe||this.player.hammer||this.player.sword)){
          this.hitting="chicken"
          this.hitchickenflag=true
        }
        if(object.name=="spider"&&(this.player.pickaxe||this.player.axe||this.player.hammer||this.player.sword)){
          this.hitting="spider"
          this.hitspiderflag=true
        }
        if(object.name=="dragon"&&(this.player.pickaxe||this.player.axe||this.player.hammer||this.player.sword)){
          this.hitting="dragon"
          this.hitdragonflag=true

        }
        if(object.name=="cow"&&(this.player.pickaxe||this.player.axe||this.player.hammer||this.player.sword)){
          this.hitting="cow"
          this.hitcowflag=true
        }
        if(object.name=="tree"&&this.player.axe){
        this.hitting="tree"
        this.hittreeflag=true
        }
        if(object.name=="rock"&&this.player.pickaxe){
        this.hitting="rock"
        this.hitrockflag=true
        }
        if(object.name=="house"&&(this.player.pickaxe||this.player.axe||this.player.hammer||this.player.sword)){
        this.hitting="house"
        this.hithouseflag=true
        }
        if(object.name=="wheat"&&(this.player.axe||this.player.sword)){
        this.hitting="wheat"
        this.hitwheatflag=true
        }
        if(object.name=="flower"&&(this.player.axe||this.player.sword)){
        this.hitting="flower"
        this.hitflowerflag=true
      }
      }
      if(this.player.hittingbear){
        this.player.health-=0.001
      }
      if(this.player.hittingspider){
        this.player.health-=0.002
      }
      if(this.player.hittingdragon){
        this.player.health-=0.003
      }
      if(object.alpha<0.03){
        this.destroyObject(object)
      }
      // if(object.caninteract){
      //   console.log(object)
      // }
      if(this.player.doingaction&&object.caninteract&&object.hasseeds){
        // console.log(!this.player.shovel,!this.player.axe,!this.player.pickaxe,!this.player.sword,!this.player.hammer,!this.player.fishingrod)
      if(!this.player.shovel&&!this.player.axe&&!this.player.pickaxe&&!this.player.sword&&!this.player.hammer&&!this.player.fishingrod){
        console.log("removing seeds")
        object.hasseeds=false 
        console.log(object)

        this.takeSeedsOrFruit(object)
      }
    }
      // if(!object.hasseeds){
      //   object.countdowntoreplenish-=0.01
      // }
      // if(!object.countdowntoreplenish<=0){
      //   object.hasseeds=true 
      //   if(object.name=="tree"){
      //     object.countdowntoreplenish=180
      //   }
      //   if(object.name=="wheat"){
      //     object.countdowntoreplenish=120
      //   }
      //   if(object.name=="flower"){
      //     object.countdowntoreplenish=120
      //   }
      //   // this.replenishSeedsOrFruit(object)
      // }
      if(object.caninteract&&this.player.doingaction&&(this.hitting==object.name)){
        if(object.health>0){
          object.health-=0.01
        }
        if(object.health<=0){
          object.isbeingdestroyed=true
        }
        if(object.x<centreX){
          object.fallingleft=true
          object.fallx=-1
        }
        if(object.x>=centreX){
          object.fallingright=true
          object.fallx=1
        }
        if(object.y<centreY){
          object.fallingup=true
          object.fally=-1
        }
        if(object.y>=centreY){
          object.fallingdown=true
          object.fally=1
        }
      }
      if(object.name=="cow"||object.name=="dragon"||object.name=="spider"||object.name=="bear"||object.name=="chicken"){
        if(object.name=="cow"){
          let angle = Math.atan2(object.xdistlerp,-object.ydistlerp);
          let angleInDegrees = Phaser.Math.RadToDeg(angle);
          if (angleInDegrees > -45 && angleInDegrees <= 45) {
            object.anims.play('cow walking up', true)
          } else if (angleInDegrees > 45 && angleInDegrees <= 135) {
            object.anims.play('cow walking right', true)
          } else if (angleInDegrees > 135 || angleInDegrees <= -135) {
            object.anims.play('cow walking down', true)
          } else {
            object.anims.play('cow walking left', true)
        }
        }
        if(object.name=="dragon"){
          let angle = Math.atan2(object.xdistlerp,-object.ydistlerp);
          let angleInDegrees = Phaser.Math.RadToDeg(angle);
          if (angleInDegrees > -45 && angleInDegrees <= 45) {
            object.anims.play('dragon flying up', true)
          } else if (angleInDegrees > 45 && angleInDegrees <= 135) {
            object.anims.play('dragon flying right', true)
          } else if (angleInDegrees > 135 || angleInDegrees <= -135) {
            object.anims.play('dragon flying down', true)
          } else {
            object.anims.play('dragon flying left', true)
        }
        }
        if(object.name=="spider"){
          let angle = Math.atan2(object.xdistlerp,-object.ydistlerp);
          let angleInDegrees = Phaser.Math.RadToDeg(angle);
          if (angleInDegrees > -45 && angleInDegrees <= 45) {
            object.anims.play('spider walking up', true)
          } else if (angleInDegrees > 45 && angleInDegrees <= 135) {
            object.anims.play('spider walking right', true)
          } else if (angleInDegrees > 135 || angleInDegrees <= -135) {
            object.anims.play('spider walking down', true)
          } else {
            object.anims.play('spider walking left', true)
        }
        }
        if(object.name=="bear"){
          let angle = Math.atan2(object.xdistlerp,-object.ydistlerp);
          let angleInDegrees = Phaser.Math.RadToDeg(angle);
          if (angleInDegrees > -45 && angleInDegrees <= 45) {
            object.anims.play('bear walking up', true)
          } else if (angleInDegrees > 45 && angleInDegrees <= 135) {
            object.anims.play('bear walking right', true)
          } else if (angleInDegrees > 135 || angleInDegrees <= -135) {
            object.anims.play('bear walking down', true)
          } else {
            object.anims.play('bear walking left', true)
        }
        }
        if(object.name=="chicken"){
          let angle = Math.atan2(object.xdistlerp,-object.ydistlerp);
          let angleInDegrees = Phaser.Math.RadToDeg(angle);
          if (angleInDegrees > -45 && angleInDegrees <= 45) {
            object.anims.play('chicken walking up', true)
          } else if (angleInDegrees > 45 && angleInDegrees <= 135) {
            object.anims.play('chicken walking right', true)
          } else if (angleInDegrees > 135 || angleInDegrees <= -135) {
            object.anims.play('chicken walking down', true)
          } else {
            object.anims.play('chicken walking left', true)
        }
        }
          object.x=object.x+object.xdistlerp
          object.y=object.y+object.ydistlerp
      }
      if(object.name=="bear"){
        let bear=object
        if(bear.isbeingdestroyed){
          bear.alpha=bear.alpha-0.01
        }
      }
      if(object.name=="cow"){
        let cow=object
        if(cow.isbeingdestroyed){
          cow.alpha=cow.alpha-0.01
        }
      }
      if(object.name=="chicken"){
        let chicken=object
        if(chicken.isbeingdestroyed){
          chicken.alpha=chicken.alpha-0.01
        }
      }
      if(object.name=="spider"){
        let spider=object
        if(spider.isbeingdestroyed){
          spider.alpha=spider.alpha-0.01
        }
      }
      if(object.name=="dragon"){
        let dragon=object
        if(dragon.isbeingdestroyed){
          dragon.alpha=dragon.alpha-0.01
        }
      }
      if(object.name=="wheat"){
        let wheat=object
        if(wheat.isbeingdestroyed){
          wheat.alpha=wheat.alpha-0.01
        }
      }
      if(object.name=="flower"){
        let flower=object
        if(flower.isbeingdestroyed){
          flower.alpha=flower.alpha-0.01
        }
      }
      if(object.name=="house"){
        let house=object
        if(house.isbeingdestroyed){
          house.alpha=house.alpha-0.01
        }
      }
      if(object.name=="hole"){
        let hole=object
        let addX=(hole.x-centreX)/4
        let addY=(hole.y-centreY)/4
        let newX=hole.x+addX
        let newY=hole.y+addY
        let levels=9
        let lerpedDistanceX=addX/50
        let lerpedDistanceY=addY/50
        let scale=4
        var maskSprite = this.add.sprite(hole.x, hole.y, 'soil').setScale(scale)
        var mask = new Phaser.Display.Masks.BitmapMask(this, maskSprite)
        let scalefactor=0.98
        if(hole.isbeingdestroyed){
          hole.alpha=hole.alpha-0.01
          for(let level=0;level<levels;level++){
            // scalefactor
            if(level<7){
              scale=scale*scalefactor
              scalefactor=scalefactor-0.01
            }else{
              scale=scale*scalefactor
              scalefactor=scalefactor-0.08
            }
            const pointX=hole.x-lerpedDistanceX*level
            const pointY=hole.y-lerpedDistanceY*level
            this.tempSprites.add(this.add.sprite(pointX,pointY,'soil').setScale(scale).setAlpha(hole.alpha))
          }
        }
        if(!hole.isbeingdestroyed){
          let alpha = 0
          let graphics = this.add.graphics()
          for(let level=0;level<levels;level++){
            if(level<7){
              scale=scale*scalefactor
              scalefactor=scalefactor-0.01
            }else{
              scale=scale*scalefactor
              scalefactor=scalefactor-0.08
            }
            alpha=alpha+0.75
            var tintValue = Phaser.Display.Color.GetColor32(0, 0, 0,Math.round(alpha * 255));
            const pointX=hole.x-lerpedDistanceX*level
            const pointY=hole.y-lerpedDistanceY*level
            this.tempSprites.add(this.add.sprite(pointX,pointY,'soil').setScale(scale-0.05).setMask(mask))
            graphics.fillStyle(0x000000, alpha)
            this.circle=graphics.fillCircle(pointX, pointY,scale*15)
            this.tempSprites.add(this.circle)
          }
        }
      }
      if(object.name=="rock"){
        let rock=object
        let addX=(rock.x-centreX)/4
        let addY=(rock.y-centreY)/4
        let newX=rock.x+addX
        let newY=rock.y+addY
        let levels=15
        let lerpedDistanceX=addX/50
        let lerpedDistanceY=addY/50
        let scale=0.7
        if(rock.isbeingdestroyed){
          rock.breaking=rock.breaking+0.1
          rock.alpha=rock.alpha-0.01
          for(let level=0;level<levels;level++){
            const pointX=rock.x+lerpedDistanceX*level
            const pointY=rock.y+lerpedDistanceY*level
            if(level<5){
              this.tempSprites.add(this.add.sprite(pointX-rock.breaking,pointY+rock.breaking,'rock breaking segment 1 frame 1').setScale(scale).setAlpha(rock.alpha))
            }
            this.tempSprites.add(this.add.sprite(pointX,pointY-rock.breaking,'rock breaking segment 3 frame 1').setScale(scale).setAlpha(rock.alpha))
            if(level<11){
              this.tempSprites.add(this.add.sprite(pointX+rock.breaking,pointY,'rock breaking segment 2 frame 2').setScale(scale).setAlpha(rock.alpha))
            }
          }
        }
        if(!rock.isbeingdestroyed){
          for(let level=0;level<levels;level++){
            const pointX=rock.x+lerpedDistanceX*level
            const pointY=rock.y+lerpedDistanceY*level
            if(level<5){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 1').setScale(scale-0.05))
            }
            if(level>=5&&level<11){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 2').setScale(scale-0.05))
            }
            if(level==10){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 2 top').setScale(scale))
            }
            if(level>=11&&level<16){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 3').setScale(scale-0.05))
            }
            if(level==14){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 3 top').setScale(scale))
            }
          }
        }
      }
      if(object.name=="tree"){
        let tree=object
        let addX=(tree.x-centreX)/4
        let addY=(tree.y-centreY)/4
        let newX=tree.x+addX
        let newY=tree.y+addY
        let levels=7
        let lerpedDistanceX=addX/7
        let lerpedDistanceY=addY/7
        let scale=1.3
        let rotation=0.6
        if (tree.isbeingdestroyed&&tree.falling<10){
          this.treeFallingSound.play()
        }
        if (tree.isbeingdestroyed&&tree.falling<150){
          console.log('DESTROYING TREE')
          tree.alpha-=0.01
          tree.setAlpha(tree.alpha)
          tree.falling=tree.falling+1
          if(tree.fallingleft){
            tree.fallx-=0.3
          }
          if(tree.fallingright){
            tree.fallx+=0.3
          }
          if(tree.fallingup){
            tree.fally-=0.3
          }
          if(tree.fallingdown){
            tree.fally+=0.3
          }
        }
        let rotator=tree.rotator.split(",")
        if(tree.fruit=="apple"||tree.fruit=="orange"){
          scale=0.6
          lerpedDistanceX=lerpedDistanceX*0.7
          lerpedDistanceY=lerpedDistanceY*0.7
        }
        for(let level=0;level<levels;level++){
          if(tree.fruit=="apple"||tree.fruit=="orange"){
            let pointX=tree.x+lerpedDistanceX*level
            if(tree.fallx){
              pointX=pointX+tree.fallx*(level+2)
            }
            let pointY=tree.y+lerpedDistanceY*(level+2)
            if(tree.fally){
              pointY=pointY+tree.fally*level
            }
              if(tree.fruit=="apple"){
                if(tree.hasseeds){
                  this.tempSprites.add(this.add.sprite(pointX,pointY,'apple tree segment').setRotation(rotation).setScale(scale).setAlpha(tree.alpha))
                }else{
                  this.tempSprites.add(this.add.sprite(pointX,pointY,'tree segment').setRotation(rotation).setScale(scale).setAlpha(tree.alpha))
                }
              }
              if(tree.fruit=="orange"){
                if(tree.hasseeds){
                  this.tempSprites.add(this.add.sprite(pointX,pointY,'orange tree segment').setRotation(rotation).setScale(scale).setAlpha(tree.alpha))
                }else{
                  this.tempSprites.add(this.add.sprite(pointX,pointY,'tree segment').setRotation(rotation).setScale(scale).setAlpha(tree.alpha))
                }
              }
            rotation+=Number(rotator[level])*5
            if(level==0){
              scale+=0.25
            }
            if(level==1){
              scale+=0.2
            }
            if(level==2){
              scale+=0.15
            }
            if(level==3){
              scale+=0.05
            }
            if(level==4){
              scale-=0.1
            }
            if(level==5){
              scale-=0.2
            }
            if(level==6){
              scale-=0.3
            }
          }
          if(!tree.fruit){
            let pointX=tree.x+lerpedDistanceX*level
            if(tree.fallx){
              pointX=pointX+tree.fallx*level
            }
            let pointY=tree.y+lerpedDistanceY*level
            if(tree.fally){
              pointY=pointY+tree.fally*level
            }
            this.tempSprites.add(this.add.sprite(pointX,pointY,'tree segment').setRotation(rotation).setScale(scale).setAlpha(tree.alpha))
            rotation+=Number(rotator[level])*5
            scale-=0.1
          }
        }
      }
      if(object.name=="wheat"){
        let wheat=object
        let addX=(wheat.x-centreX)/15
        let addY=(wheat.y-centreY)/15
        let newX=wheat.x+addX
        let newY=wheat.y+addY
        let levels=21
        let lerpedDistanceX=addX/10
        let lerpedDistanceY=addY/10
        let scale=0.8
        let pointX
        let pointY
        for(let level=0;level<levels;level++){
          pointX=wheat.x+lerpedDistanceX*level
          pointY=wheat.y+lerpedDistanceY*level
            if (level<6){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 5').setScale(scale))
            }
            if (level<9&&level>=6){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 4').setScale(scale))
            }
            if (level<13&&level>=9){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 3').setScale(scale))
            }
            if (level<16&&level>=13){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 2').setScale(scale))
            }
            if (level<21&&level>=16){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 1').setScale(scale))
            }
            if(level==6){
              if(wheat.hasseeds){
                this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
              }else{
                this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 1').setScale(scale))
              }
            }
          if(level==9){
            if(wheat.hasseeds){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
            }else{
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 1').setScale(scale))
            }          }
          if(level==12){
            if(wheat.hasseeds){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
            }else{
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 1').setScale(scale))
            }          }
          if(level==15){
            if(wheat.hasseeds){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
            }else{
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 1').setScale(scale))
            }          }
          if(level>15){
            scale-=0.025
          }
          if(level==18){
            if(wheat.hasseeds){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
            }else{
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 1').setScale(scale))
            }          }
          if(level==21){
            if(wheat.hasseeds){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
            }else{
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat 1').setScale(scale))
            }
          }
        }
      }
      if(object.name=="flower"){
        let flower=object
        let addX=(flower.x-centreX)/15
        let addY=(flower.y-centreY)/15
        let newX=flower.x+addX
        let newY=flower.y+addY
        let levels=14
        let lerpedDistanceX=addX/10
        let lerpedDistanceY=addY/10
        let scale=0.7
        let pointX
        let pointY
        for(let level=0;level<levels;level++){
          pointX=flower.x+lerpedDistanceX*level
          pointY=flower.y+lerpedDistanceY*level
          this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite').setScale(scale))
        }
        if(flower.hasseeds){
          if(flower.colour==="red"){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'red flowers').setScale(scale))
          }
          if(flower.colour==="white"){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'white flowers').setScale(scale))
          }
          if(flower.colour==="purple"){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'purple flowers').setScale(scale))
          }
          if(flower.colour==="yellow"){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'yellow flowers').setScale(scale))
          }
        }
      }
      if(object.name=="house"){
        let house=object
        let addX=(house.x-centreX)/8
        let addY=(house.y-centreY)/8
        let addXRoof=addX*1.6
        let addYRoof=addY*1.6
        let tl=[0,0]
        let tm=[100,0]
        let tr=[200,0]
        let bl=[0,150]
        let bm=[100,150]
        let br=[200,150]
        let lastPointX
        let lastPointY
        let lerpedDistanceX=addX/8
        let lerpedDistanceY=addY/8
        let levels=14
        let levelshrinker=1
        for(let level=0;level<levels;level++){
          const pointX=house.x+lerpedDistanceX*level
          const pointY=house.y+lerpedDistanceY*level
          if(level==0){
            this.tempSprites.add(this.add.polygon(pointX,pointY,[tl,bl,br,tr],0x4b2d0b).setStrokeStyle(5, 0x1b0000).setAlpha(house.alpha))
          }
          if(level<7){
            this.tempSprites.add(this.add.polygon(pointX,pointY,[tl,bl,br,tr],0x4b2d0b).setStrokeStyle(1, 0x1b0000).setAlpha(house.alpha))
          }
          if(level===7){
            lastPointX=house.x+lerpedDistanceX*level
            lastPointY=house.y+lerpedDistanceY*level
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x-100, house.y-75).lineTo(house.x+addX-100,house.y+addY-75).strokePath().setAlpha(house.alpha))
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x+100, house.y-75).lineTo(house.x+addX+100,house.y+addY-75).strokePath().setAlpha(house.alpha))
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x-100, house.y+75).lineTo(house.x+addX-100,house.y+addY+75).strokePath().setAlpha(house.alpha))
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x+100, house.y+75).lineTo(house.x+addX+100,house.y+addY+75).strokePath().setAlpha(house.alpha))
            this.tempSprites.add(this.add.polygon(lastPointX,lastPointY,[tl,bl,br,tr],0x4b2d0b).setStrokeStyle(5, 0x1b0000).setAlpha(house.alpha))
          }
          if(level>7){
            let newtl=[0,0]
            let newtr=[200-(levelshrinker*30),0]
            let newbl=[0,150]
            let newbr=[200-(levelshrinker*30),150]
            this.tempSprites.add(this.add.polygon(pointX,pointY,[newtl,newbl,newbr,newtr],0x4b2d0b).setStrokeStyle(1, 0x1b0000).setAlpha(house.alpha))
            levelshrinker+=1
          }
        }
          var polygonPoints = [lastPointX-100,lastPointY-75,lastPointX-100,lastPointY+75,house.x+addXRoof,house.y+addYRoof+75,house.x+addXRoof,house.y+addYRoof-75];
           var graphics = this.add.graphics().fillStyle(0x4b2d0b, 1).lineStyle(5, 0x1b0000).beginPath().moveTo(polygonPoints[0], polygonPoints[1]).setAlpha(house.alpha)
           for (var i = 2; i < polygonPoints.length; i += 2) {
               graphics.lineTo(polygonPoints[i], polygonPoints[i + 1]);
           }
           graphics.closePath().fillPath().strokePath();
           this.tempSprites.add(graphics)
           var polygonPoints = [house.x+addXRoof,house.y+addYRoof+75,house.x+addXRoof,house.y+addYRoof-75,lastPointX+100,lastPointY-75,lastPointX+100,lastPointY+75,];
              var graphics = this.add.graphics().fillStyle(0x4b2d0b,1).lineStyle(5, 0x1b0000).beginPath().moveTo(polygonPoints[0], polygonPoints[1]).setAlpha(house.alpha)
              for (var i = 2; i < polygonPoints.length; i += 2) {
                  graphics.lineTo(polygonPoints[i], polygonPoints[i + 1]);
              }
              graphics.closePath().fillPath().strokePath().setAlpha(house.alpha)
              this.tempSprites.add(graphics)
        for(let house of this.houses.children.entries){
          let distanceFromPlayerX=house.x-centreX
          let distanceFromPlayerY=house.y-centreY
          let distance=Math.round(Math.sqrt(((distanceFromPlayerX*distanceFromPlayerX)+(distanceFromPlayerY*distanceFromPlayerY))))
          house.setDepth(distance)
        }
      }
    }
  }
    // this.player.body.offset.x =  14;
    // this.player.body.offset.y = 6;
    // this.player.body.width = 55
    // this.player.body.height = 70
    //
    // for (let player of this.players){
    //   player.depth=player.y
    //   player.x=player.lastx+this.positiontimer*player.increx
    //   player.y=player.lasty+this.positiontimer*player.increy
    //
    //   if (player.direction=="left"){
    //     player.anims.play('runbrownhairfront',true)
    //   }
    //   if (player.direction=="right"){
    //     player.anims.play('right',true)
    //   }
    //   if (player.direction=="down"){
    //     player.anims.play('down',true)
    //   }
    //   if (player.direction=="up"){
    //     player.anims.play('up',true)
    //   }
    //   if (player.lasty==player.currenty&&player.lastx==player.currentx) {
    //     player.setFrame(0)
    //     player.anims.stop();
    //   }
    // }
    this.incr+=1
    if(!this.player.fishing){
    if(cursors.right.isDown){
      this.player.moving=true
      this.player.lrdirection="right"
      this.player.setVelocityX(200);
      this.player.setFlipX(false);
      this.player.lastcursor="r"
    }
     if(cursors.up.isDown){
       this.player.moving=true
       this.player.uddirection="up"
       this.player.setFlipX(true);
       this.player.setVelocityY(-200);
       this.player.lastcursor="u"
    }
     if(cursors.down.isDown){
       this.player.moving=true
       this.player.uddirection="down"
       this.player.setVelocityY(200)
       this.player.lastcursor="d"
    }
    if(cursors.left.isDown){
      this.player.moving=true
      this.player.lrdirection="left"
      this.player.setVelocityX(-200)
      this.player.lastcursor="l"
    }

    if(cursors.left.isDown&&cursors.up.isDown){
      this.player.setVelocityX(-120);
      this.player.setVelocityY(-120);
      this.player.setFlipX(false);
      this.player.lastcursor="lu"
    }

    if(cursors.left.isDown&&cursors.down.isDown){
      this.player.setVelocityX(-120);
      this.player.setVelocityY(120);
      this.player.setFlipX(true);
      this.player.lastcursor="ld"
    }
    if(cursors.right.isDown&&cursors.down.isDown){
      this.player.setVelocityX(120);
      this.player.setVelocityY(120);
      this.player.setFlipX(false);
      this.player.lastcursor="rd"
    }
    if(cursors.right.isDown&&cursors.up.isDown){
      this.player.setFlipX(true);
      this.player.setVelocityX(120);
      this.player.setVelocityY(-120);
      this.player.lastcursor="ru"
    }
    if(this.player.uddirection=="down"&&this.player.lrdirection=="left"||this.player.uddirection=="up"&&this.player.lrdirection=="right"){
      this.player.setFlipX(true);
    }
    if(cursors.space.isUp){
      this.player.doingaction=false
      if(cursors.right.isDown){
        this.player.setVelocityX(200);
        this.player.setFlipX(false);
      }
       if(cursors.up.isDown){
        this.player.setVelocityY(-200);
        this.player.setFlipX(true);
      }
       if(cursors.down.isDown){
        this.player.setVelocityY(200);
      }
      if(cursors.left.isDown){
        this.player.setVelocityX(-200);
      }
      if(cursors.up.isDown){
        this.player.anims.play('runbrownhairback',true)
      }
      if(cursors.left.isDown&&cursors.up.isDown){
        this.player.setVelocityX(-120);
        this.player.setVelocityY(-120);
        this.player.setFlipX(false);
      }

      if(cursors.left.isDown&&cursors.down.isDown){
        this.player.anims.play('runbrownhairfront',true)
        this.player.setVelocityX(-120);
        this.player.setVelocityY(120);
        this.player.setFlipX(true);
      }
      if(cursors.right.isDown&&cursors.down.isDown){
        this.player.setFlipX(false);
        this.player.anims.play('runbrownhairfront',true)
        this.player.setVelocityX(120);
        this.player.setVelocityY(120);
      }
      if(cursors.right.isDown&&cursors.up.isDown){
        this.player.setVelocityX(120);
        this.player.setVelocityY(-120);
        this.player.setFlipX(true);
      }
      if(this.player.uddirection=="down"&&this.player.lrdirection=="left"||this.player.uddirection=="up"&&this.player.lrdirection=="right"){
        this.player.setFlipX(true);
      }
      if(this.player.uddirection==="up"){
        if(this.player.lrdirection==="left"){
          this.player.setFlipX(false);
        }
        if(this.player.lrdirection==="right"){
          this.player.setFlipX(true);
        }
      }
      if(this.player.uddirection==="down"){
        if(this.player.lrdirection==="left"){
          this.player.setFlipX(true);
        }
        if(this.player.lrdirection==="right"){
          this.player.setFlipX(false);
        }
      }
      if(cursors.left.isDown&&this.player.uddirection=="down"){
        this.player.anims.play('runbrownhairfront',true)
      }
      if(cursors.left.isDown&&this.player.uddirection=="up"){
        this.player.anims.play('runbrownhairback',true)
      }
      if(cursors.right.isDown&&this.player.uddirection=="down"){
        this.player.anims.play('runbrownhairfront',true)
      }
      if(cursors.right.isDown&&this.player.uddirection=="up"){
        this.player.anims.play('runbrownhairback',true)
      }
      if(cursors.up.isDown&&this.player.lrdirection=="right"){
        this.player.anims.play('runbrownhairback',true)
      }
      if(cursors.up.isDown&&this.player.lrdirection=="left"){
        this.player.setFlipX(false);
        this.player.anims.play('runbrownhairback',true)
      }
      if(cursors.down.isDown&&this.player.lrdirection=="right"){
        this.player.anims.play('runbrownhairfront',true)
      }
      if(cursors.down.isDown&&this.player.lrdirection=="left"){
        this.player.anims.play('runbrownhairfront',true)
      }
        if (this.player.body.velocity.x===0&&this.player.body.velocity.y===0) {

          if(this.player.uddirection=="up"){
            if(this.player.lrdirection=="left"){
              this.player.anims.play('idlebrownhairback',10,true)
            }
            if(this.player.lrdirection=="right"){
              this.player.anims.play('idlebrownhairback',10,true)
            }
          }

          if(this.player.uddirection=="down"){
            if(this.player.lrdirection=="left"){
              this.player.anims.play('idlebrownhairfront',10,true)
            }
            if(this.player.lrdirection=="right"){
              this.player.anims.play('idlebrownhairfront',10,true)
            }
          }
        }
    }
      if(cursors.space.isDown){
        this.player.doingaction=true
        console.log("this.player.doingaction 1",this.player.doingaction)
        if(this.player.uddirection==="up"){
          if(this.player.lrdirection==="left"){
            if(this.player.axe){
              this.player.anims.play('cuttingtreebrownhairback',10)
            }
            if(this.player.sword){
              this.player.anims.play('attackbrownhairback',10)
            }
            if(this.player.fishingrod){
              this.player.setFlipX(false);
            }
            if(this.player.pickaxe){
              this.player.anims.play('miningbrownhairback',10)
            }
            if(this.player.shovel){
              this.player.anims.play('diggingbrownhairback',10)
            }
          }
          if(this.player.lrdirection==="right"){
            if(this.player.axe){
              this.player.anims.play('cuttingtreebrownhairback',10)
            }
            if(this.player.sword){
              this.player.anims.play('attackbrownhairback',10)
            }
            if(this.player.fishingrod){
              this.player.setFlipX(true);
            }
            if(this.player.pickaxe){
              this.player.anims.play('miningbrownhairback',10)
            }
            if(this.player.shovel){
              this.player.anims.play('diggingbrownhairback',10)
            }
          }
        }
        if(this.player.uddirection==="down"){
          if(this.player.lrdirection==="left"){
            if(this.player.axe){
              this.player.anims.play('cuttingtreebrownhairfront',10)
            }
            if(this.player.sword){
              this.player.anims.play('attackbrownhairfront',10)
            }
            if(this.player.fishingrod){
              this.player.setFlipX(true);
            }
            if(this.player.pickaxe){
              this.player.anims.play('miningbrownhairfront',10)
            }
            if(this.player.shovel){
              this.player.anims.play('diggingbrownhairfront',10)
            }
          }
          if(this.player.lrdirection==="right"){
            if(this.player.axe){
              this.player.anims.play('cuttingtreebrownhairfront',10)
            }
            if(this.player.sword){
              this.player.anims.play('attackbrownhairfront',10)
            }
            if(this.player.fishingrod){
              this.player.setFlipX(true);
            }
            if(this.player.pickaxe){
              this.player.anims.play('miningbrownhairfront',10)
            }
            if(this.player.shovel){
              this.player.anims.play('diggingbrownhairfront',10)
            }
          }
        }
      }
      }
    if(this.incr>4){
      // this.player.moving=false
      // let direction="still"
      this.sendstate(this.player.x,this.player.y,this.player.id)
      this.incr=0
    }
      this.player.hittingbear=false
      this.player.hittingspider=false
      this.player.hittingdragon=false
      if(this.player.touchingwater=="right"&&this.player.fishing){
        this.player.flipX=false
      }
      if(this.player.touchingwater=="left"&&this.player.fishing){
        this.player.flipX=true
      }
  }
}
