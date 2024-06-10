let data = [];

const dispCat = ()=>{
    let allData = JSON.parse(localStorage.getItem('catInfo'))
    let tr = '';
    if(allData != null){
        allData.map((i)=>{
            tr += `
                <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>Delete</td>
                </tr>
            `
        })
    }
   
    document.getElementById('allcat').innerHTML = tr
}
dispCat();

const saveData = ()=>{
    let getData = JSON.parse(localStorage.getItem('catInfo'))
    let cname = document.catfrm.catname.value;
    let len = (getData !== null)?(getData.length+1):1;
    let info = {
        "id":len,
        "name":cname
    }   
    data.push(info)
    localStorage.setItem('catInfo',JSON.stringify(data))
    document.catfrm.catname.value = '';
    dispCat()
    // document.catfrm.reset();
}
