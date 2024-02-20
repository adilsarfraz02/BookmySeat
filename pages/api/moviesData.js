 const moviesData =[
  {
    "adult": false,
    "backdrop_path": "/AioRI7M077BBR33VimFiyFop2Rc.jpg",
    "genre_ids": [
    28,
    12,
    53
    ],
    "id": 1149381,
    "original_language": "pl",
    "original_title": "Operacja: Soulcatcher",
    "overview": "A military contractor hired to seize a weapon that turns people into savage killers seeks revenge when his brother falls victim to the device.",
    "popularity": 587.919,
    "poster_path": "/l1f9JSPjCfNftigEii1SDK1g2b3.jpg",
    "release_date": "2023-08-02",
    "title": "Soulcatcher",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 154
    },
    {
    "adult": false,
    "backdrop_path": "/1Ju8s25F6l1K1cQRU2mHaODQvzj.jpg",
    "genre_ids": [
    28,
    12,
    10752
    ],
    "id": 961420,
    "original_language": "ja",
    "original_title": "キングダム2 遥かなる大地へ",
    "overview": "It follows a young man who dreams of becoming a general and Ying Zheng, whose goal is unification.",
    "popularity": 627.143,
    "poster_path": "/wE4NqJosSPjiyqStBEv67mQbR1b.jpg",
    "release_date": "2022-07-15",
    "title": "Kingdom 2: Far and Away",
    "video": false,
    "vote_average": 7,
    "vote_count": 24
    },
    {
    "adult": false,
    "backdrop_path": "/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg",
    "genre_ids": [
    27,
    9648,
    53
    ],
    "id": 614479,
    "original_language": "en",
    "original_title": "Insidious: The Red Door",
    "overview": "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    "popularity": 578.492,
    "poster_path": "/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    "release_date": "2023-07-05",
    "title": "Insidious: The Red Door",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 993
    },
    {
    "adult": false,
    "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    "genre_ids": [
    18,
    36
    ],
    "id": 872585,
    "original_language": "en",
    "original_title": "Oppenheimer",
    "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
    "popularity": 633.181,
    "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "release_date": "2023-07-19",
    "title": "Oppenheimer",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 2821
    }
 ]
 
 
 export default function handler(req, res) {
    res.status(200).json(moviesData);
  }