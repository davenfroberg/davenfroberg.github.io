const username = 'davenfroberg';

document.addEventListener('DOMContentLoaded', function() {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(function(datas) {
            const ul = document.getElementById("project-list");
            if (!ul) return;
            
            datas.forEach(function(data) {
                // Skip profile readme repository
                if (data.name === username) {
                    return;
                }

                const description = data.description || 'No description available';
                const li = document.createElement("li");
                const div = document.createElement("div");
                
                li.appendChild(div);
                div.appendChild(document.createTextNode(description));
                div.classList.add('project');
                li.setAttribute('id', data.name);
                
                // Add class "lastProject" to the last project added
                if (datas.indexOf(data) === datas.length - 1) {
                    li.classList.add('lastProject');
                }

                ul.appendChild(li);
                
                if (data.language != null) {
                    const language = document.createElement('div');
                    language.appendChild(document.createTextNode(data.language));
                    li.appendChild(language);
                    language.classList.add('language');
                }

                document.getElementById(data.name).addEventListener('click', function() {
                    window.open(data.html_url, '_blank');
                }, false);
            });
            
            const title = document.getElementById('title');
            if (title) {
                title.style.display = 'block';
            }
        })
        .catch(function(error) {
            console.error('Error fetching GitHub repositories:', error);
            const ul = document.getElementById("project-list");
            if (ul) {
                ul.innerHTML = '<li>Unable to load projects. Please try again later.</li>';
            }
        });
});

