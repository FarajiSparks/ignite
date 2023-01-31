

//Base URL
const base_url = "https://api.rawg.io/api/";
const apiKey = '7d5a9f518ccb40e5ae211c49b50d4891';

//Getting month
const getCurrentMonth = () =>{
    const month = new Date().getMonth() + 1;
    if(month < 10){
       return `0${month}` 
    } else{
        return month
    }
}

//Getting day
const getCurrentDay = () =>{
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}` 
     } else{
         return day
     }
}

//Date to variable assignment
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//Full date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
console.log(currentDate);

//Last year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;



//Popular Games
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;


