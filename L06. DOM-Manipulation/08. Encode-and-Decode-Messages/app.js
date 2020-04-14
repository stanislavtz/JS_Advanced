function encodeAndDecodeMessages() {
    const $divs = document.querySelectorAll('main div textarea');
    const $buttons = document.querySelectorAll('button');

    const $encodeTextArea = $divs[0];
    const $decodeTextArea = $divs[1];

    const $encodeButton =  $buttons[0];
    const $decodeButton =  $buttons[1];

    $encodeButton.addEventListener('click', encodeText);
    $decodeButton.addEventListener('click', decodeText);

    function encodeText(e){
        let text = $encodeTextArea.value;
        let encodedText = encodeAndDecode(text, 1);
        $decodeTextArea.value = encodedText;
        $encodeTextArea.value = '';
    }

    function decodeText(e){
        let text = $decodeTextArea.value;
        let decodedText = encodeAndDecode(text, -1);
         $decodeTextArea.value = decodedText;
         $decodeButton.removeEventListener('click', decodeText);
    }

    function encodeAndDecode(text, code) {
        let codedText = '';
        for (let i = 0; i < text.length; i++) {
            let currentAscii = +text.charCodeAt(i);
            codedText += String.fromCharCode(currentAscii + code);
        }

        return codedText;
    }
}