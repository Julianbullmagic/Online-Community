import  {Scene} from "phaser";
import attackbrownhairback from '../assets/character 3/attack_01_back.png'
import attackbrownhairfront from '../assets/character 3/attack_01_front.png'
import catchingthefishbrownhairfront from '../assets/character 3/catching_the_fish_front.png'
import cuttingtreebrownhairfront from '../assets/character 3/cutting_tree_front.png'
import cuttingtreebrownhairback from '../assets/character 3/cutting_tree_back.png'
import deathbrownhairfront from '../assets/character 3/death_front.png'
import deathbrownhairback from '../assets/character 3/death_back.png'
import fishbitthelinebrownhairfront from '../assets/character 3/fish_bit_the_line_front.png'
import idlebrownhairfront from '../assets/character 3/idle_front.png'
import idlebrownhairback from '../assets/character 3/idle_back.png'
import idlefishingbrownhairfront from '../assets/character 3/idle_fishing_front.png'
import idlewithaxebrownhairfront from '../assets/character 3/idle_whit_axe_front.png'
import idlewithaxebrownhairback from '../assets/character 3/idle_whit_axe_back.png'
import idlewithfishingrodbrownhairfront from '../assets/character 3/idle_whit_fishing_rod_front.png'
import idlewithpickaxebrownhairfront from '../assets/character 3/idle_whit_pickaxe_front.png'
import idlewithpickaxebrownhairback from '../assets/character 3/idle_whit_pickaxe_back.png'
import idlewithswordbrownhairfront from '../assets/character 3/idle_whit_sword_front.png'
import idlewithswordbrownhairback from '../assets/character 3/idle_whit_sword_back.png'
import ladderclimbbrownhairback from '../assets/character 3/ladder_climb.png'
import miningbrownhairfront from '../assets/character 3/mining_front.png'
import miningbrownhairback from '../assets/character 3/mining_back.png'
import runbrownhairfront from '../assets/character 3/run_front.png'
import runbrownhairback from '../assets/character 3/run_back.png'
import runwithfishingrodbrownhairfront from '../assets/character 3/run_whit_fishing_rod_front.png'
import runwithaxebrownhairfront from '../assets/character 3/run_whit_axe_front.png'
import runwithaxebrownhairback from '../assets/character 3/run_whit_axe_back.png'
import runwithpickaxebrownhairfront from '../assets/character 3/run_whit_pickaxe_front.png'
import runwithpickaxebrownhairback from '../assets/character 3/run_whit_pickaxe_back.png'
import runwithswordbrownhairfront from '../assets/character 3/run_whit_sword_front.png'
import runwithswordbrownhairback from '../assets/character 3/run_whit_sword_back.png'
import strugglingwiththefishbrownhairfront from '../assets/character 3/struggling_whit_the_fish_front.png'
import throwingfishingrodbrownhairfront from '../assets/character 3/throwing_fishing_rod_front.png'
import { io } from 'socket.io-client';
import grass from '../assets/grass.png'
import rock from '../assets/rock.png'
import house from '../assets/house.png'
import tree from '../assets/tree.png'
console.log(attackbrownhairback,'attackbrownhairback')
console.log(rock,'rock')
console.log(house,'house')
console.log(tree,'tree')
console.log(grass,'grass')


const URL = process.env.NODE_ENV === 'production' ?'https://onlinecommunity.onrender.com' : 'http://localhost:5000';
console.log(URL,"connection url")
const socket = io(URL);

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

