<template>
  <div class="EffectivenessRight full">
    <div class="h-1-3">
      <div class="w-1-2 full-height img_box">
        <img src="./compontes/img/c50bc5a6-659e-4a0d-aa07-7f93e61e757b.jpeg" alt/>
      </div>
      <div class="w-1-2 full-height">
        <div class="logbrief">
          <h3>简介</h3>
          <p>{{briefIntroduction}}</p>
        </div>
      </div>
    </div>
    <div class="h-2-3">
      <div class="logisticType">
        <ul class="header">
          <li>
            <img :src="header.imgUrl" alt />
          </li>
          <li>
            <p>{{header.name}}</p>
            <p>{{header.position}}</p>
          </li>
        </ul>
        <div class="border_img"></div>
        <div class="position_box">
          <ul>
            <li v-for="(item, index) in chargeDept" :key="index">
              <img :src="item.url" alt/>
              <p>{{item.name}}</p>
              <div class="fenguan">
                <p>分管</p>
                <div v-for="(ite, index) in chargeDept[index].fenguan" :key="index">{{ite.name}}</div>
              </div>
              <div class="lianxi">
                <p>联系</p>
                <div v-for="(it, index) in chargeDept[index].lianxi" :key="index">{{it.name}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EffectivenessRight',
  data () {
    return {
      briefIntroduction:
        '河北省市场监督管理局是河北省机构改革中新成立的政府直属机构。负责全省市场综合监督管理。起草全省市场监督管理有关地方性法规、政府规章草案，制定有关政策标准，组织实施质量强省战略、食品安全战略、标准化战略、知识产权战略，拟订并组织实施有关规划。规范和维护市场秩序，营造诚实守信、公平竞争的市场环境。指导全省各类企业、农民专业合作社和从事经营活动的单位、个体工商户以及外国（地区）企业常驻代表机构等市场主体的登记注册工作。建立市场主体信息公示和共享机制，依法公示和共享有关信息，加强信用监管，推动市场主体信用体系建设。指导全省市场监督管综合执法队伍整合和建设，推动实行统一的市场监管。',
      header: {
        imgUrl: require('./compontes/img/20181220143641_3iwyjhyl9g.jpg'),
        name: '丁锦霞',
        position: '省市场监督管理局党组书记'
      },
      chargeDept: [
        {
          url: require('./compontes/img/20190507141006_m3wqgkcpbj.jpg'),
          name: '副局长 -- 贝军',
          fenguan: [
            {
              name: '执法稽查局'
            },
            {
              name: '食品安全协调处'
            },
            {
              name: '食品生产安全监督管理处'
            },
            {
              name: '特殊食品安全监督管理处'
            }
          ],
          lianxi: [
            {
              name: '省市场监督管理局'
            }
          ]
        },
        {
          url: require('./compontes/img/20181229170915_jcba9y62ff.jpg'),
          name: '副局长 -- 陈佩鸿',
          fenguan: [
            {
              name: '价格监管检查局'
            },
            {
              name: '反不正当竞争局'
            },
            {
              name: '科技和财务处'
            }
          ],
          lianxi: [
            {
              name: '省市场监督管理局'
            }
          ]
        },
        {
          url: require('./compontes/img/20190507162752_e4id7pf1m7.jpg'),
          name: '副局长 -- 王普增',
          fenguan: [
            {
              name: '办公室（政务公开办）'
            },
            {
              name: '质量发展局'
            },
            {
              name: '标准技术管理处'
            },
            {
              name: '标准创新管理处'
            },
            {
              name: '分管省标准化研究院'
            },
            {
              name: '省质量技术监管局机关服务'
            }
          ],
          lianxi: [
            {
              name: '省市场监督管理局'
            }
          ]
        },
        {
          url: require('./compontes/img/20181213194637_t6yrmqpcqw.jpg'),
          name: '副局长 -- 庞彦须',
          fenguan: [
            {
              name: '法规处'
            },
            {
              name: '登记注册处'
            },
            {
              name: '信用监督管理局'
            },
            {
              name: '省工商行政管理局信息中心'
            },
            {
              name: '省质量技术监督局信息中心'
            }
          ],
          lianxi: [
            {
              name: '省市场监督管理局'
            }
          ]
        },
        {
          url: require('./compontes/img/20181229171451_omdel6s5fs.jpg'),
          name: '副局长 -- 许彦增',
          fenguan: [
            {
              name: '省药品监督管理局全面工作'
            }
          ],
          lianxi: [
            {
              name: '省市场监督管理局'
            }
          ]
        },
        {
          url: require('./compontes/img/20181213194456_t52d5g7kri.jpg'),
          name: '副局长 -- 李基滏',
          fenguan: [
            {
              name: '省市场监督管理局全面工作'
            }
          ],
          lianxi: [
            {
              name: '省市场监督管理局'
            }
          ]
        },
        {
          url: require('./compontes/img/20190507162655_ux8st5ud9x.jpg'),
          name: '巡视员 -- 杨志芳',
          fenguan: [
            {
              name: '综合规划与对外合作处'
            },
            {
              name: '新闻宣传处'
            },
            {
              name: '人事处'
            },
            {
              name: '机关党委'
            }
          ],
          lianxi: [
            {
              name: '省市场监督管理局'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang='less'>
.EffectivenessRight {
  .img_box {
    img {
      width: 97%;
      height: 90%;
      margin-left: 1%;
      margin-top: 5%;
    }
  }
  .logbrief {
    width: 98%;
    height: 90%;
    margin-top: 5%;
    margin-right: 1%;
    float: right;
    p {
      overflow: auto;
    }
    h3 {
      width: 42.28rem;
      height: 4.17rem;
      background: rgba(20, 73, 91, 1);
      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 4.17rem;
      margin: 0 auto;
    }
    p {
      margin-top: 1%;
      width: 100%;
      height: 87%;
      background: url("./compontes/img/mhzhjg_img_jgquanjing_popup_map_style01_bg@2x.png");
      background-size: 100% 100%;
      font-size: 2rem;
      line-height: 3.58rem;
      padding: 2rem;
    }
  }
  .logisticType {
    margin-bottom: 3rem;
    width: 100%;
    height: 12rem;
    margin-top: 1rem;
    .header {
      width: 25%;
      height: 12rem;
      margin: 0 auto;
      li:first-child {
        list-style-type: none;
        float: left;
        img {
          width: 11rem;
          height: 12rem;
        }
      }
      li:last-child {
        float: left;
        list-style-type: none;
        margin-left: 24px;
        p:first-child {
          font-size: 24px;
        }
        p:last-child {
          font-size: 20px;
        }
      }
    }
    .border_img {
      width: 80%;
      height: 2rem;
      margin: 1rem auto;
      background-image: url(./compontes/img/7.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .position_box {
      width: 98%;
      height: 100%;
      margin: 0 auto;
      ul {
        li {
          float: left;
          list-style-type: none;
          width: 14%;
          height: 13rem;
          img {
            margin-left: 24%;
            width: 11rem;
            height: 12rem;
          }
          p {
            margin-top: -0.5%;
            font-size: 20px;
            text-align: center;
          }
          .fenguan,
          .lianxi {
            p {
              font-size: 24px;
            }
            div {
              background: linear-gradient(
                180deg,
                rgba(30, 141, 176, 0) 0%,
                rgba(30, 141, 176, 0.4) 100%
              );
              border: 0.17rem solid rgba(34, 174, 197, 1);
              text-align: center;
              font-size: 15px;
              padding: 2rem 1rem;
              line-height: 10%;
              width: 95%;
              margin: 2% auto;
            }
          }
          .lianxi {
            div {
              background: rgba(254, 105, 65, 0.23);
              border: 0.17rem solid rgba(254, 105, 65, 1);
            }
          }
        }
      }
    }
  }
}
</style>
