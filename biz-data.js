// ============================================================
// 威沃商务助手 · 可维护数据文件（biz-data.js）——【报价版】
// ⚠️ 本文件由 biz-data-审单.js 自动派生，请勿手工修改！
//    改价流程：维护后台 maintain.html → 导出 biz-data.js（=审单版）
//              → 放到 E:\业务助手\ 跑「报价库工具\一键分发.bat」→ 本文件自动更新。
//    限价口径：报价端旧口径（各系列 0.72/0.70/0.73/0.76…），
//              与「威沃审单系统」的统一 0.7 不同，两边已分家。
//    面价 / 平台价 / 配件价 / 系统选项 / 主体 / 业务员 与审单版完全一致。
//    来源数据时间：2026-11-07 14:52:01
// ============================================================

var QUOTE_DATA = {
  "generatedAt": "2026-11-07 14:52:01",
  "sources": [
    {
      "key": "primary",
      "label": "主推",
      "version": "20261107",
      "validUntil": "11月30日",
      "fileName": "主推产品报价表（7月27更新）有效期7月30.xlsx",
      "series": [
        {
          "name": "IPRO(x86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 950
            },
            {
              "name": "12.1",
              "price": 1100
            },
            {
              "name": "15",
              "price": 1130
            },
            {
              "name": "15.6",
              "price": 1100
            },
            {
              "name": "17",
              "price": 1100
            },
            {
              "name": "19",
              "price": 1150
            },
            {
              "name": "21.5",
              "price": 1150
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IPRO(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 950
            },
            {
              "name": "12.1",
              "price": 1100
            },
            {
              "name": "15",
              "price": 1130
            },
            {
              "name": "15.6",
              "price": 1100
            },
            {
              "name": "17",
              "price": 1100
            },
            {
              "name": "19",
              "price": 1150
            },
            {
              "name": "21.5",
              "price": 1150
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+32)+蓝牙/HDMI IN/单网",
                  "price": 850
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 650
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 840
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1370
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 1940
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IPRO-SE(x86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "7",
              "price": 550
            },
            {
              "name": "8",
              "price": 700
            },
            {
              "name": "10.1",
              "price": 800
            },
            {
              "name": "13.3",
              "price": 1050
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3317U双网 for SE(1*D3/8/MS)",
                  "price": 620
                },
                {
                  "name": "5代i3-5005U双网(1*D3/8/M2)",
                  "price": 640
                },
                {
                  "name": "5代i5-5350U双网(1*D3/8/M2)",
                  "price": 860
                },
                {
                  "name": "6代i5-6200U双网(1*D3/8/M2)",
                  "price": 1000
                },
                {
                  "name": "7代i3-7100U双网(1*D4/16/M2)",
                  "price": 820
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IPRO-SE(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "7",
              "price": 550
            },
            {
              "name": "8",
              "price": 700
            },
            {
              "name": "10.1",
              "price": 800
            },
            {
              "name": "13.3",
              "price": 1050
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+32)+蓝牙/HDMI IN/单网",
                  "price": 850
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 650
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 840
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1370
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 1940
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "机械硬盘",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "VFACE",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 1100
            },
            {
              "name": "12.1",
              "price": 1200
            },
            {
              "name": "15",
              "price": 1150
            },
            {
              "name": "15.6",
              "price": 1250
            },
            {
              "name": "17",
              "price": 1250
            },
            {
              "name": "17.3",
              "price": 1300
            },
            {
              "name": "18.5",
              "price": 1400
            },
            {
              "name": "19",
              "price": 1400
            },
            {
              "name": "21.5",
              "price": 1350
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "VFACE-H",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 1300
            },
            {
              "name": "12.1",
              "price": 1450
            },
            {
              "name": "15",
              "price": 1400
            },
            {
              "name": "15.6",
              "price": 1400
            },
            {
              "name": "17",
              "price": 1450
            },
            {
              "name": "17.3",
              "price": 1500
            },
            {
              "name": "18.5",
              "price": 1650
            },
            {
              "name": "19",
              "price": 1600
            },
            {
              "name": "21.5",
              "price": 1600
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "H310（DC）/6-9代/D3",
                  "price": 960
                },
                {
                  "name": "H610/双网（DC）/12-14代/2*D4/32/M2",
                  "price": 1200
                },
                {
                  "name": "H610/3网（DC）/12-14代/2*D4/32/M2",
                  "price": 1560
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "VOPC(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15",
              "price": 1000
            },
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "17",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1000
            },
            {
              "name": "19",
              "price": 1050
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1550
            },
            {
              "name": "27",
              "price": 1950
            },
            {
              "name": "32",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "VOPC(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15",
              "price": 1000
            },
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "17",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1000
            },
            {
              "name": "19",
              "price": 1050
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1550
            },
            {
              "name": "27",
              "price": 1950
            },
            {
              "name": "32",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+32)+蓝牙/HDMI IN/单网",
                  "price": 850
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 650
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 840
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1370
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 1940
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWS(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.1",
              "price": 1200,
              "cpuOptions": [
                "3代i5-3317U双网 for SE(1*D3/8/MS)",
                "5代i3-5005U双网(1*D3/8/M2)",
                "5代i5-5350U双网(1*D3/8/M2)",
                "6代i5-6200U双网(1*D3/8/M2)",
                "7代i3-7100U双网(1*D4/16/M2)"
              ]
            },
            {
              "name": "15.6",
              "price": 1450
            },
            {
              "name": "21.5",
              "price": 1450
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3317U双网 for SE(1*D3/8/MS)",
                  "price": 620
                },
                {
                  "name": "5代i3-5005U双网(1*D3/8/M2)",
                  "price": 640
                },
                {
                  "name": "5代i5-5350U双网(1*D3/8/M2)",
                  "price": 860
                },
                {
                  "name": "6代i5-6200U双网(1*D3/8/M2)",
                  "price": 1000
                },
                {
                  "name": "7代i3-7100U双网(1*D4/16/M2)",
                  "price": 820
                },
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "不要IC/ID",
                  "price": -120
                },
                {
                  "name": "不要二维码",
                  "price": -130
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWS(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.1",
              "price": 1200
            },
            {
              "name": "15.6",
              "price": 1450
            },
            {
              "name": "21.5",
              "price": 1450
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+32)+蓝牙/HDMI IN/单网",
                  "price": 850
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 650
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 840
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1370
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 1940
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "机械硬盘",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWE(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 1190
            },
            {
              "name": "12.1",
              "price": 1390
            },
            {
              "name": "15",
              "price": 1440
            },
            {
              "name": "15.6",
              "price": 1390
            },
            {
              "name": "17",
              "price": 1290
            },
            {
              "name": "17.3",
              "price": 1390
            },
            {
              "name": "18.5",
              "price": 1440
            },
            {
              "name": "19",
              "price": 1490
            },
            {
              "name": "21.5",
              "price": 1690
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWE(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 1190
            },
            {
              "name": "12.1",
              "price": 1390
            },
            {
              "name": "15",
              "price": 1440
            },
            {
              "name": "15.6",
              "price": 1390
            },
            {
              "name": "17",
              "price": 1290
            },
            {
              "name": "17.3",
              "price": 1390
            },
            {
              "name": "18.5",
              "price": 1440
            },
            {
              "name": "19",
              "price": 1490
            },
            {
              "name": "21.5",
              "price": 1690
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+32)+蓝牙/HDMI IN/单网",
                  "price": 850
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 650
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 840
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1370
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 1940
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI安卓",
              "options": [
                {
                  "name": "WIFI6",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "AirMax(x86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 0
            },
            {
              "name": "12.1",
              "price": 0
            },
            {
              "name": "15",
              "price": 0
            },
            {
              "name": "15.6",
              "price": 1020
            },
            {
              "name": "17",
              "price": 0
            },
            {
              "name": "19",
              "price": 0
            },
            {
              "name": "21.5",
              "price": 1260
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I5-3210M双网(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I5-5200U双网(2*D3/16/MS)",
                  "price": 950
                },
                {
                  "name": "I5-7200U双网(2*D3/16/M2)",
                  "price": 1080
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "DSMB02(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1100
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1400
            },
            {
              "name": "27",
              "price": 1800
            },
            {
              "name": "32",
              "price": 2200
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "200W摄像头",
                  "price": 50
                },
                {
                  "name": "500W摄像头",
                  "price": 130
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "DSMB02(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1100
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1400
            },
            {
              "name": "27",
              "price": 1800
            },
            {
              "name": "32",
              "price": 2200
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+32)+蓝牙/HDMI IN/单网",
                  "price": 850
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 650
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 840
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1370
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 1940
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IBOOKHY(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "18.5",
              "price": 0
            },
            {
              "name": "21.5",
              "price": 1200
            },
            {
              "name": "23.6",
              "price": 1600
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "DMBYH(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.1",
              "price": 556
            },
            {
              "name": "15.6",
              "price": 850
            },
            {
              "name": "18.5",
              "price": 1000
            },
            {
              "name": "21.5",
              "price": 1000
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+16)+WIFI/BT单网",
                  "price": 620
                },
                {
                  "name": "RK3566(2+32)+WIFI/BT单网",
                  "price": 690
                },
                {
                  "name": "RK3566(4+32)+WIFI/BT单网",
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+16)+WIFI/BT单网",
                  "price": 680
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "上架式工控机",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "IPC-610B(4U)",
              "price": 610,
              "own": "primary"
            },
            {
              "name": "IPC-300",
              "price": 660,
              "own": "primary"
            },
            {
              "name": "IPC-620(BG)",
              "price": 630,
              "own": "primary"
            },
            {
              "name": "IPC-610(4U)",
              "price": 850,
              "own": "secondary"
            },
            {
              "name": "IPC-810(4U)",
              "price": 1100,
              "own": "secondary"
            },
            {
              "name": "IPC-110-650(1U)",
              "price": 1250,
              "own": "secondary"
            },
            {
              "name": "IPC-210(2U)",
              "price": 960,
              "own": "secondary"
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "B85（ATX）/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 380
                },
                {
                  "name": "H311（ATX）/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 650
                },
                {
                  "name": "H610M（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 670
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3-4160T(2*D3/16/M2)",
                  "price": 110
                },
                {
                  "name": "I5-4590T(2*D3/16/M2)",
                  "price": 250
                },
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "8G(D4)台式机",
                  "price": 680
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1330
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WIFI6",
                  "price": 180
                }
              ]
            },
            {
              "name": "电源",
              "options": [
                {
                  "name": "500W电源",
                  "price": 220
                }
              ]
            },
            {
              "name": "显卡",
              "options": [
                {
                  "name": "710/2G",
                  "price": 600
                }
              ]
            }
          ]
        },
        {
          "name": "ANBOX",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "ANBOX",
              "price": 210
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(2+32)+蓝牙/HDMI IN/单网",
                  "price": 850
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 650
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 840
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1370
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 1940
                }
              ]
            }
          ]
        },
        {
          "name": "NANO",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "NANO",
              "price": 220
            },
            {
              "name": "NANO-I",
              "price": 270
            },
            {
              "name": "NANO-4/6L",
              "price": 270
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "N2840双网(1*D3/8/MS)",
                  "price": 440
                },
                {
                  "name": "J1900双网 for NANO(1*D3/8/MS)",
                  "price": 620
                },
                {
                  "name": "I3-5005U双网(1*D3/8/MS)",
                  "price": 620
                },
                {
                  "name": "I5-4200U双网(1*D3/8/MS)",
                  "price": 780
                },
                {
                  "name": "I7-4500U双网(1*D3/8/MS)",
                  "price": 880
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "4G模块",
                  "price": 290
                }
              ]
            }
          ]
        },
        {
          "name": "UNO",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "UNO",
              "price": 308
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I5-6300U双网(1*D3/8/M2)",
                  "price": 980
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "单层IO",
                  "price": -60
                }
              ]
            }
          ]
        },
        {
          "name": "GW系列",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "GW-100",
              "price": 400,
              "cpuOptions": [
                "I3-8145U双网(2*D4/32/M2)",
                "I7-8565U双网(2*D4/32/M2)",
                "I5-8257U四网(2*D4/32/M2)",
                "I5-7200U双网(2*D4/16/M2)"
              ]
            },
            {
              "name": "GW-200",
              "price": 575,
              "cpuOptions": [
                "I5-3210M双网(2*D3/16/M2)",
                "I5-5200U双网(2*D3/16/M2)",
                "I5-7200U双网(2*D3/16/M2)"
              ]
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I5-3210M双网(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I3-8145U双网(2*D4/32/M2)",
                  "price": 1700
                },
                {
                  "name": "I7-8565U双网(2*D4/32/M2)",
                  "price": 2880
                },
                {
                  "name": "I5-8257U四网(2*D4/32/M2)",
                  "price": 2500
                },
                {
                  "name": "I5-7200U双网(2*D4/16/M2)",
                  "price": 1400
                },
                {
                  "name": "I5-5200U双网(2*D3/16/M2)",
                  "price": 1030
                },
                {
                  "name": "I5-7200U双网(2*D3/16/M2)",
                  "price": 1280
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            }
          ]
        },
        {
          "name": "BPC-101",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "BPC-101",
              "price": 350
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                }
              ]
            }
          ]
        },
        {
          "name": "BPC-102",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "BPC-102H",
              "price": 550
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "H310（DC）/6-9代/D3",
                  "price": 960
                },
                {
                  "name": "H610/双网（DC）/12-14代/2*D4/32/M2",
                  "price": 1200
                },
                {
                  "name": "H610/3网（DC）/12-14代/2*D4/32/M2",
                  "price": 1560
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WIFI6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": []
            }
          ]
        },
        {
          "name": "BPC-103",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "BPC-103",
              "price": 220,
              "lockCats": [
                "主板"
              ],
              "lockNote": {
                "主板": "主板已含 CPU（板载）"
              },
              "banDesktopCpu": true
            },
            {
              "name": "BPC-103(H)",
              "price": 320
            },
            {
              "name": "BPC-103L",
              "price": 1820,
              "specNote": "含5网主板",
              "lockCats": [
                "主板"
              ],
              "lockNote": {
                "主板": "机箱已含主板（5 网）"
              },
              "cpuOptions": [
                "I3 6100",
                "I5 6500",
                "I7 6700",
                "I3-7100",
                "I5-7400",
                "I7-7700",
                "I3-8100",
                "I5-8400",
                "I7-8700",
                "I3-9100",
                "I5-9400",
                "I7-9700"
              ]
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "含主板",
                  "price": 0
                },
                {
                  "name": "H310（DC）/6-9代/2*D3/16/M2",
                  "price": 960
                },
                {
                  "name": "H610/双网（DC）/12-14代/2*D4/32/M2",
                  "price": 1200
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                },
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            }
          ]
        },
        {
          "name": "三防平板",
          "product": "三防",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "RT-08MG",
              "price": 0,
              "cpuOptions": [
                "RT-08MG/MTK8781/4G/64G/单网/安卓13",
                "RT-08MG/MTK8781/8G/128G/单网/安卓13",
                "RT-08MG/MTK8781/12G/256G/单网/安卓13"
              ]
            },
            {
              "name": "RT-08D9",
              "price": 0,
              "cpuOptions": [
                "RT-08D9/MT6877/8G/128G/单网/安卓14/5G",
                "RT-08D9/MT6877/8G/256G/单网/安卓14/5G"
              ]
            },
            {
              "name": "RT-08NF",
              "price": 0,
              "cpuOptions": [
                "RT-08NF/N5100/8G/128G/单网",
                "RT-08NF/N5100/8G/256G/单网",
                "RT-08NF/N5100/16G/256G/单网"
              ]
            },
            {
              "name": "RT-08RA",
              "price": 0,
              "cpuOptions": [
                "RT-08RA/RK3588/8G/128G/单网/安卓14",
                "RT-08RA/RK3588/16G/128G/单网/安卓14",
                "RT-08RA/RK3588/16G/256G/单网/安卓14"
              ]
            },
            {
              "name": "RT-08RU",
              "price": 0,
              "cpuOptions": [
                "RT-08RU/RK3588/8G/128G/单网/Ubuntu22.04",
                "RT-08RU/RK3588/16G/128G/单网/Ubuntu22.04",
                "RT-08RU/RK3588/16G/256G/单网/Ubuntu22.04"
              ]
            },
            {
              "name": "RT-08RK",
              "price": 0,
              "cpuOptions": [
                "RT-08RK/RK3588/8G/128G/单网/银河麒麟(国防版)",
                "RT-08RK/RK3588/16G/128G/单网/银河麒麟(国防版)",
                "RT-08RK/RK3588/16G/256G/单网/银河麒麟(国防版)"
              ]
            },
            {
              "name": "T8",
              "price": 0,
              "cpuOptions": [
                "T8/MTK6761/2G/32G/WIFI"
              ]
            },
            {
              "name": "RT-10MG",
              "price": 0,
              "cpuOptions": [
                "RT-10MG/MTK8781/4G/64G/单网/安卓13",
                "RT-10MG/MTK8781/8G/128G/单网/安卓13",
                "RT-10MG/MTK8781/12G/256G/单网/安卓13"
              ]
            },
            {
              "name": "RT-10D9",
              "price": 0,
              "cpuOptions": [
                "RT-10D9/MT6877/8G/128G/单网/安卓14/5G",
                "RT-10D9/MT6877/8G/256G/单网/安卓14/5G"
              ]
            },
            {
              "name": "RT-10NF",
              "price": 0,
              "cpuOptions": [
                "RT-10NF/N5100/8G/128G/单网",
                "RT-10NF/N5100/8G/256G/单网",
                "RT-10NF/N5100/16G/256G/单网"
              ]
            },
            {
              "name": "RT-10C",
              "price": 0,
              "cpuOptions": [
                "RT-10C/I5-1235U/16G/128G/单网",
                "RT-10C/I5-1235U/16G/256G/单网",
                "RT-10C/I5-1235U/16G/512G/单网",
                "RT-10C/I7-1255U/16G/128G/单网",
                "RT-10C/I7-1255U/16G/256G/单网",
                "RT-10C/I7-1255U/16G/512G/单网"
              ]
            },
            {
              "name": "RT-10RA",
              "price": 0,
              "cpuOptions": [
                "RT-10RA/RK3588/16G/128G/单网/安卓14",
                "RT-10RA/RK3588/16G/256G/单网/安卓14",
                "RT-10RA/RK3588/16G/512G/单网/安卓14"
              ]
            },
            {
              "name": "RT-10RU",
              "price": 0,
              "cpuOptions": [
                "RT-10RU/RK3588/16G/128G/单网/Ubuntu22.04",
                "RT-10RU/RK3588/16G/256G/单网/Ubuntu22.04",
                "RT-10RU/RK3588/16G/512G/单网/Ubuntu22.04"
              ]
            },
            {
              "name": "RT-10RK",
              "price": 0,
              "cpuOptions": [
                "RT-10RK/RK3588/16G/128G/单网/银河麒麟(国防版)",
                "RT-10RK/RK3588/16G/256G/单网/银河麒麟(国防版)",
                "RT-10RK/RK3588/16G/512G/单网/银河麒麟(国防版)"
              ]
            },
            {
              "name": "A10",
              "price": 0,
              "cpuOptions": [
                "A10/MT8781/8G/128G/WIFI"
              ]
            },
            {
              "name": "RT-12C",
              "price": 0,
              "cpuOptions": [
                "RT-12C/I5-1235U/16G/128G/单网",
                "RT-12C/I5-1235U/16G/256G/单网",
                "RT-12C/I5-1235U/16G/512G/单网",
                "RT-12C/I7-1255U/16G/128G/单网",
                "RT-12C/I7-1255U/16G/256G/单网",
                "RT-12C/I7-1255U/16G/512G/单网"
              ]
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "T8/MTK6761/2G/32G/WIFI",
                  "price": 1900
                },
                {
                  "name": "A10/MT8781/8G/128G/WIFI",
                  "price": 2700
                },
                {
                  "name": "RT-08MG/MTK8781/4G/64G/单网/安卓13",
                  "price": 3060
                },
                {
                  "name": "RT-08MG/MTK8781/8G/128G/单网/安卓13",
                  "price": 3560
                },
                {
                  "name": "RT-08MG/MTK8781/12G/256G/单网/安卓13",
                  "price": 4700
                },
                {
                  "name": "RT-08D9/MT6877/8G/128G/单网/安卓14/5G",
                  "price": 5160
                },
                {
                  "name": "RT-08D9/MT6877/8G/256G/单网/安卓14/5G",
                  "price": 5560
                },
                {
                  "name": "RT-08NF/N5100/8G/128G/单网",
                  "price": 5200
                },
                {
                  "name": "RT-08NF/N5100/8G/256G/单网",
                  "price": 6360
                },
                {
                  "name": "RT-08NF/N5100/16G/256G/单网",
                  "price": 7360
                },
                {
                  "name": "RT-08RA/RK3588/8G/128G/单网/安卓14",
                  "price": 6360
                },
                {
                  "name": "RT-08RA/RK3588/16G/128G/单网/安卓14",
                  "price": 7160
                },
                {
                  "name": "RT-08RA/RK3588/16G/256G/单网/安卓14",
                  "price": 7560
                },
                {
                  "name": "RT-08RU/RK3588/8G/128G/单网/Ubuntu22.04",
                  "price": 6360
                },
                {
                  "name": "RT-08RU/RK3588/16G/128G/单网/Ubuntu22.04",
                  "price": 7160
                },
                {
                  "name": "RT-08RU/RK3588/16G/256G/单网/Ubuntu22.04",
                  "price": 7560
                },
                {
                  "name": "RT-08RK/RK3588/8G/128G/单网/银河麒麟(国防版)",
                  "price": 6360
                },
                {
                  "name": "RT-08RK/RK3588/16G/128G/单网/银河麒麟(国防版)",
                  "price": 7160
                },
                {
                  "name": "RT-08RK/RK3588/16G/256G/单网/银河麒麟(国防版)",
                  "price": 7560
                },
                {
                  "name": "RT-10MG/MTK8781/4G/64G/单网/安卓13",
                  "price": 3360
                },
                {
                  "name": "RT-10MG/MTK8781/8G/128G/单网/安卓13",
                  "price": 3760
                },
                {
                  "name": "RT-10MG/MTK8781/12G/256G/单网/安卓13",
                  "price": 4900
                },
                {
                  "name": "RT-10D9/MT6877/8G/128G/单网/安卓14/5G",
                  "price": 5760
                },
                {
                  "name": "RT-10D9/MT6877/8G/256G/单网/安卓14/5G",
                  "price": 6160
                },
                {
                  "name": "RT-10NF/N5100/8G/128G/单网",
                  "price": 5400
                },
                {
                  "name": "RT-10NF/N5100/8G/256G/单网",
                  "price": 6760
                },
                {
                  "name": "RT-10NF/N5100/16G/256G/单网",
                  "price": 7760
                },
                {
                  "name": "RT-10C/I5-1235U/16G/128G/单网",
                  "price": 9960
                },
                {
                  "name": "RT-10C/I5-1235U/16G/256G/单网",
                  "price": 10360
                },
                {
                  "name": "RT-10C/I5-1235U/16G/512G/单网",
                  "price": 11360
                },
                {
                  "name": "RT-10C/I7-1255U/16G/128G/单网",
                  "price": 11960
                },
                {
                  "name": "RT-10C/I7-1255U/16G/256G/单网",
                  "price": 12360
                },
                {
                  "name": "RT-10C/I7-1255U/16G/512G/单网",
                  "price": 13360
                },
                {
                  "name": "RT-10RA/RK3588/16G/128G/单网/安卓14",
                  "price": 6560
                },
                {
                  "name": "RT-10RA/RK3588/16G/256G/单网/安卓14",
                  "price": 7360
                },
                {
                  "name": "RT-10RA/RK3588/16G/512G/单网/安卓14",
                  "price": 7760
                },
                {
                  "name": "RT-10RU/RK3588/16G/128G/单网/Ubuntu22.04",
                  "price": 6560
                },
                {
                  "name": "RT-10RU/RK3588/16G/256G/单网/Ubuntu22.04",
                  "price": 7360
                },
                {
                  "name": "RT-10RU/RK3588/16G/512G/单网/Ubuntu22.04",
                  "price": 7760
                },
                {
                  "name": "RT-10RK/RK3588/16G/128G/单网/银河麒麟(国防版)",
                  "price": 6560
                },
                {
                  "name": "RT-10RK/RK3588/16G/256G/单网/银河麒麟(国防版)",
                  "price": 7360
                },
                {
                  "name": "RT-10RK/RK3588/16G/512G/单网/银河麒麟(国防版)",
                  "price": 7760
                },
                {
                  "name": "RT-12C/I5-1235U/16G/128G/单网",
                  "price": 10560
                },
                {
                  "name": "RT-12C/I5-1235U/16G/256G/单网",
                  "price": 10960
                },
                {
                  "name": "RT-12C/I5-1235U/16G/512G/单网",
                  "price": 11960
                },
                {
                  "name": "RT-12C/I7-1255U/16G/128G/单网",
                  "price": 12560
                },
                {
                  "name": "RT-12C/I7-1255U/16G/256G/单网",
                  "price": 12960
                },
                {
                  "name": "RT-12C/I7-1255U/16G/512G/单网",
                  "price": 13960
                }
              ]
            }
          ],
          "highlights": {
            "RT-08MG": "一，这款机型内部预留了很大了空间，可以搭载canbus, lora, 内置超高频和身份证。\n二、摄像的可扩展性，目前这款机型前摄最高可支持1300万，后摄最高可以达到2100W（定制）\n三、支持车载宽压输入，支持省电池供电\n四、有4+64、8+128、12+256 3种内存。\n五、支持防爆\n六、10寸支持定制24000mAh电池\n★七、可定制高清1200*1920,800nits/1000nits",
            "RT-10MG": "一，这款机型内部预留了很大了空间，可以搭载canbus, lora, 内置超高频和身份证。\n二、摄像的可扩展性，目前这款机型前摄最高可支持1300万，后摄最高可以达到2100W（定制）\n三、支持车载宽压输入，支持省电池供电\n四、有4+64、8+128、12+256 3种内存。\n五、支持防爆\n六、10寸支持定制24000mAh电池\n★七、可定制高清1200*1920,800nits/1000nits",
            "RT-08D9": "1.目前功能接口最全的机器，自带网口，串口，航插（可扩展RJ45,RS232，DC，Canbus）\n2.支持防爆\n3.支持单北斗，支持宽压省电池供电，支持POE，支持模块删减，支持软件个性化定制\n4.可拆卸电池，支持对讲，支持RTK",
            "RT-10D9": "1.目前功能接口最全的机器，自带网口，串口，航插（可扩展RJ45,RS232，DC，Canbus）\n2.支持防爆\n3.支持单北斗，支持宽压省电池供电，支持POE，支持模块删减，支持软件个性化定制\n4.可拆卸电池，支持对讲，支持RTK",
            "RT-08NF": "1、可选4G,5G\n2、支持身份证模块，支持RFID,NFC，指纹等模块\n3、多种内存8+128 、8+256、16+128、16+256 多种规格可选",
            "RT-10NF": "1、可选4G,5G\n2、支持身份证模块，支持RFID,NFC，指纹等模块\n3、多种内存8+128 、8+256、16+128、16+256 多种规格可选",
            "RT-10C": "1.可拆卸电池方案，7.6V 10000mAh 大电池长续航\n2.内置加密TPM2.0模块\n3.自带防水风扇和散热仓，长时间稳定运行\n4.支持5G，支持身份证模块，支持RFID,NFC，指纹等模块\n5.可拆卸多存储可选，最高支持2TB",
            "RT-12C": "1.可拆卸电池方案，7.6V 10000mAh 大电池长续航\n2.内置加密TPM2.0模块\n3.自带防水风扇和散热仓，长时间稳定运行\n4.支持5G，支持身份证模块，支持RFID,NFC，指纹等模块\n5.可拆卸多存储可选，最高支持2TB",
            "RT-08RA": "1.可以适配安卓，国防麒麟，桌面麒麟，统信等多种系统\n2.可拆卸电池方案，多功能接口版本\n3.可拆卸SSD\n4.支持单北斗，4G.5G",
            "RT-08RU": "1.可以适配安卓，国防麒麟，桌面麒麟，统信等多种系统\n2.可拆卸电池方案，多功能接口版本\n3.可拆卸SSD\n4.支持单北斗，4G.5G",
            "RT-08RK": "1.可以适配安卓，国防麒麟，桌面麒麟，统信等多种系统\n2.可拆卸电池方案，多功能接口版本\n3.可拆卸SSD\n4.支持单北斗，4G.5G",
            "RT-10RA": "1.可以适配安卓，国防麒麟，桌面麒麟，统信等多种系统\n2.可拆卸电池方案，多功能接口版本\n3.可拆卸SSD\n4.支持单北斗，4G.5G",
            "RT-10RU": "1.可以适配安卓，国防麒麟，桌面麒麟，统信等多种系统\n2.可拆卸电池方案，多功能接口版本\n3.可拆卸SSD\n4.支持单北斗，4G.5G",
            "RT-10RK": "1.可以适配安卓，国防麒麟，桌面麒麟，统信等多种系统\n2.可拆卸电池方案，多功能接口版本\n3.可拆卸SSD\n4.支持单北斗，4G.5G"
          },
          "specs": {
            "RT-08MG/MTK8781": "8寸 MTK8781 ,安卓13，主频2.2GHZ   IP67，（4G+GPS+WIFI+BT5.3+NFC）\nLCD：800*1280, 300nits， TP：G+G  7H 盖板，10点触控， \n前摄500W，后摄1300W   电池10000MAH\n接口：DC+Type-C+USB2.0+耳机+RJ45+SIM/TF+NFC）",
            "RT-10MG/MTK8781": "10寸 MTK8781 ,安卓13，主频2.2GHZ   IP67，(4G+GPS+WIFI+BT5.3+NFC）\nLCD：800*1280, 300nits， TP：G+G  7H 盖板，10点触控， \n前摄500W，后摄1300W   电池10000MAH\n接口：DC+Type-C+USB2.0+耳机+RJ45+SIM/TF+NFC+RS232）",
            "RT-08D9/MT6877": "8.0寸，MT6877，主频2.4GHZ，安卓14系统   8+128存储（GPS+WIFI+B5.3T+NFC），800*1280 IPS 500nits LCD，康宁大猩猩三代盖板），IP67防水，前摄500W,后摄1300W，\n可拆卸电池8500MAH（DC+RJ45+Type-C+Type-A+耳机+航插扩展）",
            "RT-10D9/MT6877": "10.1寸，MT6877，主频2.4GHZ，安卓14系统   8+128存储（GPS+WIFI+BT5.3+NFC），800*1280 IPS 500nits LCD，康宁大猩猩三代盖板），IP67防水，前摄500W,后摄1300W，\n可拆卸电池10000MAH（DC+RJ45+Type-C+Type-A+耳机+RS232+航插扩展）",
            "RT-08NF/N5100": "8寸，intel N 5100,8GB +128GB,（GPS+WIFI+BT+NFC），800*1280 IPS 500nits LCD，10点触控，\n前摄500W,后摄800W，7.6V 5000mAh 电池，IP67防水（DC+HDMI+Type-C+Type-A+耳机+RJ45）",
            "RT-10NF/N5100": "10寸，intel N 5100,8GB +128GB,（GPS+WIFI+BT+NFC），800*1280 IPS 500nits LCD，10点触控，前摄500W,后摄800W\n7.6V 6000mAh电池，IP67防水\n（DC+HDMI+Type-C+Type-A+耳机+RJ45+RS232）",
            "RT-10C/I5-1235U": "10.1寸，12代coreI5，1235U，16GB+XGB，（4G+GPS+WIFI+BT),800*1280,IPS ,750nits LCD ,10点触控，7.6V，10000mAh可拆卸电池，IP65，（DC+HDMI+RJ45+Type-C+Type-A+耳机+航插扩展）",
            "RT-10C/I7-1255U": "10.1寸，12代coreI7，1255U，16GB+XGB，（4G+GPS+WIFI+BT),800*1280,IPS ,750nits LCD ,10点触控，7.6V，10000mAh可拆卸电池，IP65，（DC+HDMI+RJ45+Type-C+Type-A+耳机+航插扩展）",
            "RT-12C/I5-1235U": "12寸，12代coreI5，1235U，16GB+XGB，（4G+GPS+WIFI+BT),1200*2000,IPS ,750nits LCD ,10点触控，7.6V，10000mAh可拆卸电池，IP65，（DC+HDMI+RJ45+Type-C+Type-A+耳机+RS232+航插扩展）",
            "RT-12C/I7-1255U": "12寸，12代coreI7，1255U，16GB+XGB，（4G+GPS+WIFI+BT),1200*2000,IPS ,750nits LCD ,10点触控，7.6V，10000mAh可拆卸电池，IP65，（DC+HDMI+RJ45+Type-C+Type-A+耳机+RS232+航插扩展）",
            "RT-08RA/RK3588": "8寸，RK3588,8+128,800*1280,4200mAh可拆卸电池，IP67防水，（DC+HDMI+RJ45+Type-C+Type-A+耳机+航插扩展）（RA：安卓14，RU：ubuntu22.04,RK:银河麒麟（国防版）",
            "RT-08RU/RK3588": "8寸，RK3588,8+128,800*1280,4200mAh可拆卸电池，IP67防水，（DC+HDMI+RJ45+Type-C+Type-A+耳机+航插扩展）（RA：安卓14，RU：ubuntu22.04,RK:银河麒麟（国防版）",
            "RT-08RK/RK3588": "8寸，RK3588,8+128,800*1280,4200mAh可拆卸电池，IP67防水，（DC+HDMI+RJ45+Type-C+Type-A+耳机+航插扩展）（RA：安卓14，RU：ubuntu22.04,RK:银河麒麟（国防版）",
            "RT-10RA/RK3588": "10.1寸，RK3588,8+128,800*1280，7.6V 5000mAh可拆卸电池，IP67防水（DC+HDMI+RJ45+Type-C+Type-A+耳机+RS232+航插扩展），（RA：安卓14，RU：ubuntu22.04,RK:银河麒麟（国防版）",
            "RT-10RU/RK3588": "10.1寸，RK3588,8+128,800*1280，7.6V 5000mAh可拆卸电池，IP67防水（DC+HDMI+RJ45+Type-C+Type-A+耳机+RS232+航插扩展），（RA：安卓14，RU：ubuntu22.04,RK:银河麒麟（国防版）",
            "RT-10RK/RK3588": "10.1寸，RK3588,8+128,800*1280，7.6V 5000mAh可拆卸电池，IP67防水（DC+HDMI+RJ45+Type-C+Type-A+耳机+RS232+航插扩展），（RA：安卓14，RU：ubuntu22.04,RK:银河麒麟（国防版）"
          },
          "images": {
            "RT-08MG": "images/sanfang/RT-08MG.jpg",
            "RT-10MG": "images/sanfang/RT-10MG.jpg",
            "RT-08D9": "images/sanfang/RT-08D9.jpg",
            "RT-10D9": "images/sanfang/RT-10D9.jpg",
            "RT-08NF": "images/sanfang/RT-08NF.jpg",
            "RT-10NF": "images/sanfang/RT-10NF.jpg",
            "RT-10C": "images/sanfang/RT-10C.jpg",
            "RT-12C": "images/sanfang/RT-12C.jpg",
            "RT-08RA": "images/sanfang/RT-08RA.jpg",
            "RT-08RU": "images/sanfang/RT-08RU.jpg",
            "RT-08RK": "images/sanfang/RT-08RK.jpg",
            "RT-10RA": "images/sanfang/RT-10RA.jpg",
            "RT-10RU": "images/sanfang/RT-10RU.jpg",
            "RT-10RK": "images/sanfang/RT-10RK.jpg"
          }
        },
        {
          "name": "A8",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "A8 白黑／黑色 15.6单屏外壳+触摸屏",
              "price": 1050,
              "modelCode": "A8单屏"
            },
            {
              "name": "A8 白黑／全黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "A8双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "F8",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "F8 白／黑 15.6单屏外壳+触摸屏",
              "price": 1000,
              "modelCode": "F8单屏"
            },
            {
              "name": "F8 白／黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "F8双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "E6",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "E6 白／黑 15.6单屏外壳+触摸屏",
              "price": 1000,
              "modelCode": "E6单屏"
            },
            {
              "name": "E6 白／黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "E6双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "E9",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "E9 白／黑 15.6单屏外壳+触摸屏",
              "price": 970,
              "modelCode": "E9单屏"
            },
            {
              "name": "E9 白／黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "E9双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "H01",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "H01 白黑／全黑 15.6单屏外壳+触摸屏",
              "price": 950,
              "modelCode": "H01单屏"
            },
            {
              "name": "H01 白黑／全黑 15.6双屏外壳+触摸屏",
              "price": 970,
              "modelCode": "H01双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "H02",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "H02 白黑／全黑 15.6单屏外壳+触摸屏",
              "price": 950,
              "modelCode": "H02单屏"
            },
            {
              "name": "H02 白黑／全黑 15.6双屏外壳+触摸屏",
              "price": 970,
              "modelCode": "H02双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "GBOOK-GPS(DC系列)",
          "product": "IP广播服务器",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "GBOOK-150(DR)",
              "price": 1400
            },
            {
              "name": "GBOOK-156(DR)",
              "price": 1988
            },
            {
              "name": "GBOOK-173(DR)",
              "price": 2062
            },
            {
              "name": "GPS-150(DZ)",
              "price": 1996
            },
            {
              "name": "GPS-173(DZ)",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "J1800单网(1*D3/8/MS)",
                  "price": 460
                },
                {
                  "name": "J1900双网(1*D3/8/MS)",
                  "price": 680
                },
                {
                  "name": "3代i5-3210M双网(1*D3/8/MS)",
                  "price": 570
                },
                {
                  "name": "5代I3-5005U双网(2*D3/16/MS)",
                  "price": 720
                },
                {
                  "name": "5代i5-5350U双网(2*D3/16/MS)",
                  "price": 830
                },
                {
                  "name": "5代i7-5600U双网(2*D3/16/MS)",
                  "price": 990
                },
                {
                  "name": "6代i5-6300U双网(2*D3/16/M2)",
                  "price": 900
                },
                {
                  "name": "7代i3-7100U双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代i5-7300U双网(2*D3/16/M2)",
                  "price": 980
                },
                {
                  "name": "8代i3-8130U双网(2*D3/16/M2)",
                  "price": 890
                },
                {
                  "name": "8代i5-8250U双网(2*D3/16/M2)",
                  "price": 1240
                },
                {
                  "name": "8代i7-8550U双网(2*D3/16/M2)",
                  "price": 1380
                },
                {
                  "name": "12代i5-1235U双网(2*D4/32/M2)",
                  "price": 2560
                },
                {
                  "name": "7代i5-7200U四网(2*D3/16/M2)",
                  "price": 1300
                },
                {
                  "name": "8代i5-8250U四网(2*D3/16/M2)",
                  "price": 1500
                },
                {
                  "name": "8代i7-8550U四网(2*D3/16/M2)",
                  "price": 1700
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "莲花头扩展板2进2出",
                  "price": 18
                },
                {
                  "name": "莲花头扩展板12V/6进可调音量/3出可调高低音/3MIC/VW-6N3O2M",
                  "price": 110
                }
              ]
            },
            {
              "name": "支架",
              "options": []
            }
          ]
        },
        {
          "name": "GPS(台式系列)",
          "product": "IP广播服务器",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "GPS-15",
              "price": 1996
            },
            {
              "name": "GPS-173",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "B85（ATX）/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 380
                },
                {
                  "name": "H311（ATX）/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 650
                },
                {
                  "name": "H610M（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 670
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3-4160T(2*D3/16/M2)",
                  "price": 110
                },
                {
                  "name": "I5-4590T(2*D3/16/M2)",
                  "price": 250
                },
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "8G(D4)台式机",
                  "price": 680
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1330
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": []
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "莲花头扩展板2进2出",
                  "price": 18
                },
                {
                  "name": "莲花头扩展板12V/6进可调音量/3出可调高低音/3MIC/VW-6N3O2M",
                  "price": 110
                }
              ]
            }
          ]
        },
        {
          "name": "IPS系列",
          "product": "IP广播服务器",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "IPS-150",
              "price": 2256
            },
            {
              "name": "IPS-156",
              "price": 2258
            },
            {
              "name": "IPS-173",
              "price": 2356
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "B85（ATX）/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 380
                },
                {
                  "name": "H311（ATX）/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 650
                },
                {
                  "name": "H610M（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 670
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3-4160T(2*D3/16/M2)",
                  "price": 110
                },
                {
                  "name": "I5-4590T(2*D3/16/M2)",
                  "price": 250
                },
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "8G(D4)台式机",
                  "price": 680
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1330
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": []
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "莲花头扩展板2进2出",
                  "price": 18
                },
                {
                  "name": "莲花头扩展板12V/6进可调音量/3出可调高低音/3MIC/VW-6N3O2M",
                  "price": 110
                }
              ]
            }
          ]
        },
        {
          "name": "IPM",
          "product": "显示器",
          "mode": "raw",
          "discountP": 0.83,
          "discountL": 0.76,
          "sizes": [
            {
              "name": "10.4",
              "price": 1050,
              "p": 0.83,
              "l": 0.76
            },
            {
              "name": "12.1",
              "price": 1200,
              "p": 0.8,
              "l": 0.73
            },
            {
              "name": "15",
              "price": 1230,
              "p": 0.8,
              "l": 0.75
            },
            {
              "name": "15.6",
              "price": 1200,
              "p": 0.9,
              "l": 0.8
            },
            {
              "name": "17",
              "price": 1200,
              "p": 0.9,
              "l": 0.78
            },
            {
              "name": "19",
              "price": 1250,
              "p": 0.9,
              "l": 0.75
            },
            {
              "name": "21.5",
              "price": 1250,
              "p": 0.9,
              "l": 0.75
            }
          ],
          "categories": [
            {
              "name": "电阻屏",
              "options": [
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "OPX",
          "product": "显示器",
          "mode": "raw",
          "discountP": 0.85,
          "discountL": 0.73,
          "sizes": [
            {
              "name": "15",
              "price": 1100,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "15.6",
              "price": 1100,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "17",
              "price": 1100,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "18.5",
              "price": 1100,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "19",
              "price": 1150,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "21.5",
              "price": 1200,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "23.6",
              "price": 1650,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "27",
              "price": 2050,
              "p": 0.85,
              "l": 0.73
            },
            {
              "name": "32",
              "price": 2350,
              "p": 0.85,
              "l": 0.73
            }
          ],
          "categories": [
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "secondary",
      "label": "非主推",
      "version": "20261020",
      "validUntil": "10月31日",
      "fileName": "非主推产品报价表（7月21更新）有效期7月30V1.xlsx",
      "series": [
        {
          "name": "IPRO(x86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 950
            },
            {
              "name": "12.1",
              "price": 1100
            },
            {
              "name": "15",
              "price": 1130
            },
            {
              "name": "15.6",
              "price": 1100
            },
            {
              "name": "17",
              "price": 1100
            },
            {
              "name": "19",
              "price": 1150
            },
            {
              "name": "21.5",
              "price": 1150
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IPRO(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 950
            },
            {
              "name": "12.1",
              "price": 1100
            },
            {
              "name": "15",
              "price": 1130
            },
            {
              "name": "15.6",
              "price": 1100
            },
            {
              "name": "17",
              "price": 1100
            },
            {
              "name": "19",
              "price": 1150
            },
            {
              "name": "21.5",
              "price": 1150
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(4+32)+WIFI6/BT单网",
                  "price": 670
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1170
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 760
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1310
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3568GK(2+32)+WIFI6/BT双网",
                  "price": 1160
                },
                {
                  "name": "RK3568GK(4+32)+WIFI6/BT双网",
                  "price": 1380
                },
                {
                  "name": "全志H527(4+32)+WIFI6/BT单网",
                  "price": 1020
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1530
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2320
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2420
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2100
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2460
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 2600
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3250
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 2890
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 3610
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IPRO-SE(x86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "7",
              "price": 550
            },
            {
              "name": "8",
              "price": 700
            },
            {
              "name": "10.1",
              "price": 800
            },
            {
              "name": "13.3",
              "price": 1050
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "4代i3-4005U双网(1*D3/8/MS)",
                  "price": 660
                },
                {
                  "name": "7代i5-7300U 双网(1*D3/8/M2)",
                  "price": 1030
                },
                {
                  "name": "6代i5 6200U 双网 for SE（2*D3/16/M2）",
                  "price": 1000
                },
                {
                  "name": "6代i7 6500U 双网 for SE（2*D3/16/M2）",
                  "price": 1300
                },
                {
                  "name": "8代i5 8250U 双网 for SE（2*D3/16/M2）",
                  "price": 1260
                },
                {
                  "name": "8代i7 8550U 双网 for SE（2*D3/16/M2）",
                  "price": 1390
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IPRO-SE(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "7",
              "price": 550
            },
            {
              "name": "8",
              "price": 700
            },
            {
              "name": "10.1",
              "price": 800
            },
            {
              "name": "13.3",
              "price": 1050
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(4+32)+WIFI6/BT单网",
                  "price": 670
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1170
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 760
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1310
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3568GK(2+32)+WIFI6/BT双网",
                  "price": 1160
                },
                {
                  "name": "RK3568GK(4+32)+WIFI6/BT双网",
                  "price": 1380
                },
                {
                  "name": "全志H527(4+32)+WIFI6/BT单网",
                  "price": 1020
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1530
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2320
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2420
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2100
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2460
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 2600
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3250
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 2890
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 3610
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "机械硬盘",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "VFACE",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 1100
            },
            {
              "name": "12.1",
              "price": 1200
            },
            {
              "name": "15",
              "price": 1150
            },
            {
              "name": "15.6",
              "price": 1250
            },
            {
              "name": "17",
              "price": 1250
            },
            {
              "name": "17.3",
              "price": 1300
            },
            {
              "name": "18.5",
              "price": 1400
            },
            {
              "name": "19",
              "price": 1400
            },
            {
              "name": "21.5",
              "price": 1350
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "VOPC(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15",
              "price": 1000
            },
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "17",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1000
            },
            {
              "name": "19",
              "price": 1050
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1550
            },
            {
              "name": "27",
              "price": 1950
            },
            {
              "name": "32",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "飞腾D2000双网(2*D4/32/MS)风扇",
                  "price": 2920
                },
                {
                  "name": "飞腾FT2000双网DC(2*D4/32/MS)风扇",
                  "price": 3800
                },
                {
                  "name": "兆芯6640MA双网DC(2*D4/32/MS)风扇",
                  "price": 2290
                },
                {
                  "name": "兆芯U6780A双网DC(2*D4/32/MS)风扇",
                  "price": 2200
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "VOPC(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15",
              "price": 1000
            },
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "17",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1000
            },
            {
              "name": "19",
              "price": 1050
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1550
            },
            {
              "name": "27",
              "price": 1950
            },
            {
              "name": "32",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(4+32)+WIFI6/BT单网",
                  "price": 670
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1170
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 760
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1310
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3568GK(2+32)+WIFI6/BT双网",
                  "price": 1160
                },
                {
                  "name": "RK3568GK(4+32)+WIFI6/BT双网",
                  "price": 1380
                },
                {
                  "name": "全志H527(4+32)+WIFI6/BT单网",
                  "price": 1020
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1530
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2320
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2420
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2100
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2460
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 2600
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3250
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 2890
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 3610
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWS(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.1",
              "price": 1200
            },
            {
              "name": "15.6",
              "price": 1450
            },
            {
              "name": "21.5",
              "price": 1450
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "4代i3-4005U双网(1*D3/8/MS)",
                  "price": 660
                },
                {
                  "name": "7代i5-7300U 双网(1*D3/8/M2)",
                  "price": 1030
                },
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "不要IC/ID",
                  "price": -120
                },
                {
                  "name": "不要二维码",
                  "price": -130
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWS(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.1",
              "price": 1200
            },
            {
              "name": "15.6",
              "price": 1450
            },
            {
              "name": "21.5",
              "price": 1450
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(4+32)+WIFI6/BT单网",
                  "price": 670
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1170
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 760
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1310
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3568GK(2+32)+WIFI6/BT双网",
                  "price": 1160
                },
                {
                  "name": "RK3568GK(4+32)+WIFI6/BT双网",
                  "price": 1380
                },
                {
                  "name": "全志H527(4+32)+WIFI6/BT单网",
                  "price": 1020
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1530
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2320
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2420
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2100
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2460
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 2600
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3250
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 2890
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 3610
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "机械硬盘",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWE(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 1190
            },
            {
              "name": "12.1",
              "price": 1390
            },
            {
              "name": "15",
              "price": 1440
            },
            {
              "name": "15.6",
              "price": 1390
            },
            {
              "name": "17",
              "price": 1290
            },
            {
              "name": "17.3",
              "price": 1390
            },
            {
              "name": "18.5",
              "price": 1440
            },
            {
              "name": "19",
              "price": 1490
            },
            {
              "name": "21.5",
              "price": 1690
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "FWE(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "10.4",
              "price": 1190
            },
            {
              "name": "12.1",
              "price": 1390
            },
            {
              "name": "15",
              "price": 1440
            },
            {
              "name": "15.6",
              "price": 1390
            },
            {
              "name": "17",
              "price": 1290
            },
            {
              "name": "17.3",
              "price": 1390
            },
            {
              "name": "18.5",
              "price": 1440
            },
            {
              "name": "19",
              "price": 1490
            },
            {
              "name": "21.5",
              "price": 1690
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(4+32)+WIFI6/BT单网",
                  "price": 670
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1170
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 760
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1310
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3568GK(2+32)+WIFI6/BT双网",
                  "price": 1160
                },
                {
                  "name": "RK3568GK(4+32)+WIFI6/BT双网",
                  "price": 1380
                },
                {
                  "name": "全志H527(4+32)+WIFI6/BT单网",
                  "price": 1020
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1530
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2320
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2420
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2100
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2460
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 2600
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3250
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 2890
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 3610
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "DSMB02(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1100
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1400
            },
            {
              "name": "27",
              "price": 1800
            },
            {
              "name": "32",
              "price": 2200
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "200W摄像头",
                  "price": 50
                },
                {
                  "name": "500W摄像头",
                  "price": 130
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "DSMB02(安卓)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "15.6",
              "price": 1000
            },
            {
              "name": "18.5",
              "price": 1100
            },
            {
              "name": "21.5",
              "price": 1100
            },
            {
              "name": "23.6",
              "price": 1400
            },
            {
              "name": "27",
              "price": 1800
            },
            {
              "name": "32",
              "price": 2200
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(4+32)+WIFI6/BT单网",
                  "price": 670
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1170
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 760
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1310
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3568GK(2+32)+WIFI6/BT双网",
                  "price": 1160
                },
                {
                  "name": "RK3568GK(4+32)+WIFI6/BT双网",
                  "price": 1380
                },
                {
                  "name": "全志H527(4+32)+WIFI6/BT单网",
                  "price": 1020
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1530
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2320
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2420
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2100
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2460
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 2600
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3250
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 2890
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 3610
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "网口",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "IBOOKHY(X86)",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "18.5",
              "price": 0
            },
            {
              "name": "21.5",
              "price": 1200
            },
            {
              "name": "23.6",
              "price": 1600
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                },
                {
                  "name": "10.4纯平电阻",
                  "price": 160
                },
                {
                  "name": "12.1纯平电阻",
                  "price": 145
                },
                {
                  "name": "15纯平电阻",
                  "price": 195
                },
                {
                  "name": "17纯平电阻",
                  "price": 150
                },
                {
                  "name": "19纯平电阻",
                  "price": 180
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "上架式工控机",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "IPC-610B(4U)",
              "price": 610,
              "own": "primary"
            },
            {
              "name": "IPC-300",
              "price": 660,
              "own": "primary"
            },
            {
              "name": "IPC-620(BG)",
              "price": 630,
              "own": "primary"
            },
            {
              "name": "IPC-610(4U)",
              "price": 850,
              "own": "secondary"
            },
            {
              "name": "IPC-810(4U)",
              "price": 1100,
              "own": "secondary"
            },
            {
              "name": "IPC-110-650(1U)",
              "price": 1250,
              "own": "secondary"
            },
            {
              "name": "IPC-210(2U)",
              "price": 960,
              "own": "secondary"
            },
            {
              "name": "IPC-210(2U)8盘位热插拔",
              "price": 2000,
              "own": "secondary"
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "H310（ATX）/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网",
                  "price": 1180
                },
                {
                  "name": "H310（ATX）/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网",
                  "price": 1400
                },
                {
                  "name": "H670（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网",
                  "price": 1700
                },
                {
                  "name": "H670（ATX）/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网",
                  "price": 1920
                },
                {
                  "name": "H110（ATX）/6-9代/300W(2*D3/4*SA/1*M2/PCIE X16*1/PCIE X4*2/PCI*4)双网",
                  "price": 1320
                },
                {
                  "name": "H110（ATX）/6-9代/500W(2*D3/4*SA/1*M2/PCIE X16*1/PCIE X4*2/PCI*4)双网",
                  "price": 1540
                },
                {
                  "name": "B250（ATX）/6-9代/300W(2*D4/4*SA/1*MS/PCIE X16*1/6COM/双网)",
                  "price": 940
                },
                {
                  "name": "国产ATX（含兆芯U6580/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/单网）",
                  "price": 2200
                },
                {
                  "name": "国产ATX（含兆芯U6780A/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/单网）",
                  "price": 2400
                },
                {
                  "name": "国产ATX（含兆芯6640MA/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/双网）",
                  "price": 2450
                },
                {
                  "name": "国产ATX（含飞腾FT2000 8核/2*D4/1*M.2/3*SATA/PCIE X16*1/6COM/双网）",
                  "price": 4500
                },
                {
                  "name": "国产ATX（含飞腾D2000 8核/2*D4/1*M.2/3*SATA/PCIE X16*1/6COM/双网）",
                  "price": 4000
                },
                {
                  "name": "国产ATX（含海光C86-4G 3490 16核 2.8G 135W/4*D4/1*M.2 NVME/4*SATA/PCIE X16*1/PCIE X4*2/10COM/双网/710显卡）",
                  "price": 11500
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "8G(D4)台式机",
                  "price": 680
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1330
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WIFI6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "显卡",
              "options": [
                {
                  "name": "710/2G",
                  "price": 600
                }
              ]
            }
          ]
        },
        {
          "name": "ANBOX",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "ANBOX",
              "price": 210
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "RK3566(4+32)+WIFI6/BT单网",
                  "price": 670
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1170
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 760
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1310
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3568GK(2+32)+WIFI6/BT双网",
                  "price": 1160
                },
                {
                  "name": "RK3568GK(4+32)+WIFI6/BT双网",
                  "price": 1380
                },
                {
                  "name": "全志H527(4+32)+WIFI6/BT单网",
                  "price": 1020
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1530
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2320
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2420
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2100
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2460
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 2600
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3250
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 2890
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 3610
                }
              ]
            },
            {
              "name": "内存",
              "options": []
            },
            {
              "name": "固态硬盘",
              "options": []
            },
            {
              "name": "机械硬盘",
              "options": []
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WIFI6安卓",
                  "price": 30
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "2*232",
                  "price": 20
                },
                {
                  "name": "1*485",
                  "price": 30
                }
              ]
            },
            {
              "name": "其他",
              "options": []
            }
          ]
        },
        {
          "name": "NANO",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "NANO",
              "price": 220
            },
            {
              "name": "NANO-I",
              "price": 270
            },
            {
              "name": "NANO-4/6L",
              "price": 270
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I5-5300U双网(1*D3/8/MS)",
                  "price": 900
                },
                {
                  "name": "I7-5600U双网(1*D3/8/MS)",
                  "price": 1000
                },
                {
                  "name": "I5-6200U双网(1*D3/8/M2)",
                  "price": 1100
                },
                {
                  "name": "I5-7200U双网(1*D3/8/M2)",
                  "price": 1100
                },
                {
                  "name": "I3-8130U双网(1*D4/16/M2)",
                  "price": 1000
                },
                {
                  "name": "I5-8250U双网(1*D4/16/M2)",
                  "price": 1500
                },
                {
                  "name": "i3-1215u双网(1*D4/16/M2)",
                  "price": 2420
                },
                {
                  "name": "i5-1235u双网(1*D4/16/M2)",
                  "price": 2840
                },
                {
                  "name": "i7-1255u双网(1*D4/16/M2)",
                  "price": 4240
                },
                {
                  "name": "J6412双网 for NANO(1*D4/16/M2)",
                  "price": 1580
                },
                {
                  "name": "N5095双网(1*D4/8/M2)",
                  "price": 1200
                },
                {
                  "name": "N97双网(1*D4/16/M2)",
                  "price": 2720
                },
                {
                  "name": "N100双网 for NANO(1*D4/16/M2)",
                  "price": 1760
                },
                {
                  "name": "N100双网TYPE-C(1*D5/32/M2)",
                  "price": 1780
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "N305双网(1*D4/16/M2)",
                  "price": 3160
                },
                {
                  "name": "J6412六网i226(1*D4/16/M2)",
                  "price": 1900
                },
                {
                  "name": "N100六网i226(1*D4/16/M2)",
                  "price": 1960
                },
                {
                  "name": "N150四网i226(1*D4/16/M2)",
                  "price": 1880
                },
                {
                  "name": "N305四网i226(1*D4/16/M2)",
                  "price": 4300
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "4G模块",
                  "price": 290
                }
              ]
            }
          ]
        },
        {
          "name": "UNO",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "UNO",
              "price": 308
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "5200U（赛扬）",
                  "price": 890
                },
                {
                  "name": "I7-6600U双网(1*D3/8/M2)",
                  "price": 1290
                },
                {
                  "name": "i5-8250U双网(1*D3/8/M2)",
                  "price": 1280
                },
                {
                  "name": "i7-8550U双网(1*D3/8/M2)",
                  "price": 1420
                },
                {
                  "name": "i5-1235U四网(2*D4/32/M2/GPIO8)",
                  "price": 3100
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "单层IO",
                  "price": -60
                }
              ]
            }
          ]
        },
        {
          "name": "BPC-101",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "BPC-101",
              "price": 350
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                },
                {
                  "name": "4网升级5网",
                  "price": 60
                },
                {
                  "name": "4网升级POE",
                  "price": 200
                }
              ]
            }
          ]
        },
        {
          "name": "BPC-103",
          "product": "工控机",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "BPC-103",
              "price": 220,
              "lockCats": [
                "主板"
              ],
              "lockNote": {
                "主板": "主板已含 CPU（板载）"
              },
              "banDesktopCpu": true
            },
            {
              "name": "BPC-103(H)",
              "price": 320
            },
            {
              "name": "BPC-103L",
              "price": 1820,
              "specNote": "含5网主板",
              "lockCats": [
                "主板"
              ],
              "lockNote": {
                "主板": "机箱已含主板（5 网）"
              },
              "cpuOptions": [
                "I3 6100",
                "I5 6500",
                "I7 6700",
                "I3-7100",
                "I5-7400",
                "I7-7700",
                "I3-8100",
                "I5-8400",
                "I7-8700",
                "I3-9100",
                "I5-9400",
                "I7-9700"
              ]
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "含主板",
                  "price": 0
                },
                {
                  "name": "H310（DC）/6-9代/2*D3/16/M2",
                  "price": 960
                },
                {
                  "name": "H610/双网（DC）/12-14代/2*D4/32/M2",
                  "price": 1200
                },
                {
                  "name": "H610/3网（DC）/12-14代/2*D4/32/M2",
                  "price": 1560
                },
                {
                  "name": "Z390（DC）/6-9代/2*D4/32/M2/五网",
                  "price": 1440
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "飞腾D2000双网(2*D4/32/MS)风扇",
                  "price": 2920
                },
                {
                  "name": "飞腾FT2000双网DC(2*D4/32/MS)风扇",
                  "price": 3800
                },
                {
                  "name": "兆芯6640MA双网DC(2*D4/32/MS)风扇",
                  "price": 2290
                },
                {
                  "name": "兆芯U6780A双网DC(2*D4/32/MS)风扇",
                  "price": 2200
                },
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块",
                  "price": 1000
                },
                {
                  "name": "宽压模块",
                  "price": 120
                }
              ]
            }
          ]
        },
        {
          "name": "GBOOK-GPS(DC系列)",
          "product": "IP广播服务器",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "GBOOK-150(DR)",
              "price": 1400
            },
            {
              "name": "GBOOK-156(DR)",
              "price": 1988
            },
            {
              "name": "GBOOK-173(DR)",
              "price": 2062
            },
            {
              "name": "GPS-150(DZ)",
              "price": 1996
            },
            {
              "name": "GPS-173(DZ)",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "8+8G(D3)",
                  "price": 400
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "莲花头扩展板2进2出",
                  "price": 18
                },
                {
                  "name": "莲花头扩展板12V/6进可调音量/3出可调高低音/3MIC/VW-6N3O2M",
                  "price": 110
                }
              ]
            },
            {
              "name": "支架",
              "options": []
            }
          ]
        },
        {
          "name": "GPS(台式系列)",
          "product": "IP广播服务器",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "GPS-15",
              "price": 1996
            },
            {
              "name": "GPS-173",
              "price": 2250
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "H310（ATX）/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网",
                  "price": 1180
                },
                {
                  "name": "H310（ATX）/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网",
                  "price": 1400
                },
                {
                  "name": "H670（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网",
                  "price": 1700
                },
                {
                  "name": "H670（ATX）/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网",
                  "price": 1920
                },
                {
                  "name": "H110（ATX）/6-9代/300W(2*D3/4*SA/1*M2/PCIE X16*1/PCIE X4*2/PCI*4)双网",
                  "price": 1320
                },
                {
                  "name": "H110（ATX）/6-9代/500W(2*D3/4*SA/1*M2/PCIE X16*1/PCIE X4*2/PCI*4)双网",
                  "price": 1540
                },
                {
                  "name": "B250（ATX）/6-9代/300W(2*D4/4*SA/1*MS/PCIE X16*1/6COM/双网)",
                  "price": 940
                },
                {
                  "name": "国产ATX（含兆芯U6580/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/单网）",
                  "price": 2200
                },
                {
                  "name": "国产ATX（含兆芯U6780A/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/单网）",
                  "price": 2400
                },
                {
                  "name": "国产ATX（含兆芯6640MA/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/双网）",
                  "price": 2450
                },
                {
                  "name": "国产ATX（含飞腾FT2000 8核/2*D4/1*M.2/3*SATA/PCIE X16*1/6COM/双网）",
                  "price": 4500
                },
                {
                  "name": "国产ATX（含飞腾D2000 8核/2*D4/1*M.2/3*SATA/PCIE X16*1/6COM/双网）",
                  "price": 4000
                },
                {
                  "name": "国产ATX（含海光C86-4G 3490 16核 2.8G 135W/4*D4/1*M.2 NVME/4*SATA/PCIE X16*1/PCIE X4*2/10COM/双网/710显卡）",
                  "price": 11500
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3 6100",
                  "price": 100
                },
                {
                  "name": "I5 6500",
                  "price": 290
                },
                {
                  "name": "I7 6700",
                  "price": 610
                },
                {
                  "name": "I3-7100",
                  "price": 90
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 800
                },
                {
                  "name": "I3-8100",
                  "price": 300
                },
                {
                  "name": "I5-8400",
                  "price": 710
                },
                {
                  "name": "I7-8700",
                  "price": 1260
                },
                {
                  "name": "I3-9100",
                  "price": 380
                },
                {
                  "name": "I5-9400",
                  "price": 910
                },
                {
                  "name": "I7-9700",
                  "price": 1480
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "8G(D4)台式机",
                  "price": 680
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1330
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "莲花头扩展板2进2出",
                  "price": 18
                },
                {
                  "name": "莲花头扩展板12V/6进可调音量/3出可调高低音/3MIC/VW-6N3O2M",
                  "price": 110
                }
              ]
            }
          ]
        },
        {
          "name": "IPS系列",
          "product": "IP广播服务器",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "IPS-150",
              "price": 2256
            },
            {
              "name": "IPS-156",
              "price": 2258
            },
            {
              "name": "IPS-173",
              "price": 2356
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "飞腾D2000双网(2*D4/32/M2)",
                  "price": 4000
                },
                {
                  "name": "飞腾FT2000双网(2*D4/32/M2)",
                  "price": 4500
                },
                {
                  "name": "兆芯U6580单网(2*D4/32/M2)",
                  "price": 2200
                },
                {
                  "name": "兆芯U6780A单网(2*D4/32/M2)",
                  "price": 2400
                },
                {
                  "name": "兆芯6640MA双网(2*D4/32/M2)",
                  "price": 2450
                },
                {
                  "name": "海光C86-4G 3490双网(2*D4/32/M2)",
                  "price": 11500
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "8G(D4)笔记本",
                  "price": 620
                },
                {
                  "name": "16G(D4)笔记本",
                  "price": 1230
                },
                {
                  "name": "8G(D4)台式机",
                  "price": 680
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1330
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                },
                {
                  "name": "6-485(X86)",
                  "price": 180
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "扬声器",
                  "price": 30
                },
                {
                  "name": "4G模块",
                  "price": 290
                },
                {
                  "name": "5G模块（8代及以上）",
                  "price": 1000
                },
                {
                  "name": "莲花头扩展板2进2出",
                  "price": 18
                },
                {
                  "name": "莲花头扩展板12V/6进可调音量/3出可调高低音/3MIC/VW-6N3O2M",
                  "price": 110
                }
              ]
            }
          ]
        },
        {
          "name": "A8",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "A8 白黑／黑色 15.6单屏外壳+触摸屏",
              "price": 1050,
              "modelCode": "A8单屏"
            },
            {
              "name": "A8 白黑／全黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "A8双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "F8",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "F8 白／黑 15.6单屏外壳+触摸屏",
              "price": 1000,
              "modelCode": "F8单屏"
            },
            {
              "name": "F8 白／黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "F8双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "E6",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "E6 白／黑 15.6单屏外壳+触摸屏",
              "price": 1000,
              "modelCode": "E6单屏"
            },
            {
              "name": "E6 白／黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "E6双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "E9",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "E9 白／黑 15.6单屏外壳+触摸屏",
              "price": 970,
              "modelCode": "E9单屏"
            },
            {
              "name": "E9 白／黑 15.6双屏外壳+触摸屏",
              "price": 1430,
              "modelCode": "E9双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "H01",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "H01 白黑／全黑 15.6单屏外壳+触摸屏",
              "price": 950,
              "modelCode": "H01单屏"
            },
            {
              "name": "H01 白黑／全黑 15.6双屏外壳+触摸屏",
              "price": 970,
              "modelCode": "H01双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        },
        {
          "name": "H02",
          "product": "POS机",
          "mode": "round",
          "discountP": 0.82,
          "discountL": 0.72,
          "sizes": [
            {
              "name": "H02 白黑／全黑 15.6单屏外壳+触摸屏",
              "price": 950,
              "modelCode": "H02单屏"
            },
            {
              "name": "H02 白黑／全黑 15.6双屏外壳+触摸屏",
              "price": 970,
              "modelCode": "H02双屏"
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 550
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D3/16/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D3/16/M2)",
                  "price": 820
                },
                {
                  "name": "7代I5-7200U 双网(2*D4/32/M2)",
                  "price": 1080
                },
                {
                  "name": "8代i3-8145U双网(2*D4/32/M2)",
                  "price": 1200
                },
                {
                  "name": "8代i5-8257U双网(2*D4/32/M2)",
                  "price": 1630
                },
                {
                  "name": "8代I7-8565U双网(2*D4/32/M2)",
                  "price": 1680
                },
                {
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2170
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1190
                },
                {
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1540
                },
                {
                  "name": "N95双网(1*D4/16/M2)",
                  "price": 1450
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1490
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1660
                },
                {
                  "name": "7代i5-7300U四网(2*D4/32/M2)",
                  "price": 1800
                },
                {
                  "name": "I5-8250U四网(2*D4/32/M2)",
                  "price": 2120
                },
                {
                  "name": "8代i7-8665U四网(2*D4/32/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
                },
                {
                  "name": "11代I7-1195G7单网(2*D4/32/M2)",
                  "price": 3100
                },
                {
                  "name": "6代I7-6600U双网(2*D3/16/M2)",
                  "price": 1250
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "4G(D3)",
                  "price": 130
                },
                {
                  "name": "8G(D3)",
                  "price": 200
                },
                {
                  "name": "4G(D4)",
                  "price": 365
                },
                {
                  "name": "8G(D4)",
                  "price": 620
                },
                {
                  "name": "16G(D4)",
                  "price": 1230
                }
              ]
            },
            {
              "name": "固态硬盘",
              "options": [
                {
                  "name": "128G(MS)",
                  "price": 380
                },
                {
                  "name": "256G(MS)",
                  "price": 730
                },
                {
                  "name": "512G(MS)",
                  "price": 1190
                },
                {
                  "name": "128(M2)",
                  "price": 438
                },
                {
                  "name": "256G(M2)",
                  "price": 750
                },
                {
                  "name": "512G(M2)",
                  "price": 1140
                },
                {
                  "name": "1T(SATA)",
                  "price": 1710
                }
              ]
            },
            {
              "name": "机械硬盘",
              "options": [
                {
                  "name": "西数1T（咨询采购）",
                  "price": 0
                },
                {
                  "name": "西数2T（咨询采购）",
                  "price": 0
                }
              ]
            },
            {
              "name": "WIFI",
              "options": [
                {
                  "name": "WiFi+BT",
                  "price": 75
                },
                {
                  "name": "WiFi6",
                  "price": 180
                }
              ]
            },
            {
              "name": "串口",
              "options": [
                {
                  "name": "1-485(X86)",
                  "price": 30
                },
                {
                  "name": "2-485(X86)",
                  "price": 60
                },
                {
                  "name": "3-485(X86)",
                  "price": 90
                },
                {
                  "name": "4-485(X86)",
                  "price": 120
                },
                {
                  "name": "5-485(X86)",
                  "price": 150
                }
              ]
            },
            {
              "name": "其他",
              "options": [
                {
                  "name": "湃达58打印机",
                  "price": 200
                },
                {
                  "name": "扫描平台",
                  "price": 240
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 55
                },
                {
                  "name": "苹果支架",
                  "price": 110
                },
                {
                  "name": "三角支架",
                  "price": 200
                },
                {
                  "name": "CR-05悬臂支架",
                  "price": 100
                },
                {
                  "name": "W01悬臂支架",
                  "price": 160
                },
                {
                  "name": "小K底坐",
                  "price": 700
                },
                {
                  "name": "带键盘托底坐",
                  "price": 900
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "osOptions": [
    {
      "group": "Windows系统",
      "items": [
        {
          "label": "windows 10 中/英文专业版 （秘钥贴纸）",
          "price": 200
        },
        {
          "label": "windows 10 中/英文专业版 （整套）",
          "price": 250
        },
        {
          "label": "windows 10 企业版:LTSB 2016/LTSC 2019 /LTSC 2021/SAC （秘钥贴纸）",
          "price": 250
        },
        {
          "label": "windows 10 企业版:LTSB 2016/LTSC 2019 /LTSC 2021/SAC （整套）",
          "price": 300
        }
      ]
    },
    {
      "group": "国产系统",
      "items": [
        {
          "label": "银河麒麟 麒麟桌面V10 （KC）",
          "price": 900
        },
        {
          "label": "银河麒麟 麒麟服务器V10 （KC）",
          "price": 9000
        },
        {
          "label": "统信 统信桌面V20 （KC）",
          "price": 900
        },
        {
          "label": "统信 统信服务器V20 （KC）",
          "price": 9000
        },
        {
          "label": "星光麒麟 3568D",
          "price": 360
        },
        {
          "label": "银河麒麟 3588A",
          "price": 1000
        },
        {
          "label": "鸿蒙 3568D/3588A",
          "price": 0
        }
      ]
    },
    {
      "group": "Office办公软件",
      "items": [
        {
          "label": "office 中小企业版2016 （KC）",
          "price": 1200
        },
        {
          "label": "office 中小企业版2019 （KC）",
          "price": 1400
        },
        {
          "label": "office 中小企业版2021 （KC）",
          "price": 1600
        },
        {
          "label": "office 专业增强版 （KC）",
          "price": 2200
        }
      ]
    }
  ],
  "updateLogs": {
    "primary": [
      {
        "date": 46337,
        "items": [
          "GBOOK-156(DR) 准系统 价格 2088→1988（GBOOK-GPS(DC系列)；主推与非主推同步改价）",
          "IPS-156 准系统 价格 2358→2258（IPS系列；主推与非主推同步改价）",
          "GW系列 CPU「I5-5200U双网(2*D3/16/M2)」价格 950→1030（VW-5200U-MV，excel 面价=清货价=1030）",
          "＋ BPC-103 新增尺寸 BPC-103L（¥1820，机箱+19V/7.9A电源、含5网主板、独立CPU/6-9代）：主板锁定（提示「机箱已含主板（5 网）」）不用选，CPU 只能选 6-9 代台式；报价单规格里写明「含5网主板」",
          "＋ 新上 POS机 产品（A8 / F8 / E6 / E9 / H01 / H02 六系列，单双屏 12 个尺寸，准系统面价 950~1430；主推与非主推同步上架）：配置项照各自目录的 IPRO(x86) 复制（主推 16 颗 CPU / 非主推 22 颗），「其他」只留 湃达58打印机 ¥200、扫描平台 ¥240（其余配件用「其他配件报价」自填）",
          "BPC-103（¥220）改为板载 CPU 机型：主板锁定（提示「主板已含 CPU（板载）」），不选、其价格不计入面价；台式 CPU 12 项（I3 6100~I7-9700）价格不再可选（灰显）。BPC-103(H) ¥320 维持原样"
        ]
      },
      {
        "date": 46333,
        "items": [
          "＋ 三防平板 改为直接选型号（RT-08MG~RT-08RK / T8 / A10 / RT-12C，共 16 个型号），不再先选 8/10/12 寸",
          "＋ 三防平板 CPU 新增：RT-10MG/MTK8781/4G/64G/单网/安卓13（¥3360）",
          "＋ 三防平板 CPU 新增：RT-08D9/MT6877/8G/256G/单网/安卓14/5G（¥5560）",
          "－ 三防平板 去掉「支架」选项（要加支架请用「其他配件报价」，不计入面价）",
          "＋ 三防平板 CPU 新增：RT-08MG/MTK8781/4G/64G/单网/安卓13（¥3060）",
          "＋ 三防平板 CPU 新增：RT-08MG/MTK8781/8G/128G/单网/安卓13（¥3560）",
          "＋ 三防平板 CPU 新增：RT-08MG/MTK8781/12G/256G/单网/安卓13（¥4700）",
          "＋ 三防平板 CPU 新增：RT-08D9/MT6877/8G/128G/单网/安卓14/5G（¥5160）",
          "＋ 三防平板 CPU 新增：RT-08NF/N5100/8G/128G/单网（¥5200）",
          "＋ 三防平板 CPU 新增：RT-08NF/N5100/8G/256G/单网（¥6360）",
          "＋ 三防平板 CPU 新增：RT-08NF/N5100/16G/256G/单网（¥7360）",
          "＋ 三防平板 CPU 新增：RT-08RA/RK3588/8G/128G/单网/安卓14（¥6360）",
          "＋ 三防平板 CPU 新增：RT-08RA/RK3588/16G/128G/单网/安卓14（¥7160）",
          "＋ 三防平板 CPU 新增：RT-08RA/RK3588/16G/256G/单网/安卓14（¥7560）",
          "＋ 三防平板 CPU 新增：RT-08RU/RK3588/8G/128G/单网/Ubuntu22.04（¥6360）",
          "＋ 三防平板 CPU 新增：RT-08RU/RK3588/16G/128G/单网/Ubuntu22.04（¥7160）",
          "＋ 三防平板 CPU 新增：RT-08RU/RK3588/16G/256G/单网/Ubuntu22.04（¥7560）",
          "＋ 三防平板 CPU 新增：RT-08RK/RK3588/8G/128G/单网/银河麒麟(国防版)（¥6360）",
          "＋ 三防平板 CPU 新增：RT-08RK/RK3588/16G/128G/单网/银河麒麟(国防版)（¥7160）",
          "＋ 三防平板 CPU 新增：RT-08RK/RK3588/16G/256G/单网/银河麒麟(国防版)（¥7560）",
          "＋ 三防平板 CPU 新增：RT-10MG/MTK8781/8G/128G/单网/安卓13（¥3760）",
          "＋ 三防平板 CPU 新增：RT-10MG/MTK8781/12G/256G/单网/安卓13（¥4900）",
          "＋ 三防平板 CPU 新增：RT-10D9/MT6877/8G/128G/单网/安卓14/5G（¥5760）",
          "＋ 三防平板 CPU 新增：RT-10D9/MT6877/8G/256G/单网/安卓14/5G（¥6160）",
          "＋ 三防平板 CPU 新增：RT-10NF/N5100/8G/128G/单网（¥5400）",
          "＋ 三防平板 CPU 新增：RT-10NF/N5100/8G/256G/单网（¥6760）",
          "＋ 三防平板 CPU 新增：RT-10NF/N5100/16G/256G/单网（¥7760）",
          "＋ 三防平板 CPU 新增：RT-10C/I5-1235U/16G/128G/单网（¥9960）",
          "＋ 三防平板 CPU 新增：RT-10C/I5-1235U/16G/256G/单网（¥10360）",
          "＋ 三防平板 CPU 新增：RT-10C/I5-1235U/16G/512G/单网（¥11360）",
          "＋ 三防平板 CPU 新增：RT-10C/I7-1255U/16G/128G/单网（¥11960）",
          "＋ 三防平板 CPU 新增：RT-10C/I7-1255U/16G/256G/单网（¥12360）",
          "＋ 三防平板 CPU 新增：RT-10C/I7-1255U/16G/512G/单网（¥13360）",
          "＋ 三防平板 CPU 新增：RT-10RA/RK3588/16G/128G/单网/安卓14（¥6560）",
          "＋ 三防平板 CPU 新增：RT-10RA/RK3588/16G/256G/单网/安卓14（¥7360）",
          "＋ 三防平板 CPU 新增：RT-10RA/RK3588/16G/512G/单网/安卓14（¥7760）",
          "＋ 三防平板 CPU 新增：RT-10RU/RK3588/16G/128G/单网/Ubuntu22.04（¥6560）",
          "＋ 三防平板 CPU 新增：RT-10RU/RK3588/16G/256G/单网/Ubuntu22.04（¥7360）",
          "＋ 三防平板 CPU 新增：RT-10RU/RK3588/16G/512G/单网/Ubuntu22.04（¥7760）",
          "＋ 三防平板 CPU 新增：RT-10RK/RK3588/16G/128G/单网/银河麒麟(国防版)（¥6560）",
          "＋ 三防平板 CPU 新增：RT-10RK/RK3588/16G/256G/单网/银河麒麟(国防版)（¥7360）",
          "＋ 三防平板 CPU 新增：RT-10RK/RK3588/16G/512G/单网/银河麒麟(国防版)（¥7760）",
          "＋ 三防平板 CPU 新增：RT-12C/I5-1235U/16G/128G/单网（¥10560）",
          "＋ 三防平板 CPU 新增：RT-12C/I5-1235U/16G/256G/单网（¥10960）",
          "＋ 三防平板 CPU 新增：RT-12C/I5-1235U/16G/512G/单网（¥11960）",
          "＋ 三防平板 CPU 新增：RT-12C/I7-1255U/16G/128G/单网（¥12560）",
          "＋ 三防平板 CPU 新增：RT-12C/I7-1255U/16G/256G/单网（¥12960）",
          "＋ 三防平板 CPU 新增：RT-12C/I7-1255U/16G/512G/单网（¥13960）",
          "－ 三防平板 CPU 下架：N10A/赛扬N5100/8G/128G/单网/WIFI",
          "－ 三防平板 CPU 下架：MO8A/MTK8788/8G/128G/单网/WIFI（¥3360）",
          "－ 三防平板 CPU 下架：N10A/赛扬N5100/8G/256G/单网/WIFI（¥5560）"
        ]
      },
      {
        "date": 46331,
        "items": [
          "机械硬盘 西数1T / 西数2T 改为「咨询采购」（选配不再计价，面价不含硬盘，需另询采购报价）"
        ]
      },
      {
        "date": 46330,
        "items": [
          "IPRO-SE(x86) CPU 「6代i5-6200U双网(1*D3/8/M2)」更名自「6代i5-6200U双网(1*D4/16/M2)」（¥1000）",
          "FWS(X86) CPU 「6代i5-6200U双网(1*D3/8/M2)」更名自「6代i5-6200U双网(1*D4/16/M2)」（¥1000）",
          "IPRO(x86) CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "VFACE CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "VOPC(X86) CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "FWS(X86) CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "FWE(X86) CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "DSMB02(X86) CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "IBOOKHY(X86) CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "BPC-101 CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "BPC-103 CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）",
          "GBOOK-GPS(DC系列) CPU 「5代i7-5600U双网(2*D3/16/MS)」更名自「5代i7-5650U双网(2*D3/16/MS)」（¥990）"
        ]
      },
      {
        "date": 46328,
        "items": [
          "AirMax(x86) 21.5 价格 0→1260"
        ]
      },
      {
        "date": 46322,
        "items": [
          "＋ 上架式工控机 新增尺寸 IPC-610(4U)（¥850）",
          "＋ 上架式工控机 新增尺寸 IPC-810(4U)（¥1100）",
          "＋ 上架式工控机 新增尺寸 IPC-110-650(1U)（¥1250）",
          "＋ 上架式工控机 新增尺寸 IPC-210(2U)（¥960）",
          "上架式工控机 主板 「B85（ATX）/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「B85/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥380）",
          "上架式工控机 主板 「H311（ATX）/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「H311/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥650）",
          "上架式工控机 主板 「H610M（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「H610M/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥670）",
          "GPS(台式系列) 主板 「B85（ATX）/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「B85/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥380）",
          "GPS(台式系列) 主板 「H311（ATX）/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「H311/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥650）",
          "GPS(台式系列) 主板 「H610M（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「H610M/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥670）",
          "IPS系列 主板 「B85（ATX）/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「B85/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥380）",
          "IPS系列 主板 「H311（ATX）/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「H311/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥650）",
          "IPS系列 主板 「H610M（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」更名自「H610M/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网」（¥670）",
          "VFACE-H 主板 「H310（DC）/6-9代/D3」更名自「B310D/6-9代/D3」（¥960）",
          "VFACE-H 主板 「H610（DC）/12-14代/2*D4/32/M2」更名自「H610/12-14代/2*D4/32/M2」（¥1200）",
          "VFACE-H 主板 「H610/3网（DC）/12-14代/2*D4/32/M2」更名自「H610/3网/12-14代/2*D4/32/M2」（¥1560）",
          "BPC-102 主板 「H310（DC）/6-9代/D3」更名自「B310D/6-9代/D3」（¥960）",
          "BPC-102 主板 「H610（DC）/12-14代/2*D4/32/M2」更名自「H610/12-14代/2*D4/32/M2」（¥1200）",
          "BPC-102 主板 「H610/3网（DC）/12-14代/2*D4/32/M2」更名自「H610/3网/12-14代/2*D4/32/M2」（¥1560）",
          "BPC-103 主板 「H310（DC）/6-9代/2*D3/16/M2」更名自「B310D/6-9代/2*D3/16/M2」（¥960）",
          "BPC-103 主板 「H610（DC）/12-14代/2*D4/32/M2」更名自「H610/12-14代/2*D4/32/M2」（¥1200）",
          "VFACE-H 主板 「H610/双网（DC）/12-14代/2*D4/32/M2」更名自「H610（DC）/12-14代/2*D4/32/M2」（¥1200）",
          "BPC-102 主板 「H610/双网（DC）/12-14代/2*D4/32/M2」更名自「H610（DC）/12-14代/2*D4/32/M2」（¥1200）",
          "BPC-103 主板 「H610/双网（DC）/12-14代/2*D4/32/M2」更名自「H610（DC）/12-14代/2*D4/32/M2」（¥1200）"
        ]
      }
    ],
    "secondary": [
      {
        "date": 46337,
        "items": [
          "CPU 降价 4 款（各影响 10 个 DC 系列）：J6412 1700→1540、N100 1780→1660、N5095 1230→1190、12代I3-1215U 2310→2170",
          "CPU 新增 5 款（各 10 个 DC 系列）：N95 1450、N150 1490、8代I7-8565U 1680、11代I7-1195G7 3100、I5-8250U四网 2120；NANO 的 N150 维持 1800",
          "兆芯 ATX 板降价 3 款（上架式工控机、GPS(台式系列)、IPS系列）：6640MA 2800→2450、U6780A 2500→2400、U6580 2240→2200",
          "兆芯 DC 板更名「双网DC」并降价 2 款（VOPC(X86)、BPC-103）：6640MA 2572→2290、U6780A 2572→2200",
          "下架 CPU 兆芯U6580双网(2*D4/32/MS)风扇（厂家停产；旧单仍按原配置复购）",
          "飞腾 ATX 板调价 2 款（各影响 3 个系列）：FT2000 8核 4000→4500；D2000 8核 3440→4000 且网口由四网更正为双网",
          "飞腾 FT2000 DC 板更名「双网DC」并涨价 3400→3800（VOPC(X86)、BPC-103）",
          "上架式工控机新增尺寸 IPC-210(2U)8盘位热插拔 2000（非主推源）",
          "＋ 新上 POS机 6 系列（A8 / F8 / E6 / E9 / H01 / H02，单双屏 12 个尺寸，950~1430）：价格与主推一致，配置项照非主推 IPRO(x86)（CPU 22 颗 / 内存 5 档），「其他」只留 湃达58打印机 200、扫描平台 240"
        ]
      },
      {
        "date": 46331,
        "items": [
          "机械硬盘 西数1T / 西数2T 改为「咨询采购」（选配不再计价，面价不含硬盘，需另询采购报价）"
        ]
      },
      {
        "date": 46322,
        "items": [
          "上架式工控机 主板 「H310（ATX）/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网」更名自「H310/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网」（¥1180）",
          "上架式工控机 主板 「H310（ATX）/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网」更名自「H310/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网」（¥1400）",
          "上架式工控机 主板 「H670（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网」更名自「H670/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网」（¥1700）",
          "上架式工控机 主板 「H670（ATX）/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网」更名自「H670/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网」（¥1920）",
          "上架式工控机 主板 「H110（ATX）/6-9代/300W(2*D3/4*SA/1*M2/PCIE X16*1/PCIE X4*2/PCI*4)双网」更名自「H110/6-9代/300W(2*D3/4*SA/1*M2/PCIE X16*1/X4*2/PCI*4)双网」（¥1320）",
          "GPS(台式系列) 主板 「H310（ATX）/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网」更名自「H310/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网」（¥1180）",
          "GPS(台式系列) 主板 「H310（ATX）/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X4*1/PCI*2)双网」更名自「H310/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网」（¥1400）",
          "GPS(台式系列) 主板 「H670（ATX）/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网」更名自「H670/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网」（¥1700）",
          "GPS(台式系列) 主板 「H670（ATX）/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/PCIE X4*3)双网」更名自「H670/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网」（¥1920）",
          "GPS(台式系列) 主板 「H110（ATX）/6-9代/300W(2*D3/4*SA/1*M2/PCIE X16*1/PCIE X4*2/PCI*4)双网」更名自「H110/6-9代/300W(2*D3/4*SA/1*M2/PCIE X16*1/X4*2/PCI*4)双网」（¥1320）",
          "＋ 主板 新增：H110（ATX）/6-9代/500W(2*D3/4*SA/1*M2/PCIE X16*1/PCIE X4*2/PCI*4)双网（¥1540，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "－ 上架式工控机 主板 下架：H310/6-9代/250W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2双网)",
          "－ 上架式工控机 主板 下架：H670/12-14代/250W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
          "－ 上架式工控机 主板 下架：H310/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2双网)",
          "－ 上架式工控机 主板 下架：H310/6-9代/8盘600W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网",
          "－ 上架式工控机 主板 下架：H670/12-14代/8盘600W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
          "＋ 主板 新增：B250（ATX）/6-9代/300W(2*D4/4*SA/1*MS/PCIE X16*1/6COM/双网)（¥940，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "＋ 主板 新增：国产ATX（含兆芯U6580/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/单网）（¥2240，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "＋ 主板 新增：国产ATX（含兆芯U6780A/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/单网）（¥2500，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "＋ 主板 新增：国产ATX（含兆芯6640MA/2*D4/1*M.2/3*SATA/PCIE X16*1/PCIE X4*2/PCI*1/6COM/双网）（¥2800，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "＋ 主板 新增：国产ATX（含飞腾FT2000 8核/2*D4/1*M.2/3*SATA/PCIE X16*1/6COM/双网）（¥4000，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "＋ 主板 新增：国产ATX（含飞腾D2000 8核/2*D4/1*M.2/3*SATA/PCIE X16*1/6COM/四网）（¥3440，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "＋ 主板 新增：国产ATX（含海光C86-4G 3490 16核 2.8G 135W/4*D4/1*M.2 NVME/4*SATA/PCIE X16*1/PCIE X4*2/10COM/双网/710显卡）（¥11500，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "＋ 上架式工控机 新增尺寸 IPC-610B(4U)（¥610）",
          "＋ 上架式工控机 新增尺寸 IPC-300（¥660）",
          "＋ 上架式工控机 新增尺寸 IPC-620(BG)（¥630）",
          "BPC-103 主板 「H310（DC）/6-9代/2*D3/16/M2」更名自「B310D/6-9代/2*D3/16/M2」（¥960）",
          "BPC-103 主板 「H610（DC）/12-14代/2*D4/32/M2」更名自「H610/12-14代/2*D4/32/M2」（¥1200）",
          "BPC-103 主板 「H610/3网（DC）/12-14代/2*D4/32/M2」更名自「H610/3网/12-14代/2*D4/32/M2」（¥1560）",
          "BPC-103 主板 「Z390（DC）/6-9代/2*D4/32/M2/五网」更名自「Z390/6-9代/2*D4/32/M2/五网」（¥1440）",
          "BPC-103 主板 「H610/双网（DC）/12-14代/2*D4/32/M2」更名自「H610（DC）/12-14代/2*D4/32/M2」（¥1200）"
        ]
      },
      {
        "date": 46317,
        "items": [
          "IPRO(x86) CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "IPRO(x86) CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "IPRO(x86) CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "IPRO(x86) CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "IPRO(x86) CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "IPRO-SE(x86) CPU 「7代i5-7300U 双网(1*D3/8/M2)」更名自「7代i5-7300U 双网(1*D4/8/M2)」（¥1030）",
          "VFACE CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "VFACE CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "VFACE CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "VFACE CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "VFACE CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "VOPC(X86) CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "VOPC(X86) CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "VOPC(X86) CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "VOPC(X86) CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "VOPC(X86) CPU 「飞腾D2000双网(2*D4/32/MS)风扇」更名自「飞腾D2000双网(2*D4/16/MS)风扇」（¥2920）",
          "VOPC(X86) CPU 「飞腾FT2000双网(2*D4/32/MS)风扇」更名自「飞腾FT2000双网(2*D4/16/MS)风扇」（¥3400）",
          "VOPC(X86) CPU 「兆芯6640MA双网(2*D4/32/MS)风扇」更名自「兆芯6640MA双网(2*D4/16/MS)风扇」（¥2572）",
          "VOPC(X86) CPU 「兆芯U6580双网(2*D4/32/MS)风扇」更名自「兆芯U6580双网(2*D4/16/MS)风扇」（¥2220）",
          "VOPC(X86) CPU 「兆芯U6780A双网(2*D4/32/MS)风扇」更名自「兆芯U6780A双网(2*D4/16/MS)风扇」（¥2572）",
          "VOPC(X86) CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "FWS(X86) CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "FWS(X86) CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "FWS(X86) CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "FWS(X86) CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "FWS(X86) CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "FWE(X86) CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "FWE(X86) CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "FWE(X86) CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "FWE(X86) CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "FWE(X86) CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "DSMB02(X86) CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "DSMB02(X86) CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "DSMB02(X86) CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "DSMB02(X86) CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "DSMB02(X86) CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "IBOOKHY(X86) CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "IBOOKHY(X86) CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "IBOOKHY(X86) CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "IBOOKHY(X86) CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "IBOOKHY(X86) CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "BPC-101 CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "BPC-101 CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "BPC-101 CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "BPC-101 CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "BPC-101 CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "BPC-103 CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "BPC-103 CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "BPC-103 CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "BPC-103 CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "BPC-103 CPU 「飞腾D2000双网(2*D4/32/MS)风扇」更名自「飞腾D2000双网(2*D4/16/MS)风扇」（¥2920）",
          "BPC-103 CPU 「飞腾FT2000双网(2*D4/32/MS)风扇」更名自「飞腾FT2000双网(2*D4/16/MS)风扇」（¥3400）",
          "BPC-103 CPU 「兆芯6640MA双网(2*D4/32/MS)风扇」更名自「兆芯6640MA双网(2*D4/16/MS)风扇」（¥2572）",
          "BPC-103 CPU 「兆芯U6580双网(2*D4/32/MS)风扇」更名自「兆芯U6580双网(2*D4/16/MS)风扇」（¥2220）",
          "BPC-103 CPU 「兆芯U6780A双网(2*D4/32/MS)风扇」更名自「兆芯U6780A双网(2*D4/16/MS)风扇」（¥2572）",
          "BPC-103 CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "GBOOK-GPS(DC系列) CPU 「6代i3-6100U双网(2*D3/16/M2)」更名自「6代i3-6100U双网(2*D3/32/M2)」（¥740）",
          "GBOOK-GPS(DC系列) CPU 「7代I3-7100U 双网(2*D3/16/M2)」更名自「7代I3-7100U 双网(2*D3/32/M2)」（¥820）",
          "GBOOK-GPS(DC系列) CPU 「7代i5-7300U四网(2*D4/32/M2)」更名自「7代i5-7300U四网(2*D4/16/M2)」（¥1800）",
          "GBOOK-GPS(DC系列) CPU 「8代i7-8665U四网(2*D4/32/M2)」更名自「8代i7-8665U四网(2*D4/16/M2)」（¥1940）",
          "GBOOK-GPS(DC系列) CPU 「6代I7-6600U双网(2*D3/16/M2)」更名自「6代I7-6600U双网(3*D3/32/M2)」（¥1250）",
          "FWS(X86) CPU 4代i3-4005U双网(1*D3/8/MS) 价格 620→660",
          "FWS(X86) CPU 7代i5-7300U 双网(1*D3/8/M2) 价格 1050→1030",
          "＋ BPC-103 主板 新增：H610/3网/12-14代/2*D4/32/M2（¥1560）"
        ]
      },
      {
        "date": 46316,
        "items": [
          "NANO CPU 「I5-6200U双网(1*D3/8/M2)」更名自「I5-6200U双网(1*D3/16/M2)」（¥1100）",
          "NANO CPU 「I5-7200U双网(1*D3/8/M2)」更名自「I5-7200U双网(1*D3/16/M2)」（¥1100）"
        ]
      },
      {
        "date": 46315,
        "items": [
          "IPRO(x86) CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "IPRO(x86) CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "VFACE CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "VFACE CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "VOPC(X86) CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "VOPC(X86) CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "FWS(X86) CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "FWS(X86) CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "FWE(X86) CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "FWE(X86) CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "DSMB02(X86) CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "DSMB02(X86) CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "IBOOKHY(X86) CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "IBOOKHY(X86) CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "BPC-101 CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "BPC-101 CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "BPC-103 CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "BPC-103 CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "GBOOK-GPS(DC系列) CPU 「6代i3-6100U双网(2*D3/32/M2)」更名自「6代i3-6100U双网(2*D4/32/M2)」（¥740）",
          "GBOOK-GPS(DC系列) CPU 「7代I3-7100U 双网(2*D3/32/M2)」更名自「7代I3-7100U 双网(2*D4/32/M2)」（¥820）",
          "CPU 3代i5-3210M单网(1*D3/8/MS) 价格 480→550（影响 10 个产品：IPRO(x86)、VFACE、VOPC(X86)、FWS(X86)、FWE(X86)、DSMB02(X86)、IBOOKHY(X86)、BPC-101、BPC-103、GBOOK-GPS(DC系列)）",
          "CPU N5095双网(1*D4/16/M2) 价格 1270→1230（影响 10 个产品：IPRO(x86)、VFACE、VOPC(X86)、FWS(X86)、FWE(X86)、DSMB02(X86)、IBOOKHY(X86)、BPC-101、BPC-103、GBOOK-GPS(DC系列)）",
          "CPU J6412双网(1*D4/16/M2) 价格 1920→1700（影响 10 个产品：IPRO(x86)、VFACE、VOPC(X86)、FWS(X86)、FWE(X86)、DSMB02(X86)、IBOOKHY(X86)、BPC-101、BPC-103、GBOOK-GPS(DC系列)）",
          "CPU N100双网(1*D4/16/M2) 价格 1980→1780（影响 10 个产品：IPRO(x86)、VFACE、VOPC(X86)、FWS(X86)、FWE(X86)、DSMB02(X86)、IBOOKHY(X86)、BPC-101、BPC-103、GBOOK-GPS(DC系列)）",
          "＋ CPU 新增：6代I7-6600U双网(3*D3/32/M2)（¥1250，影响 10 个产品：IPRO(x86)、VFACE、VOPC(X86)、FWS(X86)、FWE(X86)、DSMB02(X86)、IBOOKHY(X86)、BPC-101、BPC-103、GBOOK-GPS(DC系列)）",
          "内存 8G(D4) 价格 600→620（影响 12 个产品：IPRO(x86)、IPRO-SE(x86)、VFACE、VOPC(X86)、FWS(X86)、FWE(X86)、DSMB02(X86)、IBOOKHY(X86)、NANO、BPC-101、BPC-103、GBOOK-GPS(DC系列)）",
          "内存 16G(D4) 价格 1200→1230（影响 12 个产品：IPRO(x86)、IPRO-SE(x86)、VFACE、VOPC(X86)、FWS(X86)、FWE(X86)、DSMB02(X86)、IBOOKHY(X86)、NANO、BPC-101、BPC-103、GBOOK-GPS(DC系列)）",
          "CPU RK3566(4+32)+WIFI6/BT单网 价格 850→670（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3566(8+64)+WIFI6/BT单网 价格 1440→1170（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3568D(4+32)+WIFI6/BT单网 价格 930→760（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3568D(8+64)+WIFI6/BT单网 价格 1500→1310（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3288(4+32)+WIFI/BT单网 价格 820→740（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU 全志H527(4+32)+WIFI6/BT单网 价格 1180→1020（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3576(8+64)+WIFI6/BT单网 价格 1700→1530（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588S(8+64)+WIFI/BT单网 价格 2700→2320（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588S(8+128)+WIFI/BT单网 价格 2900→2420（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588A(4+64)+WIFI/BT双网 价格 2500→2100（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588A(8+64)+WIFI/BT双网 价格 2900→2460（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588A(8+128)+WIFI/BT双网 价格 3040→2600（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588A(8+256)+WIFI/BT双网 价格 3900→3250（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588A(16+128)+WIFI/BT双网 价格 3600→2890（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "CPU RK3588A(16+256)+WIFI/BT双网 价格 4100→3610（影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "－ CPU 下架：RK3288(2+32)+WIFI/BT单网（原¥740，影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "－ CPU 下架：RK3588S(4+64)+WIFI/BT单网（原¥2200，影响 7 个产品：IPRO(安卓)、IPRO-SE(安卓)、VOPC(安卓)、FWS(安卓)、FWE(安卓)、DSMB02(安卓)、ANBOX）",
          "IPRO-SE(x86) CPU 6代i5 6200U 双网 for SE（2*D3/16/M2） 价格 960→1000",
          "IPRO-SE(x86) CPU 6代i7 6500U 双网 for SE（2*D3/16/M2） 价格 1340→1300",
          "IPRO-SE(x86) CPU 8代i5 8250U 双网 for SE（2*D3/16/M2） 价格 1360→1260",
          "IPRO-SE(x86) CPU 8代i7 8550U 双网 for SE（2*D3/16/M2） 价格 1520→1390",
          "＋ 主板 新增：H110/6-9代/300W(2*D3/4*SA/1*M2/PCIE X16*1/X4*2/PCI*4)双网（¥1320，影响 2 个产品：上架式工控机、GPS(台式系列)）",
          "CPU I7 6700 价格 670→610（影响 3 个产品：上架式工控机、BPC-103、GPS(台式系列)）",
          "CPU I3-7100 价格 120→90（影响 3 个产品：上架式工控机、BPC-103、GPS(台式系列)）",
          "CPU I7-7700 价格 710→800（影响 3 个产品：上架式工控机、BPC-103、GPS(台式系列)）",
          "CPU I7-8700 价格 1190→1260（影响 3 个产品：上架式工控机、BPC-103、GPS(台式系列)）",
          "CPU I3-9100 价格 420→380（影响 3 个产品：上架式工控机、BPC-103、GPS(台式系列)）",
          "CPU I5-9400 价格 960→910（影响 3 个产品：上架式工控机、BPC-103、GPS(台式系列)）",
          "CPU I7-9700 价格 1590→1480（影响 3 个产品：上架式工控机、BPC-103、GPS(台式系列)）",
          "NANO CPU I5-6200U双网(1*D3/16/M2) 价格 1040→1100",
          "NANO CPU J6412双网 for NANO(1*D4/16/M2) 价格 1780→1580",
          "NANO CPU N100双网 for NANO(1*D4/16/M2) 价格 1900→1760",
          "NANO CPU N100双网TYPE-C(1*D5/32/M2) 价格 1920→1780",
          "NANO CPU N150双网(1*D4/16/M2) 价格 1940→1800",
          "NANO CPU J6412六网i226(1*D4/16/M2) 价格 2100→1900",
          "NANO CPU N100六网i226(1*D4/16/M2) 价格 2040→1960",
          "NANO CPU N150四网i226(1*D4/16/M2) 价格 2080→1880",
          "IPS系列 内存 8G(D4)笔记本 价格 600→620",
          "IPS系列 内存 16G(D4)笔记本 价格 1200→1230"
        ]
      }
    ]
  }
};

var SELLERS = [
  {
    "id": "weiwo",
    "company": "威沃电子（广东）有限公司",
    "address": "广东省佛山市顺德区陈村镇仙涌村产兴一路3号中集高新智能制造中心1栋902-1（住所申报）",
    "contact": "",
    "phone": "020-37036182",
    "mobile": "",
    "credit_code": "91440106589523882R",
    "bank_name": "招商银行股份有限公司广州盈隆广场支行",
    "bank_account": "120907481710401",
    "bank_routing": "308581002370",
    "account_holder": "威沃电子（广东）有限公司",
    "representative": "",
    "order_company": "威沃"
  },
  {
    "id": "baotuo",
    "company": "广州市宝拓电子科技有限公司",
    "address": "广东省佛山市顺德区陈村镇仙涌村产兴一路3号中集高新智能制造中心1栋902-1（住所申报）",
    "contact": "",
    "phone": "020-37036182",
    "mobile": "",
    "credit_code": "91440106679704513T",
    "bank_name": "招商银行股份有限公司广州盈隆广场支行",
    "bank_account": "120906248910401",
    "bank_routing": "308581002370",
    "account_holder": "广州市宝拓电子科技有限公司",
    "representative": "",
    "order_company": "宝拓"
  },
  {
    "id": "yinchi",
    "company": "广东银驰电子科技有限公司",
    "address": "广东省佛山市顺德区陈村镇仙涌村产兴一路3号中集高新智能制造中心1栋902-1（住所申报）",
    "contact": "",
    "phone": "0757-29399264",
    "mobile": "",
    "credit_code": "91440113MA59D5NQ8F",
    "bank_name": "中国工商银行股份有限公司广州大石支行",
    "bank_account": "3602074809100265572",
    "bank_routing": "102581015569",
    "account_holder": "广东银驰电子科技有限公司",
    "representative": "",
    "order_company": "银驰"
  }
];

var SALESPEOPLE = [
  {
    "name": "曾丽华",
    "phone": "19927797845"
  },
  {
    "name": "欧阳勇杰",
    "phone": "18028100370"
  },
  {
    "name": "徐珍",
    "phone": "18122024563"
  },
  {
    "name": "吴演毅",
    "phone": "13326444912"
  },
  {
    "name": "张一凡",
    "phone": "19924601681"
  },
  {
    "name": "梁静",
    "phone": "18029241356"
  },
  {
    "name": "戴铭",
    "phone": "18145721513"
  },
  {
    "name": "成丽君",
    "phone": "19925672463"
  },
  {
    "name": "孔维婷",
    "phone": "18054288002"
  },
  {
    "name": "王玲",
    "phone": "18002244814"
  },
  {
    "name": "梁彩霞",
    "phone": "18024529993"
  },
  {
    "name": "张盛克",
    "phone": "19925673082"
  },
  {
    "name": "陈潇",
    "phone": "19925672912"
  },
  {
    "name": "廖思恒",
    "phone": "18198856265"
  },
  {
    "name": "韦茂荣",
    "phone": "18028124576"
  },
  {
    "name": "冯庆欣",
    "phone": "18922486153"
  },
  {
    "name": "邹顺洪",
    "phone": "18028124835"
  },
  {
    "name": "余志豪",
    "phone": "19928278091"
  },
  {
    "name": "刘宏佳",
    "phone": "13808881949"
  },
  {
    "name": "邓海燕",
    "phone": "13316242441"
  },
  {
    "name": "章靖雯",
    "phone": "18028100157"
  },
  {
    "name": "梁碧映",
    "phone": "18028118654"
  },
  {
    "name": "陈颖婷",
    "phone": "19927798042"
  }
];

var CONTRACT_NO = {
  "邓海燕": {
    "prefix": "XS-HY",
    "suffix": "-Y"
  },
  "刘宏佳": {
    "prefix": "XS-HJ",
    "suffix": "-W"
  },
  "何孝铭": {
    "prefix": "XS-XM",
    "suffix": "-S"
  },
  "韦茂荣": {
    "prefix": "XS-MR",
    "suffix": "-Y"
  },
  "章靖雯": {
    "prefix": "XS-JW",
    "suffix": "-Y"
  },
  "冯庆欣": {
    "prefix": "XS-QX",
    "suffix": "-Y"
  },
  "邹顺洪": {
    "prefix": "XS-ZS",
    "suffix": "-Y"
  },
  "梁碧映": {
    "prefix": "XS-BY",
    "suffix": "-Y-1"
  },
  "余志豪": {
    "prefix": "XS-ZH",
    "suffix": "-Y"
  },
  "张一凡": {
    "prefix": "XS-Z-6-YF",
    "suffix": "-Y"
  },
  "梁静": {
    "prefix": "XS-Z-6-JJ",
    "suffix": ""
  },
  "徐珍": {
    "prefix": "XS-X-5-XZ",
    "suffix": "-Y"
  },
  "吴演毅": {
    "prefix": "XS-X-5-WY",
    "suffix": "-Y"
  },
  "欧阳勇杰": {
    "prefix": "XS-X-5-YJ",
    "suffix": ""
  },
  "张盛克": {
    "prefix": "XS-C-3-SK",
    "suffix": ""
  },
  "陈潇": {
    "prefix": "XS-C-3-CX",
    "suffix": "-W"
  },
  "廖思恒": {
    "prefix": "XS-C-14-SH",
    "suffix": "-W"
  },
  "戴铭": {
    "prefix": "XS-C-2-DM",
    "suffix": "-B"
  },
  "孔维婷": {
    "prefix": "XS-C-2-WT",
    "suffix": ""
  },
  "成丽君": {
    "prefix": "XS-C-2-LJ",
    "suffix": "-B"
  },
  "梁彩霞": {
    "prefix": "XS-C-22-LC",
    "suffix": ""
  },
  "王玲": {
    "prefix": "XS-C-22-WL",
    "suffix": "-W"
  },
  "陈颖婷": {
    "prefix": "XS-C-22-YT",
    "suffix": "-W"
  },
  "曾丽华": {
    "prefix": "XS-H-1-LH",
    "suffix": ""
  }
};
