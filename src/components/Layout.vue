<template>
	<div class="content">
		<div class="header">
			<!-- 导航栏 -->
			<div class="navBar">
				<div class="left">
					<router-link to="/index">莱茵科斯特</router-link>
					<!-- <img src="../assets/header-icon/logo.png" alt=""> -->
				</div>
				<div class="center">
					<router-link to=""><span class="item" @mouseenter="productHover()">产品</span></router-link>
					<router-link to=""><span class="item" @mouseenter="industryHover()">行业</span></router-link>
					<router-link to=""><span class="item" @mouseenter="serverHover()">服务和支持</span></router-link>
					<router-link to="/training/index"><span class="item" @mouseenter="trainingHover()">培训</span></router-link>
					<router-link to=""><span class="item" @mouseenter="communityHover()">社区</span></router-link>
					<router-link to=""><span class="item" @mouseenter="partnerHover()">合作伙伴</span></router-link>
					<router-link to=""><span class="item" @mouseenter="aboutHover()">关于SAP</span></router-link>
				</div>
				<div class="right">
					<span class="item">试用和购买</span>
					<i class="item iconfont icon-search"></i>
					<i class="item iconfont icon-yonghu"></i>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-zhongguo"></use>
					</svg>
				</div>
			</div>
			<!-- 产品 -->
			<div v-if="product" class="list list1" @mouseenter="product=true" @mouseleave='product=false'>
				<div class="left">
					<div class="item" v-for="(item,index) in productList">
						<div class="icon">
							<img src="../assets/header-icon/product1.svg" alt="">
						</div>
						<router-link to="">
							<div class="title">{{item.title}}</div>
						</router-link>
						<router-link to="">
							<div class="name" v-for="(item,index) in item.name">{{item}}</div>
						</router-link>
					</div>
				</div>
				<div class="right">
					<router-link to="">
						<div class="item" v-for="(item,index) in productRight">
							<div class="icon">
								<img src="../assets/header-icon/right1.svg" alt="">
							</div>
							<div>{{item.name}}</div>
						</div>
					</router-link>
				</div>
			</div>
			<!-- 行业 -->
			<div v-if="industry" class="list list2" @mouseenter="industry=true" @mouseleave='industry=false'>
				<div class="left">
					<div class="item" v-for="(item,index) in industryList">
						<div class="icon">
							<img src="../assets/header-icon/product1.svg" alt="">
						</div>
						<router-link to="">
							<div class="title">{{item.title}}</div>
						</router-link>
						<router-link to="">
							<div class="name" v-for="(item,index) in item.name">{{item}}</div>
						</router-link>
					</div>
				</div>
				<div class="right">
					<router-link to="">
						<div class="item" v-for="(item,index) in industryRight">
							<div class="icon">
								<img src="../assets/header-icon/right1.svg" alt="">
							</div>
							<div>{{item.name}}</div>
						</div>
					</router-link>
				</div>
			</div>
			<!-- 服务和支持 -->
			<div v-if="server" class="list list3" @mouseenter="server=true" @mouseleave='server=false'>
				<div class="left">
					<div class="item" v-for="(item,index) in serverList">
						<div class="icon">
							<img src="../assets/header-icon/product1.svg" alt="">
						</div>
						<router-link to="">
							<div class="title">{{item.title}}</div>
						</router-link>
						<router-link to="">
							<div class="name" v-for="(item,index) in item.name">{{item}}</div>
						</router-link>
					</div>
				</div>
				<div class="right">
					<router-link to="">
						<div class="item" v-for="(item,index) in serverRight">
							<div class="icon">
								<img src="../assets/header-icon/right1.svg" alt="">
							</div>
							<div>{{item.name}}</div>
						</div>
					</router-link>
				</div>
			</div>
			<!-- 培训 -->
			<div v-if="training" class="list list4" @mouseenter="training=true" @mouseleave='training=false'>
				<div class="left">
					<div class="item" v-for="(item,index) in trainingList">
						<div class="icon">
							<img src="../assets/header-icon/product1.svg" alt="">
						</div>
						<router-link to="">
							<div class="title">{{item.title}}</div>
						</router-link>
						<router-link to="">
							<div class="name" v-for="(item,index) in item.name">{{item}}</div>
						</router-link>
					</div>
				</div>
				<div class="right">
					<router-link to="">
						<div class="item" v-for="(item,index) in trainingRight">
							<div class="icon">
								<img src="../assets/header-icon/right1.svg" alt="">
							</div>
							<div>{{item.name}}</div>
						</div>
					</router-link>
				</div>
			</div>
			<!-- 社区 -->
			<div v-if="community" class="list list5" @mouseenter="community=true" @mouseleave='community=false'>
				<div class="left">
					<div class="item" v-for="(item,index) in communityList">
						<div class="icon">
							<img src="../assets/header-icon/product1.svg" alt="">
						</div>
						<router-link to="">
							<div class="title">{{item.title}}</div>
						</router-link>
						<router-link to="">
							<div class="name" v-for="(item,index) in item.name">{{item}}</div>
						</router-link>
					</div>
				</div>
				<div class="right">
					<router-link to="">
						<div class="item" v-for="(item,index) in communityRight">
							<div class="icon">
								<img src="../assets/header-icon/right1.svg" alt="">
							</div>
							<div>{{item.name}}</div>
						</div>
					</router-link>
				</div>
			</div>
			<!-- 合作伙伴 -->
			<div v-if="partner" class="list list6" @mouseenter="partner=true" @mouseleave='partner=false'>
				<div class="left">
					<div class="item" v-for="(item,index) in partnerList">
						<div class="icon">
							<img src="../assets/header-icon/product1.svg" alt="">
						</div>
						<router-link to="">
							<div class="title">{{item.title}}</div>
						</router-link>
						<router-link to="">
							<div class="name" v-for="(item,index) in item.name">{{item}}</div>
						</router-link>
					</div>
				</div>
				<div class="right">
					<router-link to="">
						<div class="item" v-for="(item,index) in partnerRight">
							<div class="icon">
								<img src="../assets/header-icon/right1.svg" alt="">
							</div>
							<div>{{item.name}}</div>
						</div>
					</router-link>
				</div>
			</div>
			<!-- 关于SAP -->
			<div v-if="about" class="list list7" @mouseenter="about=true" @mouseleave='about=false'>
				<div class="left">
					<div class="item" v-for="(item,index) in aboutList">
						<div class="icon">
							<img src="../assets/header-icon/product1.svg" alt="">
						</div>
						<router-link to="">
							<div class="title">{{item.title}}</div>
						</router-link>
						<router-link to="">
							<div class="name" v-for="(item,index) in item.name">{{item}}</div>
						</router-link>
					</div>
				</div>
				<div class="right">
					<router-link to="">
						<div class="item" v-for="(item,index) in aboutRight">
							<div class="icon">
								<img src="../assets/header-icon/right1.svg" alt="">
							</div>
							<div>{{item.name}}</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="main" @click="contactBox=false">
			<router-view></router-view>
		</div>
		<div class="footer">
			<div class="top">
				<div class="item">
					<div class="title">快速链接</div>
					<div class="name">为什么选择 SAP</div>
					<div class="name">智慧企业</div>
					<div class="name">中小型企业</div>
					<div class="name">SAP Trust Center</div>
					<div class="name">SAP Insights</div>
					<div class="name">SAP Community</div>
					<div class="name">开发人员</div>
					<div class="name">Support Portal</div>
				</div>
				<div class="item">
					<div class="title">关于</div>
					<div class="name">公司信息</div>
					<div class="name">全球办公室名录</div>
					<div class="name">投资者关系</div>
					<div class="name">招贤纳士</div>
					<div class="name">新闻</div>
					<div class="name">活动</div>
					<div class="name">客户案例</div>
					<div class="name">电子报</div>
				</div>
				<div class="item">
					<div class="title">网站信息</div>
					<div class="name">隐私</div>
					<div class="name">使用条款</div>
					<div class="name">法律披露</div>
					<div class="name">版权</div>
					<div class="name">商标</div>
					<div class="name">服务通用条款</div>
					<div class="name">网站地图</div>
					<div class="name">文本视图</div>
					<div class="name">Cookie 说明</div>
				</div>
				<div class="item">
					<div class="title">联系我们</div>
					<div style="display: flex;align-items: center;">
						<div class="footer-icon">图标</div>
						<div>
							<div>中国</div>
							<div>400-619-0727</div>
							<div>或者浏览完整列表，查找 当地电话号码</div>
						</div>
					</div>
					<div class="name" style="display: flex;align-items: center;">
						<div class="footer-icon">图标</div>
						<div>联系我们</div>
					</div>
					<div class="name" style="display: flex;align-items: center;">
						<div class="footer-icon">图标</div>
						<div>在线洽谈</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div>莱茵科斯特</div>
				<div>沪ICP备09046015号-28 备案主体编号 31010602003068</div>
				<div>
					关注我们
					<i class="item iconfont icon-ins"></i>
					<i class="item iconfont icon-youxiang"></i>
					<i class="item iconfont icon-gongzhonghao"></i>
				</div>
			</div>
		</div>
		<!-- 联系框 -->
		<div class="contact">
			<i class="iconfont icon-xiaoxi"></i>
			<a href="javascript:void(0)" @click="contactBox=true">
				<div>联系我们</div>
			</a>
		</div>
		<div class="contactBox" v-show="contactBox">
			<div class="left">
				<div>请拨打官方热线</div>
				<div>120-0290-1009</div>
			</div>
			<div class="right">
				<div class="item">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-weixin"></use>
					</svg>
					<div class="list">
						<div class="title">关注微信</div>
						<div>微信在线洽谈或留下信息，我们将尽快联系您</div>
					</div>
				</div>
				<div class="item item1">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-duihua"></use>
					</svg>
					<div class="list">
						<div class="title">在线洽谈</div>
						<div>若当前离线，您可选择上方微信或下方邮件方式与我们联系</div>
					</div>
				</div>
				<div class="item">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-youxiang1"></use>
					</svg>
					<div class="list">
						<div class="title">联系我们</div>
						<div>如有任何意见、问题或反馈，欢迎您给我们发送电子邮件</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contactBox: false,
				product: false,
				industry: false,
				server: false,
				training: false,
				community: false,
				partner: false,
				about: false,
				// 产品
				productRight: [
					{ name: "指智慧企业" },
					{ name: "体验管理" },
					{ name: "数字化转型" },
					{ name: "中小型企业" },
					{ name: "技术趋势" }
				],
				productList: [{
						title: 'ERP 与财务',
						name: ['SAP S / 4 HANA', '面向中小型企业的 ERP 软件', '	财务', '	会计与财务结算', '资金管理', '应付账款和应收账款',
							'网络安全、 治理、 风险与合规管理'
						]
					},
					{ title: 'CRM 与客户体验', name: ['客户数据', '营销', '电商', '销售', '服务'] },
					{ title: '网络与支出管理', name: ['供应商管理', "战略寻源", "采购", "服务采购和临时劳动力", "销售和订单履行", '差旅和费用'] },
					{ title: '数字化供应链', name: ['供应链计划', '供应链物流', '制造', '研发 / 工程', '资产管理'] },
					{ title: 'HR 与员工管理', name: ['员工体验管理', '核心人事管理与薪资核算', '人才管理', '人力资源分析和劳动力计划'] },
					{ title: '业务技术平台', name: ['数据库和数据管理', '应用开发和集成', '商务分析', '智能技术'] }
				],
				// 行业
				industryRight: [
					{ name: "指智慧企业" },
					{ name: "体验管理" },
					{ name: "数字化转型" },
					{ name: "中小型企业" },
					{ name: "技术趋势" }
				],
				industryList: [
					{ title: '能源与自然资源', name: ['建筑产品', '化工行业', '轧制品行业', '采矿业', '石油天然气行业', '公用事业'] },
					{ title: '金融服务', name: ['银行业', '保险行业'] },
					{ title: '消费品行业', name: ['农牧业', '消费品行业', '时尚行业', '生命科学行业', '零售行业', '批发分销'] },
					{ title: '离散行业', name: ['航空与国防', "汽车行业", "高科技行业", "机械制造行业"] },
					{ title: '服务行业', name: ['铁路', '地产及工程行业', '媒体行业', '航空服务业', '专业服务', '体育与休闲娱乐业', '电信行业', '交通运输行业'] },
					{ title: '公共服务', name: ['国防与安全', '未来城市', '医疗卫生行业', '高等教育与研究', '公共部门'] }
				],
				// 服务和支持
				serverRight: [
					{ name: "SAP Cloud ALM" },
					{ name: "SAP Solution Manager" },
					{ name: "SAP Focused Run" }
				],
				serverList: [
					{ title: 'ERP与财务', name: ['基本业务服务', '创新服务和解决方案', '咨询服务', '实施服务', '云服务', '支持服务', '高级成功服务'] },
					{
						title: 'SAP Support Portal',
						name: ['SAP ONE Support Launchpad', '知识库', '产品支持', '软件下载', 'Next - Generation Support', '应用生命周期管理',
							'SAP ONE Support Launchpad', 'Maintenance 2040'
						]
					},
					{ title: 'SAP Help Portal', name: ['产品文档查找工具', 'SAP 路线图', '卓越实践'] },
					{ title: '“SAP for Me” 客户中心', name: ['登录“ SAP for Me”'] }
				],
				// 关于
				aboutRight: [
					{ name: "指智慧企业" },
					{ name: "体验管理" },
					{ name: "数字化转型" },
					{ name: "中小型企业" },
					{ name: "技术趋势" }
				],
				aboutList: [
					{ title: '公司信息（ 英文）', name: ['管理团队', '历史', '愿景与目标', '多元与包容', '可持续发展与企业社会责任', '创新', '质量', '全球赞助计划', '全球办公室名录'] },
					{ title: '投资者关系（ 英文）', name: ['资本市场故事', '财务报表', '财务活动日程', ] },
					{ title: '消费品行业', name: ['农牧业', '消费品行业', '时尚行业', '生命科学行业', '零售行业', '批发分销'] },
					{ title: '离散行业', name: ['航空与国防', "汽车行业", "高科技行业", "机械制造行业"] },
					{ title: '服务行业', name: ['铁路', '地产及工程行业', '媒体行业', '航空服务业', '专业服务', '体育与休闲娱乐业', '电信行业', '交通运输行业'] },
					{ title: '公共服务', name: ['国防与安全', '未来城市', '医疗卫生行业', '高等教育与研究', '公共部门'] },
					{ title: '服务行业', name: ['铁路', '地产及工程行业', '媒体行业', '航空服务业', '专业服务', '体育与休闲娱乐业', '电信行业', '交通运输行业'] },
					{ title: '公共服务', name: ['国防与安全', '未来城市', '医疗卫生行业', '高等教育与研究', '公共部门'] }
				],
				// 合作伙伴
				partnerRight: [
					{ name: "指智慧企业" },
					{ name: "体验管理" },
					{ name: "数字化转型" },
					{ name: "中小型企业" },
				],
				partnerList: [
					{ title: '公司信息（ 英文）', name: ['管理团队', '历史', '愿景与目标', '多元与包容', '可持续发展与企业社会责任', '创新', '质量', '全球赞助计划', '全球办公室名录'] },
					{ title: '投资者关系（ 英文）', name: ['资本市场故事', '财务报表', '财务活动日程', ] },
					{ title: '消费品行业', name: ['农牧业', '消费品行业', '时尚行业', '生命科学行业', '零售行业', '批发分销'] },
					{ title: '离散行业', name: ['航空与国防', "汽车行业", "高科技行业", "机械制造行业"] },
				],
				// 社区
				communityRight: [
					{ name: "指智慧企业" },
					{ name: "体验管理" },
				],
				communityList: [
					{ title: '公司信息（ 英文）', name: ['管理团队', '历史', '愿景与目标', '多元与包容', '可持续发展与企业社会责任', '创新', '质量', '全球赞助计划', '全球办公室名录'] },
				],
				// 培训
				trainingRight: [
					{ name: "指智慧企业" },
					{ name: "体验管理" },
				],
				trainingList: [
					{ title: '公司信息（ 英文）', name: ['管理团队', '历史', '愿景与目标', '多元与包容', '可持续发展与企业社会责任', '创新', '质量', '全球赞助计划', '全球办公室名录'] },
					{ title: '公司信息（ 英文）', name: ['管理团队', '历史', '愿景与目标', '多元与包容', '可持续发展与企业社会责任', '创新', '质量', '全球赞助计划', '全球办公室名录'] },
				],
			}
		},
		methods: {
			productHover() {
				this.product = true
				this.training = false
				this.community = false
				this.partner = false
				this.server = false
				this.industry = false
				this.about = false
			},
			industryHover() {
				this.industry = true
				this.training = false
				this.community = false
				this.partner = false
				this.server = false
				this.about = false
				this.product = false
			},
			serverHover() {
				this.server = true
				this.training = false
				this.community = false
				this.partner = false
				this.about = false
				this.industry = false
				this.product = false
			},
			trainingHover() {
				this.training = true
				this.about = false
				this.community = false
				this.partner = false
				this.server = false
				this.industry = false
				this.product = false
			},
			communityHover() {
				this.community = true
				this.training = false
				this.about = false
				this.partner = false
				this.server = false
				this.industry = false
				this.product = false
			},
			partnerHover() {
				this.partner = true
				this.training = false
				this.community = false
				this.about = false
				this.server = false
				this.industry = false
				this.product = false
			},
			aboutHover() {
				this.about = true
				this.training = false
				this.community = false
				this.partner = false
				this.server = false
				this.industry = false
				this.product = false
			},
		}
	}
