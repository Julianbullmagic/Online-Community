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
    // 'fishbitthelinebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651826/fish_bit_the_line_front_ivoqvr.png",
    'idlebrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703638847/idle_front_wbb8vs.png",
    'idlebrownhairback': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651830/idle_back_tlwe07.png",
    // 'idlefishingbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651832/idle_fishing_front_aupnm2.png",
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
    // 'strugglingwiththefishbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651910/struggling_whit_the_fish_front_uhh8oa.png",
    'throwingfishingrodbrownhairfront': "https://res.cloudinary.com/dfksh5mnb/image/upload/v1703651912/throwing_fishing_rod_front_ritizd.png"
};


export default class TestScene extends Scene {
  constructor() {
    super('TestScene');
    this.playernames=[]
    this.players=[]
    this.rockids=[]
    this.rocks=[]
    this.houseids=[]
    this.houses=[]
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
    this.positiontimer=0
    this.incr=0
  }

  shutdown() {
  }


  sendstate(x,y,id,moving,direction){
    let playerdata = {
      "x": Math.round(x),
      "y": Math.round(y),
      "id":id,
      "moving":moving,
      "direction":direction
    }
    socket.emit('returning state', JSON.stringify(playerdata))
  }

  preload() {
    // this.load.image('map image',mapimage)
    // this.load.tilemapTiledJSON('map data',json)
    for (const [animationName, spritesheet] of Object.entries(animations)) {
      console.log(animationName, animations[`${animationName}`])
    if(animationName.includes("fish")){
      this.load.spritesheet(animationName, animations[`${animationName}`], { frameWidth: 64, frameHeight: 64 });
    }else{
      this.load.spritesheet(animationName, animations[`${animationName}`], { frameWidth: 48, frameHeight: 32 });
    }
}

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
    this.load.spritesheet('rock 2 layer 1',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703803321/rock2layer1_ctnf0j.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('rock 2 layer 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703802635/rock2layer2_fyvhmj.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('rock 2 layer 3',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703802818/rock2layer3_dhlgvq.png",{frameWidth:200,frameHeight:213})
    this.load.spritesheet('grass sprite',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703765272/grasssprite_rahuwt.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('grass sprite 2',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703765960/grasssprite2_fokcrk.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('grass sprite 3',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703765959/grasssprite3_b7ew6r.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('grass sprite 4',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703765959/grassspritetop_peczej.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('grass sprite leaves',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703767471/grassspriteleaves_l0qq0x.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('yellow flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703766643/yellowflowers_n8vyi4.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('purple flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703766643/purpleflowers_ma5r4l.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('red flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703766643/redflowers_ncu3d5.png",{frameWidth:100,frameHeight:100})
    this.load.spritesheet('white flowers',"https://res.cloudinary.com/dfksh5mnb/image/upload/v1703766643/whiteflowers_s3tgrd.png",{frameWidth:100,frameHeight:100})
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
    this.load.image("grass",'https://res.cloudinary.com/dfksh5mnb/image/upload/v1703637696/grass_caru0u.png');

    this.load.audio('tree falling', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704003187/Voicy_Tree_Falling_Down_Fast_lfajlk.mp3');
    this.load.audio('rock smash', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062484/rock-smash_xa3zxn.mp3');
    this.load.audio('swoosh', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062484/clean-fast-swooshaiff-14784_uqjep5.mp3');
    this.load.audio('digging', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062485/420876__inspectorj__digging-ice-hammer-c_dv6fmq.wav');
    this.load.audio('pickaxe hits rock', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062484/638696__captainyulef__pickaxe_edjpig.wav');
    this.load.audio('axe hits tree', 'https://res.cloudinary.com/dfksh5mnb/video/upload/v1704062484/421929__micahlg__chopping-wood-02_esxrmr.wav');
  }

  destroyObject(object) {
    console.log("Removing object", object);

    // Log the current group memberships
    console.log("Trees group contains:", this.trees.contains(object));
    console.log("Rocks group contains:", this.rocks.contains(object));
    console.log("Houses group contains:", this.houses.contains(object));
    console.log("Flowers group contains:", this.flowers.contains(object));
    console.log("Wheat group contains:", this.wheat.contains(object));

    socket.emit('remove object', object.id);

    // Remove the object from the appropriate group
    if (this.trees.contains(object)) {
      this.trees.remove(object, true, true);
      console.log("Object removed from Trees group");
    } else if (this.rocks.contains(object)) {
      this.rocks.remove(object, true, true);
      console.log("Object removed from Rocks group");
    } else if (this.houses.contains(object)) {
      this.houses.remove(object, true, true);
      console.log("Object removed from Houses group");
    } else if (this.flowers.contains(object)) {
      this.flowers.remove(object, true, true);
      console.log("Object removed from Flowers group");
    } else if (this.wheat.contains(object)) {
      this.wheat.remove(object, true, true);
      console.log("Object removed from Wheat group");
    } else {
      console.log("Object not found in any group");
    }
  }


  create(){
    //Layer creation
    // this.map = this.make.tilemap({
    //   key:'map data',
    //   width: 100,
    //   height: 100,
    //   tileWidth: 48,
    //   tileHeight: 48,
    // });
    this.grass=this.add.tileSprite(0, 0, window.screen.width*2, window.screen.height*2, "grass");
    this.trees= this.add.group()
    this.rocks=this.add.group()
    this.houses=this.add.group()
    this.flowers=this.add.group()
    this.wheat=this.add.group()
    this.cows= this.add.group()
    this.chickens=this.add.group()
    this.bears=this.add.group()
    this.spiders=this.add.group()
    this.dragons=this.add.group()
    // let tileset=this.map.addTilesetImage('gentle forest (48x48 resize) v05','map image')
    // this.baselayer=this.map.createLayer("Tile Layer 1", tileset,0,0).setScale(0.25);
    // this.clifflayer=this.map.createLayer("cliffs", tileset,0,0).setScale(0.25);
    // this.clifflayer.setCollisionByExclusion(-1)
    let tempplayer=JSON.parse(sessionStorage.getItem("jwt"))
    console.log(tempplayer.user,"PLAYER")
    tempplayer=tempplayer.user
    this.player=this.physics.add.sprite(0,0,'guy').setBounce(0).setBodySize(20, 25)
    this.player.body.setOffset(14,5)
    this.player.health=tempplayer.health
    this.player.tiredness=tempplayer.tiredness
    this.player.hunger=tempplayer.hunger
    this.player.uddirection="down"
    this.player.lrdirection="right"
    this.space=false
    this.player.doingaction=false
    this.player.axe=false
    this.player.hammer=true
    this.player.sword=false
    this.player.pickaxe=true
    this.player.fishingrod=false
    this.player.shovel=false
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
    this.player.setScale(3);
    this.physics.add.collider(this.player, this.trees,collisionHandler);
    this.physics.add.collider(this.player,this.rocks,collisionHandler);
    this.physics.add.collider(this.player,this.houses,collisionHandler);
    this.physics.add.collider(this.player,this.flowers,collisionHandler);
    this.physics.add.collider(this.player,this.wheat,collisionHandler);
    this.input.keyboard.on('keydown-SPACE',spaceDown,this)
    this.input.keyboard.on('keyup-SPACE',spaceUp,this)

    function spaceDown(){
      if(this.player.axe){
        this.swooshSound.play({loop: true})
      }
      if(this.player.sword){
        this.swooshSound.play({loop: true})
      }
      if(this.player.fishingrod){
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
      if(this.player.axe){
        this.swooshSound.stop()
      }
      if(this.player.sword){
        this.swooshSound.stop()
      }
      if(this.player.fishingrod){
        this.swooshSound.stop()
      }
      if(this.player.pickaxe){
        this.swooshSound.stop()
      }
      if(this.player.shovel){
        this.diggingSound.stop()
      }
    }



    function collisionHandler(player,object){
      // object.collided=true
      // if(player.doingaction&&player.axe&&object.name=="tree"){
      //   object.dead=true
      // }
      // if(player.doingaction&&player.pickaxe&&object.name=="rock"){
      //   object.dead=true
      // }
      // if(player.doingaction&&(player.axe||player.sword)&&object.name=="house"){
      //   object.dead=true
      // }
      // if(player.doingaction&&(player.axe||player.sword)&&object.name=="wheat"){
      //   object.dead=true
      // }
      // if(player.doingaction&&(player.axe||player.sword)&&object.name=="flower"){
      //   object.dead=true
      // }
    }

    for (const [key, value] of Object.entries(animations)) {
        this.anims.create({
            key: key,
            frameRate: 10,
            frames: this.anims.generateFrameNumbers(key, { start: 0, end: 7 }),
            repeat: -1
        });
    }
    this.treeFallingSound = this.sound.add('tree falling');
    this.rockSmashSound = this.sound.add('rock smash');
    this.swooshSound = this.sound.add('swoosh');
    this.diggingSound = this.sound.add('digging');
    this.pickAxeHitsSound = this.sound.add('pickaxe hits rock');
    this.pickAxeHittingSoundFlag=false
    this.axeHitsTreeSound = this.sound.add('axe hits tree');
    this.pickAxeHitsSound.once('complete', function () {
      this.pickAxeHittingSoundFlag=false
    }, this)
    // this.physics.add.collider(this.player, this.clifflayer);
    this.cameras.main.startFollow(this.player,true,1,1)
    this.cameras.main.setFollowOffset(0,-this.player.height)
    let name=localStorage.getItem("name")
    // socket.emit('player joining', JSON.stringify({"name":name,"x":this.player.x,"y":this.player.y}))
    this.player.id=name

    socket.on('updateState',(data)=>{
      this.positiontimer=0
      let state=JSON.parse(data)
      this.collectiveInventory=state.collectiveInventory
      const event = new CustomEvent('updateCollectiveInventory',{ detail:this.collectiveInventory});
      window.dispatchEvent(event);
      let tempplayers=state.players
      let trees=state.trees
      let rocks=state.rocks
      let houses=state.houses
      let flowers=state.flowers
      let wheat=state.wheat
      for (let tree of trees){
        if (!this.treeids.includes(tree._id)){
          this.treeids.push(tree._id)
          let newtree=this.physics.add.staticSprite(tree.x,tree.y,'tree segment').setCircle(50).setScale(1.3).setVisible(false).setOffset(-10,-10)
          newtree.name="tree"
          newtree.falling=1
          newtree.id=tree._id
          console.log(newtree)
          this.trees.add(newtree)
        }
      }
      for (let rock of rocks){
        if (!this.rockids.includes(rock._id)){
          this.rockids.push(rock._id)
          let newrock=this.physics.add.staticSprite(rock.x,rock.y,'rock 1 layer 1').setCircle(60).setScale(0.4).setVisible(false).setOffset(-35,-35)
          newrock.type=rock.type
          newrock.name="rock"
          newrock.breaking=1
          newrock.alpha=1
          newrock.id=rock._id
          console.log(newrock)
          this.rocks.add(newrock)
        }
      }
      for (let house of houses){
        if (!this.houseids.includes(house._id)){
          this.houseids.push(house._id)
          let newhouse=this.physics.add.staticSprite(house.x,house.y,'house').setBodySize(200, 145).setVisible(false)
          newhouse.name="house"
          newhouse.id=house._id
          console.log(newhouse)
          this.houses.add(newhouse)
        }
      }
      for (let flower of flowers){
        if (!this.flowerids.includes(flower._id)){
          this.flowerids.push(flower._id)
          let newflower=this.physics.add.staticSprite(flower.x,flower.y,'flower').setBodySize(50, 50).setVisible(false)
          newflower.colour=flower.colour
          newflower.name="flower"
          newflower.id=flower._id
          console.log(newflower)
          this.flowers.add(newflower)
        }
      }
      for (let wheat of wheat){
        if (!this.wheatids.includes(wheat._id)){
          this.wheatids.push(wheat._id)
          let newwheat=this.physics.add.staticSprite(wheat.x,wheat.y,'wheat').setBodySize(60, 60).setVisible(false)
          newwheat.name="wheat"
          newwheat.id=wheat._id
          console.log(newwheat)
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
}

  update(time,delta){
        // this.positiontimer+=1
    // console.log(this.tempSprites)
    // for (let sprite of this.tempSprites.list){
    //   sprite.destroy()
    // }
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

      if(object.distance<130){
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
      }
      if(object.alpha<0.05){
        this.destroyObject(object)
      }
      if(object.caninteract&&this.player.doingaction){
        if(object.name=="tree"&&this.player.axe){
          object.isbeingdestroyed=true
          this.axeHitsTreeSound.play()
        }
        if(object.name=="rock"&&this.player.pickaxe){
          object.isbeingdestroyed=true
          if(this.pickAxeHittingSoundFlag==false){
            this.pickAxeHitsSound.play()
          }
          this.pickAxeHittingSoundFlag=true
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
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 1').setScale(scale))
            }
            if(level>=5&&level<11){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 2').setScale(scale))
            }
            if(level>=11&&level<16){
              this.tempSprites.add(this.add.sprite(pointX,pointY,'rock 2 layer 3').setScale(scale))
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
        for(let level=0;level<levels;level++){
          let pointX=tree.x+lerpedDistanceX*level
          if(tree.fallx){
            pointX=pointX+tree.fallx*level
          }
          let pointY=tree.y+lerpedDistanceY*level
          if(tree.fally){
            pointY=pointY+tree.fally*level
          }
          this.tempSprites.add(this.add.sprite(pointX,pointY,'tree segment').setRotation(rotation).setScale(scale).setAlpha(tree.alpha))
          rotation+=0.7
          scale-=0.1
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
              this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
            }
          if(level==9){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
          }
          if(level==12){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
          }
          if(level==15){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
          }
          if(level>15){
            scale-=0.025
          }
          if(level==18){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
          }
          if(level==21){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'wheat top').setScale(scale))
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
        let scale=0.5
        let pointX
        let pointY
        for(let level=0;level<levels;level++){
          pointX=flower.x+lerpedDistanceX*level
          pointY=flower.y+lerpedDistanceY*level
          if (level<4){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite').setScale(scale))
          }
          if (level<6&&level>=4){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite 2').setScale(scale))
          }
          if (level<8&&level>=7){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite 3').setScale(scale))
          }
          if (level<11&&level>=8){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite 3').setScale(scale))
          }
          if (level>10){
            scale-=0.025
            this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite 3').setScale(scale))
          }
          if (level==6){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite leaves').setScale(scale))
          }
          if (level==3){
            this.tempSprites.add(this.add.sprite(pointX,pointY,'grass sprite leaves').setScale(scale))
          }
        }
        scale=0.5
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
            this.tempSprites.add(this.add.polygon(pointX,pointY,[tl,bl,br,tr],0x4b2d0b).setStrokeStyle(5, 0x1b0000))
          }
          if(level<7){
            this.tempSprites.add(this.add.polygon(pointX,pointY,[tl,bl,br,tr],0x4b2d0b).setStrokeStyle(1, 0x1b0000))
          }
          if(level===7){
            lastPointX=house.x+lerpedDistanceX*level
            lastPointY=house.y+lerpedDistanceY*level
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x-100, house.y-75).lineTo(house.x+addX-100,house.y+addY-75).strokePath())
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x+100, house.y-75).lineTo(house.x+addX+100,house.y+addY-75).strokePath())
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x-100, house.y+75).lineTo(house.x+addX-100,house.y+addY+75).strokePath())
            this.tempSprites.add(this.add.graphics().lineStyle(5,0x1b0000).moveTo(house.x+100, house.y+75).lineTo(house.x+addX+100,house.y+addY+75).strokePath())
            this.tempSprites.add(this.add.polygon(lastPointX,lastPointY,[tl,bl,br,tr],0x4b2d0b).setStrokeStyle(5, 0x1b0000))
          }
          if(level>7){
            let newtl=[0,0]
            let newtr=[200-(levelshrinker*30),0]
            let newbl=[0,150]
            let newbr=[200-(levelshrinker*30),150]
            this.tempSprites.add(this.add.polygon(pointX,pointY,[newtl,newbl,newbr,newtr],0x4b2d0b).setStrokeStyle(1, 0x1b0000))
            levelshrinker+=1
          }
        }
          var polygonPoints = [lastPointX-100,lastPointY-75,lastPointX-100,lastPointY+75,house.x+addXRoof,house.y+addYRoof+75,house.x+addXRoof,house.y+addYRoof-75];
           var graphics = this.add.graphics().fillStyle(0x4b2d0b, 1).lineStyle(5, 0x1b0000).beginPath().moveTo(polygonPoints[0], polygonPoints[1])
           for (var i = 2; i < polygonPoints.length; i += 2) {
               graphics.lineTo(polygonPoints[i], polygonPoints[i + 1]);
           }
           graphics.closePath().fillPath().strokePath();
           this.tempSprites.add(graphics)
           var polygonPoints = [house.x+addXRoof,house.y+addYRoof+75,house.x+addXRoof,house.y+addYRoof-75,lastPointX+100,lastPointY-75,lastPointX+100,lastPointY+75,];
              var graphics = this.add.graphics().fillStyle(0x4b2d0b,1).lineStyle(5, 0x1b0000).beginPath().moveTo(polygonPoints[0], polygonPoints[1])
              for (var i = 2; i < polygonPoints.length; i += 2) {
                  graphics.lineTo(polygonPoints[i], polygonPoints[i + 1]);
              }
              graphics.closePath().fillPath().strokePath();
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
    // this.incr+=1
    // let x=this.player.x
    // let y=this.player.y
    // let id=this.player.id
    // // console.log(x,y,id)
    // this.player.moving=false
    // let direction="still"
    const cursors=this.input.keyboard.createCursorKeys()
    if(cursors.right.isDown){
      this.player.lrdirection="right"
      this.player.setVelocityX(200);
      this.player.setFlipX(false);
    }
     if(cursors.up.isDown){
       this.player.uddirection="up"
       this.player.setFlipX(true);
      this.player.setVelocityY(-200);
    }
     if(cursors.down.isDown){
       this.player.uddirection="down"
      this.player.setVelocityY(200);
    }
    if(cursors.left.isDown){
      this.player.lrdirection="left"
      this.player.setVelocityX(-200);
    }

    if(cursors.left.isDown&&cursors.up.isDown){
      this.player.setVelocityX(-120);
      this.player.setVelocityY(-120);
      this.player.setFlipX(false);
    }

    if(cursors.left.isDown&&cursors.down.isDown){
      this.player.setVelocityX(-120);
      this.player.setVelocityY(120);
      this.player.setFlipX(true);
    }
    if(cursors.right.isDown&&cursors.down.isDown){
      this.player.setVelocityX(120);
      this.player.setVelocityY(120);
      this.player.setFlipX(false);
    }
    if(cursors.right.isDown&&cursors.up.isDown){
      this.player.setFlipX(true);
      this.player.setVelocityX(120);
      this.player.setVelocityY(-120);
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
        if(this.player.uddirection==="up"){
          if(this.player.lrdirection==="left"){
            if(this.player.axe){
              this.player.anims.play('cuttingtreebrownhairback',10)
            }
            if(this.player.sword){
              this.player.anims.play('attackbrownhairback',10)
            }
            if(this.player.fishingrod){
              this.player.anims.play('throwingfishingrodbrownhairfront',10)
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
              this.player.anims.play('throwingfishingrodbrownhairfront',10)
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
              this.player.anims.play('throwingfishingrodbrownhairfront',10)
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
              this.player.anims.play('throwingfishingrodbrownhairfront',10)
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




    //
    //
    // if(this.incr>4){
    //   this.sendstate(x,y,id,moving,direction)
    //   this.incr=0
    // }
  }
}
