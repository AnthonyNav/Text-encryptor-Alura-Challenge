function encrypt_check(){
    output_enabled.style.display = "flex";
    output_disabled.style.display = "none";
    value = !/[^a-z\s]/.test(input_text.value);
    if (value){
        encrypted_text = encrypt(input_text.value);
        output_text.value = encrypted_text
    }
    else{
        alert("Solo se permiten minusculas y espacios")
    }
}

function decrypt_check(){
    value = !/[^a-z\s]/.test(input_text.value);
    if (value){
        decrypted_text = decrypt(input_text.value);
        output_text.value = decrypted_text;
    }
    else{
        alert("Solo se permiten minusculas y espacios")
    }
}

function encrypt(text){
    copy_text = text.split("")
    count = 0
    while (count < copy_text.length){
        for(let i = 0; i < keys.length; i++){
            if (copy_text[count] == keys[i]){
                copy_text[count] = encrypt_keys[i];
            }
        }
        count++;
    }
    text = copy_text.toString().replaceAll(',','')
    return text
}

function decrypt(text){
    output_enabled.style.display = "flex";
    output_disabled.style.display = "none";
    for(let i = 0; i < keys.length; i++){
        text = text.replaceAll(encrypt_keys[i], keys[i])
    }
    return text
}

function copy(){
    navigator.clipboard.writeText(output_text.value)
}



let input_text = document.querySelector("#input-text");
let encrypt_button = document.querySelector(".encrypt-button");
let decrypt_button = document.querySelector(".decrypt-button");
let output_text = document.querySelector("#output-text");
let copy_button = document.querySelector("#copy-button");
let output_enabled = document.querySelector(".output-enabled");
let output_disabled = document.querySelector(".output-disabled");

let keys = ['a','e', 'i', 'o', 'u']
let encrypt_keys =['ai', 'enter', 'imes', 'ober', 'ufat']
var value = false;
encrypt_button.onclick = encrypt_check;
decrypt_button.onclick = decrypt_check;
copy_button.onclick = copy;

