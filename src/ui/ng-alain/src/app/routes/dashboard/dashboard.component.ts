import { Component, OnInit, AfterViewInit, } from '@angular/core';

import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';

import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { G2BarData } from '@delon/chart/bar';
import { NzMessageService } from 'ng-zorro-antd/message';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})


export class DashboardComponent implements AfterViewInit {

  ngOnInit() {
 
  }

 
  dateFormat = 'yyyy/MM/dd';
  pickerRanges = {
    '今天': [moment().toDate(), moment().toDate()],
    '昨天': [moment().subtract(1, 'days').toDate(), moment().subtract(1, 'days').toDate()],
    '最近7天': [moment().subtract(6, 'days').toDate(), moment().toDate()],
    '最近30天': [moment().subtract(29, 'days').toDate(), moment().toDate()],
    '本月': [moment().startOf("month").toDate(), moment().endOf("month").toDate()],
    '上月': [moment().subtract(1, "months").startOf("month").toDate(), moment().subtract(1, "months").endOf("month").toDate()],
    '全部': [moment("1-1-1", "MM-DD-YYYY").toDate(), moment("12-31-9999", "MM-DD-YYYY").toDate()]
  };

  summaries: Summary[] = [];
  summaritotlees: Summary[] = [];
  summarinumes: Summary[] = [];
  summariempes: Summary[] = [];
  lineChartData: any[] = [];
  constructor(private http: _HttpClient) {  }

  salesData: G2BarData[] = new Array(12).fill({}).map((_i, idx) => ({
    x: `0月`,
    y: 0,
    color: idx > 5 ? '#f50' : undefined,
  }));

  ngAfterViewInit(): void {
    this.rangePickerChange(this.pickerRanges.本月);
    setTimeout(() => {
      this.salesLine();
    }, 100);
  }

  rangePickerChange(e) {
    if (e.length === 0) {
      return;
    }
    const start = e[0].toLocaleDateString()
    const end = e[1].toLocaleDateString();
    //this.summaryData(start, end);
    //this.userLine(start, end);
    this.reportseld(start, end);
    this.salesLine();
  }

  ///** 当月统计数据 */
  //summaryData(start, end) {
  //  const url = `api/admin/dashboard/SummaryData?start=${start}&end=${end}`;
  //  this.http.get(url).subscribe((res: any) => {
  //    if (!res) {
  //      return;
  //    }
  //    this.summaries = [];
  //    this.summaries.push({ data: `${res.users.ValidCount} / ${res.users.TotalCount}`, text: '用户：已激活 / 总计', bgColor: 'bg-primary' });
  //    this.summaries.push({ data: `${res.roles.AdminCount} / ${res.roles.TotalCount}`, text: '角色：管理 / 总计', bgColor: 'bg-success' });
  //    this.summaries.push({ data: `${res.modules.SiteCount} / ${res.modules.AdminCount} / ${res.modules.TotalCount}`, text: '模块：前台 / 管理 / 总计', bgColor: 'bg-orange' });
  //    this.summaries.push({ data: `${res.functions.ControllerCount} / ${res.functions.TotalCount}`, text: '功能：控制器 / 总计', bgColor: 'bg-magenta' });
  //  });
  //}



  reportseld(start, end)  {
    const url = `api/admin/dashboard/ReportSeld?start=${start}&end=${end}`;


    this.http.get(url).subscribe((res: any) => {


      if (!res) {

        return;
      }

      this.summaries = [];
      this.summaritotlees = [];
      this.summarinumes = [];
      this.summariempes = [];

      //第一排
      this.summaries.push({ data: `${res.salesoutall}`, text: '累计销售总额（元）', bgColor: 'bg-red' });
      this.summaries.push({ data: `${res.salesout}`, text: '月销售总额（元）', bgColor: 'bg-success' });
      this.summaries.push({ data: `${res.salesoutleijilirun}`, text: '累计利润估（元）（最新进价）', bgColor: 'bg-success' });
      this.summaries.push({ data: `${res.salesoutyuelirun}`, text: '月利润估（元）（最新进价）', bgColor: 'bg-success' });

      //第二排
     
      this.summaritotlees.push({ data: `${res.salesoutchenqwei}`, text: '陈伟月销售额（元）', bgColor: 'bg-success' });
      this.summaritotlees.push({ data: `${res.salesoutchenqqi}`, text: '陈琪月销售额（元）', bgColor: 'bg-success' });
      this.summaritotlees.push({ data: `${res.salesin}`, text: '月采购总和（元）', bgColor: 'bg-orange' });
      this.summaritotlees.push({ data: `${res.salesoutcomplete}`, text: '月已签回销售额（元）', bgColor: 'bg-orange' });
      //第三排
      this.summariempes.push({ data: `${res.salesincomplete}`, text: '月支付供应商总额（元）', bgColor: 'bg-success' });
      this.summariempes.push({ data: `${res.kucungujia}`, text: '库存价值估（元）（最新进价）', bgColor: 'bg-success' });
      this.summarinumes.push({ data: `${res.salesoutnum}`, text: '月销售单总量（单）', bgColor: 'bg-orange' });
      this.summarinumes.push({ data: `${res.salesoutnumcomplete}`, text: '月销售单签回量（单）', bgColor: 'bg-orange' });


 
    });
  }

  /** 每月销售曲线 */
  //salesLine(start, end) {
  //  let url = `api/admin/dashboard/LineData?start=${start}&end=${end}`;
  //  this.http.get(url).subscribe((res: any[]) => {
  //    if (!res || !res.length) {
  //      return;
  //    }
  //    for (const item of res) {
  //      this.lineChartData.push({
  //        x: new Date(item.Date),
  //        y1: item.DailyCount,
  //        y2: item.DailySum
  //      });
       
  //    }
  //    console.log(res);
  //  });

  //}

 

/** 本年度每月销售柱状图 */
  salesLine() {

    const url = `api/admin/dashboard/ReportSeldLine`;
     this.http.get(url).subscribe((res: any) => {
       if (!res) {
          console.log('res is null');
          return;

        }
        console.log(res);
       for (let i = 0; i < 12; i++) {

   
          if (this.salesData[i].x) {
          // this.salesData[i].x = parseInt(res.table[i].salemonth);
          //  this.salesData[i].y = parseInt(res.table[i].salesout);

            this.salesData.push({
              x: '2020-10',
              y: '246',
               color: '#f50',
            });

     
          }
          else { return;}
         };
        
         
      });
   }
  

  // salesData: G2BarData[] = new Array(12).fill({}).map((_i, idx) => ({
  //    x: `${idx + 1}月`,
  //    y: Math.floor(Math.random() * 1000) + 1200,
  //    color: idx > 5 ? '#f50' : undefined,
  //  }));

  //  handleClick(): void {
    
  //}

/** 工作日历 */
    date = new Date();
    mode: NzCalendarModule = 'month';

    panelChange(change: { date: Date; mode: string }): void {
      console.log(change.date, change.mode);
    }
}
export class Summary {
  data: string;
  text: string;
  bgColor = 'bg-primary';
}

