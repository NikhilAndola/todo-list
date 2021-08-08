add = document.getElementById("add");
add.addEventListener("click",()=>{
    console.log("Updating List...");
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    //Populate the table
    let tableBody = document.getElementById('tableBody');
    let str = "";
    itemJsonArray.forEach((element,index) => {
        str += `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary">Delete</button></td>
      </tr>`
    });
    tableBody.innerHTML = str;
}); 
