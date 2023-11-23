//Element
const previewPdfModalDetail = new app.ModalManager({
    viewUrl: abp.appPath + 'App/DanhSachKetQuaThi/PreviewPdfModalDetail',
    scriptUrl: abp.appPath + 'view-resources/Areas/App/Views/BaoCaoThi/DanhSachKetQuaThi/PreviewPdfModalDetail.js',
    modalClass: 'previewPdfModalDetail',
    modalSize: 'modal-lg'
});

//Event
$(document).on("click", "#PreviewButton", function () {
    previewPdfModalDetail.open();
});