const animations = {
    'attackbrownhairback': attackbrownhairback,
    'attackbrownhairfront': attackbrownhairfront,
    'catchingthefishbrownhairfront': catchingthefishbrownhairfront,
    'cuttingtreebrownhairfront': cuttingtreebrownhairfront,
    'cuttingtreebrownhairback': cuttingtreebrownhairback,
    'deathbrownhairfront': deathbrownhairfront,
    'deathbrownhairback': deathbrownhairback,
    'fishbitthelinebrownhairfront': fishbitthelinebrownhairfront,
    'idlebrownhairfront': idlebrownhairfront,
    'idlebrownhairback': idlebrownhairback,
    'idlefishingbrownhairfront': idlebrownhairfront,
    'idlewithaxebrownhairfront': idlewithaxebrownhairfront,
    'idlewithaxebrownhairback': idlewithaxebrownhairback,
    'idlewithfishingrodbrownhairfront': idlewithfishingrodbrownhairfront,
    'idlewithpickaxebrownhairfront': idlewithpickaxebrownhairfront,
    'idlewithpickaxebrownhairback': idlewithpickaxebrownhairback,
    'idlewithswordbrownhairfront': idlewithswordbrownhairfront,
    'idlewithswordbrownhairback': idlewithswordbrownhairback,
    'ladderclimbbrownhairback': ladderclimbbrownhairback,
    'miningbrownhairfront': miningbrownhairfront,
    'miningbrownhairback': miningbrownhairback,
    'runbrownhairfront': runbrownhairfront,
    'runbrownhairback': runbrownhairback,
    'runwithfishingrodbrownhairfront': runwithfishingrodbrownhairfront,
    'runwithaxebrownhairfront': runwithaxebrownhairfront,
    'runwithaxebrownhairback': runwithaxebrownhairback,
    'runwithpickaxebrownhairfront': runwithpickaxebrownhairfront,
    'runwithpickaxebrownhairback': runwithpickaxebrownhairback,
    'runwithswordbrownhairfront': runwithswordbrownhairfront,
    'runwithswordbrownhairback': runwithswordbrownhairback,
    'strugglingwiththefishbrownhairfront': strugglingwiththefishbrownhairfront,
    'throwingfishingrodbrownhairfront': throwingfishingrodbrownhairfront
};


