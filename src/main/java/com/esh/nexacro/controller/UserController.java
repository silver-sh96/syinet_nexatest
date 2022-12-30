package com.esh.nexacro.controller;

import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.esh.nexacro.dto.UserDTO;
import com.esh.nexacro.service.UserService;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;


@Controller
public class UserController {
	
	private static final Logger log = LoggerFactory.getLogger(UserController.class);

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value = "/userList.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void getUserList(HttpServletRequest request, HttpServletResponse response, UserDTO user) throws Exception {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();
		PlatformData reqData = req.getData();
		VariableList reqVarList = reqData.getVariableList();
		
		reqVarList.add("ErrorCode", 0);
		reqVarList.add("ErrorMsg" , "성공");
		
		PlatformData pdata = new PlatformData();
		DataSet ds = new DataSet("userList");
		ds.addColumn("chk", DataTypes.STRING, 255);
		ds.addColumn("아이디", DataTypes.STRING, 255);
		ds.addColumn("부서", DataTypes.STRING, 255);
		ds.addColumn("이름", DataTypes.STRING, 255);
		ds.addColumn("직급", DataTypes.STRING, 255);
		ds.addColumn("직책", DataTypes.STRING, 255);
		ds.addColumn("이메일", DataTypes.STRING, 255);
		ds.addColumn("연락처", DataTypes.STRING, 255);	
		
		int row = 0;
		
		List<UserDTO> userList = userService.getUserList();
		log.info("userList  :  {}", userList);
		
		for(int i=0; i < userList.size(); i++) {
			row = ds.newRow();
			ds.set(row, "chk", "N");
			ds.set(row, "아이디", userList.get(i).getUserId());
			ds.set(row, "부서", userList.get(i).getUserDept());
			ds.set(row, "이름", userList.get(i).getUserName());
			ds.set(row, "직급", userList.get(i).getUserRank());
			ds.set(row, "직책", userList.get(i).getUserPosition());
			ds.set(row, "이메일", userList.get(i).getUserEmail());
			ds.set(row, "연락처", userList.get(i).getUserPhone());
		}
		
