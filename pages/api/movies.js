const movie = [
    {   
        "adult": false,
        "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        "genre_ids": [
        16,
        28,
        12
        ],
        "id": 569094,
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        "popularity": 1153.271,
        "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "release_date": "2023-05-31",
        "title": "Spider-Man: Across the Spider-Verse",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 3886
        },
        {
        "adult": false,
        "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
        "genre_ids": [
        28,
        12,
        878
        ],
        "id": 298618,
        "original_language": "en",
        "original_title": "The Flash",
        "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        "popularity": 1048.107,
        "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        "release_date": "2023-06-13",
        "title": "The Flash",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 2610
        },
        {
        "adult": false,
        "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        "genre_ids": [
        28,
        80,
        53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 845.692,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 3520
        },
        {
        "adult": false,
        "backdrop_path": "/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg",
        "genre_ids": [
        35,
        10749
        ],
        "id": 884605,
        "original_language": "en",
        "original_title": "No Hard Feelings",
        "overview": "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
        "popularity": 738.474,
        "poster_path": "/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg",
        "release_date": "2023-06-15",
        "title": "No Hard Feelings",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1006
        }
]

export default function handler(req, res) {
    res.status(200).json(movie);
  }
  