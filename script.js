// Function to handle the box click event
function toggleBox(boxId) {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
  
    // Toggle the 'open' class to expand/collapse the boxes
    if (boxId == "box1") {
        box1.classList.toggle('open');
        box2.classList.remove('open');
        box3.classList.remove('open');
    }
    else if (boxId == "box2") {
        box2.classList.toggle('open');
        box1.classList.remove('open');
        box3.classList.remove('open');
    }
    else if (boxId == "box3") {
        box3.classList.toggle('open');
        box1.classList.remove('open');
        box2.classList.remove('open');
    }
}

// Add event listeners for each box
document.getElementById('box1').addEventListener('click', function () {
    toggleBox('box1');
});
document.getElementById('box2').addEventListener('click', function () {
    toggleBox('box2');
});
document.getElementById('box3').addEventListener('click', function () {
    toggleBox('box3');
});
