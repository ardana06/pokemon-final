var data = {
    "abilities": [
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      },
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
    "base_experience": 64,
    "forms": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
      }
    ],
    "height": 7,
    "id": 1,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "moves": [
      {
        "move": {
          "name": "razor-wind",
          "url": "https://pokeapi.co/api/v2/move/13/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          }
        ]
      }
      ],
  
    "name": "bulbasaur",
    "order": 1,
    "species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "stats": [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "weight": 69
  }

//1 шаг
    let weightStr = data.weight .toString(); //числа превращает стринг
    console.log(weightStr);

    let heightStr = data.height.toString();
    console.log(heightStr);

    //2 шаг
    let weightNum = parseInt(weightStr);//из числовых в стринг
    console.log(weightNum);
    let heightNum = Number(heightStr);
    console.log(heightNum);
    let result = weightNum/Math.pow(heightNum, 2);
    console.log(result); //.toFixed(2) после резалт, фиксирует точную цифру

  //3 шаг

  let name = data.name
  console.log(name);

  let nameLen = name.length;

  let upName = name.toUpperCase(); //сделал буквы заглавными
  console.log(upName); 


  //4 шаг
  let checkName = name.includes("bulba"); 
  console.log(checkName);

  //5 шаг
    let name1 = name.slice(0,2);
    console.log(name1);

    let name2 = name.slice(-2);
    console.log(name2);

  //6 шаг
    let adding = name1.concat(name2); //метод который складывает 
    console.log(adding);

  //7 шаг
    let types = data.types;
    console.log(types[0].type.name);
    console.log(types[1].type.name);

    for (let i=0; i<types.length; i++){
        console.log(types[i].type.name);
        
    }

    //или это можно
    for (let el of types){
        console.log(el.type.name);
        
    } //ES6 "forOf" loop
  

    //8 шаг
    let abilities = data.abilities;
    console.log(Array.isArray(abilities)); //Array - массив на англ
    
    //9 шаг

    let lastEl = data.abilities[abilities.length-1].ability.name;
    console.log(lastEl);
    

    //10 шаг
    abilities.push(lastEl);
    console.log(abilities);

    //11 шаг
    for(let i=0; i<data.stats.length; i++){
        console.log(data.stats[i].base_stat);
        
    }
    

    for (let el of data.stats){  //el - элемент
        console.log(el.base_stat, 'for of loop'); 
        
    }

    //12 шаг
    let newArr = [];
    for(let i=0; i<data.stats.length; i++){
        newArr.push(data.stats[i].base_stat);
    }
    console.log(newArr);

    //for (el of data.stats){
    //    if (el.base_stat > 47){
    //        newArr.push(el.base_stat);
    //    }
    //}
    //console.log(newArr);


    //13 шаг
    let reversed = newArr.reverse().join(' ');
    console.log(reversed);
    

    //14 шаг
    let shallowCopy = data.stats.slice(0, 2); 
    console.log(shallowCopy);
    

    //15 шаг
    data.stats.splice(0, 1, { base_stat: "Ardana" });
    console.log(data.stats);


    //16 шаг
    document.querySelector("#pokemon-name").innerHTML = data.forms[0].name;
    document.querySelector("#pokemon-avatar").src = data.sprites.front_default;
    document.querySelector("#info").innerHTML = `height: ${data.height}, weight: ${data.weight}`;

    document.querySelector("div").innerHTML += `<img src="${data.sprites.back_default}">`;