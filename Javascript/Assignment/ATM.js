let alertMessage = +prompt(
  "        SELECT TRANSACTION \n            PRESS CANCEL TO\n     TERMINATE TRANSACTION.\n Enter your pin"
);

if (alertMessage === 1111) {
  let option = +prompt(
    "SELECT FROM THE FOLLOWING OPTIONS \n 1.Bill Payment \n 2.Change Pin \n 3. Open Account \n 4.Statement \n 5.Withdraw \n 6.Balance \n 7.Transfer \n 8.Airtime"
  );
  // let bill = true;
  // let changePin = true;
  if (option == 1) {
    let withdrawalAccount = +prompt("Current(1) Or Savings(2)");
    if (withdrawalAccount == 1) {
      alert("Proceed");
    } else if (withdrawalAccount == 2) {
      alert("Proceed");
    }
  } else if (option == 2) {
    +prompt("Press 2");
  } else if (option == 5) {
    let withdrawalAmount = +prompt(
      "How much do you want to withdraw? \n 1. #500 \n 2. #1000 \n 3. #2000 \n 4. #3000 \n 5. #5000 \n 6. #10000 "
    );
    if (withdrawalAmount == 1) {
      alert("Your #500 is in process..");

      let another1 = prompt("You want to perform another transaction? YES/NO");

      if (another1 == "NO") {
        alert("Thanks");
      } else if (withdrawalAmount == 2) {
        alert("Your #1000 is in process..");

        let another = prompt("You want to perform another transaction? YES/NO");
        if (another == "NO") {
          alert("Thanks");
        }
      } else if (withdrawalAmount == 3) {
        alert("Your #2000 is in process..");
        let another = prompt("You want to perform another transaction? YES/NO");
        if (another == "NO") {
          alert("Thanks");
        }
      } else if (withdrawalAmount == 4) {
        alert("Your #3000 is in process..");
        let another = prompt("You want to perform another transaction? YES/NO");
        if (another == "NO") {
          alert("Thanks");
        }
      } else if (withdrawalAmount == 5) {
        alert("Your #5000 is in process..");
        let another = prompt("You want to perform another transaction? YES/NO");
        if (another == "NO") {
          alert("Thanks");
        }
      } else if (withdrawalAmount == 6) {
        alert("Your #10,000 is in process..");
        let another = prompt("You want to perform another transaction? YES/NO");
        if (another == "NO") {
          alert("Thanks");
        }
      }
    }
  }
}
