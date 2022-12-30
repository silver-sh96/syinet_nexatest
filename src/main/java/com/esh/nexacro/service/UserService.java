package com.esh.nexacro.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.esh.nexacro.dto.UserDTO;
import com.esh.nexacro.mapper.UserMapper;

@Service("UserService")
public class UserService {
	
private static final Logger log = LoggerFactory.getLogger(UserService.class);
	
	private final UserMapper userMapper;
	
	public UserService(UserMapper userMapper) {
		this.userMapper = userMapper;
	}
	
	// 사용자 조회
	public List<UserDTO> getUserList(){
		List<UserDTO> userList = userMapper.getUserList();
		log.info("service ==> userList  :  {}", userList);
		
		return userList;
	}

	// 사용자 검색
	public List<UserDTO> getUserSearchList(String searchKey, String searchValue){
		List<UserDTO> userList = userMapper.getUserSearchList(searchKey, searchValue);
		log.info("service ==> userList  :  {}", userList);
		
		return userList;
	}
	
	// 사용자 등록 처리
	public int userReg(UserDTO userDto) {
		System.out.println("service - 사용자 등록 처리 진행!!");
		int result = userMapper.userReg(userDto);
		
		return result;
	}
	
	// 아이디 중복 검사
	public int idDupleCheck(String userId) {
		System.out.println("service - 아이디 중복검사 진행!!");
		int result = userMapper.idDupleCheck(userId);
		
		return result;
	}
	
	// 사용자 삭제
	public int userDelete(String userId) {
		int result = userMapper.userDelete(userId);
		log.info("serviceuserId  :  {}", userId);
		return result;
	}
	
	// 선택 사용자 정보 가져오기
	public UserDTO getModifyTargetInfo(String userId){
		UserDTO targetInfo = new UserDTO();
		targetInfo = userMapper.getModifyTargetInfo(userId);
		return targetInfo;
	}
	
	// 사용자 수정
	public int userModify(UserDTO useDto) {
		int result = userMapper.userModify(useDto);
		return result;
	}
}
