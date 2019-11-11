var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        this.body = undefined;
        this.currentBlock = undefined;
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.body = document.querySelector('div.app');
        this.currentBlock = this.incrementStory(0);
    },
    
    incrementStory: function(storyIndex) {
        var block = document.createElement('div'), storyText, button;
        block.classList.add('povBlock');
        block.setAttribute('storyTest:pov', window.story[storyIndex].pov);
        storyText = document.createElement('div');
        storyText.classList.add('storyText');
        storyText.innerText = window.story[storyIndex].text;
        button = document.createElement('button');
        button.innerText = window.story[storyIndex].exit_text || 'Next';
        if (storyIndex < window.story.length) {
            console.log("Adding evengt listener...");
            button.addEventListener('click', this.incrementStory.bind(this, storyIndex+1));
        } else {
            console.log("Not adding event listener...");
        }
        block.appendChild(storyText);
        block.appendChild(button);

        this.body.appendChild(block);

        return block;
    },
};

app.initialize();
