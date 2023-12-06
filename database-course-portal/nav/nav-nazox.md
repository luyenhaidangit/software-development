 <ul class="nav nav-tabs nav-tabs-custom nav-justified d-inline-flex" role="tablist">
                <li *ngFor="let questionType of questionContant.types;" class="nav-item">
                    <span class="nav-link" [ngClass]="{'active' : questionType.key === question.type}">
                        <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                        <span class="d-none d-sm-block">{{ questionType.value }}</span> 
                    </span>
                </li>
            </ul>
