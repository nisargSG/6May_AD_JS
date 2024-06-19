let data = [];
let editingId=null
const dispCat = ()=>{
    let allData = JSON.parse(localStorage.getItem('catInfo'))
    
let tr = '<option>--Select Category--</option>';
    if(allData != null){
        allData.map((i)=>{
            tr += `
                <option value="${i.id}">${i.name}</option>
            `
        })
    }  
    document.getElementById('catname').innerHTML = tr
}
const dispData = ()=>{
    let data = JSON.parse(localStorage.getItem('productInfo'));
    let catdata = JSON.parse(localStorage.getItem('catInfo'));
    let tr = '';
    if(data !== ''){
        data.map((i)=>{
            catdata.map((j)=>{
                if(j.id == i.category){
                    i.category = j.name 
                }
            })
            tr += `
            <tr>
                <td>${i.pid}</td>
                <td><img src=${i.image} height="50px" width="50px"/></td>
                <td>${i.pname}</td>
                <td>${i.category}</td>
                <td>${i.price}</td>
                <td>Delete</td>
            </tr>
        `;
        })
       
    }

    document.getElementById('allpr').innerHTML = tr;
}
dispCat();
dispData();

const getImageUrl = (e)=>{
    let img = e.files[0];
    console.log(img);
    var reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", function(e) {
        var image = e.target.result;
        localStorage.setItem('productimage',image)
        $("#imgthumbnail").attr('src', image);
    });

}

const saveData = ()=>{
    let pname = document.prfrm.prname.value;
    let price = document.prfrm.price.value;
    let catname = document.prfrm.catname.value;
    let desc = document.prfrm.desc.value;
    let image = localStorage.getItem('productimage')
    let prod_data = JSON.parse(localStorage.getItem('productInfo'))
    let len = prod_data ? prod_data.length+1 : 1;
    data.push({
        pid:len,
        pname:pname,
        price:price,
        category:catname,
        desc:desc,
        image:image
    })
    localStorage.setItem("productInfo",JSON.stringify(data))
    dispData();
}
