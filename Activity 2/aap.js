// Get references to DOM elements
const songList = document.getElementById('songList');
const searchInput = document.getElementById('searchInput');
const addSongForm = document.getElementById('addSongForm');
const songTitleInput = document.getElementById('songTitle');
const songArtistInput = document.getElementById('songArtist');
const addButton = document.getElementById('add');

// Function to create a new song item
function createSongItem(title, artist) {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'bg-light', 'text-dark');

  const songTitle = document.createElement('p');
  songTitle.innerText = title;

  const songArtist = document.createElement('small');
  songArtist.classList.add('d-block', 'text-muted');
  songArtist.innerText = artist;

  const deleteButton = document.createElement('span');
  deleteButton.classList.add('badge', 'bg-danger', 'btn-delete');
  deleteButton.innerText = 'Delete';
  
  // Add delete functionality
  deleteButton.addEventListener('click', function () {
    songList.removeChild(li);
  });

  li.appendChild(songTitle);
  li.appendChild(songArtist);
  li.appendChild(deleteButton);

  return li;
}

// Add new song to the list
addButton.addEventListener('click', function () {
  const title = songTitleInput.value.trim();
  const artist = songArtistInput.value.trim();

  if (title && artist) {
    const newSong = createSongItem(title, artist);
    songList.appendChild(newSong);

    // Clear input fields after adding
    songTitleInput.value = '';
    songArtistInput.value = '';
  }
});

// Search songs
searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  const songs = songList.getElementsByTagName('li');

  Array.from(songs).forEach(function (song) {
    const title = song.getElementsByTagName('p')[0].innerText.toLowerCase();
    const artist = song.getElementsByTagName('small')[0].innerText.toLowerCase();

    if (title.includes(searchTerm) || artist.includes(searchTerm)) {
      song.style.display = '';
    } else {
      song.style.display = 'none';
    }
  });
});

// Add delete functionality to initial songs
document.querySelectorAll('.btn-delete').forEach(function (button) {
  button.addEventListener('click', function () {
    const songItem = this.parentElement;
    songList.removeChild(songItem);
  });
});
