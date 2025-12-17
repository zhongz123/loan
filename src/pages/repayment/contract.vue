<template>
  <view class="contract-container">
    <view class="contract-title">借款合同</view>
    <view class="contract-content">
      <text>用户您好：</text>
      <view class="notice-text"
        >您的本次借款信息如下，请您在阅读和签署本合同之前确认，如有任何异议，请及时联系我们。</view
      >

      <view class="info-item">
        <text class="label">乙方：</text>
        <text class="value">{{ contract.user.nickname }}</text>
      </view>
      <view class="info-item">
        <text class="label">乙方身份证号码：</text>
        <text class="value">{{ contract.user.id_card }}</text>
      </view>
      <view class="info-item">
        <text class="label">乙方手机号码：</text>
        <text class="value">{{ contract.user.mobile }}</text>
      </view>
      <view class="info-item">
        <text class="label">借款金额：</text>
        <text class="value">{{ contract.loan_amount }}元</text>
      </view>
      <view class="info-item">
        <text class="label">借款期限：</text>
        <text class="value">{{ contract.loan_cycle }}个月</text>
      </view>
      <view class="info-item">
        <text class="label">借款利率：</text>
        <text class="value">{{ contract.loan_rate }}%（按单利计算）</text>
      </view>
      <view class="info-item">
        <text class="label">违约金率：</text>
        <text class="value">{{ contract.expected_rate }}%/每日</text>
      </view>
      <view class="info-item">
        <text class="label">借款单号：</text>
        <text class="value">{{ contract.order_no }}</text>
      </view>
      <view class="info-item">
        <text class="label">甲方：</text>
        <text class="value">{{ contract.party_name }}</text>
      </view>
      <view class="info-item">
        <text class="label">合同签订时间：</text>
        <text class="value">{{ contract.loan_disbursement_date }}</text>
      </view>

      <view class="rate-notice">本次借款综合年化费率不超过24%</view>

      <image
        class="seal-image"
        src="@/static/repayment/seal.png"
        mode="scaleToFill"
      />
    </view>

    <view class="contract-section">
      <view class="section-title">1. 特别提醒</view>
      <view class="section-content">
        <view class="clause">
          1.1
          上述贷款人与信誉花国际信托-畅享贷(以下简称"信誉畅享贷")产品运营服务提供方在花科技控股股份有限公司及其旗下云花信息科技有限公司(简称"服务方")将为您(亦称"用户"、"本人")提供本合同项下的个人消费贷款服务。您在此认并同意依与贷款人形成"借款合同"(以下简称"本合同")项下的借贷关系，受本合同的约束。
        </view>
        <view class="clause">
          1.2
          本协议由正文及附件，有关信用贷服务的具体页面等共同构成。为了保障您的合法权益，您应当阅读并遵守本合同，请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，限制、免责条款可能以加黑加粗的形式提示您注意。
        </view>
        <view class="clause">
          如果您对本合同或前端页面内容有任何疑问，请与服务方联系。您可通过在线客服进行咨询，以便为您解答和说明。
        </view>
        <view class="clause">
          1.3
          除非您已阅读并接受本合同所有条款，否则您无法使用信誉畅享贷贷款服务。您的使用、登录、点击"去借钱"等类似按钮的行为即视为您已阅读本合同并同意在本合同上使用自己的数字证书以电子签名方式签署本协议。从您签署且贷款人审批通过之日起本合同即视为生效，构成对各方具有约束力的法律文件。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">2. 借款申请及发放</view>
      <view class="section-content">
        <view class="clause">
          2.1
          本合同采用借款人自主支付的方式发放贷款，即贷款人根据您的借款申请，依据您的资信状况、贷款用途和种类、基础交易状况审批同意后，统一由特定贷款人银行账户支付至本合同约定的您的指定收款账户。您应向贷款人提供准确的收款账户信息。因您提供的账户信息有误或状态异常，或因所提供账户的开户银行系统延误或故障、人行系统延误或故障等原因导致贷款延迟发放的贷款未能在约定的贷款发放日支付至您的指定账户的，由此导致的责任由您承担责任。贷款利息按贷款实际发放日起始计算。因上述原因导致贷款人放款失败的，您需重新申请提款，如因此造成贷款人损失的，您应承担赔偿责任。
        </view>
        <view class="clause">
          如发生因系统原因或款放款通道问题或其他原因导致的贷款人重复放款的，您在此同意并授权贷款人有权在法律规允许的范围内，自行或通过贷款人指定的代理机构(包括相关银行及第三方支付机构等)直接从您收到该笔重复放款的绑定银行卡中对该笔贷款进行扣收，并经使用的银行卡或在第三方支付机构开立的支付账户及绑定的银行卡中对重复放部分款项以划回扣收。
        </view>
        <view class="clause">
          2.2
          贷款金额以本借款合同首部所载信息为准。如存在多个贷款人的，贷款人之间的出资比例由贷款人内部协商确定。您不得以此为由拒绝偿还贷款。
        </view>
        <view class="clause">
          2.3
          客户端页面或贷款人的转账凭证是本合同项下贷款发放及本息(费)偿还情况的有效证据。贷款人在发放贷款前，发现您提供虚假信息与资料或者有其他足以危及贷款安全的重大情形的，有权停止发放贷款。
        </view>
        <view class="clause">
          2.4
          为了解并同意，除法律另有强制性规定或各方协商一致外，本合同项下您已支付给贷款人的利息、违约金等均不予退还。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">3. 借款用途</view>
      <view class="section-content">
        <view class="clause">
          您的贷款应按本合同约定的借款用途区限于日常消费使用，不能用于购房及偿还住房抵押贷款、股票、债券、期货、金融衍生产品和资产管理产品等投资;固定资产、股本权益性投资;或违规理财品、监管规定禁止的其他用途。如您的贷款人为消费金融公司的，您的贷款除了限于前述用途之外，亦不能用于购买汽车，否则视同您违约。贷款人有权通过账户分析、凭证查验、现场调查等方式核查您的贷款用途。您不得利用贷款人为您提供的服务进行偷逃税款、逃废债务、洗钱及其他违法犯罪活动。您应确保贷款资金来源合法合规，若您在使用贷款过程中出现监管机关规定的或贷款人依其判断认定的风险特征时，贷款人有权不经任何形式的事先通知或事先确认而暂时中止或终止服务并要求您提前归还贷款本息。您有义务积极协助贷款人识别相关风险，并承担因此所产生的损失。如因此给服务方、贷款人造成损失的，您应承担赔偿责任。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">4. 利率和期限</view>
      <view class="section-content">
        <view class="clause">
          4.1
          本合同项下贷款利率以本借款合同首部所载信息为准。利率定价基于合同生效日前一工作日全国银行间同业拆借中心公布的最新1年期贷款市场报价利率(LPR)加减一定基点(一个基点=0.01%)形成，采用到利计算方法。
        </view>
        <view class="clause">
          4.2 贷款人将自贷款发放之日起(含贷款发放日)计收该笔贷款利息至清偿日止。
        </view>
        <view class="clause">
          4.3
          贷款期限自贷款发放之日起(含贷款发放日)开始计算，单笔贷款金额、贷款发放日、贷款到期日、计息起始日以您确认的借据/合同或系统自动生成的借据/账单/还款计划/放款凭证等电子记录(以下简称"电子记录")为准。该等电子记录亦为本合同组成部分，与本合同具有同等法律效力。
        </view>
        <view class="clause">
          4.4
          本次贷款利率以本借款合同约定内容为准。若您获得清偿到期应付贷款本金、利息或任何到期应付的其他款项(以下统称"到期款项")，贷款人有权自您逾期之日起，按首部所载的逾期违约金率对您计收违约金，直至本息清偿完毕为止。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">5. 对账和还款</view>
      <view class="section-content">
        <view class="clause">
          5.1
          您应主动查询您账户的交易明细以确认交易内容。贷款人所保存的您的交易记录，均为本合同项下贷款的真实凭据。对前述记录的有力，您不得以未收到对账单或未看到交易明细为由否认贷款行为。
        </view>
        <view class="clause">
          5.2
          本合同项下计息方式和还款方式为下述方式其中之一，具体以用户前端页面展示及本合同首部展示为准(每日利息，违约金不足0.01元的部分按0.01元计算并收取)。
        </view>
        <view class="clause">
          (1)
          按月还款。按月计息:除第一期外，每月偿还固定金额贷款本息，用户须按照选定的还款计划在到期付款日前支付全部到期应付款项。
        </view>
        <view class="clause">
          (2)
          等额本金还款。按日计息:除第一期外，每月偿还固定金额贷款本金，并偿付当月实际占用资金天数而产生的利息，贷款到期日归还剩余贷款本金及利息。
        </view>
        <view class="clause">
          (3)
          等额本息还款。按日计息:每月偿还固定金额贷款本息，每期利息按当月实际占用资金天数计算，贷款到期日归还剩余贷款本金及利息。
        </view>
        <view class="clause">
          (4)
          先息后本还款。按日计息:每月偿还当月实际占用资金天数而产生的利息，贷款到期日归还全部贷款本金及剩余利息。
        </view>
        <view class="clause">
          5.3
          您应在还款日前归还当期应还款金额，还款日期以经您确认的借款合同或电子记录为准，还款日的规则如下:您的贷款每月有一个固定还款日，该固定还款日可能为以下任意一种，具体以经您确认的借款合同或电子记录为准，如还款日为法定节假日或公休日的，还款日不顺延:
        </view>
        <view class="clause">
          (1)
          该笔贷款提款申请之日对应的还款月的自然日，如还款月无对应自然日的，则为该月最后一个自然日。
          例如:2015年7月31日申请首笔享贷借款的(借款期限:3个月(期))，此笔还款日分别为:8月31日、9月30日、10月31日。
        </view>
        <view class="clause">
          (2)
          您信誉畅享贷首笔借款的借款日将确定为您后续每笔借款的固定还款日。在此情况下，您的多笔贷款的还款日将被统一成同一天。且由于您或贷款人系统原因导致部分时点可能早于或晚于您的放款时点，故您在本合同项下的贷款期限可能略有短或延长，对此您予以认可。特别的，如您首笔借款的借款日为当月的29日、30日、31日时，固定还款日依次为每月1、2、3日，需要提醒您注意的是，在放款日非还款日的情况下，如贷款放款日距离贷款发放后的首个还款日不满20个自然日的，则第一期还款应顺延至第二个还款日;反之，如贷款放款期限应延长至初始贷款期限届满日后的首个还款日;如贷款放款日距离贷款发放后的首个还款日超过20个自然日(含)，则第一期还款应在贷款发放后首个还款日归还。贷款期限缩短至初始贷款期限届满日前一个还款日。您理解并同意在此情况下，如您选择按日计息方式的，您的首期计息时间可能长于或短于30天，剩息将按照您的实际用款时间计算。
          例如:2015年7月31日申请首笔享贷借款的(借款期限:3个月(期))，还款日分别为:9月3日、10月3日、11月3日。自此，信誉畅享贷固定还款日为每月3日。
        </view>
        <view class="clause">
          例如:2015年7月15日申请首笔享贷借款的(借款期限:3个月(期))，还款日分别为:每月15日。同时2015年11月28日申请第二笔信誉畅享贷借款的(借款期限:3个月(期))，还款日依然为1月15日、2月15日、3月15日。
        </view>
        <view class="clause">
          您已充分理解并确认为实现您的固定还款日便利而可能出现的贷款每期实际计息不足三十天或超过三十天的情况。
        </view>
        <view class="clause"> 5.5 还款约定分为主动还款或自动还款 </view>
        <view class="clause">
          (1) 主动还款:您可主动向贷款人偿还借款本息及相关费用。
        </view>
        <view class="clause">
          (2)
          自动还款:除您主动还款外，自动还款日当天开始，贷款人有权自行或委托服务方对您发起自动扣款，请确保在还款日前您用于还款的资金充裕且还款途径未受限制或未超支付限额:
        </view>
        <view class="clause">
          a)
          您不可撤销地授权银行或第三方支付机构(包括但不限于网银在线(北京)科技有限公司)根据贷款人的指令，自还款日起从您的花花账户绑定银行卡/花花小金库/花花钱包账户中划扣欠款(具体扣款顺序以系统实际支持为准)，用于偿还您在贷款人处的全部债务直至清偿完毕；且贷款人有权将多笔贷款应还款额合并，整部分或部分放大金额，又批发出代扣指令，该前述代扣指令如同您本人做出。代扣时间、金额等指令以贷款人或服务方通知为准，代扣的全部费任由您承担。
        </view>
        <view class="clause">
          b)
          自动还款的目的是为了方便您还款，避免您因懈怠或其他原因造成的还款瑕疵，同时也是为了维护贷款人的合法权益。
        </view>
        <view class="clause">
          c)
          自动扣款可能会由于还款途径受限、超出支付限额、余额不足或其他原因等造成扣款失败，贷款人或服务方将以短信或系统提醒等形式通知您扣款结果，若自动扣款失败请您及时主动还款，避免通期、逾期未清偿任何款项将影响您的征信记录。
        </view>
        <view class="clause">
          d)
          您在此确认和授权，当您的账户余额不足时，贷款人有权降低代扣额度以及多次分笔通过银行或第三方支付机构(包括但不限于网银在线(北京)科技有限公司)从您的花花账户绑定银行卡/花花小金库/花花钱包账户中划扣欠款。
        </view>
        <view class="clause">
          e)
          您逾期后，贷款人将根据上述自动还款的规则持续扣款，直至欠款清偿完毕。
        </view>
        <view class="clause">
          5.6
          还款顺序:实现偿还的费用(如有)、逾期违约金(如有)、逾期利息(如有)、逾期本金(如有)、提前还款违约金(如有)、当期利息、当期本金、下期本金。贷款人有权根据您的借款情况和贷款人的风险政策变更前述扣款顺序。特别的，当您选择等额本息或先息后本方式时，您的还款顺序以前端页面显示和具体的还款计划为准。
        </view>
        <view class="clause">
          5.7
          如贷款人为两人时，贷款人之间按贷款资金比例份额共同享有对您的债权，任一方均有权向您要求归还本合同项下全部贷款本息，您不得以此为由拒绝偿还贷款或只偿还部分贷款人的款项。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">6. 提前还款</view>
      <view class="section-content">
        <view class="clause">
          借款期限届满前，在征得贷款人同意的前提下，您可主动提前归还全部或部分本合同项下的应还款项。贷款人届时可能会向您收取提前还款违约金，并要求您退还已减免的全额或部分利息(如有)，根据计息方式和还款方式收取规则具体如下：
        </view>
        <view class="clause">
          (1)
          按月还款，按月计息:除第一期外，每月偿还固定金额贷款本息，用户须按照选定的还款计划在到期付款日前支付全部到期应付款项。
        </view>
        <view class="clause">
          (2)
          等额本金还款，按日计息:除第一期外，每月偿还固定金额贷款本金，并偿付当月实际占用资金天数而产生的利息，贷款到期日归还剩余贷款本金及利息。
        </view>
        <view class="clause">
          (3)
          等额本息还款，按日计息:每月偿还固定金额贷款本息，每期利息按当月实际占用资金天数计算，贷款到期日归还剩余贷款本金及利息。
        </view>
        <view class="clause">
          (4)
          先息后本还款，按日计息:每月偿还当月实际占用资金天数而产生的利息，贷款到期日归还全部贷款本金及剩余利息。
        </view>
        <view class="clause">
          (5)
          随借随还、本息同还，按日计息:实际占用资金天数而产生的利息，贷款到期日归还全部贷款本金及利息。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">7. 合同变更、解除、权利义务的转让</view>
      <view class="section-content">
        <view class="clause"> 7.1 合同变更与解除 </view>
        <view class="clause">
          (1)
          贷款人可在法律允许的范围内对本合同的内容进行修订。但相关修改不会加重您在贷款金额和利率方面的责任，一旦合同条款变更，贷款人将按照本合同约定的通知方式通知您，除法律法规另有强制性规定外，经修订的内容生效时间以通知载明日期为准。您可自行选择是否继续使用贷款人提供的服务，一旦您在修订生效后继续使用本贷款服务即被视为您已接受了修改后的合同内容;如不同意有关变更，可全额还清本合同项下所有应付款项后，停止使用贷款人提供的贷款服务。
        </view>
        <view class="clause">
          (2)
          本合同生效后，除本合同另有约定外，您不得要求单方擅自变更或解除本合同。如贷款人基于自身经营原因或基于对您信用资质的判断等致无法为您继续提供服务，贷款人有权在不违反相关法律法规的前提下宣布中断、终止本合同或其任何部分(包括但不限于停止发放贷款等)，并要求您在指定期限内提前归还本合同项下应付款项。
        </view>
        <view class="clause"> 7.2 合同权利义务的转让 </view>
        <view class="clause">
          (1)
          未经贷款人书面同意，您不得将本合同项下的权利和义务转让给任何第三方。贷款人有权将其在本合同项下的权利和义务全部或部分转让给第三方，且债权转让行为无须获征得您的同意。合同权利和义务转让后，您理解并同意，您与债权受让人之间的权利和义务仍适用于本合同的约定。
        </view>
        <view class="clause">
          (2)
          为保证本借款合同的履行，贷款人有权委托汇正(厦门)融资担保有限公司、花花安联财产保险有限公司或其他第三方为本次贷款向贷款人提供信用保险或其他保证。若该第三方为贷款人承担了保险责任或保证责任，第三方有权按照本合同的约定足额向您追偿或者转让其追偿权并由债权受让人向您追偿。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">8. 声明与承诺</view>
      <view class="section-content">
        <view class="clause">
          8.1
          您应保证在安全环境下通过各种媒介使用本服务，否则您须对非安全环境在各种媒介上使用本贷款服务所导致的风险和损失自行负责。
        </view>
        <view class="clause">
          8.2
          您理解本合同所涉贷款服务有赖于服务方及网银在线系统的准确运行及操作。若出现服务方及网银在线系统差错、故障或其他原因引发了展示错误、用户不当获利等情形的，您同意贷款人及网银在线可以自行或通过第三方来取更正差错、扣划款项，暂停服务等适当的正措施。
        </view>
        <view class="clause">
          8.3 您已阅读本合同所有条款且清楚地知悉贷款人的经营范围、授权权限。
        </view>
        <view class="clause">
          8.4
          签署和履行本合同是您真实的意思表示，您具备签署和履行本合同所必要的权利能力和行为能力、能以自身名义履行本合同的义务并承担民事责任。
        </view>
        <view class="clause">
          8.5
          您应妥善保管在服务平台中留存的，包括但不限于服务账户、密码、数字证书、绑定的手机号码、手机验证码等与本合同项下贷款有关的一切信息。在贷款人根据本合同确定的校验方式校验您身份通过后，通过您账户进行的一切活动均代表您本人的意思并由您承担相应的法律后果。您应确保不向其他任何人泄露前述信息。对于因前述信息泄露而导致的损失，由您自行承担。
        </view>
        <view class="clause">
          8.6
          您承诺您所提供的个人相关的收入、资产证明及其他任何能够证明您信用情况的资料真实、完整、有效。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">9. 反洗钱条款</view>
      <view class="section-content">
        <view class="clause">
          9.1
          您应按照法律法规规定及贷款人要求，完整提供各项身份信息资料，配合贷款人开展身份识别工作，保证向贷款人提供的所有身份信息资料均真实、完整、准确、合法、有效。
        </view>
        <view class="clause">
          9.2
          在业务关系存续期间，您身份资料信息发生变更的，应当及时向贷款人更新其身份资料。如您身份证明文件有效期过期或者即将过期的，您应及时更新其身份证明文件。如您身份证明文件未在证件到期后及时更新且没有提出合理理由的，贷款人有权中止为您办理业务。
        </view>
        <view class="clause">
          9.3
          当贷款人在日常经营中发现您身份资料信息不准确或者不完整时，您应配合贷款人补充完善其身份资料。
        </view>
        <view class="clause">
          9.4
          当贷款人在日常经营中发现您存在异常行为、可疑交易或疑似涉嫌洗钱、恐怖融资等情况时，您应配合贷款人做好尽职调查工作，贷款人有权根据反洗钱法律法规等有关规定，结合洗钱风险状况对您采取相应管控措施，甚至拒绝提供金融服务。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">10. 违约责任</view>
      <view class="section-content">
        <view class="clause"> 10.1 下列任一事件均构成本条款所称违约事件: </view>
        <view class="clause">
          (1)
          您违反本合同第3条约定或将资金用于禁止领域或您拒绝、阻碍贷款人对贷款用途进进行核查的;
        </view>
        <view class="clause">
          (2) 您存在任何一笔本金、利息、其他费用或逾期款项的;
        </view>
        <view class="clause">
          (3) 您在履行与贷款人签订的其他合同时有违约行为;
        </view>
        <view class="clause"> (4) 您未履行本合同下任何义务的行为; </view>
        <view class="clause">
          (5)
          您向贷款人提供虚假的信息或隐瞒、遗漏重要信息或向贷款人提供误导性陈述;
        </view>
        <view class="clause"> (6) 您转移资产以逃避债务的; </view>
        <view class="clause">
          (7) 其他贷款人认为您可能发生严重影响偿债能力的情形。
        </view>
        <view class="clause">
          10.2 有违约事件发生时，贷款人有权采取下列一项或多项措施:
        </view>
        <view class="clause"> (1) 停止向您发放贷款; </view>
        <view class="clause">
          (2) 要求您限期纠正违约行为并赔偿相应的损失;
        </view>
        <view class="clause">
          (3) 要求您提前归还已发放的全部贷款本金并结清利息;
        </view>
        <view class="clause">
          (4) 根据贷款风险状况调整贷款金额、期限与利率;
        </view>
        <view class="clause">
          (5)
          取消您贷款时所获得及后续可能获得的优惠政策(如利息减免、利率折扣等);
        </view>
        <view class="clause">
          (6)
          违约事件发生时，您在本合同项下未偿还的贷款提前到期，您应立即归还所有贷款本金、所有利息、逾期违约金、实现债权的费用等。贷款人可实时对您进行自动代扣操作，并有权从您开户行或第三方支付机构组织从您的银行卡/花花小金库/花花钱包账户，或从您在贷款人处开立的账户中扣除相应金额以收回相关方费用、违约金、利息、本金以及所有其他应付费用;
        </view>
        <view class="clause">
          (7)
          违约事件发生时，贷款人有权自行或委托第三方(包括但不限于服务方、催收机构、律师事务所或其他合法的第三方机构)通过信函、短信、电子邮件、电话、上门或司法途径等方式向您进行催告提醒。
        </view>
        <view class="clause"> (8) 采取法律、法规规定的其他救济措施。 </view>
        <view class="clause">
          10.3
          您任何一期未及时足额归还贷款本息即视为逾期，从逾期之日起，按实际逾期天数对逾期本金按照本合同约定的违约金比例计收逾期违约金，直至清偿逾期本息为止，违约金比例以本合同首部所载信息为准;如您存在两期以上逾期的，则各期的逾期违约金需累加计算。
        </view>
        <view class="clause">
          10.4
          贷款人因向您催告还款及实现债权所产生的一切费用(即实现债权的费用，包括但不限于公证费、诉讼费、律师费、差旅费、催告还款费)，均由您承担。
        </view>
        <view class="clause">
          10.5
          贷款人软(硬)件系统出现下列任一情况而无法正常运作，致使无法向您提供本服务，贷款人对此免予承担责任，但贷款人会尽合理努力向您进行及时告知，并在合理范围内采取措施减轻对您使用本服务造成的不利影响，同时积极促使服务恢复正常，该状况包括但不限于:
        </view>
        <view class="clause">
          (1)
          因电信设备出现故障，或由于网络攻击、网络拥堵、信息畅享贷服务依赖的相关服务商、企事业单位、银行方面等原因造成的服务中断或者延迟;
        </view>
        <view class="clause">
          (2)
          因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力因素，造成本服务运行系统障碍不能执行业务等;
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">11. 争议解决</view>
      <view class="section-content">
        <view class="clause">
          11.1
          若您和贷款人之间发生任何纠纷或争议，首先应友好协商解决，协商不成时原告有权选择以下任何一个有管辖权的人民法院进行诉讼:(1)贷款人及其分支机构所在地、办事机构所在地;(2)合同签订地(含电子签章所在地);(3)合同履行地;(4)债权受让人所在地;(5)双方营业通过调解组织解决争议，若协商调解不成，一方可选择在该调解组织所在地法院起诉。
        </view>
        <view class="clause">
          11.2
          您确认并同意，对于本合同签署、履行、终止过程中所形成的任何电子合同、电子信息记录或数据(如有)以及相关信息系统中所提取的数据等均具有法律效力，认可其证据的有效性、真实性。
        </view>
        <view class="clause">
          11.3
          本合同条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">12. 通知与送达</view>
      <view class="section-content">
        <view class="clause">
          12.1
          您向贷款人提供的资料及信息(包括但不限于姓名、国籍、住所地、工作单位、联系电话、身份证件或者身份证明文件的号码、有效期等身份信息)发生变更的，应在信息发生变更之日起7日内联系客服更新相关信息。
        </view>

        <view class="clause">
          12.2
          贷款人就本合同给予您的任何通知、要求或其它函件，一经发送到您向贷款人提供的信息中所示的地址或以短信形式发送至您的手机号码或在花花、花花金融(包括但不限于APP、网站、小程序等)发送站内信、通知或进行公告、公示等，即视为已送达，因您不及时变更信息而引起的责任及产生的损失，由您自行承担。
        </view>

        <view class="clause">
          12.3
          您同意法院或仲裁机构按照本合同附件《送达地址确认书》的约定向您送达法律文书。
        </view>

        <view class="clause">
          12.4
          发生诉讼等违约情形后，涉诉标的额超过受诉法院所在省、自治区、直辖市上年度就业人员平均工资日分之五十但在二倍以下的，双方同意适用小额诉讼程序审理，一审终审。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">13. 特别提示</view>
      <view class="section-content">
        <view class="clause">
          13.1
          您知悉并确认，如逾期偿还贷款贷款人有权对您提起诉讼，并决定是否申请强制执行，若贷款人申请强制执行，执行中贷款人有权申请法院对您采取账户冻结、列入失信被执行人名单，限制高消费等一切强制措施，这将对您的征信、生活、工作及子女教育等多方面产生重大不利影响(包括但不限于被限制坐高铁、飞机、限制高消费等)。
        </view>
        <view class="clause">
          13.2
          本合同签署前，贷款人已提请您对本合同各项条款，作全面、准确的理解，并应其要求对相应条款作了说明，贷款人已特别提醒您注意本合同内黑色字体条款，您已明确所有条款及相关法律专业术语含义，确认对上述合同内容不存在误解或疑义。
        </view>
      </view>
    </view>

    <view class="contract-section">
      <view class="section-title">14. 其他</view>
      <view class="section-content">
        <view class="clause">
          14.1
          贷款人所公布的服务收费标准、附件、您的单笔借据等均是本合同不可分割的部分，与本合同具有同等法律效力。
        </view>
        <view class="clause">
          14.2 本合同未尽事宜，以您另行签署的《授信及服务协议》为准。
        </view>
        <view class="clause">
          14.3
          本合同所附附件及未来可能签署的补充协议、承诺声明均构成本合同不可分割的组成部分，与本合同具有同等法律效力。
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fetchGetContractDetailApi } from "@/apis";
import { onLoad } from "@dcloudio/uni-app";

const contract = ref<any>({});

const getContractDetail = async () => {
  await fetchGetContractDetailApi().then((res) => {
    if (res.code === 1) {
      contract.value = res.data;
      console.log("合同详情:", contract.value);
    }
  });
};

onLoad(() => {
  getContractDetail();
});
</script>

<style scoped lang="scss">
.contract-container {
  padding: 30rpx;
  background: #fff;
}

.contract-title {
  font-size: 36rpx;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40rpx;
}

.contract-content {
  font-size: 28rpx;
  line-height: 1.6;
  position: relative;
}

.seal-image {
  width: 180rpx;
  height: 180rpx;
  position: absolute;
  bottom: 50rpx;
  left: 150rpx;
}

.notice-text {
  margin: 20rpx 0 30rpx;
  color: #333;
}

.info-item {
  margin-bottom: 20rpx;

  .label {
    color: #666;
  }

  .value {
    color: #333;
  }
}

.rate-notice {
  margin-top: 40rpx;
  font-weight: bold;
}

.contract-section {
  margin-top: 30rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}

.section-content {
  padding: 0 10rpx;
}

.clause {
  margin-bottom: 20rpx;
  line-height: 1.8;
  color: #333;
  font-size: 26rpx;
  text-indent: 2em;
}
</style>
