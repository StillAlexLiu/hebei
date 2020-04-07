<template>
  <div class="Page5">
    <div class="randomCont">
      <div class="randomContTitle">
        2019年 本局双随机任务计划执行情况
        <span>计划总数：{{plan.planTotalNum}}</span>
        <span>主体数：{{plan.planEntityNum}}户</span>
        <span>执法干部数：{{plan.planUserNum}}</span>
      </div>
      <div class="randomContTable">
        <ul class="tableHeader">
          <li class="tableLi">任务名称</li>
          <li class="tableLi">牵头部门</li>
          <li class="tableLi">任务派发时间</li>
          <li class="tableLi">要求完成时间</li>
          <li class="tableLi">随机比例</li>
          <li class="tableLi">随机企业数</li>
          <li class="tableLi">执法干部数</li>
          <li class="tableLi">完成情况</li>
          <li class="tableLi">状态</li>
        </ul>
        <ul class="tableConten">
          <li
            v-for="(item,index) in planTableData"
            :key="index"
            :class="[item.status==='正常' ?'noraml':'error',{'active':item.show}]"
            @click="getDetail(item,index)"
          >
            <div class="tableLi" :class="{'more':item.patrolName.length>12}">{{item.patrolName}}</div>
            <div class="tableLi">{{item.deptName}}</div>
            <div class="tableLi">{{item.createTime}}</div>
            <div class="tableLi">{{item.beFinishTime}}</div>
            <div class="tableLi">{{item.randomRatio}}</div>
            <div class="tableLi">{{item.entityCount}}户</div>
            <div class="tableLi">{{item.userCount}}人</div>
            <div class="tableLi">
              <p>{{item.finishRate}}%</p>
              <div
                :percentage="item.finishRate"
                :color="item.status==='正常' ?'#ADF573':'#f99a33'"
                :show-text="false"
              ></div>
            </div>
            <div class="tableLi">{{item.status}}</div>
          </li>
        </ul>
      </div>
      <div class="randomContTitle">2019年 本局双随机任务检查结果情况</div>
      <div class="randomContBottom">
        <div class="randomContBottomLeft">
          <ul>
            <li v-for="(item,index) in examineResult" :key="index">
              <span>{{item.name}}</span>
              <span>
                {{item.value}}
                <i>个</i>
              </span>
            </li>
          </ul>
        </div>
        <div class="randomContBottomRight">
          <ul class="bottomRightHeader">
            <li class="headerLi">任务名称</li>
            <li class="headerLi">企业名称</li>
            <li class="headerLi">检查结果</li>
            <li class="headerLi">检查人员</li>
            <li class="headerLi">检查时间</li>
            <li class="headerLi">检查详情</li>
          </ul>
          <div id="taskResList">
            <ul class="bottomRightTable" id="taskResListDetail">
              <li v-for="(item,index) in taskDetailList" :key="index">
                <div class="headerLi">
                  <div class="detail">{{item.patrol_name}}</div>
                </div>
                <div class="headerLi">
                  <div class="detail">{{item.enty_name}}</div>
                </div>
                <div class="headerLi">
                  <div class="detail">{{item.patrol_result}}</div>
                </div>
                <div class="headerLi">
                  <div class="detail">{{item.patrolUserName}}</div>
                </div>
                <div class="headerLi">
                  <div class="detail">{{item.patrol_time}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page5',
  data () {
    return {
      plan: {
        planTotalNum: 28,
        planEntityNum: 273,
        planUserNum: 396
      },
      planTableData: [
        {
          deptName: '廊坊市',
          finishRate: 100,
          beFinishTime: '2019-12-15 11:59:58',
          entityCount: 3,
          userCount: 6,
          randomRatio: '100%',
          createTime: '2019-12-09 15:28:56',
          patrolName: '特殊食品与普通食品或药品混放销售违法行为专项检查',
          randomType: '所内随机',
          patrolId: 'SSJ201912090007',
          status: '正常'
        },
        {
          deptName: '市场规范监管科',
          finishRate: 100,
          beFinishTime: '2019-11-16 11:59:58',
          entityCount: 7,
          userCount: 14,
          randomRatio: '12%',
          createTime: '2019-10-31 16:23:08',
          patrolName: '农贸市场（北片区）第三次双随机抽查任务',
          randomType: '交叉随机',
          patrolId: 'SSJ201910310017',
          status: '正常'
        },
        {
          deptName: '市场规范监管科',
          finishRate: 100,
          beFinishTime: '2019-11-16 11:59:58',
          entityCount: 7,
          userCount: 14,
          randomRatio: '16%',
          createTime: '2019-10-31 16:13:09',
          patrolName: '农贸市场（南片区）第三次双随机抽查任务',
          randomType: '交叉随机',
          patrolId: 'SSJ201910310013',
          status: '正常'
        },
        {
          deptName: '廊坊市',
          finishRate: 100,
          beFinishTime: '2019-11-01 11:59:58',
          entityCount: 5,
          userCount: 4,
          randomRatio: '100%',
          createTime: '2019-10-28 14:48:07',
          patrolName: '明厨亮灶专项检查',
          randomType: '所内随机',
          patrolId: 'SSJ201910280008',
          status: '正常'
        },
        {
          deptName: '廊坊市',
          finishRate: 100,
          beFinishTime: '2019-11-16 11:59:58',
          entityCount: 9,
          userCount: 16,
          randomRatio: '11%',
          createTime: '2019-09-19 12:04:53',
          patrolName: '2019年下半年转供电环节收费检查',
          randomType: '所内随机',
          patrolId: 'SSJ201909190004',
          status: '正常'
        },
        {
          deptName: '廊坊市',
          finishRate: 100,
          beFinishTime: '2019-11-16 11:59:58',
          entityCount: 16,
          userCount: 31,
          randomRatio: '5%',
          createTime: '2019-09-17 09:38:19',
          patrolName: '药品价格双随机检查',
          randomType: '所内随机',
          patrolId: 'SSJ201909170004',
          status: '正常'
        },
        {
          deptName: '食品经营安全监管科',
          finishRate: 100,
          beFinishTime: '2019-09-07 11:59:58',
          entityCount: 23,
          userCount: 40,
          randomRatio: '5%',
          createTime: '2019-08-23 10:42:27',
          patrolName: '区局关于开展生猪产品市场双随机检查的通知',
          randomType: '所内随机',
          patrolId: 'SSJ201908230012',
          status: '超期'
        },
        {
          deptName: '食品生产安全监管科',
          finishRate: 100,
          beFinishTime: '2019-09-30 23:59:59',
          entityCount: 6,
          userCount: 8,
          randomRatio: '100%',
          createTime: '2019-07-24 16:21:28',
          patrolName:
            '河北省市场监督管理局关于开展2019年桶装饮用水生产企业双随机专项检查工作的通知',
          randomType: '所内随机',
          patrolId: 'SSJ201907240036',
          status: '正常'
        },
        {
          deptName: '食品经营安全监管科',
          finishRate: 100,
          beFinishTime: '2019-08-02 23:59:59',
          entityCount: 63,
          userCount: 28,
          randomRatio: '100%',
          createTime: '2019-07-11 14:31:59',
          patrolName: '2019年养老机构食品安全双随机检查',
          randomType: '所内随机',
          patrolId: 'SSJ201907110005',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-11-26 00:00:00',
          entityCount: 1,
          userCount: 2,
          createTime: '2019-07-01 00:00:00',
          randomRatio: '5%',
          patrolName: '2019年河北省市场监管局商品条码有效性监督检查',
          patrolId: '4ea80f5ecac544faadf2a55d8a225a51',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-07-31 00:00:00',
          entityCount: 1,
          userCount: 2,
          createTime: '2019-07-01 00:00:00',
          randomRatio: '100%',
          patrolName: '2019年河北省市场监管局直销行为检查',
          patrolId: '67c4d0ff2af94997b9244c3f2b0d1d60',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-07-31 00:00:00',
          entityCount: 11,
          userCount: 19,
          createTime: '2019-07-01 00:00:00',
          randomRatio: '100%',
          patrolName: '2019年河北省市场监管局企业商标使用行为的检查',
          patrolId: 'e4a61b7053dd4126a882d9cca2f59501',
          status: '正常'
        },
        {
          deptName: '廊坊市',
          finishRate: 100,
          beFinishTime: '2019-06-30 23:59:59',
          entityCount: 5,
          userCount: 10,
          randomRatio: '10%',
          createTime: '2019-05-31 16:12:49',
          patrolName: '网络平台企业专项检查',
          randomType: '全员随机',
          patrolId: 'SSJ201905310061',
          status: '正常'
        },
        {
          deptName: '医疗器械科',
          finishRate: 100,
          beFinishTime: '2019-06-10 23:59:59',
          entityCount: 14,
          userCount: 28,
          randomRatio: '20%',
          createTime: '2019-05-28 09:56:56',
          patrolName: '体外诊断试剂批发企业双随机专项',
          randomType: '局部随机',
          patrolId: 'SSJ201905280016',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-08-31 00:00:00',
          entityCount: 4,
          userCount: 9,
          createTime: '2019-05-20 00:00:00',
          randomRatio: '20%',
          patrolName: '2019年河北省市场监管局注册资本实缴制企业定向抽查',
          patrolId: '2b162c1e7599436ebe9856e3e0444252',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-11-30 00:00:00',
          entityCount: 35,
          userCount: 10,
          createTime: '2019-05-01 00:00:00',
          randomRatio: '5%',
          patrolName: '2019年河北省市场监管局婴幼儿配方食品销售监督检查',
          patrolId: 'e724c8d24d8c45a6a093d32f9523ebb0',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-11-30 00:00:00',
          entityCount: 15,
          userCount: 8,
          createTime: '2019-05-01 00:00:00',
          randomRatio: '5%',
          patrolName: '2019年河北省市场监管局保健食品销售监督检查',
          patrolId: '72662a3acf6e4959a09095f7b38eeaa8',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-06-14 00:00:00',
          entityCount: 26,
          userCount: 45,
          createTime: '2019-04-24 00:00:00',
          randomRatio: '30%',
          patrolName:
            '2019年河北省市场监管局为非法交易野生动物制品等违法行为提供交易服务随机抽查',
          patrolId: '3ec51711e85a49469b62b13282c9a763',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 3,
          userCount: 4,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            ' 2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（C级中等和高风险） （5）',
          patrolId: '0c985375f6dc431f9cae675556cee026',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 1,
          userCount: 2,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            '2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（B级中等和高风险、C级低风险）（4）',
          patrolId: '327424557c604795aa998d61c03e3658',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 2,
          userCount: 4,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            '2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（C级中等和高风险）',
          patrolId: '3af18adaad1a4a11b2bd158d2a10bd40',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 4,
          userCount: 8,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            '2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（B级中等和高风险、C级低风险）（2）',
          patrolId: 'f16f9ded9c724a3da195e79783fe9de4',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 1,
          userCount: 2,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            '2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（B级中等和高风险、C级低风险）',
          patrolId: 'feda9551f4be47108658a92a34b95961',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 2,
          userCount: 4,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            ' 2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（C级中等和高风险） （3）',
          patrolId: '75afb6b96e0647e19661c83455e28955',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 3,
          userCount: 4,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            ' 2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（C级中等和高风险） （2）',
          patrolId: '75f6a45ea12c443f80ae4dad3302f660',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 2,
          userCount: 4,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            ' 2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（C级中等和高风险） （4）',
          patrolId: '7d72e5bd7d4145a0a548151948b845da',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 2,
          userCount: 4,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            '2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（B级中等和高风险、C级低风险）（3）',
          patrolId: '9e8e5c9e623f4bc1905f15e647b7761e',
          status: '正常'
        },
        {
          deptName: '河北省市场监管局',
          finishRate: 100,
          beFinishTime: '2019-12-31 00:00:00',
          entityCount: 2,
          userCount: 4,
          createTime: '2019-01-01 00:00:00',
          randomRatio: '100%',
          patrolName:
            ' 2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（C级中等和高风险） （6）',
          patrolId: 'dfed5ce01bb74cdf9a82897b3c2e15ec',
          status: '正常'
        }
      ],
      examineResult: [
        { name: '其他', value: '0', percent: '' },
        { name: '未发现违法违规情况', value: '0', percent: '' },
        { name: '责令改正', value: '13', percent: '' },
        { name: '发现问题情况', value: '250', percent: '' },
        { name: '立案处理', value: '10', percent: '' }
      ],
      taskDetailList: [
        {
          enty_name: '河北梅莲农贸市场经营管理有限公司',
          patrol_result: '结果告知',
          file_path: '',
          patrolUserName: '孙颖,汤源龙,马增艳',
          resultId: 'f227e5eb-35fd-4dc0-8f72-cec75ca8a2ee',
          patrol_name: '农贸市场（北片区）第三次双随机抽查任务',
          patrol_time: '2019-11-13'
        },
        {
          enty_name: '河北永通市场经营管理有限公司',
          patrol_result: '结果告知',
          file_path: '',
          patrolUserName: '王玮,孙军杰,龚霄雯',
          resultId: '9bf71b2a-998e-4de3-81d6-b45a71760874',
          patrol_name: '农贸市场（南片区）第三次双随机抽查任务',
          patrol_time: '2019-11-11'
        },
        {
          enty_name: '河北淳纯饮用水厂',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/03/9be8849a-3392-48d6-81ed-8f8b46a982b4.png',
          patrolUserName: '连斌,程容懿',
          resultId: '350e92d8-2a68-4cf4-b0d7-5656151ee266',
          patrol_name:
            '廊坊市市场监督管理局关于开展2019年桶装饮用水生产企业双随机专项检查工作的通知',
          patrol_time: '2019-09-03'
        },
        {
          enty_name: '河北省廊坊市绪根杂货店',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '许志铭,周玉敏',
          resultId: '117681f2-e950-449c-b9a3-dd3b327d744b',
          patrol_name: '区局关于开展生猪产品市场双随机检查的通知',
          patrol_time: '2019-08-30'
        },
        {
          enty_name: '河北廊坊市江川路街道碧江敬老院（食堂）',
          patrol_result: '无法联系',
          file_path:
            '/screenBookQrcode/2019/09/18/cb353926-8346-468a-8110-60aaad30b8df.png',
          patrolUserName: '张茂全,俞荣良',
          resultId: 'b1f06b5f-82bd-48c2-8a8f-cbc7d51f6cd0',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-08-02'
        },
        {
          enty_name: '河北喜满楼敬老院（食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/252b2cb0-9ab8-4246-b065-2a12f4674211.png',
          patrolUserName: '袁彦庭,张天虹',
          resultId: 'ba4340f4-41ad-4152-a80e-14ea10ed281b',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-26'
        },
        {
          enty_name: '河北廊坊市七宝镇吾亦红为老服务中心',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/116bc19a-971b-4324-9551-e00a6330e792.png',
          patrolUserName: '黄佛顿,许雪莲',
          resultId: '040b2059-aa6d-46bf-a99d-dabf85503096',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-26'
        },
        {
          enty_name:
            '河北廊坊市七宝镇万科城市花园社区智汇坊长者照护之家（食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/b6f8d52b-0b14-4707-bc5c-f1e7f9c7f3f6.png',
          patrolUserName: '黄佛顿,刘林',
          resultId: '66cfb4d0-da1a-440c-9057-f2905beeae4a',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-25'
        },
        {
          enty_name: '河北廊坊市七宝敬老院（食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/fd575e3e-860b-4787-b77d-f7b9b1d6388b.png',
          patrolUserName: '黄佛顿,许雪莲',
          resultId: '6335cbf6-a39d-4cf3-8ee1-7f5f2c047459',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-25'
        },
        {
          enty_name: '河北廊坊市中谊福利院（食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/7426705a-e292-4778-9d8b-7be1315fed40.png',
          patrolUserName: '黄佛顿,刘林',
          resultId: 'aca8ca87-87c2-4f23-be0e-746763d6aa40',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-25'
        },
        {
          enty_name: '河北省长宁区第二社会福利院（食堂）',
          patrol_result: '无法联系',
          file_path:
            '/screenBookQrcode/2019/09/18/26cb663c-f0d6-4d5d-8154-fdd97fac1143.png',
          patrolUserName: '彭普军,唐卢屹',
          resultId: '4aeabb13-514e-412e-b4a8-bbef4ac24aac',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-23'
        },
        {
          enty_name: '河北廊坊市七宝社区华爱长者照护之家（食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/2e535294-548a-4115-9336-afa3dab025c1.png',
          patrolUserName: '黄佛顿,许雪莲',
          resultId: '983357b2-f8ec-412c-81e2-78231cf3006a',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-23'
        },
        {
          enty_name: '河北廊坊市平阳敬老院（食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/239f69be-ec55-41f9-83a7-63912fe8c6f8.png',
          patrolUserName: '孙颖,詹愉乐',
          resultId: '1d7cfe87-aca5-44c9-94f4-91fb90fdf554',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-18'
        },
        {
          enty_name: '河北廊坊市古美敬老院(食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/46f03bc5-bca3-47ac-8c40-7f963be5d3e6.png',
          patrolUserName: '孙颖,詹愉乐',
          resultId: 'de3c3c93-18d5-43ef-a1a7-51d594362c9a',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-18'
        },
        {
          enty_name: '河北廊坊市江川路街道华坪敬老院（食堂）',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/877a7501-ac9c-445d-9672-496aedc44b5e.png',
          patrolUserName: '张茂全,俞荣良',
          resultId: 'dc31ca0e-a463-4229-aae3-4c4e87fb7eeb',
          patrol_name: '2019年养老机构食品安全双随机检查',
          patrol_time: '2019-07-17'
        },
        {
          enty_name: '河北尧浩生物技术有限公司',
          patrol_result: '结果告知',
          file_path:
            '/screenBookQrcode/2019/09/18/d86e9f86-a938-491a-8dd5-077afb70bf96.png',
          patrolUserName: '何学文,詹愉乐',
          resultId: 'b7f0016f-d07e-4edb-a307-98e2f2f0134e',
          patrol_name: '体外诊断试剂批发企业双随机专项',
          patrol_time: '2019-06-06'
        },
        {
          enty_name: '河北璞圆酒业有限公司',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '武春明,朱慰凤',
          resultId: '8DB36E87DBDB20E8E053A4151AAC60BE',
          patrol_name: '2019年河北省市场监管局商品条码有效性监督检查',
          patrol_time: '2019-07-25 00:00:00'
        },
        {
          enty_name: '河北建全商贸有限公司第四分公司',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '徐佳,朱慰凤',
          resultId: '8B190AFF9281FB1BE053A1151AAC3429',
          patrol_name: '2019年河北省市场监管局婴幼儿配方食品销售监督检查',
          patrol_time: '2019-07-17 00:00:00'
        },
        {
          enty_name: '河北益丰上虹大药房有限公司浦江店',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '连斌,谈伟波',
          resultId: '8B18FF03E622121AE053A1151AAC3095',
          patrol_name: '2019年河北省市场监管局保健食品销售监督检查',
          patrol_time: '2019-07-15 00:00:00'
        },
        {
          enty_name: '河北省廊坊市同平便利店',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '徐佳,朱慰凤',
          resultId: '8B190AFFBA11FB1BE053A1151AAC3429',
          patrol_name: '2019年河北省市场监管局婴幼儿配方食品销售监督检查',
          patrol_time: '2019-07-10 00:00:00'
        },
        {
          enty_name: '河北东兰综合市场经营管理有限公司',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '叶旎娜,王喆',
          resultId: '879046C80D5E1D9AE053A1151AACF735',
          patrol_name:
            '2019年河北省市场监管局为非法交易野生动物制品等违法行为提供交易服务随机抽查',
          patrol_time: '2019-06-12 00:00:00'
        },
        {
          enty_name: '河北宁谷农贸市场经营管理有限公司',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '王猛强,黎青',
          resultId: '879046C80CEC1D9AE053A1151AACF735',
          patrol_name:
            '2019年河北省市场监管局为非法交易野生动物制品等违法行为提供交易服务随机抽查',
          patrol_time: '2019-05-30 00:00:00'
        },
        {
          enty_name: '河北风都食品有限公司',
          patrol_result: '无法联系',
          file_path: '',
          patrolUserName: '张伟,程容懿',
          resultId: '8C00DEB12E8A078AE053A4151AACD130',
          patrol_name:
            '2019年河北省市场监管局食品生产（含食品生产加工小作坊）监督检查（C级中等和高风险） （5）',
          patrol_time: '2019-01-31 00:00:00'
        }
      ]
    }
  }
}
</script>