export default class TestScene extends Scene {
  constructor() {
    super('TestScene');
    this.playernames=[]
    this.players=[]
    this.rockids=[]
    this.rocks=[]
    this.treeids=[]
    this.trees=[]
    this.positiontimer=0
    this.incr=0
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
//     for (const [animationName, spritesheet] of Object.entries(animations)) {
//       console.log(animationName, animations[`${animationName}`])
//     // this.load.spritesheet(animationName, animations[`${animationName}`], { frameWidth: 32, frameHeight: 32 });
// }
    this.load.spritesheet('rock',rock,{frameWidth:180,frameHeight:194})
    this.load.spritesheet('tree',tree,{frameWidth:96,frameHeight:250})
    this.load.spritesheet('house',house,{frameWidth:150,frameHeight:150})
    this.load.image("grass",grass);

    // this.load.spritesheet('attackbrownhairback',attackbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('attackbrownhairfront',attackbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('catchingthefishbrownhairfront',catchingthefishbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('catchingthefishbrownhairback',catchingthefishbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('cuttingtreebrownhairfront',cuttingtreebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('cuttingtreebrownhairback',cuttingtreebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('deathbrownhairfront',deathbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('deathbrownhairback',deathbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('fishbitthelinebrownhairfront',fishbitthelinebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('fishbitthelinebrownhairback',fishbitthelinebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlebrownhairfront',idlebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlebrownhairback',idlebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlefishingbrownhairfront',idlebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlefishingbrownhaiback',idlefishingbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithaxebrownhairfront',idlewithaxebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithaxebrownhairback',idlewithaxebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithaxebrownhairfront',idlewithaxebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithaxebrownhairback',idlewithaxebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithfishingrodbrownhairfront',iidlewithfishingrodbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithfishingrodbrownhairback',idlewithfishingrodbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithfishingrodbrownhairfront',iidlewithfishingrodbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithfishingrodbrownhairback',idlewithfishingrodbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithpickaxebrownhairfront',idlewithpickaxebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithpickaxebrownhairback',idlewithpickaxebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithswordbrownhairfront',idlewithswordbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('idlewithswordbrownhairback',idlewithswordbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('ladderclimbbrownhairback',ladderclimbbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('miningbrownhairfront',miningbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('miningbrownhairback',miningbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runbrownhairfront',runbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runbrownhairback',runbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithfishingrodbrownhairfront',runwithfishingrodbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithfishingrodbrownhairback',runwithfishingrodbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithaxebrownhairfront',runwithaxebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithaxebrownhairback',runwithaxebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithpickaxebrownhairfront',runwithpickaxebrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithpickaxebrownhairback',runwithpickaxebrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithswordbrownhairfront',runwithswordbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('runwithswordbrownhairback',runwithswordbrownhairback,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('strugglingwiththefishbrownhairfront',strugglingwiththefishbrownhairfront,{frameWidth:32,frameHeight:32})
    // this.load.spritesheet('throwingfishingrodbrownhairfront',throwingfishingrodbrownhairfront,{frameWidth:32,frameHeight:32})

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
    this.grass=this.add.tileSprite(160, 160, 320, 320, "grass");
    this.trees=this.physics.add.staticGroup()
    this.rocks=this.physics.add.staticGroup()
    // let tileset=this.map.addTilesetImage('gentle forest (48x48 resize) v05','map image')
    // this.baselayer=this.map.createLayer("Tile Layer 1", tileset,0,0).setScale(0.25);
    // this.clifflayer=this.map.createLayer("cliffs", tileset,0,0).setScale(0.25);
    // this.clifflayer.setCollisionByExclusion(-1)


    // this.player=this.physics.add.sprite(0,0,'idlebrownhairfront').setBounce(0)
    // this.physics.add.collider(this.player, this.trees);
    // this.physics.add.collider(this.player,this.rocks);
    //
    // for (const [key, value] of Object.entries(animations)) {
    //     this.anims.create({
    //         key: key,
    //         frameRate: 10,
    //         frames: this.anims.generateFrameNumbers(value, { start: 0, end: 4 }),
    //         repeat: -1
    //     });
    // }
    //
    // this.physics.add.collider(this.player, this.clifflayer);
    // this.cameras.main.startFollow(this.player,true,1,1)
    // this.cameras.main.setFollowOffset(0,-this.player.height)
    // let name=localStorage.getItem("name")
    // socket.emit('player joining', JSON.stringify({"name":name,"x":this.player.x,"y":this.player.y}))
    // this.player.id=name



    // socket.on('updateState',(data)=>{
    //   console.log("updating global state",data)
    //   this.positiontimer=0
    //   let state=JSON.parse(data)
    //   let tempplayers=state.players
    //   let trees=state.trees
    //   let rocks=state.rocks
    //   for (let tree of trees){
    //     if (!this.treeids.includes(tree._id)){
    //       this.treeids.push(tree._id)
    //       console.log(tree,"tree")
    //       this.trees.create(tree.x,tree.y,'tree').setBodySize(32, 25).setScale(0.35).setDepth(3000)
    //     }
    //   }
    //   for (let rock of rocks){
    //     if (!this.rockids.includes(rock._id)){
    //       this.rockids.push(rock._id)
    //       console.log(rock,"rock")
    //       this.rocks.create(rock.x,rock.y,'rock').setBodySize(40, 33).setScale(0.25).setDepth(3000)
    //     }
    //   }
    //   // for (let player of tempplayers){
    //   //   if (player.id==this.player.id){
    //   //     continue
    //   //   }
    //   //   if (!this.playernames.includes(player['id'])){
    //   //     this.playernames.push(player['id'])
    //   //     let play=this.physics.add.sprite(player['x'],player['y'],'character')
    //   //     play.id=player.id
    //   //     this.players.push(play)
    //   //   }
    //   //   console.log(this.players)
    //   //   for (let play of this.players){
    //   //     console.log(play,player)
    //   //     if (play.id==player.id){
    //   //       play.direction=player.direction
    //   //       play.lastx=play.currentx
    //   //       play.lasty=play.currenty
    //   //       play.currentx=player.x
    //   //       play.currenty=player.y
    //   //       play.increx=play.currentx-play.lastx
    //   //       play.increx=play.increx/6
    //   //       play.increy=play.currenty-play.lasty
    //   //       play.increy=play.increy/6
    //   //     }
    //   //   }
    //   // }
    // })
  }
  update(time,delta){
    this.positiontimer+=1
    this.player.depth=this.player.y
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
    const cursors=this.input.keyboard.createCursorKeys()
    let moving=false
    // let direction="still"
    // this.player.setVelocity(0);
    // if(cursors.left.isDown){
    //   this.player.anims.play('left',true)
    //   this.player.setVelocityX(-200);
    //   moving=true
    //   direction="left"
    // }else if(cursors.right.isDown){
    //   this.player.anims.play('right',true)
    //   this.player.setVelocityX(200);
    //   moving=true
    //   direction="right"
    // }else if(cursors.up.isDown){
    //   this.player.anims.play('up', true)
    //   this.player.setVelocityY(-200);
    //   moving=true
    //   direction="up"
    // }else if(cursors.down.isDown){
    //   this.player.anims.play('down',true)
    //   this.player.setVelocityY(200);
    //   moving=true
    //   direction="down"
    // }
    // if (this.player.body.velocity.x==0&&this.player.body.velocity.y==0) {
    //   this.player.setFrame(0)
    //   this.player.anims.stop();
    // }
    // if(this.incr>4){
    //   this.sendstate(x,y,id,moving,direction)
    //   this.incr=0
    // }
  }
}
