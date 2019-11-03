const form = document.querySelector('#confess-here');
// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let x
    ={story: form.story.value}
    db.collection('stories').add(x);
});