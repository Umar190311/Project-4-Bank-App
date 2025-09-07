let balance = 0;

document.getElementById("addIncome").addEventListener("click", function () {
    let amt = parseInt(document.getElementById("amount").value);
    if (!isNaN(amt) && amt > 0) {
        balance += amt;
        updateBalance();
        addTransaction("Income", amt);
    }
});

document.getElementById("addExpense").addEventListener("click", function () {
    let amt = parseInt(document.getElementById("amount").value);
    if (!isNaN(amt) && amt > 0) {
        balance -= amt;
        updateBalance();
        addTransaction("Expense", amt);
    }
});

document.getElementById("clear").addEventListener("click", function () {
    balance = 0;
    document.getElementById("list").innerHTML = "";
    updateBalance();
});

function updateBalance() {
    document.getElementById("balance").textContent = balance;
}

function addTransaction(type, amt) {
    let li = document.createElement("li");
    li.textContent = `${type}: $${amt}`;
    if (type === "Income") {
        li.style.color = "green";
    } else {
        li.style.color = "red";
    }
    document.getElementById("list").appendChild(li);
}
