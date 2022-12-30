(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("postcodedaumapi_popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("postcodedaumapi_popup.xfdl", function() {
        this.postcodepopup_onload = function(obj,e)
        {
        	var strURL = nexacro.Application.xadl;

        	//html 파일 webbrowser 컴포넌트 연결 url
        	var strPostUrl = "http://192.168.0.120:8080/nexacro/postcode.do";
        	this.WebBrowser00.set_url(strPostUrl);
        };

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	var addData = e.userdata.split(",");

        	if(addData.length > 1)
        	{
        		if(!this.opener.gfn_isNull(addData[0]))
        		{
        			this.opener.postcode = addData[0]
        			this.opener.address1 = addData[1] + " " + addData[3];
        			this.opener.address2 = addData[2];
        			this.close();
        		}
        		else
        		{
        			this.close('x');
        		}

        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.postcodepopup_onload,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };
        this.loadIncludeScript("postcodedaumapi_popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
