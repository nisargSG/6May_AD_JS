let data = [];
let editingId=null
const dispCat = ()=>{
    let allData = JSON.parse(localStorage.getItem('catInfo'))
    
let tr = '';
    if(allData != null){
        allData.map((i)=>{
            tr += `
                <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td><button onclick='deleteData(${i.id})'>Delete</button>
                <button onclick='editData(${i.id})'>Edit</button></td>
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
        "id":editingId ? editingId :((getData!==null)?(getData.length + 1 ):1),
        "name":cname
    }
    data=getData!==null?getData:[];
    if(editingId){
        data=data.map(cat => cat.id === editingId ? info: cat)
        editingId=null
    }
    else{
        data.push(info)
    }
    localStorage.setItem('catInfo',JSON.stringify(data))
    document.catfrm.catname.value = '';
    dispCat()
    // document.catfrm.reset();

}

const deleteData = (id)=>{
    let data1 = JSON.parse(localStorage.getItem('catInfo'))
    data1.splice(id-1,1);
    console.log(data1);
    let j=1;
    data1 = data1.map((i)=>{
            i.id = j++;
            return i;
    })
    data = data1;
    localStorage.setItem('catInfo',JSON.stringify(data))
    dispCat()
}
const editData= (id)=>{
    let data2 = JSON.parse(localStorage.getItem('catInfo'))
    let cat = data2.find(cat => cat.id===id)
    if (cat){
        document.catfrm.catname.value=cat.name;
        editingId=id
    }
}