<?php include('inc/head.php');?>
<div id="wrapper">
	<?php include('inc/header.php');?>
	<?php include('inc/nav.php');?>
	<div id="content">
	<!--------------------------------------------nBox----------------------------------------------->
		<input id="date" type="text" placeholder="choose date"></div>
		<!--------------------------------------------nBox--------------------------------------------->
		<div class="nImgBox">
			<a href="images/nslider01.jpg" class="group01"><img src="images/n1.jpg"  alt=""></a>
			<a href="images/nslider02.jpg" class="group01"><img src="images/n2.jpg"  alt=""></a>
		</div>
		<div class="nImgBox">
			<a href="images/1.jpg" class="group02"><img src="images/n1.jpg"  alt=""></a>
			<a href="images/2.jpg" class="group02"><img src="images/n2.jpg"  alt=""></a>
			<a href="images/3.jpg" class="group02"><img src="images/n3.jpg"  alt=""></a>
		</div>
		<div class="nImgBox">
			<a href="images/nslider03.jpg" class="single01"><img src="images/n1.jpg"  alt=""></a>
			<a href="images/lb03.jpg" class="single02"><img src="images/n2.jpg"  alt=""></a>
		</div>

		<!--------------------------------------------pageTop--------------------------------------------->
		<a href="" class="pageTop">pageTop</a>
		<!-----------------------------------hover image _off to _on-------------------------------------->
		<a href="#"><img src="images/n_off.jpg" alt="" width="200px" /></a>
		<!----------------------------------change img to img_sp------------------------------------------>
		<img src="images/landing_page2.png" alt="" class="sp" id="to"/>
		<!----------------------------------imgReplace _pc _sp ------------------------------------------->
		<img src="images/test_pc.jpg" alt="" id="from"/>
		<!----------------------------------scroll-------------------------------------------------------->
		<div id="scroll"> <a href="#div01">link to div01</a>
			<div id="div01"> content div 01 </div>
			<!--div01-->
		</div>
		<!--/#scroll-->
		<p class="tel">0974487944</p>
		<!---------------------------------lightbox(css,js)-------------------------------------------------->
		<div> <a href="images/lightbox.jpg" data-lightbox="single" data-title="My caption">lightbox</a> <br/>
			<a href="images/lb02.jpg" data-lightbox="group">Image #2</a> <a href="images/lb03.jpg" data-lightbox="group">Image #3</a> <a href="images/lb04.jpg" data-lightbox="group">Image #4</a> </div>
		<!-------------------------------------modal-box(css)------------------------------------------------>
		<button id="modal-button">modal button</button>
		<div id="login-box"> <a href="" class="close">X</a>
			<h3>LOGIN</h3>
			<div class="content">
				<form action="" method="post">
					Username:
					<input type="text" name="txtUser" size="40"/>
					<br/> Password:
					<input type="password" name="txtPass" size="40"/>
					<br/>
					<input type="submit" name="btnLogin" value="Đăng nhập"/>
				</form>
			</div>
		</div>
		<div id="modal-background"> </div>
		<!-------------------------------------nMatchHeight(js,css)------------------------------------------->
		<div class="clearfix">
			<div class="nMatchHeight">equalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeight</div>
			<div class="nMatchHeight"><img src="images/dc1_lo.gif" alt=""/>
			</div>
			<div class="nMatchHeight">equalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeightequalHeight</div>
			<div class="nMatchHeight">equalHeightequalHeight</div>

		</div>
		<div class="nMatchHeight02">aaaa</div>
		<div class="nMatchHeight02">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</div>
		<div class="matchChild">
			<p>matchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChild</p>
			<p>matchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChildmatchChild</p>
			<p>matchChildmatchChildmhildmatchChildmatchChildmatchChildmatchChildmatchChild</p>
			<li><img src="images/nslider01.jpg" alt=""/>
			</li>

		</div>
		<!--/.clear-fix-->
		<!---------------------------------js_add_transition------------------------------------------------->
		<div class="center trans"><img src="images/1.jpg">
		</div>
		<!--------------------------------------clear css --------------------------------------------------->
		<div>
			<p style="float: left; width: 500px; border: 1px solid red;">aaa</p>
			<p style="float: left; width: 400px; border: 1px solid red;">bbb</p>
			<p style="clear:both"></p>
			<p style="border: 1px solid red;">cleared</p>
		</div>
		<!---------------------------find objects follow for loop------------------------------------------->
		<div class="products" id="anchor01">
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li>10</li>
			</ul>
		</div>
		<!---------------------------nSlider------------------------------------------->
		<ul class="nSlider mb30">
			<li><img src="images/dc1_lo.gif" alt=""/>
			</li>
			<li><img src="images/dc2_lo.gif" alt=""/>
			</li>
			<li><img src="images/dc3_lo.gif" alt=""/>
			</li>
			<li><img src="images/dc4_lo.gif" alt=""/>
			</li>
			<li><img src="images/dc5_lo.gif" alt=""/>
			</li>
			<li><img src="images/nslider01.jpg" alt=""/>
			</li>
			<!--<li><img src="images/slide01.jpg"  alt="" /></li>
            <li><img src="images/slide02.jpg"  alt="" /></li>
            <li><img src="images/slide03.jpg"  alt="" /></li>
            <li><img src="images/slide04.gif"  alt="" /></li>
            <li><img src="images/slide05.gif"  alt="" /></li>
            <li><img src="images/slide06.gif"  alt="" /></li> -->
		</ul>
		<div class="slider mb30">
			<p><img src="images/slide01.jpg" alt=""/>
			</p>
			<p><img src="images/slide02.jpg" alt=""/>
			</p>
			<p><img src="images/slide03.jpg" alt=""/>
			</p>
			<!--<li><img src="images/slide04.gif"  alt="" /></li>
            <li><img src="images/slide05.gif"  alt="" /></li>
            <li><img src="images/slide06.gif"  alt="" /></li> -->
		</div>

		<!--------------------------------------------fadein while scroll-------------------------------->
		<div class="fadeInScroll">
			<div>Hello</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
			<div class="hideme">Fade In</div>
		</div>
		<!--------------------------------------------<div class="subject">animation in view</div>-------------------------------->
		<div class="animation-element bounce-up cf"><div class="subject">animation in view</div></div>
		<div class="animation-element bounce-up cf"><div class="subject">animation in view</div></div>
		<div class="animation-element bounce-up cf"><div class="subject">animation in view</div></div>
		<div class="animation-element bounce-up cf"><div class="subject">animation in view</div></div>
		<p class="textHover">hover</p>
		<!-------------------------------------key event----------------------------------------------------->
		<!---------------------------------------AJAX-------------------------------------------------------->
		<form id="formAjax">
			<input type="text" name="name" id="name"/>
			<input type="password" name="password" id="pw"/>
			<input type="submit" name="clickme" id="clickme" value="Click Me"/>
		</form>
		<div id="result">
			// Nội dung ajax sẽ được load ở đây
		</div>


		<?php
		for ( $i = 1; $i <= 9; $i++ ) {
			for ( $j = 1; $j <= 9; $j++ ) {
				echo '[' . $j . ']';
				if ( $j % 3 == 0 ) {
					echo '<br />';
				}
			}
		}
		echo '<br />';
		?>


		<!---------------------------------------------------------------------------------------------------->
	</div>
	<!-- end content-->
	<?php include('inc/footer.php');?>
	<script>
		$( document ).ready( function () {
			$( '.noScroll' ).click( function () {

				return false;
			} );
		} );
	</script>
