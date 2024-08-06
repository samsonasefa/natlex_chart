import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ChartOption, ChartType, options } from '../../constants/options';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface ChartSettingForm {
  mode: 'edit' | 'add';
  existedCharts: ChartType[];
  title?: string;
  type?: ChartType;
  subtitle?: string;
}

@Component({
  selector: 'app-chart-setting-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './chart-setting-modal.component.html',
  styleUrl: './chart-setting-modal.component.scss',
})
export class ChartSettingModalComponent {
  readonly chartOptions = options.chartOptions;
  readonly modalTitle =
    this.data.mode === 'add' ? 'Add new chart' : 'Modify chart property';
  public formGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ChartSettingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChartSettingForm
  ) {}

  ngOnInit(): void {
    this.buildForm({
      title: this.data.title ?? undefined,
      type: this.data.type ?? undefined,
      subTitle: this.data.subtitle ?? undefined,
    });
  }

  /**
   * Builds the form
   * @param initialData if there is any initial data use that to build the form
   */
  private buildForm(initialData: Partial<any>) {
    this.formGroup = new FormGroup({
      title: new FormControl(
        initialData?.['title'] ?? '',
        Validators.compose([Validators.required])
      ),
      type: new FormControl(
        initialData?.['type'] ?? '',
        Validators.compose([Validators.required])
      ),
      subTitle: new FormControl(initialData?.['subTitle'] ?? ''),
    });
  }

  /**
   * On cancel button click handler
   */
  onCancel() {
    this.dialogRef.close();
  }

  /**
   * On save button click handler
   */
  onSave() {
    this.dialogRef.close({ ...this.formGroup.value });
  }

  /**
   * Check if the chart type is exist to avoid duplicated charts
   */
  IsChartTypeExist(item: ChartOption): boolean {
    return this.data.existedCharts.includes(item.value);
  }
}
