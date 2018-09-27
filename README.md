<b>使用方法：</b>

(1).打开遮罩<br>

打开遮罩：DJMask.show()<br>


(2).关闭遮罩<br>

关闭遮罩：DJMask.closeAll()<br>

(3).等待动画<br>

打开等待动画：DJMask.loading()<br>

关闭等待动画：DJMask.loading("close")<br>

(4).信息提示<br>

信息提示：DJMask.msg("你好！")<br>

(5).alert提醒<br>

alert提醒：DJMask.alert("你好,Mo")<br>

单击确定按钮执行回调函数：<br>

	DJMask.alert("你好,Mo",function(){<br>
	  DJMask.msg("你点击了确定")<br>
	});<br>

(6).弹出框<br>

默认弹出：DJMask.open()<br>

参数配置：<br>

DJMask.open({<br>
		　　width:"500px",<br>
		　　height:"300px",<br>
		　　title:"你好，DJMask",<br>
		　　content:"欢迎使用DJMask"<br>
	　　});<br>
注：content里可以是文本、DOM元素、或者iframe等。<br>
