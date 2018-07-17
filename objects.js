var playlist = new Object({ artistNames: 'songTitle'})

function updatePlaylist(playlist, artistNames, songTitle ) {
  playlist[artistName]= songTitle
  return playlist
  
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}