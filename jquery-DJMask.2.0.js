DJMask={
			common:{//公共配置
				windowW:$(window).width(),//浏览器窗口宽度
				windowH:$(window).height(),//浏览器窗口高度					
			},
			maskBackgroundCss:function(){
				var css={//遮罩的黑色透明背景样式
						"background":"#000000",
						"opacity":"0.5",
						"-moz-opacity":"0.5",
						"filter":"alpha(opacity=50)",
						"width":document.body.scrollWidth,//文档的宽度
						"height":document.body.scrollHeight,//文档的高度
						"position": "absolute",
						"top": "0px",
						"left": "0px",
						"z-index": "100",
						"display":"none"
					};
				return css;
			},
			init:function(){//初始化				
								var maskHtml='<div id="dj-mask"></div>';								
								$(maskHtml).appendTo("body");
								djMaskDomLoaded=$("#dj-mask");
								djMaskDomLoaded.css(this.maskBackgroundCss());
				},
			show:function(){//展示遮罩
				this.init();
				djMaskDomLoaded.show();
			},
			hide:function(){//关闭遮罩
				djMaskDomLoaded.remove();
			},			
			loading:function(option){//加载中...
				if(option=="close"){
					djMaskDomLoaded.remove();
				}
				else{					
					this.show();
					djMaskDomLoaded.css($.extend({},{"z-index":"999999"}));
					var loadingDom='<img class="dj-mask-loading-img-'+Math.floor(Math.random()*1000000)+'"/>',
//					imgUrl=ROOT_PATH+"/pages/css/images/loading.gif",//设置loading的路径				
					loadingDomLoaded=$(loadingDom).attr("src",imgUrl);
					loadingDomLoaded.css({
						"position":"fixed",
						"top":this.common.windowH/2,
						"left":this.common.windowW/2,					
						"z-index":"300"
					})
					.appendTo(djMaskDomLoaded);
				}
			},
			closeAll:function(){				
					$("[class^=dj-mask-]").remove();
					$("[id^=dj-mask]").remove();			
			},
			msg:function(message){//消息提示
				if(message==undefined||message=="") return false;
				var msgDom='<div class="dj-msg-number-'+Math.floor(Math.random()*1000000)+'"></div>';					
				$(msgDom).css({
					"overflow":"hidden",
					"background":"rgba(0,0,0,.5)",
					"border-radius":"4px",
					"position": "fixed",
					"top":$(window).height()/2.5+"px",
					"left":$(window).width()/2+"px",	
					"padding":"15px",
					"color":"#fff",
					"z-index":"999999",
					"display":"none",
					"max-width":"200px",
					"word-break":"break-all"
				}).appendTo("body").html(message);
				var msgDomLoaded=$("."+$(msgDom).attr("class"));//获取设置样式后的msg元素
				msgDomLoaded.css({//消息居中
					"margin-left":"-"+msgDomLoaded.width()/2+"px",
					"margin-top":"-"+msgDomLoaded.height()/2+"px",
				}).fadeIn();
				setTimeout(function(){
					$("."+$(msgDom).attr("class")).remove();
				},1500)
			},
			alertMask:function(){//弹框遮罩				
				var alertMaskHtml='<div id="dj-mask-alert"></div>';								
				$(alertMaskHtml).appendTo("body");
				alertMaskDomLoaded=$("#dj-mask-alert");
				alertMaskDomLoaded.css($.extend(this.maskBackgroundCss(),{"z-index":"200"}));
			},
			alert:function(message,callback){//弹框提醒				
				if(message==""||message==undefined) return false;
				this.alertMask();
				alertMaskDomLoaded.show(); 
				var alertDom='<div class="dj-mask-alert-'+Math.floor(Math.random()*1000000)+'"></div>';
				$(alertDom).css({
					"width":"200px",
					"overflow":"hidden",
					"border":"1px solid #ddd",					
					"z-index":"300",
					"background":"#fff",
					"border-radius":"4px",
					"position": "fixed",
					"top":$(window).height()/2.5+"px",
					"left":$(window).width()/2+"px",	
				}).appendTo("body");
				var alertDomLoaded=$("."+$(alertDom).attr("class"));
				alertDomLoaded.css({
					"margin-left":"-"+alertDomLoaded.width()/2+"px",
					"margin-top":"-"+alertDomLoaded.height()/2+"px",
				})
				.append('<div style="height:30px;border-bottom:1px solid #ddd;line-height:30px;padding-left:10px;font-size:14px;color:#666;background:#ebebeb">提示<a style="float:right;margin-right:10px;cursor:pointer;color:#C0C0C0" class="dj-alert-close">X</a></div>')
				.append('<div style="font-size:13px;color:#333;padding:10px;overflow:hidden;word-break:break-all" class="dj-alert-content"></div>')
				.append('<a style="display:block;width:50px;height:25px;line-height:25px;color:#666;border:1px solid #ccc;text-align:center;border-radius:4px;background:#428bca;color:#fff;cursor:pointer;float:right;margin:5px" class="dj-alert-ok">确定</a>');
				$(".dj-alert-content").html(message);
				$(document).on("click",".dj-alert-close",function(){//关闭窗口
					alertDomLoaded.remove();
					alertMaskDomLoaded.remove();
				})
				.on("click",".dj-alert-ok",function(){
					if(callback)  callback();//有回调函数执行函数内容
					alertDomLoaded.remove();
					alertMaskDomLoaded.remove();
				})
			},
			openMask:function(){//自定义弹窗遮罩				
				var openMaskHtml='<div id="dj-mask-open"></div>';								
				$(openMaskHtml).appendTo("body");
				openMaskDomLoaded=$("#dj-mask-open");
				openMaskDomLoaded.css($.extend(this.maskBackgroundCss(),{"z-index":"150"}));
			},
			open:function(options,callback){//自定义弹窗内容
				var config={
					width:"400px",
					height:"300px",
					title:"提示",
					content:"<div>loading.......</div>"
				},
				me=$.extend(config, options);
				this.openMask();
				openMaskDomLoaded.show();
				var contentDom='<div class="dj-mask-content-'+Math.floor(Math.random()*1000000)+'"></div>';
				$(contentDom).css({
					"width":me.width,
					"height":me.height,
					"overflow":"hidden",
					"border":"1px solid #ddd",					
					"z-index":"150",
					"background":"#fff",
					"border-radius":"4px",
					"position": "absolute",
					"top": "50%",
				    "left": "50%",
				    "transform": "translate( -50%, -50% )",
				    "-webkit-transform": "translate( -50%, -50% )",
				    "-ms-transform": "translateX(-50%) translateY(-50%)"	
				}).appendTo("body");
				var contentDomLoaded=$("."+$(contentDom).attr("class"));
				contentDomLoaded.append('<div style="height:30px;border-bottom:1px solid #ddd;line-height:30px;padding-left:10px;font-size:14px;color:#666;background:#ebebeb">'+me.title+'<a style="float:right;margin-right:10px;cursor:pointer" class="dj-content-close">X</a></div>')
				.append('<div style="font-size:13px;color:#333;padding:10px;overflow:hidden;word-break:break-all" class="dj-content-content"></div>');
				$(".dj-content-content").html(me.content);
				$(document).on("click",".dj-content-close",function(){//关闭窗口
					if(callback)  callback();//有回调函数执行函数内容
					contentDomLoaded.remove();
					openMaskDomLoaded.remove();
				})
			}
		}