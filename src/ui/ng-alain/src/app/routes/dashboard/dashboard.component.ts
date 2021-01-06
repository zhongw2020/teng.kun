import { Component, OnInit, AfterViewInit, } from '@angular/core';

import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';

import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { G2BarData } from '@delon/chart/bar';
import { NzMessageService } from 'ng-zorro-antd/message';
import { G2PieData } from '@delon/chart/pie';
import { numberToChinese } from '@delon/abc';
import { NumberFormatStyle } from '@angular/common';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})


export class DashboardComponent implements AfterViewInit {
  total: string;
  totalqh: string;
  totalpd: string;
  totaljiaban: string;
  salesPieData: G2PieData[] = [];
  salesPieDataqh: G2PieData[] = [];
  salesPieDatajiaban: G2PieData[] = [];
  salesPieDataqingjia: G2PieData[] = [];
  salesPieDatapd: G2PieData[] = [];
  salesData: G2BarData[] = [];
  ngOnInit() {

   

  }

 
  dateFormat = 'yyyy/MM/dd';
  pickerRanges = {
    '今天': [moment().toDate(), moment().toDate()],
    '昨天': [moment().subtract(1, 'days').toDate(), moment().subtract(1, 'days').toDate()],
    '最近7天': [moment().subtract(6, 'days').toDate(), moment().toDate()],
    '最近30天': [moment().subtract(29, 'days').toDate(), moment().toDate()],
    '最近40天': [moment().subtract(39, 'days').toDate(), moment().toDate()],
    '本月': [moment().startOf("month").toDate(), moment().endOf("month").toDate()],
    '上月': [moment().subtract(1, "months").startOf("month").toDate(), moment().subtract(1, "months").endOf("month").toDate()],
    '全部': [moment("1-1-1", "MM-DD-YYYY").toDate(), moment("12-31-9999", "MM-DD-YYYY").toDate()]
  };

  summaries: Summary[] = [];
  summaritotlees: Summary[] = [];
  summarinumes: Summary[] = [];
  summariempes: Summary[] = [];

  constructor(private http: _HttpClient) {  }

  ngAfterViewInit(): void {
    this.rangePickerChange(this.pickerRanges.本月);
  
  }

