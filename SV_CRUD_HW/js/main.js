var dssv=[];
// Lay du lieu khi user load tran 
var dataJson=localStorage.getItem("DSSV");
if(dataJson != null){
    dssv= JSON.parse(dataJson);
    renderDSSV(dssv);
}

// Lay du lieu vao Local 
function themSinhVien() {
    //get thong tin 
    var idSV=getThongTin();
    //Bo vao Object:
        //Tu infor o tren, ta bo vao Object rieng (o file model) => bo vao array => dua vao Json.
    var sv= {
        ma: idSV.ma,
        ten: idSV.ten,
        mail:idSV.email,
        pass: idSV.matKhau,
        toan: idSV.toan,
        ly: idSV.ly,
        hoa: idSV.hoa,
        tinhDTB: function(){
                return ((this.toan + this.ly + this.hoa) /3.0);
            }  
    }
    //show thong tin len form
    dssv.push(sv);
    // render dssv 
    renderDSSV(dssv);
    // Lưu thông tin lại qua JSON:
    var dataJson=JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
}

function xoaSinhVien(id){
    //Lấy data từ Local (sẽ có dạng arr[{}, {}, ...])
    var data = localStorage.getItem("DSSV");
    dssv= JSON.parse(data);
    //======================================================

    //Tìm index của ptử đích trùng với ptử id, ptử id mang id của ptử đó
    var index=0;
    for (let i = 0; i < dssv.length; i++) {
        if(id == dssv[i].ma){
            index=i;
        }
    }
        //và splice
    dssv.splice(index,1);
    //=======================================================

    //Render và đưa lên Local
    renderDSSV(dssv);
    var dataJson=JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    
}
function suaSinhVien(id){
    //Lấy data từ Local (sẽ có dạng arr[{}, {}, ...])
    var data = localStorage.getItem("DSSV");
    dssv= JSON.parse(data);
    //======================================================

    //Tìm index của ptử đích trùng với ptử id, ptử id mang id của ptử đó
    var index=0;
    for (let i = 0; i < dssv.length; i++) {
        if(id == dssv[i].ma){
            index=i;
        }
    }
    //Đưa phần tử lên form.
    document.getElementById("txtMaSV").value=dssv[index].ma;
    document.getElementById("txtTenSV").value=dssv[index].ten;
    document.getElementById("txtEmail").value=dssv[index].email;
    document.getElementById("txtPass").value=dssv[index].pass;
    document.getElementById("txtDiemToan").value=dssv[index].toan;
    document.getElementById("txtDiemLy").value=dssv[index].ly;
    document.getElementById("txtDiemHoa").value=dssv[index].hoa;
}

function resetSinhVien(){
    document.getElementById("formQLSV").reset(); /// clear all form elements
    document.querySelector("#txtSearch").value="";
    //render rỗng.
    var contentHTML="";
    document.getElementById("tbodySinhVien").innerHTML=contentHTML;
    //render Local rỗng.
    localStorage.removeItem("DSSV");
}
