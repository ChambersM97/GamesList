const axios = require('axios');

const homepage = require('./home-page')
const express = require('express');
const app = express();
function getAPI (res) {




module.exports = function (data) {
    axios({
        "method":"GET",
        "url":"https://chicken-coop.p.rapidapi.com/games/%7BHalf-Life%7D",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"chicken-coop.p.rapidapi.com",
        "x-rapidapi-key":"c23b869635mshbd93a4ffe3425ecp12d50bjsnae0f66b387be",
        "useQueryString":true
        },"params":{
        "platform":"pc"
        }
        })
        .then((response)=>{
       let data = {
        img : response.data.result.image,
        score : response.data.result.score,
        title : response.data.result.title,
        description : response.data.result.description,
        // user : req.user
       }
      //  let user = JSON.parse(JSON.stringify(req.user))
      // console.log(JSON.stringify(req.res.user), "req line 27 ************** user-controller");
      // console.log(res, "res ********** line 28 user-controller")
        // console.log( data, "inside of user-controller - currently working" )
        res.render("user", data)
        // res.send(data)
        })
        .catch((error)=>{
          console.log(error)
        })
        return data;

      }

      module.exports = {
        getAPI:getAPI
      }
