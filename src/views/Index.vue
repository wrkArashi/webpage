<template>
	<div class="index">
	<!-- 	<div>
			<AnchorNavigation :sys='sys'></AnchorNavigation>
		</div> -->
		<!-- 锚点导航 -->
		<div class="left-nav" :class="navText?'navHover':''" @mouseover="navText=true" @mouseout="navText=false"></div>
		<ul class="nav-link" @mouseover="navText=true" @mouseout="navText=false">
			<li class="nav1" :class="index==activeMenu?'anchorNavSelect':''" v-for="(item,index) in allMenuList" :key='index'
			 @click="jump(index)"><a href="javascript:void(0)"><span :class="index==activeMenu||navText?'spanHover':''">{{item}}</span></a></li>
		</ul>
		<div class="index-Banner section">
			<img src='../assets/img/index/bg1.jpg' alt="">
			<div class="cover">
				<div class="title">来自蓝宝石大会的最新洞察</div>
				<div class="m-title">聚焦前沿议题，解封管理秘籍。获取专家大咖们的最新洞察，让您的企业更坚韧，可持续，决胜后疫情时代！</div>
				<div data-text="前往" class="btn"><span>观看回放</span></div>
			</div>
		</div>
		<div class="black-box section">
			<div class="title">热点</div>
			<div class="item-box">
				<div class="item" v-for="(item,index) in blackBox" :key='index'>
					<img :src='"../assets/img/index/icon" +index+".svg"' alt="">
					<div class="name">{{item}}</div>
					<div class="item-hover"></div>
				</div>
				<!-- 				<div class="item">
					<img src="../assets/img/index/icon1.svg" alt="">
					<div class="name">智慧企业</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon2.svg" alt="">
					<div class="name">HR和员工管理</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon3.svg" alt="">
					<div class="name">ERP云</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon4.svg" alt="">
					<div class="name">客户体验</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon5.svg" alt="">
					<div class="name">中小型企业</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon6.svg" alt="">
					<div class="name">物联网和数字化供应链</div>
					<div class="item-hover"></div>
				</div> -->
			</div>
		</div>
		<div class="index-Banner section">
			<img src="../assets/img/index/bg2.jpg" alt="">
			<div class="cover">
				<div class="title">灵活应对供应链中断风险</div>
				<div class="m-title">借助 SAP 提供的一体化供应链解决方案产品组合，企业可以全面了解从产品设计到运维的端到端流程，洞悉并应对新冠疫情带来的影响。</div>
				<div class="btn"><span>下载手册</span></div>
			</div>
		</div>
		<div class="index-Banner section">
			<img src="../assets/img/index/bg3.jpg" alt="">
			<div class="cover">
				<div class="title">资源行业案例集</div>
				<div class="m-title">帮助能源及自然资源行业构建一个以现实世界元素抽样和数字化后形成的数字世界——小到利用数字双胞胎监测桥梁的应力变化，大至推动企业的数字化转型，实现效率的提升，资源的优化配置，这是SAP所能做的，也是我们正在做的。</div>
				<div class="btn"><span>注册免费下载</span></div>
			</div>
		</div>
		<div class="index-Banner section">
			<img src="../assets/img/index/bg4.jpg" alt="">
			<div class="cover cover1">
				<div class="title">
					SAP S/4HANA Cloud 客户社区</div>
				<div class="m-title">获取 SAP S/4HANA Cloud 最新产品资讯、学习资料，与资深云 ERP 专家和同行互动，了解最新数字化转型成功秘籍</div>
				<div class="btn"><span>马上注册</span></div>
			</div>
		</div>
		<div class="black-box section">
			<div class="title">SAP云产品</div>
			<div class="item-box">
				<div class="item" v-for="(item,index) in blackBox1" :key='index'>
					<img :src='"../assets/img/index/icon" +index+0+".svg"' alt="">
					<div class="name">{{item}}</div>
					<div class="item-hover"></div>
				</div>
				<!-- 				<div class="item">
					<img src="../assets/img/index/icon7.svg" alt="">
					<div class="name">ERP云</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon8.svg" alt="">
					<div class="name">HR云</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon9.svg" alt="">
					<div class="name">分析云</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon10.svg" alt="">
					<div class="name">CRM云</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon11.svg" alt="">
					<div class="name">采购云</div>
					<div class="item-hover"></div>
				</div>
				<div class="item">
					<img src="../assets/img/index/icon6.svg" alt="">
					<div class="name">差旅费用云</div>
					<div class="item-hover"></div>
				</div> -->
			</div>
		</div>
		<div class="index-Banner section">
			<img src="../assets/img/index/bg5.jpg" alt="">
			<div class="cover">
				<div class="title">SAP云方案演示中心</div>
				<div class="m-title">汇聚SAP云解决方案，向您直观展示超过2亿用户正在使用的SAP企业级产品</div>
				<div class="btn"><span>进入展示中心</span></div>
			</div>
		</div>
		<div class="index-Banner section">
			<img src="../assets/img/index/bg6.jpg" alt="">
			<div class="cover">
				<div class="title">为什么选择SAP</div>
				<div class="m-title">阅读IDC, Gartner, Forrester 等全球权威机构分析，了解SAP多款产品的出色之处。</div>
				<div class="btn"><span>了解更多</span></div>
			</div>
		</div>
		<div class="index-Banner section">
			<img src="../assets/img/index/bg7.jpg" alt="">
			<div class="cover">
				<div class="title title1">全新的新闻中心</div>
				<div class="m-title">不仅仅是新闻中心，更是协助您企业数字化转型的前沿资讯中心。专家观点，行业案例，产品实践。获取最新的前沿资讯，洞察企业转型的关键要务</div>
				<div class="btn"><span>立即访问</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	import AnchorNavigation from '@/components/AnchorNavigation.vue'
	export default {
		components: { AnchorNavigation },
		data() {
			return {
				sys:'在页面使用好像也可以',
				navText: false,
				scroll: null,
				activeMenu: 0,
				allMenuList: ['SAP全球蓝宝石大会中国峰会', '热点', '灵活应对供应链中断风险', '源源不断', 'SAP S/4HANA Cloud 客户社区', 'SAP 云产品', 'SAP云方案演示中心',
					'为什么选择SAP', '前沿洞察'
				],
				blackBox: ["智慧企业", "HR和员工管理", "ERP 云", "客户体验", "中小型企业", "物联网和数字化供应链"],
				blackBox1: ["ERP云", "HR云", "分析云", "CRM云", "采购云", "差旅费用云"],
			}
		},
		mounted() {
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
		}
	}
