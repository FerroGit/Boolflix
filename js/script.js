//             my API
//  309afea0efaa1c9d9b55159afbf24dde

/* const api = "309afea0efaa1c9d9b55159afbf24dde";*/

var app = new Vue({
  
  el: "#app",
  
  data: {
    filterTvMovies: [],
    filterGenre: [],
    urlMovie : "https://api.themoviedb.org/3/search/movie?api_key=",
    urlSerieTv : "https://api.themoviedb.org/3/search/tv?api_key=",
    api: "309afea0efaa1c9d9b55159afbf24dde",
    searchKey: "",
    selectGenre: ""
  },

  methods: {
    filter: function() {

      const requestMovie = axios.get(this.urlMovie + this.api + "&query=" + this.searchKey);
      const requestTvSeries = axios.get(this.urlSerieTv + this.api + "&query=" + this.searchKey);

      axios.all([requestMovie, requestTvSeries])
      .then(axios.spread((...response) => {
        this.searchKey="";
        this.filterTvMovies = [...response[0].data.results, ...response[1].data.results]
      })).catch(errors => {
        console.log("this is error:", errors);
      })
    },
  /*  filterGenre: function(){
 const requestlGenreTv = axios.get(this.urlGenreTv + this.api + "&query=" + this.selectGenre);
 const requestlGenreMovies = axios.get(this.urlGenreMovies + this.api + "&query=" + this.selectGenre);

 axios.all([requestlGenreMovies, requestlGenreTv])
   .then(axios.spread((...response) => {
     this.selectGenre = "";
     this.filterGenre = [...response[0].data.results, ...response[1].data.results]
   })).catch(errors => {
     console.log("this is error:", errors);
   })
}, */
    ratingVote: function (number) {
      return Math.ceil(number / 2);
    },
    refreshPage: function() {
      location.reload();
    }
  },
}) 