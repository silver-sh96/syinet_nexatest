<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style type="text/css">

table {
	border-collapse: separate;
	border-spacing: 10px 10px;
	table-layout: fixed;
	text-align: center;
}

</style>

</head>
<body>
	<h2>데이터 조회</h2>
	<table>
		<thead>
			<tr>
				<th scope="col" style="width: 50px; height: 30px; margin-left: 20px;" >
					<input type="checkbox" id="allSelect" />
				</th>
				<th scope="col" style="display: none;">아이디</th>
				<th scope="col">부서</th>
				<th scope="col">이름</th>
				<th scope="col">직급</th>
				<th scope="col">직책</th>
				<th scope="col">이메일</th>
				<th scope="col">연락처</th>
			</tr>
		</thead>
		<tbody>
			<c:if test="${empty userList}">
				<tr>
					<td colspan="7" style="text-align: center;">검색 결과가 없습니다.</td>
				</tr>
			</c:if>
			<c:forEach items="${userList}" var="u">
				<tr>
					<td>
						<input type="checkbox" class="userSelect" name="checkedUser" value="${u.userId}"/>
					</td>
					<td class="targetId" style="display: none;">${u.userId}</td>
					<td>${u.userDept}</td>
					<td><a class="targetName">${u.userName}</a></td>
					<td>${u.userRank}</td>
					<td>${u.userPosition}</td>
					<td>${u.userEmail}</td>
					<td>${u.userPhone}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	
</body>
</html>