const URL = 'http://localhost:3000';

const post = {
    title: 'My Great Day',
    data: '23 May 2024',
    img: 'https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg',
}

export const loggedInUser = { 
    name: 'Anmol Shrivastav',
    username: 'anmol_shrivastav',
    password: '123',
    userPic: "/src/assets/a59553b51e05985c0cafba435488aec2.jpg",
    stream: 'PCM',
    followers: 5000,
    following: 124,
    likes: 1.2,
    posts: [post, post, post, post],
    flicks: [{}, {}, {}, {}, {}, {}, {}, {}]
};

export const posts = 'mt-1 p-2 hover:bg-zinc-300 duration-200 cursor-pointer select-none items-center rounded-xl';

export const quickUser = [
    {
        name: 'Ankita',
        username: 'its_ankita',
        password: '123',
        userPic: 'https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg'
    },
    {
        name: 'Ravi',
        username: 'ravi',
        password: '123',
        userPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMw1GK5SNURZW153-J14JOn2bYvKd3crfkA&usqp=CAU'
    },
    {
        name: 'Rohan',
        username: 'rohan_chas',
        password: '123',
        userPic: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Northern_Flicker_in_Prospect_Park.jpg'
    },
    {
        name: 'Preetu',
        username: 'the_preetu',
        password: '123',
        userPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkVFhzet3RRCDBBXQhtye1xoGI1IzpYn1mA&usqp=CAU'
    },
];
