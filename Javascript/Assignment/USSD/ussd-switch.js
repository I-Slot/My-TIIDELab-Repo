let code = prompt("Enter your code: *901#");
let balance = 10000;

switch (code) {
  case "*901#":
    let message = +prompt(
      "Welcome to USSD Banking. Please note a N6.98 network charge will be applied to your account for banking services on this channel.\n 1. Accept \n 2. Cancel"
    );

    switch (message) {
      case 1:
        let option = +prompt(
          "Access Bank \n 1>Check balance \n 2>Transfer \n 3>Airtime \n 4>Buy Data \n 5>Pay Bills \n 6>Enquiry Service \n 7>Diamond Xtra \n 8>AccessPay \n 0>Next page "
        );

        switch (option) {
          case 1:
            let balanceMessage = +alert(`Your account balance #${balance}`);
            alert("Thanks!");
            break;
          case 2:
            let selectBank = +prompt(`Choose Bank
              1>Access          
              2>GTBank          
              3>UBA
              4>First Bank
              5>Union Bank
              0>More..              
            `);
            if (selectBank == 1) {
              let enterAccountNum = +prompt("Enter Account Number");
              if (enterAccountNum == "0058090619") {
                let transferAmount = +prompt("Enter Amount");
                alert(`#${transferAmount} has been successfully sent!`);
              }
            }
            break;
          case 3:
            let buyAirtime = +prompt("Buy Airtime \n 1. Self \n 2. Others");
            if (buyAirtime === 1) {
              let enterAmountSelf = +prompt("Enter amount:");
            } else if (buyAirtime === 2) {
              let enterAmountOther = +prompt("Enter amount:");
            }
            break;
          case 4:
            let buyData = +prompt("Buy data \n 1. Self \n 2. Others");
            break;
          case 5:
            let payBills = +prompt(
              "Select biller \n 1. DSTV \n 2. GOTV \n 3. LCC \n 4. Data Purchase \n 5. Bet Naija \n 6. Other billers"
            );
            if (payBills == 1) {
              let selectOptionDSTV = +prompt(
                "Select option \n 1> ASIA STANDALONE FOR N8300 \n 2> COMPACT FOR N10500 \n 3>Next Page"
              );
            } else if (payBills == 2) {
              let selectOptionGOTV = +prompt(
                "Select option \n 1>GOTV SMALLIE MONTHLY FOR N1100 \n 2>GOTV SMALLIE QUALITY FOR N2900 \n 3>Next page"
              );
            }
            break;
          case 6:
            let enquiryService = +prompt(
              "Access Bank Enquiry Services \n 1. Mini Statement \n 2. BVN Enquiry \n 3. A/C No Enquiry"
            );
            if (enquiryService == 1) {
              alert("Please open an account by dialing *901#");
            }
            break;
          case 7:
            let diamondXtra = +prompt(
              "Welcome to Access Bank \n 1. Open a Diamond Xtra Account \n 2. View Prizes \n 3. Qualifying Criteria \n 4. View Ticket"
            );
            if (diamondXtra == 1) {
              let openDiamondXtra = +prompt(
                "Open a Diamond Xtra Account \n 1>Open Account with BVN \n 2>Open Account without BVN"
              );
            }
            break;
          case 8:
            let accessPay = alert(
              "Dear Customer, we could not successfully complete your request at this time. Please retry"
            );
            break;
          case 0:
            let moreOption = +prompt(
              " 9>Payday Loans \n 10>Reset PIN \n 11>Opt Out \n 12>PayAttitude \n 0>Previous page"
            );
            break;
        }
        break;
      case 2:
        // Handle cancel case here
        break;
    }
    break;
  default:
    alert("Code is not correct.");
    break;
}
