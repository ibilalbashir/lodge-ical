import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { AnchorNavigatorComponent } from './anchor-navigator/anchor-navigator.component';
import { AnchorDirective } from './anchor-navigator/anchor.directive';
import { CollapseSectionComponent } from './collapse-section/collapse-section.component';
import { CorrespondenceCardComponent } from './correspondence-card/correspondence-card.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@NgModule({
  declarations: [
    AnchorNavigatorComponent,
    AnchorDirective,
    CollapseSectionComponent,
    CorrespondenceCardComponent,
    WizardComponent,
    WizardStepComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatInputModule,
    MatMenuModule
  ],
  exports: [
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatMenuModule,
    AnchorNavigatorComponent,
    AnchorDirective,
    CollapseSectionComponent,
    CorrespondenceCardComponent,
    WizardComponent,
    WizardStepComponent
  ]
})
export class SharedModule { }
