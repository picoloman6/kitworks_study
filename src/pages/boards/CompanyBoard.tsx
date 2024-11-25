import { useEffect, useState } from 'react';

import { StBoardField, StBoardItem, StBoardWrapper } from '@styles/board.style';

import { CompanyItem } from '@type/board';
import { getCompanyItemsApi } from '@apis/board';

const CompanyBoard = () => {
  const [companyItems, setCompanyItems] = useState<CompanyItem[]>([]);

  // API 호출 함수
  const getCompanyItems = async () => {
    const res = await getCompanyItemsApi();
    setCompanyItems(res);
  };

  useEffect(() => {
    // API 호출
    getCompanyItems();
  }, []);

  return (
    <StBoardWrapper>
      <StBoardItem $isHeader={true}>
        <StBoardField $width='10%'>이름</StBoardField>
        <StBoardField $width='5%'>부서 수</StBoardField>
        <StBoardField $width='20%'>생성일자</StBoardField>
        <StBoardField $width='20%'>수정일자</StBoardField>
      </StBoardItem>
      {companyItems &&
        companyItems.map((v) => (
          <StBoardItem key={v.companyId} $isHeader={false}>
            <StBoardField $width='10%'>{v.companyName}</StBoardField>
            <StBoardField $width='5%'>{v.departmentCnt}</StBoardField>
            <StBoardField $width='20%'>
              {new Date(v.createdAt).toLocaleString()}
            </StBoardField>
            <StBoardField $width='20%'>
              {new Date(v.modifiedAt).toLocaleString()}
            </StBoardField>
          </StBoardItem>
        ))}
    </StBoardWrapper>
  );
};

export default CompanyBoard;
