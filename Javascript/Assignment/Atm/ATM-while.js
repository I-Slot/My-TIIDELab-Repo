let alertMessage = +prompt(
  "        SELECT TRANSACTION \n            PRESS CANCEL TO\n     TERMINATE TRANSACTION.\n Enter your pin"
);

if (alertMessage === 1111) {
  let option = -1;

  while (option !== 0) {
    option = +prompt(
      "SELECT FROM THE FOLLOWING OPTIONS \n 1.Bill Payment \n 2.Change Pin \n 3. Open Account \n 4.Statement \n 5.Withdraw \n 6.Balance \n 7.Transfer \n 8.Airtime \n 0.Exit"
    );

    if (option === 1) {
      let withdrawalAccount = +prompt("Current(1) Or Savings(2)");
      if (withdrawalAccount === 1 || withdrawalAccount === 2) {
        alert("Proceed");
      }
    } else if (option === 2) {
      +prompt("Press 2");
    } else if (option === 5) {
      while (true) {
        let withdrawalAmount = +prompt(
          "How much do you want to withdraw? \n 1. #500 \n 2. #1000 \n 3. #2000 \n 4. #3000 \n 5. #5000 \n 6. #10000 \n 0. Cancel"
        );

        if (withdrawalAmount === 0) {
          break;
        }

        if (withdrawalAmount >= 1 && withdrawalAmount <= 6) {
          let amount = [500, 1000, 2000, 3000, 5000, 10000];
          alert(`Your #${amount[withdrawalAmount - 1]} is in process..`);

          let another = prompt(
            "You want to perform another transaction? YES/NO"
          );
          if (another === "NO") {
            alert("Thanks");
            break;
          }
        }
      }
    }
  }
}
