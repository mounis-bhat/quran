const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const setSongHandler = async () => {
    await setCurrentSong(song);
    // audioRef.current.play();
    //add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={setSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
