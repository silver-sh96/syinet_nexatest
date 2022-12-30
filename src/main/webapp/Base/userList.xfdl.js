(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("userList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"아이디\" type=\"STRING\" size=\"256\"/><Column id=\"부서\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"직급\" type=\"STRING\" size=\"256\"/><Column id=\"직책\" type=\"STRING\" size=\"256\"/><Column id=\"이메일\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","690","51","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","270","50","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">userId</Col><Col id=\"datacolumn\">아이디</Col></Row><Row><Col id=\"codecolumn\">userDept</Col><Col id=\"datacolumn\">부서</Col></Row><Row><Col id=\"codecolumn\">userName</Col><Col id=\"datacolumn\">이름</Col></Row><Row><Col id=\"codecolumn\">userRank</Col><Col id=\"datacolumn\">직급</Col></Row><Row><Col id=\"codecolumn\">userPosition</Col><Col id=\"datacolumn\">직책</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("부서");
            obj.set_value("userDept");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","380","50","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","810","51","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","900","51","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","990","50","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","270","100","800","400",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_treeusecheckbox("true");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" suppress=\"0\"/><Cell col=\"1\" text=\"아이디\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책\"/><Cell col=\"6\" text=\"이메일\"/><Cell col=\"7\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"expr:chk==&apos;Y&apos;?&apos;1&apos;:&apos;0&apos;\"/><Cell col=\"1\" text=\"bind:아이디\"/><Cell col=\"2\" text=\"bind:부서\"/><Cell col=\"3\" text=\"bind:이름\"/><Cell col=\"4\" text=\"bind:직급\"/><Cell col=\"5\" text=\"bind:직책\"/><Cell col=\"6\" text=\"bind:이메일\"/><Cell col=\"7\" text=\"bind:연락처\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","-6","-8","216","908",null,null,null,null,null,null,this);
            obj.set_taborder("7");
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
            obj.set_taborder("8");
            obj.set_text("사용자 목록       >");
            obj.set_color("cornsilk");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_border("2px none crimson");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","48","202","162","100",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사용자 등록       >");
            obj.set_color("cornsilk");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("userList.xfdl", function() {

        this.Static02_onclick = function(obj,e)
        {
        	this.go("Base::userList.xfdl");
        };

        this.Static02_00_onclick = function(obj,e)
        {
        	this.go("Base::userReg.xfdl");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.go("Base::userReg.xfdl");
        };

        var id = "getUserList";
        var url = "userList.do";
        var reqDs = "";
        var respDs = "Dataset00=userList";
        var args = "";
        var callback = "received";
        var nDataType = "0"

        this.transaction(id, nexacro.getApplication().CONTEXT + url, reqDs, respDs, args, callback);

        this.Button00_onclick = function(obj,e)
        {
        	var id = "getUserSearchList";
        	var url = "userList.do";
        	var reqDs = "";
        	var respDs = "Dataset00=userList";
        	var args = "";
        	var callback = "received";
        	var nDataType = "0"

        	args = "SearchCondition=" +this.Combo00.value + " " + "SearchKeyword=" + this.Edit00.value;
        	this.transaction(id, url, reqDs, respDs, args, callback ,nDataType);
        };

        var selected = [];
        this.Dataset00_oncolumnchanged = function(obj,e)
        {
        	var target = this.Dataset00.getColumn(e.row, "아이디");
        		// chk 컬럼인 경우
        	if(e.columnid == "chk") {
        		// 다른 이벤트가 동작하지 않도록 설정
        		obj.enableevent = false;  //false can stop event temporarily
        		// 변경된 값이 1(체크가 된 경우)인경우
        		if(e.newvalue == '1') {
        			// 1인 경우 Dataset의 chk 값을 Y로 변경
        			obj.setColumn(e.row,"chk",'Y');
        			// 선택 대상 push
        			selected.push(target);
        			console.log(selected, "push!");
        		} else if(e.newvalue == '0') {
        			// 0인 경우 Dataset의 chk 값을 N로 변경
        			obj.setColumn(e.row,"chk",'N');
        			// 선택해제 대상 pop
        			selected.pop(target);
        			console.log(selected, "pop!");
        		}
        		// 다시 이벤트가 정상 동작하도록 설정
        		obj.enableevent = true;
        	}
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	//this.Grid00.setCellProperty("Head","","text","1");
        	// 첫 번째 컬럼인 경우
        	trace(obj.getCellProperty("Head", 0, "text"), "!!!");

         	if (e.col == 0) {
         		// Dataset의 레코드 개수 만큼 반복
        		if(obj.getCellProperty("Head", 0, "text") == 0 || obj.getCellProperty("Head", 0, "text") == null){
        		 	for(var nRow=0; nRow < this.Dataset00.getRowCount(); nRow++) {
        				// chk 컬럼의 값을 Y로 변경
        				this.Dataset00.setColumn(nRow, "chk", 'Y');
        				obj.setCellProperty("Head", 0, "text", 1);
        			}
        		}else{
        			for(var nRow=0; nRow < this.Dataset00.getRowCount(); nRow++) {
        				// chk 컬럼의 값을 N으로 변경
        				this.Dataset00.setColumn(nRow, "chk", 'N');
        				obj.setCellProperty("Head", 0, "text", 0);
        				}
        			}
         	}

        	// 전체선택, 해제 push pop
        	var i = this.Dataset00.getRowCount();
        	for(var n  = 0 ;  n < i ; n++){
        		var target = this.Dataset00.getColumn(n,1)
        		if(this.Dataset00.getColumn(n,0) == 'Y'){
        			selected.push(target);
        			trace(selected, "push..");
        		}else{
        			selected.pop(target);
        			trace(selected, "pop..")
        		}
        	}
        // 		if (e.col == 0) {
        // 		this.clickHeadCheckBox(obj, "CHK");
        // 	}


        };

        this.clickHeadCheckBox = function (obj, strColName)
        {
        	var headerCell = 0
        	trace(headerCell);

        	var checkValue = "Y";
        	if(obj.getCellProperty("Head", headerCell, "displaytype") == "checkboxcontrol") {
        		if (obj.getCellProperty("Head", headerCell, "text") == "Y") { //현재 체크박스 값과 반대되게
        		    checkValue = "N";
        		} else {
        			checkValue = "Y";
        		}
        	}

        	obj.setCellProperty("Head", headerCell, "expr", checkValue); //헤더 체크박스 값 변경

        	var objDataset = obj.getBindDataset(); //그리드에 바인드되어있는 dataset 가져옴
        	if(objDataset.getRowCount() > 0) {
        		objDataset.set_enableevent(false); //이벤트 비활성화
        		for (var i=0; i<objDataset.getRowCount(); i++) {
        		    objDataset.setColumn(i, strColName, checkValue); //체크박스를 checkValue로 설정
        		}
        		objDataset.set_enableevent(true); //이벤트 활성화
        	}
        };

        // 수정
        this.Button02_onclick = function(obj,e)
        {
        	if(selected.length == 0){
        		alert("수정할 대상을 선택해주세요!");
        	}else if(selected.length > 1){
        		alert("1명만 선택해주세요!");
        	}else{
        		var id = "getModifyTargetInfo";
        		var url = "modifyTargetInfo.do";
        		var reqDs = "";
        		var respDs = "Dataset01=modifyTargetInfo";
        		var callback = "received";
        		var nDataType = "0"
        		var args = "modifyTargetId=" + selected;

        		this.go("Base::userModify.xfdl");

        		this.transaction(id, nexacro.getApplication().CONTEXT + url, reqDs, respDs, args, callback);
        	}
        };

        // 삭제
        this.Button03_onclick = function(obj,e)
        {

        	if(selected.length == 0){
        		alert("삭제할 대상을 선택해주세요!");
        	}else{
        		var confirm = this.confirm("정말 삭제하시겠습니까?");
        		if(confirm){
        			var id = "userDelete";
        			var url = "userDelete.do";
        			var reqDs = "";
        			var respDs = "Dataset00=userList";
        			var callback = "fn_callback";
        			var args = "userIdList=" + selected;

        			this.transaction(id, url, reqDs, respDs, args, callback);
        		}
        	}

        };

        this.fn_callback = function(sId,Code,sErrorMSG)
        {
        	if (Code == 1) {
        		this.alert("삭제했습니다.");
        		this.go("Base::userList.xfdl");
        	} else {
        		this.alert("실패ㅠㅠ");
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid00.addEventHandler("onclick",this.clickHeadCheckBox,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00.addEventHandler("onclick",this.Static02_00_onclick,this);
            this.Dataset00.addEventHandler("oncolumnchanged",this.Dataset00_oncolumnchanged,this);
        };
        this.loadIncludeScript("userList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
