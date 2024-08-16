var xhr = new XMLHttpRequest(); 

document.querySelector('button').addEventListener('click', function() {
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onreadystatechange = function() { 
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText); 
            console.log(users);
            
            let list = document.getElementById('list');
            let ul = document.createElement('ul');
            list.appendChild(ul);

            users.forEach(function(user) {
                let li = document.createElement('li');
                li.textContent = user.name;
                ul.appendChild(li);
            });
        }
    };

    xhr.send(); 
});
