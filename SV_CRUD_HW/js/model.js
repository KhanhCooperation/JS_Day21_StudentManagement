function inforSV(ma, ten, email, matKhau, toan, ly ,hoa){
        this.ma= ma,
        this.ten= ten,
        this.mail=email,
        this.pass=matKhau,
        this.toan= toan,
        this.ly= ly,
        this.hoa=hoa,
        tinhDTB= function(){
                return ((this.toan + this.ly + this.hoa) /3.0);
            }  

}