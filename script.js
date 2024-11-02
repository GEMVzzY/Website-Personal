function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").textContent = "Silakan masukkan tinggi dan berat yang valid.";
        document.getElementById("result").style.color = "#ff5722";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = "";
    let color = "#ffd700";

    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
        color = "#ff9800";
    } else if (bmi < 24.9) {
        category = "Normal (Ideal)";
        color = "#4CAF50";
    } else if (bmi < 29.9) {
        category = "Kelebihan Berat Badan";
        color = "#ff9800";
    } else {
        category = "Obesitas";
        color = "#f44336";
    }

    document.getElementById("result").textContent = `BMI Anda: ${bmi.toFixed(2)} - ${category}`;
    document.getElementById("result").style.color = color;
}