<style scoped lang='less'>
.Page5 {
  li {
    list-style-type: none;
  }
  .randomTitle {
    font-size: 2.67rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 4rem;
    width: 38rem;
    height: 4rem;
    background: url(../compontes/img/randomTitleBg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    margin: 1rem 0 1rem;
  }
  .randomCont {
    width: 100%;
    height: 119rem;
    padding: 2rem;
    box-sizing: border-box;
    background: rgba(34, 174, 197, 0.05);
    border: 0.17rem solid rgba(30, 141, 176, 1);
    .randomContTitle {
      width: 100%;
      height: 8rem;
      background: url(../compontes/img/mhzhjg_img_jgquanjing_jinritixing_bg@2x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 3rem;
      font-size: 3rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 8rem;
      padding-left: 4rem;
      p {
        width: 130rem;
        float: left;
        overflow: hidden;
        height: 8rem;
        cursor: pointer;
      }
      i {
        height: 8rem;
        width: 6rem;
        float: right;
        cursor: pointer;
        line-height: 8rem;
        font-size: 4rem;
      }
      span {
        padding-right: 3rem;
        &:first-child {
          padding-left: 10rem;
        }
      }
    }
    .randomContTable {
      width: 100%;
      height: 51rem;
      background: rgba(0, 35, 46, 1);
      border: 0.08rem solid rgba(30, 141, 176, 1);
      margin-bottom: 3rem;
      .tableLi {
        float: left;
        height: 9rem;
        width: 8.5%;
        text-align: center;
        box-sizing: border-box;
        &:nth-child(1) {
          width: 17%;
        }
        &:nth-child(2) {
          width: 14%;
        }
        &:nth-child(3),
        &:nth-child(4) {
          width: 12%;
        }
        &:nth-child(7) {
          width: 10%;
        }
        &:nth-child(8) {
          width: 12%;
        }
        &:last-child {
          width: 6%;
        }
      }
      .tableHeader {
        width: 100%;
        height: 6rem;
        background: rgba(18, 71, 94, 1);
        // opacity: 0.7564;
        font-size: 2.33rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 6rem;
        overflow: hidden;
        li {
          height: 6rem;
        }
      }
      .tableConten {
        height: 39rem;
        width: 100%;
        overflow: auto;
        li {
          overflow: hidden;
          border-bottom: 0.17rem solid #090f1a;
          &:hover {
            background: rgba(30, 141, 176, 0.2);
          }
          &.active {
            background: rgba(30, 141, 176, 0.2);
          }
          .tableLi {
            font-size: 1.8rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 9rem;
            padding: 0 5px;
            box-sizing: border-box;
            overflow: hidden;
            &:nth-child(8) {
              line-height: normal;
              p {
                margin-bottom: 0;
                line-height: 5rem;
                color: #adf573;
                .el-progress-bar__outer {
                  height: 1rem !important;
                }
              }
            }
            &:nth-child(3),
            &:nth-child(4) {
              line-height: 3.6rem;
              padding-top: 1.3rem;
            }
            &.more {
              line-height: 3.6rem;
              padding-top: 1.3rem;
            }
          }
          &.error {
            .tableLi {
              // color: #ff0200;
              color: #f99a33;
              &:nth-child(8) {
                line-height: normal;
                p {
                  // color: #ff0200;
                  color: #f99a33;
                }
              }
              &:nth-child(3),
              &:nth-child(4) {
                line-height: 3rem;
                padding-top: 1.3rem;
              }
            }
          }
        }
      }
    }
    .randomContBottom {
      width: 100%;
      overflow: hidden;
      position: relative;
      .randomContBottomLeft {
        width: 42rem;
        margin-right: 4rem;
        float: left;
        li {
          width: 42rem;
          height: 7rem;
          background: url(../compontes/img/mhzhjg_items_zhinengyujing_card_yujingshuliang@2x.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-bottom: 1rem;
          line-height: 7rem;
          cursor: pointer;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            width: 20.5rem;
            display: inline-block;
            text-align: center;
            height: 7rem;
            vertical-align: middle;
            &:first-child {
              font-size: 2rem;
              font-weight: 500;
              // color: rgba(0, 154, 52, 1);
              color: #fff;
            }
            &:last-child {
              font-size: 5rem;
              color: rgba(255, 255, 255, 1);
              i {
                font-weight: normal;
                font-size: 2.67rem;
                font-style: normal;
                padding-left: 1rem;
              }
            }
          }
          &.active {
            span {
              color: #f99a33;
            }
          }
        }
      }
      .randomContBottomRight {
        float: right;
        width: calc(100% - 46rem);
        height: 39rem;
        background: rgba(0, 35, 46, 1);
        padding: 1px 0 0 1px;
        box-sizing: border-box;
        border: 0.08rem solid rgba(30, 141, 176, 1);
        .headerLi {
          float: left;
          width: 13rem;
          text-align: center;
          position: relative;
          &:first-child {
            width: 23rem;
          }
          &:nth-child(2) {
            width: 20rem;
          }
        }
        .bottomRightHeader {
          height: 5rem;
          line-height: 5rem;
          font-size: 2.33rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          padding: 0;
          overflow: hidden;
          background: #12475e;
        }
        #taskResList {
          height: 28rem;
          overflow: auto;
        }
        .bottomRightTable {
          li {
            border-bottom: 0.17rem solid #090f1a;
            line-height: 11rem;
            overflow: hidden;
            color: #fff;
            font-size: 2rem;
            text-align: center;
            position: relative;
            padding: 1rem 0 0.5rem;
            box-sizing: border-box;
            &:hover {
              background: rgba(30, 141, 176, 0.2);
            }
            .headerLi {
              height: 11rem;
              .detail {
                padding-right: 5px;

                img {
                  height: 10rem;
                }
              }
              &:first-child,
              &:nth-child(2),
              &:nth-child(4) {
                .detail {
                  line-height: 3rem;
                  position: absolute;
                  top: 50%;
                  left: 0;
                  transform: translateY(-50%);
                  width: 100%;
                }
              }
              &:first-child {
                .detail {
                  padding-left: 5px;
                }
              }
            }
          }
        }
      }
      .randomContBottomDetail {
        position: relative;
        height: 39rem;
        width: 100%;
        background: rgba(0, 35, 46, 1);
        border-radius: 0.67rem;
        border: 0.08rem solid rgba(30, 141, 176, 1);
        .detailLi {
          overflow: hidden;
          // height: 5rem;
          padding-left: 1rem;
          padding-top: 0.75rem;
          height: 4.75rem;
          .detailSpan {
            font-size: 2rem;
            width: 14rem;
            display: block;
            text-align: justify;
            line-height: 3.5rem;
            margin-top: 0.5rem;
            margin-left: 0.4rem;
            &::after {
              content: " ";
              display: inline-block;
              width: 100%;
            }
          }
          .detailLabel {
            float: right;
            width: calc(100% - 16rem);
            font-size: 2.1rem;
            color: #fff;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 0.33rem;
            height: 4rem;
            border: 0.08rem solid rgba(102, 102, 102, 1);
            padding-left: 1rem;
            padding-right: 1rem;
            line-height: 4rem;
          }
        }
        .randomContBottomLeft {
          width: 48rem;
          float: left;
          height: 100%;
          margin-right: 0;
        }
        .randomContBottomRight {
          float: right;
          width: calc(100% - 50rem);
          height: 100%;
          border: none;
          background: none;
          padding-right: 1rem;
          .detailLi {
            &:nth-child(3),
            &:nth-child(4) {
              min-height: 11.5rem;
              height: auto;
              .detailLabel {
                height: auto;
                min-height: 10.5rem;
                line-height: 3rem;
              }
            }
          }
          .elevorHeader {
            font-size: 2.5rem;
            background: rgba(0, 0, 0, 0.3);
            padding: 0.8rem 1rem;
            text-align: center;
          }
          .randomFirstScroll {
            height: 33rem;
            overflow: auto;
          }
        }
      }
    }
  }
}
</style>
