(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("userModify");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","280","70","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 성");
            this.addChild(obj.name, obj);

            obj = new Edit("userFirstName","360","70","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","280","121","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("아이디");
            this.addChild(obj.name, obj);

            obj = new Edit("userId","360","121","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maxlength("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","280","171","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            this.addChild(obj.name, obj);

            obj = new Edit("userPw","360","171","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_password("true");
            obj.set_maxlength("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","280","221","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("연락처");
            this.addChild(obj.name, obj);

            obj = new Edit("userPhoneM","450","221","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","280","270","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("자택 연락처");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","280","320","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("개인 이메일");
            this.addChild(obj.name, obj);

            obj = new Edit("emailLocal","360","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","280","371","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("자택주소");
            this.addChild(obj.name, obj);

            obj = new Edit("userZipCode","360","371","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","280","501","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("소속부서");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","280","541","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("직급");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","280","581","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("직책");
            this.addChild(obj.name, obj);

            obj = new Edit("userAddr","360","411","480","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("userAddrDetail","360","451","480","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","610","70","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("사용자 이름");
            this.addChild(obj.name, obj);

            obj = new Edit("userMiddleName","690","70","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","610","171","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("비밀번호 확인");
            this.addChild(obj.name, obj);

            obj = new Edit("userPwChk","690","171","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_password("true");
            obj.set_maxlength("15");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","518","371","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("우편번호 검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","480","660","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","600","660","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Combo("userDept","360","501","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var userDept_innerdataset = new nexacro.NormalDataset("userDept_innerdataset", obj);
            userDept_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">::: 부서 선택 :::</Col><Col id=\"codecolumn\">default</Col></Row><Row><Col id=\"datacolumn\">경영지원</Col><Col id=\"codecolumn\">경영지원</Col></Row><Row><Col id=\"datacolumn\">기술영업</Col><Col id=\"codecolumn\">기술영업</Col></Row><Row><Col id=\"datacolumn\">AI빅데이터</Col><Col id=\"codecolumn\">AI빅데이터</Col></Row><Row><Col id=\"datacolumn\">회계경리</Col><Col id=\"codecolumn\">회계경리</Col></Row><Row><Col id=\"datacolumn\">물류생산</Col><Col id=\"codecolumn\">물류생산</Col></Row></Rows>");
            obj.set_innerdataset(userDept_innerdataset);
            obj.set_text("::: 부서 선택 :::");
            obj.set_value("::: 부서 선택 :::");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("userRank","360","541","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var userRank_innerdataset = new nexacro.NormalDataset("userRank_innerdataset", obj);
            userRank_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">::: 직급 선택 :::</Col><Col id=\"codecolumn\">default</Col></Row><Row><Col id=\"datacolumn\">대표이사</Col><Col id=\"codecolumn\">대표이사</Col></Row><Row><Col id=\"datacolumn\">전무이사</Col><Col id=\"codecolumn\">전무이사</Col></Row><Row><Col id=\"datacolumn\">이사</Col><Col id=\"codecolumn\">이사</Col></Row><Row><Col id=\"datacolumn\">부장</Col><Col id=\"codecolumn\">부장</Col></Row><Row><Col id=\"datacolumn\">차장</Col><Col id=\"codecolumn\">차장</Col></Row><Row><Col id=\"datacolumn\">과장</Col><Col id=\"codecolumn\">과장</Col></Row><Row><Col id=\"datacolumn\">대리</Col><Col id=\"codecolumn\">대리</Col></Row><Row><Col id=\"datacolumn\">주임</Col><Col id=\"codecolumn\">주임</Col></Row><Row><Col id=\"datacolumn\">사원</Col><Col id=\"codecolumn\">사원</Col></Row><Row><Col id=\"datacolumn\">인턴</Col><Col id=\"codecolumn\">인턴</Col></Row></Rows>");
            obj.set_innerdataset(userRank_innerdataset);
            obj.set_text("::: 직급 선택 :::");
            obj.set_value("::: 직급 선택 :::");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("userPosition","360","581","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var userPosition_innerdataset = new nexacro.NormalDataset("userPosition_innerdataset", obj);
            userPosition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">default</Col><Col id=\"datacolumn\">::: 직책 선택 :::</Col></Row><Row><Col id=\"datacolumn\">CEO</Col><Col id=\"codecolumn\">CEO</Col></Row><Row><Col id=\"datacolumn\">파트장</Col><Col id=\"codecolumn\">파트장</Col></Row><Row><Col id=\"datacolumn\">본부장</Col><Col id=\"codecolumn\">본부장</Col></Row><Row><Col id=\"datacolumn\">팀장</Col><Col id=\"codecolumn\">팀장</Col></Row><Row><Col id=\"datacolumn\">팀원</Col><Col id=\"codecolumn\">팀원</Col></Row><Row><Col id=\"datacolumn\">수석연구원</Col><Col id=\"codecolumn\">수석연구원</Col></Row><Row><Col id=\"datacolumn\">책임연구원</Col><Col id=\"codecolumn\">책임연구원</Col></Row><Row><Col id=\"datacolumn\">선임연구원</Col><Col id=\"codecolumn\">선임연구원</Col></Row><Row><Col id=\"datacolumn\">주임연구원</Col><Col id=\"codecolumn\">주임연구원</Col></Row><Row><Col id=\"datacolumn\">연구원</Col><Col id=\"codecolumn\">연구원</Col></Row></Rows>");
            obj.set_innerdataset(userPosition_innerdataset);
            obj.set_text("::: 직책 선택 :::");
            obj.set_value("::: 직책 선택 :::");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("userPhoneL","540","220","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Combo("userPhoneF","360","220","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var userPhoneF_innerdataset = new nexacro.NormalDataset("userPhoneF_innerdataset", obj);
            userPhoneF_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">010</Col><Col id=\"codecolumn\">010</Col></Row><Row><Col id=\"datacolumn\">011</Col><Col id=\"codecolumn\">011</Col></Row><Row><Col id=\"datacolumn\">016</Col><Col id=\"codecolumn\">016</Col></Row><Row><Col id=\"datacolumn\">017</Col><Col id=\"codecolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"datacolumn\">019</Col><Col id=\"codecolumn\">019</Col></Row></Rows>");
            obj.set_innerdataset(userPhoneF_innerdataset);
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","440","221","7","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","530","221","7","25",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("userHomePhoneM","450","271","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("userHomePhoneL","540","270","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Combo("userHomePhoneF","360","270","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var userHomePhoneF_innerdataset = new nexacro.NormalDataset("userHomePhoneF_innerdataset", obj);
            userHomePhoneF_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">02</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"datacolumn\">031</Col><Col id=\"codecolumn\">031</Col></Row><Row><Col id=\"datacolumn\">032</Col><Col id=\"codecolumn\">032</Col></Row><Row><Col id=\"datacolumn\">042</Col><Col id=\"codecolumn\">042</Col></Row><Row><Col id=\"datacolumn\">044</Col><Col id=\"codecolumn\">044</Col></Row><Row><Col id=\"datacolumn\">051</Col><Col id=\"codecolumn\">051</Col></Row><Row><Col id=\"datacolumn\">052</Col><Col id=\"codecolumn\">052</Col></Row><Row><Col id=\"datacolumn\">062</Col><Col id=\"codecolumn\">062</Col></Row><Row><Col id=\"datacolumn\">063</Col><Col id=\"codecolumn\">063</Col></Row><Row><Col id=\"datacolumn\">064</Col><Col id=\"codecolumn\">064</Col></Row></Rows>");
            obj.set_innerdataset(userHomePhoneF_innerdataset);
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","440","271","7","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","530","271","7","25",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","467","321","13","25",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Edit("emailDomain","484","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Combo("selectDomain","594","320","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var selectDomain_innerdataset = new nexacro.NormalDataset("selectDomain_innerdataset", obj);
            selectDomain_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">직접입력</Col><Col id=\"codecolumn\">default</Col></Row><Row><Col id=\"datacolumn\">daum.com</Col><Col id=\"codecolumn\">daum.com</Col></Row><Row><Col id=\"datacolumn\">gmail.com</Col><Col id=\"codecolumn\">gmail.com</Col></Row><Row><Col id=\"datacolumn\">hanmail.net</Col><Col id=\"codecolumn\">hanmail.net</Col></Row><Row><Col id=\"datacolumn\">naver.com</Col><Col id=\"codecolumn\">naver.com</Col></Row><Row><Col id=\"datacolumn\">outlook.com</Col><Col id=\"codecolumn\">outlook.com</Col></Row><Row><Col id=\"datacolumn\">yahoo.com</Col><Col id=\"codecolumn\">yahoo.com</Col></Row></Rows>");
            obj.set_innerdataset(selectDomain_innerdataset);
            obj.set_text("직접입력");
            obj.set_value("직접입력");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("firstNameValid","360","100","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("정확한 값을 입력하세요.");
            obj.set_visible("false");
            obj.set_color("crimson");
            this.addChild(obj.name, obj);

            obj = new Static("MiddleNameValid","691","100","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("정확한 값을 입력하세요.");
            obj.set_visible("false");
            obj.set_color("crimson");
            this.addChild(obj.name, obj);

            obj = new Static("pwVaild","360","200","480","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj.set_color("crimson");
            obj.set_text("비밀번호는 연속, 반복되지 않은 8~15자리의 영문, 숫자, 특문 조합으로 작성해주세요.");
            this.addChild(obj.name, obj);

            obj = new Static("pwChkFail","360","200","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_visible("false");
            obj.set_color("crimson");
            obj.set_text("비밀번호 확인이 일치하지 않습니다.");
            this.addChild(obj.name, obj);

            obj = new Static("pwChkPass","360","200","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_visible("false");
            obj.set_color("forestgreen");
            obj.set_text("비밀번호 확인이 일치합니다.");
            this.addChild(obj.name, obj);

            obj = new Static("emailVaild","360","350","208","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_visible("false");
            obj.set_color("crimson");
            obj.set_text("이메일을 형식을 맞추어 작성해주세요.");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","-6","-8","216","908",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            var Menu00_innerdataset = new nexacro.NormalDataset("Menu00_innerdataset", obj);
            Menu00_innerdataset._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(Menu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static02","48","90","162","112",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("사용자 목록       >");
            obj.set_color("cornsilk");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_border("2px none crimson");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","48","202","162","100",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("사용자 등록       >");
            obj.set_color("cornsilk");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Edit("userPhone","625","220","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("userHomePhone","625","270","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("userEmail","708","320","142","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","userFirstName","value","Dataset01","userFirstName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","userMiddleName","value","Dataset01","userMiddleName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","userId","value","Dataset01","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","userPw","value","Dataset01","userPw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","userPhone","value","Dataset01","userPhone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","userHomePhone","value","Dataset01","userHomePhone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","userEmail","value","Dataset01","userEmail");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","userZipCode","value","Dataset01","userZipCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","userAddr","value","Dataset01","userAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","userAddrDetail","value","Dataset01","userAddrDetail");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","userDept","value","Dataset01","userDept");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","userRank","value","Dataset01","userRank");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","userPosition","value","Dataset01","userPosition");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("userModify.xfdl", function() {
        this.Static02_onclick = function(obj,e)
        {
        	var confirm = this.confirm("작성하던 내용을 삭제하고 이동하시겠습니까?");
        	if(confirm){
        		this.go("Base::userList.xfdl");
        	}
        };

        this.Static02_00_onclick = function(obj,e)
        {
        	var confirm = this.confirm("작성하던 내용을 삭제하고 이동하시겠습니까?");
        	if(confirm){
        		this.go("Base::userReg.xfdl");
        	}
        };

        this.userModify_onbindingvaluechanged = function(obj,e)
        {
        	var phone = this.userPhone.value;
        	this.userPhoneF.set_value(phone.substring(0, 3));
        	this.userPhoneM.set_value(phone.substring(3, 7));
        	this.userPhoneL.set_value(phone.substring(7, 12));

        	var homePhone = this.userHomePhone.value;
        	if(homePhone.substr(0, 2) == 02){
        		this.userHomePhoneF.set_value(homePhone.substring(0, 2));
        		this.userHomePhoneM.set_value(homePhone.substring(2, 5));
        		this.userHomePhoneL.set_value(homePhone.substring(5, 9));
        	}else{
        		this.userHomePhoneF.set_value(homePhone.substring(0, 3));
        		this.userHomePhoneM.set_value(homePhone.substring(3, 6));
        		this.userHomePhoneL.set_value(homePhone.substring(6, 10));
        	}

        	var email = this.userEmail.value;
        	var arr = [];
        	arr = email.split("@");
        	this.emailLocal.set_value(arr[0]);
        	this.emailDomain.set_value(arr[1]);
        	this.selectDomain.set_value(arr[1]);

        };

        this.selectDomain_onitemchanged = function(obj,e)
        {
        	if(this.selectDomain.value == "default"){
        		this.emailDomain.set_value("")
        		this.emailDomain.set_readonly(false);
        	}else{
        		this.emailVaild.set_visible(false);
        		this.emailDomain.set_value(this.selectDomain.value);
        		this.emailDomain.set_readonly(true);
        	}

        };

        this.userFirstName_onkeyup = function(obj,e)
        {
        	if(this.userFirstName.value == "" || this.userFirstName.value == null){
        		this.firstNameValid.set_visible(false);
        	}else{
        		var result = fn_name_vaild(this.userFirstName.value);
        		if(result == 1){
        			this.firstNameValid.set_visible(false);
        		}else{
        			this.firstNameValid.set_visible(true);
        		}
        	}
        };

        this.userMiddleName_onkeyup = function(obj,e)
        {
        	if(this.userMiddleName.value == "" || this.userMiddleName.value == null){
        		this.MiddleNameValid.set_visible(false);
        	}else{
        		var result = fn_name_vaild(this.userMiddleName.value);
        		if(result == 1){
        			this.MiddleNameValid.set_visible(false);
        		}else{
        			this.MiddleNameValid.set_visible(true);
        		}
        	}
        };

        this.userPw_onkeyup = function(obj,e)
        {
        	if(this.userPw.value == "" || this.userPw.value == null){
        		this.pwChkFail.set_visible(false);
        		this.pwChkPass.set_visible(false);
        		this.pwVaild.set_visible(false);
        	}else{
        		var result = fn_pw_vaild(this.userPw.value);
        		if(result == 1){
        			if(this.userPwChk.value == "" || this.userPwChk.value == null){
        				this.pwChkFail.set_visible(false);
        				this.pwChkPass.set_visible(false);
        				this.pwVaild.set_visible(false);
        			}else{
        				if(this.userPwChk.value == this.userPw.value){
        					this.pwChkFail.set_visible(false);
        					this.pwChkPass.set_visible(true);
        					this.pwVaild.set_visible(false);
        				}else{
        					this.pwChkFail.set_visible(true);
        					this.pwChkPass.set_visible(false);
        					this.pwVaild.set_visible(false);
        				}
        			}
        		}else{
        			this.pwChkFail.set_visible(false);
        			this.pwChkPass.set_visible(false);
        			this.pwVaild.set_visible(true);
        		}
        	}
        };

        this.userPwChk_onkeyup = function(obj,e)
        {
        	if(this.userPwChk.value == "" || this.userPwChk.value == null){
        		this.pwChkFail.set_visible(false);
        		this.pwChkPass.set_visible(false);
        	}else{
        		if(this.pwVaild.visible == false){
        			if(this.userPwChk.value == this.userPw.value){
        				this.pwChkFail.set_visible(false);
        				this.pwChkPass.set_visible(true);
        			}else{
        				this.pwChkFail.set_visible(true);
        				this.pwChkPass.set_visible(false);
        			}
        		}
        	}
        };

        this.emailLocal_onkeyup = function(obj,e)
        {
        	if(this.emailLocal.value == "" || this.emailLocal.value == null){
        		this.emailVaild.set_visible(false);
        	}else{
        		var localVal = this.emailLocal.value;
        		var domainVal = this.emailDomain.value;
        		var result = fn_email_vaild(localVal, domainVal);
        		if(result == 1){
        			this.emailVaild.set_visible(false);
        		}else{
        			this.emailVaild.set_visible(true);
        		}
        	}
        };

        this.emailDomain_onkeyup = function(obj,e)
        {
        	if(this.emailDomain.value == "" || this.emailDomain.value == null){
        		if(this.emailVaild.visible != true){
        			this.emailVaild.set_visible(false);
        		}
        	}else{
        		var localVal = this.emailLocal.value;
        		var domainVal = this.emailDomain.value;
        		var result = fn_email_vaild(localVal, domainVal);
        		if(result == 1){
        			this.emailVaild.set_visible(false);
        		}else{
        			this.emailVaild.set_visible(true);
        		}
        	}
        };


        fn_name_vaild = function(value){
        	console.log(value);
        	var name = new RegExp("[^가-힣\x20]");
        	var result = 0;
        	if(name.exec(value) == null){
        		result = 1;
        	}else{
        		result = 0;
        	}
        	return result;
        }

        fn_pw_vaild = function(value){
        	console.log(value);
        	var pw = new RegExp("^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&+=]).{8,15}$");
        	var tmp = ""; // 반복
        	var cnt = 0; // 반복
        	var cntc = 0; // 연속
        	var cntc2 = 0; // 연속
        	var tmpc = ""; // 연속
        	var tmpc2 = ""; // 연속
        	var tmpc3 = ""; // 연속
        	var result = 0;

        	// 반복
        	for(i = 0; i < value.length; i++){
        		tmp = value.charAt(i);
        		if(tmp == value.charAt(i+1) && tmp == value.charAt(i+2)){
        			cnt = cnt + 1;
        		}
        	}

        	// 연속
        	for(i = 0; i < value.length; i++){
        		tmpc = value.charAt(i);
        		tmpc2 = value.charAt(i+1);
        		tmpc3 = value.charAt(i+2);
        		if(tmpc.charCodeAt(0) - tmpc2.charCodeAt(0) == 1 && tmpc2.charCodeAt(0) - tmpc3.charCodeAt(0) == 1){
        			cntc = cntc + 1;
        		}
        		if(tmpc.charCodeAt(0) - tmpc2.charCodeAt(0) == -1 && tmpc2.charCodeAt(0) - tmpc3.charCodeAt(0) == -1){
        			cntc2 = cntc2 + 1;
        		}
        	}

        	if(pw.exec(value) == null || cnt > 0 || cntc > 0 || cntc2 > 0){
        		result = 0;
        	}else if(pw.exec(value) != null && cnt == 0 && cntc == 0 && cntc2 == 0){
        		result = 1;
        	}
        	return result;
        }

        fn_email_vaild = function(localVal, domainVal){
        	var local = new RegExp("^[a-z]+[a-z0-9]{4,}");
        	var domain = new RegExp("^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}");
        	var result = 0;
        	if(localVal != null && domainVal != null){
        		if(local.exec(localVal) == null || domain.exec(domainVal) == null){
        			result = 0;
        		}else{
        			result = 1;
        		}
        		return result;
        	}

        }

        this.Button03_onclick = function(obj,e)
        {
        	var oArg = {
        				};

        	//modal popup open call
        	this.gfn_showModal("popupPostcode", oArg, "Base::postcodedaumapi_popup.xfdl", "popupCallBack", this, 650, 100, 600, 470);
        };

        this.gfn_showModal = function (sPopupId, arrArguments, sPopupUrl, popupCallback, obj, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight)
        {
        	// child frame 생성
        	var childFrame = new ChildFrame();

        	// parent frame 정의
        	var parentFrame = obj.getOwnerFrame();

        	//child frame 초기화
        	childFrame.init(sPopupId, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight, null, null, sPopupUrl);

        	// Modal Dialog 추가 옵션
        	//autosize default true
        	childFrame.set_autosize(false);
        	//statusbar default true
        	childFrame.set_showtitlebar(false);

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, arrArguments, obj, popupCallback, true);
        };

        this.popupCallBack = function(sFormId, sArg)
        {

        	if(sFormId=="popupPostcode")
        	{
        		if(this.gfn_isNull(sArg))
        		{
        			this.userZipCode.set_value(this.postcode);
        			this.userAddr.set_value(this.address1);
        		}

        		//sArg == 'x' : 닫기버튼 클릭
        	}
        }

        this.gfn_isNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        }

        this.Button05_onclick = function(obj,e)
        {
        	var confirm = this.confirm("등록을 취소하시겠습니까?");
        	if(confirm){
        		this.go("Base::userList.xfdl");
        	}
        };

        this.Button04_onclick = function(obj,e)
        {
        	var phoneM = this.userPhoneM.value;
        	var phoneL = this.userPhoneL.value;
        	var homePhoneM = this.userHomePhoneM.value;
        	var homePhoneL = this.userHomePhoneL.value;

        	if(this.userFirstName.value == null || this.userFirstName.value == ""){
        		alert("이름을 입력해주세요.");
        		return false;
        	}else if(this.userMiddleName.value == null || this.userMiddleName.value == ""){
        		alert("이름을 입력해주세요.");
        		return false;
        	}else if(this.firstNameValid.visible == true || this.MiddleNameValid.visible == true){
        		alert("이름을 정확히 입력해주세요.");
        		return false;
        	}else if(this.userPw.value == null || this.userPw.value == ""){
        		alert("비밀번호를 입력해주세요.");
        		return false;
        	}else if(this.pwVaild.visible == true){
        		alert("비밀번호를 형식에 맞춰 입력해주세요.");
        		return false;
        	}else if(this.userPwChk.value == null || this.userPwChk.value == ""){
        		alert("비밀번호 확인란을 입력해주세요.");
        		return false;
        	}else if(this.userPw.value != this.userPwChk.value){
        		alert("비밀번호 확인이 일치하지 않습니다.");
        		return false;
        	}else if(this.userPhoneF.value == null || this.userPhoneM.value == ""){
        		alert("연락처를 입력해주세요.");
        		return false;
        	}else if(this.userPhoneM.value == null || this.userPhoneM.value == ""){
        		alert("연락처를 입력해주세요.");
        		return false;
        	}else if(this.userPhoneL.value == null || this.userPhoneL.value == ""){
        		alert("연락처를 입력해주세요.");
        		return false;
        	}else if(this.userHomePhoneF.value == null || this.userHomePhoneM.value == ""){
        		alert("연락처를 입력해주세요.");
        		return false;
        	}else if(this.userHomePhoneM.value == null || this.userHomePhoneM.value == ""){
        		alert("연락처를 입력해주세요.");
        		return false;
        	}else if(this.userHomePhoneL.value == null || this.userHomePhoneL.value == ""){
        		alert("연락처를 입력해주세요.");
        		return false;
        	}else if(phoneM.length < 4 || phoneL.length < 4 || homePhoneM.length < 3 || homePhoneL.length < 4){
        		alert("연락처를 정확히 입력해주세요.");
        		return false;
        	}else if(this.emailLocal.value == null || this.emailLocal.value == ""){
        		alert("이메일을 입력해주세요.");
        		return false;
        	}else if(this.emailDomain.value == null || this.emailDomain.value == "" || this.emailDomain.value == "default"){
        		alert("이메일을 입력해주세요.");
        		return false;
        	}else if(this.emailVaild.visible == true){
        		alert("이메일을 형식에 맞춰 작성해주세요.");
        		return false;
        	}else if(this.userZipCode.value == null || this.userZipCode.value == ""){
        		alert("주소를 입력해주세요.");
        		return false;
        	}else if(this.userAddr.value == null || this.userAddr.value == ""){
        		alert("주소를 입력해주세요.");
        		return false;
        	}else if(this.userAddrDetail.value == null || this.userAddrDetail.value == ""){
        		alert("주소를 입력해주세요.");
        		return false;
        	}else if(this.userDept.value == "default"){
        		alert("부서를 선택해주세요.");
        		return false;
        	}else if(this.userRank.value == "default"){
        		alert("직급을 선택해주세요.");
        		return false;
        	}else if(this.userPosition.value == "default"){
        		alert("직책을 선택해주세요.");
        		return false;
        	}

        	var id = "userModify";
        	var url = "userModify.do";
        	var reqDs = "";
        	var respDs = "";
        	var args = "";
        	var callback = "received";
        	var nDataType = "0";
        	var userPhoneVal = (this.userPhoneF.value + this.userPhoneM.value + this.userPhoneL.value);
        	var userHomePhoneVal = (this.userHomePhoneF.value + this.userHomePhoneM.value + this.userHomePhoneL.value);
        	var userEmailVal = (this.emailLocal.value + "@" + this.emailDomain.value);

        	args = "userFirstNameEdit=" + this.userFirstName.value + " " +
        		   "userMiddleNameEdit=" + this.userMiddleName.value + " " +
        		   "userIdEdit=" + this.userId.value + " " +
        		   "userPwEdit=" + this.userPw.value + " " +
        		   "userPhoneEdit=" + userPhoneVal + " " +
        		   "userHomePhoneEdit=" + userHomePhoneVal + " " +
        		   "userZipCodeEdit=" + this.userZipCode.value + " " +
        		   "userAddrEdit=" + this.userAddr.value + " " +
        		   "userAddrDetailEdit=" + this.userAddrDetail.value + " " +
        		   "userEmailEdit=" + userEmailVal + " " +
        		   "userPostionCombo=" + this.userPosition.value + " " +
        		   "userDeptCombo=" + this.userDept.value + " " +
        		   "userRankCombo=" + this.userRank.value;

        	this.transaction(id, url, reqDs, respDs, args, callback ,nDataType);

        	this.received = function(id, code, message, url)
        	{
        		if (code == 1) {
        			this.alert("수정 되었습니다.");
        			this.go("Base::userList.xfdl");
        		} else {
        			this.alert("실패ㅠㅠ");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onmouseenter",this.userModify_onmouseenter,this);
            this.addEventHandler("onbindingvaluechanged",this.userModify_onbindingvaluechanged,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.userFirstName.addEventHandler("onkeyup",this.userFirstName_onkeyup,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.userId.addEventHandler("onkeyup",this.userId_onkeyup,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.userPw.addEventHandler("onkeyup",this.userPw_onkeyup,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.emailLocal.addEventHandler("onkeyup",this.emailLocal_onkeyup,this);
            this.Static00_00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_onclick,this);
            this.userMiddleName.addEventHandler("onkeyup",this.userMiddleName_onkeyup,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.userPwChk.addEventHandler("onkeyup",this.userPwChk_onkeyup,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.userDept.addEventHandler("onitemchanged",this.userDept_onitemchanged,this);
            this.emailDomain.addEventHandler("onkeyup",this.emailDomain_onkeyup,this);
            this.selectDomain.addEventHandler("oninnerdatachanged",this.selectDomain_oninnerdatachanged,this);
            this.selectDomain.addEventHandler("onitemchanged",this.selectDomain_onitemchanged,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00.addEventHandler("onclick",this.Static02_00_onclick,this);
        };
        this.loadIncludeScript("userModify.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
