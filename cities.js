const cities = [
    {
        id: 1,
        name: "New York City",
        country: "United States",
        language: "English",
        currency: "US Dollar",
        population: 8538000,
        description: "New York City, often simply referred to as NYC, is a vibrant and iconic metropolis known for its towering skyscrapers, bustling Times Square, and world-class cultural institutions. Explore Central Park, take in the views from the Empire State Building, and immerse yourself in diverse neighborhoods like Chinatown, Harlem, and Greenwich Village. From Broadway theaters to the historic Statue of Liberty, this city offers endless opportunities for discovery and excitement.",
        area: 468.9,
        coordinates: { latitude: 40.7128, longitude: -74.0060 },
        image: "https://media.istockphoto.com/id/615398376/es/foto/ciudad-de-nueva-york-nueva-york-ee-uu.jpg?s=612x612&w=0&k=20&c=rquIR02ghJklx2_GXAT84n9QwBvT2x5gVvlPjJ5kJc4="
    },
    {
        id: 2,
        name: "London",
        country: "United Kingdom",
        language: "English",
        currency: "British Pound",
        population: 8982000,
        description: "London, the capital of the United Kingdom, is a city steeped in history and culture. Marvel at the architectural marvels like the Tower of London and Buckingham Palace. Wander along the River Thames and enjoy world-class museums, including the British Museum and the Tate Modern. Explore the trendy neighborhoods of Shoreditch and Notting Hill, and don't miss the vibrant theater scene of the West End. With its mix of tradition and modernity, London offers a rich and diverse experience for visitors.",
        area: 1572,
        coordinates: { latitude: 51.5074, longitude: -0.1278 },
        image: "https://www.homeviews.com/wp-content/uploads/2022/09/best-places-to-live-london-1980x1137.jpg?x82608"
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        language: "Japanese",
        currency: "Japanese Yen",
        population: 13929286,
        description: "Tokyo, the capital of Japan, is a futuristic city that seamlessly blends tradition and innovation. Explore the bustling streets of Shibuya, visit the tranquil Meiji Shrine, and indulge in authentic sushi at Tsukiji Market. Discover the latest technological wonders in Akihabara and experience the serene beauty of cherry blossoms in Ueno Park. With its neon-lit skyline, historic temples, and lively street culture, Tokyo offers a unique and captivating urban adventure.",
        area: 2187.66,
        coordinates: { latitude: 35.6895, longitude: 139.6917 },
        image: "https://media.istockphoto.com/id/484915982/es/foto/akihabara-tokyo.jpg?s=612x612&w=0&k=20&c=Hsa0GKjrq4GaRUTZsWVvNBkB5LoJ_UXX8Ax7KtRu5a0="
    },
    {
        id: 4,
        name: "Sydney",
        country: "Australia",
        language: "English",
        currency: "Australian Dollar",
        population: 5312163,
        description: "Sydney, Australia's largest city, boasts stunning beaches such as Bondi and Manly, along with iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge. Explore the Royal Botanic Garden, indulge in seafood at Darling Harbour, and take in breathtaking views from the Sydney Tower Eye. With its sunny climate and vibrant culture, Sydney offers a laid-back yet cosmopolitan lifestyle by the sea.",
        area: 2058.7,
        coordinates: { latitude: -33.8688, longitude: 151.2093 },
        image: "https://media.istockphoto.com/id/697054346/es/foto/casa-de-%C3%B3pera-de-sydney-skyline-de-australia-ver.jpg?s=612x612&w=0&k=20&c=GFVk9ZLiprkFvY_AeXlR68nKRDValRQZph-WqnmjS48="
    },
    {
        id: 5,
        name: "Paris",
        country: "France",
        language: "French",
        currency: "Euro",
        population: 2140526,
        description: "Paris, the City of Light, exudes romance and culture. Admire the Eiffel Tower, stroll along the Seine River, and explore the Louvre Museum's world-class art collection. Enjoy croissants at a sidewalk café, visit the Notre-Dame Cathedral, and immerse yourself in the bohemian atmosphere of Montmartre. With its elegant boulevards, historic charm, and culinary delights, Paris is a dream destination for travelers.",
        area: 105.4,
        coordinates: { latitude: 48.8566, longitude: 2.3522 },
        image: "https://media.istockphoto.com/id/490360464/es/foto/la-gente-disfruta-de-un-coche-de-d%C3%ADa-en-par%C3%ADs-francia.jpg?s=612x612&w=0&k=20&c=Wjhv9iAQRkqUNwBv9T_XiSqeMY9b26g8aXtnkw88CE8="
    },
    {
        id: 6,
        name: "Toronto",
        country: "Canada",
        language: "English",
        currency: "Canadian Dollar",
        population: 2930000,
        description: "Toronto, Canada's largest city, is a cultural mosaic with diverse neighborhoods like Kensington Market and Chinatown. Discover iconic landmarks like the CN Tower and Royal Ontario Museum. Stroll along the waterfront, explore the Distillery District, and enjoy international cuisine in this dynamic urban hub.",
        area: 630.2,
        coordinates: { latitude: 43.651070, longitude: -79.347015 },
        image: "https://media.istockphoto.com/id/615278208/es/foto/royal-ontario-museum-toronto.jpg?s=612x612&w=0&k=20&c=CpCv6yYCQuVrHC-C248RetKLviaLtVjpexVWWSda4go="
    },
    {
        id: 7,
        name: "Berlin",
        country: "Germany",
        language: "German",
        currency: "Euro",
        population: 3748000,
        description: "Berlin, the capital of Germany, is a city of history, art, and innovation. Explore remnants of the Berlin Wall, visit the Brandenburg Gate, and immerse yourself in the vibrant art scene. Wander through the trendy neighborhoods of Kreuzberg and Friedrichshain, and experience the city's dynamic nightlife and cultural diversity.",
        area: 891.7,
        coordinates: { latitude: 52.5200, longitude: 13.4050 },
        image: "https://media.istockphoto.com/id/500409221/es/foto/vista-a-la-calle-en-brunnenstrasse-mitte-district-berl%C3%ADn.jpg?s=612x612&w=0&k=20&c=B_i3O9DyfUOqVxywLdAO1Evp7PEdOf2BNtV7MwPEfjQ="
    },
    {
        id: 8,
        name: "Dubai",
        country: "United Arab Emirates",
        language: "Arabic",
        currency: "UAE Dirham",
        population: 3137000,
        description: "Dubai, a modern oasis in the desert, is known for its futuristic skyline, luxurious shopping malls, and opulent lifestyle. Visit the iconic Burj Khalifa, explore indoor ski slopes, and relax on pristine beaches. Experience the traditional souks and the dazzling Dubai Fountain show, making this Middle Eastern gem a unique blend of tradition and extravagance.",
        area: 4114,
        coordinates: { latitude: 25.276987, longitude: 55.296249 },
        image: "https://media.istockphoto.com/id/1193239486/es/foto/foto-diurna-del-hotel-burj-al-arab.jpg?s=612x612&w=0&k=20&c=j06w0BlxuE6_UgAZSaT8XW0jNIxQawtTrpttlefrKyc="
    },
    {
        id: 9,
        name: "Sao Paulo",
        country: "Brazil",
        language: "Portuguese",
        currency: "Brazilian Real",
        population: 12252023,
        description: "São Paulo, Brazil's largest city, is a bustling metropolis known for its vibrant culture, diverse neighborhoods, and energetic nightlife. Experience the excitement of Paulista Avenue, explore cultural institutions like MASP, and savor Brazilian cuisine at local eateries. With its bustling markets, street art scene, and endless entertainment options, São Paulo offers a taste of urban Brazilian life.",
        area: 1521,
        coordinates: { latitude: -23.550520, longitude: -46.633308 },
        image: "https://media.istockphoto.com/id/1150728993/es/foto/la-gente-dando-un-paseo-en-la-avenida-paulista-la-principal-atracci%C3%B3n-tur%C3%ADstica-en-sao-paulo.jpg?s=612x612&w=0&k=20&c=NJqEvMOIdj4u1aS0vZkI_HcuCoyxGAzvhhWTBfPMx4U="
    },
    {
        id: 10,
        name: "Moscow",
        country: "Russia",
        language: "Russian",
        currency: "Russian Ruble",
        population: 11920000,
        description: "Moscow, the capital of Russia, is a city where history, culture, and grandeur collide. Marvel at the iconic Red Square, explore the historic Kremlin and St. Basil's Cathedral, and immerse yourself in the world-class art at the Tretyakov Gallery. Experience the opulent Moscow Metro stations and enjoy Russian ballet and theater performances.",
        area: 2511,
        coordinates: { latitude: 55.7558, longitude: 37.6173 },
        image: "https://media.istockphoto.com/id/913688454/es/foto/rusia-mosc%C3%BA-catedral-de-san-basilio.jpg?s=612x612&w=0&k=20&c=LOSGGazKDI-Oekkjj6XRZxwJizxc-E8HeuqBY1xTYcA="
    },
    {
        id: 11,
        name: "Beijing",
        country: "China",
        language: "Mandarin",
        currency: "Chinese Yuan",
        population: 21540000,
        description: "Beijing, the capital of China, is a city of ancient wonders and modern marvels. Explore the monumental Forbidden City, climb the Great Wall of China, and visit the Temple of Heaven. Immerse yourself in traditional hutongs and experience the fusion of history and progress in this dynamic Asian capital.",
        area: 16410.54,
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
        image: "https://media.istockphoto.com/id/483339350/es/foto/la-puesta-de-sol-circuitos-cerrados-de-televisi%C3%B3n-es-muy-espectacular.jpg?s=612x612&w=0&k=20&c=A66R7QCHKREVilrxZtQrxnInx6zGuyuy-MZ6HRt5wHM="
    },
    {
        id: 12,
        name: "Rome",
        country: "Italy",
        language: "Italian",
        currency: "Euro",
        population: 2873000,
        description: "Rome, the Eternal City, is a living museum of ancient history and architecture. Marvel at the Colosseum, explore the Vatican City with St. Peter's Basilica and the Sistine Chapel, and make a wish at the Trevi Fountain. Enjoy traditional Italian cuisine in charming piazzas and immerse yourself in the heart of Western civilization.",
        area: 1285,
        coordinates: { latitude: 41.9028, longitude: 12.4964 },
        image: "https://media.istockphoto.com/id/1336432274/es/foto/peque%C3%B1o-viejo-fiat-500-rojo-frente-al-coliseo-al-atardecer.jpg?s=612x612&w=0&k=20&c=B6HA-gCNi3XdMHmrZRVCfBF7oUOPcs0VSKSayfLCpqg="
    },
    {
        id: 13,
        name: "Cairo",
        country: "Egypt",
        language: "Arabic",
        currency: "Egyptian Pound",
        population: 10000000,
        description: "Cairo, the capital of Egypt, is a city of ancient wonders and vibrant street life. Discover the Pyramids of Giza and the Sphinx, explore historic mosques and bustling markets, and cruise along the Nile River. Immerse yourself in the rich history and culture of this North African metropolis.",
        area: 606,
        coordinates: { latitude: 30.0444, longitude: 31.2357 },
        image: "https://media.istockphoto.com/id/1200375164/es/foto/calle-el-cairo-con-vistas-a-la-pir%C3%A1mide.jpg?s=612x612&w=0&k=20&c=eNUUc-MyG0_TKhYiAfxTMx4PmDJnlcAlLoo82fSXjrw="
    },
    {
        id: 14,
        name: "Buenos Aires",
        country: "Argentina",
        language: "Spanish",
        currency: "Argentine Peso",
        population: 2891000,
        description: "Buenos Aires, the vibrant capital of Argentina, is a city of tango, art, and rich history. Explore the colorful streets of La Boca, visit the iconic Obelisco, and indulge in traditional Argentine steaks. Wander through the elegant neighborhood of Recoleta and enjoy the bohemian atmosphere of San Telmo. With its European flair and lively cultural scene, Buenos Aires invites you to experience its passionate spirit.",
        area: 203,
        coordinates: { latitude: -34.6118, longitude: -58.4173 },
        image: "https://media.istockphoto.com/id/994383204/es/foto/vista-a%C3%A9rea-de-buenos-aires-y-av-9-de-julio-buenos-aires-argentina.jpg?s=612x612&w=0&k=20&c=c7pqcLGeQNefp2mK8aD3GQke0Wi0z5W0hrfIPBXc4xs="
    },

    {
        id: 15,
        name: "Seoul",
        country: "South Korea",
        language: "Korean",
        currency: "South Korean Won",
        population: 9776000,
        description: "Seoul, the vibrant capital of South Korea, is a city of contrasts and harmonies. Explore the historic Gyeongbokgung Palace and modern skyscrapers of Gangnam District. Immerse yourself in the world of K-pop and enjoy traditional dishes like bibimbap. Wander through colorful markets, hike in Bukhansan National Park, and experience the tranquility of Buddhist temples. With a rich blend of tradition, pop culture, and natural beauty, Seoul invites you to discover its many facets.",
        area: 605.2,
        coordinates: { latitude: 37.5665, longitude: 126.9780 },
        image: "https://media.istockphoto.com/id/886693380/es/foto/calles-con-luces-de-ne%C3%B3n-signo-lumino.jpg?s=612x612&w=0&k=20&c=1IIvtm0Z7iXu6yrTHP9dEI43l_Tln7Zqt8X4Yt_JTc0="
    }
];




export default cities