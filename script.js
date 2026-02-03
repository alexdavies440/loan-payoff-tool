window.addEventListener("load", function () {


    function Entry(month, balance, monthlyInterest, interestBalance) {
        this.month = month,
            this.balance = balance,
            this.monthlyInterest = monthlyInterest,
            this.interestBalance = interestBalance
    }

    document.addEventListener("submit", function (event) {

        let dataArray = [];
        let balance = 0;
        let interestRate = 0;
        let montlyContribution = 0;
        let monthlyWithdrawal = 0;
        let interestBalance = 0;
        let months = 0;


        balance = Number(document.querySelector("input[name=balance]").value);
        interestRate = Number(document.querySelector("input[name=rate]").value) / 100;
        montlyContribution = Number(document.querySelector("input[name=contribution]").value);
        monthlyWithdrawal = Number(document.querySelector("input[name=withdrawal]").value)
        months = Number(document.querySelector("input[name=months]").value);


        for (let i = 1; i <= months; i++) {


            let monthlyInterest = (balance * interestRate) / 12;

            interestBalance += monthlyInterest;

            // console.log("*** Month: " + i + " ***");

            // console.log();

            // console.log("Balance: " + balance);

            // console.log("Monthly Interest: " + monthlyInterest);

            // console.log("Interest Balance: " + interestBalance);

            // console.log();


            let data = new Entry(i, balance, monthlyInterest, interestBalance);

            let p = document.querySelector("p");

            // add each interation to the original array until the 12 months are complete
            dataArray.push(data);

            let list = "<ul>";

            dataArray.forEach(function(item) {
                list += "<li>"
                list += "<ul>"
                

                list += "<li>Month: " + item.month + "</li>";
                list += "<li>Balance: £" + item.balance + "</li>";
                list += "<li>Monthly Interest: £" + item.monthlyInterest + "</li>";
                list += "<li>Interest Balance: £" + item.interestBalance + "</li>";

                list += "</ul><br>"
            });
            list += "</li>"
            list += "<ul>"

            p.innerHTML = list;

            balance += montlyContribution;
            balance += (monthlyWithdrawal * -1);

            if (i === months) {

                balance += interestBalance;

                console.log("Final Balance: " + balance);
                console.log(dataArray);
                document.getElementById("finalBalance").innerHTML = "Final Balance: £" + balance;
            }
        }
        event.preventDefault();
    })
})
