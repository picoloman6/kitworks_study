import { useEffect, useState } from 'react';

import NewBoard from '@components/NewBoard';

import { getCompanyItemsApi } from '@apis/board';

import { ColumnHeader, CompanyItem } from '@type/board';

const CompanyNewBoard = () => {
  const [companyItems, setCompanyItems] = useState<CompanyItem[]>([]);

  // column header 정의
  const columnHeader: ColumnHeader<CompanyItem> = {
    companyName: { width: '10%', label: '이름' },
    departmentCnt: { width: '5%', label: '부서 수' },
    createdAt: { width: '20%', label: '생성일자', type: 'date' },
    modifiedAt: { width: '20%', label: '수정일자', type: 'date' }
  };

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
    <NewBoard
      header={columnHeader}
      items={companyItems}
      keys={['companyName', 'departmentCnt', 'createdAt', 'modifiedAt']}
      idKey='companyId'
    />
  );
};

export default CompanyNewBoard;
