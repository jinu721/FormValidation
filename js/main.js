

function display(){ 
    
    // get input fields 
    let inpNickname = document.getElementById('inp-nickname');
    let inpUsername = document.getElementById('inp-username');
    let inpEmail = document.getElementById('inp-email');
    let inpPass = document.getElementById('inp-password');
    // get input fields values 
    let nicknameValue = document.getElementById('inp-nickname').value;
    let usernameValue = document.getElementById('inp-username').value;
    let emailValue = document.getElementById('inp-email').value;
    let passValue = document.getElementById('inp-password').value;
    //get alert box & alert box msg
    let alertBox = document.getElementById('alert');
    let alertMsg = document.getElementById('txt-alert');

    let isCompleted = true;

    // check nickname validation
    if(nicknameValue == ""){
        inpNickname.style.border = "solid 2px red";
        isCompleted = false;
    }else{
       // check nickname length more then 20
        if(nicknameValue.length>20){
            inpNickname.style.border = "solid 2px red";
            alertBox.style.display = "block";
            alertMsg.innerText = "The nickname must be less than 20 characters long.";
            isCompleted = false;
        }else{
            // check nickname contain spaces
            if(nicknameValue.includes(" ")){
                inpNickname.style.border = "solid 2px red";
                alertBox.style.display = "block";
                alertMsg.innerText = "TThe username must not contain spaces.";
                isCompleted = false;
            }else{
                inpNickname.style.border = "solid 1px grey";
                alertBox.style.display = "none";
            }
        }
    }
    // check username validation
    if(usernameValue == ""){
        inpUsername.style.border = "solid 2px red";
        isCompleted = false;
    }else{
        // check username length 
        if(usernameValue.length < 4 || usernameValue.length > 25){
            inpUsername.style.border = "solid 2px red";
            alertBox.style.display = "block";
            alertMsg.innerText = "The username must be between 4 and 25 characters long.";
            isCompleted = false;
        }else{
            // check username sytax
            const syntaxUsername = ["~","!","`","@","%","#","$","^","&","*","(",")","-","+","=","{","}","[","]",":",";","<",",",">",".","?","/",];
            let isInvalidChar= false;
            for(var i=0;i<usernameValue.length;i++){
                for(var j=0;j<syntaxUsername.length;j++){
                    if(usernameValue[i]==syntaxUsername[j]){
                        isInvalidChar = true;
                    }
                }
            }
            if(isInvalidChar){
                inpUsername.style.border = "solid 2px red";
                alertBox.style.display = "block";
                alertMsg.innerText = "Username can only contain letters, numbers and underscores.";
                isCompleted = false;
            }else{
                // check username contain capital letters
                let isUpperChar = false;
                const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                for(let n=0;n<usernameValue.length;n++){
                    for(let m=0;m<upperChar.length;m++){
                        if(usernameValue[n]==upperChar[m]){
                            isUpperChar = true;
                            break;
                        }
                    }
                    if(isUpperChar) break;
                }
                if(isUpperChar){
                    inpUsername.style.border = "solid 2px red";
                    alertBox.style.display = "block";
                    alertMsg.innerText = "Capital letters are not allowed in usernames.";
                }else{
                    // check username contain spaces
                    if(usernameValue.includes(" ")){
                        inpUsername.style.border = "solid 2px red";
                        alertBox.style.display = "block";
                        alertMsg.innerText = "The username must not contain spaces.";
                        isCompleted = false;
                    }else{
                        inpUsername.style.border = "solid 1px grey"
                        alertBox.style.display = "none";
                    }
                }
            }
        }
    }
    // check email validation
    if(emailValue == ""){
        inpEmail.style.border = "solid 2px red";
        isCompleted = false;
    }else{
        // check email syntax
        const syntaxEmail = [" ","_","~","!","`","%","#","$","^","&","*","(",")","-","+","=","{","}","[","]",":",";","<",",",">","?","/",];
        let isInvalidEmail = false;
        for(var i=0;i<emailValue.length;i++){
            for(var j=0;j<syntaxEmail.length;j++){
                if(emailValue[i]==syntaxEmail[j]){
                    isInvalidEmail = true;
                    break;
                }
            }
        }
        if(isInvalidEmail){
            inpEmail.style.border = "solid 2px red";
            alertBox.style.display = "block";
            alertMsg.innerText = "The email should not contain unwanted symbols.";
            isCompleted = false;
        }else{
            // check email end with "@gmail.com"
            const endwith = "@gmail.com";
            let isEndWith = true;
            for(let i=emailValue.length-endwith.length,j=0;i<emailValue.length;i++,j++){
                if(emailValue[i] !== endwith[j]){
                    isEndWith = false;
                    break;
                }
            }
            if(!isEndWith){
                inpEmail.style.border = "solid 2px red";
                alertBox.style.display = "block";
                alertMsg.innerText = "The email should end with @gmail.com.";
                isCompleted = false;
            }else{
                inpEmail.style.border = "solid 1px grey";
                alertBox.style.display = "none";
            }
        }
    }    
    // check password validation
    if(passValue == ""){
        inpPass.style.border = 'solid 2px red';
        isCompleted = false;
    }else{
        // check password length
        if(passValue.length<6){
            inpPass.style.border = "solid 2px red";
            alertBox.style.display = "block";
            alertMsg.innerText = "The password must be 6 characters long.";
            isCompleted = false;
        }else{
            // check password syntax
            const syntaxPass = ["_","~","!","`","%","#","$","^","&","*","-","+","=",":",";","<",",",">","?","/",];
            let isIncludeSpecialChar = false;
            for(let i=0;i<passValue.length;i++){
                for(let j=0;j<syntaxPass.length;j++){
                    if(passValue[i]==syntaxPass[j]){
                        isIncludeSpecialChar = true;
                        break;
                    }
                }
                if(isIncludeSpecialChar) break;
            }
            if(!isIncludeSpecialChar){
                inpPass.style.border = "solid 2px red";
                alertBox.style.display = "block";
                alertMsg.innerText = "The password must includes special characters.";
                isCompleted = false;
            }else{
                // check password contain numbers
                const numbers = [1,2,3,4,5,6,7,8,9,0];
                let isIncludesNumbers = false;
                for(let n=0;n<passValue.length;n++){
                    for(let m=0;m<numbers.length;m++){
                        if(passValue[n]==numbers[m]){
                            isIncludesNumbers = true;
                            break;
                        }
                    }
                    if(isIncludesNumbers) break;
                }
                if(!isIncludesNumbers){
                    inpPass.style.border = "solid 2px red";
                    alertBox.style.display = "block";
                    alertMsg.innerText = "The password must includes numbers."
                    isCompleted = false;
                }else{
                    inpPass.style.border = "solid 1px grey";
                    alertBox.style.display = "none";
                }
            }
        }
    }
}

// It automatically calls the display function whenever the input fields change.

document.getElementById('inp-nickname').addEventListener('input', display);
document.getElementById('inp-username').addEventListener('input',display);
document.getElementById('inp-email').addEventListener('input',display);
document.getElementById('inp-password').addEventListener('input',display);

