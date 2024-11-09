// login
document.getElementById("show-login").onclick = function() {
    document.getElementById("login-popup").classList.add("active");
};

document.getElementById("close-login").onclick = function() {
    document.getElementById("login-popup").classList.remove("active");
};

// Validasi form login ketika tombol "Sign In" ditekan
document.querySelector(".form button").addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah form untuk submit otomatis
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (validateEmail(email) && validatePassword(password)) {
    alert("Login successful!");
    // Lakukan tindakan lebih lanjut seperti submit form atau redirect
  } else {
    alert("Invalid email or password.");
  }
});

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
  // Regex sederhana untuk validasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fungsi untuk memvalidasi password
function validatePassword(password) {
  // Password harus minimal 6 karakter, mengandung huruf dan minimal 1 angka
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(password);
}


// register
document.getElementById("show-register").onclick = function() {
    document.getElementById("login-popup").classList.remove("active");
    document.getElementById("register-popup").classList.add("active");
};

document.getElementById("close-register").onclick = function() {
    document.getElementById("register-popup").classList.remove("active");
};

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
    // Regex sederhana untuk validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fungsi untuk memvalidasi password
function validatePassword(password) {
    // Password harus minimal 6 karakter, mengandung huruf dan minimal 1 angka
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
}

// Fungsi untuk memvalidasi konfirmasi password
function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

// Fungsi utama untuk memvalidasi registrasi
function validateRegistration() {
    // Ambil nilai dari input
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validasi email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validasi password
    if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long and contain at least one letter and one number.');
        return;
    }

    // Validasi konfirmasi password
    if (!validateConfirmPassword(password, confirmPassword)) {
        alert('Passwords do not match.');
        return;
    }

    // Jika semua validasi lulus
    alert('Registration successful!');
    // Di sini Anda bisa menambahkan logika untuk mengirim data registrasi
}


// // REGISTER PAGE
// console.log(document.querySelector('register-btns'))
// document.getElementById('register-btns').onclick = () =>{
//     document.querySelector('.register-form-container').classList.toggle('active');
// }

// document.querySelector('#close-register-form').onclick = () =>{
//     document.querySelector('.register-form-container').classList.remove('active');
// }

// // REGISTER PAGE 2

// function validate(){
//     let input_name = document.getElementById("name")
//     let input_email = document.getElementById("email")
//     let input_password = document.getElementById("password")
//     let input_cpassword = document.getElementById("cpassword")
//     let input_male = document.getElementById("male")
//     let input_female = document.getElementById("female")
//     let input_agree = document.getElementById("agree")

//     // if(condition){
//     //     body
//     // }

//     if(input_name.value == "" || input_password.value == "" || input_email.value == ""){
//         alert("All fields must be filled")
//         return false
//     }else if(input_name.value.length <= 5){
//         alert("Name must be more than 5 letters")
//         return false
//     }else if(input_email.value.endsWith("@gmail.com") == false){
//         alert("Email must ends with @gmail.com")
//     }else if(!isAlphaNum(input_password.value)){
//         alert("password must be alpha numeric")
//         return false
//     }else if(input_password.value != input_cpassword.value){
//         alert("Re-type correct password")
//         return false
//     }else if(!input_male.checked && !input_female.checked){
//         alert("Choose a gender")
//         return false
//     }else if (!input_agree.checked){
//         alert("Conditions are not agreed")
//         return false
//     }
//     // console.log("Inputan nama: ", input_name.value)
//     return false
// }

// function isAlphaNum(element){
//     for(let i=o; i<element.length; i++){
//         if(element[i] >= 'a' && element[i] <= 'z'){
//             continue
//         }else if(element[i] >= 'A' && element[i] <= ''){
//             continue
//         }else if(element[i] >= '0' && element[i] <= '9'){
//             continue
//         }else{
//             return false
//         }
//     }
// }



// // let progress = document.getElementById("progress");
// //         let songp = document.getElementById("songp");
// //         let ctrlIcon = document.getElementById("ctrlIcon");

// //         songp.onloadedmetadata = function(){
// //             progress.max = songp.duration;
// //             progress.value = songp.currentTime;
// //         }

// //         function playPause(){
// //             if(ctrlIcon.classList.contains("fa-pause")){
// //                 songp.pause();
// //                 ctrlIcon.classList.remove("fa-pause");
// //                 ctrlIcon.classList.add("fa-play");
// //             }
// //             else{
// //                 songp.play();
// //                 ctrlIcon.classList.add("fa-pause");
// //                 ctrlIcon.classList.remove("fa-play");
// //             }
// //         }

// //         if(songp.play()){
// //              setInterval(()=>{
// //                 progress.value = songp.currentTime;
// //             },500);
// //         }

// //         progress.onchange = function(){
// //             songp.play();
// //             songp.currentTime = progress.value;
// //             ctrlIcon.classList.add("fa-pause");
// //             ctrlIcon.classList.remove("fa-play");
// //         }