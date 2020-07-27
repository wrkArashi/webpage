<template>
	<div class="rhein-index">
		<!-- banner -->
		<div class="indexBanner">
			<img src='../assets/img/index/bg1.jpg' alt="">
		</div>
		<!-- 区块1 -->
		<div class="item">
			<!-- 标题 -->
			<div class="titleBox">
				<div class="LTitle">这里是大标题</div>
				<div class="MTitle">yingwenxiaobiaoti</div>
			</div>
			<!-- 内容 -->
			<div class="contentBoxFour">
				<!-- 四个框 -->
				<div class="list" v-for="(item,index) in fourBox" :key='index' @mouseover="changeIndexFour=index" @mouseout="changeIndexFour=null">
					<router-link :to="item.link">
						<div class="imgBox">
							<img :class="changeIndexFour==index?'imgChange':''" :src="item.url" alt="">
						</div>
						<div class="detail" :class="changeIndexFour==index?'detailChange':''">
							<div class="text">{{item.text}}</div>
							<div class="more">
								<div class="link" :class="changeIndexFour==index?'linkChange':''">MORE</div>
								<div class="go" :class="changeIndexFour==index?'goChange':''">></div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 区块2 -->
		<div class="item">
			<!-- 标题 -->
			<div class="titleBox">
				<div class="LTitle">这里是大标题</div>
				<div class="MTitle">yingwenxiaobiaoti</div>
			</div>
			<!-- 内容 -->
			<div class="contentBoxThree">
				<!-- 三个框 -->
				<div class="list" v-for="(item,index) in threeBox" :key='index' @mouseover="changeIndexThree=index" @mouseout="changeIndexThree=null"
				 :class="changeIndexThree==index?'listChange':''">
					<router-link :to="item.link">
						<div class="imgBox">
							<img :class="changeIndexThree==index?'imgChange':''" :src="item.url" alt="">
							<div class="cover" :class="changeIndexThree==index?'coverChange':''">
								<div class="text">{{item.text}}</div>
							</div>
						</div>
						<div class="more">
							<div class="link" :class="changeIndexThree==index?'linkChange':''">→</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				changeIndexFour: null,
				changeIndexThree: null,
				threeBox: [{
					url: require('../assets/img/RheinIndex/pic1.jpg'),
					text: '一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍',
					// link: '/training/server'
					link: ''
				}, {
					url: require('../assets/img/RheinIndex/pic2.jpg'),
					text: '一些些cccccccc介绍一些些详细点的介绍',
					link: ''
				}, {
					url: require('../assets/img/RheinIndex/pic3.jpg'),
					text: '一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些vvvvvvvvvvvvvvvvvv',
					link: ''
				}],
				fourBox: [{
					url: require('../assets/img/RheinIndex/pic1.jpg'),
					text: '一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍',
					// link: '/training/server'
					link: ''
				}, {
					url: require('../assets/img/RheinIndex/pic2.jpg'),
					text: '一些些cccccssssssssssssssfdfdfdd大师傅十分士大夫地方的方法的对方对方的cccccccccccccccccccccc介绍一些些详细点的介绍',
					link: ''
				}, {
					url: require('../assets/img/RheinIndex/pic3.jpg'),
					text: '一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍一些些vvvvvvvvvvvvvvvvvv',
					link: ''
				}, {
					url: require('../assets/img/RheinIndex/pic4.jpg'),
					text: '一些些详细点的介绍一些些详细点dddddddddddddddddddd绍一些些详细点的介绍一些些详细点的介绍一些些详细点的介绍',
					// link: '/training/server'
					link: ''
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.rhein-index {

		img {
			display: block;
			width: 100%;
			transition: all 0.5s;
		}

		.indexBanner {
			position: relative;
			overflow: hidden;
		}

		.item {
			padding-bottom: 50px; //一会删除

			a {
				color: black;
			}

			.titleBox {
				margin: 30px 0;
				text-align: center;

				.LTitle {
					font-size: 34px;
					margin-bottom: 5px;
				}

				.MTitle {
					font-size: 18px;
					color: #666666;
				}
			}

			.contentBoxFour {
				display: flex;
				justify-content: center;

				.list {
					width: 420px;
					margin: 0 20px;
					box-shadow: 5px 5px 20px #888888;
					border-radius: 5px;
					overflow: hidden;

					.imgBox {
						overflow: hidden;

						.imgChange {
							transform: scale(1.2, 1.2);
						}
					}

					.detail {
						transition: all 0.5s;
						
						// height: 120px;

						.text {
							padding: 15px;
							line-height: 1.5;
							line-height: 2;
						}

						.more {
							padding: 0 15px 20px 0;
							text-align: right;
							position: relative;

							.link {
								transition: all .2s;
							}

							.linkChange {
								color: #0077AA;
								// color: rgb(255,215,0);
								transform: translateX(-30px);
							}

							.go {
								position: absolute;
								right: 27px;
								opacity: 0;
								transition: all .2s;
							}

							.goChange {
								color: #0077AA;
								// color: rgb(255,215,0);
								transform: translateY(-17px);
								opacity: 1;
							}
						}
					}

					.detailChange {
						// background-color: rgba(231, 225, 205, 0.4);
						background-color: orange;
						color: white;
					}
				}
			}

			.contentBoxThree {
				display: flex;
				justify-content: center;

				.list {
					width: 570px;
					margin: 0 20px;
					border-radius: 5px;
					background-color: rgb(246, 247, 247);
					border: 3px solid white;
					transition: all .3s;

					.imgBox {
						width: 420px;
						margin: 20px auto;
						position: relative;

						.cover {
							position: absolute;
							top: 0;
							width: 100%;
							height: 100%;
							transition: 0.5s;
							opacity: 0;
							color: white;

							.text {
								padding: 0 20px;
								margin-top: 20%;
								line-height: 2;
								font-size: 18px;
							}
						}

						.coverChange {
							opacity: 1;
							background-color: rgba(0, 0, 0, 0.3);
						}
					}

					.more {
						text-align: center;
						margin-bottom: 20px;

						.link {
							color: white;
							width: 44px;
							height: 44px;
							margin: 0 auto;
							line-height: 40px;
							font-size: 30px;
							background-color: orange;
							border-radius: 50%;
							transition: all 0.5s;
						}

						@keyframes myfirst {
							// 25% {
							// 	background: red;
							// }

							50% {
								background: red;
							}

							// 100% {
							// 	background: lightyellow;
							// }
						}

						.linkChange {
							transform: rotate(360deg);
							animation: myfirst 0.5s alternate;
						}
					}
				}

				.listChange {
					// background-color: #0077AA;
					border: 3px solid orange;
					box-shadow: 5px 5px 20px #888888;
				}
			}


		}


	}
</style>
