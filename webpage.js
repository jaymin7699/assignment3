
function call(number) {
    var num1 = parseInt(prompt('Plaese enter Quantity'));
    if (num1 > 0) {
        alert("samsung Note A" + number + " Added");
        document.getElementById("quantity_" + number).value = num1;
    }

    else if (num1 == 0) {
        alert("Quantity can not be 0");
    }
    else {
        alert("please enter the valid Quantity");
    }

}

function txt() {
    var quantity1 = document.getElementById("quantity_1").value;
    var quantity2 = document.getElementById("quantity_2").value;
    var quantity3 = document.getElementById("quantity_3").value;
    var quantity4 = document.getElementById("quantity_4").value;
    var quantity5 = document.getElementById("quantity_5").value;
    var quantity6 = document.getElementById("quantity_6").value;

    if (quantity1 == 0 && quantity2 == 0 && quantity3 == 0 && quantity4 == 0 && quantity5 == 0 && quantity6 == 0) {
        alert("Yout cart is empty!! Please add the product first")
    }
    else {
        var name = (prompt('Enter your name for place the order'));
        if (name == "") {
            alert("Please enter your name to condirm your order")
        }
        else {
            document.write("<h1>Congraulations " + name + ", Your order has been placed.</h1>");
            document.write("<b>Product Name &nbsp;&nbsp;&nbsp;&nbsp; Qauntity &nbsp;&nbsp;&nbsp;&nbsp; Final Price</b><br/>")
            document.write("<hr/>")
            var final_price = 0;
            if (quantity1 > 0) {
                var price = 800 * quantity1;
                final_price = final_price + price;
                document.write("Samsung Phone A1 &nbsp;&nbsp;&nbsp;&nbsp;" + quantity1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            if (quantity2 > 0) {
                var price = 1000 * quantity2;
                final_price = final_price + price;
                document.write("Samsung Phone A2 &nbsp;&nbsp;&nbsp;&nbsp;" + quantity2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            if (quantity3 > 0) {
                var price = 1100 * quantity3;
                final_price = final_price + price;
                document.write("Samsung Phone A3 &nbsp;&nbsp;&nbsp;&nbsp;" + quantity3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            if (quantity4 > 0) {
                var price = 1800 * quantity4;
                final_price = final_price + price;
                document.write("Samsung Phone A4 &nbsp;&nbsp;&nbsp;&nbsp;" + quantity4 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            if (quantity5 > 0) {
                var price = 1200 * quantity5;
                final_price = final_price + price;
                document.write("Samsung Phone A5 &nbsp;&nbsp;&nbsp;&nbsp;" + quantity5 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            if (quantity6 > 0) {
                var price = 1700 * quantity6;
                final_price = final_price + price;
                document.write("Samsung Phone A6 &nbsp;&nbsp;&nbsp;&nbsp;" + quantity6 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $" + price + "<br/>");
            }
            document.write("<hr/>")
            var tax = final_price * 0.13;
            var final_cart_total = final_price + tax;
            document.write("Total :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>$" + final_price + "</b><br/>");
            document.write("Tax :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;(13%) <b>$" + tax + "</b><br/>");
            document.write("<h4>Final Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>$" + final_cart_total + "</b><br/></h4>");
        }
    }
}
