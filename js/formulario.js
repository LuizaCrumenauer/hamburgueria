$('#form-pedidos').submit(function(event) {
    event.preventDefault();  // previne o comportamento padrão de envio do formulário
    var nome = $('#nome');
    var email = $('#email');
    var telefone = $('#telefone');
    var endereco = $('#endereco');
    var cidade = $('#cidade');
    var estado = $('#estado');
    var cep = $('#cep');
    var ddd = $('#ddd');
    var erro = $('.alert');
    var campo = $('#campo-erro');
    var pedido = $('#pedido');
    var quantidade = $('#quantidade');
    const nomeHamburgueria = 'Burger Haven'; // Substitua pelo nome da sua hamburgueria
    erro.addClass('d-none');  // remove o elemento da tela sempre q tentar submeter o formulario
    $('.is-invalid').removeClass('is-invalid');

    var valid = true;

    if (nome.val() == '' ){
        erro.removeClass('d-none');
        campo.html('Nome'); // nome do campo q nao foi preenchido
        nome.focus()  //coloca o cursor onde nao foi preenchido
        nome.addClass('is-invalid');
        valid = false;
        return false;
    }
    nome.addClass('is-valid');

    if (email.val() == '' ){
        erro.removeClass('d-none');
        campo.html('email'); // nome do campo q nao foi preenchido
        email.focus()  //coloca o cursor onde nao foi preenchido
        email.addClass('is-invalid');
        valid = false;
        return false;
    }
    email.addClass('is-valid');

    if (telefone.val() == '' ){
        erro.removeClass('d-none');
        campo.html('Telefone'); // nome do campo q nao foi preenchido
        telefone.focus()  //coloca o cursor onde nao foi preenchido
        telefone.addClass('is-invalid');
        valid = false;
        return false;
    }
    telefone.addClass('is-valid');

    if (ddd.val() == '' ){
        erro.removeClass('d-none');
        campo.html('DDD'); // nome do campo q nao foi preenchido
        ddd.focus()  //coloca o cursor onde nao foi preenchido
        ddd.addClass('is-invalid');
        valid = false;
        return false;
    }
    ddd.addClass('is-valid');

    if (endereco.val() == '' ){
        erro.removeClass('d-none');
        campo.html('Endereço'); // nome do campo q nao foi preenchido
        endereco.focus()  //coloca o cursor onde nao foi preenchido
        endereco.addClass('is-invalid');
        valid = false;
        return false;
    }
    endereco.addClass('is-valid');

    if (cidade.val() == '' ){
        erro.removeClass('d-none');
        campo.html('Cidade'); // nome do campo q nao foi preenchido
        cidade.focus()  //coloca o cursor onde nao foi preenchido
        cidade.addClass('is-invalid');
        valid = false;
        return false;
    }
    cidade.addClass('is-valid');
    
    if (cep.val() == '' ){
        erro.removeClass('d-none');
        campo.html('CEP'); // nome do campo q nao foi preenchido
        cep.focus()  //coloca o cursor onde nao foi preenchido
        cep.addClass('is-invalid');
        valid = false;
        return false;
    }
    cep.addClass('is-valid');

    if (estado.val() == '' || estado.val() <= 0) {
        erro.removeClass('d-none');
        campo.html('Estado'); // nome do campo que não foi preenchido
        estado.focus();  // coloca o cursor onde não foi preenchido
        estado.addClass('is-invalid');
        valid = false;
        return false;
    }
    estado.addClass('is-valid'); //bota isso depois do if sempre 

    if (pedido.val() === '' || pedido.val() <= 0) {
        erro.removeClass('d-none');
        campo.html('Hambúrguer'); // nome do campo que não foi preenchido
        pedido.focus();  // coloca o cursor onde não foi preenchido
        pedido.addClass('is-invalid');
        valid = false;
        return false;
    }
    pedido.addClass('is-valid');

    if (quantidade.val() == '' || quantidade.val() <= 0) {
        erro.removeClass('d-none');
        campo.html('Quantidade'); // nome do campo que não foi preenchido
        quantidade.focus();  // coloca o cursor onde não foi preenchido
        quantidade.addClass('is-invalid');
        valid = false;
        return false;
    }
    quantidade.addClass('is-valid');

     // Se todos os campos estão válidos, submeter o formulário
     if (valid) {
        // Atraso 400 milissegundos antes de exibir o alerta e enviar o formulário
        setTimeout(() => {
            alert('Formulário enviado com sucesso! Agradecemos a preferência. Você será redirecionado para a Home da página Haven Burger...');
            // Envia o formulário manualmente após o atraso
            this.submit();
            // Redireciona após o alerta
            window.location.href = '../index.html';
        }, 400);
    }
});