</script>

<style lang="scss">
	.content {

		background-color: black;
		// a {
		// 	color: #545454;
		// 	text-decoration: none;
		// }

		.header {
			padding: 20px 0;
			margin-right: auto;
			margin-left: auto;
			width: 100%;
			max-width: 1600px;
			color: white;

			.navBar {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.item {
					margin: 0 15px;
				}

				.left {
					font-size: 20px;
				}

				.center {
					.item {
						padding-bottom: 22px;
					}

					.item:hover {
						border-bottom: 4px solid rgb(217, 155, 0);
					}
				}

				.right {
					display: flex;
					align-items: center;

					i {
						font-size: 26px;
					}

					.icon {
						width: 30px;
						height: 30px;
						margin-left: 15px;
					}
				}
			}

			// 详细导航
			.list1 {
				left: 200px;

				.left {
					width: 630px;
				}
			}

			.list2 {
				left: 270px;

				.left {
					width: 630px;
				}
			}

			.list3 {
				left: 450px;

				.left {
					width: 420px;
				}
			}

			.list4 {
				left: 550px;

				.left {
					width: 420px;
				}
			}

			.list5 {
				left: 800px;

				.left {
					width: 220px;
				}
			}

			.list6 {
				left: 650px;

				.left {
					width: 420px;
				}
			}

			.list7 {
				left: 450px;

				.left {
					width: 840px;
				}
			}

			.list {
				background-color: white;
				display: flex;
				position: absolute;
				top: 70px;
				z-index: 99;

				.left {
					display: flex;
					flex-wrap: wrap;
					padding: 10px;
					padding-left: 50px;

					a {
						color: rgb(171, 171, 171);
					}

					.item {
						width: 200px;
						padding: 5px;

						.icon {
							width: 50px;
							height: 50px;
						}

						.name {
							margin: 10px 0;
						}

						.name:hover {
							text-decoration: underline;
						}

						.title {
							color: #3c3c3c;
							margin: 10px 0;
							font-size: 18px;
						}

						.title:hover {
							text-decoration: underline;
						}
					}
				}

				.right {
					background-color: rgb(34, 34, 34);

					.item {
						width: 200px;
						text-align: center;
						padding: 28px 0;

						.icon {
							margin: 0 auto;
							width: 50px;
							height: 50px;
						}
					}

					.item:hover {
						background-color: rgb(78, 78, 78);
					}
				}
			}

		}

		.main {
			background-color: white;
		}

		.footer {
			margin-right: auto;
			margin-left: auto;
			width: 100%;
			max-width: 1600px;

			.top {
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #545454;
				margin-top: 25px;

				.item {

					.title {
						color: rgb(148, 148, 148);
						font-size: 16px;
						margin-bottom: 20px;
					}

					.name {
						margin: 15px 0;
					}

					.footer-icon {
						margin-right: 10px;
					}
				}
			}

			.bottom {
				padding: 20px 0;
				display: flex;
				align-items: center;
				justify-content: space-between;

				i {
					padding: 3px;
					background-color: white;
					margin: 10px;
				}
			}
		}

		.contact {
			position: fixed;
			right: 0;
			top: 400px;
			color: white;
			text-align: center;
			width: 100px;
			background-color: rgb(0, 125, 184);
			padding: 10px 15px;
			transition: all 5s linear;

			i {
				font-size: 25px;
			}
		}

		@keyframes showBox {
			to {
				right: 0;
			}
		}

		.contactBox {
			position: fixed;
			right: -480px;
			top: 300px;
			display: flex;
			height: 310px;
			animation: showBox .3s linear forwards; //动画名称,一个周期花费时间,过渡类型,何时开始，次数，是否在下一周期逆向播放


			.left {
				background-color: rgb(0, 125, 184);
				color: white;
				font-size: 30px;
				padding: 110px 30px;
			}

			.right {
				background-color: white;

				.item1 {
					border-top: 1px solid #666666;
					border-bottom: 1px solid #666666;
				}

				.item {
					display: flex;
					align-items: center;
					padding: 15px;

					.icon {
						font-size: 30px;
						margin: 0 20px;
					}

					.list {
						width: 250px;
					}

					.title {
						color: rgb(0, 125, 184);
						margin-bottom: 10px;
					}
				}
			}
		}
	}
</style>
