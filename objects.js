var playlist = new Object({key: '0'});

function updatePlaylist(playlist, artistName, songTitle ) {
  playlist[artistName]= songTitle
  return playlist
  
}