  rangePickerChange(e) {
    if (e.length === 0) {
      return;
    }
    const start = e[0].toLocaleDateString();
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
      this.salesPieDataqh = [];
      this.salesPieData = [];
      this.salesPieDatapd = [];
      this.salesPieDatajiaban = [];

      //第一排
      this.summaries.push({ data: `${res.salesoutall}`, text: '2020-10~至今总销售额', bgColor: 'bg-red' });
      this.summaries.push({ data: `${res.salesoutleijilirun}`, text: '2020-10~至今总利润', bgColor: 'bg-success' });
      this.summaries.push({ data: `${res.salesout}`, text: '某时间段销售总额（元）', bgColor: 'bg-success' });
   
      this.summaries.push({ data: `${res.salesoutyuelirun}`, text: '某时间段利润（元）', bgColor: 'bg-success' });

      //第二排
    
      this.summaritotlees.push({ data: `${res.salesoutrilirunxt}`, text: '今日利润（元）', bgColor: 'bg-orange' });
  
      this.summaritotlees.push({ data: `${res.salesin}`, text: '某时间段采购总和（元）', bgColor: 'bg-orange' });
      //this.summaritotlees.push({ data: `${res.salesoutcomplete}`, text: '月已签回销售额（元）', bgColor: 'bg-orange' });
      //this.summariempes.push({ data: `${res.salesoutrilirun}`, text: '某日利润（元）', bgColor: 'bg-success' });
      this.summaritotlees.push({ data: `${res.salesoutcoudan}`, text: '某时间段凑单销售额（元）', bgColor: 'bg-success' });
      //this.summariempes.push({ data: `${res.salesincomplete}`, text: '月支付供应商总额（元）', bgColor: 'bg-success' });

      this.summaritotlees.push({ data: `${res.kucungujia}`, text: '库存价值（元）（最新进价）', bgColor: 'bg-success' });
      //第三排
      
  



      
      //饼状图月销售情况
      this.salesPieData.push({ x: '陈伟（元）', y: Number.parseFloat(`${res.salesoutchenqwei}`) });
      this.salesPieData.push({ x: '陈琪（元）', y: Number.parseFloat(`${res.salesoutchenqqi}`) });
      this.salesPieData.push({ x: '刘谨明（元）', y: Number.parseFloat(`${res.salesoutliujm}`) });
      this.salesPieData.push({ x: '其他（元）', y: Number.parseFloat(`${res.salesout}`) - Number.parseFloat(`${res.salesoutchenqwei}`) - Number.parseFloat(`${res.salesoutchenqqi}`) - Number.parseFloat(`${res.salesoutliujm}`) });
      this.total = `&yen ${this.salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`;



      //饼状图人员派单单量情况

      this.salesPieDatapd.push({ x: '陈伟（单）', y: Number.parseInt(`${res.paidanchenwei}`) });
      this.salesPieDatapd.push({ x: '陈琪（单）', y: Number.parseInt(`${res.paidanchenqi}`) });
      this.salesPieDatapd.push({ x: '其他（单）', y: Number.parseInt(`${res.paidannum}`) - Number.parseInt(`${res.paidanchenwei}`) - Number.parseInt(`${res.paidanchenqi}`) });

      this.totalpd = ` ${res.paidannum}` + '单';


      //饼状图月签回单量情况

      this.salesPieDataqh.push({ x: '已签回（单）', y: Number.parseInt(`${res.salesoutnumcomplete}`)});
      this.salesPieDataqh.push({ x: '未签回（单）', y: Number.parseInt(`${res.salesoutnum}`) - Number.parseInt(`${res.salesoutnumcomplete}`) });
      this.totalqh = ` ${ res.salesoutnum }`+'单';

      //饼状图月加班时间情况

      this.salesPieDatajiaban.push({ x: '万文英', y: Number.parseFloat(`${res.jiabanwan}`) });
      this.salesPieDatajiaban.push({ x: '龙玉玲', y: Number.parseFloat(`${res.jiabanlong}`) });
      this.salesPieDatajiaban.push({ x: '陈伟', y: Number.parseFloat(`${res.jiabancw}`) });
      this.salesPieDatajiaban.push({ x: '陈琪', y: Number.parseFloat(`${res.jiabancq}`) });
      this.totaljiaban = (Number.parseFloat(`${res.jiabanwan}`) + Number.parseFloat(`${res.jiabanlong}`) + Number.parseFloat(`${res.jiabancw}`) + Number.parseFloat(`${res.jiabancq}`)).toString()+'小时';

      //饼状图月请假时间情况

      //this.salesPieDataqingjia.push({ x: '万文英', y: Number.parseFloat(`${res.jiaban.table[0].BpSponsor}`) });
      //this.salesPieDataqingjia.push({ x: '龙玉玲', y: Number.parseFloat(`${res.jiaban.table[0].BpSponsor}`) });
      //this.salesPieDataqingjia.push({ x: '陈伟', y: Number.parseFloat(`${res.jiaban.table[0].BpSponsor}`) });
      //this.salesPieDataqingjia.push({ x: '陈琪', y: Number.parseFloat(`${res.jiaban.table[0].BpSponsor}`) });
      //this.totalqh = `${this.salesPieDataqingjia.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`;
    });
  }

  /** 每月销售曲线 */


//销售情况饼状图
  format(val: number): string {
    return `&yen ${val.toFixed(2)}`;
  }

/** 本年度每月销售柱状图 */

  salesLine() {

    const url = `api/admin/dashboard/ReportSeldLine`;
    this.http.get(url).subscribe((res: any) => {
      if (!res) {
        return;
      }
      //res.forEach(element => {
      ////  //this.salesData.push({ x: element.salemonth, y: element.salesout, color: '#f50' });
      //  this.salesData.push({ x: '1', y: 2222, color: '#f50' });
      //});
      for (var i = 0; i < 12; i++)
      {
        this.salesData.push({ x: `${res.table[i].salemonth}`, y: Number.parseFloat(`${res.table[i].salesout}`), color: '#f50' });
      }
     

    });
   }
  



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