		pdata.addDataSet(ds);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		pRes.setData(pdata);
		pRes.sendData();
	}
	
	@RequestMapping(value = "/Base/userList.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void getUserSearchList(HttpServletRequest request, HttpServletResponse response, UserDTO user
			  , @RequestParam(name = "searchKey", required = false, defaultValue = "user_dept") String searchKey
			  , @RequestParam(name = "searchValue", required = false) String searchValue) throws Exception {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();
		PlatformData reqData = req.getData();
		VariableList reqVarList = reqData.getVariableList();
		
		reqVarList.add("ErrorCode", 0);
		reqVarList.add("ErrorMsg" , "성공");
		
		String SearchCondition = reqVarList.getString("SearchCondition");
		String SearchKeyword = reqVarList.getString("SearchKeyword");
		
		if(null != SearchCondition) {
			
		}
		
		if(null != SearchKeyword) {
			searchKey = SearchCondition;
			searchValue = SearchKeyword;
		}
		
		if("undefined".equals(SearchKeyword)){
			searchKey = "";
			searchValue = "";
		}
		
		if(searchKey.equals("userDept")) {
			searchKey = "user_dept";
		} else if(searchKey.equals("userName")) {
			searchKey = "user_name";
		} else if(searchKey.equals("userRank")) {
			searchKey = "user_rank";
		} else {
			searchKey = "user_position";
		}
		
		log.info("Controller - searchKey   :   {}", searchKey);
		log.info("Controller - searchValue   :   {}", searchValue);
		
		PlatformData pdata = new PlatformData();
		DataSet ds = new DataSet("userList");
		ds.addColumn("chk", DataTypes.STRING, 255);
		ds.addColumn("아이디", DataTypes.STRING, 255);
		ds.addColumn("부서", DataTypes.STRING, 255);
		ds.addColumn("이름", DataTypes.STRING, 255);
		ds.addColumn("직급", DataTypes.STRING, 255);
		ds.addColumn("직책", DataTypes.STRING, 255);
		ds.addColumn("이메일", DataTypes.STRING, 255);
		ds.addColumn("연락처", DataTypes.STRING, 255);	
		
		int row = 0;
		
		List<UserDTO> userList = userService.getUserSearchList(searchKey, searchValue);
		log.info("userList  :  {}", userList);
		
		for(int i=0; i < userList.size(); i++) {
			row = ds.newRow();
			ds.set(row, "chk", "N");
			ds.set(row, "아이디", userList.get(i).getUserId());
			ds.set(row, "부서", userList.get(i).getUserDept());
			ds.set(row, "이름", userList.get(i).getUserName());
			ds.set(row, "직급", userList.get(i).getUserRank());
			ds.set(row, "직책", userList.get(i).getUserPosition());
			ds.set(row, "이메일", userList.get(i).getUserEmail());
			ds.set(row, "연락처", userList.get(i).getUserPhone());
		}
		
		pdata.addDataSet(ds);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		pRes.setData(pdata);
		pRes.sendData();
	}

	@RequestMapping(value = "/Base/userReg.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void userReg(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();
		PlatformData reqData = req.getData();
		VariableList reqVarList = reqData.getVariableList();
				
		UserDTO userDto = new UserDTO();
		
		userDto.setUserFirstName(reqVarList.getString("userFirstNameEdit"));
		userDto.setUserMiddleName(reqVarList.getString("userMiddleNameEdit"));
		userDto.setUserName(reqVarList.getString("userFirstNameEdit") + reqVarList.getString("userMiddleNameEdit"));
		userDto.setUserId(reqVarList.getString("userIdEdit"));
		userDto.setUserPw(reqVarList.getString("userPwEdit"));
		userDto.setUserPhone(reqVarList.getString("userPhoneEdit"));
		userDto.setUserHomePhone(reqVarList.getString("userHomePhoneEdit"));
		userDto.setUserZipCode(reqVarList.getString("userZipCodeEdit"));
		userDto.setUserAddr(reqVarList.getString("userAddrEdit"));
		userDto.setUserAddrDetail(reqVarList.getString("userAddrDetailEdit"));
		userDto.setUserEmail(reqVarList.getString("userEmailEdit"));
		userDto.setUserPosition(reqVarList.getString("userPostionCombo"));
		userDto.setUserDept(reqVarList.getString("userDeptCombo"));
		userDto.setUserRank(reqVarList.getString("userRankCombo"));
		
		  int resultCode = userService.userReg(userDto);
		  if(resultCode==1){
			  reqVarList.add("ErrorCode", 1);
		  }else{
			  reqVarList.add("ErrorCode", 0);
		  }
		  
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML,"UTF-8");
			res.setData(reqData); 
			res.sendData();
	}
	
	@RequestMapping(value = "/Base/idDupleCheck.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void idDupleCheck(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();
		PlatformData reqData = req.getData();
		VariableList reqVarList = reqData.getVariableList();
		
		String userId = reqVarList.getString("userId");
		
		  int resultCode = userService.idDupleCheck(userId);
		  if(resultCode == 0){
			  reqVarList.add("ErrorCode", 1);
		  }else{
			  reqVarList.add("ErrorCode", 0);
		  }
		  
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML,"UTF-8");
			res.setData(reqData); 
			res.sendData();
	}
	
	@RequestMapping(value = "/postcode.do")
	public String getPostInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		return "postcode";	
	}
	
	@RequestMapping(value = "/Base/userDelete.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void userDelete(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();
		PlatformData reqData = req.getData();
		VariableList reqVarList = reqData.getVariableList();
		
		String userIdList = reqVarList.getString("userIdList");
		log.info("userIdList :  {}", userIdList);
		
		String userId[] = userIdList.split(",");
		for(String id : userId) {
			int resultCode = userService.userDelete(id);
			if(resultCode == 1){
				reqVarList.add("ErrorCode", 1);
			}else{
				reqVarList.add("ErrorCode", 0);
			}
		}
		
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML,"UTF-8");
		res.setData(reqData); 
		res.sendData();
	}
	
	@RequestMapping(value = "/modifyTargetInfo.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void getModifyTargetInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();
		PlatformData reqData = req.getData();
		VariableList reqVarList = reqData.getVariableList();
		
		PlatformData respdata = new PlatformData();
		VariableList out_resdata = respdata.getVariableList();
		
		String userId = reqVarList.getString("modifyTargetId");
		log.info("userId :  {}", userId);
		
		UserDTO targetInfo = new UserDTO();
		targetInfo = userService.getModifyTargetInfo(userId);
		log.info("targetInfo :  {}", targetInfo);
		
		DataSet ds = new DataSet("modifyTargetInfo");
		ds.addColumn("userFirstName", DataTypes.STRING, 255);
		ds.addColumn("userMiddleName", DataTypes.STRING, 255);
		ds.addColumn("userId", DataTypes.STRING, 255);
		ds.addColumn("userPw", DataTypes.STRING, 255);
		ds.addColumn("userPhone", DataTypes.STRING, 255);
		ds.addColumn("userHomePhone", DataTypes.STRING, 255);
		ds.addColumn("userEmail", DataTypes.STRING, 255);
		ds.addColumn("userZipCode", DataTypes.STRING, 255);
		ds.addColumn("userAddr", DataTypes.STRING, 255);
		ds.addColumn("userAddrDetail", DataTypes.STRING, 255);
		ds.addColumn("userDept", DataTypes.STRING, 255);
		ds.addColumn("userRank", DataTypes.STRING, 255);
		ds.addColumn("userPosition", DataTypes.STRING, 255);
		
		int row = 0;
		row = ds.newRow();
		ds.set(row, "userFirstName", targetInfo.getUserFirstName());
		ds.set(row, "userMiddleName", targetInfo.getUserMiddleName());
		ds.set(row, "userId", targetInfo.getUserId());
		ds.set(row, "userPw", targetInfo.getUserPw());
		ds.set(row, "userPhone", targetInfo.getUserPhone());
		ds.set(row, "userHomePhone", targetInfo.getUserHomePhone());
		ds.set(row, "userEmail", targetInfo.getUserEmail());
		ds.set(row, "userZipCode", targetInfo.getUserZipCode());
		ds.set(row, "userAddr", targetInfo.getUserAddr());
		ds.set(row, "userAddrDetail", targetInfo.getUserAddrDetail());
		ds.set(row, "userDept", (targetInfo.getUserDept()));
		ds.set(row, "userRank", targetInfo.getUserRank());
		ds.set(row, "userPosition", targetInfo.getUserPosition());
		
		respdata.addDataSet(ds);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		pRes.setData(respdata);

		pRes.sendData();
	}
	
	@RequestMapping(value = "/Base/userModify.do", produces="application/xml; charset=UTF8", method = {RequestMethod.POST, RequestMethod.GET})
	@ResponseBody
	public void userModify(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		req.receiveData();
		PlatformData reqData = req.getData();
		VariableList reqVarList = reqData.getVariableList();
				
		UserDTO userDto = new UserDTO();
		
		userDto.setUserFirstName(reqVarList.getString("userFirstNameEdit"));
		userDto.setUserMiddleName(reqVarList.getString("userMiddleNameEdit"));
		userDto.setUserName(reqVarList.getString("userFirstNameEdit") + reqVarList.getString("userMiddleNameEdit"));
		userDto.setUserId(reqVarList.getString("userIdEdit"));
		userDto.setUserPw(reqVarList.getString("userPwEdit"));
		userDto.setUserPhone(reqVarList.getString("userPhoneEdit"));
		userDto.setUserHomePhone(reqVarList.getString("userHomePhoneEdit"));
		userDto.setUserZipCode(reqVarList.getString("userZipCodeEdit"));
		userDto.setUserAddr(reqVarList.getString("userAddrEdit"));
		userDto.setUserAddrDetail(reqVarList.getString("userAddrDetailEdit"));
		userDto.setUserEmail(reqVarList.getString("userEmailEdit"));
		userDto.setUserPosition(reqVarList.getString("userPostionCombo"));
		userDto.setUserDept(reqVarList.getString("userDeptCombo"));
		userDto.setUserRank(reqVarList.getString("userRankCombo"));
		
		  int resultCode = userService.userModify(userDto);
		  if(resultCode==1){
			  reqVarList.add("ErrorCode", 1);
		  }else{
			  reqVarList.add("ErrorCode", 0);
		  }
		  
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML,"UTF-8");
			res.setData(reqData); 
			res.sendData();
	}
	
}
