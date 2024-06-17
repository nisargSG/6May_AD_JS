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
dispCat();

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
