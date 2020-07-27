<template>
	<div class="trainingServer">
		<!-- 导航 -->
		<div class="nav" :class="{'active':isActive}">
			<div class="navContent">
				<div class="item">
					<router-link to="/training/index">
						<div>
							< SAP培训与支持</div> </router-link> <div class="title">培训产品和服务
						</div>
					</router-link>
				</div>
				<div class="item">
					<router-link to=""><span class="name border">培训产品和服务</span></router-link>
					<router-link to=""><span class="name">SAP Learning Hub</span></router-link>
				</div>
			</div>
		</div>
		<!-- 背景图 -->
		<div class="banner">
			<img src="../../assets/img/training/index2.jpg" alt="">
			<div class="bannerText">
				<div class="title">了解 SAP 培训产品</div>
				<div class="text"> 针对所有 SAP 软件组合，我们提供内容时新全面、形式丰富多样的培训和支持产品及服务，帮助你了解和采用创新技术。</div>
				<router-link to="">
					<span>查看所有培训课程</span>
				</router-link>
			</div>
		</div>
		<!-- 信息 -->
		<div class="info">
			<div class="info-content">
				<div class="item">
					<div class="img">
						<img src="../../assets/img/training/server1.svg" alt="">
					</div>
					<div>
						<div class="title">开始规划你的 2020 年培训课程</div>
						<div class="text">了解我们的最新课程和教育培训产品更新。</div>
						<router-link to="">
							了解更多 >
						</router-link>
					</div>
				</div>
				<div class="item">
					<div class="img">
						<img src="../../assets/img/training/server2.svg" alt="">
					</div>
					<div>
						<div class="title">蓄势待发、运筹帷幄、开展培训</div>
						<div class="text">参加网络研讨会，聆听专家探讨有关 SAP S/4HANA、SAP C/4HANA 和 SAP Analytics 的培训。</div>
						<router-link to="">
							立即注册 >
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- 内容 -->
		<div class="trainingServer-content ">
			<!-- 锚点导航 -->
			<div class="anchorNav" :class="{'anchorNavShow':anchorNavShow}">
				<div class="nav1" v-for="(item, index) in allMenuList" :key="item.id" @click="jump(index)" :class="index==activeMenu?'anchorNavSelect':''">{{item.name}}</div>
			</div>
			<!-- 正文-概览 -->
			<div class="outline section">
				<div class="item">
					<div class="title">通过培训课程和认证，</div>
					<div class="title">提高 SAP 技术使用技能</div>
					<div class="m-title">制定全面的培训计划，选择现场、移动或在线培训课程，提高整个企业的技能水平。</div>
					<div class="item-list">
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server3.svg" alt="">
							</div>
							<div class="s-title">预约培训课程</div>
							<div class="text">浏览我们的 Web 商店，查看新课程，查找最近的培训点，搜索课程代码或关注特定的培训计划。</div>
							<router-link to=""><span>了解更多 ></span></router-link>
						</div>
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server4.svg" alt="">
							</div>
							<div class="s-title">获得 SAP 认证</div>
							<div class="text">通过 SAP 认证，就证明你已经具备足够的 SAP 解决方案使用知识，能够满足新角色和新职责的要求。 </div>
							<router-link to=""><span>了解更多 ></span></router-link>
						</div>
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server5.svg" alt="">
							</div>
							<div class="s-title">访问 SAP Learning Hub</div>
							<div class="text">在云端即时访问各种 SAP 学习内容和在线学习课堂。我们提供了多种选项，满足不同的业务需求。 </div>
							<router-link to=""><span>了解更多 ></span></router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<!-- 正文-路线图 -->
			<div class="route section">
				<div class="item">
					<div class="title">通过学习路线图规划学习路径</div>
					<div class="item-list">
						<div class="video">视频暂时无法播放</div>
						<div class="start">
							<div class="text">快速开启学习之旅</div>
							<div class="text1">学习路线图是一套直观的交互式指南，旨在帮助你规划学习路径。了解如何使用不同的功能，基于你的角色和技能水平找到形式和内容均适合你的学习内容。</div>
							<div class="text2">浏览针对以下内容的学习路线图：</div>
							<router-link to="">
								<div>SAP S/4HANA Cloud ></div>
							</router-link>
							<router-link to="">
								<div>SAP S/4HANA ></div>
							</router-link>
							<router-link to="">
								<div>SAP Customer Experience ></div>
							</router-link>
							<router-link to="">
								<div>智能技术 ></div>
							</router-link>
							<router-link to="">
								<div>数字化平台 ></div>
							</router-link>
						</div>
					</div>
					<div class="btnBox">
						<div class="btn"><span>浏览所有学习路线图</span></div>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<!-- 培训课程 -->
			<div class="course section">
				<div class="item">
					<div class="title">SAP培训和教育课程</div>
					<div class="m-title">只有 SAP 最了解 SAP 的产品，也只有 SAP 才拥有如此先进的系统和丰富的教学经验，帮助你高效地学习 SAP 软件。无论你身在何处，我们都能为你提供最新、最精准的 SAP
						培训内容。</div>
					<div class="item-list">
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server6.svg" alt="">
							</div>
							<div class="s-title">讲师授课（线下课堂）</div>
							<div class="text">课堂培训是由我们的专家在先进的培训场所为学员提供现场指导。这种形式的培训是完全的动手实践培训，由主题专家指导学员完成每一项操作，为学员答疑解惑。</div>
						</div>
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server7.svg" alt="">
							</div>
							<div class="s-title">SAP Live Class（在线课堂）</div>
							<div class="text">SAP Live Class 培训是所有学员通过直播视频链接参加专家提供的培训。所有学员和讲师将建立音频和视频连接，彼此进行课堂互动。</div>
						</div>
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server8.svg" alt="">
							</div>
							<div class="s-title">SAP E-Academy（单一访问课程）</div>
							<div class="text">这是一种高度交互式的网络课程，支持你根据自身需要及时进行有针对性的培训。学员可以随时随地访问在线培训课程，而且可以反复学习课程内容。</div>
						</div>
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server9.svg" alt="">
							</div>
							<div class="s-title">客户特定的培训</div>
							<div class="text">客户特定培训是专门面向某一个客户提供内容全面时新的培训。这种培训可以在 SAP 培训场所或服务场所进行，也可以通过在线课堂进行，或者在客户的办公室或培训场所进行。</div>
						</div>
					</div>
					<div class="btnBox">
						<div class="btn"><span>查看现有所有培训课程</span></div>
					</div>
					<div class="blue">
						<router-link to=""><span>查找附近的培训地点 ></span></router-link>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<!-- 认证 -->
			<div class="identify section">
				<div class="item">
					<div class="title">通过 SAP 认证，拓展知识技能</div>
					<div class="m-title">证明你通过在所选领域刻苦学习和勤奋实践，掌握了 SAP 技术的专业知识。</div>
					<div class="item-list">
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server10.jpg" alt="">
							</div>
							<div class="s-title">获得专为数字时代设计的认证</div>
							<div class="text">通过 SAP 认证，证明你已经具备足够的 SAP 解决方案使用知识和经验，能够满足不同角色和职责的要求。</div>
							<router-link to=""><span>阅读资料 ></span></router-link>
						</div>
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server11.jpg" alt="">
							</div>
							<div class="s-title">解答关于认证的疑问</div>
							<div class="text">查看有关 SAP 认证的常见问题及答案，轻松自信地完成你的 SAP 认证之旅。</div>
							<router-link to=""><span>查看常见问题 ></span></router-link>
						</div>
						<div class="list">
							<div class="img">
								<img src="../../assets/img/training/server12.jpg" alt="">
							</div>
							<div class="s-title">通过数字徽章推动成功</div>
							<div class="text">利用数字徽章在社交媒体上展示你获得的 SAP 认证，证明你已具备相应的专业知识和技能，从而获得竞争优势。</div>
							<router-link to=""><span>了解更多 ></span></router-link>
						</div>
					</div>
					<div class="plus">
						<div class="left-title">特色认证</div>
						<div class="item-list">
							<div class="list">
								<div class="s-title">“常学常新”计划</div>
								<div class="text">通过 SAP Global Certification 计划，验证你的专业知识和经验。详细了解如何通过 SAP 认证并保持认证有效。</div>
								<router-link to=""><span>查看常见问题</span></router-link>
							</div>
							<div class="list">
								<div class="s-title">SAP 云端认证</div>
								<div class="text">访问 Certification Hub，申请核心 SAP 解决方案的认证。在 12 个月的订阅期内可以预约参加 6 场考试</div>
								<router-link to=""><span>立即订阅</span></router-link>
							</div>
						</div>
					</div>
					<div class="btnBox">
						<div class="btn"><span>浏览现有认证</span></div>
					</div>
					<div class="blue">
						<router-link to=""><span>了解有关 SAP 认证的更多信息 ></span></router-link>
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
					name: "学习路线图"
				}, {
					id: 3,
					name: "SAP培训课程"
				}, {
					id: 4,
					name: "SAP认证"
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
				if (scrollTop > 1000) {
					this.anchorNavShow = true
				} else {
					this.anchorNavShow = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.trainingServer {
		width: 100%;

		.trainingServer-content {
			background-color: white;
			max-width: 980px;
			margin: 0 auto;
			color: rgb(146, 146, 146);

			.btn {
				margin-top: 30px;
			}

			// 通用
			.item {
				padding: 100px 0;

				.title {
					text-align: center;
					font-size: 40px;
					color: #333;
				}

				.m-title {
					text-align: center;
					font-size: 18px;
					margin: 16px;
				}

				.item-list {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					margin-top: 50px;

					.img {
						width: 100px;
						margin: 0 auto;
					}

					.s-title {
						margin: 10px 0;
						text-align: center;
						font-size: 16px;
						color: #666666;
					}

					.text {
						margin-bottom: 10px;
					}

					span {
						color: #007db8;
					}
				}
			}

			// 内容-认证
			.identify {
				.btnBox {
					width: 120px;
					margin: 0 auto;
				}

				.blue {
					text-align: center;
					margin-top: 10px;

					span {
						color: #007db8;
					}
				}

				.list {
					width: 300px;

					.s-title {
						text-align: left;
					}

					.img {
						width: 100%;
					}

					img {
						width: 300px;
					}
				}

				.plus {
					margin-top: 50px;
					margin-bottom: 50px;

					.left-title {
						font-size: 22px;
						color: #333333;
						margin-bottom: 30px;
					}

					.item-list {
						margin: 0;

						.list {
							width: 400px;
						}
					}
				}
			}

			// 内容-教育课程
			.course {
				.btnBox {
					width: 180px;
					margin: 0 auto;
				}

				.item-list {
					justify-content: space-around;
				}

				.list {
					width: 400px;
					margin-bottom: 50px;
				}

				img {
					width: 150px;
				}

				.blue {
					text-align: center;
					margin-top: 10px;

					span {
						color: #007db8;
					}
				}

			}

			// 内容-概述
			.outline {
				.list {
					width: 300px;
				}
			}

			// 内容-学习路线
			.route {
				.btnBox {
					width: 165px;
					margin: 0 auto;
					margin-top: 50px;
				}

				.video {
					width: 40%;
					border: 1px solid #333333;
				}

				.start {
					width: 45%;

					.text {
						font-size: 16px;
					}

					.text1 {
						margin: 5px 0 10px 0;
					}

					.text2 {
						color: #000000;
						font-weight: 600;
						margin-bottom: 5px;
					}

					a {
						color: #007db8;
					}
				}
			}
		}

		// 导航
		.bannerText {
			color: #000000;
		}

		// 信息
		.info-content {
			width: 60%;

			.item {
				display: flex;
				align-items: center;

				.img {
					width: 90px;
					margin-right: 20px;
				}
			}
		}
	}
</style>