</script>

<style lang="scss">
	.index {
		.left-nav {
			height: 100%;
			width: 500px;
			position: fixed;
			top: 0;
			left: -250px;
			z-index: 10;
		}

		.navHover {
			background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
			filter: blur(40px);
		}

		.nav-link {
			position: fixed;
			left: 3%;
			top: 35%;
			z-index: 1;
			color: white;
			z-index: 20;
		}

		.nav1 {
			color: white;
			opacity: 0.6;
			line-height: 1;

			span {
				opacity: 0;
				transition: all 0.5s;
			}

			span:hover {
				text-decoration: underline;

			}

			.spanHover {
				line-height: 2;
				opacity: 1;
			}
		}

		.anchorNavSelect {
			color: white;
			opacity: 1;
			border: none;
		}

		.black-box {
			background-color: #222;
			text-align: center;
			padding: 50px 0;

			.title {
				font-size: 46px;
				margin-bottom: 24px;
				color: #545454;
			}

			.item-box {
				display: flex;
				width: 1200px;
				margin: 0 auto;
				justify-content: space-around;
				color: white;

				.item {
					position: relative;
					width: 150px;
					transition: all .1s;
				}

				img {
					width: 75px;
					margin-bottom: 10px;
				}

				.item:hover {
					transform: scale(1.2, 1.2)
				}

				.item-hover {
					width: 150px;
					height: 110px;
					background-color: rgb(34, 34, 34);
					opacity: 0.5;
					position: absolute;
					top: 0;
					left: 0px;
				}

				.item-hover:hover {
					opacity: 0;
				}

			}
		}

		.index-Banner {
			position: relative;
			width: 100%;
			overflow: hidden;

			img {
				display: block;
			}

			.cover {
				position: absolute;
				top: 30%;
				left: 20%;
				color: white;
				width: 750px;

				.title {
					font-size: 58px;
					margin-bottom: 23px;
				}

				.title1 {
					color: rgb(240, 171, 0);
				}

				.m-title {
					font-size: 28px;
					line-height: 1.2;
					margin-bottom: 34px;
				}
			}

			.cover1 {
				width: 950px;
				text-align: center;
				left: 25%;

				.btn {
					margin: 0 auto;
				}
			}
		}
	}
</style>
