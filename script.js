const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('search-btn');
const profileContainer = document.getElementById('profile-container');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

searchBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Not Found') {
                    profileContainer.innerHTML = 'User not found.';
                } else {
                    profileContainer.innerHTML = `
                        <h2>${data.login}</h2>
                        <img src="${data.avatar_url}" alt="Profile Image" width="100">
                        <p>Name: ${data.name || 'N/A'}</p>
                        <p>Followers: ${data.followers}</p>
                        <p>Following: ${data.following}</p>
                    `;
                }
            })
            .catch(error => console.error(error));
    }
});

darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
});

