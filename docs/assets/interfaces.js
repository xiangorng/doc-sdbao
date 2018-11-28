// 具体接口数据

// 表格展示字段
const columns = (() => {
  const key = { title: '字段', key: 'key', indent: true }
  const name = { title: '名称', key: 'name' }
  const type = { title: '类型', key: 'type' }
  const isReq = { title: '必传', key: 'isReq' }
  const desc = { title: '备注', key: 'desc' }

  return {
    key,
    name,
    type,
    isReq,
    desc,
    interface: [key, name, type, isReq, desc]
  }
})()

const defaults_key = {
  supplierNo: {
    key: 'supplierNo',
    name: '合作商编号',
    type: 'String',
    isReq: 'Y',
    desc: '水滴公司分配给合作商的标识码'
  },
  code: {
    key: 'code',
    name: '本次请求执行的状态',
    type: 'Int',
    isReq: 'Y',
    desc: '成功：0；失败：1（失败时errorMsg和errorCode必传）'
  },
  errorCode: {
    key: 'errorCode',
    name: '错误编码',
    type: 'String',
    isReq: 'Y',
    desc: '保险公司内部的错误编码，方便排查问题'
  },
  errorMsg: {
    key: 'errorMsg',
    name: '状态的描述',
    type: 'String',
    isReq: '',
    desc: ''
  },
  orderNo: {
    key: 'orderNo',
    name: '水滴订单号',
    type: 'String',
    isReq: '',
    desc: ''
  },
  supplierProductNo: {
    key: 'supplierProductNo',
    name: '合作商产品编号',
    type: 'String',
    isReq: '',
    desc: ''
  },
  applyNum: {
    key: 'applyNum',
    name: '投保份数',
    type: 'Int',
    isReq: '',
    desc: ''
  },
  premium: {
    key: 'premium',
    name: '保费',
    type: 'Int',
    isReq: '',
    desc: ''
  },
  applyNum: {
    key: 'applyNum',
    name: '投保份数',
    type: 'Int',
    isReq: '',
    desc: ''
  },
  proposalNo: {
    key: 'proposalNo',
    name: '投保单号',
    type: 'String',
    isReq: 'Y',
    desc: ''
  },
  proposalNo: {
    key: 'proposalNo',
    name: '投保单号',
    type: 'String',
    isReq: '',
    desc: ''
  },
  proposalTime: {
    key: 'proposalTime',
    name: '核保时间',
    type: 'String',
    isReq: '',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  amont: {
    key: 'amount',
    name: '保额',
    type: 'Long',
    isReq: '',
    desc: ''
  },
  totalPremium: {
    key: 'totalPremium',
    name: '总保费',
    type: 'Long',
    isReq: '',
    desc: ''
  },
  totalAmount: {
    key: 'totalAmount',
    name: '总保额',
    type: 'Long',
    isReq: '',
    desc: ''
  },
  periodFrequency: {
    key: 'periodFrequency',
    name: '交费频次',
    type: 'Int',
    isReq: '',
    desc: '0：趸交；1：月缴；2：季度缴；3：半年缴；4：年缴；'
  },
  periodType: {
    key: 'periodType',
    name: '续费类型',
    type: 'Int',
    isReq: '',
    desc: '1.一次付清；2.分次交费'
  },
  totalPeriod: {
    key: 'totalAmount',
    name: '总交费期数',
    type: 'Int',
    isReq: '',
    desc:
      '总的交费期数（举例，一月交一次，交一年：periodFrequency=1，totalPeriod=12）'
  },
  issueTime: {
    key: 'issueTime',
    name: '投保时间',
    type: 'String',
    isReq: '',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  relType: {
    key: 'relType',
    name: '和投保人关系',
    type: 'Int',
    isReq: '',
    desc: '1：本人 2：配偶 3：父母 4：子女 0：其他'
  },
  hasSocial: {
    key: 'hasSocial',
    name: '是否参加社保',
    type: 'Boolean',
    isReq: '',
    desc: ''
  },
  effectTime: {
    key: 'effectTime',
    name: '保单生效时间',
    type: 'String',
    isReq: '',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  invalidTime: {
    key: 'invalidTime',
    name: '保单失效时间',
    type: 'String',
    isReq: '',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  payTime: {
    key: 'payTime',
    name: '电子保单Url',
    type: 'String',
    isReq: '',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  refundReqTime: {
    key: 'refundReqTime',
    name: '退保请求时间',
    type: 'String',
    isReq: '',
    desc: '本次退保，水滴公司第一次发起请求的时间'
  },
  refundEffectTime: {
    key: 'refundEffectTime',
    name: '退保生效时间',
    type: 'String',
    isReq: '',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  refundTime: {
    key: 'refundTime',
    name: '保险公司操作的退保时间',
    type: 'String',
    isReq: '',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  refundType: {
    key: 'refundType',
    name: '退保类型',
    type: 'Int',
    isReq: '',
    desc: '0：有效期内用户发起退保；1：分期产品，超过宽限期未续费自动退保'
  },
  policyUrl: {
    key: 'policyUrl',
    name: '电子保单Url',
    type: 'String',
    isReq: 'N',
    desc: ''
  },
  policyNo: {
    key: 'policyNo',
    name: '保险公司承保订单号',
    type: 'String',
    isReq: '',
    desc: ''
  },
  policyTime: {
    key: 'policyTime',
    name: '保险公司出单时间',
    type: 'String',
    isReq: 'N',
    desc: ''
  },
  refundPremium: {
    key: 'refundPremium',
    name: '应退保费',
    type: 'Long',
    isReq: 'N',
    desc: '由水滴保线上操作退款时必传'
  },
  refundMoney: {
    key: 'refundMoney',
    name: '应退金额',
    type: 'Long',
    isReq: '',
    desc: ''
  },
  payPremiun: {
    key: 'payPremiun',
    name: '本次支付保费',
    type: 'Long',
    isReq: '',
    desc: ''
  },
  periodNum: {
    key: 'periodNum',
    name: '本次期数',
    type: 'Int',
    isReq: '',
    desc: ''
  },
  UserInfo: [
    {
      key: 'name',
      name: '姓名',
      type: 'String',
      isReq: '',
      desc: ''
    },
    {
      key: 'idType',
      name: '证件类型',
      type: 'Int',
      isReq: '',
      desc: '见附录'
    },
    {
      key: 'idCode',
      name: '证件号码',
      type: 'String',
      isReq: '',
      desc: ''
    },
    {
      key: 'gender',
      name: '性别',
      type: 'Int',
      isReq: 'N',
      desc: '1男2女0未说明'
    },
    {
      key: 'birthday',
      name: '出生日期',
      type: 'String',
      isReq: 'N',
      desc: 'yyyy-MM-dd'
    },
    {
      key: 'mobile',
      name: '手机号',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'mail',
      name: '邮箱',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'bankCode',
      name: '银行编码',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'bankNo',
      name: '银行卡号',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'province',
      name: '省',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'city',
      name: '市',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'district',
      name: '区',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'address',
      name: '详细地址',
      type: 'String',
      isReq: 'N',
      desc: ''
    }
  ]
}

const interfaces = {
  核保请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求主体',
      type: 'ProposalOrderRequestBody',
      isReq: '',
      desc: '',
      children: [
        {
          key: 'orderInfo',
          name: '订单信息',
          type: 'OrderInfo',
          isReq: '',
          desc: '',
          children: [
            defaults_key.orderNo,
            {
              key: 'orderMains',
              name: '',
              type: 'List<OrderMain>',
              isReq: '',
              desc: '一般size为1',
              children: [
                defaults_key.supplierProductNo,
                defaults_key.applyNum,
                defaults_key.premium,
                defaults_key.amont
              ]
            },
            defaults_key.issueTime,
            defaults_key.effectTime,
            defaults_key.invalidTime,
            defaults_key.totalPremium,
            defaults_key.totalAmount,
            defaults_key.periodFrequency,
            defaults_key.totalPeriod
          ]
        },
        {
          key: 'applyUser',
          name: '投保人信息',
          type: 'UserInfo',
          isReq: '',
          desc: '',
          children: defaults_key.UserInfo
        },
        {
          key: 'insuredUsers',
          name: '被保人信息',
          type: 'List<UserInfo>',
          isReq: 'N',
          desc: '',
          children: defaults_key.UserInfo.concat([
            defaults_key.relType,
            defaults_key.hasSocial
          ])
        }
      ]
    }
  ],
  核保返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'ProposalOrderResultBody',
      isReq: 'N',
      desc: '成功时必传',
      children: [
        defaults_key.orderNo,
        defaults_key.totalPremium,
        defaults_key.proposalNo,
        defaults_key.proposalTime
      ]
    }
  ],
  承保请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'PolicyOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        {
          key: 'orderNo',
          name: '水滴订单号',
          type: 'String',
          isReq: '',
          desc: ''
        },
        defaults_key.proposalNo,
        defaults_key.payTime
      ]
    }
  ],
  承保返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'PolicyOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.policyTime,
        defaults_key.policyUrl
      ]
    }
  ],
  退保请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RefundOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.proposalNo,
        defaults_key.refundReqTime,
        defaults_key.refundEffectTime,
        defaults_key.refundType,
        {
          key: 'reson',
          name: '退保原因',
          type: 'String',
          isReq: '',
          desc: ''
        }
      ]
    }
  ],
  退保返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'PolicyOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.proposalNo,
        defaults_key.refundPremium,
        defaults_key.refundTime
      ]
    }
  ],
  续费请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RenewOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.proposalNo,
        defaults_key.payTime,
        defaults_key.periodType,
        {
          key: 'periods',
          name: '',
          type: 'List<Period>',
          isReq: 'Y',
          desc: '一次付清时可为空',
          children: [defaults_key.payPremiun, defaults_key.periodNum]
        }
      ]
    }
  ],
  续费返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RenewOrderResultBody',
      isReq: 'N',
      desc: '成功时必传',
      children: [defaults_key.orderNo, defaults_key.proposalNo]
    }
  ],
  退保请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RefundNoticeRequestBody',
      isReq: '',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.proposalNo,
        defaults_key.refundMoney,
        defaults_key.refundEffectTime,
        defaults_key.refundTime,
        {
          key: 'reason',
          name: '退款的原因',
          type: 'String',
          isReq: '',
          desc: ''
        }
      ]
    }
  ],
  退保返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RefundNoticeResultBody',
      isReq: 'N',
      desc: '成功时必传',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.refundReqTime
      ]
    }
  ]
}
