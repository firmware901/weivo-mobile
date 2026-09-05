// ============================================================
// 威沃商务助手 · 可维护数据文件（biz-data.js）
// 由维护后台 maintain.html 导入 → 编辑 → 导出 生成。请勿手工修改，改请用维护后台。
// 本文件为「分发文件」：只含可维护数据（报价/型号配置/乙方主体/业务员/合同号）。
// 业务员本地客户记忆与合同序号存于浏览器 localStorage，不在此文件内，更新本文件不会冲掉。
// ============================================================

var QUOTE_DATA = {
  "generatedAt": "2026-09-05 02:20:27",
  "sources": [
    {
      "key": "primary",
      "label": "主推",
      "version": "2026.09.08",
      "validUntil": "9月30",
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 980
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 790
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 890
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 2000
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "6代i5-6200U双网(1*D4/16/M2)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 980
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 790
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 890
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 2000
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "B310D/6-9代/D3",
                  "price": 960
                },
                {
                  "name": "H610/12-14代/D4",
                  "price": 1200
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3 6100(2*D3/16/M2)",
                  "price": 100
                },
                {
                  "name": "I5 6500(2*D3/16/M2)",
                  "price": 290
                },
                {
                  "name": "I7 6700(2*D3/16/M2)",
                  "price": 670
                },
                {
                  "name": "I3-7100(2*D3/16/M2)",
                  "price": 120
                },
                {
                  "name": "I5-7400(2*D3/16/M2)",
                  "price": 330
                },
                {
                  "name": "I7-7700(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I3-8100(2*D3/16/M2)",
                  "price": 300
                },
                {
                  "name": "I5-8400(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I7-8700(2*D3/16/M2)",
                  "price": 1190
                },
                {
                  "name": "I3-9100(2*D3/16/M2)",
                  "price": 420
                },
                {
                  "name": "I5-9400(2*D3/16/M2)",
                  "price": 960
                },
                {
                  "name": "I7-9700(2*D3/16/M2)",
                  "price": 1590
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 980
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 790
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 890
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 2000
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "6代i5-6200U双网(1*D4/16/M2)",
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 980
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 790
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 890
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 2000
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 980
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 790
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 890
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 2000
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
                }
              ]
            },
            {
              "name": "支架",
              "options": [
                {
                  "name": "桌面支架",
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
              "price": 0
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I5-5200U双网(2*D3/16/MS)",
                  "price": 950
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 980
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 790
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 890
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 2000
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
              "price": 0
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
                  "price": 820
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
                }
              ]
            }
          ]
        },
        {
          "name": "三防平板",
          "product": "工业平板电脑",
          "mode": "round",
          "discountP": 0.8,
          "discountL": 0.7,
          "sizes": [
            {
              "name": "8",
              "price": 0
            },
            {
              "name": "10",
              "price": 0
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
                  "name": "MO8A/MTK8788/8G/128G/单网/WIFI",
                  "price": 3360
                },
                {
                  "name": "A10/MT8781/8G/128G/WIFI",
                  "price": 2700
                },
                {
                  "name": "N10A/赛扬N5100/8G/128G/单网/WIFI",
                  "price": 5250
                },
                {
                  "name": "N10A/赛扬N5100/8G/256G/单网/WIFI",
                  "price": 5560
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
              "price": 610
            },
            {
              "name": "IPC-300",
              "price": 660
            },
            {
              "name": "IPC-620(BG)",
              "price": 630
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "B85/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 380
                },
                {
                  "name": "H311/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 650
                },
                {
                  "name": "H610M/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
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
                  "name": "I3 6100(2*D3/16/M2)",
                  "price": 100
                },
                {
                  "name": "I5 6500(2*D3/16/M2)",
                  "price": 290
                },
                {
                  "name": "I7 6700(2*D3/16/M2)",
                  "price": 670
                },
                {
                  "name": "I3-7100(2*D3/16/M2)",
                  "price": 120
                },
                {
                  "name": "I5-7400(2*D3/16/M2)",
                  "price": 330
                },
                {
                  "name": "I7-7700(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I3-8100(2*D3/16/M2)",
                  "price": 300
                },
                {
                  "name": "I5-8400(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I7-8700(2*D3/16/M2)",
                  "price": 1190
                },
                {
                  "name": "I3-9100(2*D3/16/M2)",
                  "price": 420
                },
                {
                  "name": "I5-9400(2*D3/16/M2)",
                  "price": 960
                },
                {
                  "name": "I7-9700(2*D3/16/M2)",
                  "price": 1590
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
                  "price": 600
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 980
                },
                {
                  "name": "RK3568D(2+32)+WIFI6/BT单网",
                  "price": 780
                },
                {
                  "name": "公板RK3288(2+32)+WIFI/BT单网",
                  "price": 790
                },
                {
                  "name": "全志H527(2+32)+WIFI6/BT单网",
                  "price": 890
                },
                {
                  "name": "RK3576(4+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3588S(4+64)+WIFI6/BT单网",
                  "price": 2000
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
                  "price": 580
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                "I3-5005U双网(2*D3/16/MS)",
                "I5-5200U双网(2*D3/16/MS)",
                "I3-8145U双网(2*D4/32/M2)",
                "I7-8565U双网(2*D4/32/M2)",
                "I5-8265U四网(2*D4/32/M2)",
                "I7-10710U四网(2*D4/32/M2)",
                "I5-7200U双网(2*D4/16/M2)"
              ]
            },
            {
              "name": "GW-200",
              "price": 575,
              "cpuOptions": [
                "I5-5200U双网(2*D3/16/MS)",
                "I5-7200U双网(2*D3/16/M2)"
              ]
            }
          ],
          "categories": [
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3-5005U双网(2*D3/16/MS)",
                  "price": 900
                },
                {
                  "name": "I5-5200U双网 for GW100(2*D3/16/MS)",
                  "price": 1030
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
                  "name": "I5-10310U双网(2*D4/32/M2)",
                  "price": 2620
                },
                {
                  "name": "I5-8265U四网(2*D4/32/M2)",
                  "price": 2500
                },
                {
                  "name": "I5-10310U四网(2*D4/32/M2)",
                  "price": 2700
                },
                {
                  "name": "I7-10710U四网(2*D4/32/M2)",
                  "price": 3060
                },
                {
                  "name": "I5-7200U双网(2*D3/16/M2)",
                  "price": 1280
                },
                {
                  "name": "I5-7200U双网(2*D4/16/M2)",
                  "price": 1400
                },
                {
                  "name": "I5-5200U双网(2*D3/16/MS)",
                  "price": 950
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
            },
            {
              "name": "新配置类",
              "options": []
            },
            {
              "name": "新配置类",
              "options": []
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "name": "B310D/6-9代/D3",
                  "price": 960
                },
                {
                  "name": "H610/12-14代/D4",
                  "price": 1200
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "I3 6100(2*D3/16/M2)",
                  "price": 100
                },
                {
                  "name": "I5 6500(2*D3/16/M2)",
                  "price": 290
                },
                {
                  "name": "I7 6700(2*D3/16/M2)",
                  "price": 670
                },
                {
                  "name": "I3-7100(2*D3/16/M2)",
                  "price": 120
                },
                {
                  "name": "I5-7400(2*D3/16/M2)",
                  "price": 330
                },
                {
                  "name": "I7-7700(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I3-8100(2*D3/16/M2)",
                  "price": 300
                },
                {
                  "name": "I5-8400(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I7-8700(2*D3/16/M2)",
                  "price": 1190
                },
                {
                  "name": "I3-9100(2*D3/16/M2)",
                  "price": 420
                },
                {
                  "name": "I5-9400(2*D3/16/M2)",
                  "price": 960
                },
                {
                  "name": "I7-9700(2*D3/16/M2)",
                  "price": 1590
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
              "price": 220
            },
            {
              "name": "BPC-103(H)",
              "price": 320
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
                  "name": "B310D/6-9代/2*D3/16/M2",
                  "price": 960
                },
                {
                  "name": "H610/12-14代/2*D4/32/M2",
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 670
                },
                {
                  "name": "I3-7100",
                  "price": 120
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 710
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
                  "price": 1190
                },
                {
                  "name": "I3-9100",
                  "price": 420
                },
                {
                  "name": "I5-9400",
                  "price": 960
                },
                {
                  "name": "I7-9700",
                  "price": 1590
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
          "discountL": 0.72,
          "sizes": [
            {
              "name": "GBOOK-150(DR)",
              "price": 1400
            },
            {
              "name": "GBOOK-156(DR)",
              "price": 2088
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
                  "name": "5代i7-5650U双网(2*D3/16/MS)",
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "name": "B85/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 380
                },
                {
                  "name": "H311/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 650
                },
                {
                  "name": "H610M/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
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
                  "name": "I3 6100(2*D3/16/M2)",
                  "price": 100
                },
                {
                  "name": "I5 6500(2*D3/16/M2)",
                  "price": 290
                },
                {
                  "name": "I7 6700(2*D3/16/M2)",
                  "price": 670
                },
                {
                  "name": "I3-7100(2*D3/16/M2)",
                  "price": 120
                },
                {
                  "name": "I5-7400(2*D3/16/M2)",
                  "price": 330
                },
                {
                  "name": "I7-7700(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I3-8100(2*D3/16/M2)",
                  "price": 300
                },
                {
                  "name": "I5-8400(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I7-8700(2*D3/16/M2)",
                  "price": 1190
                },
                {
                  "name": "I3-9100(2*D3/16/M2)",
                  "price": 420
                },
                {
                  "name": "I5-9400(2*D3/16/M2)",
                  "price": 960
                },
                {
                  "name": "I7-9700(2*D3/16/M2)",
                  "price": 1590
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
                  "price": 600
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
              "price": 2358
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
                  "name": "B85/4代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 380
                },
                {
                  "name": "H311/6-9代/300W(2*D3/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
                  "price": 650
                },
                {
                  "name": "H610M/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*1/PCIE X1*1)单网",
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
                  "name": "I3 6100(2*D3/16/M2)",
                  "price": 100
                },
                {
                  "name": "I5 6500(2*D3/16/M2)",
                  "price": 290
                },
                {
                  "name": "I7 6700(2*D3/16/M2)",
                  "price": 670
                },
                {
                  "name": "I3-7100(2*D3/16/M2)",
                  "price": 120
                },
                {
                  "name": "I5-7400(2*D3/16/M2)",
                  "price": 330
                },
                {
                  "name": "I7-7700(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I3-8100(2*D3/16/M2)",
                  "price": 300
                },
                {
                  "name": "I5-8400(2*D3/16/M2)",
                  "price": 710
                },
                {
                  "name": "I7-8700(2*D3/16/M2)",
                  "price": 1190
                },
                {
                  "name": "I3-9100(2*D3/16/M2)",
                  "price": 420
                },
                {
                  "name": "I5-9400(2*D3/16/M2)",
                  "price": 960
                },
                {
                  "name": "I7-9700(2*D3/16/M2)",
                  "price": 1590
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
                  "price": 600
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
      "version": "2026.09.08",
      "validUntil": "9月30",
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 820
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
                  "price": 1180
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1700
                },
                {
                  "name": "RK3588S(4+64)+WIFI/BT单网",
                  "price": 2200
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2700
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2500
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 3040
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3900
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 3600
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 4100
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "name": "7代i5-7300U 双网(1*D4/8/M2)",
                  "price": 1030
                },
                {
                  "name": "6代i5 6200U 双网 for SE（2*D3/16/M2）",
                  "price": 960
                },
                {
                  "name": "6代i7 6500U 双网 for SE（2*D3/16/M2）",
                  "price": 1340
                },
                {
                  "name": "8代i5 8250U 双网 for SE（2*D3/16/M2）",
                  "price": 1360
                },
                {
                  "name": "8代i7 8550U 双网 for SE（2*D3/16/M2）",
                  "price": 1520
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 820
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
                  "price": 1180
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1700
                },
                {
                  "name": "RK3588S(4+64)+WIFI/BT单网",
                  "price": 2200
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2700
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2500
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 3040
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3900
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 3600
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 4100
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "飞腾D2000双网(2*D4/16/MS)风扇",
                  "price": 2920
                },
                {
                  "name": "飞腾FT2000双网(2*D4/16/MS)风扇",
                  "price": 3400
                },
                {
                  "name": "兆芯6640MA双网(2*D4/16/MS)风扇",
                  "price": 2572
                },
                {
                  "name": "兆芯U6580双网(2*D4/16/MS)风扇",
                  "price": 2220
                },
                {
                  "name": "兆芯U6780A双网(2*D4/16/MS)风扇",
                  "price": 2572
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 820
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
                  "price": 1180
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1700
                },
                {
                  "name": "RK3588S(4+64)+WIFI/BT单网",
                  "price": 2200
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2700
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2500
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 3040
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3900
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 3600
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 4100
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 620
                },
                {
                  "name": "7代i5-7300U 双网(1*D3/8/M2)",
                  "price": 1050
                },
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 820
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
                  "price": 1180
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1700
                },
                {
                  "name": "RK3588S(4+64)+WIFI/BT单网",
                  "price": 2200
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2700
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2500
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 3040
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3900
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 3600
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 4100
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 820
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
                  "price": 1180
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1700
                },
                {
                  "name": "RK3588S(4+64)+WIFI/BT单网",
                  "price": 2200
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2700
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2500
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 3040
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3900
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 3600
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 4100
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 820
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
                  "price": 1180
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1700
                },
                {
                  "name": "RK3588S(4+64)+WIFI/BT单网",
                  "price": 2200
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2700
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2500
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 3040
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3900
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 3600
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 4100
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 50
                },
                {
                  "name": "悬臂支架",
                  "price": 100
                },
                {
                  "name": "苹果支架",
                  "price": 80
                },
                {
                  "name": "三角支架",
                  "price": 65
                },
                {
                  "name": "小K底坐",
                  "price": 500
                },
                {
                  "name": "中K底坐",
                  "price": 600
                },
                {
                  "name": "大K底坐",
                  "price": 700
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
              "name": "IPC-610(4U)",
              "price": 850
            },
            {
              "name": "IPC-810(4U)",
              "price": 1100
            },
            {
              "name": "IPC-110-650(1U)",
              "price": 1250
            },
            {
              "name": "IPC-210(2U)",
              "price": 960
            }
          ],
          "categories": [
            {
              "name": "主板",
              "options": [
                {
                  "name": "H310/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网",
                  "price": 1180
                },
                {
                  "name": "H310/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网",
                  "price": 1400
                },
                {
                  "name": "H610/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
                  "price": 1700
                },
                {
                  "name": "H610/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
                  "price": 1920
                },
                {
                  "name": "H310/6-9代/250W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2双网)",
                  "price": 1180
                },
                {
                  "name": "H610/12-14代/250W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
                  "price": 1700
                },
                {
                  "name": "H310/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2双网)",
                  "price": 1180
                },
                {
                  "name": "H310/6-9代/8盘600W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网",
                  "price": 2220
                },
                {
                  "name": "H610/12-14代/8盘600W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
                  "price": 2740
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
                  "price": 670
                },
                {
                  "name": "I3-7100",
                  "price": 120
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 710
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
                  "price": 1190
                },
                {
                  "name": "I3-9100",
                  "price": 420
                },
                {
                  "name": "I5-9400",
                  "price": 960
                },
                {
                  "name": "I7-9700",
                  "price": 1590
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "8G(D4)台式机",
                  "price": 600
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 850
                },
                {
                  "name": "RK3566(8+64)+WIFI6/BT单网",
                  "price": 1440
                },
                {
                  "name": "RK3568D(4+32)+WIFI6/BT单网",
                  "price": 930
                },
                {
                  "name": "RK3568D(8+64)+WIFI6/BT单网",
                  "price": 1500
                },
                {
                  "name": "RK3288(2+32)+WIFI/BT单网",
                  "price": 740
                },
                {
                  "name": "RK3288(4+32)+WIFI/BT单网",
                  "price": 820
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
                  "price": 1180
                },
                {
                  "name": "RK3576(8+64)+WIFI6/BT单网",
                  "price": 1700
                },
                {
                  "name": "RK3588S(4+64)+WIFI/BT单网",
                  "price": 2200
                },
                {
                  "name": "RK3588S(8+64)+WIFI/BT单网",
                  "price": 2700
                },
                {
                  "name": "RK3588S(8+128)+WIFI/BT单网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(4+64)+WIFI/BT双网",
                  "price": 2500
                },
                {
                  "name": "RK3588A(8+64)+WIFI/BT双网",
                  "price": 2900
                },
                {
                  "name": "RK3588A(8+128)+WIFI/BT双网",
                  "price": 3040
                },
                {
                  "name": "RK3588A(8+256)+WIFI/BT双网",
                  "price": 3900
                },
                {
                  "name": "RK3588A(16+128)+WIFI/BT双网",
                  "price": 3600
                },
                {
                  "name": "RK3588A(16+256)+WIFI/BT双网",
                  "price": 4100
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
                  "name": "I5-6200U双网(1*D3/16/M2)",
                  "price": 1040
                },
                {
                  "name": "I5-7200U双网(1*D3/16/M2)",
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
                  "name": "J6412双网(1*D4/16/M2)",
                  "price": 1780
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
                  "price": 1900
                },
                {
                  "name": "N100双网TYPE-C(1*D5/32/M2)",
                  "price": 1920
                },
                {
                  "name": "N150双网(1*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "N305双网(1*D4/16/M2)",
                  "price": 3160
                },
                {
                  "name": "J6412六网i226(1*D4/16/M2)",
                  "price": 2100
                },
                {
                  "name": "N100六网i226(1*D4/16/M2)",
                  "price": 2040
                },
                {
                  "name": "N150四网i226(1*D4/16/M2)",
                  "price": 2080
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
              "price": 220
            },
            {
              "name": "BPC-103(H)",
              "price": 320
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
                  "name": "B310D/6-9代/2*D3/16/M2",
                  "price": 960
                },
                {
                  "name": "H610/12-14代/2*D4/32/M2",
                  "price": 1200
                },
                {
                  "name": "Z390/6-9代/2*D4/32/M2/五网",
                  "price": 1440
                }
              ]
            },
            {
              "name": "CPU",
              "options": [
                {
                  "name": "3代i5-3210M单网(1*D3/8/MS)",
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "飞腾D2000双网(2*D4/16/MS)风扇",
                  "price": 2920
                },
                {
                  "name": "飞腾FT2000双网(2*D4/16/MS)风扇",
                  "price": 3400
                },
                {
                  "name": "兆芯6640MA双网(2*D4/16/MS)风扇",
                  "price": 2572
                },
                {
                  "name": "兆芯U6580双网(2*D4/16/MS)风扇",
                  "price": 2220
                },
                {
                  "name": "兆芯U6780A双网(2*D4/16/MS)风扇",
                  "price": 2572
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
                  "price": 670
                },
                {
                  "name": "I3-7100",
                  "price": 120
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 710
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
                  "price": 1190
                },
                {
                  "name": "I3-9100",
                  "price": 420
                },
                {
                  "name": "I5-9400",
                  "price": 960
                },
                {
                  "name": "I7-9700",
                  "price": 1590
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
              "price": 2088
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
                  "price": 480
                },
                {
                  "name": "3代i5-3317U双网(1*D3/8/MS)",
                  "price": 590
                },
                {
                  "name": "6代i3-6100U双网(2*D4/32/M2)",
                  "price": 740
                },
                {
                  "name": "7代I3-7100U 双网(2*D4/32/M2)",
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
                  "name": "10代I3-10110U双网(2*D4/32/M2)",
                  "price": 1510
                },
                {
                  "name": "12代I3-1215U双网(2*D4/32/M2)",
                  "price": 2310
                },
                {
                  "name": "N5095双网(1*D4/16/M2)",
                  "price": 1270
                },
                {
                  "name": "J6413双网(1*D4/16/M2)",
                  "price": 1920
                },
                {
                  "name": "N100双网(1*D4/16/M2)",
                  "price": 1980
                },
                {
                  "name": "7代i5-7300U四网(2*D4/16/M2)",
                  "price": 1800
                },
                {
                  "name": "8代i7-8665U四网(2*D4/16/M2)",
                  "price": 1940
                },
                {
                  "name": "12代i5-1235U四网(2*D4/32/m2/4COM)",
                  "price": 3100
                },
                {
                  "name": "10代I7-1065G7双网(2*d4/32/m2)",
                  "price": 2360
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
                  "price": 570
                },
                {
                  "name": "16G(D4)",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
                  "name": "H310/6-9代/300W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网",
                  "price": 1180
                },
                {
                  "name": "H310/6-9代/500W(2*D4/3*SA/1*M2/PCIE X16*1/X4*1/PCI*2)双网",
                  "price": 1400
                },
                {
                  "name": "H610/12-14代/300W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
                  "price": 1700
                },
                {
                  "name": "H610/12-14代/500W(2*D4/3*SA/1*M2/PCIE X16*2/X4*3)双网",
                  "price": 1920
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
                  "price": 670
                },
                {
                  "name": "I3-7100",
                  "price": 120
                },
                {
                  "name": "I5-7400",
                  "price": 330
                },
                {
                  "name": "I7-7700",
                  "price": 710
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
                  "price": 1190
                },
                {
                  "name": "I3-9100",
                  "price": 420
                },
                {
                  "name": "I5-9400",
                  "price": 960
                },
                {
                  "name": "I7-9700",
                  "price": 1590
                }
              ]
            },
            {
              "name": "内存",
              "options": [
                {
                  "name": "8G(D4)台式机",
                  "price": 600
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
              "price": 2358
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
                  "name": "飞腾D2000四网(2*D4/32/M2)",
                  "price": 3440
                },
                {
                  "name": "飞腾FT2000双网(2*D4/32/M2)",
                  "price": 4000
                },
                {
                  "name": "兆芯U6580单网(2*D4/32/M2)",
                  "price": 2240
                },
                {
                  "name": "兆芯U6780A单网(2*D4/32/M2)",
                  "price": 2500
                },
                {
                  "name": "兆芯6640MA双网(2*D4/32/M2)",
                  "price": 2800
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
                  "price": 570
                },
                {
                  "name": "16G(D4)笔记本",
                  "price": 1200
                },
                {
                  "name": "8G(D4)台式机",
                  "price": 600
                },
                {
                  "name": "16G(D4)台式机",
                  "price": 1200
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
                  "name": "西数1T",
                  "price": 740
                },
                {
                  "name": "西数2T",
                  "price": 950
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
        "date": 46270,
        "items": [
          "－ IPRO(x86) CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "IPRO(x86) 内存 4G(D4) 价格 310→365",
          "IPRO-SE(x86) 内存 4G(D4) 价格 310→365",
          "－ VFACE CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "VFACE 内存 4G(D4) 价格 310→365",
          "VFACE-H 内存 4G(D4) 价格 310→365",
          "－ VOPC(X86) CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "VOPC(X86) 内存 4G(D4) 价格 310→365",
          "－ FWS(X86) CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "FWS(X86) 内存 4G(D4) 价格 310→365",
          "－ FWE(X86) CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "FWE(X86) 内存 4G(D4) 价格 310→365",
          "AirMax(x86) 内存 4G(D4) 价格 310→365",
          "－ DSMB02(X86) CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "DSMB02(X86) 内存 4G(D4) 价格 310→365",
          "－ IBOOKHY(X86) CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "IBOOKHY(X86) 内存 4G(D4) 价格 310→365",
          "NANO CPU N2840双网(1*D3/8/MS) 价格 400→440",
          "NANO CPU I7-4500U双网(1*D3/8/MS) 价格 840→880",
          "UNO CPU I5-6300U双网(1*D3/8/M2) 价格 900→980",
          "UNO 内存 4G(D4) 价格 310→365",
          "GW系列 内存 4G(D4) 价格 310→365",
          "－ BPC-101 CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "BPC-101 内存 4G(D4) 价格 310→365",
          "BPC-102 内存 4G(D4) 价格 310→365",
          "－ BPC-103 CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "BPC-103 内存 4G(D4) 价格 310→365",
          "－ GBOOK-GPS(DC系列) CPU 下架：10代i7-1065G7双网(2*D4/32/M2)",
          "GBOOK-GPS(DC系列) 内存 4G(D4) 价格 310→365"
        ]
      },
      {
        "date": 46235,
        "items": [
          "IPRO(x86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "IPRO(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "IPRO-SE(x86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "IPRO-SE(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "VFACE WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "VFACE-H WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "VOPC(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "VOPC(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "FWS(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "FWS(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "FWE(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "＋ FWE(安卓) 新增配置类「WIFI安卓」",
          "－ FWE(安卓) 删除配置类「WIFI 安卓」",
          "AirMax(x86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "DSMB02(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "DSMB02(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "IBOOKHY(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "DMBYH(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "上架式工控机 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "NANO WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "UNO WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "GW系列 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "BPC-101 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "BPC-102 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "BPC-103 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "GBOOK-GPS(DC系列) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "GPS(台式系列) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "IPS系列 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）"
        ]
      },
      {
        "date": 46234,
        "items": [
          "FWS(X86) 其他 4G模块 价格 250→290",
          "FWS(X86) 其他 5G模块（8代及以上） 价格 1400→1000",
          "上架式工控机 内存 「8G(D4)台式机」更名自「8G(D4)」（¥600）",
          "上架式工控机 内存 「16G(D4)台式机」更名自「16G(D4)」（¥1200）",
          "GPS(台式系列) 内存 「8G(D4)台式机」更名自「8G(D4)」（¥600）",
          "GPS(台式系列) 内存 「16G(D4)台式机」更名自「16G(D4)」（¥1200）",
          "IPS系列 内存 「8G(D4)台式机」更名自「8G(D4)」（¥600）",
          "IPS系列 内存 「16G(D4)台式机」更名自「16G(D4)」（¥1200）"
        ]
      },
      {
        "date": "46232",
        "items": [
          "1.GW-100下架I5-10310U双网、I5-10310U四网",
          "2.BPC-103「含主板」改为按CPU配置决定D3/D4、MS/M2",
          "3.BPC-103删除BPC-103(G)尺寸型号"
        ]
      },
      {
        "date": "46230",
        "items": [
          "更正DMBYH(安卓)选择RK3566/2/16价格不变问题"
        ]
      }
    ],
    "secondary": [
      {
        "date": 46270,
        "items": [
          "＋ IPRO(x86) CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ IPRO(x86) CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ VFACE CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ VFACE CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ VOPC(X86) CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ VOPC(X86) CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ FWS(X86) CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ FWS(X86) CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ FWE(X86) CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ FWE(X86) CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ DSMB02(X86) CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ DSMB02(X86) CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ IBOOKHY(X86) CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ IBOOKHY(X86) CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ BPC-101 CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ BPC-101 CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ BPC-103 CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ BPC-103 CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）",
          "＋ GBOOK-GPS(DC系列) CPU 新增：12代i5-1235U四网(2*D4/32/m2/4COM)（¥3100）",
          "＋ GBOOK-GPS(DC系列) CPU 新增：10代I7-1065G7双网(2*d4/32/m2)（¥2360）"
        ]
      },
      {
        "date": 46235,
        "items": [
          "IPRO(x86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "IPRO(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "IPRO-SE(x86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "IPRO-SE(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "VFACE WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "VOPC(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "VOPC(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "FWS(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "FWS(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "FWE(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "FWE(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "DSMB02(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "DSMB02(安卓) WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "IBOOKHY(X86) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "上架式工控机 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "ANBOX WIFI 「WIFI6安卓」更名自「WIFI6 安卓」（¥30）",
          "NANO WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "UNO WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "BPC-101 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "BPC-103 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "GBOOK-GPS(DC系列) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "GPS(台式系列) WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）",
          "IPS系列 WIFI 「WiFi+BT」更名自「Wi-Fi+BT」（¥75）"
        ]
      },
      {
        "date": 46234,
        "items": [
          "IPRO-SE(x86) 固态硬盘 1T(SATA) 价格 1800→1710",
          "FWS(X86) CPU 4代i3-4005U双网(1*D3/8/MS) 价格 690→620",
          "FWS(X86) 其他 4G模块 价格 250→290",
          "FWS(X86) 其他 5G模块（8代及以上） 价格 1400→1000",
          "上架式工控机 内存 「8G(D4)台式机」更名自「8G(D4)」（¥600）",
          "上架式工控机 内存 「16G(D4)台式机」更名自「16G(D4)」（¥1200）",
          "GPS(台式系列) 内存 「8G(D4)台式机」更名自「8G(D4)」（¥600）",
          "GPS(台式系列) 内存 「16G(D4)台式机」更名自「16G(D4)」（¥1200）"
        ]
      },
      {
        "date": "46224",
        "items": [
          "1.DSMB02增加安卓主板报价",
          "2.一体机、BPC-101、BPC-103、GBOOK-GPS(DC系列)J6412处理器改为J6413"
        ]
      },
      {
        "date": "46216",
        "items": [
          "1.BPC-103增加5网口主板配置",
          "2.更新一体机、NANO、UNO、IPRO-ES、安卓主板价格",
          "3.删除DMBYH(安卓)非主推报价"
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
