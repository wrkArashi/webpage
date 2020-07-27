<template>
	<div class="trainingIndex">
		<!-- 导航 -->
		<div class="nav" :class="{'active':isActive}">
			<div class="navContent">
				<div class="item">
					<router-link to="/index">
						<div>
							< 首页</div> </router-link> <div class="title">SAP培训与支持
						</div>
					</router-link>
				</div>
				<div class="item">
					<router-link to=""><span class="name border">概览</span></router-link>
					<router-link to="/training/server"><span class="name">培训产品和服务</span></router-link>
					<router-link to=""><span class="name">部署、采用和维护 SAP 解决方案</span></router-link>
				</div>
			</div>
		</div>
		<!-- 背景图 -->
		<div class="banner">
			<img src="../../assets/img/training/index1.jpg" alt="">
			<div class="bannerText">
				<div class="title">获取SAP培训与支持</div>
				<div class="text">利用 SAP 培训与支持产品及服务，提升业务用户的知识和技能，从而更好地发挥 SAP 解决方案的潜能。</div>
				<router-link to="">
					<span>阅读手册</span>
				</router-link>
			</div>
		</div>
		<!-- 信息 -->
		<div class="info">
			<div class="info-content">
				<div class="item">
					<div class="title">免费试用 SAP Learning Hub</div>
					<div class="text">我们提供 14 天的免费试用期，在此期间，你可以预览数百堂在线课程，体验社交学习和协作学习。</div>
					<router-link to="">
						图标+开始免费使用 >
					</router-link>
				</div>
				<div class="item">
					<div class="title">多少培训才算足够？</div>
					<div class="text">了解充分挖掘 SAP 解决方案业务价值的卓越实践。</div>
					<router-link to="">
						图标+查看 IDC 信息图 >
					</router-link>
				</div>
				<div class="item">
					<div class="title">帮助员工学习和使用 SAP Analytics 解决方案</div>
					<div class="text">参加虚拟大会，向专家学习如何通过培训提升业务成果。</div>
					<router-link to="">
						图标+观看 3 月 5 日的现场直播 >
					</router-link>
				</div>
			</div>
		</div>
		<!-- 内容 -->
		<div class="trainingIndex-content">
			<!-- 锚点导航 -->
			<div class="anchorNav" :class="{'anchorNavShow':anchorNavShow}">
				<div class="nav1" v-for="(item, index) in allMenuList" :key="item.id" @click="jump(index)" :class="index==activeMenu?'anchorNavSelect':''">{{item.name}}</div>
			</div>
			<!-- 内容-概览 -->
			<div class="outline-item section">
				<div class="title">查找适合你的培训产品</div>
				<div class="outline-list">
					<div class="outline">
						<div class="img"><img src="../../assets/img/training/info1.svg" alt=""></div>
						<div class="s-title">了解SAP培训产品</div>
						<div class="text">
							我们提供了各种各样的培训产品和服务，帮助你了解和采用创新技术。我们的培训内容时新全面，覆盖所有 SAP 软件组合，从基础技能到高阶技能，一应俱全。
						</div>
						<ul>
							<li>您可以根据自己的角色需求，浏览、筛选和访问针对 SAP 解决方案精心推出的一系列培训课程</li>
							<li>浏览和预约传统的讲师授课型培训或线上培训，或者订阅全天候不间断的云内容和工具</li>
							<li>通过 SAP 广受好评的云端认证课程，获得专业认证</li>
						</ul>
						<div class="btn"><span>了解更多</span></div>
					</div>
					<div class="outline">
						<div class="img"><img src="../../assets/img/training/info2.svg" alt=""></div>
						<div class="s-title">部署、采用和维护 SAP 解决方案</div>
						<div class="text">
							借助 SAP 和合作伙伴提供的培训和支持，紧跟 SAP 的创新步伐，实现真正的业务价值。SAP 的持续学习框架能帮助你部署、采用和维护 SAP 技术。 </div>
						<ul>
							<li>为负责配置、管理和支持 SAP 软件的项目团队和关键用户提供基础培训</li>
							<li>获取专业的组织变更管理指导，恰当地向员工宣传即将进行的变革，获得整个企业的支持</li>
							<li>提高 SAP 技术的用户采用率，并分析使用情况 </li>
						</ul>
						<div class="btn"><span>了解更多</span></div>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<!-- 内容-样板客户 -->
			<div class="customer-item section">
				<div class="title">SAP 客户成功案例</div>
				<div class="customer-list">
					<div class="img"><img src="../../assets/img/training/info3.png" alt=""></div>
					<div class="customer">
						<div class="s-title">借助 SAP Enable Now，优化最终用户培训</div>
						<div class="text">了解 Dimension Data 公司如何为遍布 46 个国家和地区的 28000 多名员工高效创建和部署培训内容</div>
						<router-link to=""><span>观看视频 ></span></router-link>
					</div>
				</div>
				<div class="customer-list">
					<div class="img"><img src="../../assets/img/training/info4.png" alt=""></div>
					<div class="customer">
						<div class="s-title">确保顾问熟练掌握最新技术</div>
						<div class="text">了解 ROFF 公司如何确保顾问及时掌握最新的要求，提升自己的 SAP 软件技能。</div>
						<router-link to=""><span>阅读客户案例 ></span></router-link>
					</div>
				</div>
				<router-link to="">
					<div class="more">查看更多成功案例 ></div>
				</router-link>
			</div>
			<div class="line"></div>
			<!-- 内容-研讨会 -->
			<div class="workshop-item section">
				<div class="title">线上研讨会</div>
				<div class="workshop-list ">
					<div class="workshop">
						<div class="img">
							<img src="../../assets/img/training/info5.svg" alt="">
						</div>
						<div class="s-title">促进 SAP S/4HANA 的采用</div>
						<div class="text">了解如何利用卓越实践、工具和资源促进员工采用 SAP S/4HANA。</div>
						<router-link to="">
							<span>观看专题线上研讨会</span>
						</router-link>
					</div>
					<div class="workshop">
						<div class="img">
							<img src="../../assets/img/training/info6.svg" alt="">
						</div>
						<div class="s-title">帮助员工成功采用 SAP SuccessFactors 解决方案</div>
						<div class="text">了解如何快速部署 SAP SuccessFactors 解决方案，并加快用户采用速度。</div>
						<router-link to="">
							<span>观看专题线上研讨会</span>
						</router-link>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<!-- 内容-联系 -->
			<div class="contact-item section">
				<div class="title">联系我们</div>
				<div class="contact-list">
					<div class="img">
						<img src="../../assets/img/training/info10.svg" alt="">
					</div>
					<div>
						<div>
							<router-link to=""><span>微信：SAP教育培训 ></span></router-link>
						</div>
						<div>
							<router-link to=""><span>微博：@SAP教育与培训 ></span></router-link>
						</div>
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
				anchorNavShow: false,
				scroll: null,
				activeMenu: 0,
				isActive: false,
				allMenuList: [{
					id: 1,
					name: "概览"
				}, {
					id: 2,
					name: "样板客户"
				}, {
					id: 3,
					name: "线上研讨会"
				}, {
					id: 4,
					name: "联系我们"
				}]
			}
		},
		mounted() {
			window.addEventListener('scroll', this.windowScroll)
			window.addEventListener('scroll', this.dataScroll);
		},
		watch: {
			scroll: function() {
				this.loadSroll()
			}
		},
		methods: {
			dataScroll: function() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
			},
			jump(index) {
				this.activeMenu = index
				let jump = document.getElementsByClassName('section');
				// 获取需要滚动的距离
				let total = jump[index].offsetTop;
				document.body.scrollTop = total;
				document.documentElement.scrollTop = total;
				window.pageYOffset = total;
			},
			loadSroll: function() {
				var self = this;
				var navs = document.getElementsByClassName('nav1')
				var sections = document.getElementsByClassName('section');
				for (var i = 0; i < sections.length; i++) {
					if (self.scroll >= sections[i].offsetTop - 100) {
						this.activeMenu = i
					}
				}

			},
			// 顶部导航
			windowScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollTop > 0) {
					this.isActive = true
				} else {
					this.isActive = false
				}
				if (scrollTop > 800) {
					this.anchorNavShow = true
				} else {
					this.anchorNavShow = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.trainingIndex {
		width: 100%;

		.btn {
			margin-top: 20px;
			color: white;
		}

		// 主体内容
		.trainingIndex-content {
			background-color: white;
			max-width: 980px;
			margin: 0 auto;
			color: rgb(146, 146, 146);

			// 主体内容-大标题-通用
			.title {
				text-align: center;
				font-size: 40px;
				color: #333;
				margin-bottom: 36px;
				margin-top: 60px;
			}

			// 主体内容-概览
			.outline-item {
				margin: 100px 0;

				.outline-list {
					display: flex;
					justify-content: space-between;

					.outline {
						width: 400px;

						.img {
							width: 150px;
							margin: 0 auto;
							margin-bottom: 20px;
						}

						.s-title {
							text-align: center;
							font-size: 18px;
							margin-bottom: 7px;
						}

						.text {
							margin-bottom: 13px;
						}

						li {
							padding: 0, 0, 6, 16;
						}

					}

				}
			}

			// 主体内容-样板客户
			.customer-item {
				.customer-list {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 25px 30px 25px 0;

					img {
						width: 220px;
						margin: 0 auto;
					}

					.customer {
						width: 600px;

						.s-title {
							font-size: 18px;
							margin-bottom: 7px;
						}

						.text {
							margin-bottom: 6px;
						}

						span {
							color: #007db8;
						}

					}
				}

				.more {
					text-align: center;
					margin-top: 35px;
					color: #007db8;
					margin-bottom: 100px;
				}
			}

			// 主体内容-线上研讨会
			.workshop-item {
				margin-bottom: 100px;

				.workshop-list {
					display: flex;
					justify-content: space-between;

					.workshop {
						width: 400px;

						.img {
							width: 150px;
							margin: 0 auto;
							margin-bottom: 20px;
						}

						.s-title {
							font-size: 18px;
							margin-bottom: 7px;
							text-align: center;
						}

						.text {
							margin-bottom: 7px;
						}

						span {
							color: #007db8;
						}
					}

				}

			}

			// 主体内容-联系我们
			.contact-item {
				padding-bottom: 100px;

				.contact-list {
					width: 50%;
					margin: 0 auto;
					display: flex;
					justify-content: space-around;
					align-items: center;

					.img {
						width: 70px;
					}

					span {
						color: #007db8;
					}
				}
			}
		}
	}
</style>
