$(function() {
    // socket iniciado
    var socket = io();
    // variables
    var message = $('#chat-message');
    var chat = $('#chat');

    message.focus();

    $('#message-box').submit(function(e) {
        e.preventDefault();
        socket.emit('mensaje-del-cliente', message.val());
        // chat.append(message.val() + "</br>");
        message.val('');
    });

    socket.on('mensaje-del-servido', function(data) {
        chat.append(data + '</br>');
    });
});