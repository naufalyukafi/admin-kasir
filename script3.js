function onFormSubmit(){
    var formData = readFormData();
    newRecordData(formData);
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["jenisMakanan"] = document.getElementById("jenisMakanan").value;
    formData["jumlahPesanan"] = document.getElementById("jumlahPesanan").value;
    formData["totalBelanja"] = document.getElementById("totalBelanja");
    formData["member"] = document.getElementById("member").checked;
    if(formData["member"] == true){
        formData["member"] = "Member";
        console.log("member");
        var jumlahPesan = formData["jumlahPesanan"];
        
        switch (formData["jenisMakanan"]) { 
            case "Nasi Goreng":
                console.log("nasi goreng")
                if(jumlahPesan == 1){
                    console.log("diskon 5%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 50000) - (50000 * 0.05);  
                    alert("Selamat anda mendapatkan diskon 5%");  
                } else if(jumlahPesan > 1 && jumlahPesan <= 3){
                    console.log("diskon 7%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 50000) - ((50000 * 0.07) * jumlahPesan);  
                    alert("Selamat anda mendapatkan diskon 7% tiap porsi");
                } else if(jumlahPesan > 3){
                    console.log("diskon 10%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 50000) - ((50000 * 0.1) * jumlahPesan);  
                    alert("Selamat anda mendapatkan diskon 10% tiap porsi");
                } else {
                    console.log("else")
                    formData["totalBelanja"] = 0; 
                }  
            break;
            case "Nasi Padang":
                console.log("Nasi Padang")
                if(jumlahPesan == 1){
                    console.log("diskon 5%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 100000) - (100000 * 0.05); 
                    alert("Selamat anda mendapatkan diskon 5%");    
                } else if(jumlahPesan > 1 && jumlahPesan <= 3){
                    console.log("diskon 7%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 100000) - ((100000 * 0.07) * jumlahPesan); 
                    alert("Selamat anda mendapatkan diskon 7% tiap porsi");  
                } else if(jumlahPesan > 3){
                    console.log("diskon 10%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 100000) - ((100000 * 0.1) * jumlahPesan);  
                    alert("Selamat anda mendapatkan diskon 10% tiap porsi"); 
                } else {
                    console.log("else")
                    formData["totalBelanja"] = 0; 
                }  
            break;
            case "Mie Goreng":
                console.log("Mie Goreng")
                if(jumlahPesan == 1){
                    console.log("diskon 5%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 45000) - (45000 * 0.05);
                    alert("Selamat anda mendapatkan diskon 5%");        
                } else if(jumlahPesan > 1 && jumlahPesan <= 3){
                    console.log("diskon 7%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 45000) - ((45000 * 0.07) * jumlahPesan);  
                    alert("Selamat anda mendapatkan diskon 7% tiap porsi"); 
                } else if(jumlahPesan > 3){
                    console.log("diskon 10%");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 45000) - ((45000 * 0.1) * jumlahPesan);  
                    alert("Selamat anda mendapatkan diskon 10% tiap porsi"); 
                } else {
                    console.log("else")
                    formData["totalBelanja"] = 0; 
                }  
            break;
            default:
                formData["totalBelanja"] = 0;  
                break;
        }
    } else {
        console.log("non member");
        formData["member"] = "Non Member";
        formData["empCode"] = "";
        var jumlahPesan = formData["jumlahPesanan"];
        switch (formData["jenisMakanan"]) {
            case "Nasi Goreng":
                console.log("nasi goreng")
                if(jumlahPesan >= 1 && jumlahPesan <= 3){
                    console.log("tidak ada diskon");
                    formData["totalBelanja"] = formData["jumlahPesanan"] * 50000    
                } else if(jumlahPesan > 3 && jumlahPesan <= 5){
                    console.log("diskon 5%");
                    formData["totalBelanja"] = formData["jumlahPesanan"] * 50000 - (formData["jumlahPesanan"] * 50000) * 0.05;  
                    alert("Anda mendapatkan diskon 5% dari harga keseluruhan")
                } else if(jumlahPesan > 5){
                    console.log("diskon 5% tiap porsi");
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 50000) - ((50000 * 0.05) * jumlahPesan); 
                } else {
                    console.log("else")
                    formData["totalBelanja"] = 0; 
                }  
            break;
            case "Nasi Padang":
                console.log("nasi padang")
                if(jumlahPesan >= 1 && jumlahPesan <= 3){
                    console.log("tidak ada diskon");
                    formData["totalBelanja"] = formData["jumlahPesanan"] * 100000    
                } else if(jumlahPesan > 3 && jumlahPesan <= 5){
                    console.log("diskon 5%");
                    formData["totalBelanja"] = formData["jumlahPesanan"] * 100000 - (formData["jumlahPesanan"] * 100000) * 0.05;  
                    alert("Anda mendapatkan diskon 5% dari harga keseluruhan")
                } else if(jumlahPesan > 5){
                    console.log("diskon 10%");  
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 100000) - ((100000 * 0.05) * jumlahPesan); 
                } else {
                    console.log("else")
                    formData["totalBelanja"] = 0; 
                }
            break;
            case "Mie Goreng":
                console.log("Mie Goreng")
                if(jumlahPesan >= 1 && jumlahPesan <= 3){
                    console.log("tidak ada diskon");
                    formData["totalBelanja"] = formData["jumlahPesanan"] * 45000    
                } else if(jumlahPesan > 3 && jumlahPesan <= 5){
                    console.log("diskon 5%");
                    formData["totalBelanja"] = formData["jumlahPesanan"] * 45000 - (formData["jumlahPesanan"] * 45000) * 0.05;
                    alert("Anda mendapatkan diskon 5% dari harga keseluruhan")  
                } else if(jumlahPesan > 5){
                    console.log("diskon 5% tiap porsi"); 
                    formData["totalBelanja"] = (formData["jumlahPesanan"] * 45000) - ((45000 * 0.05) * jumlahPesan); 
                } else {
                    console.log("else")
                    formData["totalBelanja"] = 0; 
                }  
            break;
            default:
                formData["totalBelanja"] = 0;  
                break;
        }
    }
    return formData;
}

function newRecordData(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell2 = newRow.insertCell(0);
    cell2.innerHTML = data.empCode;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.fullName;
    cell5 = newRow.insertCell(2);
    cell5.innerHTML = data.member;
    cell5 = newRow.insertCell(3);
    cell5.innerHTML = data.jenisMakanan;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.jumlahPesanan;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "Rp."+numberWithCommas(data.totalBelanja);
}

//add "," for Rp
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// function validate() {
//     isValid = true;
//     if(document.getElementById("member").checked == !false){
//         isValid = false;
//         document.getElementById("validationRadio").classList.remove("hide");
//     } else {
//         isValid = true;
//         if(!document.getElementById("validationRadio").classList.remove("hide")){
//             document.getElementById("validationRadio").classList.add("hide");
//         }
//     }
//     return isValid;
// }


