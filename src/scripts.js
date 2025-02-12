let temperature = 20;

const updateTemperature = () => {
    const tempDisplay = document.getElementById("temperature");
    tempDisplay.innerText = `Temperature: ${temperature}°C`;

    document.body.style.backgroundColor =
        temperature < 15 ? "#3f69ff" :
        temperature > 30 ? "red" : "rgb(92, 206, 64)";
};

document.getElementById("increase").addEventListener("click", () => {
    temperature++;
    updateTemperature();
});

document.getElementById("decrease").addEventListener("click", () => {
    temperature--;
    updateTemperature();
});

updateTemperature();
