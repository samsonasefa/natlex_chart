import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { Chart } from '../../model/chart.model';
import { Store } from '@ngrx/store';
import { selectCharts } from '../../state/charts.selectors';
import { CommonModule } from '@angular/common';
import { ChartsActions } from '../../state/charts.actions';
import { ChartSettingModalService } from '../../modal/chart-setting-modal/chart-setting-modal.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../../modal/confirm-modal/confirm-modal.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ChartType } from '../../constants/options';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  chartConfigs: Observable<readonly Chart[]>;
  ChartSamples = ['line', 'candlestick', 'map', 'gantt'];
  pointer = 0;
  removedChart = [];

  constructor(
    private store: Store,
    private chartModalSvc: ChartSettingModalService,
    private confirmDialog: MatDialog,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.chartConfigs = this.store.select(selectCharts);
    /**
     * adding custome svg icons
     */
    iconRegistry.addSvgIcon(
      'map_chart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/map_chart.svg')
    );
    iconRegistry.addSvgIcon(
      'gantt_chart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/gantt_chart.svg')
    );
  }

  /**
   * A function to trigger add chart
   */
  onAdd(): void {
    // get the list of existed chart type
    let chartTypes: ChartType[] = [];
    this.chartConfigs.subscribe((charts) => {
      chartTypes = charts.map((chart) => chart.type);
    });

    // list of type of loaded chart
    this.chartModalSvc
      .open({ mode: 'add', existedCharts: chartTypes })
      .subscribe(async (data) => {
        console.log(' the data ', data);
        // todo validate if the exact chart is exist
        if (data?.title && data?.type) {
          this.store.dispatch(
            ChartsActions.addChart({
              chart: {
                id: `${new Date().getTime()}`,
                title: data.title,
                type: data.type,
                hide: false,
              },
            })
          );
        }
      });
  }

  /**
   * A function responsible to Hide/unHide charts
   * @param id chart id
   * @param hide should be visible
   */
  changeVisibility(id: string, hide: boolean): void {
    this.store.dispatch(ChartsActions.hideChart({ id, hide }));
  }

  /**
   * A function to trigger edit chart
   */
  onEdit(chart: Chart): void {
    // get the list of existed chart type
    let chartTypes: ChartType[] = [];
    this.chartConfigs.subscribe((charts) => {
      chartTypes = charts.map((chart) => chart.type);
    });

    this.chartModalSvc
      .open({ mode: 'edit', existedCharts: chartTypes, ...chart })
      .subscribe(async (data) => {
        console.log(' the data -> ', data);
        // todo validate if the exact chart is exist
        if (data?.title && data?.type) {
          this.store.dispatch(
            ChartsActions.editChart({
              chart: {
                id: chart.id,
                title: data.title,
                type: data.type,
                hide: false,
              },
            })
          );
        }
      });
  }

  /**
   * A function to trigger delete chart
   */
  onDelete(chart: Chart) {
    this.confirmDialog
      .open<ConfirmModalComponent>(ConfirmModalComponent, {
        hasBackdrop: true,
        data: chart,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.store.dispatch(ChartsActions.removeChart({ id: chart.id }));
        }
      });
  }
}
