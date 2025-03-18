// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    // Obtener todos los nombres de la lista de amigos
    const amigos = Array.from(listaAmigos.getElementsByTagName('li')).map(li => li.textContent);

    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos en la lista para sortear.</li>';
        return;
    }

    // Seleccionar un amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el amigo sorteado en la lista de resultados
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('El amigo ya está en la lista.');
        return;
    }

    amigos.push(nombreAmigo);
    mostrarAmigos();
    input.value = '';
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos en la lista para sortear.</li>';
        return;
    }

    // Seleccionar un amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el amigo sorteado en la lista de resultados
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}