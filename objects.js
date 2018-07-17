var playlist = new Object({ artistNames: 'songTitle'})

function updatePlaylist(playlist, artistNames, songTitle ) {
  playlist[artistNames]= songTitle
  return playlist
  
}

function removeFromPlaylist(playlist, artistNames) {
  delete playlist[artistNames]
  return playlist
}