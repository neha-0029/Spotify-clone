const music = new Audio('audio/2.mp3');
// music.play();



const songs = [{
    id: 1,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 2,
    songName: 'Likhe jo khat tujhe <br><div class="subtitle">Mohammad Rafi</div>',
    poster: "img/img2.jpg"
},

{
    id: 3,
    songName: 'Faded <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img3.jpg"
},

{
    id: 4,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 5,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 6,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 7,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 8,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 9,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 10,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 11,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 12,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 13,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 14,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 15,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 16,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 17,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
},

{
    id: 18,
    songName: 'On My Way <br><div class="subtitle">Alan Walker</div>',
    poster: "img/img/img1.jpg"
}
]



















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () =>{

    pop_song.scrollLeft += 100;
}
)

pop_song_left.addEventListener('click', () =>{

    pop_song.scrollLeft -= 100;
}
);

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () =>{
    item.scrollLeft += 58;
}
)

pop_art_left.addEventListener('click', () =>{

    item.scrollLeft -= 58;
}
);

