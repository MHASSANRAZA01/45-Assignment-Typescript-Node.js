//  Question No 40: Album: Write a function called make_album() that builds a Object describing 
// a music album. The function should take in an artist name and an album title, and it should return 
// a Object containing these two pieces of information. Use the function to make three dictionaries 
// representing different albums. Print each return value to show that Objects are storing the album
// information correctly. Add an optional parameter to make_album() that allows you to store the number
// of tracks on an album. If the calling line includes a value for the number of tracks, add that value
// to the album’s Object. Make at least one new function call that includes the number of tracks on an albu.


type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating three objects representing different albums
let album1 = makeAlbum('The Beatles', 'Abbey Road');
let album2 = makeAlbum('Pink Floyd', 'The Dark Side of the Moon');
let album3 = makeAlbum('Nirvana', 'Nevermind', 12);

// Printing each album to show that they are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

// Making a new function call that includes the number of tracks on an album
let album4 = makeAlbum('Led Zeppelin', 'IV', 8);
console.log(album4);


// Print:
// { artist: 'The Beatles', title: 'Abbey Road' }
// { artist: 'Pink Floyd', title: 'The Dark Side of the Moon' }
// { artist: 'Nirvana', title: 'Nevermind', tracks: 12 }       
// { artist: 'Led Zeppelin', title: 'IV', tracks: 8 }