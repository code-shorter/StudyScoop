const APIURL = 'http://localhost:3000';

export const comment = {
    userId: 'anmol_shrivastav',
    date: '23 May 2024',
    period: '3w',
    userComment: 'Wow very beautiful :(^^);',
    likes: 0,
    likedBy: [],
    userPic: 'https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg',
}

export const post = [
    {
        postId: '32rnttvtmv356bop',
        userId: 'anmol_shrivastav',
        userName: 'Anmol Shrivastav',
        title: 'My Great Day 1',
        date: '23 May 2024',
        comments: [comment, comment, comment],
        likes: 0,
        likedBy: [],
        img: ['https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg', 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'],
    },
    {
        postId: 'fvfgbgfhb67544w',
        userId: 'anmol_shrivastav',
        userName: 'Anmol Shrivastav',
        title: 'My Great Day 2',
        date: '23 May 2024',
        comments: [comment, comment, comment],
        likes: 0,
        likedBy: [],
        img: ['https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg'],
    },
    {
        postId: 'crnejt6yko65wc',
        userId: 'anmol_shrivastav',
        userName: 'Anmol Shrivastav',
        title: 'My Great Day 3',
        date: '23 May 2024',
        comments: [comment, comment, comment],
        likes: 0,
        likedBy: [],
        img: ['https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg'],
    },
    {
        postId: 'nucnut54u56',
        userId: 'anmol_shrivastav',
        userName: 'Anmol Shrivastav',
        title: 'My Great Day 4',
        date: '23 May 2024',
        comments: [comment, comment, comment],
        likes: 0,
        likedBy: [],
        img: ['https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg'],
    },
    {
        postId: 'vhbt45yt66',
        userId: 'anmol_shrivastav',
        userName: 'Anmol Shrivastav',
        title: 'My Great Day 5',
        date: '23 May 2024',
        comments: [comment, comment, comment],
        likes: 0,
        likedBy: [],
        img: ['https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg'],
    },
    {
        postId: 'rbvthtyn6444',
        userId: 'anmol_shrivastav',
        userName: 'Anmol Shrivastav',
        title: 'My Great Day 6',
        date: '23 May 2024',
        comments: [comment, comment, comment],
        likes: 0,
        likedBy: [],
        img: ['https://cdn4.sharechat.com/img_261734_8192fb9_1668698257657_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=657_sc.jpg'],
    }
]


export const users = [
    {
        name: 'Pragati Shrivastav',
        username: 'pragati_shrivastav',
        password: '123',
        userPic: "/src/assets/a59553b51e05985c0cafba435488aec2.jpg",
        stream: 'PCM',
        followers: 1,
        following: 124,
        likes: 1.2,
        posts: [{
            postId: 'rbcdvtb6444',
            userId: 'pragati_shrivastav',
            userName: 'Pragati Shrivastav',
            title: 'Hello Scoopers',
            date: '08 May 2024',
            comments: [comment, comment, comment],
            likes: 0,
            likedBy: [],
            img: ['https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'],
        }],
        flicks: [{}, {}, {}, {}, {}, {}, {}, {}]
    },
    {
        name: 'Anmol Shrivastav',
        username: 'anmol_shrivastav',
        password: '123',
        userPic: "/src/assets/a59553b51e05985c0cafba435488aec2.jpg",
        stream: 'PCM',
        followers: 5000,
        following: 124,
        likes: 1.2,
        posts: post,
        flicks: [{}, {}, {}, {}, {}, {}, {}, {}]
    }
]

export const loggedInUser = {
    name: 'Anmol Shrivastav',
    username: 'anmol_shrivastav',
    password: '123',
    userPic: "/src/assets/a59553b51e05985c0cafba435488aec2.jpg",
    stream: 'PCM',
    followers: 5000,
    following: 124,
    likes: 1.2,
    posts: post,
    msgUsers: [],
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
