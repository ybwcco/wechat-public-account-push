/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'push-deer',

  PROVINCE: '山西',
  CITY: '晋中',

  USERS: [
    {
      name: '牛牛',
      id: 'PDU17774TqiGGjdcPuURFpypbdngopcQlR1aGCtyF',
      useTemplateId: '0001',
      horoscopeDate: '04-11',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小胖牛', year: '1997', date: '04-11',
        },
        {
          type: '节日', name: '相爱纪念日', year: '2019', date: '01-26',
        },
        {
          type: '节日', name: '考研日', year: '2022', date: '12-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识的日子
        { keyword: 'know_day', date: '2019-01-23' },
        // 在一起的日子
        { keyword: 'love_day', date: '2019-01-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU17738TXxLv2x21XQSYeBLcE4jlE05Bxr6QSnlE',
    }
  ],

}

module.exports = USER_CONFIG

