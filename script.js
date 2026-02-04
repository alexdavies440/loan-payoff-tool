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
        let monthlyPayment = 0;
        let interestBalance = 0;
        let months = 0;

        let dailyInterest = 0;


        balance = Number(document.querySelector("input[name=balance]").value);
        interestRate = Number(document.querySelector("input[name=rate]").value) / 100;
        monthlyPayment = Number(document.querySelector("input[name=payment]").value)
        months = Number(document.querySelector("input[name=months]").value);


        for (let i = 1; i <= months && balance > 0; i++) {

            let monthlyInterest = 0;

            for (let i = 0; i < 360 / 12; i++) {
                dailyInterest = (balance * interestRate) / 360;
                console.log("Daily Interest: " + dailyInterest);
                monthlyInterest += dailyInterest;
                balance += dailyInterest;
            }
            console.log("**** Monthly Interest: " + monthlyInterest);

            interestBalance += monthlyInterest;


            let data = new Entry(i, balance, monthlyInterest, interestBalance);

            let p = document.querySelector("p");

            dataArray.push(data);

            let list = "<ul>";

            dataArray.forEach(function (item) {
                list += "<li>"
                list += "<ul>"

                list += "<li class='month'>Month: " + item.month + "</li>";
                list += "<li>Balance: £" + (item.balance).toFixed(2) + "</li>";
                list += "<li>Monthly Interest: £" + (item.monthlyInterest).toFixed(2) + "</li>";
                list += "<li>Interest Balance: £" + (item.interestBalance).toFixed(2) + "</li>";

                list += "</ul><br>"
            });
            list += "</li>"
            list += "</ul>"

            p.innerHTML = list;

            balance += (monthlyPayment * -1);


            if (i === months || balance <= 0) {

                console.log(dataArray);
                document.getElementById("finalBalance").innerHTML = "Final Balance: £" + balance;
            }
        }
        event.preventDefault();
    })
})
