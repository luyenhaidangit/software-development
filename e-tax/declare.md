//Service
const userProfileService = abp.services.app.nguoiDungThongTin;

//State
var taxCodeUserCurrent = "";

//Init
userProfileService.getLoggedinEmployeeInfo()
.done(function (data) {
taxCodeUserCurrent = data.nguoidunG_MST;
});

//Element
const yearReported = $('#nambc').val();
const taxCode = $("#MaSoThue").val();

//Variable
const reportedResults = "";

//Prepare
pBaoCaoTinhHinhHD.getBcKqByMST(taxCode, yearReported)
.done(function (data) {
var rows = data.map(function (item, index) {
console.log("iijlskdfjlksf", item);
return `<tr>
                    <td class="text-center">${index + 1}</td>
                    <td class="txtHoten">${item.hoTen}</td>
                    <td class="text-center txtSoCCHN">${item.soCCHN}</td>
                    <td class="text-center ngayCapCC">${item.ngayCapCC}</td>
                    <td class="text-center tongSoGio" style="width: 12%">${item.tongSoGio}</td>
                    <td class="align-middle"><input style="font-size: 13px" class="custom-input edit-hour" type="text" value="" placeholder="Nhập số giờ muốn chỉnh sửa" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/^0+/, '').substring(0, 4)" /></td>
                    <td class="pl-0" style="padding-top: 20px !important;">
                        <button onclick="handleOnUploadfile(${index})" data-order="${index}" type="button" class="uploadfile-btn btn btn-primary btn-sm ml-4">Đính kèm file</button>
                        <input class="fileUrl" data-order="${index}" type="hidden"/>
                        <ul class="ml-0 pl-3 mt-2 fileName" style="width: 160px; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;" data-order="${index}">
                        </ul>
                    </td>
                </tr>`;
});

        $("#table-bosung-dangky").append(rows.join(''));
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Lỗi: ' + errorThrown);
    });

//Action
const handleOnUploadfile = (index) => {
$('.uploadfile').data('order', index);
$('.uploadfile').click();
}
