let counter = 0;

document.getElementById('bellButton').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').textContent = counter;
});
