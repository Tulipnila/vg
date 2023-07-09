// select elements
const signUpBox = document.getElementById("signUpBox");
const main = document.querySelector("main");
signUpBox.appendChild(main);  //Append main element to signupbox

//set innerHTML for main
main.innerHTML = ` 
    <nav>
        <p>User Registration - New User</p>
        <h5>Mandatory fields are marked with an asterisk(*)</h5>   
    </nav>
    <aside id="inputBox">
        <form>
            <label class="label1" for="accountNumber">Account Number<sup>*</sup></label>
            <input type="text" id="inputAccountNumber">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text1">(Account Number is available in your passbook and/or statement of account)</p>
            <small></small>
        </form>
       
        <form>
            <label class="label2" for="ifs">IFS Code<sup>*</sup></label>
            <input type="text" id="ifsCode">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text2">(IFS code is available in your passbook and/or statement of account)</p>
            <small></small>
        </form>
       
        <form>
            <label class="label3" for="branch">Branch Name<sup>*</sup></label>
            <input type="text" id="inputBranch">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text3">(Branch Name is available in your passbook and/or statement of account)</p>
            <small></small>
        </form>

        <form>
            <label class="label4" for="mobileNumber">Registered Mobile Number<sup>*</sup></label>
            <input type="text" id="mobileNumber">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text4">(Please enter Mobile Number registered with Bank)</p>
            <small></small>
        </form>

        <form>
            <label class="label5" for="mail">Registered E-mail id<sup>*</sup></label>
            <input type="email" id="mail" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text5">(Please enter E-mail id registered with Bank)</p>
            <small></small>
        </form>


        <div class="agreePara">
            <p>Dear Customer,</p>
            <p>After onboarding on TULA Online, the created user ID will be enabled for login through YONO and YONO Lite as well, in addition to TULA Online.</p>
            <p>By clicking on 'I Agree' you hereby give consent for the same. Please do not share your login credentials with anyone.</p>
        </div>
        <div id="button1">
            <button id="agree">I Agree</button>
            <button id="disagree">I Disagree</button>
        </div>
        <div id="button2">
            <button id="submit">Submit</button>
        </div>
    </aside>
    <footer>
        <div id="rights">&copy; Tula Bank</div>
        <div id="terms">
            <ul>
                <li>Privacy Statement</li>
                <li>Disclosure</li>
                <li>Terms of Service (Terms & Conditions)</li>
            </ul>
        </div>
    </footer>`;
const inputAccountNumber = document.getElementById('inputAccountNumber');
const inputIfsCode = document.getElementById('ifsCode');
const inputBranchName = document.getElementById('inputBranch');
const inputMobileNumber = document.getElementById('mobileNumber');
const inputMailId = document.getElementById('mail');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    checkInput();
});

// Append forms and labels

function checkInput() {
    const inputAccountNumberValue = inputAccountNumber.value.trim();
    const inputIfsCodeValue = inputIfsCode.value.trim();
    const inputBranchNameValue = inputBranchName.value.trim();
    const inputMobileNumberValue = inputMobileNumber.value.trim();
    const inputMailIdValue = inputMailId.value.trim();

    if (inputAccountNumberValue === "") {
        setError(inputAccountNumber, "Account number cannot be blank");
    } else {
        setSuccess(inputAccountNumber);
    }
    if (inputIfsCodeValue === "") {
        setError(inputIfsCode, "IFS code cannot be blank");
    } else {
        setSuccess(inputIfsCode);
    }
    if (inputBranchNameValue === "") {
        setError(inputBranchName, "Branch name cannot be blank");
    } else {
        setSuccess(inputBranchName);
    }
    if (inputMobileNumberValue === "") {
        setError(inputMobileNumber, "Mobile number cannot be blank");
    } else {
        setSuccess(inputMobileNumber);
    }
    if (inputMailIdValue === "") {
        setError(inputMailId, "Mail ID cannot be blank");
    } else {
        setSuccess(inputMailId);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add('error');
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

// Footer setup
const footer = document.querySelector('footer');
main.appendChild(footer);

const rights = document.getElementById('rights');
const terms = document.getElementById('terms');
footer.appendChild(rights);
footer.appendChild(terms);
