(function () {
    //Element
    const previewPdfModalDetail = new app.ModalManager({
        viewUrl: abp.appPath + 'App/DanhSachKetQuaThi/PreviewPdfModalDetail',
        scriptUrl: abp.appPath + 'view-resources/Areas/App/Views/BaoCaoThi/DanhSachKetQuaThi/PreviewPdfModalDetail.js',
        modalClass: 'previewPdfModalDetail',
        modalSize: 'modal-lg'
    });

    //Event
    $(document).on("click", "#add-row-btn", function () {
        let signingAuthorityRows = $(".signing-authority-row");

        if (signingAuthorityRows.length >= 10) {
            abp.notify.error("Chỉ được phép thêm tối đa 10 dòng!");
            return;
        }

        const newRow = `
                <tr class="signing-authority-row">
                    <td class="text-center px-0">${signingAuthorityRows.length + 1}</td>
                    <td class="text-center px-3">
                        <input id="signing-authority-0" type="text" class="form-control" value="">
                    </td>
                    <td class="text-center px-0">
                        <span class="btn btn-sm btn-clean btn-icon btn-icon-md delete-btn"><i class="fa fa-trash"></i></span>
                    </td>
                </tr>
            `;

        $("#table-body").append(newRow);
    });

    $(document).on("click", ".delete-btn", function () {
        let row = $(this).closest(".signing-authority-row");

        row.remove();

        renderTable();
    });

    $(document).on("click", ".delete-btn", function () {
        let row = $(this).closest(".signing-authority-row");

        row.remove();

        renderTable();
    });

    $(document).on("click", "#PreviewButton", function () {
        previewPdfModalDetail.open();
    });

    //Action commit
    const renderTable = () => {
        let signingAuthorityRows = $(".signing-authority-row");

        let signingAuthorities = signingAuthorityRows.map(function (index, element) {
            let authority = $(element).find(".authority-data").val();

            return { order: index, authority: authority };
        }).get();

        const rowsHTML = signingAuthorities.map((item, index) => `
                <tr class="signing-authority-row">
                    <td class="text-center px-0 order-data">${index + 1}</td>
                    <td class="text-center px-3">
                        <input id="signing-authority-${index}" type="text" class="form-control authority-data" value="${item.authority ?? ""}">
                    </td>
                    <td class="text-center px-0">
                        <span class="btn btn-sm btn-clean btn-icon btn-icon-md delete-btn"><i class="fa fa-trash"></i></span>
                    </td>
                </tr>
            `);

        const tableBody = $("#table-body");
        tableBody.empty();
        tableBody.append(rowsHTML.join(''));
    }
})(jQuery);