// Ts parent with button open modal
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

constructor(private modalService: BsModalService) {}

modalRef?: BsModalRef;
@ViewChild('template') template!: TemplateRef<any>;

openModal() {
    this.modalRef = this.modalService.show(this.template);
}

closeModal() {
    this.modalRef?.hide();
}

// View modal cùng parent
<ng-template #template>
</ng-template>
