//信息框
							function luck1() {
								luck.open({
									content: '我是周瑜，小名周何能，请多关照！',
									style: 'background:#229FFD;color:#fff',
									time: 2000
								});
//								_hmt.push(['_trackEvent', 'luck-mobile-信息框', 'click'])
							}

							//提示框
							function luck2() {
								luck.open({
									title: ['平时都爱干什么呀？', 'background-color:#8DCE16; color:#fff'],
									content: '看高清电影，动漫，涂鸦，读书，随便写点东西。。。',
								});
//								_hmt.push(['_trackEvent', 'luck-mobile-提示框', 'click'])
							}

							//询问框
							function luck3() {
								luck.open({
									title: ['猜猜看', 'background:#e59501;color:#fff'], //标题
									content: '你们猜我是喜欢css3和js哪个多一点？', //内容
									btn: ['css3', 'js'],
									yes: function() {
										luck.open({
											content: '很遗憾答错了！',
											time: 1500
										});
									},
									no: function() {
										luck.open({
											content: '恭喜你答对了！',
											time: 1500
										});
									}
								});
//								_hmt.push(['_trackEvent', 'luck-mobile-询问框', 'click'])
							}

							//自定义层
							function luck4() {
								luck.open({
									type: 1,
									content: '<div style="padding:20px;">写代码和读代码都是享受，我爱得深也爱得真。<p style="text-align:center;margin-top:20px;"><input type="button" class="button button-small button-primary button-rounded" value="好孩子不撒谎，这是真的" onclick="luck.close()"></p></div>'
								});
//								_hmt.push(['_trackEvent', 'luck-mobile-自定义层', 'click'])
							}

							//自定义-加载层
							function luck5() {
								luck.open({
									type: 1,
									content: '<div class="loading"></div>',
									style: 'min-width:50px;',
								});
//								_hmt.push(['_trackEvent', 'luck-mobile-加载层', 'click'])
							}

							//自定义-全屏层
							function luck6() {
								luck.open({
									type: 1,
									content: '<div style="padding:100px 0;color:#fff;text-align:center"><div style="font-size:.3rem; margin-top:1.34rem"><h4>我会成为听话的员工；</h4><h4>我会成为三思而行的员工；</h4><h4>我会成为生产优质代码的员工；</h4><h4>我会成为创造简洁大方页面的员工；</h4></div><p style="margin-top:1.3rem;"><input class="button" type="button" value="还行" onclick="luck.open({content:\'世界恢复原样→_→\',time:1})"></p></div>',
									style: 'width:100%;height:100%;max-width:100%;background:#3f3f3f'
								});
//								_hmt.push(['_trackEvent', 'luck-mobile-全屏层', 'click'])
							}