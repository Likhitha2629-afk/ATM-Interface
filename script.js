let balance = 5000;
let transactions = [];

// Login
function login() {
    const userId = document.getElementById("userId").value;
    const pin = document.getElementById("pin").value;
    const message = document.getElementById("loginMessage");

    if (userId === "admin" && pin === "1234") {
        document.getElementById("loginSection").classList.add("hidden");
        document.getElementById("atmSection").classList.remove("hidden");
        message.textContent = "";
    } else {
        message.textContent = "Invalid User ID or PIN!";
    }
}

// Logout
function logout() {
    document.getElementById("loginSection").classList.remove("hidden");
    document.getElementById("atmSection").classList.add("hidden");

    document.getElementById("userId").value = "";
    document.getElementById("pin").value = "";
}

// Hide all operation boxes
function hideBoxes() {
    document.getElementById("depositBox").classList.add("hidden");
    document.getElementById("withdrawBox").classList.add("hidden");
    document.getElementById("transferBox").classList.add("hidden");
    document.getElementById("historyBox").classList.add("hidden");
}

// Show Deposit
function showDeposit() {
    hideBoxes();
    document.getElementById("depositBox").classList.remove("hidden");
}

// Show Withdraw
function showWithdraw() {
    hideBoxes();
    document.getElementById("withdrawBox").classList.remove("hidden");
}

// Show Transfer
function showTransfer() {
    hideBoxes();
    document.getElementById("transferBox").classList.remove("hidden");
}

// Show History
function showHistory() {
    hideBoxes();

    document.getElementById("historyBox").classList.remove("hidden");

    let list = document.getElementById("historyList");
    list.innerHTML = "";

    if (transactions.length === 0) {
        list.innerHTML = "<li>No transactions yet.</li>";
        return;
    }

    transactions.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

// Deposit
function deposit() {
    let amount = Number(document.getElementById("depositAmount").value);

    if (amount > 0) {
        balance += amount;
        document.getElementById("balance").textContent = balance;

        transactions.push("Deposited ₹" + amount);

        alert("₹" + amount + " deposited successfully.");

        document.getElementById("depositAmount").value = "";
    } else {
        alert("Enter a valid amount.");
    }
}

// Withdraw
function withdraw() {
    let amount = Number(document.getElementById("withdrawAmount").value);

    if (amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance.");
        return;
    }

    balance -= amount;

    document.getElementById("balance").textContent = balance;

    transactions.push("Withdrawn ₹" + amount);

    alert("Please collect your cash.");

    document.getElementById("withdrawAmount").value = "";
}

// Transfer
function transfer() {

    let receiver = document.getElementById("receiver").value;
    let amount = Number(document.getElementById("transferAmount").value);

    if (receiver === "" || amount <= 0) {
        alert("Enter valid details.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance.");
        return;
    }

    balance -= amount;

    document.getElementById("balance").textContent = balance;

    transactions.push("Transferred ₹" + amount + " to " + receiver);

    alert("Transfer Successful.");

    document.getElementById("receiver").value = "";
    document.getElementById("transferAmount").value = "";
}
