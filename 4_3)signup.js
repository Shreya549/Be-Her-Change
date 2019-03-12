const form = document.querySelector('#add-volunteer');
// saving data
form.addEventListener('submit', (e) => {
    let x= {
        fullname: form.fullname.value,
        emailid: form.emailid.value,
        phonenumber: form.phonenumber.value,
        gender: form.gender.value,
        dob: form.dob.value,
        username: form.username.value,
        password: form.password.value
    }
    db.collection('volunteers').add(x);
});
