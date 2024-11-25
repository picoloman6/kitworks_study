import { useEffect, useState } from 'react';

import { StBoardField, StBoardItem, StBoardWrapper } from '@styles/board.style';

import { MenuItem } from '@type/board';
import { getMenuItemsApi } from '@apis/board';

const MenuBoard = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // API 호출 함수
  const getMenuItems = async () => {
    const res = await getMenuItemsApi();
    setMenuItems(res);
  };

  useEffect(() => {
    // API 호출
    getMenuItems();
  }, []);

  return (
    <StBoardWrapper>
      <StBoardItem $isHeader={true}>
        <StBoardField $width='10%'>메뉴이름</StBoardField>
        <StBoardField $width='10%'>설명</StBoardField>
        <StBoardField $width='20%'>카테고리</StBoardField>
        <StBoardField $width='30%'>생성일자</StBoardField>
      </StBoardItem>
      {menuItems &&
        menuItems.map((v) => (
          <StBoardItem key={v.menuId} $isHeader={false}>
            <StBoardField $width='10%'>{v.menuName}</StBoardField>
            <StBoardField $width='10%'>{v.desc}</StBoardField>
            <StBoardField $width='20%'>{v.cateogory}</StBoardField>
            <StBoardField $width='30%'>
              {new Date(v.createdAt).toLocaleString()}
            </StBoardField>
          </StBoardItem>
        ))}
    </StBoardWrapper>
  );
};

export default MenuBoard;
