let code = prompt("Enter your code: *901#");
let balance = 10000;

if (code === "*901#") {
  let message = +prompt(
    "Welcome to USSD Banking. Please note a N6.98 network\n charge will be applied to your account for banking services\n on this channel.\n 1. Accept \n 2. Cancel"
  );

  if (message === 1) {
    while (true) {
      let option = +prompt(
        "Access Bank \n 1>Check balance \n 2>Transfer \n 3>Airtime \n 4>Buy Data \n 5>Pay Bills \n 6>Enquiry Service \n 7>Diamond Xtra \n 8>AccessPay \n 0>Next page "
      );

      if (option === 1) {
        alert(`Your account balance #${balance}`);
        alert("Thanks!");
      } else if (option === 2) {
        while (true) {
          let selectBank = +prompt(`Choose Bank
            1>Access          
            2>GTBank          
            3>UBA
            4>First Bank
            5>Union Bank
            0>More..              
          `);

          if (selectBank === 0) {
            break;
          }

          let enterAccountNum = prompt("Enter Account Number");
          if (enterAccountNum === "0058090619") {
            let transferAmount = +prompt("Enter Amount");
            alert(`#${transferAmount} has been successfully sent!`);
            break;
          }
        }
      } else if (option === 3) {
        while (true) {
          let buyAirtime = +prompt("Buy Airtime \n 1. Self \n 2. Others");

          if (buyAirtime === 0) {
            break;
          }

          let enterAmount = +prompt("Enter amount:");
        }
      } else if (option === 4) {
        while (true) {
          let buyData = +prompt("Buy data \n 1. Self \n 2. Others");
        }
      } else if (option === 5) {
        while (true) {
          let payBills = +prompt(
            "Select biller \n 1. DSTV \n 2. GOTV \n 3. LCC \n 4. Data Purchase \n 5. Bet Naija \n 6. Other billers"
          );

          if (payBills === 0) {
            break;
          }

          while (true) {
            let selectOption = +prompt(
              "Select option \n 1> Option 1 \n 2> Option 2 \n 3> Next Page"
            );
          }
        }
      } else if (option === 6) {
        while (true) {
          let enquiryService = +prompt(
            "Access Bank Enquiry Services \n 1. Mini Statement \n 2. BVN Enquiry \n 3. A/C No Enquiry"
          );

          if (enquiryService === 1) {
            alert("Please open an account by dialing *901#");
          }
        }
      } else if (option === 7) {
        while (true) {
          let diamondXtra = +prompt(
            "Welcome to Access Bank \n 1. Open a Diamond Xtra Account \n 2. View Prizes \n 3. Qualifying Criteria \n 4. View Ticket"
          );

          if (diamondXtra === 1) {
            while (true) {
              let openDiamondXtra = +prompt(
                "Open a Diamond Xtra Account \n 1>Open Account with BVN \n 2>Open Account without BVN"
              );

              if (openDiamondXtra === 0) {
                break;
              }
            }
          }
        }
      } else if (option === 8) {
        alert(
          "Dear Customer, we could not successfully \n complete your request at this time. Please retry"
        );
      } else if (option === 0) {
        while (true) {
          let moreOption = +prompt(
            " 9>Payday Loans \n 10>Reset PIN \n 11>Opt Out \n 12>PayAttitude \n 0>Previous page"
          );

          if (moreOption === 0) {
            break;
          }
        }
      }
    }
  }
}
//  else {
//   alert("Code is not correct.");
// }
