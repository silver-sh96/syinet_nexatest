(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"userFirstName\" type=\"STRING\" size=\"256\"/><Column id=\"userMiddleName\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userPw\" type=\"STRING\" size=\"256\"/><Column id=\"userPhone\" type=\"STRING\" size=\"256\"/><Column id=\"userHomePhone\" type=\"STRING\" size=\"256\"/><Column id=\"userEmail\" type=\"STRING\" size=\"256\"/><Column id=\"userZipCode\" type=\"STRING\" size=\"256\"/><Column id=\"userAddr\" type=\"STRING\" size=\"256\"/><Column id=\"userAddrDetail\" type=\"STRING\" size=\"256\"/><Column id=\"userDept\" type=\"STRING\" size=\"256\"/><Column id=\"userRank\" type=\"STRING\" size=\"256\"/><Column id=\"userPosition\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("CONTEXT","/nexacro/");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {

        this.ds_userList_oncolumnchanged = function(obj,e)
        {
        	trace(e.newvalue);
        	console.log(e.newvalue);
        		// chk 컬럼인 경우
        	if(e.columnid == "chk") {
        		// 다른 이벤트가 동작하지 않도록 설정
        		obj.enableevent = false;  //false can stop event temporarily
        		// 변경된 값이 1(체크가 된 경우)인경우
        		if(e.newvalue == '1') {
        			// 1인 경우 Dataset의 chk 값을 Y로 변경
        			obj.setColumn(e.row,"chk",'Y');
        		} else if(e.newvalue == '0') {
        			// 0인 경우 Dataset의 chk 값을 N로 변경
        			obj.setColumn(e.row,"chk",'N');
        		}
        		// 다시 이벤트가 정상 동작하도록 설정
        		obj.enableevent = true;
        	}
        };
        });
		this.checkLicense("");
        
        this.loadPreloadList();

    };
}
)();
