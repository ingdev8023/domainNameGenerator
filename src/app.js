/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our', 'such', 'that', 'these', 'this', 'those'];
  let adj = ['great', 'big', 'attractive', 'bald','beautiful','chubby','clean',
  'dazzling','drab','elegant','fancy','fit','glamorous','gorgeous','handsome','long',
  'magnificent','short','skinny','stocky'];
  let noun = ['jogger', 'racoon', 'Actor', 'Gold','Painting','Advertisement','Grass','Parrot','Afternoon',
   'Pencil','Airport','Guitar','Piano','Pillow','Animal','Hamburger','Pizza','Answer','Helicopter','Planet',
   'Apple','Helmet','Plastic','Army','Holiday'];
  let extension = ['.com', '.us', '.net', '.io', '.gov']
  let allTheDomains = [];
  for(let i = 0; i < pronoun.length; i++){
    for(let j = 0; j < adj.length; j++){
      for(let k= 0; k < noun.length; k++){
        for(let l = 0; l < extension.length; l++){
          allTheDomains.push(pronoun[i]+adj[j]+noun[k]+extension[l])
        }
      }
    }
  }
  console.log(allTheDomains);
};
