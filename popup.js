$(document).ready(function(){

	// 상단 즐겨찾기 버튼
	$("#bookmark").click(function(){
    	strTitle = "블로그로 | No.1 블로그마케팅 오픈마켓";
		var url = "http://www.blogro.com/";
		window.external.AddFavorite(url, strTitle);
    });


	// 캠페인 상세 이미지 갤러리
	$('#myGallery').galleryView({
		autoplay:true,
		transition_speed: 500,
		transition_interval:3000,
		panel_width:310,
		panel_height:232,
		frame_width:42,
		frame_height:32,
		show_filmstrip_nav:false,
		show_infobar:false
	
	});


	$('select').selectric();
	
	$("input, textarea").hint({
      hintClass: "hint"
    });
	
    $('#company_write_input_name').simplyCountable({
	    counter: '#counter1',
	    maxCount: 20,
	    countDirection: 'up',
	    overClass:'limitNum_over'
	});

	$('#company_write_input_campain_subject').simplyCountable({
	    counter: '#counter2',
	    maxCount: 30,
	    countDirection: 'up',
	    overClass:'limitNum_over'
	});

	//$('#company_write_input_save').iCheck('check');
	$('input').iCheck({
	    checkboxClass: 'icheckbox_square-blue',
	    radioClass: 'iradio_square-blue',
	    increaseArea: '20%',
	    cursor: true
  	});

	$( ".datepicker" ).datepicker({ dateFormat: "yy-mm-dd" });

	$('.company_write_textarea').autosize();

	// 그린리뷰 캠페인
	var img_src;
	var new_src; 
	 
	$(".green_review_agree").click(function(){
		var img_src = "";
		var new_src = "";

	   //mouseover  
	   img_src = $(this).attr('src'); //grab original image
	   new_src = $(this).attr('rel'); //grab rollover image

	   $(this).attr('src', new_src); //swap images
	   $(this).attr('rel', img_src); //swap images  
	}); 

	new $.Zebra_Tooltips($('.tooltip_txt'), {
        'background_color': '#747474',
        'color':            '#fff',
        'max_width':    750
    });



	// 전체 팝업 닫기
	$(".popup_close").click(function(){
		// 로그인 팝업 초기화
		$("#login_popup").hide();
		$('#login_member_p, #login_member_c').iCheck('uncheck');
		//$('.login_popup_memeber_check input').iCheck('destroy');
	}); 

	// 팝업 열기 - 로그인
	$(".open_popup_login").click(function(){
		$("#login_popup").show();
	}); 

	$(".open_popup_login_p").click(function(){
		$("#login_popup").show();
		$("#login_member_p").iCheck('check');
	}); 

	$(".open_popup_login_c").click(function(){
		$("#login_popup").show();
		$("#login_member_c").iCheck('check');
	}); 

	// 로그인 팝업 - ip보안 버튼
	$("#ip_security").click(function(){
		$(".popup_login_ip_secu").toggle();
	}); 

	

	// 회원가입 - 본인인증

	$("#cer_btn_phone").click(function(){
		$("#member_join_p #page #section4>#cer_phone").show();
		$("#member_join_p #page #section4>#cer_ipin").hide();
	}); 
	$("#cer_btn_ipin").click(function(){
		$("#member_join_p #page #section4>#cer_phone").hide();
		$("#member_join_p #page #section4>#cer_ipin").show();
	}); 


	// 아이디 찾기

	$("#member_id_search #id_find_btn_email").click(function(){
		$("#member_id_search #id_find_btn_email #btn_email").iCheck('check');
		$("#member_id_search .contents_email").show();
		$("#member_id_search .contents_phone").hide();
	}); 
	$("#member_id_search #id_find_btn_phone").click(function(){
		$("#id_find_btn_phone #btn_phone").iCheck('check');
		$("#member_id_search #id_find_btn_phone #btn_phone").iCheck('check');
		$("#member_id_search .contents_email").hide();
		$("#member_id_search .contents_phone").show();
	}); 

	$("#member_id_search #section2 #title_tab .btn_member_p").click(function(){
		$("#member_id_search #section2 #tab_p").show();
		$("#member_id_search #section2 #tab_c").hide();
	}); 
	$("#member_id_search #section2 #title_tab .btn_member_c").click(function(){
		$("#member_id_search #section2 #tab_p").hide();
		$("#member_id_search #section2 #tab_c").show();
	}); 

	// 패스워드 찾기

	$("#member_pw_search #section2 #title_tab .btn_member_p").click(function(){
		$("#member_pw_search #section2 #tab_p").show();
		$("#member_pw_search #section2 #tab_c").hide();
	}); 
	$("#member_pw_search #section2 #title_tab .btn_member_c").click(function(){
		$("#member_pw_search #section2 #tab_p").hide();
		$("#member_pw_search #section2 #tab_c").show();
	}); 

	$("#member_pw_search_choice #page #section2 #tab_p #pw_find_btn_email").click(function(){
		$("#member_pw_search_choice #pw_find_btn_email #btn_email").iCheck('check');
		$("#member_pw_search_choice .contents_email").show();
		$("#member_pw_search_choice .contents_phone").hide();
	}); 
	$("#member_pw_search_choice #page #section2 #tab_p #pw_find_btn_phone").click(function(){
		$("#member_pw_search_choice #pw_find_btn_phone #btn_phone").iCheck('check');
		$("#member_pw_search_choice .contents_email").hide();
		$("#member_pw_search_choice .contents_phone").show();
	}); 


});