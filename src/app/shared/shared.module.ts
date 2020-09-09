import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

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
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    CommonModule,
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
    WizardStepComponent,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    
  ]
})
export class SharedModule { }
