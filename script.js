let btnPrev=document.getElementById('previous');
let btnNext=document.getElementById('next');
let btnStart=document.getElementById('start');
let accessCard=document.getElementById('card');
let loader=document.getElementById('loading-bar')
document.body.style.backgroundColor='#000';

function time(){
    loader.style.display='none';
    document.body.style.backgroundColor='#395B64';
    btnStart.style.opacity='1';
}//loading bar process

function GameInfo(image,name,type,studio,raiting,mode){
    this.image=image;
    this.name=name;
    this.type=type;
    this.studio=studio;
    this.raiting=raiting;
    this.mode=mode;
} //Game Card constructor


let games=[
    new GameInfo('img/witcher-3.jpg','The Witcher 3: Wild Hunt', 'Action, Fantastic','CD Project Red','95','Stories Game'),
    new GameInfo('img/tomb-raider.jpg','Rise Of Tomb Raider', 'Action, Tension, Fantastic, Puzzle', 'Square Enix', '86','Stories Game'),
    new GameInfo('img/a-plague-tale.jpg','A Plague Tale: Innocence', 'History, Strategy', 'Focus Entertainment', '81', 'Stories Game'),
    new GameInfo('img/black-flag.jpg',"Assassin's Creed IV: Black Flag", 'Action, History', 'Ubisoft', '83', 'Stories Game, Online Co-op'),
    new GameInfo('img/a-way-out.jpg','A Way Out', 'Action, Excited, Puzzle','Electronic Arts', '78', 'Online Co-op, Shared/Split Screen Co-op'),
    new GameInfo('img/paper-please.jpg','Papers Please', 'Drama, Strategy', '3909', '85', 'Stories Game' )
    
] //Create game values

function Card(games){
    this.games=games;
    this.gameIndex=0;
} 

Card.prototype.showGame=function() {
    return this.games[this.gameIndex];
} // card value of index


const createGame=new Card(games); //create to new object

function show(game){
    let gImg=`<img src="${game.image}" alt="">`;
    let gHeader=`<h2><b>${createGame.gameIndex+1} )</b> ${game.name}</h2>`;
    let gType=`Game Type: <span>${game.type}</span>`;
    let gStuduio=`Publisher: <span>${game.studio}</span>`;
    let gRate=`Game Raiting from Metacritic: <span>${game.raiting}</span>`;
    let gMode=`Game Mode: <span>${game.mode}</span>`;

    document.querySelector('.card-image').innerHTML=gImg;
    document.querySelector('.card-header').innerHTML=gHeader;
    document.querySelector('.game-type').innerHTML=gType;
    document.querySelector('.game-studio').innerHTML=gStuduio;
    document.querySelector('.game-raiting').innerHTML=gRate;
    document.querySelector('.game-mode').innerHTML=gMode;

    if(createGame.gameIndex==0){
        btnPrev.style.display='none';
    }
    else if(createGame.gameIndex==5){
        btnNext.style.display='none';
    }
    else{
        btnPrev.style.display='';
        btnNext.style.display='';
    }
}// inner HTML part

btnStart.addEventListener('click', () =>{
    btnStart.style.display='none';
    accessCard.style.opacity='1';
    accessCard.style.pointerEvents='all';
    show(createGame.showGame());
    
}) //start button process

btnNext.addEventListener('click',()=>{
    
        createGame.gameIndex++;
        show(createGame.showGame());
}) //next button process

btnPrev.addEventListener('click', ()=>{

    createGame.gameIndex=createGame.gameIndex-1;
    show(createGame.showGame());
}) //previous button process


window.addEventListener('load', () =>{

    setTimeout(time, 2200);
})// loading bar duration








