public async Task<PartialViewResult> PreviewPdfModal()
{
    ViewBag.titlePage = "Dự thảo tờ trình thu hồi GXN của ĐLT";

    return PartialView();
}