function buscarEndereco() {
    var cep = document.querySelector('.location-input').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('endereco').innerHTML = `
                    <p>CEP: ${data.cep}</p>
                    <p>Logradouro: ${data.logradouro}</p>
                    <p>Bairro: ${data.bairro}</p>
                    <p>Cidade: ${data.localidade}</p>
                    <p>Estado: ${data.uf}</p>
                `;
            } else {
                document.getElementById('endereco').innerHTML = 'CEP não encontrado';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar endereço:', error);
            document.getElementById('endereco').innerHTML = 'Ocorreu um erro ao buscar o endereço. Por favor, tente novamente mais tarde.';
        });
}