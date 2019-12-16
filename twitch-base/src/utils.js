
export const getImage = (arr) => arr.map(game => {
    let newURL = game.box_art_url.replace('{width}','150').replace('{height}','200');
    return game.box_art_url = newURL;
})


export const getThumbnail = (arr) => arr.map(stream => {
    let newURL = stream.thumbnail_url.replace('{width}','350').replace('{height}','200');
    return stream.thumbnail_url = newURL;
})




