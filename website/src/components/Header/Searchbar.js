import axios from "axios";
import React from "react";
import './Searchbar.css'
class Search extends React.Component {

    constructor() {
      super();
      axios('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app').then((res)=>{
            var data1=res.data
            var links=data1.map(o=>o.Display)
            var flinks=[]
            links.forEach((val)=>{
              if (!(val.length==0)){
                val.forEach((v)=>{
                  flinks.push(v)
                })
               

              }
            })
            // console.log(flinks)
            this.setState({data:flinks})
         

        })
      this.state = {
        // data: ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
        // ],
        data:['helo','melo'],
        appName: 'React Search Bar',
        links:undefined,
        list: undefined,
      }
     
    }
    searchData(e) {
      var queryData = [];
      if(e.target.value != '') {
        this.state.data.forEach(function(person) {
          // console.log(person)
  
            if(person[1].toLowerCase().indexOf(e.target.value)!=-1) {
              if(queryData.length < 10) {
                queryData.push(person);
              }
            }
        });
      }
      this.setState({list: queryData});
    }
    render() {
      return(
        <div>
          {/* <p>Search for more phrases</p> */}
          <SearchBar search={this.searchData.bind(this)} />
          {(this.state.list) ? <SearchResult data={this.state.list} /> : null  }
        </div>
      )
    }
  }
  
  class Header extends React.Component {
    render() {
      return(
        <div>
          <h1>{this.props.name}</h1>
        </div>
      )
    }
  }
  
  class SearchBar extends React.Component {
    render() {
      return(
        <div>
          {/* <input onChange={this.props.search} placeholder="Search " className="in"/> */}

           {/* <div className="one   ">
          <div className="two">
          <div className="three">
            <BsSearch className="" />

          </div>

          </div>
          <input onChange={this.props.search} placeholder="What would you like to search? " className="in" />


        </div> */}



        <div class="relative w-full">
          <input
            onChange={this.props.search}
            type="search" id="search-dropdown" class=" rounded-md block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="What would you like to search?."  />

          <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-black ">
            <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            {/* <BsSearch  /> */}
            <span class="sr-only">Search</span>
          </button>
        </div>
        </div>
      )
    }
  }
  
  class SearchResult extends React.Component {
    
    render() {
      return (
        <div>
          <ul className="udo">
            {this.props.data.map(function(value,index) {
                return <Item key={value} val={value[0]} link1={value[1]} />
            })}
          </ul>
        </div>
      )}
  

  
  }
  
  class Item extends React.Component {
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick=(e,l)=>{
      var clink = window.location.href
      var arrc=clink.split("/",e)
      arrc.pop(-1)
      arrc.pop(-1)

      var ques=e.replaceAll(" ","-")
      var redlink=arrc.join("/")+"/phrasebook/"+ques+"/"+l
      window.location.replace(redlink)

    }
    render() {
      return(
        <li className="lodo"
         onClick={()=>this.handleClick(this.props.val,this.props.link1) }
         >
          {this.props.val}
        </li>
      )
    }
  
  }
export default Search  