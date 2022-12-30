package com.esh.nexacro.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.esh.nexacro.dto.UserDTO;

@Mapper("UserMapper")
public interface UserMapper {

	// 사용자 목록 조회
	public List<UserDTO> getUserList();
	
	// 사용자 목록 검색
	public List<UserDTO> getUserSearchList(@Param("searchKey")String searchKey, @Param("searchValue")String searchValue);
	
	// 사용자 등록 처리
	public int userReg(UserDTO userDto);
	
	// 아이디 중복 검사
	public int idDupleCheck(String userId);
	
	// 사용자 삭제
	public int userDelete(String userId);
	
	// 선택 사용자 정보 가져오기
	public UserDTO getModifyTargetInfo(String userId);
	
	// 사용자 수정
	public int userModify(UserDTO userDto);
}
