var tmpl = require('tmpl');



function encrypt_reply(encrypt_data, params,cryptor) {

	var new_msg_signature = cryptor.getSignature(params.timestamp, params.nonce, encrypt_data); //msg_signature��Ҫ�������ɡ�

	var replyTmpl = '<xml>' +
		'<Encrypt><![CDATA[{msg_encrypt}]]></Encrypt>' +
		'<MsgSignature><![CDATA[{msg_signature}]]></MsgSignature>' +
		'<TimeStamp>{timestamp}</TimeStamp>' +
		'<Nonce><![CDATA[{nonce}]]></Nonce>' +
		'</xml>';

	//��Ҫ���ص���Ϣͨ��һ���򵥵�tmplģ�壨npm install tmpl������΢��

	return tmpl(replyTmpl, {
		msg_encrypt : encrypt_data,
		msg_signature : new_msg_signature,
		timestamp : params.timestamp,
		nonce : params.nonce

	});

}

module.exports = {
	encrypt_reply : encrypt_reply
};
