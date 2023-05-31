import React, {useState, useEffect} from 'react'
import ChatPage from "./../ChatPage/ChatPage"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import {Image} from 'cloudinary-react'
import {Link} from "react-router-dom";
import GroupList from '../groups/GroupList'

let info=["",
"In the last few decades wage growth has declined substantially, the cost of living increased enormously and unemployment rates have tripled. These problems have fairly straightforward solutions, we just need a political system that chooses the sorts of leaders who will pursue them. We are experimenting with a new system called Democracy-social-network",
`"In theory it was perfect equality, and even in practice it was not far from it. There is a sense in which it would be true to say that one was experiencing a foretaste of Socialism, by which I mean that the prevailing mental atmosphere was that of Socialism. Many of the normal motives of civilized life — snobbishness, money-grubbing, fear of the boss, etc. — had simply ceased to exist. The ordinary class-division of society had disappeared to an extent that is almost unthinkable in the money-tainted air of England; there was no one there except the peasants and ourselves, and no one owned anyone else as his master." -George Orwell Homage to Catalonia`,
"Our current political system was designed at a time when the maximum speed that information could travel was as fast as horses could run. This restricted how democratic organisations could be. The most practical way to organise large, complex groups of people, back then was with a top down hierarchical system, with orders being passed down from the top and spreading out exponentially. You could have an election every few years to choose the upper level leaders, but that was about as much democracy as was practical. Most businesses and the administration of the public enterprises were usually organized in a top down way. Today, the internet and computers allow much more democratic forms of organisation that are much more responsive to the needs and wants of the population but also to expert knowledge.",
"Social Media is not very democratic. Just like capitalist businesses, social media groups usually have bosses. The admins or moderators are usually not elected by or accountable to the group. They can censor anyone and anything with few real consequences. People can be removed from groups with no judicial process or explanation of any kind. Group members are usually not at all involved in creating the rules and often these are not even made explicit. All of this contributes to feelings of social anxiety among users. We have designed a new and different social network in order to try to resolve some of these problems and create more real, human connections.",
"We have designed a new, democratic social network. All group admins are elected by the groups, members can propose and vote on their own rules, and polls. Each group has a jury tab in which members can vote on restrictions for rule breakers. Elected leaders can have their authority removed at any time by the group.",
"We've designed a democratic social network with the intention of making it easier for workers to form unions or co-operatives. Admins are elected by each group and members are much more involved in creating and enforcing the rules than in most social media applications.",
"Social Networks have been demonstrated by psychologists to be harmful to our mental health, Facebook has even admitted this in court. This is largely because facebook is undemocratic. The admins of groups are usually not elected by the members, they are unaccountable to the group. They can sensor anyone or anything with practically few consequences for themselves. They can remove people from groups with no explanation. Group members are not at all involved in creating the rules and often these are not even made explicit. This leads to strong feelings of insecurity and social anxiety among Facebook Users. In a hierarchical/undemocratic organization, people are less likely to give each other the benefit of the doubt. We are all human, we are all imperfect. If there are strong imbalances of power, people will try to emphasize and focus on each other's character flaws to provide an excuse for having a higher status in the group. It makes us less willing to admit mistakes and accept criticism. Power is always illegitimate, if we define 'power' as meaning the ability to impose our own will onto other people. The Democratic Social Network aims to resolve this problem and create a more human online social environment where we can be more honest with and accepting of each other.",
"The economic situation for the vast majority of Australians has grown substantially worse since the 1970s. The unemployment rate has almost tripled, it is much harder to find and maintain consistent employment. The cost of living is much more expensive, particularly housing. Wage growth has declined substantially. We need a new kind of political system that is more democratic, more responsive to the wants and needs of the population but also to expert advice. I have built a democratic social network in order to demonstrate how computers and the internet can potentially create a much more human political system that results in much smarter group decisions that more people are happy with. We need a system where the government cannot just blatantly ignore a consensus amongst climate scientists that we are facing a global ecological catastrophe or that most of the population agree that we should do our best to resolve this problem.",
"Worker Co-operatives are democratic businesses where the workers are also the shareholders. They own and run the business, electing their own managers and directors. They decide how to distribute the profit. This form of organization is superior to Capitalist enterprise. Co-operatives tend to have a longer lifespan, are less risky to start up, workers are better paid and report safer, happier, more friendly working conditions. The democratic social network may help people to establish worker co-ops.",
"In this day and age our technology has become so advanced that there is little need to work. Within the next few decades, there will be no need. Robots exist that can grow and cook all the food you need, solar panels that can produce all the energy you need, robots that can 3d print houses for very low cost. Why is it that we still work 9 to 5, five days a week, a habit that began more than a century ago? Democracy Social Network can answer this question and provide a potential solution to the problem.",
"Do you ever wish you could be your own boss? Would you rather work with people instead of for someone? The Democracy Social Network may have some solutions."]

info.sort(() => Math.random() - 0.5);
info.sort(() => Math.random() - 0.5);
info.sort(() => Math.random() - 0.5);


export default function Home({history}){
  const [users, setUsers] = useState(false)


  useEffect(()=> {
getGroupData()
pageCounter()
  }, [])


function pageCounter(){
const options = {
  method: 'put',
  headers: {
    'Content-Type': 'application/json'
  },
  body: ''
}
fetch("/groups/addtopagecounter/home", options
).then(res => {
return res.json()
}).catch(err => {
console.error(err);
})
}

  async function getGroupData(){
    await fetch(`/groups/getusers`)
        .then(response => response.json())
        .then(data=>{
          console.log("users",data)
          setUsers(data)
        })
  }

  let randnum=Math.random()*6
    return (
      <div style={{height:"100vh",width:"100vw",overflow:"hidden",scroll:"none"}}>
      {!auth.isAuthenticated()&&<div style={{height:"100vh",width:"100vw",position:"relative",zIndex:2,overflow:"hidden"}}>
      {randnum<1&&<img className="homepageimg" src={require('./vanimgone.jpeg')} />}
      {(randnum<2&&randnum>=1)&&<img className="homepageimg" src={require('./vanimgtwo.jpg')} />}
      {(randnum<3&&randnum>=2)&&<img className="homepageimg" src={require('./vanimgthree.jpeg')} />}
      {(randnum<4&&randnum>=3)&&<img className="homepageimg" src={require('./vanimgfour.jpg')} />}
      {(randnum<5&&randnum>=4)&&<img className="homepageimg" src={require('./vanimgfive.jpg')} />}
      {(randnum<=6&&randnum>=5)&&<img className="homepageimg" src={require('./vanimgsix.jpg')} />}
      </div>}
      {auth.isAuthenticated()&&<><GroupList />
        </>}
      </div>
    )
}
