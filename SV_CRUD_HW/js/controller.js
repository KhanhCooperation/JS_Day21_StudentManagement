function getThongTin(){
    //get thong tin
    var ma= document.getElementById("txtMaSV").value;
    var ten= document.getElementById("txtTenSV").value;
    var email=document.getElementById("txtEmail").value;
    var matKhau=document.getElementById("txtPass").value;
    var toan=document.getElementById("txtDiemToan").value*1;
    var ly=document.getElementById("txtDiemLy").value*1;
    var hoa=document.getElementById("txtDiemHoa").value*1;
    var sv={ma, ten, email, matKhau, toan, ly , hoa};
    return sv;
}
function renderDSSV(dssv){
    var contentHTML="";
    for(var i=0; i<dssv.length; i++){
        var sv=dssv[i];
        function dtb(){
            (sv.toan+sv.ly+sv.hoa)/3
        }
        var content=
        `<tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.mail}</td>
        <td>${dtb()}</td>
        <td>
        <button onclick="xoaSinhVien('${sv.ma}')" class="btn btn-danger">Xóa</button>
        <button onclick="suaSinhVien('${sv.ma}')" class="btn btn-warning">Sửa</button>
        </td>
        </tr>`
        contentHTML += content;
    }
    document.getElementById("tbodySinhVien").innerHTML=contentHTML;
}

