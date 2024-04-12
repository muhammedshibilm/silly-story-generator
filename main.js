function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
      }
//Display the story 
var displaystory = document.getElementById('displayst')
var storybox = document.getElementById('displaystory')
var radioButtons = document.querySelectorAll('input[name="u"]');
var isUk = false
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
// Read the input of the text 
function generateStory(params) {
        var names = document.getElementById('nain')
        var radioButtons = document.getElementsByName('u');

        let newStory = storyText;

        const xItem = randomValueFromArray(insertX);
        const yItem = randomValueFromArray(insertY);
        const zItem = randomValueFromArray(insertZ);

        newStory = newStory.replaceAll(':insertx:', xItem);
        newStory = newStory.replaceAll(':inserty:', yItem);
        newStory = newStory.replaceAll(':insertz:', zItem);

        if (names.value !== "") {
                let nameval = names.value
                newStory = newStory.replaceAll('Bob', nameval);

        }
        isUk = document.getElementById('uk').checked
        if (isUk) {
                const weight = `${Math.round(300 * 0.0714286)} stone`;
                const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
                newStory = newStory.replaceAll('94 fahrenheit', temperature);
                newStory = newStory.replaceAll('300 pounds', weight);
        }
        storybox.style = " max-width: 400px;"
        displaystory.style = 'margin: 20px;'
        displaystory.innerHTML=newStory


}
