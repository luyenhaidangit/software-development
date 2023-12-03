// Ts parent with button open modal
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, TemplateRef, ViewChild } from '@angular/core';

constructor(private modalService: BsModalService) {}

modalRef?: BsModalRef;
@ViewChild('template') template!: TemplateRef<any>;

openModal() {
    this.modalRef = this.modalService.show(this.template, Object.assign({}, { class: 'modal-dialog modal-dialog-scrollable' }));
}

closeModal() {
    this.modalRef?.hide();
}

// View modal with parent
// Modal scroll
<ng-template #createQuestionCategoryTemplate>
    <div class="modal-header">
        <h5 class="modal-title mt-0" id="exampleModalScrollableTitle">Scrollable Modal</h5>
        <button type="button" class="close" (click)="handleOnCloseCreateQuestionCategoryModal()">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
       
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-light waves-effect" (click)="handleOnCloseCreateQuestionCategoryModal()">Đóng</button>
        <button type="button" class="btn btn-primary waves-effect waves-light">Xác nhận</button>
    </div>
</ng-template>
