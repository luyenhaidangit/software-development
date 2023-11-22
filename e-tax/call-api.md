\_auditLogService.getEntityHistoryObjectTypes()
.done(function(result) {
// Xử lý kết quả thành công ở đây
console.log(result);
})
.fail(function(jqXHR, textStatus, errorThrown) {
// Xử lý lỗi ở đây
console.error("Error:", textStatus, errorThrown);
});
