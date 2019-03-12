const storyList = document.querySelector('#story-list');

// create element & render story
function renderStory(doc){
    let li = document.createElement('li');
    let story= document.createElement('span');
    li.setAttribute('data-id', doc.id);
    story.textContent = doc.data().story;
    li.appendChild(story);
    storyList.appendChild(li);
}

// getting data
db.collection('stories').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderStory(doc);
    });
});
