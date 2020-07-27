<template>
	<router-view></router-view>
</template>
<script>

</script>
<style lang="scss">
	body {
		width: 100%;
		font-size: 15px;
		color: #545454;
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;

	}

	a {
		color: white;
		text-decoration: none;
	}

	/* 悬浮头部导航 */
	.nav {
		color: white;
		height: 80px;
		background: rgba(0, 0, 0, 0.6);
		position: absolute;
		top: 70px;
		left: 0;
		right: 0;
		bottom: 0;
		transition: all .5s;
		z-index: 10;

		.navContent {
			max-width: 1600px;
			margin: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.item {
				padding-top: 20px;

				.title {
					font-size: 18px;
				}

				.name {
					padding-bottom: 25px;
					margin-left: 20px;
				}

				.name:hover {
					border-bottom: 3px solid rgb(217, 155, 0);
				}

				.border {
					border-bottom: 3px solid rgb(217, 155, 0);
				}
			}
		}
	}

	/* 悬浮头部导航样式改变 */
	.active {
		position: fixed;
		top: 0px;
		background: rgba(0, 0, 0, 0.8);
		transition: all .2s;
	}

	// 背景图
	.banner {
		width: 100%;
		height: 670px;
		overflow: hidden;
		position: relative;

		.bannerText {
			position: absolute;
			top: 30%;
			left: 10%;
			color: white;
			width: 700px;

			.title {
				font-size: 40px;
			}

			.text {
				font-size: 20px;
				line-height: 1.5;
				margin: 20px 0 40px 0;
			}

			span {
				padding: 15px 20px;
				background-color: rgb(0, 125, 184);
			}

			span:hover {
				background-color: rgb(30, 106, 146);
			}
		}
	}

	// 分割线
	.line {
		height: 1px;
		width: 600px;
		background-color: #CCCCCC;
		border-radius: 50%;
		margin: 0 auto;
	}

	// 信息
	.info {
		width: 100%;
		background-color: rgb(234, 234, 234);

		.info-content {
			display: flex;
			justify-content: space-between;
			max-width: 1600px;
			margin: auto;
			padding: 30px 0;

			.item {
				width: 400px;

				.title {
					font-weight: 400;
					font-size: 20px;
					color: black;
				}

				.text {
					margin-top: 20px;
					margin-bottom: 15px;
				}

				a {
					color: rgb(0, 125, 184);
				}
			}


		}
	}

	// 按钮蓝变黄
	.btn {
		color: white;
		padding: 10px 15px;
		background-color: #007db8;
		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		position: relative;
		-webkit-transition-property: color;
		transition-property: color;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
	}

	.btn:before {
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgb(240, 171, 0);
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transform-origin: 0 50%;
		transform-origin: 0 50%;
		-webkit-transition-property: transform;
		transition-property: transform;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}

	.btn:hover,
	.btn:focus,
	.btn:active {
		color: white;
	}

	.btn:hover:before,
	.btn:focus:before,
	.btn:active:before {
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}

	// 锚点导航
	.anchorNav {
		opacity: 0;
		position: fixed;
		top: 150px;
		left: 250px;
	}

	.anchorNavShow {
		opacity: 1;
	}

	.nav1 {
		line-height: 2;
		padding-left: 10px;
	}

	.anchorNavSelect {
		color: #333333;
		border-left: 2px solid rgb(240, 171, 0);
	}
</style>
