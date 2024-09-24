const output = document.getElementById("results-div")
const input = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const globalNum = {
    areaCode: "^(1\\s?)?",
    middle: "(\\([0-9]{3}\\)|[0-9]{3})[\\s\\-]?[0-9]{3}",
    end: "[\\s\\-]?[0-9]{4}$"
}

const validation = value => {
    const {areaCode, middle, end} = globalNum;
    const phoneTest = new RegExp(`${areaCode}${middle}${end}`)

    if (value === "") {
        return alert("Please provide a phone number")
    }

    const result = phoneTest.test(value);

    const pTag = document.createElement('p')
    pTag.appendChild(
        document.createTextNode(
            `${result ? "Valid" : "Invalid"} US number: ${value}`
        )),
    pTag.className = "result-text"
    pTag.style.color = result ? "green" : "red";

    output.appendChild(pTag);
};

checkBtn.addEventListener("click", () => {
    validation(input.value);
    input.value = "";
});

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        validation(input.value);
        input.value = "";
    }
})

clearBtn.addEventListener("click", () => {
    output.innerText = ""
});

