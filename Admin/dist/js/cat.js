let data = [];
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
    // document.catfrm.reset();
}